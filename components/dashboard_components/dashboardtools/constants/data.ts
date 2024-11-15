import { NavItem } from '@/components/dashboard_components/dashboardtools/types/type';

 
export type Product = {
  photo_url: string;
  name: string;
  description: string;
  created_at: string;
  price: number;
  id: number;
  category: string;
  updated_at: string;
};

export const navItems: NavItem[] = [
  {
    title: 'Dashboard',
    href: '/dashboard',
    icon: 'dashboard',
    label: 'Dashboard'
  },
  {
    title: "Listen's cohorts",
    href: '/dashboard/listeners',
    icon: 'post',
    label: "Listen's cohorts"
  },
  {
    title: 'Data explorer',
    href: '/dashboard/dataexplorer',
    icon: 'post',
    label: 'Data explorer'
  },
  {
    title: 'Summary Cohorts',
    href: '/dashboard/summarycohorts',
    icon: 'post',
    label: 'Summary Cohorts'
  },
  {
    title: 'Customer cohorts',
    href: '/dashboard/customercohorts',
    icon: 'post',
    label: 'Customer cohorts'
  },
  {
    title: 'Playground',
    href: '/dashboard/playground',
    icon: 'page',
    label: 'Playground'
  },
  {
    title: 'Quartile/Decile',
    href: '/dashboard/playground',
    icon: 'kanban',
    label: 'Quartile/Decile'
  },
  {
    title: 'Account',
    icon: 'user',
    label: 'account',
    children: [
      {
        title: 'Profile',
        href: '/dashboard/profile',
        label: 'profile'
      },
      {
        title: 'Login',
        href: '/',
        icon: 'login',
        label: 'login'
      }
    ]
  },
  
];
