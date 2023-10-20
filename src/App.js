import "./App.css"
import Slider from "./Components/Slider";
import Navbar from "./Components/Navbar";
import Body from "./Components/Body";
function App() {
    return (<>

        <div className="center">
            <Navbar />
            <Slider />
            <Body />
        </div>
    </>);
}

export default App;
