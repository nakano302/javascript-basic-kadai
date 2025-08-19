// btnというidを持つHTML要素を取得し、定数に代入する
const btn = document.getElementById("btn");

// HTML要素がクリックされたときにイベント処理を実行する
btn.addEventListener("click", () => {
  console.log("ボタンをクリックしました");

  // 作成したli要素に「ボタンをクリックしました」というテキストを追加する
  textElement.textContent = "ボタンをクリックしました";
});
