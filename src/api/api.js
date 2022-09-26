import axios from "axios";

const createNewUser = async (newUser) => {
  axios
    .post("http://localhost:4001/dashboard/users", newUser)
    .then((res) => console.log(res))
    .catch((err) => console.log(err));
};





async function fetchTasks (setState) {
  try {
    const res = await fetch("http://localhost:4001/dashboard/tasks");
    const data = await res.json();
    const results = data.results;
    setState(results);
  } catch (error) {
    console.error(error);
  }
}


async function updateTask (dbId, body) {
  const options = {
    method: "PATCH",
    mode: "cors",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(body),
  };
  try {
    const baseUrl = "http://localhost:4001/dashboard/tasks/";
    const res = await fetch(`${baseUrl}${dbId}`, options);
    const data = await res.json();
    console.log(data);
  } catch (error) {
    console.log(error);
  }
}

export { fetchTasks, updateTask, createNewUser };
