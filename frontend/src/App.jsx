import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import FeaturedProperties from "./components/FeaturedProperties";
import ChatWidget from "./components/ChatWidget";

import "./styles.css";

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <FeaturedProperties />
      <ChatWidget />
    </>
  );
}

export default App;