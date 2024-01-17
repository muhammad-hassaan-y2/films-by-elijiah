import { Hero } from '@/app/(routes)/films/_components/Hero';
import { UserEngagementFooter } from '@/components/user-engagement-footer';
import { OurServices } from '@/app/(routes)/films/_components/our-services';
import { TimelessWeddingPhotography } from '@/app/(routes)/films/_components/timeless-wedding-photography';
import { WeddingPackageOptions } from '@/app/(routes)/films/_components/wedding-package-options';
import { WeddingFilmShowcase } from '@/app/(routes)/films/_components/wedding-films-showcase';

const page = () => {
	return (
		<>
			<Hero />
			<TimelessWeddingPhotography />
			<WeddingFilmShowcase />
			<UserEngagementFooter />
		</>
	);
};

export default page;
