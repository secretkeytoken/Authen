import { auth } from '@/auth';
import AuthButton from '@/components/auth/AuthButton';
import dynamic from 'next/dynamic';

const DashboardProviderWithNoSSR = dynamic(
  () => import('@/components/providers/ConsoleProvider'),
  {
    ssr: false,
  }
);

export default async function Home() {
  const session = await auth();

  return (
    <DashboardProviderWithNoSSR>
      {!session ? (
        <div className="w-full h-full fixed bg-foreground/30 z-50 backdrop-blur-sm flex items-center justify-center">
          <AuthButton label="Login to continue" />
        </div>
      ) : (
        <h1 className="w-full h-full fixed bg-foreground/30 z-50 backdrop-blur-sm flex items-center justify-center">
          Loggin success
        </h1>
      )}
    </DashboardProviderWithNoSSR>
  );
}
