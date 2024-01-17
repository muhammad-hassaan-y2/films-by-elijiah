import { AboutHero } from '@/app/(routes)/about/_components/AboutHero';
import { FounderBio } from '@/app/(routes)/about/_components/founder-bio';
import { MissionStatement } from '@/app/(routes)/about/_components/mission-statement';
import { WeddingArtistryShowcase } from '@/app/(routes)/about/_components/wedding-artistry-showcase';
import { UserEngagementFooter } from '@/components/user-engagement-footer';

const page = () => {
	return (
		<>
			<AboutHero />
			<FounderBio />
			<MissionStatement />
			<WeddingArtistryShowcase />
			<UserEngagementFooter />
		</>
	);
};

export default page;
