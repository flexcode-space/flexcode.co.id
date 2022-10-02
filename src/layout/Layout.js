import React from "react";
import FloatingWhatsApp from "react-floating-whatsapp";
import FooterOne from "./Footer/FooterOne";
import Navbar from "./Header/Navbar";

const Layout = ({ children, hasClass, classOpt }) => {
	return (
		<div
			className={`main-wrapper ${classOpt} ${
				hasClass ? "overflow-hidden" : null
			}`}
		>
			<Navbar navDark />
			{children}
			<FooterOne
				footerDark
				style={{
					background:
						"url('/assets/img/page-header-bg.svg')no-repeat bottom right",
				}}
			/>
			<FloatingWhatsApp
				phoneNumber="628888641170"
				accountName="FlexCode Support"
				avatar="/assets/images/flexcode-icon.png"
				statusMessage="Online"
				allowClickAway
				notification
				notificationDelay={60000}
				notificationSound
				allowEsc
			/>
		</div>
	);
};

export default Layout;
