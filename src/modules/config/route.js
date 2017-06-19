import Home from "../maincontent/home/home.jsx";
import Hi from "../maincontent/hi/hi.jsx";
export default [{
	name: "HOME",
	path: "/",
	exact: true,	
	component: Home
}, {
	path: "/hi",
	name: "HI",
	component: Hi
}]