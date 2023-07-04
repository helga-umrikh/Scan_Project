import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Routes, Route } from "react-router-dom";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import Authorization from "./pages/Authorization/Authorization";
import Main from "./pages/Main/Main";
import EmptyPage from "./pages/EmptyPage/EmptyPage";
import SearchPage from "./pages/SearchPage/SearchPage";

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" exact element={<Main />} />
        <Route path="/tariff" element={<EmptyPage />} />
        <Route path="/FAQ" element={<EmptyPage />} />
        <Route path="/register" element={<EmptyPage />} />
        <Route path="/authorization" element={<Authorization />} />
        <Route path="/reset_password" element={<EmptyPage />} />
        <Route path='/search_page' element={<SearchPage/>} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
