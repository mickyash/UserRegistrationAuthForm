require('./config/db');
const express = require('express')
const cors = require('cors');
const path = require('path')



const app = require('express')();
const port = process.env.PORT ||5000;

app.use(cors());


const allowedOrigins = ['https://user-registration-auth-formm.vercel.app'];

app.use(
  cors({
    origin: function (origin, callback) {
      if (!origin || allowedOrigins.includes(origin)) {
        callback(null, true);
      } else {
        callback(new Error('Not allowed by CORS'));
      }
    },
    methods: 'POST, GET',
    credentials: true,
  })
);



app.use(express.static(path.join(__dirname, '../frontend')));

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '../frontend/index.html'));
});


const bodyParser = require('express').json;
app.use(bodyParser());






const UserRouter = require('./api/user')
app.use('/user',UserRouter)






app.listen(port, ()=>{
    console.log(`server runnign on port ${port}`)
})
