import Link from 'next/link';
import { FaExclamationTriangle } from 'react-icons/fa';
import Layout from '@/components/Layout';
import styles from '@/styles/404.module.css';

const NotFoundPage = () => {
  return (
    <Layout title='Page not Found'>
      <div className={styles.error}>
        <FaExclamationTriangle size={60} style={{ color: 'crimson' }} />
        <h1>404</h1>
        <h4>Sorry Page Not Found</h4>
        <Link href='/'>Home</Link>
      </div>
    </Layout>
  );
};

export default NotFoundPage;
