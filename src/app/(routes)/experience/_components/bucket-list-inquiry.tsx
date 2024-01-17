import { Button } from '@/components/ui/button';
import Link from 'next/link';

export const BucketListInquiry = () => {
	return (
		<div
			className='bg-black text-white flex flex-col
     justify-center items-center py-36 text-center'
		>
			<h2 className='font-bold font-inter text-lg md:text-2xl lg:text-3xl'>
				Got a destination in mind that’s straight off a bucket list?{' '}
			</h2>
			<p className='font-inter text-[14px] md:text-base lg:text-lg mt-2'>
				We’re in. Contact now for a detailed pricing guide and to start your
				journey.{' '}
			</p>

			<Button
				variant='outline'
				className='bg-transparent rounded-none px-16 mt-3
      md:px-20 lg:px-24'
			>
				<Link href={'/contact-us'}>CONTACT US</Link>
			</Button>
		</div>
	);
};
