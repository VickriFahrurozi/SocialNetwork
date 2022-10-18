/** @format */
import { twitter, linkedin, facebook } from './asset/asset';
import Image from 'next/image';
const Footer = () => {
	return (
		<>
			<div className='col-12  horizontal-line  mb-4 footer-line'></div>
			<div className='container-fluid'>
				<div className='row'>
					<div className='col-12 d-flex justify-content-lg-start justify-content-center align-items-baseline'>
						<div>
							<Image className='image-footer' src={facebook} />
						</div>
						<div className='ms-3 me-3'>
							<Image src={twitter} />
						</div>
						<div>
							<Image className='image-footer' src={linkedin} height={'85%'} />
						</div>
					</div>

					<div className='col-12 d-flex justify-content-lg-start justify-content-center flex-wrap mt-4 mb-4'>
						<div className='secondarycolor'>About</div>
						<div className='ms-3 me-3 secondarycolor'>/</div>
						<div className='secondarycolor'>For Business</div>
						<div className='ms-3 me-3 secondarycolor'>/</div>
						<div className='secondarycolor'>Suggestions</div>
						<div className='ms-3 me-3 secondarycolor'>/</div>
						<div className='secondarycolor'>Help & FAQs</div>
						<div className='ms-3 me-3 secondarycolor'>/</div>
						<div className='secondarycolor'>Contacts</div>
						<div className='ms-3 me-3 secondarycolor'>/</div>
						<div className='secondarycolor'>Pricing</div>
						<div className='ms-3 me-3 secondarycolor'>/</div>
					</div>
					<div className='col-12 d-flex justify-content-lg-start justify-content-center'>
						<div className='secondarycolor'>
							© Copyright 2013 CompanyName inc
						</div>
					</div>
					<div className='col-12 d-flex justify-content-lg-start justify-content-center mt-1'>
						<div className='me-2 secondarycolor'>Privacy</div>
						<div className='ms-2 secondarycolor'>Terms</div>
					</div>
				</div>
			</div>
		</>
	);
};

export default Footer;
