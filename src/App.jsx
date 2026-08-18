import { useState } from "react";
import Header from "./components/Header";
import FloatingContact from "./components/FloatingContact";
import Hero from "./components/Hero";
import StatsBar from "./components/StatsBar";
import QuoteTicker from "./components/QuoteTicker";
import ReviewCards from "./components/ReviewCards";
import UsedCarGrid from "./components/UsedCarGrid";
import PromoBanners from "./components/PromoBanners";
import PaymentTable from "./components/PaymentTable";
import Footer from "./components/Footer";

export default function App() {
  const [consultOpen, setConsultOpen] = useState(false);

  return (
    <div id="top">
      <Header />
      <FloatingContact open={consultOpen} onOpenChange={setConsultOpen} />
      <main>
        <Hero onOpenConsult={() => setConsultOpen(true)} />
        <StatsBar />
        <QuoteTicker />
        <ReviewCards />
        <UsedCarGrid />
        <PromoBanners />
        <PaymentTable />
      </main>
      <Footer />
    </div>
  );
}
