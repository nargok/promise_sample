class GoodButton {
  constructor() {
    this.clickCount = 0;
  }

  coundUpClickCount() {
    const xhr = new XMLHttpRequest();

    // callback 非同期処理終了後に実行してほしい関数を指定する
    xhr.onload = () => {
      const res = xhr.responseText;
      this.clickCount = countFromResponse(res);
    };

    // 非同期処理で実行する
    xhr.open('POST', 'https://(URL)', true) // 3番目の引数が非同期処理をonにする
    xhr.send();
  }
}

const onClickButton = (goodButton) => {
  // ボタンを押した回数を1つ増やす
  goodButton.clickCount += 1;
  // 回数を表示
  console.log(goodButton.clickCount);
}