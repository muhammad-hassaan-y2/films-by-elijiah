import { MainHero } from './_components/MainHero';
import { WeddingExperience } from '@/app/(routes)/_components/wedding-experience';
import { WeddingShowcase } from '@/app/(routes)/_components/wedding-showcase';
import { PastClientTestimonial } from '@/app/(routes)/_components/past-client-testimonial';
import { FilmmakerIntroduction } from '@/app/(routes)/_components/filmmaker-introduction';
import { ClientBannerSection } from '@/app/(routes)/_components/client-banner';
import { FilmmakerStatement } from '@/app/(routes)/_components/filmmaker-statement';

import { UserEngagementFooter } from '@/components/user-engagement-footer';

export default function Home() {
	return (
		<>
			<MainHero />
			<WeddingExperience />
			<WeddingShowcase />
			<PastClientTestimonial />
			<FilmmakerIntroduction />
			<ClientBannerSection />
			<FilmmakerStatement />
			<UserEngagementFooter />
		</>
	);
}
