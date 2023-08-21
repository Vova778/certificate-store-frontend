import {BrowserRouter} from "react-router-dom";
import PageRenderer from "./components/PageRenderer";
import Header from "./components/include/Header";
import './assets/styles/App.css';
import Footer from "./components/include/Footer";

function App() {
    return (
        <div className="App">

                <BrowserRouter>
                    <Header/>
                    <PageRenderer/>
                    <Footer/>
                </BrowserRouter>
        </div>
    );
}

export default App;