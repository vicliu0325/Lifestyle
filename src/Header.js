import { Menu, Search} from "semantic-ui-react";
//import Menu和Search元件是由semantic-ui-react提供的
import { Link } from "react-router-dom";


function Header(){
    return (
    <Menu>
        <Menu.Item as={Link} to="/">Lifestyle</Menu.Item>
        <Menu.Item>
            <Search />
        </Menu.Item>
        <Menu.Menu position="right">
         <Menu.Item as={Link} to="/signin">
            註冊/登入
          </Menu.Item>
        </ Menu.Menu>     
    </Menu>
    );
}
export default Header;

//<Menu.Item>有一個props叫做as，用Link這個元件去做渲染
//<Menu.Item>有一個props叫做to，按下後導向什麼網址
//首頁的網址是/