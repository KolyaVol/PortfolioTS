import './MyCheckBox.css'

interface Props {
    title: string,
    clickHandler?: any
}

export default function MyCheckBox(props: Props) {
  return (
		<div className="myCheckBox">
			<span className="myCheckBox_title">{props.title}</span>
			<label className="switch">
				<input type="checkbox" />
				<span className="slider round"></span>
			</label>
		</div>
	);
}
