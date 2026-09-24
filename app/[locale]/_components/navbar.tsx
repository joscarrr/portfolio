"use client";

import { useTranslations } from "next-intl";
import { Link, usePathname } from "@/i18n/navigation";
import { motion, type MotionProps } from "motion/react";

const TABS = [
	{ name: "home", href: "/" },
	{ name: "about", href: "/about" },
	{ name: "contact", href: "/contact" },
];

const BLINK_ANIMATION = {
	animate: { opacity: [0, 0, 1, 1] },
	transition: {
		opacity: {
			duration: 1,
			times: [0, 0.5, 0.5, 1],
			ease: "linear",
			repeat: Infinity,
		},
		layout: {
			type: "spring",
			stiffness: 400,
			damping: 30,
		},
	},
} satisfies MotionProps;

export default function Navbar() {
	const t = useTranslations("nav");

	const pathname = usePathname();

	return (
		<header className="h-50 w-full items-center justify-between">
			<div className="flex h-10 w-full items-center justify-between px-2.5 text-small text-primary">
				<p className="text-text-primary">
					{"> made with love and a bit of code >⩊<"}
				</p>
				<p className="flex items-center gap-4 text-text-primary">
					<span className="text-red-text">-104</span>
					<span className="text-green-text">+44</span>
				</p>
			</div>
			<div className="flex h-20 w-full items-center justify-between bg-navbar-primary px-12.5 text-medium font-bold text-navbar-secondary">
				<Link href="https://github.com/joscarrr">joscarrr.dev</Link>
				<nav aria-label={t("label")}>
					<ul className="flex gap-6 font-bold">
						{TABS.map((tab) => (
							<motion.li layout key={tab.name} className="flex gap-2">
								<Link href={tab.href}>{t(tab.name)}</Link>
								{pathname === tab.href && (
									<motion.div
										layoutId="nav-indicator"
										animate={BLINK_ANIMATION.animate}
										transition={BLINK_ANIMATION.transition}
										className="h-[0.5lh] w-2 self-center bg-navbar-secondary"
									/>
								)}
							</motion.li>
						))}
					</ul>
				</nav>
			</div>
			<div className="flex h-20 w-full items-center justify-between bg-sub-navbar-primary px-12.5 text-medium font-bold text-sub-navbar-secondary">
				<h2>Recent Activity</h2>
			</div>
		</header>
	);
}
