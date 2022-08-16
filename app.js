const express = require('express');
const app = express();
const path=require('path');
const helmet=require('helmet');
const port=3000;

//use these middleware for apis
app.use(helmet());
app.use(express.json());
app.use(express.urlencoded({extended:false}));

//give static path to express
app.use(express.static('public'));

app.set('view engine','ejs');
app.use(express.static(path.join(__dirname, 'views')));

//use validate on path
//app.get('/',validateUser);

//response to all request
// app.all('*',(req,res)=>{
//     res.send('<h2>Express running</h2>')
// });

//import routes from router file
const routes=require('./routes/router');
const userRoutes=require('./routes/user');
app.use('/',routes);
app.use('/user',userRoutes);

app.listen(port, () => {
    console.log(`Server started on ${port}`);
});