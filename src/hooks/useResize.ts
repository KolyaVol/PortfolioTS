import { useEffect, useState } from "react";

export const useResize = () => {
	const [windowWidth, setWindowWidth] = useState(window.innerWidth);
	useEffect(() => {
		const handleResize = (e: any) => {
			setWindowWidth(e.target.innerWidth);
		};
		window.addEventListener("resize", handleResize);
		return () => {
			window.removeEventListener("resize", handleResize);
		};
	}, []);
	return windowWidth
};
