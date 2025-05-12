app.get("/test",(req,res)=>{
  res.status(200).send("it works!")
})

app.get("/auth-state", (req, res) => {
  const authState = req.auth;
  res.json(authState);
});

app.get("/protect", (req, res) => {
  const {userId} = req.auth;
  if(!userId){
    return res.status(401).json("not authenticated")
  }
  res.status(200).json("content")
});

app.get("/protect2", requireAuth(), (req, res) => {
  res.status(200).json("content")
});

// app.use(function (req, res, next) {
//   res.header("Access-Control-Allow-Origin", process.env.CLIENT_URL);
//   res.header(
//     "Access-Control-Allow-Headers",
//     "Origin, X-Requested-With, Content-Type, Accept"
//   );
//   next();
// });