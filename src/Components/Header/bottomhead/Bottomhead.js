import image from "../../../assets/img/health-family-1.png";
import { BsCheckBox } from "react-icons/bs";
function Bottomhead() {
	return (
		<div className='d-flex flex-row'>
			<div className='img-container2'>
				<img className='img2' src={image} alt='illustration' />
			</div>
			<div className='my-4'>
				<h1 className='text2 text-start fs-5 fw-bold'>
					Monotonectally deploy seamless data and <br /> resource maximizing
					systems.{" "}
				</h1>
				<h1 className='text-start fs-6 fw-normal my-4'>
					Great for individuals and small families up to 4 members.{" "}
				</h1>
				<p className='p1 text-start text-muted fw-normal my-4'>
					A strong, up-to-date, employee benefits health insurance program is
					vital for <br />
					attracting and retaining good employees. It takes diligence,
					creativity and attention to <br /> detail to ensure you are getting
					the best “bang for your buck” each and every year.
				</p>

				<div>
					<div className='d-flex flex-row my-4 '>
						<div
							style={{ height: 50, width: 50 }}
							className='d-flex  align-items-center justify-content-center  rounded-circle bg'
						>
							<BsCheckBox
								style={{ width: 30, height: 30 }}
								className='text-success'
							/>
						</div>
						<div className='mx-3'>
							<h1 className='text-start fs-6 fw-normal '>
								Comprehensive Insurance
							</h1>
							<p className='p1 text-start text-muted fw-normal '>
								Dynamically repurpose e-business users rather than granular
								products.
							</p>
						</div>
					</div>
					<div className='d-flex flex-row my-4'>
						<div
							style={{ height: 50, width: 50 }}
							className='d-flex  align-items-center justify-content-center  rounded-circle bg'
						>
							<BsCheckBox
								style={{ width: 30, height: 30 }}
								className='text-success'
							/>
						</div>
						<div className='mx-3'>
							<h1 className='text-start fs-6 fw-normal '>
								Support is just a call away
							</h1>
							<p className='p1 text-start text-muted fw-normal '>
								Rapidiously customize value-added platforms compliant action
								items.
							</p>
						</div>
					</div>
					<div className='d-flex flex-row my-4'>
						<div
							style={{ height: 50, width: 50 }}
							className='d-flex  align-items-center justify-content-center  rounded-circle bg'
						>
							<BsCheckBox
								style={{ width: 30, height: 30 }}
								className='text-success'
							/>
						</div>
						<div className='mx-3'>
							<h1 className='text-start fs-6 fw-normal '>
								Say goodbye to paperwork.
							</h1>
							<p className='p1 text-start text-muted fw-normal '>
								Globally deliver economically sound communities relationships.
							</p>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}

export default Bottomhead;
