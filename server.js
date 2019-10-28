var express = require('express');
var request = require('request');
var app     = express();
const port = process.env.PORT || 3000;
app.get('/scrape/:id', function(req, res){
 
  var id = req.params.id;
 // url = 'http://splashstudio.org/appInfoApi.php?packageName='+id;

  // request({ url: url,json: true}, function(error, response, body){
    // if(!error){
		
	
      

	  // var ranking="None";
      
      // var json = { pakagenname : "None", url : "None" , bit :0};

	    // json.pakagenname=body.Package;
		// json.url=body.HeaderImage;
		// json.bit=1;
	
	// }

    // res.send(json)
  // })
  res.send( JSON.parse('{"pakagenname":"com.us.military.fps.sniper.counter.terrorist.border","url":"https:\/\/lh3.googleusercontent.com\/5FURIVb886g4Fubm_Ci8lQL4FR08GSNa-ggvNSqJVgVKyc-TWkjiMNN2cIPp4Tewxoo","bit":"1"}'));
})

app.get('/selfPromo/:id', function(req, res){
 
  var id = req.params.id;
  // url = 'http://splashstudio.org/appIconInfo.php?packageName='+id;

  // request({ url: url,json: true}, function(error, response, body){
    // if(!error){
		
	
      

	  // var ranking="None";
      
      // var json = { pakagenname : "None", url : "None" , iconurl :"None"};

	    // json.pakagenname=body.Package;
		// json.url=body.HeaderImage;
		// json.iconurl=body.icon;
	
	// }

    // res.send(json)
  // })
   res.send( JSON.parse('{"Package":"com.us.military.fps.sniper.counter.terrorist.border","HeaderImage":"https:\/\/lh3.googleusercontent.com\/5FURIVb886g4Fubm_Ci8lQL4FR08GSNa-ggvNSqJVgVKyc-TWkjiMNN2cIPp4Tewxoo","icon":"https:\/\/lh3.googleusercontent.com\/5FURIVb886g4Fubm_Ci8lQL4FR08GSNa-ggvNSqJVgVKyc-TWkjiMNN2cIPp4Tewxoo"}'));
})

app.get('/inapp/:id', function(req, res){
 
  // var id = req.params.id;
  // url = 'http://business.splashstudio.org/appInfoApi_3.php?packageName='+id;

  // request({ url: url,json: true}, function(error, response, body){
    // if(!error){
		
	    // var json =body;
		

	// }

    // res.send(json)
  // })
  res.send(JSON.parse('[{"Package":"com.firesquad.battleroyale.firefreeshooting.battlegroundsshooting","HeaderImage":"https:\/\/lh3.googleusercontent.com\/0-jYxw4HnBYDMY89LKRo3v22eO3NMYVOBL4spIaQDVq3TGyDorykOAX_g6lDLGEiMQ","icon":"https:\/\/lh3.googleusercontent.com\/wTzNBwl-QMRH1M_fcEFoc3JheKJf0gXLgQsAJGiX1VzFFNbGAgp2azqG0bs62HMWDR0=s128"},{"Package":"com.firesquad.battleroyale.firefreeshooting.battlegroundsshooting","HeaderImage":"https:\/\/lh3.googleusercontent.com\/0-jYxw4HnBYDMY89LKRo3v22eO3NMYVOBL4spIaQDVq3TGyDorykOAX_g6lDLGEiMQ","icon":"https:\/\/lh3.googleusercontent.com\/wTzNBwl-QMRH1M_fcEFoc3JheKJf0gXLgQsAJGiX1VzFFNbGAgp2azqG0bs62HMWDR0"},{"Package":"com.fpsshooting.bootleshooting.rockstartbottleshooter","HeaderImage":"https:\/\/lh3.googleusercontent.com\/flJQHOrxMji9xVXdkgnOfnE6-12cH5A3rT7245IXWSoLE9ziQB69zsjbgRSB8WPtOA","icon":"https:\/\/lh3.googleusercontent.com\/mE_3wk-UzERYbZwQFwY2YpHo8CMwHINh8UtI7Yk1LzC_05cGPnKK6m0RgnmOZlCQfX8"},{"Package":"com.battleground.survival.squad.free.shooting.game","HeaderImage":"https:\/\/lh3.googleusercontent.com\/SPxwxe5VbwYdDV1VrjtV1M2U6TvuyEVqvsdI_crZIMwBI_a3KYxrNLaKYWbdYEcch-Io","icon":"https:\/\/lh3.googleusercontent.com\/FLFc5HDabu1ZCuDBTbCjpbjQnV0unxk1J1nUTLr8R0OiMQuLJwgQRw8Jd4yBptgjQ98"},{"Package":"com.wild.deer.hunting.game.animal.sniper.hunter","HeaderImage":"https:\/\/lh3.googleusercontent.com\/hn5dpzeNfPLDmAzhtRaSAOBwS35fKAVbqzZb8Gqv0dKFDmj8vR1KbzhCfVRbzgufKg","icon":"https:\/\/lh3.googleusercontent.com\/1UNh5Qy3Ko_94Pin-qBIyLqgZq4-U5wVlROc50457CjuyIMWVbojcYWNWPG3EUKP5d8"}]'));
})

app.listen(port)
  console.log('Server started on port', port);
exports = module.exports = app;
