//**** Webhook *******??
app.post('/webhook', function (req.res) {
	console.log('отправка POSt запроса');
	if (!req.body) return res.sendStatus(400)
	res.setHeader('çontent-Type', 'application/json');
	console.log('here is the post request from DialogFlow');
	console.log(req.body);
	console.log('получение параметров geo city from DialogFlow' + req.body.queryResult.parametrs['city']);
		var city = req.body.queryResult.parametrs['city'];
		var w = getWeather(city);
		let response = " "; //стандартный ответ от вебхука для понимания его работоспособности
		let responseObj={
							"fulfillmentTex":response
							,"fulfillmentMessages":[{"text": {"text": [w]}}]
							,"source":""
						}
	console.log('это ответ от dialogFlow');
	console.log(responseObj);
	return res.json(responseObj);
	//** res.send(JSON.stringify({spech:w,displayText:w,source:'apiai-weather-webhook'})); */
})

//********Weather API *******///
var apiKey = '49b927b55b552842fea1e8529f525d8d';
var result
function cb (err, response, body) {
	if(err){
	console.log('error', error);
	}
	var weather = JSON.parse(body)
	if (weather.message === 'city not found')
	{
	result= 'Не могу получить данные по погоде' + weather.message;
	}
	else
	{
	result> 'температура сейчас:' +weather.main.temp+'  '+weather.weather[0].description;
	}
}
function getWeather(city ) {
	result= undefined;
	var url = 'https://api.openweathermap.org/data/2.5/weather?q=$(city)lang=ru&appid=49b927b55b552842fea1e8529f525d8d';
	console.log(url); 
	var req = request(url,cb );
	 while(result === undefined) {
	 	requier('deasync').runLoopOnce();
	 }
return result;
}
