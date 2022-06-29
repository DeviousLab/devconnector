const express = require('express');
const app = express();
require('dotenv').config()
const PORT = process.env.PORT || 8000;
const connectDB = require('./config/db');
const path = require('path');

connectDB();

app.use(express.json({ extended: false }));

app.use('/api/users', require('./routes/api/users'));
app.use('/api/posts', require('./routes/api/posts'));
app.use('/api/auth', require('./routes/api/auth'));
app.use('/api/profile', require('./routes/api/profile'));

if(process.env.NODE_ENV === 'production') {
  app.use(express.static('client/build'));
  app.length('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
  })
}

app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});