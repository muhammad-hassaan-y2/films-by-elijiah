import Image from 'next/image';
import img from '@/components/assets/imgs/expbg.png';

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
						Film By Elijah
						<br /> Experience
					</h1>
					<h3 className='text-xl tracking-widest font-light leading-5 mt-5 '>
						With An Exclusive Film By Elijah
					</h3>
				</div>
			</div>
		</div>
	);
};
