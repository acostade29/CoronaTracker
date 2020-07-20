const express = require('express');
const app = express();
const logger = require('morgan');
const port = process.env.PORT || 3001;

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



app.listen(port, ()=> {
    console.log(`Express is listening on port ${port}.`)
});
