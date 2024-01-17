import { Inter, Old_Standard_TT, Italianno, Praise } from 'next/font/google';

export const inter = Inter({
	subsets: ['latin'],
	display: 'swap',
	variable: '--font-inter',
});

export const old_standard = Old_Standard_TT({
	weight: '400',
	subsets: ['cyrillic', 'latin-ext', 'vietnamese', 'latin'],
	variable: '--font-old-standard',
});

export const italianno = Italianno({
	weight: '400',
	subsets: ['latin'],
	variable: '--font-italianno',
});

export const praise = Praise({
	weight: '400',
	subsets: ['latin'],
	display: 'swap',
	variable: '--font-praise',
});
