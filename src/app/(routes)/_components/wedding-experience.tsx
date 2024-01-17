import Wed from '@/components/assets/imgs/section-2.png';
import { SectionImage } from '@/components/section-image';

export const WeddingExperience = () => {
	return (
		<section className='flex flex-col bg-gray-50 px-2 sm:px-4 md:px-6 py-4 sm:py-8 md:py-16 items-center'>
			<div className='text-center'>
				<h3 className='scroll-m-20 text-xl font-light tracking-widest uppercase'>
					A WEDDING FILM EXPERIENCE
				</h3>
				<h2 className='scroll-m-20 text-3xl tracking-widest uppercas font-old mt-4'>
					FOR THE ADVENTUROUS, LIVELY, & PASSIONATE
					<br /> COUPLES
				</h2>
			</div>

			<SectionImage
				src={Wed}
				alt={'Couple holding handings'}
				placeholder='blur'
			/>

			<p className='text-center leading-7 max-w-3xl'>
				As Toledo&apos;s premier cinematic wedding filmmaker, I bring a touch of
				luxury and elite craftsmanship to every frame. My passion lies in
				creating films that are not just videos, but timeless pieces of art that
				the next generation will treasure. Whether you&apos;re celebrating here
				in Toledo or jet-setting to a destination wedding.
			</p>
		</section>
	);
};
