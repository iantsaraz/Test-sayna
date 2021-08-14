import quote from "../../assets/img/quote.png";
function Section4() {
	return (
		<div className='section4 my-5'>
			<div className="quote"> 
				<img src={quote} alt='..' className="d-flex justify-content-start"/>
				<h1 className="text-start fs-5 py-3">
					I need to understand what’s going on – it’s <br/> my health and I want to
					feel secure in it.<br/> With my previous health insurance, I didn’t<br/> know
					how any of it worked.
				</h1>
				<div>
				<h1 className="text-start fs-6 text-primary" >Matthew Young</h1>
				<h1 className="text-start fs-6 text-muted fw-light ">Legal Consultant, United States</h1>
				</div>
			</div>
		</div>
	);
}

export default Section4;
