import { ImageProps } from 'next/image';
import { SectionImage } from '@/components/section-image';

import Couple1Img from '@/components/assets/imgs/10.png';
import Couple2Img from '@/components/assets/imgs/11.png';
import Couple3Img from '@/components/assets/imgs/13.png';

export const WeddingFilmShowcase = () => {
	return (
		<section className='flex flex-col bg-gray-950 px-2 space-y-4 sm:space-y-8 md:space-y-12 w-full sm:px-4 md:px-6 py-4 sm:py-8 md:py-16 items-center text-gray-50'>
			<h2 className='scroll-m-20 text-2xl sm:text-3xl md:text-4xl tracking-widest text-center'>
				The Films
			</h2>

			<FilmShowcase
				src={Couple1Img}
				alt={'Couple on a sea shore'}
				title={'Couple name'}
				location={'Location'}
			/>
			<FilmShowcase
				src={Couple2Img}
				alt={'Couple looking at each other'}
				title={'Couple name'}
				location={'Location'}
			/>
			<FilmShowcase
				src={Couple3Img}
				alt={'Couple holding hands on sea shore'}
				title={'Couple name'}
				location={'Location'}
			/>
		</section>
	);
};

interface FilmShowcaseProps {
	src: ImageProps['src'];
	alt: ImageProps['alt'];
	title: string;
	location: string;
}

const FilmShowcase = ({ src, alt, title, location }: FilmShowcaseProps) => {
	return (
		<div>
			<SectionImage
				src={src}
				alt={alt}
			/>
			<div>
				<h3 className='scroll-m-20 text-2xl md:text-3xl tracking-widest text-left font-italianno'>
					{title}
				</h3>
				<p className='leading-7 md:text-lg xl:text-xl'>{location}</p>
			</div>
			<div className='border-dashed border-white border mt-4'></div>
		</div>
	);
};
