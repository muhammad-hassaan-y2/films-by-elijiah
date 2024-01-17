import Beach from '@/components/assets/imgs/Beach.png';
import { SectionImage } from '@/components/section-image';

export const InvestmentInfo = () => {
	return (
		<section
			className=' flex flex-col text-center
          justify-center items-center mt-3 mb-3 px-6 bg-gray-950'
		>
			<div className='bg-gray-50 mt-16 mb-20 px-10'>
				<h2
					className='font-serif font-medium text-xl
          md:text-3xl lg:text-4xl mb-4 mt-7
         '
				>
					THE INVESTMENT
				</h2>
				<p className='text-sm md:text-lg'>with tailored packages for those </p>
				<p className='text-sm md:text-lg'>
					special global adventures. Beyond our base package, we offer a
					spectrum of
				</p>
				<p className='text-sm md:text-lg'> 20+ add-ons.</p>
				<SectionImage
					src={Beach}
					alt='Couple lying on the beach'
				/>

				<h4 className='mt-5 mb-14 text-2xl font-bold'>
					Starting rates are at $4000
				</h4>
			</div>
		</section>
	);
};
