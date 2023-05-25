import * as Tabs from "@radix-ui/react-tabs";

import styles from "./List.module.css"; // Import css modules stylesheet as styles

const tabListItems = [
  {
    name: "Rooms",
    iconUrl:
      "https://a0.muscache.com/pictures/7630c83f-96a8-4232-9a10-0398661e2e6f.jpg",
  },
  {
    name: "Beachfront",
    iconUrl:
      "https://a0.muscache.com/pictures/bcd1adc0-5cee-4d7a-85ec-f6730b0f8d0c.jpg",
  },
  {
    name: "Cabins",
    iconUrl:
      "https://a0.muscache.com/pictures/732edad8-3ae0-49a8-a451-29a8010dcc0c.jpg",
  },
  {
    name: "Amazing Pools",
    iconUrl:
      "https://a0.muscache.com/pictures/3fb523a0-b622-4368-8142-b5e03df7549b.jpg",
  },
  {
    name: "Countryside",
    iconUrl:
      "https://a0.muscache.com/pictures/6ad4bd95-f086-437d-97e3-14d12155ddfe.jpg",
  },
  {
    name: "Amazing Views",
    iconUrl:
      "https://a0.muscache.com/pictures/3b1eb541-46d9-4bef-abc4-c37d77e3c21b.jpg",
  },
  {
    name: "Trending",
    iconUrl:
      "https://a0.muscache.com/pictures/3726d94b-534a-42b8-bca0-a0304d912260.jpg",
  },
  {
    name: "Mansions",
    iconUrl:
      "https://a0.muscache.com/pictures/78ba8486-6ba6-4a43-a56d-f556189193da.jpg",
  },
  {
    name: "OMG!",
    iconUrl:
      "https://a0.muscache.com/pictures/c5a4f6fc-c92c-4ae8-87dd-57f1ff1b89a6.jpg",
  },
  {
    name: "Tiny Houses",
    iconUrl:
      "https://a0.muscache.com/pictures/35919456-df89-4024-ad50-5fcb7a472df9.jpg",
  },
];

const tabListItemsWithId = tabListItems.map((item) => {
  return { ...item, id: crypto.randomUUID() };
});

export function List() {
  return (
    <Tabs.List className="scrollbar-hide flex gap-3 overflow-x-scroll whitespace-nowrap">
      {tabListItemsWithId.map((item, index) => {
        return (
          <Tabs.Trigger
            className={`${styles.button} inline-flex flex-col items-center bg-transparent p-0 opacity-60 transition-opacity duration-200 ease-in-out hover:opacity-100 data-[state=active]:opacity-100`}
            key={item.id}
            value={`tab${index + 1}`}
          >
            <div className="m-b-2 m-t-4">
              <img src={item.iconUrl} className="w-[24px]"></img>
              <div className="m-t-1 text-xs font-semibold">{item.name}</div>
            </div>
            <div
              className={`${styles.indicator} h-[2px] w-full bg-[#000000] opacity-0 transition-opacity duration-200 ease-in-out`}
            ></div>
          </Tabs.Trigger>
        );
      })}
    </Tabs.List>
  );
}
