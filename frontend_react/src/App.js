import logo from './logo.svg';
import './App.css';
import {About,Footer,Header,Work, Skills, Testimonial} from "./container";
import {Navbar} from "./components";

function App() {
  return (
    <div className="">

        <Navbar/>
        <Header/>
        <About/>
        <Work/>
        <Skills/>
        <Footer/>

    </div>
  );
}

export default App;
