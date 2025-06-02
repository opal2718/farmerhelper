'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import {
  Home,
  UserCog,
  User,
  MessageCircle,
  FileText,
} from 'lucide-react';

const navItems = [
  { label: '홈', href: '/', icon: Home },
  { label: '고용주', href: '/employer', icon: UserCog },
  { label: '노동자', href: '/worker', icon: User },
  { label: '챗봇', href: '/chat', icon: MessageCircle },
  { label: '계약', href: '/contract', icon: FileText },
];

export default function NavBar() {
  const pathname = usePathname();

  return (
    <nav className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 flex justify-around py-2">
      {navItems.map(({ label, href, icon: Icon }) => (
        <Link key={href} href={href} className="flex flex-col items-center text-sm">
          <Icon
            size={20}
            className={pathname === href ? 'text-blue-600' : 'text-gray-600'}
          />
          <span className={pathname === href ? 'text-blue-600 font-medium text-xl' : 'text-gray-600 text-lg'}>
            {label}
          </span>
        </Link>
      ))}
    </nav>
  );
}
