import { cx } from './lib/cx';
import { inter } from './ui/fonts';
import '@/app/ui/global.css';

function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={cx(inter.className, 'antialiased')}>{children}</body>
    </html>
  );
}

export default RootLayout;
