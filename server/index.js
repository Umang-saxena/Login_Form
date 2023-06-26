const express = require("express")
const app=express();
const server=require("http").createServer(app);
const path = require("path");
const staticPath=path.join(__dirname, "../client/static")
const port=8000;


// ----------------------------------------------------------------STATIC PATH-------------------------------------
app.use(express.static(staticPath));


// -------------------------------------------------------------------------------------
app.get('/',(req,res)=>{
    res.sendFile(path.join(__dirname,"../client/static/index.html"))
});
server.listen(port,()=>{
    console.log(`Server started at ${port}`);

})