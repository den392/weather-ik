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
