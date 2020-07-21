const express=require('express')
var app=express()
const cors=require('cors')
const router=require('./routes/index')
// const mysqlServer=require('./sqlserver')
app.use(cors())

app.use(express.static(__dirname+'/public'))

app.get('/',(req,res)=>{
    res.render('index')
})
app.use(express.json())
app.use('/',router)
const PORT=process.env.PORT||5000

app.listen(PORT,()=>{
    console.log("listening")
});