# Twitter Clone using MERN. 

## You can access the live page [here](https://twitter-clone-allan-araya.onrender.com), loading can take a minute or two since the server has to initialize:   

https://twitter-clone-allan-araya.onrender.com 


## Setup
-Clone the code

```
git clone allanreyesara/Twitter-Clone-Allan-Araya
```

-Build

```
npm install && npm install --prefix frontend && npm run build --prefix frontend
```
-Start

# Database setup

You will need accounts in `https://mongodb.com` and `https://cloudinary.com/` the you need to create an .env file in the root folder with this format:

```
MONGO_URI=<MONGO_URI>
PORT=<PORT:5000>
JWT_SECRET=<JWT_SECRET>
NODE_ENV=development

CLOUDINARY_CLOUD_NAME=<CLOUDINARY_CLOUD_NAME>
CLOUDINARY_CLOUD_KEY=<CLOUDINARY_CLOUD_KEY>
CLOUDINARY_API_SECRET=<CLOUDINARY_API_SECRET>
```

# FrontEnd

```
cd frontend
```
```
npm run dev
```

# Backend

```
cd backend
```
```
npm start
```




## Skills used in the project:

⚛️ Tech Stack: React.js, MongoDB, Node.js, Express, Tailwind

🔐 Authentication with JSONWEBTOKENS (JWT)

🔥 React Query for Data Fetching, Caching etc.

👥 Suggested Users to Follow

✍️ Creating Posts

🗑️ Deleting Posts

💬 Commenting on Posts

❤️ Liking Posts

🔒 Delete Posts (if you are the owner)

📝 Edit Profile Info

🖼️ Edit Cover Image and Profile Image

📷 Image Uploads using Cloudinary

🔔 Send Notifications
