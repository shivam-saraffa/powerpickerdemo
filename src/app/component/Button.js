export default function Button({resetHandler,printData}) {
  return (
    <div className="flex justify-center items-center p-4 gap-4">
        <button onClick={resetHandler} className="border border-[#17569A] text-[#17569A] px-[20px] py-[12px] w-[160px] rounded-[4px] font-bold">Reset All</button>
        <button onClick={printData} className="border border-[#17569A] text-white bg-[#17569A] px-[20px] py-[12px] w-[160px] rounded-[4px] font-bold">Save All</button>
    </div>
    
  );
}
