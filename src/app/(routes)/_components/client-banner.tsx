import Image from 'next/image';
import Plants from '@/components/assets/imgs/Section.png';

export const ClientBannerSection = () => {
	return (
		<div className='relative w-full py-4 md:py-8 lg:py-14 flex items-center justify-center'>
			<Image
				src={Plants}
				alt={'Plannts a pot with white background'}
				layout='fill'
				objectFit='cover'
				className='absolute z-0'
				placeholder='blur'
			/>
			<div className='relative z-10 max-w-4xl px-4 py-8 text-center'>
				<h2 className='scroll-m-20 text-2xl sm:text-3xl md:text-4xl tracking-widest font-old'>
					For Clients
				</h2>
				<h3 className='scroll-m-20 text-2xl sm:text-3xl md:text-4xl tracking-widest font-semibold mt-4 text-gray-950'>
					Your wedding day is unique, just like your love story.
				</h3>
			</div>
		</div>
	);
};
