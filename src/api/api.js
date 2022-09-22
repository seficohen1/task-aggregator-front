




async function fetchTasks (setState) {
  try {
    const res = await fetch('http://localhost:4001/dashboard/tasks')
    const data = await res.json();
    const results = data.results;
    setState(results);
  } catch (error) {
    console.error(error)
  }
}


export { 
  fetchTasks 
}