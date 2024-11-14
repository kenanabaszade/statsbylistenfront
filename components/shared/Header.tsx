'use client'
import { cn } from '@/lib/utils';
import { siteConfig } from '@/data/config/site.settings';
import { headerNavLinks } from '@/data/config/headerNavLinks';
import Link from './Link';
import MobileNav from './MobileNav';
import ThemeSwitch from './ThemeSwitch';
import SearchButton from '../search/SearchButton';
import ActiveLink from '@/components/shared/ActiveLink';
import Image from '@/components/shared/Image';
import { useUser } from '@auth0/nextjs-auth0/client'; // Import useUser hook

const Header = ({ className }: { className?: string }) => {
  const { user, error, isLoading } = useUser(); // Get user info

  // Show loading state
  if (isLoading) return <p>Loading...</p>;

  // Show error state
  if (error) return <p>{error.message}</p>;

  return (
    <header
      className={cn(
        'flex items-center justify-between py-10 flex-wrap w-full mb-20 lg:mb-32 pt-6 p-6 max-w-full container-wide',
        className,
      )}
    >
      <div>
        <Link href="/" aria-label={siteConfig.logoTitle}>
          <div className="flex items-center gap-3 justify-between">
            <Image
              src="/static/images/logo.svg"
              alt="Listen logo"
              height={101}
              width={101}
              className="group-hover:animate-wiggle dark:hidden"
            />
            <Image
              src="/static/images/logo-dark.svg"
              alt="Listen logo"
              height={101}
              width={101}
              className="group-hover:animate-wiggle hidden dark:inline-block"
            />
          </div>
        </Link>
      </div>
      
      <div className="flex items-center leading-5 gap-4 sm:gap-6">
        {headerNavLinks.map((link) => (
          <ActiveLink
            key={link.title}
            href={link.href}
            className="nav-link hidden sm:block"
            activeClassName="nav-link-active"
          >
            <span>{link.title}</span>
          </ActiveLink>
        ))}
        
        <SearchButton />
        <ThemeSwitch />
        <MobileNav />

        {/* User Info Section */}
        {user ? (
          <div className="flex items-center">
            <p className="mr-4">Welcome, {user.name}!</p>
            <Link href={`/api/auth/logout?returnTo=${encodeURIComponent('http://localhost:6006/')}`}>
              Logout
            </Link>
          </div>
        ) : (
          <Link href="/api/auth/login">Login</Link> // Show login link if not authenticated
        )}
      </div>
    </header>
  );
};

export default Header;
