import "./styles.scss";
import profile from "./viewPhoto.jpeg";
import emojis from "./assets"
import GradiantBlur from "./components/gradiantBlur/GradiantBlur";
import bg from "./assets/bg.svg"

export default function App() {
	return (<>
		<div className='master_container'>
			<img src={bg} alt='bg' />
			<div className='main_contents_container'>
			<div className='gradiant_blur_div'>
					<div className='heading'>Gradiant Blur</div>
					<GradiantBlur />
				</div>
				<div className="main">
					<div className="image box">
						<img className="" src={profile} alt="profile" />
					</div>
					<ul className="circle-container">
						{emojis.map((emo, index) =>
							<li key={index}>
								<div>
									<img src={emo} />
								</div>
							</li>
						)}
					</ul>
				</div>
			</div>
		</div>
	</>
	);
}
