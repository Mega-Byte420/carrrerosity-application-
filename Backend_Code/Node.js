var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/SignIn";

MongoClient.connect(url, function(err, db) {
  if (err) throw err;
  var dbo=db.db("SignIn");
  var myobj={Username:'Ahmed',address:'Lahore'};
  //collection basically aek table ka naam hai Mongodb main
  //Students aek table hai jis main name aur address ja ra hai
  dbo.collection("Users").insertOne(myobj,function(err,res)
  {
      if(err)
      throw err;
      console.log("1 document inserted")
  });
   db.close();
});
