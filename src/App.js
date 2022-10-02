import React, { useEffect } from "react";
import Routers from "./routers";
import AOS from "aos";

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
	}, []);

	return (
		<>
			<Routers />
		</>
	);
};

export default App;
