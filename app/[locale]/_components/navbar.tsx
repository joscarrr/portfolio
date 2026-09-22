'use client'

import { useTranslations } from 'next-intl'
import { Link } from '@/i18n/navigation'

export default function Navbar() {
	const t = useTranslations('nav')

	return (
		<nav className="bg-white border-b">
			<div className="max-w-6xl mx-auto px-4 py-4 flex justify-between items-center">
				<Link href="/" className="text-xl font-bold">
					Your Name
				</Link>
				<ul className="flex gap-6">
					<li><Link href="/">{t('home')}</Link></li>
					<li><Link href="/about">{t('about')}</Link></li>
					<li><Link href="/contact">{t('contact')}</Link></li>
				</ul>
			</div>
		</nav>
	)
}
