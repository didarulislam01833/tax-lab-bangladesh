import Header from '@/components/Header';
import Hero from '@/components/Hero';
import Subjects from '@/components/Subjects';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col justify-between bg-white">
      <div>
        <Header />
        <Hero />
        <Subjects />
      </div>
      <Footer />
    </main>
  );
}