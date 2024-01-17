import Image from 'next/image';
import Link from 'next/link';

import { cn } from '@/lib/utils';
import { buttonVariants } from '@/components/ui/button';

import photographer from '@/components/assets/imgs/sec-3.png';
import logo from '../../../../../public/Logo.png';
export const Hero = () => {
	return (
		<div
			className='relative w-full min-h-screen
text-center justify-center items-center flex overflow-auto'
		>
			<div className='bg-black/40 absolute h-full w-full z-10' />
			{/* Background Image/Video */}
			<Image
				src={photographer}
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
				className='z-20 left-0 right-0 top-24 absolute'
				style={{
					borderTop: '1px solid #fff',
					paddingTop: '10px',
				}}
			/>

			{/* Hero Section Content */}
			<div className='absolute text-gray-50 w-full h-full z-20'>
				<div className='flex flex-col md:flex-row items-center justify-center h-full w-full px-4 md:px-10'>
					<div className='flex-1 w-full'>
						<h1 className='scroll-m-20 tracking-widest flex flex-col text-center font-old text-5xl lg:text-6xl'>
							TAKE THE <br /> NEXT STEP IN <br /> CELEBRATING <br /> YOUR LOVE
						</h1>
					</div>
					<div className='w-full flex-1 mt-60 md:mt-36 mb-1'>
						<div className='bg-black/40 p-5 py-14'>
							<h3 className='scroll-m-20 text-2xl sm:text-3xl md:text-4xl font-semibold tracking-tight'>
								CONNECT WITH FILM BY Elijah TODAY
							</h3>
							<p className='leading-7 [&:not(:first-child)]:mt-6'>
								I&apos;m so excited to capture every moment of your big day!
								Above all else, I&apos;m someone that likes to pour 200% into
								everything I do, and that includes your forever wedding day
								memory. In order to make sure I can give my full creative self
								to your big day, I limit the number of weddings I take on per
								year. This allows me to bring you an impeccable memory, full of
								love laughter, vibes and something you will cherish for years to
								come.
							</p>
							<Link
								href={'/about'}
								className={cn(
									'',
									buttonVariants({
										className:
											'bg-transparent border-[1px] uppercase px-10 text-lg h-12 border-white text-white hover:bg-white hover:text-black mt-4 md:mt-8 rounded-none',
									})
								)}
							>
								Wedding Contact Form
							</Link>
							<p className='leading-7 [&:not(:first-child)]:mt-6'>
								Planners please contact directly ABC@GMAIL.com
							</p>
							<div className='flex items-center justify-center'>
								<div className='h-52 w-52 relative'>
									<Image
										fill
										className='shrink-0 object-contain'
										src={logo}
										alt={'Logo'}
										quality={100}
									/>
								</div>
							</div>
							<p className='leading-7 [&:not(:first-child)]:mt-6 text-xl'>
								Looking for something else?
							</p>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};
