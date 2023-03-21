import Header from '@/components/Header';
import LargeWeatherCard from '@/components/LargerWeatherCard';
import Layout from '@/components/Layout';

export default function Home() {
  return (
    <Layout>
      <Header />
      <main>
        <LargeWeatherCard />
      </main>
    </Layout>
  );
}
