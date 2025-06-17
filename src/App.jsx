import {BrowserRouter, Route, Routes, Navigate} from "react-router-dom";
import { useAuthContext } from "./hooks/useAuthContext";

// pages & components
import Home from "./pages/Home";
import Navbar from "./components/Navbar";
import Signup from "./pages/Signup";
import Login from "./pages/Login";

function App() {
    const { user } = useAuthContext()




  return (
    <div className="App">
        <div>
            <BrowserRouter> 
            
            <Navbar/>
                <div className="pages">
                    <Routes>
                        <Route
                        element={user ? <Home/> : <Navigate to="/login" />}
                        path="/"
                        />
                        
                        <Route
                        element={!user ? <Signup/> : <Navigate to="/login" />}
                        path="/signup"
                        />
                        
                        <Route
                        element={!user ? <Login/> : <Navigate to="/" />}
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
