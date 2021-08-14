import Middlehead from "./middleHead/Middlehead";
import Navbar from "./Navbar/Navbar";
import TopHead from "./TopHead/Tophead";
import image_banner from "../../assets/img/banner-1.png";
import Bottomhead from "./bottomhead/Bottomhead";

function Header() {
	return (
		<>
			<div className='top d-flex flex-row'>
				<div className='Header'>
					<Navbar />
					<TopHead />
				</div>
				<div className='img-container'>
					<img className='img' src={image_banner}  alt="illustration" />
				</div>
			</div>
			<Middlehead />
            <div className="my-5">
           <Bottomhead/>
           </div>
            
		</>
	);
}

export default Header;
