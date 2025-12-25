const { default: mongoose } = require("mongoose");

const Contact =
  mongoose.models.Contact ||
  mongoose.model("Contact", {
    name: String,
    email: String,
    subject: String,
    projectType: String,
    message: String,
  });

export default Contact;
