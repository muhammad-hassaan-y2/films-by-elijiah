import Image from 'next/image';
import img from '@/components/assets/imgs/filmsbg.png';

export const Hero = () => {
	return (
		<div
			className='relative w-full min-h-screen h-full
text-center justify-center items-center flex'
		>
			{/* Background Image/Video */}
			<Image
				src={img}
				alt='Main'
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
				<div className='flex-1 flex flex-col items-center justify-center'>
					<h1 className='scroll-m-20 tracking-widest flex flex-col text-center font-old text-6xl lg:text-7xl'>
						Crafting The Best <br /> Cinematic Wedding Films <br /> for
						Discerning Couples
					</h1>
				</div>
			</div>
		</div>
	);
};
