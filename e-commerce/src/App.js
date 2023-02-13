import "./App.css";
import Header from "./components/header.js";
import Footer from "./components/footer.js";
import Featured from "./components/featured.js";
import "bootstrap/dist/css/bootstrap.min.css";
import MainSlider from "./components/mainslider";
function App() {
  return (
    <div className="App">
      <Header />
      <MainSlider />

      <Featured />
      <Footer />
    </div>
  );
}

export default App;
