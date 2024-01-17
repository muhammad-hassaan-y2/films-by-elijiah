import { Hero } from '@/app/(routes)/experience/_components/hero';
import { WeddingDetails } from '@/app/(routes)/experience/_components/wedding-details';
import { InvestmentInfo } from '@/app/(routes)/experience/_components/investment-info';
import { ClientTestimonial } from '@/app/(routes)/experience/_components/client-testimonial';
import { BucketListInquiry } from '@/app/(routes)/experience/_components/bucket-list-inquiry';
import { UserEngagementFooter } from '@/components/user-engagement-footer';
import { OurServices } from '../films/_components/our-services';
import { WeddingPackageOptions } from '../films/_components/wedding-package-options';

const page = () => {
	return (
		<>
			<Hero />
			<WeddingDetails />
			<InvestmentInfo />
			<ClientTestimonial />
			<BucketListInquiry />
			<OurServices />
			<WeddingPackageOptions />
			<UserEngagementFooter />
		</>
	);
};

export default page;
