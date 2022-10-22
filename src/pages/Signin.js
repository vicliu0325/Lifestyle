import {Menu, Form, Container} from "semantic-ui-react";
//step2:將Menu, Form, Container從semantic-ui-react引入
//step6:將react引入
import React from "react";
import firebase from "../utlis/firebase";
import "firebase/auth";
//Day6 step1:import firebase
import { useNavigate } from 'react-router-dom';
//Day6 step6:因為要去做導頁的動作所以我們這邊要去 import useHistory從這個 react-router-dom去做 import 的動作


//step1:Signin函式 export 出來
function Signin () {
    const navigate = useNavigate();
    //Day6 step7: 呼叫 useHistory 然後它會回傳一個 history 的物件 
    const [activeItem, setActiveItem] = React.useState('register');
        //step7:註冊登入加上active的效果，使用react提供的useState的function，預設設定為register
    const [email, setEmail] = React.useState('');
    const [password, setPassword] = React.useState('');
        //step11:新增一個 state叫作 email，跟新她的state的function:setEmail，透過React.useState傳入一個初始值空一串

    function onSubmit() {
        if(activeItem === "register") {
            firebase.auth().createUserWithEmailAndPassword(email, password).then(() => {navigate('/');});
        } else if (activeItem === "signin") {
            firebase.auth().signInWithEmailAndPassword(email, password).then(() => {navigate('/');});
        }
    }
        //DAY6 Step3: 呼叫一個onSubmit function
        //DAY6 Step5: 透過activeItem去判斷，if else
        //firebase.auth().createUserWithEmailAndPassword那這個 function 就可以讓我們去新增一個使用者，只要我們傳進去 email 跟這個 password，呼叫完這個 function 會拿到一個 promise 的物件，所以我們可以接 .then， .then 裡面我們放進去一個 callback function，這個 callback function 裡面的，如果成功的註冊的話，把使用者導到首頁
        //DAY6 Step8:註冊完之後，我們去做把使用者導回到首頁的動作

  

    return (
        <>
          <Container>
                <Menu widths={2}>
                    <Menu.Item active={activeItem === 'register'} onClick={() => setActiveItem('register')}>註冊</Menu.Item>
                    <Menu.Item active={activeItem === 'signin'} onClick={() => setActiveItem('signin')}>登入</Menu.Item>
                </Menu>
                <Form onSubmit={onSubmit}>
                    <Form.Input label="信箱" value={email} placeholder="請輸入信箱" onChange={(e) => setEmail(e.target.value)}></Form.Input>
                    <Form.Input label="密碼" value={password} placeholder="請輸入密碼" onChange={(e) => setPassword(e.target.value)} type="password"></Form.Input>
                    <Form.Button>
                        {activeItem === "register" && "註冊"}
                        {activeItem === "signin" && "登入"}
                    </Form.Button>
                </Form>
          </Container>
        </>
        //step3:渲染出Menu和Form這個元件用Container包起來，因為不要讓它占滿整個版面，
        //step4:Menu底下做出註冊和登入item
        //step5:預設靠左對齊，利用width={2}將平均欄位平均分配置中
        //step8:在Menu.Item傳進一個props叫做active，如果activeItem === signin的話，active就是true
        //step9:在Menu.Item傳進一個props叫做onClick，onClick={() => setActiveItem('signin')}
        //step10:Form三個元件Form.Inputx2 Form.ButtonX1
        //<Form.Input> lable="標題" placeholder="提示文字"
        //<Form.Button>可以根據activeItem決定按鈕上的文字是註冊還是登入
        //step12:把value替換成eamil 把value替換成password
        //step13:新增onChange的prop，一但有修改可以拿到事件的物件，呼叫setEmail，傳入e.target.value
        //step14:暗碼樣式:type="password"
        //DAY6 Step2: semantic ui 的這個表單元件有一個行為就是只要按下 Form.Button 這個按鈕，它就會去呼叫 Form 上面的 onSubmit我們提供的這個 function
        //DAY6 Step4:將onSubmit傳到這個prop裡面

    );
}

export default Signin;