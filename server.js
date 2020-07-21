const express = require('express');
const app = express();
const logger = require('morgan');
const port = process.env.PORT || 3001;
const path = require('path');
const favicon = require('serve-favicon');

require('dotenv').config();
require('./config/database');


const cors = require('cors')
const userRouter = require('./routes/users');
const commentRouter =  require('./routes/comments')


app.use(cors());
app.use(logger('dev'));
app.use(express.json());



app.use('/api/users', userRouter);
app.use('/api/comments', commentRouter);


// Configure both serve-favicon & static middlewares
// to serve from the production 'build' folder
app.use(favicon(path.join(__dirname, 'build', 'favicon.ico')));
app.use(express.static(path.join(__dirname, 'build')));
app.get('/*', function(req, res) {
    res.sendFile(path.join(__dirname, 'build', 'index.html'));
  });

app.listen(port, ()=> {
    console.log(`Express is listening on port ${port}.`)
});

