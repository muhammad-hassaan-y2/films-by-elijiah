import Image from 'next/image';
import Drinking from '@/components/assets/imgs/drink.png';

export const PastClientTestimonial = () => {
	return (
		<section className='flex flex-col text-gray-50 bg-gray-50 px-2 sm:px-4 md:px-6 py-4 sm:py-6 md:py-8 items-center'>
			<h2 className='scroll-m-20 text-2xl sm:text-3xl tracking-widest uppercase font-semibold mt-4 text-gray-950'>
				THE EXPERIENCE AS TOLD BY A PAST CLIENT
			</h2>

			<blockquote className='scroll-m-20 font-old text-lg sm:text-xl md:text-2xl tracking-tight my-2 py-4 text-center text-gray-950 max-w-4xl sm:hidden'>
				“Elijah is a true artist! Their photos are like paintings, and they have
				a way of seeing the beauty in everything. They captured the essence of
				our love story so perfectly, and we&apos;re so grateful for their
				talent. They were also incredibly flexible and accommodating, and they
				went above and beyond to make sure we got the photos we wanted. We
				couldn&apos;t have asked for a better photographer!”
			</blockquote>

			<div className='mt-4 md:mt-8 relative w-full hidden sm:block'>
				<Image
					src={Drinking}
					alt={'Having a cheers on a wedding day'}
					className='object-cover w-full h-auto md:w-auto md:h-full'
					placeholder='blur'
					sizes='100vw'
					style={{
						width: '100%',
						height: '100%',
					}}
				/>
				{
					<div className='absolute z-10 top-0 left-0 w-full h-full bg-black bg-opacity-50' />
				}
				<div className='absolute z-10 top-0 left-0 flex flex-col items-center justify-center w-full h-full'>
					<h3 className='scroll-m-20 font-old text-lg sm:text-xl md:text-2xl tracking-tight text-center max-w-4xl'>
						“Elijah is a true artist! Their photos are like paintings, and they
						have a way of seeing the beauty in everything. They captured the
						essence of our love story so perfectly, and we&apos;re so grateful
						for their talent. They were also incredibly flexible and
						accommodating, and they went above and beyond to make sure we got
						the photos we wanted. We couldn&apos;t have asked for a better
						photographer!”
					</h3>
				</div>
			</div>
		</section>
	);
};
