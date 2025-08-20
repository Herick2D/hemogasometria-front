import Header from "@/components/Header";
import GasometryAnalysis from "@/components/GasometryAnalysis";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="bg-slate-50 min-h-screen">
      <Header />
      <main>
        <GasometryAnalysis />
      </main>
      <Footer />
    </div>
  );
}