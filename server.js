
const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const cors = require('cors');
const router = express.Router();
const User = require('./models/user');
const connectDB = require('./config/db');
app.use(bodyParser.json());
app.use(cors());
connectDB();

// Get all users
app.get('/api/users', async (req, res) => {
  try {
    const users = await User.find();
    res.json(users);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
});


//login signup routes...........
const authRoutes = require('./routes/auth');
const userRoutes = require('./routes/users');

app.use('/api/auth', authRoutes);
app.use('/api/signup', userRoutes);



const port = process.env.EXPRESS_PORT || 4000;
app.listen(port, () => {
    console.log("port" + port);
});
