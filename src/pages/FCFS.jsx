import Header from "../components/Header";
import Footer from "../components/Footer";
import FCFSSimulator from "../components/FCFSSimulator";

export default function FCFS() {
  return (
    <div className="bg-[#073B4C] min-h-screen text-white">
      <Header />
      <div className="pt-32 pb-20">
        <FCFSSimulator />
      </div>
      <Footer />
    </div>
  );
}
