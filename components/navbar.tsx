import WaldoButton from "@/components/waldo-button";
import Patpat from "@/components/pat-pat";
import { useTheme } from '@/components/theme-context';

export default function () {
  const { theme, patpat, setPatpat, setTheme } = useTheme();
  return (
    <nav
      className="rounded-lg shadow bg-[#e0e0e0] max-w-6xl mx-auto p-4 flex justify-between items-center w-full"
      style={{
        boxShadow:  
          "inset 20px 20px 60px #bebebe, inset -20px -20px 60px #ffffff",
        background: "linear-gradient(90deg, red 0%, red 50%, white 50%)",
        backgroundSize: "20px 40px",
      }}
    >
      {/* On click 360 rotation */}
      <Patpat enabled={patpat}>
        <div className="text-black font-bold text-4xl bg-white p-4 shadow rounded-xl transition-all hover:rotate-[180deg] duration-1000">
          WaldoLand
        </div>
      </Patpat>
      <WaldoButton></WaldoButton>
    </nav>
  );
}
