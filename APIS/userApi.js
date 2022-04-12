//create router to handle user api reqs
const exp = require("express");
const userApp = exp.Router();
const expressAsyncHandler = require("express-async-handler");
//import bcryptjs for password hashing
const bcryptjs = require("bcryptjs");
//import jsonwebtoken to create token
const jwt = require("jsonwebtoken");
require("dotenv").config();
const verifyToken=require('./middlewares/verifyToken')

var cloudinary = require("cloudinary").v2;
const { CloudinaryStorage } = require("multer-storage-cloudinary");
const multer = require("multer");

//configure cloudinary
cloudinary.config({
  cloud_name: process.env.CLOUD_NAME,
  api_key: process.env.API_KEY,
  api_secret: process.env.API_SECRET,
  secure: true,
});

//config cloudinary storage
const cloudinaryStorage = new CloudinaryStorage({
  cloudinary: cloudinary,
  params: async (req, file) => {
    return {
      folder: "vnr2022",
      public_id: file.fieldname + "-" + Date.now(),
    };
  },
});

//configure multer
var upload = multer({ storage: cloudinaryStorage });

//to extract body of request object
userApp.use(exp.json());
userApp.use(exp.urlencoded());

//USER API Routes

//create route to handle '/getusers' path
userApp.get(
  "/getusers",verifyToken,
  expressAsyncHandler(async (request, response) => {
    //get userCollectionObject
    let userCollectionObject = request.app.get("userCollectionObject");
    //get all users
    let users = await userCollectionObject.find().toArray();
    //send res
    response.send({ message: "Users list", payload: users });
  })
);

//create route to user login
userApp.post(
  "/login",
  expressAsyncHandler(async (request, response) => {
    //get userCollectionObject
    let userCollectionObject = request.app.get("userCollectionObject");
    //get user credentials obj from client
    let userCredObj = request.body;
    //seacrh for user by username
    let userOfDB = await userCollectionObject.findOne({
      username: userCredObj.username,
    });
    //if username not existed
    if (userOfDB == null) {
      response.send({ message: "Invalid user" });
    }
    //if username existed
    else {
      //compare passwords
      let status = await bcryptjs.compare(
        userCredObj.password,
        userOfDB.password
      );
      //if passwords not matched
      if (status == false) {
        response.send({ message: "Invalid password" });
      }
      //if passwords are matched
      else {
        //create token
        let token = jwt.sign(
          { username: userOfDB.username },
          process.env.SECRET_KEY,
          { expiresIn: 10 }
        );
        //send token
        response.send({
          message: "success",
          payload: token,
          userObj: userOfDB,
        });
      }
    }
  })
);

//create a route to 'create-user'
userApp.post(
  "/create-user",
  upload.single("photo"),
  expressAsyncHandler(async (request, response) => {
    //get link from cloudinary
    //console.log(request.file.path);
      //get userCollectionObject
      let userCollectionObject = request.app.get("userCollectionObject");
      //get userObj as string from client and convert into object
      let newUserObj = JSON.parse(request.body.userObj);
      //seacrh for user by username
      let userOfDB = await userCollectionObject.findOne({
        username: newUserObj.username,
      });
      //if user existed
      if (userOfDB !== null) {
        response.send({
          message: "Username has already taken..Plz choose another",
        });
      }
      //if user not existed
      else {
        //hash password
        let hashedPassword = await bcryptjs.hash(newUserObj.password, 6);
        //replace plain password with hashed password in newUserObj
        newUserObj.password = hashedPassword;
        //add profile image link to newUserObj
        newUserObj.profileImg=request.file.path;
        //removw photo property
        delete newUserObj.photo;
        //insert newUser
        await userCollectionObject.insertOne(newUserObj);
        //send response
        response.send({ message: "New User created" });
      }
  })
);


//private route for testing
userApp.get('/test',verifyToken,(request,response)=>{
  response.send({message:"This reply is from private route"})
})

//create a route to modify user data

//create a route to delete user by username

//export userApp
module.exports = userApp;
