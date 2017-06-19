import Home from "../modules/maincontent/home/home.jsx";
import Hi from "../modules/maincontent/hi/hi.jsx";
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