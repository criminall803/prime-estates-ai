import { useState } from "react";

import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import FeaturedProperties from "./components/FeaturedProperties";
import ChatWidget from "./components/ChatWidget";

import "./styles.css";

function App() {
  const [openChat, setOpenChat] = useState(false);
  const [propertyPrompt, setPropertyPrompt] = useState("");

  return (
    <>
      <Navbar />

      <Hero />

      <FeaturedProperties
        setOpenChat={setOpenChat}
        setPropertyPrompt={setPropertyPrompt}
      />

      <ChatWidget
        openChat={openChat}
        setOpenChat={setOpenChat}
        propertyPrompt={propertyPrompt}
      />
    </>
  );
}

export default App;