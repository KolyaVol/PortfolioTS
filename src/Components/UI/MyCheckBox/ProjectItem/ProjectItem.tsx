import { useState } from "react";
import { Link } from "react-router-dom";
import { useAppSelector } from "../../../../hooks/redux";
import "./ProjectItem.css";

interface PrItemProps {
	children?: string;
	src?: string;
	url?: string;
}
export default function ProjectItem({ children, src, url }: PrItemProps) {
	const prItemButton = useAppSelector(
		(state) => state.langReducer.lang.prItemButton
	);
	const [projectSpin, setProjectSpin] = useState(false);
	let checkProjectSpin = false;
	const mouseEnterHandler = () => {
		setProjectSpin(true);
		checkProjectSpin = true;
	};
	const mouseLeaveHandler = () => {
		checkProjectSpin = false;

		setTimeout(() => {
			if (!checkProjectSpin) setProjectSpin(false);
		}, 1000);
	};

	return (
		<figure
			className={
				projectSpin ? "project-list__item active" : "project-list__item "
			}
			onMouseEnter={() => mouseEnterHandler()}
			onMouseLeave={() => mouseLeaveHandler()}
		>
			<img
				src={src}
				className="project-list__item-front"
				alt="project screen"
			></img>
			<figcaption className="project-list__item-back">
				<p>{children}</p>
				<div className="project-list__item-btn">
					<Link to={url ? url : "#"} target="_blank">
						{prItemButton}
					</Link>
				</div>
			</figcaption>
		</figure>
	);
}
