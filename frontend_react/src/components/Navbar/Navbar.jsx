import React, {useState} from 'react';
import './Navbar.css';
import {images} from "../../constants";
import {HiMenu, HiX} from "react-icons/hi";
import {motion} from 'framer-motion';

const Navbar = () => {
    const [toggle, setToggle] = useState(false);


    return (
        <nav className={"app__navbar"}>

            <div className={"app__navbar-logo"}>
                <img src={images.logo} alt="logo"/>

            </div>

            <ul className={"app__navbar-links"}>
                {
                    ['home', 'about', 'work', 'skills', 'contact']
                        .map((item, i) =>
                                <li>
                    </li>
                    )
                }
            </ul>

            {/*<div className="app__navbar-menu">*/}
            {/*    <HiMenu onClick={() => {setToggle(true)}} />*/}
            {/*    {*/}
            {/*        toggle && (*/}
            {/*            <motion.div*/}
            {/*                whileInView={{x: [300, 0]}}*/}
            {/*                transition={{transition: 0.85, ease: 'easeOut'}}*/}
            {/*            >*/}
            {/*                <HiX onClick={()=> {setToggle(false)}} />*/}
            {/*                {*/}
            {/*                    ["home", "about", "work", "skills", "contact"].map((item, i) => (*/}
            {/*                        <li key={`link-${item}`} className={""}>*/}
            {/*                            <div></div>*/}
            {/*                            <a href=""></a>*/}
            {/*                        </li>*/}
            {/*                    ))*/}
            {/*                }*/}

            {/*            </motion.div>*/}
            {/*        )*/}
            {/*    }*/}
            {/*</div>*/}
        </nav>
    );
};

export default Navbar;
