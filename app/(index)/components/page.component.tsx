'use client';

import { Page } from 'design-system';

const PageComponent = ({ children }: { children: React.ReactNode }) => {
  return <Page content={children} />;
};

export default PageComponent;
