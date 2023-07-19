function findPath(tickets) {
  const graph = {};
  for (const [from, to] of tickets) {
    if (!graph[from]) 
    {
        graph[from] = [];
    }
    graph[from].push(to);
  }
  for (const from in graph) {
    graph[from].sort();
  }
  const itinerary = [];
  
  function dfs(airport) {
    const destinations = graph[airport];
    while (destinations && destinations.length) {
      const nextAirport = destinations.shift();
      dfs(nextAirport);
    }
    itinerary.unshift(airport); 
  } 
  dfs('A');  
  return itinerary;
}
console.log(findPath([["Y", "L"], ["D", "A"],["A", "D"], ["R", "Y"], ["A", "R"]]));