export function calculateScrollDistance(elementWidth, totalItems, direction) {
  const NUMBER_OF_ITEMS_TO_SCROLL = 5;

  const scrollDistance =
    NUMBER_OF_ITEMS_TO_SCROLL * Math.ceil(elementWidth / totalItems);
  return direction === "left" ? -scrollDistance : scrollDistance;
}
