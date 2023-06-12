import "./App.sass";
import { Route, Routes } from "react-router-dom";
import { UserProvider } from "./context/Context";
import Home from "./pages/Home";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Characters from "./pages/Characters";
import Error from "./pages/Error";

function App() {
  

  return (
    <main id="main">
        <UserProvider>
          <Header/>
          <Routes>
            <Route
              exact path="/home" element={<Home/>}
            />
            <Route
              path="/characters/*" element={<Characters/>}
            />
            <Route
              path="*" element={<Error/>}
            />
          </Routes>
          <Footer/>
        </UserProvider>
    </main>
  );
}

export default App;