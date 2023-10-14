'use client';

import './global.css';
import { Providers } from './providers';
import { useSession } from 'next-auth/react';

// export const metadata = {
//   title: 'Bot',
//   description: 'Bot is an open-source, self-hosted engine for workflow automation',
// };

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  // const { data: session } = useSession();
  
  return (
    <html lang="en">
      <link rel="icon" type="image/svg+xml" href="/favicon.svg"/>
      <link rel="icon" type="image/png" href="/favicon.png"/>
      <body>
        <Providers session={null}>{children}</Providers>
      </body>
    </html>
  );
}
