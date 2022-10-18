/** @format */

import Head from 'next/head';
import Image from 'next/image';
import styles from '../../styles/Home.module.css';
import Header from '../components/Header';
import Videos from '../components/Videos';
import People from '../components/People';
import Footer from '../components/Footer';

export default function Home() {
	return (
		<>
			<div className={`${styles.mainstructure}`}>
				<Header />
				<Videos />
				<People />
				<Footer />
			</div>
		</>
	);
}
