// 処理の順番
// 1. いいねボタンを押す
// 2. サーバへクリックイベントを送信する
// 3. サーバからいいねボタンを押した回数を取得する
// 4. いいねボタンを押した回数をconsoleへ出力する

class GoodButton {
  constructor() {
    this.clickCount = 0;
  }

  // Promiseの基本
  // 1. 非同期処理はPromiseのnewで指定する
  // 2. コールバックはthenでつなげる
  // 3. エラー処理はcatchで。thenとの順番に注意する
  countUpClickCount() {
    // resolve関数：非同期処理が成功したときに呼び出す関数
    const promise = new Promise((resolve, reject) => {
      const xhr = new XMLHttpRequest();
      // callback 非同期処理終了後に実行してほしい関数を指定する
      xhr.onload = () => { resolve(xhr.responseText) };
      xhr.onerror = () => { reject(xhr.statusText) }; // エラー時の処理
      xhr.open('POST', 'https://(URL)', true) // 3番目の引数が非同期処理をonにする
      xhr.send();
    });
    // thenにはresolveで指定した関数が指定される　戻り値の格納先であるresが来ることを期待している
    return promise.then((res) => {
      this.clickCount = countFromResponse(res);
    })
  }
}

// 回数を表示する処理:　回数をサーバから受け取った後に表示するため非同期処理にする
const onClickButton = (goodButton) => {
  // thenで後続の処理を実行する → thenをつなげれば非同期処理を順番に指定できる
  goodButton.countUpClickCount().then(() => {
    console.log(goodButton.clickCount);
  }).catch((status) => {
    // エラー処理　エラーになった際は後続の処理を無視してエラー処理を行う
    // catchの後にもthenは実行されるため、catch処理は一番最後に書く
    console.log(status);
  });
}