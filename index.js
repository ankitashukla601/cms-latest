const errorMiddleware = require("./Errors/ErrorMiddleware");
const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const serverConnection = require("./Connection");
const mongoose = require("mongoose");
const dotenv= require('dotenv')
dotenv.config()
const nodemailer = require('nodemailer');
const pageRoute = require("./Routes/Pages");
const loginRoute = require("./Routes/LoginRoute");
const menuRoute = require("./Routes/MenuRoute");
const subMenuRoute = require("./Routes/SubmenuRoute");
const menuGroupRoute = require("./Routes/MenuGroupRoute");
const SliderFileupload = require("./Routes/SliderFileupload");
const videoRoute = require("./Routes/VideoRoute");
const settingRoute = require("./Routes/VideoRoute");
const videoGalleryRoute = require("./Routes/VideoGalleryRoutes");
const manageAlbumRoute = require("./Routes/MangeAlbumRoute");
const HomesliderRoute = require("./Routes/HomeSliderRoutes");
const sliderRoute = require("./Routes/SliderRoute");
const categoryRoute = require("./Routes/CategoryRoute");
const blogRoute = require("./Routes/BlogRoute");
const mediauploadRoute = require("./Routes/MediafileuploadRoute");
const MediamainPageRoute = require("./Routes/MediaMainPageRoute");
const dashboardCount = require("./Routes/DashboardRotes");
const homeslidreroute2 = require("./Routes/HomeSliderRoute2");
const BlogUpload = require("./Routes/BlogUpload");
const FormBuilderRoute= require('./Routes/FormBuilderRoute')
const UploadAlbum = require("./Routes/AlbumUploadRoute");
const GeneralSetting= require('./Routes/GeneralSettingRoute')
const GlobalBlogRoute = require('./Routes/GlobalBlogRoute')
const GlobalProductRoute = require('./Routes/GlobalProductRoutes')
const GlobalSmtpRoute = require('./Routes/GlobalSmtpRoute')
const GlobalImgGalleryRoute = require('./Routes/GlobalImgGalleryRoute')
const TemplateRoute = require('./Routes/TemplateRoute')
const NewsletterRoute= require('./Routes/NewsletterRoute')
const WidgetRoute= require('./Routes/WidgetThemeRoute')
const SubscriberRoute= require('./Routes/SubscriberRoute')
const CustomThemeRoute= require('./Routes/CustomThemeRoute')
const CommentRoutes = require('./Routes/CommentRoute');
const NodemailerRoutes = require('./Routes/NodeMailRoute');
const contactRoutes = require('./Routes/ContactFormRoute');
const app = express();
serverConnection();
app.use(bodyParser.json());


app.use(cors());

// Your other middleware and routes here
app.use(express.json());

// const start = async () => {
//   try {
//     await mongoose.connect(
//       "mongodb+srv://developerscorpio:cFBiICJCSvnvRpxk@cmsezee.amw3ixf.mongodb.net/"
//     );
//     console.log("Server connected to MongoDb!");
//   } catch (err) {
//     console.error(err);
//   }
// };

// start();

// const transporter = nodemailer.createTransport({
// service:"gmail",  port: 587
//   ,
//   auth: {
//     user: 'shuklaankita012002@gmail.com',
//     pass: 'lrgo jafg qtkz bmmu'
// }
// });

// app.post('/send-email', (req, res) => {
//   const { to, subject, text } = req.body;

//   const mailOptions = {
//     to,
//     subject,
//     text,
//   };

//   transporter.sendMail(mailOptions, (error, info) => {
//     if (error) {
//       return res.status(500).send(error.toString());
//     }
//     res.status(200).send('Email sent: ' + info.response);
//   });
// });

// app.use(bodyParser.urlencoded({
//   extended: true
// }));
// app.use(bodyParser.json())
app.use(errorMiddleware);
// Serve static files from the "images" directory
app.use("/Images", express.static("Images"));
app.use("/api", loginRoute);
app.use("/api", pageRoute);
app.use("/api", menuRoute);
app.use("/api", subMenuRoute);
app.use("/api", menuGroupRoute);
app.use("/api", SliderFileupload);
app.use("/api", videoRoute);
app.use("/api", settingRoute);
app.use("/api", videoGalleryRoute);
app.use("/api", manageAlbumRoute);
app.use("/api", HomesliderRoute);
app.use("/api", sliderRoute);
app.use("/api", categoryRoute);
app.use("/api", blogRoute);
app.use("/api", mediauploadRoute);
app.use("/api", MediamainPageRoute);
app.use("/api", dashboardCount);
app.use("/api", homeslidreroute2);
app.use("/api", BlogUpload);
app.use("/api", UploadAlbum);
app.use("/api",FormBuilderRoute)
app.use("/api",GeneralSetting)
app.use("/api",GlobalBlogRoute)
app.use("/api",GlobalProductRoute)
app.use("/api",GlobalSmtpRoute)
app.use("/api",GlobalImgGalleryRoute)
app.use("/api",TemplateRoute)
app.use("/api",TemplateRoute)
app.use("/api",NewsletterRoute)
app.use("/api",WidgetRoute)
app.use("/api",SubscriberRoute)
app.use("/api",CustomThemeRoute)
app.use("/api",CommentRoutes)
app.use("/api",NodemailerRoutes)
app.use("/api",contactRoutes)


//there should be the 
const port = process.env.PORT || 7100;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
