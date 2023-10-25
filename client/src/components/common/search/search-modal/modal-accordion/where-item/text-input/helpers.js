export function generateSuggestions(query, places) {
  if (query.length === 0) return [];
  const lowerCaseQuery = query.toLowerCase();
  let suggestions = places.filter((place) => {
    const lowerCasePlace = place.toLowerCase();
    return lowerCasePlace.startsWith(lowerCaseQuery);
  });
  if (suggestions.length < 1) {
    suggestions = places.filter((place) => {
      const lowerCasePlace = place.toLowerCase();
      return lowerCasePlace.includes(lowerCaseQuery);
    });
  }
  const slicedSuggestions = suggestions.slice(0, 5);
  return slicedSuggestions;
}
