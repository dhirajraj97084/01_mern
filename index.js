import express from 'express';

const app=express();
const port=process.env.PORT||8030

app.get('/api/',(req,res)=>{
    res.send('this is my first backend experiences');
})

app.listen(port,()=>{
    console.log(`your server start successfully localhost:${port}`);
})