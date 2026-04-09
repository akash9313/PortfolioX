import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Authenticate | PortfolioX',
  description: 'Login to PortfolioX.',
};

export default function AuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>{children}</>
  );
}
