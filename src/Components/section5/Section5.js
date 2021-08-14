import shield from "../../assets/img/shield-yellow.svg";
function Section5() {
	return (
		<div className='section5 my-5 d-flex justify-content-center align-items-center '>
			<div className='box shadow d-flex justify-content-center rounded'>

			<img src={shield} alt='..' className=" shield d-flex justify-content-start"/>
				<div>
					<h1 className='fs-5 text-start '>100% Satisfaction Guarantee</h1>
					<h1 className=' fs-6 text-muted fw-light text-start'>
						We offer no questions asked refund policy for 14 days from the
						policy date.
					</h1>
				</div>
				<div className='d-flex justify-content-center px-4'>
					<button className='btn1 border-0  text-white rounded'>Get your free Quote</button>
				</div>
			</div>
		</div>
	);
}

export default Section5;
