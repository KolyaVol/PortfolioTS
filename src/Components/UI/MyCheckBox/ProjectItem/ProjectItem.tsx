import { useState } from "react";
import { Link } from "react-router-dom";
import { useAppSelector } from "../../../../hooks/redux";
import "./ProjectItem.css";

interface PrItemProps {
	children?: string;
	src?: string;
	url?: string | any;
}
export default function ProjectItem({ children, src, url }: PrItemProps) {
	const prItemButton = useAppSelector(
		(state) => state.langReducer.lang.prItemButton
	);
	const [projectSpin, setProjectSpin] = useState(false);
	return (
		<figure
			className={
				projectSpin ? "project-list__item active" : "project-list__item "
			}
			onMouseEnter={() => setProjectSpin(true)}
			onMouseLeave={() =>
				setTimeout(() => {
					setProjectSpin(false);
				}, 1000)
			}
			
		>
			<img
				src={src}
				className="project-list__item-front"
				alt="project screen"
			></img>
			<figcaption className="project-list__item-back">
				<p>{children}</p>
				<Link to={url} target="_blank">
					{prItemButton}
				</Link>
			</figcaption>
		</figure>
	);
}
