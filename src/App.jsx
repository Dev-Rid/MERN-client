import {BrowserRouter, Route, Routes} from "react-router-dom";
import Home from "./pages/Home";
import Navbar from "./components/Navbar";

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

                        
                    </Routes>
                </div>
            </BrowserRouter>
        </div>
    </div>
  );
}

export default App;
