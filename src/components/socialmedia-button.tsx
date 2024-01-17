import Link, { LinkProps } from 'next/link';
import { IconType } from 'react-icons/lib';

import { cn } from '@/lib/utils';
import { buttonVariants } from '@/components/ui/button';

export const SocialMediaButton = ({
	Icon,
	href = '#',
}: {
	Icon: IconType;
	href: LinkProps['href'];
}) => (
	<Link
		href={href}
		className={cn(
			buttonVariants({
				size: 'icon',
				variant: 'ghost',
			})
		)}
	>
		<Icon className='text-3xl ' />
	</Link>
);
