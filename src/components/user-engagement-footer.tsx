import Image from 'next/image';
import Link from 'next/link';

import CoupleImg from '@/components/assets/imgs/footer-img.png';

import { buttonVariants } from '@/components/ui/button';
import { cn } from '@/lib/utils';

export const UserEngagementFooter = () => {
	return (
		<div
			className='relative w-full h-[100vh]
     text-center justify-center items-center flex'
		>
			{/* Background Image/Video */}
			<Image
				src={CoupleImg}
				alt='Couple holding hands & Celebrating with friends'
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
				className='z-20 left-0 md:left-24  bottom-0 right-0 md:right-24 top-0 absolute '
				style={{
					borderLeft: '1px solid #fff',
					borderRight: '1px solid #fff',
					paddingLeft: '10px',
				}}
			/>
			<div
				className='z-20 left-0 right-0 top-24 bottom-24 absolute '
				style={{
					borderTop: '1px solid #fff',
					borderBottom: '1px solid #fff',
					paddingTop: '10px',
				}}
			/>

			{/* FollowSection Section Content */}
			<div className='absolute z-20 max-w-3xl px-4 text-gray-50 h-fit flex flex-col justify-center w-full'>
				<h3 className='font-italianno text-left tracking-widest font-light leading-5 mt-4 text-4xl md:text-5xl'>
					Let&apos;s Go!!!
				</h3>
				<h2 className='scroll-m-20 tracking-wide uppercase font-old text-left text-4xl lg:text-5xl mt-2 leading-10'>
					READY TO PUMP UP THE ENERGY AND CELEBRATE YOUR DAY WITH ME?
				</h2>

				<Link
					href={'/about'}
					className={cn(
						'text-left',
						buttonVariants({
							className:
								'bg-transparent border-[1px] uppercase text-left h-12 border-white text-white hover:bg-white hover:text-black w-full mt-4 md:mt-8 rounded-none',
						})
					)}
				>
					Inquire Today
				</Link>
			</div>
		</div>
	);
};
