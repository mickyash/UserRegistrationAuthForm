require('./config/db');
const cors = require('cors');

const app = require('express')();
const port = process.env.PORT ||5000;

app.use(cors());


app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', 'https://user-registration-auth-form-e28x.vercel.app');
    res.setHeader('Access-Control-Allow-Methods', 'POST, GET');
    res.setHeader('Access-Control-Allow-Credentials', 'true');
    next();
  });
  


// const corsOptions = {
//     origin: 'https://user-registration-auth-form-e28x.vercel.app',
//     methods: 'POST,GET',
//     credentials: true,
//   };
  
  app.use(cors(corsOptions));


const bodyParser = require('express').json;
app.use(bodyParser());



const UserRouter = require('./api/user')
app.use('/user',UserRouter)






app.listen(port, ()=>{
    console.log(`server runnign on port ${port}`)
})
