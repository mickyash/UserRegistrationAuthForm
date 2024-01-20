require('./config/db');
const cors = require('cors');
const bodyParser = require('express');

const app = require('express')();
const port = process.env.PORT ||5000;

app.use(cors());

app.use(bodyParser.json());




const UserRouter = require('./api/user')
app.use('/user',UserRouter)



app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).send('Something went wrong!');
  });


app.listen(port, ()=>{
    console.log(`server runnign on port ${port}`)
})
