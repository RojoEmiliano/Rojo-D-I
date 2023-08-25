import { Link, useLocation } from "react-router-dom";
import "./navBar.scss";
import { themes } from "../../utils/themes";
import logo from "../../assets/img/logoindex.jpg";
import { useEffect, useState } from "react";

const NavBar = () => {
	const location = useLocation();
	const [theme, setTheme] = useState("");

	useEffect(() => {
		if (location.pathname.includes("ricoh")) {
			setTheme(themes.ricoh);
		} else if (location.pathname.includes("epson")) {
			setTheme(themes.epson);
		} else if (location.pathname.includes("about")) {
			setTheme(themes.about);
		} else if (location.pathname.includes("contact")) {
			setTheme(themes.contact);
		} else {
			setTheme(themes.inicio);
		}
	}, [location.pathname]);

	return (
		<header className="header">
			<div className="headerContainer">
				<div>
					<Link to="/">
						<img className="headerLogo" src={logo} />
					</Link>
				</div>
				<div className="headerItems">
					<div className="">
						<Link className="headerItem" to="/">
							<a
								className={`${
									theme === themes.inicio
										? "bg-ricoh text-white hover:bg-ricohHover"
										: ""
								} mt-4 px-4 py-2  rounded-lg  focus:outline-none`}
							>
								INICIO
							</a>
						</Link>
					</div>
					<div className="headerItemContainer">
						<Link
							className={`${
								theme === themes.ricoh
									? "bg-ricoh  text-white hover:bg-ricohHover"
									: ""
							} mt-4 px-4 py-2 rounded-lg  focus:outline-none`}
							to="/ricoh"
						>
							<a>RICOH</a>
						</Link>
					</div>
					<div className="headerItemContainer">
						<Link className="headerItem" to="/epson">
							<a
								className={`${
									theme === themes.epson
										? "bg-epson text-white hover:bg-epsonHover"
										: ""
								} mt-4 px-4 py-2  rounded-lg  focus:outline-none`}
							>
								EPSON
							</a>
						</Link>
					</div>
					<div className="headerItemContainer">
						<Link className="headerItem" to="/nosotros">
							<a
								className={`${
									theme === themes.about
										? "bg-ricoh  text-white hover:bg-ricohHover"
										: ""
								} mt-4 px-4 py-2 rounded-lg  focus:outline-none`}
							>
								SOBRE NOSOTROS
							</a>
						</Link>
					</div>
					<div className="headerItemContainer">
						<Link className="headerItem" to="/contact">
							<a
								className={`${
									theme === themes.contact
										? "bg-ricoh text-white hover:bg-ricohHover"
										: ""
								} mt-4 px-4 py-2  rounded-lg  focus:outline-none`}
							>
								CONTACTO
							</a>
						</Link>
					</div>
				</div>
			</div>
		</header>
	);
};

export default NavBar;
