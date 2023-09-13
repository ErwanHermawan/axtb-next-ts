"use client";

// --- core
import Link from "next/link";

// component
import Logo from "@atom/Logo";

// --- style
import style from "./style.module.scss";

// -- data
import navMenu from "./navigationMenu";

// --- state
import useCart from "@state/cart";

const Header = () => {
	const { totalCart } = useCart();

	return (
		<div className={style.header}>
			<div className="container">
				<div className={style.headerWrapper}>
					<Link href="/" className={style.headerLogo}>
						<Logo filename="baron.svg" name="baron" width="40" height="40" />
					</Link>
					<ul className={style.headerNav}>
						{navMenu.nav.map((val, idx) => (
							<li key={`mn-${idx}`} className={style.headerNavItem}>
								<Link className={style.headerNavLink} href={val.to}>
									{val.menu}
								</Link>
							</li>
						))}
					</ul>
					<div className={style.headerHastag}>
						<span className={style.headerCart}>{totalCart}</span>
						<p className={style.headerHastagText}>#TAKETHELEAP!</p>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Header;
