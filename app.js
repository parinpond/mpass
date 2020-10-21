const express = require('express');
const app = express();
const bodyParser = require('body-parser')
const authRoute = require("./routes/auth");
app.use(express.json());
app.use(authRoute);
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }));
app.use((req,res,next)=>{
    res.header('Access-Control-Allow-Origin', '*');
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, Authorization");
    if(req.method==='OPTIONS') {
        res.header('Access-Control-Allow-Methods', 'GET,PUT, POST,PATCH,DELETE');
        return res.status(200).json({});
    }
    next(); // Right here
});


const port = process.env.port || 3000;
app.listen(port,function(){
    console.log("Listening on port",port);
});
