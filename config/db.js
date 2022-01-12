const mongoose = require("mongoose");

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI, {
      useNewUrlParser: true, useUnifiedTopology: true });

    console.log("MongoDB Conneccion Exitosa 👍");
  } catch (error) {
    console.log("MongoDB Conneccion Fallida");
    process.exit(1);
  }
};

module.exports = connectDB;
