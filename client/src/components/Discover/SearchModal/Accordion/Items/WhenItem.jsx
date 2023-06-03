import * as RadixAccordion from "@radix-ui/react-accordion";

export function WhenItem() {
  return (
    <RadixAccordion.Item value="when">
      <RadixAccordion.Trigger className="m-b-[12px] flex h-full w-full justify-between rounded-[16px] bg-[#ffffff] p-[24px] shadow-md data-[state=open]:hidden">
        When
      </RadixAccordion.Trigger>
      <RadixAccordion.Content className="m-b-[12px] rounded-[16px] bg-[#ffffff] p-[24px] shadow-md">
        <div className="text-[22px]">When{"'"}s your trip?</div>
        <div>Datepicker</div>
        <div>Plus Minus Days</div>
        <div>Next steps</div>
      </RadixAccordion.Content>
    </RadixAccordion.Item>
  );
}
