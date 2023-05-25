import * as RadixAccordion from "@radix-ui/react-accordion";

export function Accordion() {
  return (
    <RadixAccordion.Root
      defaultValue="where"
      type="single"
      className="m-t-[15px] m-x-[12px]"
    >
      <RadixAccordion.Item value="where">
        <RadixAccordion.Trigger className="m-b-[12px] flex h-full w-full justify-between rounded-[16px] bg-[#ffffff] p-[24px] shadow-md data-[state=open]:hidden">
          <div>Where</div>
          <div>I am flexible</div>
        </RadixAccordion.Trigger>
        <RadixAccordion.Content className="m-b-[12px] rounded-[16px] bg-[#ffffff] p-[24px] shadow-md">
          <div className="text-[22px]">Where to?</div>
          <div>Searchbar</div>
          <div>DestinationCards</div>
        </RadixAccordion.Content>
      </RadixAccordion.Item>

      <RadixAccordion.Item value="when">
        <RadixAccordion.Trigger className="m-b-[12px] flex h-full w-full justify-between rounded-[16px] bg-[#ffffff] p-[24px] shadow-md data-[state=open]:hidden">
          When
        </RadixAccordion.Trigger>
        <RadixAccordion.Content className="m-b-[12px] rounded-[16px] bg-[#ffffff] p-[24px] shadow-md">
          <div className="text-[22px]">When's your trip?</div>
          <div>Datepicker</div>
          <div>Plus Minus Days</div>
          <div>Next steps</div>
        </RadixAccordion.Content>
      </RadixAccordion.Item>

      <RadixAccordion.Item value="who">
        <RadixAccordion.Trigger className="m-b-[12px] flex h-full w-full justify-between rounded-[16px] bg-[#ffffff] p-[24px] shadow-md data-[state=open]:hidden">
          Who
        </RadixAccordion.Trigger>
        <RadixAccordion.Content className="m-b-[12px] rounded-[16px] bg-[#ffffff] p-[24px] shadow-md">
          <div className="text-[22px]">Who's coming?</div>
          <div>Adults</div>
          <div>Children</div>
          <div>Infants</div>
          <div>Pets</div>
        </RadixAccordion.Content>
      </RadixAccordion.Item>

      <div>Dynamic Footer</div>
    </RadixAccordion.Root>
  );
}
