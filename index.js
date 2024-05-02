const express = require("express");
const app = express();
const cookieparser=require("cookie-parser")
const jwt=require("jsonwebtoken")
const promisify=require("util").promisify;
app.use(cookieparser());
const promisfiedJWTSign=promisify(jwt.sign);
const promisfiedJWTVerify=promisify(jwt.verify)
const payload="123";
const secretKey="I am secret";


//home
//products
//clearCookie

//-> home get the request i will add the cookie and share with the res

app.get("/", async function (req, res){
  try{
    const authToken=await promisfiedJWTSign({data:payload},secretKey,)
  res.cookie("prevpage", "home", { maxAge: 9 * 1000 * 24, httpOnly: true });
  res.status(200).json({
    message: "Thank you for the visit ",
    authToken
  })
}
catch(error){
  console.log(error);
  res.status(400).json({
    message:"something went wrong"
  })
}
});


  // i will chedk the user visiting for the first time or already visted

  app.get("/products", function (req, res) {
    if(req.cookies.prevpage){
      console.log(req.cookies.prevpage);
    res.status(200).json({
        message :"thank you for accessing route again"
    })
 
    }else{
      res.status(200).json({
        message:"Thank you for accessing route"
      })
    }
    
});

//clear your cookie

app.get("/clearCookies", function (req, res) {
  res.clearCookie("prevpage",{path:"/"})
  res.status(200).json({
    message:"i have cleared the cookie"
  })
    
});

app.listen(8080, () => {
  console.log("server started");
});
