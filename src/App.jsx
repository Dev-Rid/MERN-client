import {BrowserRouter, Route, Routes} from "react-router-dom";
import Home from "./pages/Home";
import Navbar from "./components/Navbar";
import Signup from "./pages/Signup";
import Login from "./pages/Login";

function App() {
  return (
    <div className="App">
        <div>
            <BrowserRouter> 
            
            <Navbar/>
                <div className="pages">
                    <Routes>
                        <Route
                        element={<Home/>}
                        path="/"
                        />
                        
                        <Route
                        element={<Signup/>}
                        path="/signup"
                        />
                        
                        <Route
                        element={<Login/>}
                        path="/login"
                        />                        
                    </Routes>
                </div>
            </BrowserRouter>
        </div>
    </div>
  );
}

export default App;
