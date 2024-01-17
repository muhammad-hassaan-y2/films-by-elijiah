import Image from 'next/image';
import logo from '@/components/assets/logo/logo.png';

const Logo = () => {
	return (
		<div className='h-24 w-24 relative'>
			<Image
				fill
				className='shrink-0 object-contain'
				src={'/Logo.png'}
				alt={'Logo'}
				// placeholder='blur'
				quality={100}
				priority
			/>
		</div>
	);
};

export default Logo;
