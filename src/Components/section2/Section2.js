import Home_img from "../../assets/img/home-insurance.svg";
import car from "../../assets/img/car-insurance.svg";
import life from "../../assets/img/life-insurance.svg";
import business from "../../assets/img/business-insurance.svg";
import travel from "../../assets/img/travel-insurance.svg";
import other from "../../assets/img/other-insurance.svg";

function Section2() {
	return (
		<div className='section2'>
			<div className='py-5'>
				<h1 className='fs-2 fw-bolder'>Choose your Insurance</h1>
				<h2 className='fs-6 text-muted fw-light'>
					Keep Your Life, Safe, and Wealthy
				</h2>
			</div>

			<div className='row d-flex justify-content-center'>
				<div className='col-3'>
					<div className='card'>
						<div className="d-flex align-items-center justify-content-center" style={{height:150}}>
							<div
								style={{ height: 90, width: 90 }}
								className=' d-flex  align-items-center justify-content-center  rounded-circle bg1'
							>
								<img
									src={Home_img}
									className='card-img-top '
									alt='...'
									style={{ width: 50, height: 50 }}
								/>
							</div>
						</div>
						<div className='mb-4 card-body'>
							<h1 className='card-title fs-5'>Home Insurance</h1>
							<p className='card-text  text-muted'>
								Some quick example text to build on the card title and make up
								the bulk of the card's content.
							</p>
						</div>
					</div>
				</div>
				<div className='col-3'>
					<div className='card'>
					<div className="d-flex align-items-center justify-content-center" style={{height:150}}>
							<div
								style={{ height: 90, width: 90 }}
								className=' d-flex  align-items-center justify-content-center  rounded-circle bg2'
							>
								<img
									src={car}
									className='card-img-top '
									alt='...'
									style={{ width: 50, height: 50 }}
								/>
							</div>
						</div>
						<div className='mb-4 card-body'>
							<h1 className='card-title fs-5'>Car Insurance</h1>
							<p className='card-text  text-muted'>
								Some quick example text to build on the card title and make up
								the bulk of the card's content.
							</p>
						</div>
					</div>
				</div>
				<div className='col-3'>
					<div className='card'>
					<div className="d-flex align-items-center justify-content-center" style={{height:150}}>
							<div
								style={{ height: 90, width: 90 }}
								className=' d-flex  align-items-center justify-content-center  rounded-circle bg3'
							>
								<img
									src={life}
									className='card-img-top '
									alt='...'
									style={{ width: 50, height: 50 }}
								/>
							</div>
						</div>
						<div className='mb-4 card-body'>
							<h1 className='card-title fs-5'>Life Insurance</h1>
							<p className='card-text text-muted'>
								Some quick example text to build on the card title and make up
								the bulk of the card's content.
							</p>
						</div>
					</div>
				</div>
			</div>
			<div className='row d-flex justify-content-center py-5'>
				<div className='col-3'>
					<div className='card'>
						<div className="d-flex align-items-center justify-content-center" style={{height:150}}>
							<div
								style={{ height: 90, width: 90 }}
								className=' d-flex  align-items-center justify-content-center  rounded-circle bg4'
							>
								<img
									src={business}
									className='card-img-top '
									alt='...'
									style={{ width: 50, height: 50 }}
								/>
							</div>
						</div>
						<div className='mb-4 card-body'>
							<h1 className='card-title fs-5'>Business Insurance</h1>
							<p className='card-text  text-muted'>
								Some quick example text to build on the card title and make up
								the bulk of the card's content.
							</p>
						</div>
					</div>
				</div>
				<div className='col-3'>
					<div className='card'>
					<div className="d-flex align-items-center justify-content-center" style={{height:150}}>
							<div
								style={{ height: 90, width: 90 }}
								className=' d-flex  align-items-center justify-content-center  rounded-circle bg5'
							>
								<img
									src={travel}
									className='card-img-top '
									alt='...'
									style={{ width: 50, height: 50 }}
								/>
							</div>
						</div>
						<div className='mb-4 card-body'>
							<h1 className='card-title fs-5'>Travel Insurance</h1>
							<p className='card-text  text-muted'>
								Some quick example text to build on the card title and make up
								the bulk of the card's content.
							</p>
						</div>
					</div>
				</div>
				<div className='col-3'>
					<div className='card'>
					<div className="d-flex align-items-center justify-content-center" style={{height:150}}>
							<div
								style={{ height: 90, width: 90 }}
								className=' d-flex  align-items-center justify-content-center  rounded-circle bg6'
							>
								<img
									src={other}
									className='card-img-top '
									alt='...'
									style={{ width: 50, height: 50 }}
								/>
							</div>
						</div>
						<div className='mb-4 card-body'>
							<h1 className='card-title fs-5'>Other Insurance</h1>
							<p className='card-text text-muted'>
								Some quick example text to build on the card title and make up
								the bulk of the card's content.
							</p>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}

export default Section2;
