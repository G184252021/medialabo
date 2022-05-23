// 答え
let kotae = Math.floor(Math.random() * 10) + 1;
console.log("答え: " + kotae);      // デバッグ用

// 入力回数（予想回数）
let kaisu = 0;

// 予想を4回実行する
// 将来: ボタンを押したら， hantei() を呼び出すように修正する
hantei();

// ボタンを押した後の処理をする関数 hantei() の定義
function hantei() {
    let yoso = 4;       // 第5回課題:テキストボックスの数値をここに代入
    kaisu += 1;
    // 課題3-1：ここの判定処理を作成する．
    //        ページに表示する方法はまだ習っていないので
    //        判定結果はコンソールに出力すること


    let pp = document.createElement('pp');
    pp.textContent = kaisu + '回目の予想: ' + yoso;
    let re = document.querySelector('div#result');
    re.insertAdjacentElement('beforeend', pp);
    console.log(kaisu + "回目の予想: " + yoso);

    let p = document.createElement('p');
    if (kaisu < 4) {
        if (yoso === kotae) {
            p.textContent = '正解です。おめでとう！';
            re = document.querySelector('div#result');
            re.insertAdjacentElement('afterend', p);
            connsole.log("正解です。おめでとう！");
        }
        else if (kotae < yoso) {
            p.textContent = 'まちがい。答えはもっと小さいですよ';
            re = document.querySelector('div#result');
            re.insertAdjacentElement('afterend', p);
            console.log("まちがい。答えはもっと小さいですよ");
        }
        else {
            p.textContent = 'まちがい。答えはもっと大きいですよ';
            re = document.querySelector('div#result');
            re.insertAdjacentElement('afterend', p);
            console.log("まちがい。答えはもっと大きいですよ");
        }
    }
    else {
        p.textContent = '答えは " + kotae + " でした。すでにゲームは終わっています';
        re = document.querySelector('div#result');
        re.insertAdjacentElement('afterend', p);
        console.log("答えは " + kotae + " でした。すでにゲームは終わっています");
    }

}