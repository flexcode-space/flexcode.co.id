import React, { useEffect } from "react";
import Routers from "./routers";
import AOS from "aos";
import ReactGA from "react-ga";

import "aos/dist/aos.css";
import "swiper/css";
import "swiper/css/navigation";
import "bootstrap/dist/js/bootstrap.bundle";
import "react-modal-video/scss/modal-video.scss";
import "react-loading-skeleton/dist/skeleton.css";

const App = () => {
	useEffect(() => {
		AOS.init();
		AOS.refresh();
		ReactGA.initialize("G-2FYS8B7GS0");
		ReactGA.pageview(window.location.pathname + window.location.search);
	}, []);

	return (
		<>
			<Routers />
		</>
	);
};

export default App;
