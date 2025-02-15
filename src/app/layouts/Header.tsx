'use client';

import { Layout } from 'antd';
import Link from 'next/link';

const { Header: AntHeader } = Layout;

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
  const headerStyle: React.CSSProperties = {
    textAlign: 'center' as const,
    // ... остальные стили
  };

  return <AntHeader style={headerStyle}>{/* содержимое хедера */}</AntHeader>;
};

export default Header;
