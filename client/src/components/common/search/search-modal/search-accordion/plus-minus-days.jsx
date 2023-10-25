const DAYS = [0, 1, 2, 3, 7];

const DAYS_WITH_TEXT = DAYS.map((day) => {
  if (day === 0) return { day, text: "Exact dates" };
  if (day === 1) return { day, text: `${day} day` };
  if (day >= 1) return { day, text: `${day} days` };
});

export function PlusMinusDays({ activePill, setActivePill }) {
  const handlePillClick = (e) => {
    e.preventDefault();
    setActivePill(parseInt(e.currentTarget.value));
  };

  return (
    <div className="scroll scrollbar-hide overflow-x-scroll whitespace-nowrap">
      {DAYS_WITH_TEXT.map((day) => (
        <Pill
          key={day.day}
          text={day.text}
          value={day.day}
          handlePillClick={handlePillClick}
          activePill={activePill}
        ></Pill>
      ))}
    </div>
  );
}

function Pill({ text, value, handlePillClick, activePill }) {
  return (
    <button
      value={value}
      onClick={handlePillClick}
      className={`shadow-border-1px-grey ml-[10px] box-content whitespace-nowrap rounded-full px-3 py-[6px] first:ml-6 last:mr-6 focus:bg-[#f7f7f7] active:scale-95 ${
        value === activePill ? "shadow-border-2px-black" : ""
      }`}
    >
      {text === DAYS_WITH_TEXT[0] ? (
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
