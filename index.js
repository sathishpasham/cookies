const express=require('express');
const app=express();

//home
//products
//clearCookie


//-> home get the request i will add the cookie and share with the res
app.get("/", function(){

})

// i will chedk the user visiting for the first time or already visted
app.get("/products", function(){

})

//clear your cookie

app.get("/clearCookies", function(){

})



app.listen(8080,()=>{
    console.log('server started')
})