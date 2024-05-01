const express=require('express');
const app=express();

//home
//products
//clearCookie


//-> home get the request i will add the cookie and share with the res
app.get("/", function(req,res){

    res.cookie("prevpage","home",{maxAge:9*1000*24,httpOnly:true})
    res.status(200).json({
        message:"Thank you for the visit "

})

// i will chedk the user visiting for the first time or already visted
app.get("/products", function(req,res){
    
    })

})

//clear your cookie

app.get("/clearCookies", function(req,res){

})



app.listen(8080,()=>{
    console.log('server started')
})