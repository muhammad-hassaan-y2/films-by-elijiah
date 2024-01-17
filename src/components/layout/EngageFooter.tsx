import Link from 'next/link';
import Image from 'next/image';
import { SlSocialFacebook } from 'react-icons/sl';
import { SiLinkedin } from 'react-icons/si';
import { FiInstagram } from 'react-icons/fi';
import { HiOutlineMail } from 'react-icons/hi';

import img1 from '@/components/assets/imgs/footer-grid-1.png';
import img2 from '@/components/assets/imgs/footer-grid-2.png';
import img3 from '@/components/assets/imgs/footer-grid-3.png';
import img4 from '@/components/assets/imgs/footer-grid-4.png';
import img5 from '@/components/assets/imgs/footer-grid-5.png';
import img6 from '@/components/assets/imgs/footer-grid-6.png';
import { SocialMediaButton } from '../socialmedia-button';

import logo from '../../../public/Logo.png';

export const EngageFooter = () => {
	return (
		<>
			<section className='flex flex-col bg-gray-950 px-2 sm:px-4 md:px-6 py-4 md:py-8 items-center'>
				<nav className='px-2 md:px-4'>
					<ul className='flex gap-4 md:space-x-8 lg:space-x-12 text-gray-50 text-lg font-light sm:text-xl flex-wrap items-center justify-center'>
						<li className='hover:underline hover:underline-offset-4 duration-200 transition-all'>
							<Link href={'/'}>HOME</Link>
						</li>
						<li className='hover:underline hover:underline-offset-4 duration-200 transition-all'>
							<Link href={'/films'}>FILMS</Link>
						</li>
						<li className='hover:underline hover:underline-offset-4 duration-200 transition-all'>
							<Link href={'/about'}>ABOUT</Link>
						</li>
						<li className='hover:underline hover:underline-offset-4 duration-200 transition-all'>
							<Link href={'/experience'}>EXPERIENCE</Link>
						</li>
						<li className='hover:underline hover:underline-offset-4 duration-200 transition-all'>
							<Link href={'/contact-us'}>CONTACT US</Link>
						</li>
					</ul>
				</nav>
			</section>
			<section>
				<div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6'>
					<div>
						<Image
							src={img1}
							alt='Footer Image 1'
							placeholder='blur'
						/>
					</div>
					<div>
						<Image
							src={img2}
							alt='Footer Image '
							placeholder='blur'
						/>
					</div>
					<div>
						<Image
							src={img3}
							alt='Footer Image 3'
							placeholder='blur'
						/>
					</div>
					<div>
						<Image
							src={img4}
							alt='Footer Image 4'
							placeholder='blur'
						/>
					</div>
					<div>
						<Image
							src={img5}
							alt='Footer Image 5'
							placeholder='blur'
						/>
					</div>
					<div>
						<Image
							src={img6}
							alt='Footer Image 6'
							placeholder='blur'
						/>
					</div>
				</div>
			</section>
			<section>
				<div className='flex flex-col bg-gray-950 px-2 sm:px-4 md:px-6 py-4 md:py-8 items-center relative'>
					<div className='h-96 w-96 relative'>
						<Image
							fill
							className='h-96 w-96 object-contain'
							src={logo}
							alt={'Logo'}
							// placeholder='blur'
							quality={100}
						/>
					</div>
					<p className='scroll-m-20 text-xl sm:text-2xl md:text-3xl tracking-normal text-center max-w-4xl font-light mt-4 text-gray-50'>
						INTERNATIONAL DESTINATION WEDDING FILMMAKER FOR THE LIVELY &
						PASSIONATE COUPLES{' '}
					</p>
					<div className='flex space-x-4 text-gray-50 py-4 sm:hidden'>
						<SocialMediaButton
							Icon={SlSocialFacebook}
							href={'/'}
						/>
						<SocialMediaButton
							Icon={SiLinkedin}
							href={'/'}
						/>
						<SocialMediaButton
							Icon={FiInstagram}
							href={'/'}
						/>
						<SocialMediaButton
							Icon={HiOutlineMail}
							href={'/'}
						/>
					</div>

					<div className='absolute top-0 right-0 pr-4  sm:flex-col justify-center h-full text-gray-50 hidden sm:flex'>
						<div className='flex flex-col space-y-2 md:space-y-4'>
							<SocialMediaButton
								Icon={SlSocialFacebook}
								href={'/'}
							/>
							<SocialMediaButton
								Icon={SiLinkedin}
								href={'/'}
							/>
							<SocialMediaButton
								Icon={FiInstagram}
								href={'/'}
							/>
							<SocialMediaButton
								Icon={HiOutlineMail}
								href={'/'}
							/>
						</div>
					</div>
				</div>
			</section>
			<section className='py-4 bg-gray-950 border-t px-2 md:px-4'>
				<div className='flex justify-center items-center'>
					<p className='text-gray-50 text-lg font-light text-center '>
						Eternal Frame // © 2024 Films By Elijiah.
						ALL RIGHTS RESERVED
					</p>
				</div>
			</section>
		</>
	);
};
