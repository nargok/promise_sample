class GoodButton {
  constructor() {
    this.clickCount = 0;
  }
}

const onClickButton = (goodButton) => {
  // ボタンを押した回数を1つ増やす
  goodButton.clickCount += 1;
  // 回数を表示
  console.log(goodButton.clickCount);
}