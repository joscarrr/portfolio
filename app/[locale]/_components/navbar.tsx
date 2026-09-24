"use client";

import { useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";
import { AnimatePresence, motion } from "motion/react";
import { useState } from "react";

const tabs = [
	{ name: "home", href: "/" },
	{ name: "about", href: "/about" },
	{ name: "contact", href: "/contact" },
];

export default function Navbar() {
	const t = useTranslations("nav");

	const [currentTab, setCurrentTab] = useState(tabs[0].name);

	return (
		<header className="h-50 w-full items-center justify-between">
			<div className="flex h-10 w-full items-center justify-between px-2.5 text-small text-primary">
				<p className="text-text-primary">
					{"> made with love and a bit of code >⩊<"}
				</p>
				<p className="flex items-center gap-4 text-text-primary">
					<span>-104</span>
					<span>+44</span>
				</p>
			</div>
			<div className="flex h-20 w-full items-center justify-between bg-navbar-primary px-12.5 text-medium font-bold text-navbar-secondary">
				<Link href="https://github.com/joscarrr">joscarrr.dev</Link>
				<nav aria-label={t("label")}>
					<ul className="flex gap-6 font-bold">
						{tabs.map((tab) => (
							<motion.div layout>
								<li key={tab.name} className="flex gap-2">
									<Link href={tab.href} onClick={() => setCurrentTab(tab.name)}>
										{t(tab.name)}
									</Link>
									{currentTab === tab.name && (
										<motion.div
											layoutId="nav-indicator"
											animate={{ opacity: [1, 1, 0, 0] }}
											transition={{
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
											}}
											className="h-[0.5lh] w-2 self-center bg-navbar-secondary"
										/>
									)}
								</li>
							</motion.div>
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
