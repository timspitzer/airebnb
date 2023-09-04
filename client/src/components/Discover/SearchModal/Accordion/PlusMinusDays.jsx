const DAYS = [0, 1, 2, 3, 7];

const DAYS_TEXT = DAYS.map((day) => {
  if (day === 0) return "Exact dates";
  if (day === 1) return `${day} day`;
  if (day >= 1) return `${day} days`;
});

export function PlusMinusDays() {
  return (
    <div className="scroll scrollbar-hide overflow-x-scroll whitespace-nowrap">
      {DAYS_TEXT.map((dayText) => (
        <Pill key={dayText} text={dayText}></Pill>
      ))}
    </div>
  );
}

function Pill({ text }) {
  return (
    <button
      onClick={(e) => e.preventDefault()}
      className="shadow-border-1px-grey focus:shadow-border-2px-black ml-[10px] box-content whitespace-nowrap rounded-full px-3 py-[6px] transition-transform duration-150 first:ml-6 last:mr-6 focus:bg-[#f7f7f7] active:scale-95"
    >
      {text === DAYS_TEXT[0] ? (
        ""
      ) : (
        <span className="pr-1">
          <svg
            className="-mb-[3px]"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 32 32"
            style={{
              display: "inline-block",
              fill: "none",
              height: "12px",
              width: "12px",
              stroke: "currentColor",
              strokeWidth: "2.66667px",
              overflow: "visible",
            }}
            aria-label="+-"
            role="img"
            focusable="false"
          >
            <path fill="none" d="M16 4v16m-8-8h16M8 26h16" />
          </svg>
        </span>
      )}
      <span className="color-[#222222] whitespace-nowrap text-[12px]">
        {text}
      </span>
    </button>
  );
}
