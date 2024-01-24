const Contact = require("../models/contact-model");
const contactForm = async (req, res) => {
  try {
    const resp = req.body;
    await Contact.create(resp);
    return res.status(200).json({
      message: "Message Send Successfully",
    });
  } catch (error) {
    res.status(500).send({
      message: "Message Not Delivered",
    });
  }
};

module.exports = contactForm;
