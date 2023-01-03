import './MyCheckBox.css'

interface Props {
	title: string;
	handler?: any;
	state?: boolean;
	setState?: any;
}

export default function MyCheckBox(props: Props) {
	return (
		<div className="swithcer">
			<span className="swithcer__title">{props.title}</span>
			<label className="switch">
				<input
					checked={props.state}
					onChange={() => props.handler()}
					type="checkbox"
				/>
				<span className="slider round"></span>
			</label>
		</div>
	);
}
