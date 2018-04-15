// 処理の順版
// 1. いいねボタンを押す
// 2. サーバへクリックイベントを送信する
// 3. サーバからいいねボタンを押した回数を取得する
// 4. いいねボタンを押した回数をconsoleへ出力する

class GoodButton {
  constructor() {
    this.clickCount = 0;
  }

  countUpClickCount() {
    const xhr = new XMLHttpRequest();

    // callback 非同期処理終了後に実行してほしい関数を指定する
    xhr.onload = () => {
      const res = xhr.responseText;
      this.clickCount = countFromResponse(res);
      callback();
    };

    // 非同期処理で実行する
    xhr.open('POST', 'https://(URL)', true) // 3番目の引数が非同期処理をonにする
    xhr.send();
  }
}

// 回数を表示する処理:　回数をサーバから受け取った後に表示するため非同期処理にする
const onClickButton = (goodButton) => {
  goodButton.countUpClickCount(() => {
    // 回数を表示
    console.log(goodButton.clickCount);
  });
}