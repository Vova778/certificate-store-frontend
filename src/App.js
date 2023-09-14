import {BrowserRouter} from "react-router-dom";
import {Provider} from "react-redux";
import PageRenderer from "./components/PageRenderer";
import Header from "./components/include/Header";
import './assets/styles/App.css';
import Footer from "./components/include/Footer";
import store from "./store/Store";

function App() {
    return (
        <div className="App">
            <Provider store={store}>
                <BrowserRouter>
                    <Header/>
                    <PageRenderer/>
                    <Footer/>
                </BrowserRouter>
            </Provider>
        </div>
    );
}

export default App;