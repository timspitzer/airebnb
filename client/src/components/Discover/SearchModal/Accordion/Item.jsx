import * as RadixAccordion from "@radix-ui/react-accordion";

export function Item({ value, trigger, itemContent }) {
  return (
    <RadixAccordion.Item value={value}>
      <RadixAccordion.Trigger className="m-b-[12px] flex h-full w-full justify-between rounded-[16px] bg-[#ffffff] p-[24px] shadow-md data-[state=open]:hidden">
        <div className="font-600 text-[#717171]">{trigger.title}</div>
        <div className="font-600">{trigger.destination}</div>
      </RadixAccordion.Trigger>
      <RadixAccordion.Content className="m-b-[12px] p-y-[24px] rounded-[16px] bg-[#ffffff] shadow-md">
        <div className="m-x-[24px]">
          {itemContent.title}
          {itemContent.content}
        </div>
        {itemContent.additional}
      </RadixAccordion.Content>
    </RadixAccordion.Item>
  );
}
