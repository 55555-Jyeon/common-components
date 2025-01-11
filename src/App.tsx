import { Route, BrowserRouter, Routes } from "react-router-dom";
import Layout from "./common/layouts";
import Home from "./pages/Home";
import "./App.css";

function App(): JSX.Element {
    return (
        <div className="App">
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Layout />}>
                        <Route index element={<Home />} />
                    </Route>
                </Routes>
            </BrowserRouter>
        </div>
    );
}

export default App;
