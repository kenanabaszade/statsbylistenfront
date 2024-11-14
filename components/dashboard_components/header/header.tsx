import ThemeToggle from '@/components/dashboard_components/dashboardtools/hooks/themeToggle';
import { cn } from '@/lib/utils';
import { MobileSidebar } from '@/components/dashboard_components/dashboardtools/components/layout/mobileSideBar';
import { UserNav } from '@/components/dashboard_components/dashboardtools/components/user-nav';

export default function Header() {
  return (
    <header className="sticky inset-x-0 top-0 w-full">
      <nav className="flex items-center justify-between px-4 py-2 md:justify-end">
        <div className={cn('block lg:!hidden')}>
          <MobileSidebar />
        </div>
        <div className="flex items-center gap-2">
          <UserNav />
          <ThemeToggle />
        </div>
      </nav>
    </header>
  );
}
