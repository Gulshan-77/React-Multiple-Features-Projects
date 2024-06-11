import Accordian from "./components/Accordian";
import ImageSlider from "./components/Image-slider";
import RandomColor from "./components/random-color-generator";
import StarRating from "./components/StarRating";

function App() {
  return (
    <div className="App">
      <Accordian />
      <RandomColor />
      <StarRating />
      <ImageSlider />
    </div>
  );
}

export default App;
