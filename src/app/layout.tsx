import { Providers } from './providers';
import './globals.css';
import Header from './layouts/Header';
import { Flex } from 'antd';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    
    <html lang="ru">
      <body>
        
          <Providers>
            <Header />
            <div className='container'>
            {children}
            </div>
          </Providers>
        
      </body>
    </html>
  );
}