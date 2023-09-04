import * as RadixAccordion from "@radix-ui/react-accordion";

export function WhoItem() {
  return (
    <RadixAccordion.Item value="who">
      <RadixAccordion.Trigger className="m-b-[12px] flex h-full w-full justify-between rounded-[16px] bg-[#ffffff] p-[24px] shadow-md data-[state=open]:hidden">
        Who
      </RadixAccordion.Trigger>
      <RadixAccordion.Content className="m-b-[12px] rounded-[16px] bg-[#ffffff] p-[24px] shadow-md">
        <div className="text-[22px]">Who{"'"}s coming?</div>
        <div>Adults</div>
        <div>Children</div>
        <div>Infants</div>
        <div>Pets</div>
      </RadixAccordion.Content>
    </RadixAccordion.Item>
  );
}
