// import logo from './logo.svg';
import "./App.css";
import EventInfo from "./components/EventInfo";
import Footer from "./components/Foooter";
import Header from "./components/Header";
import Navigation from "./components/Navigation";
import Schedule from "./components/Shedule";
import Speakers from "./components/Speakers";

function App() {
  return (
    <div>
      <Navigation />
      <Header />
      <EventInfo />
      <Speakers />
      <Schedule />
      <Footer />
      {/* <!-- End: Footer --> */}
    </div>
  );
}

export default App;
