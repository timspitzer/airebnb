import { useEffect, useState } from "react";
import { api } from "../api/api";

export const tabListItems = [
  {
    name: "Rooms",
    iconUrl: "/src/assets/category-icons/rooms-icon.png",
  },
  // {
  //   name: "Beachfront",
  //   iconUrl:
  //     "",
  // },
  // {
  //   name: "Cabins",
  //   iconUrl:
  //     "",
  // },
  // {
  //   name: "Amazing Pools",
  //   iconUrl:
  //     "",
  // },
  // {
  //   name: "Countryside",
  //   iconUrl:
  //     "",
  // },
  // {
  //   name: "Amazing Views",
  //   iconUrl:
  //     "",
  // },
  // {
  //   name: "Trending",
  //   iconUrl:
  //     "",
  // },
  // {
  //   name: "Mansions",
  //   iconUrl:
  //     "",
  // },
  // {
  //   name: "OMG!",
  //   iconUrl:
  //     "",
  // },
  // {
  //   name: "Tiny Houses",
  //   iconUrl:
  //     "",
  // },
  // {
  //   name: "Castles",
  //   iconUrl:
  //     "",
  // },
  // {
  //   name: "Skiing",
  //   iconUrl:
  //     "",
  // },
  // {
  //   name: "Iconic Cities",
  //   iconUrl:
  //     "",
  // },
  // {
  //   name: "National parks",
  //   iconUrl:
  //     "",
  // },
  // {
  //   name: "Vineyards",
  //   iconUrl:
  //     "",
  // },
  // {
  //   name: "Tropical",
  //   iconUrl:
  //     "",
  // },
  // {
  //   name: "Caves",
  //   iconUrl:
  //     "",
  // },
  // {
  //   name: "Houseboats",
  //   iconUrl:
  //     "",
  // },
  // {
  //   name: "Farms",
  //   iconUrl:
  //     "",
  // },
  // {
  //   name: "Lake",
  //   iconUrl:
  //     "",
  // },
  // {
  //   name: "Design",
  //   iconUrl:
  //     "",
  // },
];

export function useCategories() {
  const [categories, setCategories] = useState([]);
  useEffect(() => {
    async function getCategories() {
      try {
        const fetchedCategories = await api.fetchCategories();
        setCategories(fetchedCategories);
      } catch (e) {
        console.log("Handling error: ", e);
      }
    }
    getCategories();
  }, []);
  return categories;
}
