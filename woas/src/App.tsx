import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import Main from "./components/Main/Main";

import { useMediaQuery } from "react-responsive";
import MobileHeader from "./components/MobileHeader/MobileHeader";

function App() {
  const isTabletOrMobile = useMediaQuery({
    query: "(max-width: 1025px)",
  });

  return (
    <>
      {isTabletOrMobile ? <MobileHeader /> : <Header />}

      <Main />
      <Footer />
    </>
  );
}

export default App;
