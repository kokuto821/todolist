import "./styles.css";

const onClickAdd = () => {
  //テキストボックスの値を取得//テキストの値を初期化
  const inputText = document.getElementById("add-text").value;
  document.getElementById("add-text").value = " ";

  //div生成
  const div = document.createElement("div");
  div.className = "list-row";
  console.log(div);
  //liタグ生成
  const li = document.createElement("li");
  li.innerText = inputText;
  console.log(li);
  //divタグの子要素に各要素を設定
  div.appendChild(li);
  //未完了リストに追加
  document.getElementById("incompletelist").appendChild(div);
};

document
  .getElementById("add-button")
  .addEventListener("click", () => onClickAdd());
