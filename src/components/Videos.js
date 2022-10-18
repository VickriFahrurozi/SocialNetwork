/** @format */
import styles from '../../styles/Home.module.css';
import { uploadmobile } from './asset/asset';
import Image from 'next/image';
import { message } from './asset/asset';
const Videos = () => {
	return (
		<>
			<div className='container-fluid videos-content '>
				<div className='row'>
					{/* Mobile */}
					<div className='mobile-header'>
						<div className='col-md-9 '>
							<div className='col-sm-8 col-12 d-flex justify-content-between align-items-baseline mt-sm-5'>
								<div className='videos-text'>Videos</div>
								<div className='videos-text-small'>Browse All Videos </div>
							</div>
							<div className='col-12 d-flex overflow-auto'>
								<div
									className={`${styles.secondarycolor} col-sm-8 col-10 ps-3 pe-3 videos-parent mb-2 me-2 box-fill`}
								>
									<div className='videos-main col-12 primarycolor'>
										<h1>How To Improve Your Skills</h1>

										<div className='col-12 justify-content-between  pe-5 primarycolor'>
											<h6>Warseem Ahmad</h6>
											<h6>19k Votes</h6>
										</div>
									</div>
								</div>
								<div
									className={`${styles.secondarycolor} col-sm-8 col-10 ps-3 pe-3 videos-parent mb-2 me-2 box-fill`}
								>
									<div className='videos-main col-12 primarycolor'>
										<h1>How To Improve Your Skills</h1>

										<div className='col-12 justify-content-between  pe-5 primarycolor'>
											<h6>Warseem Ahmad</h6>
											<h6>19k Views</h6>
										</div>
									</div>
								</div>
								<div
									className={`${styles.secondarycolor} col-sm-8 col-10 ps-3 pe-3 videos-parent mb-2 me-2 box-fill`}
								>
									<div className='videos-main col-12 primarycolor'>
										<h1>How To Improve Your Skills</h1>

										<div className='col-12 justify-content-between  pe-5 primarycolor'>
											<h6>Warseem Ahmad</h6>
											<h6>19k Views</h6>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
					{/* Mobile */}

					{/* Videos */}
					<div className='col-xl-9 right-header'>
						<div className='col-sm-8 col-12 d-flex justify-content-between align-items-baseline mt-sm-5'>
							<div className='videos-text'>Videos</div>
							<div className='videos-text-small'>Browse All Videos </div>
						</div>
						<div className='col-12 d-flex'>
							<div
								className={`${styles.secondarycolor} col-sm-8 col-10 ps-3 pe-3 videos-parent mb-2 me-2 box-fill`}
							>
								<div className='videos-main col-12 primarycolor'>
									<h1>How To Improve Your Skills</h1>

									<div className='col-12 d-flex justify-content-between  pe-5 primarycolor'>
										<h6>Warseem Ahmad</h6>
										<h6>197867 Votes</h6>
									</div>
								</div>
							</div>

							<div className='col-4 mb-2 videos-parent right-header'>
								<div
									className={`col-12 d-flex justify-content-between ps-3 pe-3 box-fill-2 mb-1 ${styles.secondarycolor} primarycolor`}
								>
									<h6>Michael Koliph</h6>
									<h6>131367 Votes</h6>
								</div>
								<div
									className={` col-12 d-flex justify-content-between ps-3 pe-3 box-fill-2 mt-1 ${styles.secondarycolor} primarycolor`}
								>
									<h6>Ahmed Yasin</h6>
									<h6>912645 Votes</h6>
								</div>
							</div>
						</div>

						<div className='col-12 d-flex primarycolor right-header'>
							<div
								className={` col-4 d-flex justify-content-between ps-3 pe-3 box-fill-3  ${styles.secondarycolor} `}
							>
								<h6>John Stainior</h6>
								<h6>912645 Votes</h6>
							</div>
							<div
								className={` col-4 d-flex justify-content-between ps-3 pe-3 box-fill-3 ms-2 me-2 ${styles.secondarycolor} `}
							>
								<h6>John Doe</h6>
								<h6>912645 Votes</h6>
							</div>
							<div
								className={` col d-flex justify-content-center ps-3 pe-3  align-items-center border-videos`}
							>
								<div>
									<Image src={uploadmobile} />
								</div>
								<div className='secondarycolor ms-3'>
									Upload <br /> Your Own Video
								</div>
							</div>
						</div>
					</div>
					{/* Videos */}
					{/* Activity */}
					<div className='col-12 col-xl-3  mt-5'>
						<div className='col d-flex justify-content-between align-items-baseline'>
							<div className='videos-text-activity '>Activity</div>
							<div className='videos-text-small-activity'>View Timeline</div>
						</div>
						<div className='col-12  horizontal-line mt-2 right-header'></div>

						<div className='col-12 d-flex mt-4 activity-mobile '>
							<div className='card p-5 secondarybackground activity me-4'></div>
							<div className='col'>
								<div className='col d-flex align-items-baseline flex-wrap'>
									<h5 className='me-2 secondarycolor'>John Stainior</h5>
									<h6 className='secondarycolor'>Commented</h6>
								</div>
								<div>
									<h6 className='secondarycolor'>Well I liking it how...</h6>
								</div>
								<div className='col d-flex'>
									<div className='me-2 '>
										{' '}
										<Image src={message} width={30} height={30} />
									</div>
									<h6 className='secondarycolor'>2 Weeks Ago</h6>
								</div>
							</div>
						</div>
						<div className='col-12 d-flex mt-4 activity-mobile'>
							<div className='card p-5 secondarybackground activity me-4'></div>
							<div className='col'>
								<div className='col d-flex align-items-baseline flex-wrap'>
									<h5 className='me-2 secondarycolor'>John Stainior</h5>
									<h6 className='secondarycolor'>Commented</h6>
								</div>
								<div>
									<h6 className='secondarycolor'>Well I liking it how...</h6>
								</div>
								<div className='col d-flex'>
									<div className='me-2 '>
										{' '}
										<Image src={message} width={30} height={30} />
									</div>
									<h6 className='secondarycolor'>2 Weeks Ago</h6>
								</div>
							</div>
						</div>
						<div className='col-12 d-flex mt-4 activity-mobile'>
							<div className='card p-5 secondarybackground activity me-4'></div>
							<div className='col'>
								<div className='col d-flex align-items-baseline flex-wrap'>
									<h5 className='me-2 secondarycolor'>John Stainior</h5>
									<h6 className='secondarycolor'>Commented</h6>
								</div>
								<div>
									<h6 className='secondarycolor'>Well I liking it how...</h6>
								</div>
								<div className='col d-flex'>
									<div className='me-2 '>
										{' '}
										<Image src={message} width={30} height={30} />
									</div>
									<h6 className='secondarycolor'>2 Weeks Ago</h6>
								</div>
							</div>
						</div>
						<div className='col-12 d-flex mt-4 activity-mobile'>
							<div className='card p-5 secondarybackground activity me-4'></div>
							<div className='col'>
								<div className='col d-flex align-items-baseline flex-wrap'>
									<h5 className='me-2 secondarycolor'>John Stainior</h5>
									<h6 className='secondarycolor'>Commented</h6>
								</div>
								<div>
									<h6 className='secondarycolor'>Well I liking it how...</h6>
								</div>
								<div className='col d-flex'>
									<div className='me-2 '>
										{' '}
										<Image src={message} width={30} height={30} />
									</div>
									<h6 className='secondarycolor'>2 Weeks Ago</h6>
								</div>
							</div>
						</div>
						<div className='col-12 d-flex mt-4 activity-mobile right-header'>
							<div className='card p-5 secondarybackground activity me-4'></div>
							<div className='col'>
								<div className='col d-flex align-items-baseline flex-wrap'>
									<h5 className='me-2 secondarycolor'>John Stainior</h5>
									<h6 className='secondarycolor'>Commented</h6>
								</div>
								<div>
									<h6 className='secondarycolor'>Well I liking it how...</h6>
								</div>
								<div className='col d-flex'>
									<div className='me-2 '>
										{' '}
										<Image src={message} width={30} height={30} />
									</div>
									<h6 className='secondarycolor'>2 Weeks Ago</h6>
								</div>
							</div>
						</div>
						<div className='col-12 d-flex mt-4 activity-mobile right-header'>
							<div className='card p-5 secondarybackground activity me-4'></div>
							<div className='col'>
								<div className='col d-flex align-items-baseline flex-wrap'>
									<h5 className='me-2 secondarycolor'>John Stainior</h5>
									<h6 className='secondarycolor'>Commented</h6>
								</div>
								<div>
									<h6 className='secondarycolor'>Well I liking it how...</h6>
								</div>
								<div className='col d-flex'>
									<div className='me-2 '>
										{' '}
										<Image src={message} width={30} height={30} />
									</div>
									<h6 className='secondarycolor'>2 Weeks Ago</h6>
								</div>
							</div>
						</div>
						<div className='col-12  horizontal-line mt-4 right-header'></div>
					</div>
					{/* Activity */}
				</div>
			</div>
		</>
	);
};

export default Videos;
