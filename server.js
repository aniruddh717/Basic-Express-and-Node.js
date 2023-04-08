const express = require("express");
const bodyParser = require("body-parser")
const app = express()
const port = 3000
app.use(express.urlencoded({extended: true}));  //need to be written while using body-parser

app.get("/", function(req, res){                //fetch the html file
  res.sendFile(__dirname + "/index.html");
});

app.post("/", function(req, res){               //listen to the user input
    var n1 = Number(req.body.num1)
    var n2 = Number(req.body.num2)
    var result = n1 + n2
    console.log(result)
})

app.listen(port, function(){
    console.log(`Server started on port ${port}`);
});
