// --- core
import { ReactNode } from "react";

export interface IButton {
	variant: string;
	ghost: boolean;
	link: boolean;
	href: string;
	children: ReactNode;
}
