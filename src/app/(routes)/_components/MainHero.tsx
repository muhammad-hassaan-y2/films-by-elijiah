import Image from 'next/image';

import { SlSocialFacebook } from 'react-icons/sl';
import { SiLinkedin } from 'react-icons/si';
import { FiInstagram } from 'react-icons/fi';
import { HiOutlineMail } from 'react-icons/hi';

import Main from '@/components/assets/imgs/main-a.png';
import { SocialMediaButton } from '@/components/socialmedia-button';

export const MainHero = () => {
	return (
		<div
			className='relative w-full h-[100vh]
     text-center justify-center items-center flex'
		>
			{/* Background Image/Video */}
			<Image
				src={Main}
				alt='Main'
				placeholder='blur'
				quality={100}
				fill
				sizes='100vw'
				style={{
					objectFit: 'cover',
					objectPosition: 'center',
				}}
			/>

			<div
				className='z-20 left-28 bottom-20 right-0 top-0 absolute '
				style={{
					borderLeft: '1px solid #fff',
					paddingLeft: '10px',
				}}
			/>
			<div
				className='z-20 left-0 right-0 top-24 absolute '
				style={{
					borderTop: '1px solid #fff',
					paddingTop: '10px',
				}}
			/>

			{/* Hero Section Content */}
			<div className='absolute text-gray-50 h-full flex flex-col items-center justify-center w-full'>
				<h1 className='scroll-m-20 tracking-wide flex flex-col'>
					<span className=' text-4xl lg:text-5xl'>Celebrate Your</span>
					<span className=' text-6xl font-extrabold lg:text-7xl'>
						One-Of-A-Kind
					</span>
					<span className=' text-6xl lg:text-7xl font-praise'>Love Story</span>
				</h1>
				<h3 className='text-xl tracking-widest font-light leading-5 mt-4 '>
					With An Exclusive Film By Elijah
				</h3>
			</div>

			<div
				className='absolute h-20 text-gray-50 bottom-0
       flex left-0 items-center justify-center sm:justify-between px-8 py-4 w-full border-t border-gray-50'
			>
				{/* Heading */}
				<h3 className='scroll-m-20 text-base sm:text-base md:text-xl flex space-x-4 uppercase tracking-wide font-thin'>
					<span>Destination</span>
					<span>&</span>
					<span className='shrink-0'>Urban Locations</span>
				</h3>

				{/* Icons */}
				<div className='sm:flex space-x-2 md:space-x-4 hidden'>
					<SocialMediaButton
						Icon={SlSocialFacebook}
						href='/#'
					/>

					<SocialMediaButton
						Icon={SiLinkedin}
						href='/#'
					/>

					<SocialMediaButton
						Icon={FiInstagram}
						href='/#'
					/>

					<SocialMediaButton
						Icon={HiOutlineMail}
						href='/#'
					/>
				</div>
			</div>
		</div>
	);
};
