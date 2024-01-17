import Link from 'next/link';
import { cn } from '@/lib/utils';
import { buttonVariants } from '@/components/ui/button';

export const WeddingDetails = () => {
	return (
		<section className='flex flex-col items-center justify-center text-center px-4 py-8 bg-gray-50'>
			<div className='mb-10'>
				<h2 className='text-base font-semibold uppercase tracking-widest'>
					WEDDING FILM EXPERIENCE
				</h2>
				<h3 className='text-4xl font-serif font-semibold uppercase my-4'>
					WE&apos;RE HERE FOR YOU
				</h3>
				<p className='text-sm mb-4'>
					Beyond creating you a top-quality wedding film, at Runaway Vows, we
					are here to give you our undivided attention. Our goal is to make you
					feel like our only client; from customization of your packages to
					quick, honest and attentive communication, it is our job to listen to
					your story and desires. We want you to feel heard. We can&apos;t wait
					to tell your story, elevate your love and raw emotions through film,
					and make you feel like you&apos;re on the cover of Vogue Magazine.
				</p>
				<p className='text-sm mb-4'>
					Keep reading to learn more about our process, the investment, and to
					browse past wedding films.
				</p>
			</div>

			<div className='border border-[#000000] h-14'></div>

			<section className='mb-10 mt-5'>
				<h2 className='md:text-3xl lg:text-5xl font-serif font-medium uppercase my-4'>
					THE PROCESS
				</h2>
				<div className='mb-6'>
					<h3 className='text-2xl font-italianno font-medium uppercase tracking-widest text-[#000000]'>
						Step one
					</h3>
					<h4 className='text-lg font-semibold my-1'>ENGAGE WITH THE BEST</h4>
					<p className='text-sm'>
						&ldquo;Once you make the move, expect our comprehensive pricing
						details within 24 hours.&rdquo;
					</p>
				</div>
				<div className='mb-6'>
					<h3 className='text-2xl font-italianno font-medium uppercase tracking-widest text-[#000000]'>
						Step two
					</h3>
					<h4 className='text-lg font-semibold my-1'>YOUR VISION, OUR LENS</h4>
					<p className='text-md my-1'>
						&ldquo;Questions, ideas, dreams? Let&apos;s discuss. We&apos;re all
						about action; a 25% deposit and your signature, and we&apos;re
						set.&rdquo;
					</p>
				</div>
				<div>
					<h3 className='text-2xl font-italianno font-medium uppercase tracking-widest text-[#000000]'>
						Step three
					</h3>
					<h4 className='text-lg font-semibold my-1'>
						RELENTLESS PURSUIT OF PERFECTION
					</h4>
					<p className='text-sm'>
						&ldquo;Every tear, every laugh, and the myriad of details – we
						capture with precision. Relive every nuance, every emotion.&rdquo;
					</p>
				</div>
			</section>
			<Link
				href={'#'}
				className={cn(
					buttonVariants({
						className:
							'rounded-none border-black px-20 hover:bg-black hover:text-white duration-500 uppercase',
						variant: 'outline',
					})
				)}
			>
				Inquire Today
			</Link>
		</section>
	);
};
