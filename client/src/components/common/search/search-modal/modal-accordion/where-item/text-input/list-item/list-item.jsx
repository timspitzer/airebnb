export function ListItem({ children, handleClick }) {
  return (
    <li>
      <button
        onClick={handleClick}
        className="p-y-[8px] p-x-[24px] m-x-[-24px] flex w-[100vw] text-left hover:bg-[#F7F7F7]"
      >
        {children}
      </button>
    </li>
  );
}
