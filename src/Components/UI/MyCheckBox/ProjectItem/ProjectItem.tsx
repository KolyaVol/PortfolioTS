import { Link } from "react-router-dom";
import "./ProjectItem.css";

interface PrItemProps {
	children?: string;
	url?: string | any;
}
export default function ProjectItem({ children, url }: PrItemProps) {
	return (
		<figure className="project-list__item">
			<div className="project-list__item__front"></div>
			<figcaption className="project-list__item__back">
				<p>{children}</p>
				<Link to={url}></Link>
			</figcaption>
		</figure>
	);
}
