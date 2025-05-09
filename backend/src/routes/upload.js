
// export default router;
const { Router } = require("express");
const { upload } = require("../middleware/upload");
const { uploadImage } = require("../controller/upload");

const router = Router();

router.post("/", upload.array("image", 10), uploadImage);

module.exports = router;