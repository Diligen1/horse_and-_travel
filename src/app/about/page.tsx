import type { Metadata } from 'next'
import { FeedbackAbout, FooterSection, PromoAbout } from '@/components'

export const metadata: Metadata = {
	title: 'About',
}

export default function Page() {
	return (
		<main>
			<PromoAbout />
			<FeedbackAbout />
			<FooterSection />
		</main>
	)
}
