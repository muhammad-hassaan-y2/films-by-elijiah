import Image from 'next/image';

import About from '@/components/assets/imgs/about3.png';

export const MissionStatement = () => {
	return (
		<div className='relative w-full py-4 md:py-8 lg:py-14 flex items-center justify-center text-gray-50'>
			<Image
				src={About}
				alt={'Couple holding flowers and looking at each other'}
				layout='fill'
				objectFit='cover'
				placeholder='blur'
				className='absolute z-0'
			/>
			<div className='relative z-10 max-w-7xl px-4 py-8 text-left'>
				<h2 className='scroll-m-20 text-3xl sm:text-4xl md:text-5xl font-semibold tracking-widest font-old'>
					My Mission
				</h2>
				<p className='leading-7 [&:not(:first-child)]:mt-5 text-lg lg:text-xl'>
					My mission is to create exclusive cinematic wedding films that stand
					the test of time.
				</p>
				<p className='leading-7 [&:not(:first-child)]:mt-5 text-lg lg:text-xl'>
					Started as a media company in 2015 Films by Elijah has already grown
					to become one of leading names in wedding videogaraphy. I believe in
					capturing the essence, aesthetic, elegance, and depth of emotion on
					your special day to create a cherished cinematic msterpiece.
				</p>
			</div>
		</div>
	);
};
