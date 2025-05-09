const express = require("express")
const cors = require("cors")
const app = express()
app.use(express.json())
app.use(cors())







const imageRoute = require("./routes/image.route.js");
app.use("/api/image", imageRoute);




const image = require("./routes/upload.js");
app.use("/api/images", image);
module.exports = app;
