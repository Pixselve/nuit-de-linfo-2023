import WaldoButton from "@/components/waldo-button";

export default function () {
  return (
    <nav
      className="rounded-lg shadow bg-[#e0e0e0] max-w-4xl mx-auto p-4 flex justify-between items-center w-full"
      style={{
        boxShadow:
          "inset 20px 20px 60px #bebebe, inset -20px -20px 60px #ffffff",
        background: "linear-gradient(90deg, red 0%, red 50%, white 50%)",
        backgroundSize: "20px 40px",
      }}
    >
      <div className="text-black font-bold text-4xl bg-white p-2 shadow rounded-xl">
        WaldoLand
      </div>
      <WaldoButton></WaldoButton>
    </nav>
  );
}
