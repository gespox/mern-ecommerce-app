import Header from "./components/Layout/Header/Header";
import Footer from "./components/Layout/Footer/Footer";
import { Policy } from "./components/Layout/Policy/Policy";
import { Sliders } from "./components/Slider/Sliders";

export default function App() {
  return (
    <div>
      <Header />
      <Sliders />
      <h1>App</h1>
      <Policy />
      <Footer />
    </div>
  );
}
