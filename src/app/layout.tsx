'use client';

import { Providers } from './providers';
import './globals.css';
import 'antd/dist/reset.css'; // оставляем только этот импорт для Ant Design v5
// или
// import 'antd/dist/antd.css'; // для более старых версий
// import Header from './layouts/Header';
// import { Flex } from 'antd';
import { Layout } from 'antd';
const { Header, Footer, Sider, Content } = Layout;
const headerStyle: React.CSSProperties = {
  textAlign: 'center' as const,
  color: '#fff',
  height: 64,
  paddingInline: 48,
  lineHeight: '64px',
  backgroundColor: '#4096ff',
};
const contentStyle: React.CSSProperties = {
  textAlign: 'center' as const,
  minHeight: 120,
  lineHeight: '120px',
  color: '#fff',
  backgroundColor: '#0958d9',
};
const siderStyle: React.CSSProperties = {
  textAlign: 'center' as const,
  lineHeight: '120px',
  color: '#fff',
  backgroundColor: '#1677ff',
};
const footerStyle: React.CSSProperties = {
  textAlign: 'center' as const,
  color: '#fff',
  backgroundColor: '#4096ff',
};
const layoutStyle = {
  borderRadius: 8,
  overflow: 'hidden',
  width: '100%',
  maxWidth: '100%',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ru">
      <body>
        <Providers>
          <Layout style={layoutStyle}>
            <Header style={headerStyle}>Header</Header>
            <Layout>
              <Sider width="20%" style={siderStyle}>
                Sider
              </Sider>
              <Content style={contentStyle}>{children}</Content>
              <Sider width="20%" style={siderStyle}>
                Sider
              </Sider>
            </Layout>
            <Footer style={footerStyle}>Footer</Footer>
          </Layout>

          {/* <Header />
            <div className='container'>
            {children}
            </div> */}
        </Providers>
      </body>
    </html>
  );
}
