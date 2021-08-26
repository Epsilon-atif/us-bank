import "./App.css";
import Navbar from "./navBar/Navbar";
import Sections from "./sections/Sections";
import Cameras from "./cameras/Cameras";
import Products from "./products/Products";
import { RelatedItems } from "./relatedItems/RelatedItems";
import { Footer } from "./footer/Footer";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Sections />
      <Cameras />
      <Products />
      <RelatedItems />
      <Footer />
    </div>
  );
}

export default App;
