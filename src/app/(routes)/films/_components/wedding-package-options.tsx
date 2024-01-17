import React from 'react';
import Image, { ImageProps } from 'next/image';
import Img from '@/components/assets/imgs/5.png';
import Im from '@/components/assets/imgs/6.png';
import Ig from '@/components/assets/imgs/7.png';
import mg from '@/components/assets/imgs/8.png';
import { cn } from '@/lib/utils';

export const WeddingPackageOptions = () => {
	return (
		<section className='flex flex-col bg-gray-50 px-2 space-y-4 sm:space-y-8 md:space-y-12 w-full sm:px-4 md:px-6 py-4 sm:py-8 md:py-16 items-center text-gray-950'>
			<div className='flex flex-col items-center justify-center'>
				<h2 className='scroll-m-20 text-2xl sm:text-3xl md:text-4xl tracking-widest font-old'>
					Other
				</h2>
				<hr className='border border-black w-2/3 flex items-center'></hr>
			</div>

			<div className='grid grid-cols-1 sm:grid-cols-2 gap-2 sm:gap-4 w-full'>
				<div className='gap-2 flex flex-col sm:gap-4'>
					<ImageWithTextOverlay
						src={Img}
						altText={'White Flower in background'}
						title={'Custom Packages'}
						description={
							'I understand that every wedding is unique. Thats why I offer customized packages tailored to your specific needs and preferences.'
						}
						borderColor='border-gray-950'
						textColor='text-gray-950'
					/>

					<ImageWithTextOverlay
						src={Im}
						altText={'Couple holding hands in sea'}
						title={'Drone Footages'}
						description={`Elevate your wedding video with breathtaking aerial shots. My
						drone footage adds a cinematic touch, providing a unique
						perspective of your wedding venue and surroundings.`}
						textColor='text-gray-50 '
						borderColor='border-gray-50'
					/>
				</div>

				<div className='gap-2 flex flex-col sm:gap-4 sm:mt-4 md:mt-8'>
					<ImageWithTextOverlay
						src={Ig}
						altText={'2 Rings on a surface'}
						title={'Engagement Films'}
						description={
							'Your love story deserves to be celebrated from the very beginning. Your engagement film will capture the magic of your proposal and the excitement leading up to your big day.'
						}
						textColor='text-gray-50 '
						borderColor='border-gray-50'
					/>

					<ImageWithTextOverlay
						src={mg}
						altText={'Woman holding flowers'}
						title={'Highlight Reels'}
						description={`Relive the highlights of your wedding day with expertly crafted
					highlight reels. These short films encapsulate the essence of
					your celebration, perfect for sharing with friends and family.`}
						textColor='text-gray-50'
						borderColor='border-gray-50'
					/>
				</div>
			</div>

			<div className='px-2 sm:px-4'>
				<h3 className='scroll-m-20 text-center text-2xl sm:text-3xl md:text-4xl tracking-widest font-italianno font-medium'>
					It’s all about capturing your magical moments, brilliantly
				</h3>
			</div>
		</section>
	);
};

interface ImageWithTextOverlayProps {
	src: ImageProps['src'];
	altText: ImageProps['alt'];
	title: string;
	description: string;
	textColor?: string;
	borderColor?: string;
}

const ImageWithTextOverlay = ({
	src,
	altText,
	title,
	description,
	textColor,
	borderColor,
}: ImageWithTextOverlayProps) => {
	return (
		<div className={cn('relative', textColor)}>
			<Image
				src={src}
				alt={altText}
				className='object-cover w-full h-auto'
				placeholder='blur'
				sizes='100vw'
				style={{
					width: '100%',
					height: 'auto',
				}}
			/>
			<div className='absolute top-0 flex-col flex items-center justify-center space-y-4 h-full z-10'>
				<div className='flex flex-col items-center justify-center'>
					<h3 className='scroll-m-20 text-xl md:text-2xl font-semibold lg:text-3xl tracking-widest font-old'>
						{title}
					</h3>
					<hr
						className={cn('border w-2/3 flex items-center mt-2', borderColor)}
					></hr>
				</div>
				<p className='leading-7 text-sm text-balance  md:text-base xl:text-lg text-center'>
					{description}
				</p>
			</div>
		</div>
	);
};
