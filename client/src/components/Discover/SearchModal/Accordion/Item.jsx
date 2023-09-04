import * as RadixAccordion from "@radix-ui/react-accordion";

export function Item({ value, trigger, itemContent, className }) {
  return (
    <RadixAccordion.Item className={className} value={value}>
      <RadixAccordion.Trigger className="m-b-[12px] flex h-full w-full justify-between rounded-[16px] bg-[#ffffff] p-[24px] shadow-md data-[state=open]:hidden">
        <div className="font-600 text-[#717171]">{trigger.title}</div>
        <div className="font-600">{trigger.description}</div>
      </RadixAccordion.Trigger>
      <RadixAccordion.Content className="m-b-[12px] p-y-6 h-full rounded-[16px] bg-[#ffffff] shadow-xl">
        <div className="mx-6">{itemContent.title}</div>
        {itemContent.content}
        {itemContent.additional}
      </RadixAccordion.Content>
    </RadixAccordion.Item>
  );
}
