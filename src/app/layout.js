import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import BootstrapScripts from './component/layout/BootstrapScripts';

export const metadata = {
  title: 'Shakil Dev',
  description: 'Created with Next.js and Bootstrap',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}
        <BootstrapScripts />
      </body>
    </html>
  );
}
