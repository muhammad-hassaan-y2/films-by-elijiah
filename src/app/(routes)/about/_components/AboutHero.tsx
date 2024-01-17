import Image from 'next/image';

import Couple from '@/components/assets/imgs/About.png';
import FilmmakerImg from '@/components/assets/imgs/about main.png';

export const AboutHero = () => {
	return (
		<div
			className='relative w-full min-h-screen h-full
     text-center justify-center items-center flex'
		>
			{/* Background Image/Video */}
			<Image
				src={Couple}
				alt='Couple in wedding attire celebrating their wedding'
				placeholder='blur'
				quality={100}
				fill
				sizes='100vw'
				style={{
					objectFit: 'cover',
					objectPosition: 'center',
				}}
			/>
			<div
				className='z-20 left-28 bottom-0 right-0 top-0 absolute hidden md:block'
				style={{
					borderLeft: '1px solid #fff',
					paddingLeft: '10px',
				}}
			/>
			<div
				className='z-20 left-0 right-0 top-24 absolute'
				style={{
					borderTop: '1px solid #fff',
					paddingTop: '10px',
				}}
			/>

			{/* Hero Section Content */}
			<div className='absolute text-gray-50'>
				<div className='grid grid-cols-1 lg:grid-cols-2 lg:gap-4'>
					<div className='flex-1 flex flex-col items-center justify-center'>
						<h1 className='scroll-m-20 tracking-widest flex flex-col text-center font-old text-6xl lg:text-7xl'>
							Preserver Your <br /> Most Cherished <br />
							Moments
						</h1>
						<hr className='w-1/2 mx-auto mt-5 mb-16 border-gray-50' />

						<h3 className='text-2xl tracking-widest  leading-7 mt-4 max-w-lg'>
							With Wedding Cinematography That Goes Beyond The Ordinary
						</h3>
					</div>
					<div className='flex-1 hidden lg:block'>
						<div>
							<Image
								alt='Filmmaker holding camera'
								src={FilmmakerImg}
								placeholder='blur'
							/>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};
