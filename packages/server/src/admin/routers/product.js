const router = require("express").Router();
const { multerUpload } = require("../../middleware/multer");
const { product } = require("../controllers/index");

router.post("/addProd", product.addProduct);
router.post(
  "/single-uploaded/:id",
  multerUpload.single("file"),
  product.productPic
);
router.get("/list", product.productList);

module.exports = router;
