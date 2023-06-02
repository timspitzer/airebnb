const searches = [
  {
    destination: "Europe",
    dates: {
      start: new Date(Date.now() + 100000000),
      end: new Date(Date.now() + 200000000),
      guests: 1,
    },
  },
  {
    destination: "Europe",
    dates: {
      start: new Date(),
      end: new Date(Date.now() + 400000000),
      guests: 1,
    },
  },
  {
    destination: "Istanbul",
    dates: {
      start: new Date(Date.now() + 450000000),
      end: new Date(Date.now() + 500000000),
      guests: 1,
    },
  },
];

export function RecentSearches() {
  return (
    <div>
      <h4>Recent Searches</h4>
      {searches.map((search, i) => (
        <div key={i}>{search.destination}</div>
      ))}
    </div>
  );
}
