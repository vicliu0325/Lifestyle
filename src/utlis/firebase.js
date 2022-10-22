import firebase from "firebase/app";
//step1:從firebase底下的app，去import firebase這個變數

const firebaseConfig = {
    apiKey: "AIzaSyDUjqefz0Evxzzqa3fRmjIz4v_Ywb7tG4Q",
    authDomain: "lifestyle-a8cbc.firebaseapp.com",
    projectId: "lifestyle-a8cbc",
    storageBucket: "lifestyle-a8cbc.appspot.com",
    messagingSenderId: "1092185631137",
    appId: "1:1092185631137:web:6456d235410741c3bdc3e0",
    measurementId: "G-7VRTYB08K2"
  };
//step3:從firebase後台專案設定>SDK 設定和配置>設定
//copy firebase設定物件

firebase.initializeApp(firebaseConfig);
//step2:使用firebase這個變數去做initializeApp這個動作，呼叫這個function需要去傳入設定的物件
//step4:把firebaseConfig傳到initializeApp這個function裡面

export default firebase;
//step5:把firebase這個變數export出來，讓我們可以在react元件呼叫firebase

//step6:到signin.js import firebase

