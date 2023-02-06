export default function SkillProgressBar(props: { cssClass: string; disactive: string }) {
	return (
		<svg className="skill-progress-bar__item" xmlns="http://www.w3.org/2000/svg">
			<circle
				className={`${props.cssClass} ${props.disactive}`}
				cx={"50%"}
				cy={"50%"}
				r={"2rem"}
			/>
		</svg>
	);
}
