let data = {
  "coord": {
    "lon": 116.3972,
    "lat": 39.9075
  },
  "weather": [
    {
      "id": 803,
      "main": "Clouds",
      "description": "曇りがち",
      "icon": "04d"
    }
  ],
  "base": "stations",
  "main": {
    "temp": 9.94,
    "feels_like": 8.65,
    "temp_min": 9.94,
    "temp_max": 9.94,
    "pressure": 1022,
    "humidity": 14,
    "sea_level": 1022,
    "grnd_level": 1016
  },
  "visibility": 10000,
  "wind": {
    "speed": 2.65,
    "deg": 197,
    "gust": 4.84
  },
  "clouds": {
    "all": 53
  },
  "dt": 1646542386,
  "sys": {
    "type": 1,
    "id": 9609,
    "country": "CN",
    "sunrise": 1646520066,
    "sunset": 1646561447
  },
  "timezone": 28800,
  "id": 1816670,
  "name": "北京市",
  "cod": 200
};

////////// 課題3-2 ここからプログラムを書こう
let toshi = document.querySelector('div#name');
toshi.textContent = (data.name);

let max = document.querySelector('div#max');
max.textContent = (data.main.temp_max);

let min = document.querySelector('div#min');
min.textContent = (data.main.temp_min);




let b = document.querySelector('#sendRequest');
b.addEventListener('click', sendRequest);

// 通信を開始する処理
function sendRequest() {
  let e = document.querySelector('input[name=toshiID]');
  let key = e.value;

	// URL を設定
	let url = 'https://www.nishita-lab.org/web-contents/jsons/openweather/'+key+'.json';

	// 通信開始
	axios.get(url)
		.then(showResult)
		.catch(showError)
		.then(finish);
}

// 通信が成功した時の処理
function showResult(resp) {
	// サーバから送られてきたデータを出力
	let data = resp.data;

  
	// data が文字列型なら，オブジェクトに変換する
	if (typeof data === 'string') {
		data = JSON.parse(data);   
	}

	// data をコンソールに出力
	console.log(data);

	// data.x を出力
	console.log(data.x);
  
  let coordlon = document.querySelector('div#coordlon');
  coordlon.textContent ='緯度' + data.coord.lon;

  let coordlat = document.querySelector('div#coordlat');
  coordlat.textContent ='経度' + data.coord.lat;

  let weatherDescription = document.querySelector('div#weatherDescription');
  weatherDescription.textContent = data.weather.description;

  let mainMin = document.querySelector('div#mainMin');
  mainMin.textContent ='最低気温' + data.main.temp_min;
}

// 通信エラーが発生した時の処理
function showError(err) {
	console.log(err);
}	

// 通信の最後にいつも実行する処理
function finish() {
	console.log('Ajax 通信が終わりました');
}

