import ReactDOM from 'react-dom/client';
//網頁程式的進入點
import App from "./App";
//副檔名可省略
import "semantic-ui-css/semantic.min.css";
//semantic-ui-css這個套件底下的semantic.min.css這個檔案

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
//3.(把App這個元件寫成元件形式,第二個參數傳什麼:用document.getElementById選到名為root的<div></div>)
//1.ReactDOM提供的render函式
//2.把src/App.js渲染到public/index.html