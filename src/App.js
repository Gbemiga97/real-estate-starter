import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Footer, Header } from "./components";
import { Home, PropertyDetails } from "./pages";


const App = () => {
  return (
    <div className="max-w-[1440px] mx-auto bg-white">
    <BrowserRouter>
    <Header />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/property/:id" element={<PropertyDetails />} />
    </Routes>
    <Footer />
    </BrowserRouter>
    </div>
  )
};

export default App;
