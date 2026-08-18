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
  return (
    <div id="top">
      <Header />
      <FloatingContact />
      <main>
        <Hero />
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
