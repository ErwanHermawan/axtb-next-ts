// --- core
import Link from "next/link";

// --- components
import Logo from "@atom/Logo";

// --- style
import style from "./style.module.scss";

// data
import footerData from "./FooterData";

const Footer = () => {
	return (
		<div className={style.footer}>
			<div className="container">
				<div className={style.footerSubscriber}>
					<div className={style.footerSubscriberText}>
						<h3 className={style.footerSubscriberTitle}>
							{footerData.subscriber.title}
						</h3>
						<p className={style.footerSubscriberDesc}>
							{footerData.subscriber.description}
						</p>
					</div>
					<div className={style.footerSubscriberForm}>
						<input
							type="text"
							className={style.footerSubscriberInput}
							placeholder="Masukkan alamat emailmu!"
						/>
						<button type="button" className={style.footerSubscriberButton}>
							Berlanggan
						</button>
					</div>
				</div>
				<div className={style.footerContent}>
					<div className={style.footerNav}>
						{footerData.nav.map((val, idx) => (
							<div key={`li-${idx}`} className={style.footerNavList}>
								<h4 className={style.footerNavTitle}>{val.title}</h4>
								<ul className={style.footerNavMenu}>
									{val.menu.map((vMenu, iMenu) => (
										<li key={`mn-${iMenu}`} className={style.footerNavItem}>
											<Link href={vMenu.to} className={style.footerNavLink}>
												{vMenu.text}
											</Link>
										</li>
									))}
								</ul>
							</div>
						))}
						<div className={style.footerNavList}>
							<h4 className={style.footerNavTitle}>
								{footerData.office.title}
							</h4>
							<ul className={style.footerNavMenu}>
								<li className={style.footerNavItem}>
									<span className={style.footerNavOpenHour}>
										{footerData.office.openHour}
									</span>
								</li>
								<li className={style.footerNavItem}>
									{footerData.office.address}
								</li>
							</ul>
						</div>
					</div>
					<div className={style.footerAbout}>
						<Link href="/" className={style.footerLogo}>
							<Logo
								filename="baron-letter.svg"
								name="baron"
								width="180"
								height="60"
							/>
						</Link>
						<p className={style.footerDesc}>
							BARON & CO adalah solusi untuk perawatan sepatu yang tepat dengan
							hasil maksimal.{" "}
							<span>
								Melangkah tanpa ragu, melangkah yang berarti. TAKE THE LEAP!
							</span>
						</p>
					</div>
				</div>
				<div className={style.footerSosmed}>
					<p className={style.footerSosmedTitle}>Find and Follow Us</p>
					{footerData.sosmed.map((val, idx) => (
						<div key={`so-${idx}`} className={style.footerSosmedItem}>
							<Link href={val.to} className={style.footerSosmedLink}>
								<img
									src={"asset/image/icon/" + val.icon}
									alt={val.icon}
									className={style.footerSosmedIcon}
								/>
							</Link>
						</div>
					))}
				</div>
			</div>
			<div className={style.footerBottom}>
				<div className="container">
					<p className={style.footerDesign}>
						Design & Develop by <span>Bilik Media</span>
					</p>
					<p className={style.footerCopyRight}>
						&copy; 2023 BARON & CO. All Rights Reserved
					</p>
				</div>
			</div>
		</div>
	);
};

export default Footer;
