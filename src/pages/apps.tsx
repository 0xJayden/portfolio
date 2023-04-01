import BillSplit from "../components/BillSplit";
import Navbar from "../components/Navbar";
import Xpand from "../components/Xpand";

export default function Apps() {
  return (
    <div className="bg-gradient-to-b p-5 min-h-screen items-center flex flex-col via-[#2e383d] from-[#1f1a25] to-[#23162f]">
      <Navbar />
      <h1 className="text-5xl py-10 animate-fadeUp2">Mobile Apps</h1>
      <div className="space-y-10 w-full max-w-[1250px]">
        <Xpand />
        <BillSplit />
      </div>
    </div>
  );
}
