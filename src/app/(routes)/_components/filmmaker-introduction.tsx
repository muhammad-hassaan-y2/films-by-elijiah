import Image from 'next/image';
import Link from 'next/link';
import { cn } from '@/lib/utils';

import FilmmakerProfile1 from '@/components/assets/imgs/profile1.png';
import FilmmakerProfile2 from '@/components/assets/imgs/profile2.png';
import { buttonVariants } from '@/components/ui/button';

export const FilmmakerIntroduction = () => {
	return (
		<section className='flex flex-col bg-gray-950 px-2 w-full sm:px-4 md:px-6 py-4 sm:py-8 md:py-16 items-center text-gray-50'>
			<div className='flex w-full'>
				<h3 className='scroll-m-20 text-2xl md:text-3xl tracking-tight text-left font-old'>
					MEET YOUR PERSONAL VIBE MAKER & <br /> WEDDING FILMMAKER
				</h3>
			</div>

			<div className='flex flex-col lg:flex-row w-full h-full items-center lg:space-x-4 lg:items-start justify-between mt-4 md:mt-8 lg:mt-6'>
				<div className='flex space-x-2 md:space-x-4 lg:w-1/3 xl:w-1/4'>
					<div>
						<Image
							src={FilmmakerProfile1}
							alt='Profile picture of the filmmaker'
							placeholder='blur'
						/>
					</div>
					<div className='lg:hidden'>
						<Image
							src={FilmmakerProfile2}
							alt='Another profile picture of the filmmaker'
							placeholder='blur'
						/>
					</div>
				</div>

				<div className='mt-4 md:mt-8 lg:mt-0 lg:w-2/3 xl:w-2/4'>
					<p className='leading-7 [&:not(:first-child)]:mt-4'>
						Welcome to a world where fashion clashes in time- capsules of film,
						and the age of classic dinner suits kissed cheeks with the “I do’s”
						in a photography frame. In truth though, I’m just a man standing in
						front of a wedding, asking it to love him.
					</p>
					<p className='leading-7 [&:not(:first-child)]:mt-4'>
						For one, weddings are more than just a ceremony. It’s a storybook,
						one that unfolds onto my lens and into your memory. I’m an impartial
						spectator who becomes a storyteller, converting fleeting moments
						into eternal bliss, the heartfelt embraces that make your day
						unique, the tears falling just before the break of a smile, and the
						tumultuous roars of laughter and joy, the luminous gaze that beams
						bright and outshines the ambient lights during the first dance.
					</p>
					<Link
						href={'/about'}
						className={cn(
							'',
							buttonVariants({
								className:
									'bg-transparent border-[1px] text-lg h-12 border-white text-white hover:bg-white hover:text-black w-full mt-4 md:mt-8 rounded-none',
							})
						)}
					>
						About Ezra
					</Link>
				</div>
				<div className='hidden xl:block xl:w-1/4'>
					<Image
						src={FilmmakerProfile2}
						alt='Another profile picture of the filmmaker'
						placeholder='blur'
					/>
				</div>
			</div>
		</section>
	);
};
