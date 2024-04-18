"use client";

export default function Radio2({ option, index, allOptions }) {
  return (
    <div className="max-h-[12rem] border border-[#b0b2b6]  rounded-[0.4rem] text-[#4B5563] overflow-y-auto overflow-x-hidden flex flex-col">
      <div
        className={`${
          data1[m[1].key] === option[0]
            ? `bg-[#E5E7EB] rounded-md`
            : "bg-transparent"
        } px-4 hover:bg-slate-100`}
      >
        <p
          onClick={() => {
            sendVal(m[1].key, option[0]);
          }}
          className={`${
            index !== allOptions.length - 1 && "border-b-2"
          } py-2 pr-6 min-w-[6rem]`}
        >
          {option[1]}
        </p>
      </div>
    </div>
  );
}
