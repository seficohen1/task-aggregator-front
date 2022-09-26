import { set } from "react-hook-form";


async function fetchAll (urlPath, setState) {
  try {
    const res = await fetch(`http://localhost:4001/dashboard/${urlPath}`)
    const data = await res.json();
    let results;
    if (data.results) {
      results = data.results
      setState(results);
    } else {
      setState(data)
    }
  } catch (error) {
    console.error(error)
  }
}


async function updateTask (dbId, body) {
  const options = {
    method: 'PATCH',
    mode: 'cors',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(body)
  }
  try {
    const baseUrl = 'http://localhost:4001/dashboard/tasks/';
    const res = await fetch(`${baseUrl}${dbId}`, options)
    const data = await res.json();
    console.log(data)
  } catch (error) {
    console.log(error)
    
  }
}




export { fetchAll, updateTask }
