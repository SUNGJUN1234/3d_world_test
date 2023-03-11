const express = require('express')
const bodyParser = require('body-parser')
const app = express();

const path = require('path');

app.use(bodyParser.urlencoded({extended:true}))

app.set('port',process.env.PORT||8888)

app.get('/',(req,res)=>{
    // __dirname = C:\Users\HAN\OneDrive\바탕 화면\workspace\portfolio\back
    res.sendFile(path.join(__dirname,'../front/test.html'))
})

app.get('/get',(req,res)=>{
    let id= req.query.id;
    let pw = req.query.pw;

    res.send('id : '+id+'pw : '+pw);
})

app.get('/three',(req,res)=>{
    res.sendFile(path.join(__dirname,'../front/three/SJ/index.html'))
})

app.listen(app.get('port'),()=>{
    console.log(app.get('port'),"번 포트에서 서버 연결 대기중...")
    console.log(__dirname);
})
