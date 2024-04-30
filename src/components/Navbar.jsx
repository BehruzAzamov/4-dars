import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import toast from "react-hot-toast";
import { RxDropdownMenu } from "react-icons/rx";


const themes = {
    winter: "winter",
    dracula: "dracula",
};

function LocalStorageTheme() {
    return localStorage.getItem("mode") || themes.winter;
}

const Navbar = () => {
    const [theme, setTheme] = useState(LocalStorageTheme());

    function handleClick() {
        const newTheme = theme === themes.winter ? themes.dracula : themes.winter;
        setTheme(newTheme);
        toast.success("Changed theme");
    }

    useEffect(() => {
        document.documentElement.setAttribute("data-theme", theme);
        localStorage.setItem("mode", theme);
    }, [theme]);

    return (
        <div>
            <div className="navbar align-element mb-10">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="flex lg:hidden"><RxDropdownMenu className="text-5xl"/>
                        </div>
                        <ul tabIndex={0} className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52">
                            <li><a>Item 1</a></li>
                            <li><a>Item 2</a></li>
                        </ul>
                    </div>
                    <Link className="btn btn-lg btn-primary flex lg:hidden">C</Link>
                </div>

                <div className="navbar-center">
                    <div className="dropdown dropdown-end">
                        <ul className="flex gap-3"
                        >
                            <li>
                                <Link className="focus:bg-base-100" to="/">Home</Link>
                            </li>
                            <li>
                                <Link className="focus:bg-base-100 w-7 h-7" to="/about">About</Link>
                            </li>
                            <li>
                                <Link className="focus:bg-base-100 w-7 h-7" to="/products">Products</Link>
                            </li>
                            <li>
                                <Link className="focus:bg-base-100 w-7 h-7" to="/cart">Cart</Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Navbar;