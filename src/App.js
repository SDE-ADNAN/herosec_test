import "./styles.scss";
import profile from "./viewPhoto.jpeg";
import emojis from "./assets"
import GradiantBlur from "./components/gradiantBlur/GradiantBlur";

export default function App() {


  return (<>
    <div className="main">
      <div className="image box">
        <img className="" src={profile} alt="profile" />
      </div>
      <ul className="circle-container">
        {emojis.map((emo,index)=>
        <li key={index}>
        <div>
          <img src={emo}/>
        </div>
      </li>
        )}
      </ul>
    </div>
    <div className='gradiant_blur_div'>
		<div className='heading'>Gradiant Blur Experiment</div>
    	<GradiantBlur/>
    </div>
    </>
  );
}
