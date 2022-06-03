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
toshi.textContent = '都市名:' + data.name;

let max = document.querySelector('div#max');
max.textContent = '最高気温:' + data.main.temp_max + '°C';

let min = document.querySelector('div#min');
min.textContent = '最低気温:' + data.main.temp_min + '°C';


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
  
  //緯度
  let coordlon = document.querySelector('div#coordlon');
  coordlon.textContent = data.coord.lon;

  //経度
  let coordlat = document.querySelector('div#coordlat');
  coordlat.textContent = data.coord.lat;

  //天気
  let weatherDescription = document.querySelector('div#weatherDescription');
  weatherDescription.textContent = ''+data.weather.description;

  //最低気温
  let mainMin = document.querySelector('div#mainMin');
  mainMin.textContent = data.main.temp_min;

  //最高気温
  let mainMax = document.querySelector('div#mainMax');
  mainMax.textContent = data.main.temp_max;

  //湿度
  let mainHumidity = document.querySelector('div#mainHumidity');
  mainHumidity.textContent = data.main.humidity;

  //風速
  let windSpeed = document.querySelector('div#windSpeed');
  windSpeed.textContent = data.wind.speed;

  //風向
  let windDeg = document.querySelector('div#windDeg');
  windDeg.textContent = data.wind.deg;

  //都市名
  let Name = document.querySelector('div#Name');
  Name.textContent = data.name;
}

// 通信エラーが発生した時の処理
function showError(err) {
	console.log(err);
}	

// 通信の最後にいつも実行する処理
function finish() {
	console.log('Ajax 通信が終わりました');
}

//ボタン
//カイロ
const buttonCairo = document.querySelector('#buttonCairo')
buttonCairo.addEventListener('click', () => {
  navigator.clipboard.writeText('360630');
  //button.innerHTML = 'コピー完了！'
  setTimeout(() => buttonCairo.innerHTML = 'copy', 5);
})
//モスクワ
const buttonMoscow = document.querySelector('#buttonMoscow')
buttonMoscow.addEventListener('click', () => {
  navigator.clipboard.writeText('524901');
  //button.innerHTML = 'コピー完了！'
  setTimeout(() => buttonMoscow.innerHTML = 'copy', 5);
})
//ヨハネスブルク
const buttonJohannesburg = document.querySelector('#buttonJohannesburg')
buttonJohannesburg.addEventListener('click', () => {
  navigator.clipboard.writeText('993800');
  //button.innerHTML = 'コピー完了！'
  setTimeout(() => buttonJohannesburg.innerHTML = 'copy', 5);
})
//北京
const buttonBeijing = document.querySelector('#buttonBeijing')
buttonBeijing.addEventListener('click', () => {
  navigator.clipboard.writeText('1816670');
  //button.innerHTML = 'コピー完了！'
  setTimeout(() => buttonBeijing.innerHTML = 'copy', 5);
})
//東京
const buttonTokyo = document.querySelector('#buttonTokyo')
buttonTokyo.addEventListener('click', () => {
  navigator.clipboard.writeText('1850147');
  //button.innerHTML = 'コピー完了！'
  setTimeout(() => buttonTokyo.innerHTML = 'copy', 5);
})
//シンガポール
const buttonSingapore = document.querySelector('#buttonSingapore')
buttonSingapore.addEventListener('click', () => {
  navigator.clipboard.writeText('1880252');
  //button.innerHTML = 'コピー完了！'
  setTimeout(() => buttonSingapore.innerHTML = 'copy', 5);
})
//シドニー
const buttonSydney = document.querySelector('#buttonSydney')
buttonSydney.addEventListener('click', () => {
  navigator.clipboard.writeText('2147714');
  //button.innerHTML = 'コピー完了！'
  setTimeout(() => buttonSydney.innerHTML = 'copy', 5);
})
//ロンドン
const buttonLondon = document.querySelector('#buttonLondon')
buttonLondon.addEventListener('click', () => {
  navigator.clipboard.writeText('2643743');
  //button.innerHTML = 'コピー完了！'
  setTimeout(() => buttonLondon.innerHTML = 'copy', 5);
})
//パリ
const buttonParis = document.querySelector('#buttonParis')
buttonParis.addEventListener('click', () => {
  navigator.clipboard.writeText('2968815');
  //button.innerHTML = 'コピー完了！'
  setTimeout(() => buttonParis.innerHTML = 'copy', 5);
})
//リオデジャネイロ
const buttonRio = document.querySelector('#buttonRio')
buttonRio.addEventListener('click', () => {
  navigator.clipboard.writeText('3451189');
  //button.innerHTML = 'コピー完了！'
  setTimeout(() => buttonRio.innerHTML = 'copy', 5);
})
//ニューヨーク
const buttonNY = document.querySelector('#buttonNY')
buttonNY.addEventListener('click', () => {
  navigator.clipboard.writeText('5128581');
  //button.innerHTML = 'コピー完了！'
  setTimeout(() => buttonNY.innerHTML = 'copy', 5);
})
//ロサンゼルス
const buttonLA = document.querySelector('#buttonLA')
buttonLA.addEventListener('click', () => {
  navigator.clipboard.writeText('5368361');
  //button.innerHTML = 'コピー完了！'
  setTimeout(() => buttonLA.innerHTML = 'copy', 5);
})

//mouseover
let test = document.getElementById("test");

// このハンドラーは、カーソルが順序なしリストの上を移動した
// ときに1度だけ実行されます
test.addEventListener("mouseenter", function( event ) {
  // mouseenter の対象を強調
  event.target.style.color = "purple";

  // 少し待ってから色をリセット
  setTimeout(function() {
    event.target.style.color = "";
  }, 500);
}, false);


// このハンドラーは異なるリスト項目の上を移動するごとに
// 実行されます
test.addEventListener("mouseover", function( event ) {
  // mouseover の対象を強調
  event.target.style.color = "orange";

  // 少し待ってから色をリセット
  setTimeout(function() {
    event.target.style.color = "";
  }, 500);
}, false);
