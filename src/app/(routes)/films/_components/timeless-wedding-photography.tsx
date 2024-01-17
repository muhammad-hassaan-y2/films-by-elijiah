import Image from 'next/image';

import Place from '@/components/assets/imgs/1.png';
import Marry from '@/components/assets/imgs/2.png';
import Arrange from '@/components/assets/imgs/3.png';

export const TimelessWeddingPhotography = () => {
	return (
		<section className='flex flex-col bg-gray-950 px-2 space-y-4 sm:space-y-8 md:space-y-12 w-full sm:px-4 md:px-6 py-4 sm:py-8 md:py-16 items-center text-gray-50'>
			<h2 className='scroll-m-20 text-2xl sm:text-3xl md:text-4xl tracking-widest font-old'>
				Capture Timeless Moments
			</h2>

			<div className='flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-4 '>
				<div>
					<Image
						src={Place}
						alt='Marriage Place'
						placeholder='blur'
					/>
				</div>
				<div className='flex flex-col space-y-2 md:space-y-4'>
					<Image
						src={Marry}
						alt='Marriage Place'
						placeholder='blur'
					/>
					<Image
						src={Arrange}
						alt='Marriage Place'
						placeholder='blur'
					/>
				</div>
			</div>
			<p className='leading-7  md:text-lg xl:text-xl text-center max-w-7xl'>
				I specialize in capturing the essence of your special day, ensuring that
				every moment is preserved with precision and artistry. From the first
				look to the final dance, I’m there to document your love story.
			</p>
		</section>
	);
};
