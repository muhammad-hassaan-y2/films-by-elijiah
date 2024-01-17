import Image from 'next/image';
import { SlSocialFacebook } from 'react-icons/sl';
import { SiLinkedin } from 'react-icons/si';
import { FiInstagram } from 'react-icons/fi';
import { HiOutlineMail } from 'react-icons/hi';

import Couple1 from '@/components/assets/imgs/1.1.png';
import Couple2 from '@/components/assets/imgs/1.2.png';
import Couple3 from '@/components/assets/imgs/2.1.png';
import Couple4 from '@/components/assets/imgs/2.2.png';

import { SocialMediaButton } from '@/components/socialmedia-button';

export const WeddingArtistryShowcase = () => {
	return (
		<section className='flex flex-col bg-gray-50 px-2 sm:px-4 md:px-6 py-4 sm:py-8 md:py-16 items-center text-gray-950'>
			<div className='grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-8'>
				<div className='flex flex-col space-y-4'>
					<div className='flex text-left w-full'>
						<h2 className='scroll-m-20 pb-2 text-4xl md:text-5xl font-light tracking-tight first:mt-0 font-italianno'>
							My Vision
						</h2>
					</div>
					<h3 className='scroll-m-20 text-2xl md:text-3xl tracking-tight'>
						Elevate Your Love Story Through Cinematic Artistry
					</h3>
					<Image
						src={Couple1}
						alt='Couple holding flowers and kissing with a cinematic background'
						placeholder='blur'
					/>
					<Image
						src={Couple2}
						alt='Couple having a wedding ceremony in outdoor venue'
						placeholder='blur'
					/>
				</div>
				<div className='flex flex-col space-y-4'>
					<Image
						src={Couple3}
						alt='Couple holding flowers and running in plain field'
						placeholder='blur'
					/>
					<Image
						src={Couple4}
						alt='Couple holding each other near a shore'
						placeholder='blur'
					/>
					<div className='text-left w-full'>
						<h2 className='scroll-m-20 pb-2 text-4xl md:text-5xl font-light tracking-tight first:mt-0 font-italianno'>
							Connect with me!
						</h2>
						<div className='mx-5 flex space-x-2 md:space-x-4'>
							<SocialMediaButton
								Icon={SlSocialFacebook}
								href={'#'}
							/>

							<SocialMediaButton
								Icon={SiLinkedin}
								href={'#'}
							/>

							<SocialMediaButton
								Icon={FiInstagram}
								href={'#'}
							/>

							<SocialMediaButton
								Icon={HiOutlineMail}
								href={'#'}
							/>
						</div>
					</div>
				</div>
			</div>

			<div className='mt-8 md:mt-10 max-w-7xl mx-auto text-center'>
				<p className='leading-7 [&:not(:first-child)]:mt-5 text-lg lg:text-xl'>
					I see every wedding as a unique love story waiting to be told through
					the art of cinema. I am committed to elevating your wedding’s vision
					through creative and authentic storytelling, leaving you with a
					wedding film that reflects your unique sense of style and taste.
				</p>
			</div>
		</section>
	);
};
