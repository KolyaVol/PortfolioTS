import React from "react";

export default function SkillProgressBar() {
	return (
		<div className="frame">
			<div>
				<div className="headline">
					<div>your daily progress</div>
				</div>
				<div className="circle-big">
					<div className="text">
						2758<div className="small">kcal</div>
					</div>
					<svg>
						<circle className="bg" cx="57" cy="57" r="52"></circle>
						<circle className="progress" cx="57" cy="57" r="52"></circle>
					</svg>
				</div>
				<div className="circles-small">
					<div className="circle-small">
						<div className="text">
							8563
							<br />
							<span className="small">steps</span>
						</div>
						<svg>
							<circle className="bg" cx="40" cy="40" r="37"></circle>
							<circle className="progress one" cx="40" cy="40" r="37"></circle>
						</svg>
					</div>
					<div className="circle-small">
						<div className="text">
							6,2
							<br />
							<span className="small">km</span>
						</div>
						<svg>
							<circle className="bg" cx="40" cy="40" r="37"></circle>
							<circle className="progress two" cx="40" cy="40" r="37"></circle>
						</svg>
					</div>
				</div>
			</div>
		</div>
	);
}
