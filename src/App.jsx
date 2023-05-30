import "./App.sass";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import { UserProvider } from "./context/Context";
import Home from "./pages/Home";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Characters from "./pages/Characters";

function App() {

  return (
    <main id="main">
      <Router>
        <UserProvider>
          <Header/>
          <Routes>
            <Route
              exact path="/" element={<Home/>}
            />
            <Route
              path="/characters" element={<Characters/>}
            />
          </Routes>
          <Footer/>
        </UserProvider>
      </Router>
    </main>
  );
}

export default App;