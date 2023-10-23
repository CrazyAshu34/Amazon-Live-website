import "./App.css"
import Slider from "./Components/Slider";
import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";

function App() {
    return (<div>
        <div className="center">
            <Navbar />
            <Slider />
            <Footer /> 
        </div>
    </div>);
}

export default App;
