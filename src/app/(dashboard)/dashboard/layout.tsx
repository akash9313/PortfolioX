import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Dashboard | PortfolioX',
  description: 'Manage your premium 3D portfolio.',
};

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="h-screen w-full flex bg-background text-foreground overflow-hidden">
      {children}
    </div>
  );
}
