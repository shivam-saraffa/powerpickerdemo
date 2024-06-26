"use client"
export default function Radio({ m, sendVal, data1 }) {
  return (
    <div className="flex flex-col gap-2" type={m[1].type} key={m[1].key}>
      <h1 className="font-bold border-none text-[#374151]">{m[1].label}</h1>
      {m[1].label === "Finish" ? (
        <div className="rounded-[0.4rem] max-h-[20rem] border border-[#b0b2b6] py-2 text-[#4B5563] overflow-y-auto overflow-x-hidden flex flex-col">
          {Object.entries(m[1].options).map((option, index, allOptions) => {
            return (
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
                  } py-2 pr-6 w-[15rem] flex gap-4 items-center`}
                >
                  <div
                    style={{ backgroundColor: `${option[0]}` }}
                    className={`border border-gray-200 w-10 h-5 m-y-auto rounded-[0.2rem]`}
                  ></div>
                  {option[1]}
                </p>
              </div>
            );
          })}
        </div>
      ) : (
        <div className="max-h-[12rem] border border-[#b0b2b6]  rounded-[0.4rem] text-[#4B5563] overflow-y-auto overflow-x-hidden flex flex-col">
          {Object.entries(m[1].options).map((option, index, allOptions) => {
            return (
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
            );
          })}
        </div>
      )}
    </div>
  );
}
