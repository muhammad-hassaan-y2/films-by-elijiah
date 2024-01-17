import React from 'react';
import Couple from '@/components/assets/imgs/rev.png';
import { SectionImage } from '@/components/section-image';

export const FilmmakerStatement = () => {
	return (
		<section className='flex flex-col bg-gray-950 px-2 sm:px-4 md:px-6 py-4 sm:py-8 md:py-16 items-center text-gray-50'>
			<SectionImage
				src={Couple}
				alt='Couple holding hands'
			/>

			<div className='flex flex-col items-center'>
				<div className='text-left w-full flex md:space-x-4 space-x-2'>
					<p className='leading-7 tracking-wider text-lg md:text-xl max-w-2xl'>
						I go beyond basic cinematography to capture the essence of every
						little detail, emotion, and moment that you never want to forget
						from your big day with the assurance of timeless quality and
						artistry.
					</p>
					<p className='leading-7 tracking-widest text-lg md:text-xl max-w-2xl'>
						My specialty is creating stunning visual narratives that perfectly
						encapsulate your love story, leaving you with lasting memories that
						you and your loved ones will treasure for a lifetime.
					</p>
				</div>
			</div>
		</section>
	);
};
