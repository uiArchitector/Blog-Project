'use client';

import { Menu } from 'antd';
import Link from 'next/link';

const items = [
  {
    key: 'main',
    label: <Link href="/">Main</Link>,
  },
  {
    key: 'design',
    label: <Link href="/design">Design</Link>,
  },
  {
    key: 'frontend',
    label: <Link href="/frontend">Frontend</Link>,
  },
];

const Header = () => {
  return (
    <header>
      <Menu mode="horizontal" items={items} />
    </header>
  );
};

export default Header;