import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import injectContext from "./store/appContext";

import { Footer } from "./component/footer.jsx";
import ScrollToTop from "./component/scrollToTop.jsx";
import {Home} from "./views/home.js";
import {Demo} from "./views/demo.js"
import {Navbar} from "./component/navbar.jsx";
import { Contact } from "./views/Contact.jsx";
import {AddContact} from "./views/AddContact.jsx"
import {ContactEdit} from "./views/ContactEdit.jsx"

//create your first component
const Layout = () => {
	//the basename is used when your project is published in a subdirectory and not in the root of the domain
	// you can set the basename on the .env file located at the root of this project, E.g: BASENAME=/react-hello-webapp/
	const basename = process.env.BASENAME || "";

	return (
		<div>
			<BrowserRouter basename={basename}>
				<ScrollToTop>
					<Navbar/>
					<Routes>
						<Route path="/" element={<Home/>} />
						<Route path="/contact" element={<Contact/>} />
						<Route path="/addcontact" element={<AddContact/>} />
						<Route path="/contactedit" element={<ContactEdit/>}/>
						<Route path="*" element={<h1 className="text-center fw-bold">404 not found</h1>} />
					</Routes>
					<Footer />
				</ScrollToTop>
			</BrowserRouter>
		</div>
	);
};

export default injectContext(Layout);