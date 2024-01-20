import "./App.css";
import { BrowserRouter as Router,Routes,Route } from "react-router-dom";
import SignupPage from "./components/page1";
import Page from "./components/page2";

function Apps() {
 return(

  <Router>
   
  <Routes>
    <Route path="/page1" element={<SignupPage />} />
    <Route path="/page2" element={<Page />} />
    <Route index element={<SignupPage />}/>
  </Routes>
</Router>
 )
}

export default Apps;
