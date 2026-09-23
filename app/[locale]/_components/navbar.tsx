'use client'

import { useTranslations } from 'next-intl'
import { Link } from '@/i18n/navigation'
import { useState } from 'react'

const tabs = [
	{ name: 'home', href: '/' },
	{ name: 'about', href: '/about' },
	{ name: 'contact', href: '/contact' },
];

export default function Navbar() {
	const t = useTranslations('nav');

	const [currentTab, setCurrentTab] = useState('home');

	return (
		<header className="w-full h-50 justify-between items-center">
			<div className="w-full h-10 px-2.5 text-primary text-small flex items-center justify-between">
				<p className="text-text-primary">{'> made with love and a bit of code >⩊<'}</p>
				<p className="flex gap-4 items-center text-text-primary">
					<span>-104</span>
					<span>+44</span>
				</p>
			</div>
			<div className="w-full h-20 px-12.5 flex justify-between items-center text-navbar-secondary text-medium font-bold bg-navbar-primary">
				<Link href="https://github.com/joscarrr">
					joscarrr.dev
				</Link>
				<nav aria-label={t('label')}>
					<ul className="flex gap-6 font-bold">
						<li>
							<Link href="/" className="hover:text-accent transition-colors">{t('home')}</Link>
						</li>
						<li>
							<Link href="/about" className="hover:text-accent transition-colors">{t('about')}</Link>
						</li>
						<li>
							<Link href="/contact" className="hover:text-accent transition-colors">{t('contact')}</Link>
						</li>
					</ul>
				</nav>
			</div>
			<div className="w-full h-20 px-12.5 flex justify-between items-center text-sub-navbar-secondary text-medium font-bold bg-sub-navbar-primary">
				<h2>Recent Activity</h2>
			</div>
		</header>
	)
}
