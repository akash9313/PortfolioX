import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'PortfolioX | Build Awwwards-Winning 3D Portfolios',
  description: 'The ultimate Notion-style portfolio builder for developers.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>{children}</>
  );
}
