import Layout from '../../components/Layout';

const EventPage = () => {
  const router = useRouter();

  console.log(router);
  return (
    <Layout>
      <h1>my events</h1>
    </Layout>
  );
};

export default EventPage;
