import React from "react";
import ColorfulMessage from "./compornents/ColorfulMessage";

const App = () => {
  const onClickButton = () => alert();

  return (
    <>
      {/* jsのオブジェクトとしてstyleを記載 */}
      <h1 style={{ color: "red" }}>こんにちは！</h1>
      <ColorfulMessage color="blue">お元気ですか？</ColorfulMessage>
      <ColorfulMessage color="pink">元気です！</ColorfulMessage>
      <button onClick={onClickButton}>ボタン</button>
    </>
  );
};

export default App;
