/** @format */
import {
	logo,
	search,
	upload,
	user,
	uploadmobile,
	usermobile,
	mobilenavigation,
	x,
	profilepicture,
} from './asset/asset';
import { useState } from 'react';
import Image from 'next/image';
import styles from '../../styles/Home.module.css';
const Header = () => {
	const [ShowModal, setShowModal] = useState(false);
	return (
		<>
			<div className='container-fluid'>
				<div className='row'>
					{/* Mobile*/}
					<div className='col-12  mobile-header d-flex mb-4'>
						<div className='col mt-3'>
							<button
								className='btn pb-0 '
								data-toggle='modal'
								data-target='#mobilenavbar'
							>
								<Image src={mobilenavigation} width={50} height={50} />
							</button>
						</div>
						<div className=' col-8 d-flex justify-content-center '>
							<Image src={logo} width={'200%'} height={'40%'} />
						</div>
						<div className='col d-flex justify-content-between mobile-right-content'>
							<Image src={uploadmobile} width={25} height={40} />

							<Image
								data-toggle='modal'
								data-target='#mobileprofilenavbar'
								src={usermobile}
								width={25}
								height={40}
							/>
						</div>
					</div>
					{/* Mobile*/}

					<div className='col-xl-3 logo'>
						<Image src={logo} width={400} height={80} />
					</div>
					<div className='col-xl-6 d-flex'>
						<div
							className={`col-12 d-flex align-items-center ${styles.secondarycolor} ps-4 mb-sm-4 mb-xl-0`}
						>
							<div className='col-11'>
								<input
									className={`${styles.secondarycolor} ${styles.maincolor} col-xl-12 search`}
									type='text'
									placeholder='Find...'
								/>
							</div>
							<div className=''>
								<Image src={search} width={'30%'} height={'30%'} />
							</div>
						</div>
					</div>
					<div className='col-xl-3 d-flex right-header'>
						<div
							className={` ${styles.secondarycolor} col-xl-6 col-sm-7 d-flex align-items-center justify-content-sm-center `}
						>
							<div className='col-xl-4 me-2 d-flex justify-content-end '>
								<Image src={upload} width={'40%'} height={'40%'} />
							</div>
							<div className={`${styles.maincolor} col-xl-8 standardtext`}>
								Upload
							</div>
						</div>
						<div className='col-5 d-flex ms-4  '>
							<div
								className={`col-4 ${styles.secondarycolor} d-flex align-items-center  ps-xl-3 pe-xl-3  `}
							>
								<div className='col-12 d-flex justify-content-center'>
									<div data-toggle='modal' data-target='#mobileprofilenavbar'>
										<Image src={user} width={'60%'} height={'100%'} />
									</div>
								</div>
							</div>
							<div className='col-8 userprofile ms-3'>
								<div>Waseem</div>
								<div>Ahmad</div>
							</div>
						</div>
					</div>
				</div>
				<div className='col-12  horizontal-line mt-5 right-header'></div>

				<div className='right-header col-12 pt-sm-4 pb-sm-4 d-flex flex-wrap'>
					<div className='d-flex col'>
						<div className='navigation-bar'>Videos</div>
						<div className='pe-4 ps-4 navigation-bar'>/</div>
					</div>
					<div className='d-flex col'>
						<div className='navigation-bar'>People</div>
						<div className='pe-4 ps-4 navigation-bar'>/</div>
					</div>
					<div className='d-flex col'>
						<div className='navigation-bar'>Documents</div>
						<div className='pe-4 ps-4 navigation-bar'>/</div>
					</div>
					<div className='d-flex col'>
						<div className='navigation-bar'>Events</div>
						<div className='pe-4 ps-4 navigation-bar'>/</div>
					</div>
					<div className='d-flex col'>
						<div className='navigation-bar'>Communities</div>
						<div className='pe-4 ps-4 navigation-bar'>/</div>
					</div>
					<div className='d-flex col'>
						<div className='navigation-bar'>Favorites</div>
						<div className='pe-4 ps-4 navigation-bar'>/</div>
					</div>
					<div className='d-flex col'>
						<div className='navigation-bar'>Channels</div>
					</div>
				</div>
				<div className='col-12  horizontal-line right-header'></div>
			</div>

			{/* Modal */}
			<div
				className='modal fade'
				id='mobileprofilenavbar'
				tabindex='-1'
				role='dialog'
				aria-labelledby='mobileprofilenavbarTitle'
				aria-hidden='true'
			>
				<div
					className='modal-dialog modal-dialog-centered bg-danger bg-opacity-25'
					role='document'
				>
					<div className={` modal-content ${styles.secondarycolor}`}>
						<div className='col-12'>
							<div className='d-flex justify-content-center profile-picture'>
								<Image src={profilepicture} width={'80%'} height={'80%'} />
							</div>
							<div className='d-flex justify-content-center'>
								<div className={`${styles.maincolor} profile-name `}>
									Waseem Ahmad <br />
									<div className='profile-name-2'>UI/UX Designer</div>
								</div>
							</div>
							<div className='col-12 d-flex justify-content-center mt-3'>
								<button
									className={`col-11 btn btn-danger me-5 ms-5 d-flex justify-content-center pb-2 pt-2 modal-background`}
								>
									<Image
										className='col-6'
										src={uploadmobile}
										width={'30%'}
										height={'30%'}
									/>
									<div className='pt-1 ps-2'>Start Upload</div>
								</button>
							</div>
						</div>

						<hr
							style={{
								color: 'red',
								height: 5,
								marginLeft: '5%',
								marginRight: '5%',
							}}
						/>
						<button className='btn btn-light mobilenavbarmenu justify-content-start d-flex '>
							My Profile
						</button>
						<button className='btn btn-light mobilenavbarmenu justify-content-start d-flex '>
							Edit Profile
						</button>
						<button className='btn btn-light mobilenavbarmenu justify-content-start d-flex '>
							Security
						</button>
					</div>
				</div>
				<div className='d-flex justify-content-center close-modal'>
					<Image data-dismiss='modal' src={x} width={30} height={30} />
				</div>
			</div>
			<div
				className='modal fade'
				id='mobilenavbar'
				tabindex='-1'
				role='dialog'
				aria-labelledby='mobilenavbarTitle'
				aria-hidden='true'
			>
				<div
					className='modal-dialog modal-dialog-centered bg-danger bg-opacity-25'
					role='document'
				>
					<div className={` modal-content ${styles.secondarycolor}`}>
						<div className='modal-header d-flex justify-content-center'>
							<h5
								className={`modal-title ${styles.maincolor}`}
								id='exampleModalLongTitle'
							>
								Main Menu
							</h5>
						</div>
						<hr
							style={{
								color: 'red',
								height: 5,
								marginLeft: '5%',
								marginRight: '5%',
							}}
						/>
						<button className='btn btn-light mobilenavbarmenu justify-content-start d-flex '>
							Videos
						</button>
						<button className='btn btn-light mobilenavbarmenu justify-content-start d-flex '>
							People
						</button>
						<button className='btn btn-light mobilenavbarmenu justify-content-start d-flex '>
							Documents
						</button>
						<button className='btn btn-light mobilenavbarmenu justify-content-start d-flex '>
							Events
						</button>
						<button className='btn btn-light mobilenavbarmenu justify-content-start d-flex '>
							Communities
						</button>
						<button className='btn btn-light mobilenavbarmenu justify-content-start d-flex '>
							Favorites
						</button>
						<button className='btn btn-light mobilenavbarmenu justify-content-start d-flex '>
							Channels
						</button>
					</div>
				</div>
				<div className='d-flex justify-content-center close-modal'>
					<Image data-dismiss='modal' src={x} width={30} height={30} />
				</div>
			</div>
		</>
	);
};

export default Header;
