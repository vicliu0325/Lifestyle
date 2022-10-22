import { BrowserRouter, Routes, Route} from "react-router-dom";
import Header from "./Header";
import Signin from "./pages/Signin";

function App() {
    return (
    <BrowserRouter>
        <Header />
          <Routes>
          <Route path="/" element="首頁"></Route>
            <Route path='/signin' element={<Signin />}></Route>
          </Routes>
    </BrowserRouter>);
    //用BrowserRouter將<Header />包起來
}

//因為<Header />每個頁面都要顯示，所以不需要包道Route裡面
export default App;