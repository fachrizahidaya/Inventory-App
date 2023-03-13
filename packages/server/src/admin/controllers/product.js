const db = require("../../models");
const product = db.Product;

module.exports = {
  addProduct: async (req, res) => {
    try {
      const { name, description } = req.body;
      const response = await product.create({
        name,
        description,
      });
      res.status(200).send(response);
    } catch (err) {
      res.status(400).send(err);
    }
  },

  productList: async (req, res) => {
    try {
      const data = await product.findAll({
        // attributes: ["name", "description", "picture"],
      });
      res.status(200).send(data);
    } catch (err) {
      res.status(400).send(err);
    }
  },

  productPic: async (req, res) => {
    try {
      let fileUploaded = req.file;
      await product.update(
        {
          picture: `Public/${fileUploaded.filename}`,
        },
        {
          where: {
            id: req.params.id,
          },
        }
      );
      const getPicture = await product.findOne({
        where: {
          id: req.params.id,
        },
        raw: true,
      });
      res.status(200).send({
        id: getPicture.id,
        picture: getPicture.picture,
      });
    } catch (err) {
      res.status(400).send(err);
    }
  },
};
