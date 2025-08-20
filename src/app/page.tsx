import Header from "@/components/Header";
import GasometryAnalysis from "@/components/GasometryAnalysis";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="bg-slate-50 flex flex-col flex-grow">
      <Header />
      <main>
        <GasometryAnalysis />
      </main>
      <Footer />
    </div>
  );
}