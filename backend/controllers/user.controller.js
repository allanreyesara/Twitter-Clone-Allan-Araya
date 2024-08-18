import User from "../models/user.js";

export const getUserProfile = async (req, res) =>{
    const { username } = req.params;

    try {
        const user = await User.findOne({ username }).select("-password");
        if(!user) return res.status(404).json({ message: "User not found" });
        
        res.status(200).json(user);

    } catch (err) {
        console.log("Error in getUserProfile: ", error.message)
        res.status(500).json({ error: err.message})
    }
};

export const followUnfollowUser = async (req, res) => {
    try {   
        const { id } = req.params;
        const userToModify = await User.findById(id);
        const currentUser = await User.findById(req.user._id);

        if(id === req.user._id.toString()) {
            return res.status(400).json({ error: "You cannot follow/unfollow yourself" })
        }

        if(!userToModify || !currentUser)  return res.status(400).json({ error: "User not found"})


        const isFollowing = currentUser.following.includes(id);

        if(isFollowing){
            //Unfollow
            await User.findByIdAndUpdate(id, { $pulll: { followers: req.user._id }})
            await User.findByIdAndUpdate(req.user._id, { $pull: { following: id }})
            res.status(200).json({ message: "User unfollowed succesfully" })
        }else{
            //Follow
            await User.findByIdAndUpdate(id, { $push: { followers: req.user._id }})
            await User.findByIdAndUpdate(req.user._id, { $push: { following: id }})
            
            const newNotification = new Notification({
                type: "follow",
                from: req.user._id,
                to: userToModify._id
            });

            await newNotification.save();

            //TODO return the id of the user as a response
            
            res.status(200).json({ message: "User followed succesfully" })
        }


    } catch (err) {
        console.log("Error in followUnfollowUser: ", err.message)
        res.status(500).json({ error: "Internal server error "})

    }
}

export const getSuggestedUsers = async (req, res) => {
    try {
        const userId = req.user._id;

        const usersFollowedByMe = await User.findById(userId).select("following")

        const users = await User.aggregate([
            {
                $match:{
                    _id: {$me:userId}
                }
            },
            {$sample:{size:10}}
        ])

        const filteredUsers = users.filter(user=>!usersFollowedByMe.following.includes(user._id))
        const suggestedUsers = filteredUsers.slice(0,4)

        suggestedUsers.forEach((user) => (user.password = null));

        res.status(200).json({ suggestedUsers })
    } catch (err){

    }
}