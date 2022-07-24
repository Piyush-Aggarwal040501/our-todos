const express = require('express');
const app = express();
const path = require('path');
const router = express.Router();

app.use(express.static(__dirname + '/public'));



router.get('/',function(req,res){
  res.sendFile(path.join(__dirname+'/src/notes.html'));
});

const port = process.env.PORT || 3000;



//add the router
app.use('/', router);
app.listen(port,()=>{
  console.log("listening on port" + port);
});
