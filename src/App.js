import './App.css';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import Authorization from './pages/Authorization/Authorization';
// import Main from './pages/Main';


function App() {
  return (
    <div className="App">
      <Header />
      <Authorization />
      <Footer />
    </div>
  );
}

export default App;
