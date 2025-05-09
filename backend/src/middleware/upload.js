

const multer = require("multer");
const { CloudinaryStorage } = require("multer-storage-cloudinary");
const cloudinary = require("../config/cloudinary");

// Configure Cloudinary storage
const storage = new CloudinaryStorage({
  cloudinary: cloudinary,
  params: {
    folder: "book_store",
    allowed_formats: ["jpg", "png", "jpeg", "gif", "webp"],
    transformation: [{ width: 800, crop: "limit" }]
  }
});

// Create Multer upload middleware
const upload = multer({ 
  storage: storage,
  limits: { fileSize: 5 * 1024 * 1024 } // 5MB file size limit
});

// Export the configured upload middleware
module.exports = {
    upload
}
// Debug: Kiểm tra cloudinary

