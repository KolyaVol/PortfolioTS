import React from 'react'
import './Header.css'

export default function Header() {

  return (
		<header>
			<nav>
				<ul>
					<li className="logo">LOGO</li>
					<li>ABOUT ME</li>
					<li>MY PROJECTS</li>
					<li>CONTACTS</li>
					<li>
						<span>EN</span>
						<label className="switch">
							<input type="checkbox" />
							<span className="slider round"></span>
						</label>
					</li>
					<li>
						<span>DARK</span>
						<label className="switch">
							<input type="checkbox" />
							<span className="slider round"></span>
						</label>
					</li>
				</ul>
			</nav>

			<figure>
				<img className="header_img" src="" alt="look at me" />
				<figcaption className="header_figcaption">
					<h2>Hello!</h2>
					<h1>
						I'm Nikolai
						<br />
						Valoshchik
					</h1>
					<h3>
						I've been doing front-end and some back-end development for a year
						now. Do you need a responsive website, SPA, or maybe a deploing your
						app? Then contact me
					</h3>
				</figcaption>
			</figure>
		</header>
	);
}
