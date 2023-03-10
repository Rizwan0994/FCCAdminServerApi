const mongoose = require('mongoose');
require('dotenv').config();
mongoose.set('strictQuery', false);
const connectDB = async () => {
  try {
    const conn = await mongoose.connect(process.env.MONGO_URI, {
   //   useNewUrlParser: true,
     // useCreateIndex: true,
      //useFindAndModify: false,
      //useUnifiedTopology: true
    });

    console.log(`MongoDB Connected: ${conn.connection.host}`);
  } catch (err) {
    console.error(err);
    process.exit(1);
  }
};

module.exports = connectDB;
