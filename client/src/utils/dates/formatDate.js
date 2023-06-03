export function formatDate(timestamp) {
  const date = new Date(timestamp);
  const dateString = date.toDateString();
  return Number(dateString.slice(8, 10)) < 10
    ? `${dateString.slice(4, 7)} ${dateString.slice(9, 10)} `
    : dateString.slice(4, 10);
}
