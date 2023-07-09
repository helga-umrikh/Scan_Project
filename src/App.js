import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import React, { useEffect } from 'react';
import { Routes, Route, useNavigate, useLocation } from "react-router-dom";
import { useSelector } from "react-redux";
import { selectUser } from "./features/userSlice";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import Authorization from "./pages/Authorization/Authorization";
import Main from "./pages/Main/Main";
import EmptyPage from "./pages/EmptyPage/EmptyPage";
import SearchPage from "./pages/SearchPage/SearchPage";
import ResultPage from "./pages/ResultPage/ResultPage";


function App() {
  const user = useSelector(selectUser);
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    if (!user && location.pathname === '/search_page') {
      navigate('/');
    }
  }, [user, navigate, location]);

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
        <Route path="/search_page" element={<SearchPage/>} />
        <Route path="/search_page" element={<ResultPage/>} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
