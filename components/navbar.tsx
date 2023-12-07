import WaldoButton from "@/components/waldo-button";

export default function () {
  return (
    <nav
      className="rounded-lg shadow bg-[#e0e0e0] max-w-4xl mx-auto p-4 flex justify-between items-center"
      style={{
        boxShadow:
          "inset 20px 20px 60px #bebebe, inset -20px -20px 60px #ffffff;",
      }}
    >
      <div className="text-green-500 font-bold text-2xl">100% Green</div>
      <WaldoButton></WaldoButton>
    </nav>
  );
}
