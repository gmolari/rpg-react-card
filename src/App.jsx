import "./App.sass";
import { Route, Routes } from "react-router-dom";
import { UserProvider } from "./context/Context";
import Home from "./pages/Home";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Characters from "./pages/Characters";

function App() {

  return (
    <main id="main">
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
    </main>
  );
}

export default App;