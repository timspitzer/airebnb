import * as Tabs from "@radix-ui/react-tabs";

export function TabsList({ activeTab, setActiveTab }) {
  return (
    <Tabs.List className="p-t-[18px] p-b-[9px] relative">
      <div className="flex justify-center">
        <Tabs.Trigger
          onClick={() => setActiveTab("stays")}
          value="stays"
          className={`m-t-[9px] m-x-[10px] m-b-[4px] font-600 w-[44px] bg-transparent text-[16px] leading-[20px] text-[#717171] data-[state=active]:text-[#000000]`}
        >
          Stays
        </Tabs.Trigger>
        <Tabs.Trigger
          onClick={() => setActiveTab("experiences")}
          value="experiences"
          className={`m-t-[9px] m-x-[10px] m-b-[4px] font-600 w-[96px] bg-transparent text-[16px] leading-[20px] text-[#717171] data-[state=active]:text-[#000000]`}
        >
          Experiences
        </Tabs.Trigger>
      </div>
      <div className="flex h-[2px] w-full justify-center">
        <div className="relative">
          <div
            className={`${activeTab === "stays" ? "left-[-80px] w-[44px]" : ""}
                  ${
                    activeTab === "experiences" ? "left-[-16px] w-[96px]" : ""
                  } transition-left transition-width transition-200 absolute h-[2px] bg-[#000000] will-change-[width,left]`}
          ></div>
        </div>
      </div>
    </Tabs.List>
  );
}
