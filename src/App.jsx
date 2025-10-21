import { useState, useEffect, useRef } from "react";
import Header from "./pages/Header";
import Home from "./pages/Home";
import Footer from "./pages/Footer";

function App() {
  const [atTop, setAtTop] = useState(true);
  const mainRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      if (mainRef.current) {
        setAtTop(mainRef.current.scrollTop === 0);
      }
    };

    const mainEl = mainRef.current;
    mainEl.addEventListener("scroll", handleScroll);

    return () => mainEl.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="flex flex-col w-screen h-screen overflow-auto">
      <Header atTop={atTop} />
      <main ref={mainRef} className="flex-1 ">
        <Home />
      </main>
      <Footer/>
    </div>
  );
}

export default App;
