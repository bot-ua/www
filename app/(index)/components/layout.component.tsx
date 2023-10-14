'use client';

import { Layout } from 'design-system';

import Header from '../../../components/header.component';
import Footer from '../../../components/footer.component';
import React from 'react';

const LayoutComponent = ({ children }: { children: React.ReactNode }) => {
  return (
    <Layout
      isSidebarOpen={false}
      header={<Header />}
      content={children}
      footer={<Footer />}
    />
  );
};

export default LayoutComponent;
