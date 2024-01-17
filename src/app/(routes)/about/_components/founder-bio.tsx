import AboutImage from '@/components/assets/imgs/about-1.png';
import { SectionImage } from '@/components/section-image';

export const FounderBio = () => {
	return (
		<section className='flex flex-col bg-gray-50 px-2 sm:px-4 md:px-6 py-4 sm:py-8 md:py-16 items-center text-gray-950'>
			<div className='grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6'>
				<div>
					<h3 className='scroll-m-20 text-3xl md:text-4xl tracking-tight font-bold'>
						Founder and Visionary Cinematic Storyteller
					</h3>
					<p className='leading-7 [&:not(:first-child)]:mt-5 text-lg lg:text-xl'>
						With a keen eye for capturing the “little details” that make a
						special moment last forever, Elijah has become one of the most
						sought-after wedding videographers in Toledo, Ohio.
					</p>
				</div>
				<div>
					<p className='leading-7 [&:not(:first-child)]:mt-5 text-lg lg:text-xl'>
						For many couples, he has played an indispensable role in creating
						their perfect day. He possesses a rare talent for transforming
						fleeting moments into enduring memories that will warm your heart
						and stand as a testament of your love for years to come.
					</p>
					<p className='leading-7 [&:not(:first-child)]:mt-5 text-lg lg:text-xl'>
						Your wedding is not just another event; it&apos;s a chapter in your
						love story and Elijah ensures it&apos;s told with the utmost level
						of elegance and artistry.
					</p>
				</div>
			</div>

			<SectionImage
				src={AboutImage}
				alt='Couple standing in front of vehicle looking at each other'
			/>
		</section>
	);
};
