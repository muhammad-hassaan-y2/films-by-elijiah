import Image from 'next/image';

import Evish from '@/components/assets/imgs/d-1.png';
import Ever from '@/components/assets/imgs/e-1.png';
import { SectionImage } from '@/components/section-image';

export const OurServices = () => {
	return (
		<section className='flex flex-col bg-gray-50 px-2 w-full sm:px-4 md:px-6 py-4 sm:py-8 md:py-16 items-center text-gray-950'>
			<h2 className='scroll-m-20 text-2xl sm:text-3xl md:text-4xl tracking-widest font-old uppercase'>
				Our Services
			</h2>

			<div className='flex-col justify-center  md:flex items-center mt-4'>
				<div className='border border-gray-950 w-full'></div>
				<div className='flex flex-col-reverse md:flex-row  md:space-y-0 md:space-x-4'>
					<div className='md:w-1/3 mt-4 md:mt-0'>
						<Image
							src={Evish}
							alt='Hands holding a bouquet of flowers'
							placeholder='blur'
						/>
					</div>
					<div className='flex flex-col items-center md:w-2/3'>
						<SectionImage
							src={Ever}
							alt='Wedding scene'
						/>

						<p className='leading-7  md:text-lg xl:text-xl'>
							Your wedding day should be a stress-free, magical experience. When
							you choose me, you&apos;re choosing a videographer who understands
							your vision and cares for every detail. My discreet presence
							ensures that your day unfolds naturally, allowing me to capture
							authentic moments that will become part of your timeless wedding
							story.
						</p>
					</div>
				</div>
			</div>
		</section>
	);
};
