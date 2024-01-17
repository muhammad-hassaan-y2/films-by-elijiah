import Image from 'next/image';

import HandsHolding from '@/components/assets/imgs/sec-1.png';
import Bouquet from '@/components/assets/imgs/sec-2.png';
import Celebrating from '@/components/assets/imgs/sec-3.png';
import Beach from '@/components/assets/imgs/sec-4.png';

import { SectionImage } from '@/components/section-image';

export const WeddingShowcase = () => {
	return (
		<section className='flex flex-col bg-gray-950 px-2 sm:px-4 md:px-6 py-4 sm:py-8 md:py-16 items-center text-gray-50'>
			<div className='flex text-left w-full'>
				<h2 className='scroll-m-20 pb-2 text-4xl md:text-5xl font-light tracking-tight first:mt-0 font-italianno'>
					I&apos;m here to Vibe with you
				</h2>
			</div>

			<div className='flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4 md:space-x-8 w-full'>
				<div className='flex-1 h-full'>
					<h3 className='scroll-m-20 text-2xl md:text-3xl tracking-tight'>
						I&apos;m dedicated to capturing the essence of your love story in a
						way that feels relaxed yet utterly exquisite.
					</h3>
					<Image
						src={HandsHolding}
						alt='Groom and bride holding hands'
						layout='responsive'
						className='mt-4 md:mt-8'
						placeholder='blur'
					/>
				</div>

				<div className='flex-1 h-full'>
					<Image
						src={Bouquet}
						alt='Couple with bouquet'
						layout='responsive'
						placeholder='blur'
					/>
				</div>
			</div>

			<SectionImage
				src={Celebrating}
				alt='Wedding ceremony with balloons'
			/>

			<p className='text-center text-xl leading-7 max-w-3xl py-4'>
				For the young couple who values the finest, let&apos;s craft an
				everlasting memory together.
			</p>

			<div className='mt-4 md:mt-8 relative w-full'>
				<Image
					src={Beach}
					alt={'Couple on beach'}
					className='object-cover'
					placeholder='blur'
					sizes='100vw'
					style={{
						width: '100%',
						height: 'auto',
					}}
				/>

				<div className='absolute z-10 top-0 left-0 flex flex-col items-center justify-center w-full h-full'>
					<h3 className='scroll-m-20 font-old text-2xl sm:text-2xl md:text-3xl lg:text-4xl tracking-tight text-center max-w-3xl'>
					    Elijah is the “best kept secret” behind many of Toledo’s most-talked
						about weddings.
					</h3>
				</div>
			</div>
		</section>
	);
};
