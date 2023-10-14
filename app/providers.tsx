'use client';

import {
  ThemeProvider,
  ThemeWrapper,
  ThemeType,
  SnackbarProvider,
} from 'design-system';
import { Session } from 'next-auth';
import { SessionProvider } from 'next-auth/react';

interface Props {
  session: Session | null;
  children: React.ReactNode;
}

export const Providers: React.FC<Props> = ({ session, children }) => {
  return (
    <SessionProvider session={session}>
      <ThemeProvider
        source={{
          light: process.env.NEXT_PUBLIC_DESIGN_SYSTEM_TOKENS_LIGHT_THEME!,
          dark: process.env.NEXT_PUBLIC_DESIGN_SYSTEM_TOKENS_DARK_THEME!,
        }}
        themeType={ThemeType.SYSTEM}
      >
        <ThemeWrapper>
          <SnackbarProvider duration={3000}>
            {children}
          </SnackbarProvider>
        </ThemeWrapper>
      </ThemeProvider>
    </SessionProvider>
  );
};
