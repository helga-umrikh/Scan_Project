import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Routes, Route } from "react-router-dom";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import Authorization from "./pages/Authorization/Authorization";
import Main from "./pages/Main/Main";

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" exact element={<Main />} />
        <Route path="/authorization" exact element={<Authorization />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
