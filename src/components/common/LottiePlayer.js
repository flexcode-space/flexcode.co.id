import { Player } from "@lottiefiles/react-lottie-player";
import React from "react";

const LottiePlayer = (props) => {
	const { src, width, height } = props;

	return (
		<Player
			autoplay
			loop
			src={src}
			style={{
				height: width || "350px",
				width: height || "350px",
				maxWidth: "100%",
			}}
		></Player>
	);
};

export default LottiePlayer;
