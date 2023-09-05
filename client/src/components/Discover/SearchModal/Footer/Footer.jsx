export function Footer() {
  return (
    <footer className="p-x-[24px] p-y-[12px] border-t-solid fixed bottom-0 flex w-full justify-between border border-[#eeeeee] bg-[#fbfbfb]">
      <button className="font-600 rounded-[8px] bg-transparent p-[10px] text-[16px] hover:bg-[#f7f7f7] active:scale-95">
        <u>Clear all</u>
      </button>
      <button className="p-x-[24px] p-y-[12px] flex rounded-[8px] bg-[#e51d53] text-[#ffffff] active:scale-95">
        <div className="i-radix-icons:magnifying-glass text-[20px] text-[#f9d2dd]"></div>
        <span className="m-l-[10px] font-600 text-[16px] ">Search</span>
      </button>
    </footer>
  );
}
