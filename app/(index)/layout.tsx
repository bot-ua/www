import { ReactNode } from 'react';
import Layout from './components/layout.component';

interface Props {
  children: ReactNode;
}

const OrganizationsLayout: React.FC<Props> = ({
  children,
}) => {
  return <Layout>{children}</Layout>;
};

export default OrganizationsLayout;
