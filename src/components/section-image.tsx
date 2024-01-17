import Image, { ImageProps } from 'next/image';

export const SectionImage = ({ src, alt, ...props }: ImageProps) => {
	return (
		<div className='my-4 md:my-8 relative w-full'>
			<Image
				src={src}
				alt={alt}
				className='object-cover'
				placeholder='blur'
				sizes='100vw'
				style={{
					width: '100%',
					height: 'auto',
				}}
				{...props}
			/>
		</div>
	);
};
