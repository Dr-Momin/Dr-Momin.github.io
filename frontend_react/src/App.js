import logo from './logo.svg';
import './App.css';
import {About,Footer,Header,Work, Skills, Testimonial} from "./container";
import {Navbar} from "./components";

function App() {
  return (
    <div className="app__primarybg ">

        <Navbar/>
        <About/>


    </div>
  );
}

export default App;