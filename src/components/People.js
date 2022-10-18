/** @format */
import styles from '../../styles/Home.module.css';
import { circle, uploadmobile, uploaddocument } from './asset/asset';
import Image from 'next/image';
import { message } from './asset/asset';

const People = () => {
	return (
		<>
			<div className='container-fluid videos-content '>
				<div className='row'>
					{/* Mobile */}
					<div className='mobile-header'>
						<div className='col-md-9 '>
							<div className='col-sm-8 col-12 d-flex justify-content-between align-items-baseline mt-sm-5'>
								<div className='videos-text'>People</div>
								<div className='videos-text-small'>View All</div>
							</div>
							<div className='col-12 d-flex overflow-auto'>
								<div
									className={`${styles.secondarycolor} col-sm-8 col-10 ps-3 pe-3 videos-parent mb-2 me-2 box-fill`}
								>
									<div className='videos-main col-12 primarycolor'>
										<h1>Waseem Ahmad</h1>

										<div className='col-12 d-flex justify-content-between  pe-5 primarycolor'>
											<h6>User Interface Designer</h6>
											<h6>197867 Votes</h6>
										</div>
									</div>
								</div>
								<div
									className={`${styles.secondarycolor} col-sm-8 col-10 ps-3 pe-3 videos-parent mb-2 me-2 box-fill`}
								>
									<div className='videos-main col-12 primarycolor'>
										<h1>Waseem Ahmad</h1>

										<div className='col-12 d-flex justify-content-between  pe-5 primarycolor'>
											<h6>User Interface Designer</h6>
											<h6>197867 Votes</h6>
										</div>
									</div>
								</div>
								<div
									className={`${styles.secondarycolor} col-sm-8 col-10 ps-3 pe-3 videos-parent mb-2 me-2 box-fill`}
								>
									<div className='videos-main col-12 primarycolor'>
										<h1>Waseem Ahmad</h1>

										<div className='col-12 d-flex justify-content-between  pe-5 primarycolor'>
											<h6>User Interface Designer</h6>
											<h6>197867 Votes</h6>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
					{/* Mobile */}

					{/* People */}
					<div className='col-lg-9 right-header'>
						<div>
							<div className='col-sm-8 col-12 d-flex justify-content-between align-items-baseline mt-sm-5'>
								<div className='videos-text'>People</div>
								<div className='videos-text-small'>View All</div>
							</div>
							<div className='col-12 d-flex'>
								<div
									className={`${styles.secondarycolor} col-sm-8 col-10 ps-3 pe-3 videos-parent mb-2 me-2 box-fill`}
								>
									<div className='videos-main col-12 primarycolor'>
										<h1>Waseem Arshad</h1>

										<div className='col-12 d-flex justify-content-between  pe-5 primarycolor'>
											<h6>User Interface Designer</h6>
											<h6>197867 Votes</h6>
										</div>
									</div>
								</div>

								<div className='col-4 mb-2 videos-parent right-header'>
									<div
										className={`col-12 d-flex justify-content-between ps-3 pe-3 box-fill-2 mb-1 ${styles.secondarycolor} primarycolor`}
									>
										<h6>Michael Koliph</h6>
									</div>
									<div
										className={` col-12 d-flex justify-content-between ps-3 pe-3 box-fill-2 mt-1 ${styles.secondarycolor} primarycolor`}
									>
										<h6>Ahmed Yasin</h6>
									</div>
								</div>
							</div>

							<div className='col-12 d-flex primarycolor right-header'>
								<div
									className={` col-4 d-flex justify-content-between ps-3 pe-3 box-fill-3  ${styles.secondarycolor} `}
								>
									<h6>John Stainior</h6>
								</div>
								<div
									className={` col-4 d-flex justify-content-between ps-3 pe-3 box-fill-3 ms-2 me-2 ${styles.secondarycolor} `}
								>
									<h6>John Doe</h6>
								</div>
								<div
									className={` col d-flex justify-content-center ps-3 pe-3  align-items-center border-videos`}
								>
									<div>
										<Image src={circle} width={'50%'} height={'50%'} />
									</div>
									<div className='secondarycolor ms-3'>
										Show <br /> Your Work
									</div>
								</div>
							</div>
						</div>

						{/* Documents */}
						<div>
							<div className='col-lg-8 col-12 d-flex justify-content-between align-items-baseline mt-sm-5'>
								<div className='videos-text'>Documents</div>
								<div className='videos-text-small'>Browse All Documents </div>
							</div>
							<div className='col-12 d-flex'>
								<div
									className={`${styles.secondarycolor} col-sm-8 col-10 ps-3 pe-3 videos-parent mb-2 me-2 box-fill`}
								>
									<div className='videos-main col-12 primarycolor'>
										<h1>Mobile Ui & Ux Guide 2013</h1>

										<div className='col-12  pe-5 primarycolor justify-content-between'>
											<h6>By William Makhoja</h6>
											<h6>197867 Views</h6>
										</div>
									</div>
								</div>

								<div className='col-4 mb-2 videos-parent right-header'>
									<div
										className={`col-12  ps-3 pe-3 box-fill-2 mb-1 justify-content-between  ${styles.secondarycolor} primarycolor`}
									>
										<h6>HTML 5 and Usage</h6>
										<h6>131367 Views</h6>
									</div>
									<div
										className={` col-12  ps-3 pe-3 box-fill-2 mt-1  justify-content-between ${styles.secondarycolor} primarycolor`}
									>
										<h6>How To Become an Expert</h6>
										<h6>912645 Views</h6>
									</div>
								</div>
							</div>

							<div className='col-12 d-flex primarycolor right-header'>
								<div
									className={` col-4 d-flex  ps-3 pe-3 box-fill-3 justify-content-between ${styles.secondarycolor} `}
								>
									<h6>2013 Marketing Trends</h6>
									<h6>912645 Views</h6>
								</div>
								<div
									className={` col-4 d-flex  ps-3 pe-3 box-fill-3 ms-2 me-2 justify-content-between ${styles.secondarycolor} `}
								>
									<h6>2013 Marketing Trends</h6>
									<h6>912645 Views</h6>
								</div>
								<div
									className={` col d-flex justify-content-center ps-3 pe-3  align-items-center border-videos`}
								>
									<div>
										<Image src={uploaddocument} width={'50%'} height={'50%'} />
									</div>
									<div className='secondarycolor ms-3'>
										Share <br /> Your Document
									</div>
								</div>
							</div>
						</div>
						{/* Documents */}
					</div>
					{/* People */}
					{/* Channel */}
					<div className='col-12 col-lg-3  mt-5 '>
						<div className=' col d-flex  align-items-baseline justify-content-between flex-wrap'>
							<div className='videos-text-activity '>Channels</div>
							<div className='videos-text-small-activity'>
								Browse All Channels
							</div>
						</div>
						<div className='col-12  horizontal-line mt-2 mb-4 right-header'></div>
						{/* Responsive */}
						<div className='col-12 d-flex primarycolor mobile-header justify-content-around'>
							<div
								className={` col-4 d-flex justify-content-center  box-fill-6  mb-3 ${styles.secondarycolor} `}
							>
								<h4>Google</h4>
							</div>
							<div
								className={` col-4 d-flex justify-content-center  box-fill-6 ms-2 me-2 mb-3 ${styles.secondarycolor} `}
							>
								<h4>Dribble</h4>
							</div>
							<div
								className={` col-4 d-flex justify-content-center  box-fill-6 mb-3 ${styles.secondarycolor} `}
							>
								<h4>Microsoft</h4>
							</div>
						</div>
						<div className='col-12 d-flex primarycolor mobile-header justify-content-around'>
							<div
								className={` col-4 d-flex justify-content-center  box-fill-6  mb-3 ${styles.secondarycolor} `}
							>
								<h4>Behance</h4>
							</div>
							<div
								className={` col-4 d-flex justify-content-center  box-fill-6 ms-2 me-2 mb-3 ps-3 ${styles.secondarycolor} `}
							>
								<h6>Weather Channel</h6>
							</div>
							<div
								className={` col-4 d-flex justify-content-center  box-fill-6 mb-3 ${styles.secondarycolor} `}
							>
								<h4>Gurus</h4>
							</div>
						</div>
						<div className='col-12 d-flex primarycolor mobile-header justify-content-around'>
							<div
								className={` col-4 d-flex justify-content-center  box-fill-6  mb-3 ${styles.secondarycolor} `}
							>
								<h4>iMedia</h4>
							</div>
							<div
								className={` col-4 d-flex justify-content-center  box-fill-6 ms-2 me-2 mb-3 ${styles.secondarycolor} `}
							>
								<h4>Creativeeye</h4>
							</div>
							<div
								className={` col-4 d-flex justify-content-center  box-fill-6 mb-3 ps-3 ${styles.secondarycolor} `}
							>
								<h4>Khan Studios</h4>
							</div>
						</div>

						{/* Responsive */}

						<div className='col-12 d-flex primarycolor right-header justify-content-around flex-wrap'>
							<div
								className={` col-5 d-flex justify-content-between ps-3 pe-3 box-fill-5  mb-3 ${styles.secondarycolor} `}
							>
								<h4>Google</h4>
							</div>
							<div
								className={` col-5 d-flex justify-content-between ps-3 pe-3 box-fill-5 ms-2 me-2 mb-3 ${styles.secondarycolor} `}
							>
								<h4>Dribble</h4>
							</div>
							<div
								className={` col-5 d-flex justify-content-between ps-3 pe-3 box-fill-5 mb-3 ${styles.secondarycolor} `}
							>
								<h4>Microsoft</h4>
							</div>
							<div
								className={` col-5 d-flex justify-content-between ps-3 pe-3 box-fill-5 ms-2 me-2 mb-3 ${styles.secondarycolor} `}
							>
								<h4>Behance</h4>
							</div>
							<div
								className={` col-5 d-flex justify-content-between ps-3 pe-3 box-fill-5 mb-3 ${styles.secondarycolor} `}
							>
								<h6>Weather Channel</h6>
							</div>
							<div
								className={` col-5 d-flex justify-content-between ps-3 pe-3 box-fill-5 ms-2 me-2 mb-3 ${styles.secondarycolor} `}
							>
								<h4>Gurus</h4>
							</div>
							<div
								className={` col-5 d-flex justify-content-between ps-3 pe-3 box-fill-5 mb-3 ${styles.secondarycolor} `}
							>
								<h4>iMedia</h4>
							</div>
							<div
								className={` col-5 d-flex justify-content-between ps-3 pe-3 box-fill-5 ms-2 me-2 mb-3 ${styles.secondarycolor} `}
							>
								<h4>Creativeeye</h4>
							</div>
							<div
								className={` col-5 d-flex justify-content-between ps-3 pe-3 box-fill-5 mb-3 ${styles.secondarycolor} `}
							>
								<h6>Khan Studios</h6>
							</div>
							<div
								className={` col-5 d-flex justify-content-between ps-3 pe-3 box-fill-5 ms-2 me-2 mb-3 ${styles.secondarycolor} `}
							>
								<h4>Yahoo</h4>
							</div>
						</div>
					</div>
					{/* Channel */}
					{/* Documents Responsive*/}
					<div className='mobile-header'>
						<div className='col-md-9 '>
							<div className='col-sm-8 col-12 d-flex justify-content-between align-items-baseline mt-sm-5'>
								<div className='videos-text'>Documents</div>
								<div className='videos-text-small'>Browse All Documents</div>
							</div>
							<div className='col-12 d-flex overflow-auto'>
								<div
									className={`${styles.secondarycolor} col-sm-8 col-10 ps-3 pe-3 videos-parent mb-2 me-2 box-fill`}
								>
									<div className='videos-main col-12 primarycolor'>
										<h1>Mobile Ui & Ux Guide 2013</h1>

										<div className='col-12 justify-content-between  pe-5 primarycolor'>
											<h6>By William Makhoja </h6>
											<h6>197867 Views</h6>
										</div>
									</div>
								</div>
								<div
									className={`${styles.secondarycolor} col-sm-8 col-10 ps-3 pe-3 videos-parent mb-2 me-2 box-fill`}
								>
									<div className='videos-main col-12 primarycolor'>
										<h1>Mobile Ui & Ux Guide 2013</h1>

										<div className='col-12 justify-content-between  pe-5 primarycolor'>
											<h6>By William Makhoja </h6>
											<h6>197867 Views</h6>
										</div>
									</div>
								</div>
								<div
									className={`${styles.secondarycolor} col-sm-8 col-10 ps-3 pe-3 videos-parent mb-2 me-2 box-fill`}
								>
									<div className='videos-main col-12 primarycolor'>
										<h1>Mobile Ui & Ux Guide 2013</h1>

										<div className='col-12 justify-content-between  pe-5 primarycolor'>
											<h6>By William Makhoja </h6>
											<h6>197867 Views</h6>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
					{/* Documents Responsive*/}
				</div>
			</div>
		</>
	);
};

export default People;
