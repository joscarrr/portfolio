"use client";

import { useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";
import { useState } from "react";

const tabs = [
	{ name: "home", href: "/" },
	{ name: "about", href: "/about" },
	{ name: "contact", href: "/contact" },
];

export default function Navbar() {
	const t = useTranslations("nav");

	const [currentTab, setCurrentTab] = useState("home");

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
						<li>
							<Link href="/" className="hover:text-accent transition-colors">
								{t("home")}
							</Link>
						</li>
						<li>
							<Link
								href="/about"
								className="hover:text-accent transition-colors"
							>
								{t("about")}
							</Link>
						</li>
						<li>
							<Link
								href="/contact"
								className="hover:text-accent transition-colors"
							>
								{t("contact")}
							</Link>
						</li>
					</ul>
				</nav>
			</div>
			<div className="flex h-20 w-full items-center justify-between bg-sub-navbar-primary px-12.5 text-medium font-bold text-sub-navbar-secondary">
				<h2>Recent Activity</h2>
			</div>
		</header>
	);
}
