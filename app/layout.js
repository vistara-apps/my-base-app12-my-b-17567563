import './globals.css';
import '@coinbase/onchainkit/styles.css';
import { Providers } from './providers';

export const metadata = {
  title: 'Social Media App',
  description: 'A modern social media platform built with Base Mini Apps',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-background">
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
