import { BrowserRouter } from "react-router-dom";

import {
  About,
  Contact,
  Experience,
  Feedbacks,
  Hero,
  Navbar,
  Tech,
  // Works,
  StarsCanvas,
} from "./components";
import Footer from "./components/footer";

const App = () => {
  return (
    <>
      {" "}
      <BrowserRouter>
        <div className="relative z-0 bg-primary">
          <div className="bg-center bg-no-repeat bg-hero-pattern bg-hover">
            <Navbar />
            <Hero />
          </div>

          <About />
          <Experience />
          <Tech />
          {/* <Works /> */}
          <Feedbacks />

          <div className="relative z-0">
            <Contact />
            <StarsCanvas />
          </div>

          <Footer />
          {console.clear()}
        </div>
      </BrowserRouter>
    </>
  );
};

export default App;
