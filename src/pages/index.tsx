import Header from '@/components/Header';
import LargeWeatherCard from '@/components/LargerWeatherCard';
import Layout from '@/components/Layout';
import SmallWeatherCard from '@/components/SmallWeatherCard';

export default function Home() {
  return (
    <Layout>
      <Header />
      <main className="container mx-auto">
        <div className="flex justify-between pt-20">
          <LargeWeatherCard
            temp={22}
            city="São Paulo"
            country="Brasil"
            description="Parcialmente nublado"
            dayWeek="Quinta"
            time="18:00"
            day="24/04"
            humidity={70}
            wind={14}
          />
          <SmallWeatherCard temp={23} dayWeek="Sex" />
          <SmallWeatherCard temp={23} dayWeek="Sex" />
          <SmallWeatherCard temp={23} dayWeek="Sex" />
          <SmallWeatherCard temp={23} dayWeek="Sex" />
          <SmallWeatherCard temp={23} dayWeek="Sex" />
          <SmallWeatherCard temp={23} dayWeek="Sex" />
        </div>
      </main>
    </Layout>
  );
}
