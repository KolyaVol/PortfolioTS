import "./MySkills.css";

export default function MySkills() {
	return (
		<ul className="skills">
			<li>
				HTML5
				<svg className="svg" xmlns="http://www.w3.org/2000/svg">
					<circle className={"html5 disactive"} cx={"50%"} cy={"50%"} r={"2rem"} />
				</svg>
			</li>
			<li>
				CSS3
				<svg className="svg" xmlns="http://www.w3.org/2000/svg">
					<circle className={"css3"} cx={"50%"} cy={"50%"} r={"2rem"} />
				</svg>
			</li>
			<li>
				Responsive design
				<svg className="svg" xmlns="http://www.w3.org/2000/svg">
					<circle className={"Responsive"} cx={"50%"} cy={"50%"} r={"2rem"} />
				</svg>
			</li>
			<li>
				Git
				<svg className="svg" xmlns="http://www.w3.org/2000/svg">
					<circle className={"Git"} cx={"50%"} cy={"50%"} r={"2rem"} />
				</svg>
			</li>
			<li>
				JavaScript
				<svg className="svg" xmlns="http://www.w3.org/2000/svg">
					<circle className={"JavaScript"} cx={"50%"} cy={"50%"} r={"2rem"} />
				</svg>
			</li>
			<li>
				npm
				<svg className="svg" xmlns="http://www.w3.org/2000/svg">
					<circle className={"npm"} cx={"50%"} cy={"50%"} r={"2rem"} />
				</svg>
			</li>
			<li>
				NodeJS
				<svg className="svg" xmlns="http://www.w3.org/2000/svg">
					<circle className={"NodeJS"} cx={"50%"} cy={"50%"} r={"2rem"} />
				</svg>
			</li>
			<li>
				ReactJS
				<svg className="svg" xmlns="http://www.w3.org/2000/svg">
					<circle className={"ReactJS"} cx={"50%"} cy={"50%"} r={"2rem"} />
				</svg>
			</li>
			<li>
				TypeScript
				<svg className="svg" xmlns="http://www.w3.org/2000/svg">
					<circle className={"TypeScript"} cx={"50%"} cy={"50%"} r={"2rem"} />
				</svg>
			</li>
		</ul>
	);
}
