import blue from "../../assets/img/after-blue.png";
import pink from "../../assets/img/after-pink.png";
function Section3() {
	return (
		<div className='section3'>
			<div className='py-5'>
				<h1 className='fs-2 fw-bolder'>Simplified Claims</h1>
				<h2 className='fs-6 text-muted fw-light'>
					Easy as One, two, three
				</h2>
			</div>

			<div className='row d-flex justify-content-center'>
				<div className='col-1' style={{width:250}}>
					<div className=''>
						<div className="d-flex align-items-center justify-content-center" style={{height:150}}>
							<div
								style={{ height: 90, width: 90 }}
								className=' d-flex  align-items-center justify-content-center  rounded-circle bg1'
							>
								<h1 className=" number1">1</h1>
							</div>
						</div>
						<div className='mb-4 card-body'>
							<h1 className='card-title fs-5'>Report Claim</h1>
							<p className='card-text  text-muted'>
							Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin quis nunc vitae velit rutrum suscipit non et eros.
							</p>
						</div>
					</div>
				</div>
				<div className="col-1 d-flex align-items-center" style={{width:50,height:200}}>
				<img alt=".." src={blue} style={{width:40}}/>
				</div>
				<div className='col-1' style={{width:250}}>
					<div className=''>
					<div className="d-flex align-items-center justify-content-center" style={{height:150}}>
							<div
								style={{ height: 90, width: 90 }}
								className=' d-flex  align-items-center justify-content-center  rounded-circle bg2'
							>
								<h1 className=" number2">2</h1>
							</div>
						</div>
						<div className='mb-4 card-body'>
							<h1 className='card-title fs-5'>Claim Processing</h1>
							<p className='card-text  text-muted'>
							Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin quis nunc vitae velit rutrum suscipit non et eros.
							</p>
						</div>
					</div>
				</div>
				<div className="col-1 d-flex align-items-center" style={{width:50,height:200}}>
				<img alt =".."src={pink} style={{width:40}}/>
				</div>
				<div className='col-1' style={{width:250}}>
					<div className=''>
					<div className="d-flex align-items-center justify-content-center" style={{height:150}}>
							<div
								style={{ height: 90, width: 90 }}
								className=' d-flex  align-items-center justify-content-center  rounded-circle bg3'
							>
								<h1 className=" number3">3</h1>
							</div>
						</div>
						<div className='mb-4 card-body'>
							<h1 className='card-title fs-5'>Final Settlement</h1>
							<p className='card-text text-muted'>
							Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin quis nunc vitae velit rutrum suscipit non et eros.
							</p>
						</div>
					</div>
				</div>
			</div>

		
		</div>
	);
}

export default Section3;
