<<<<<<< HEAD
import axios from "axios";
import Swal from "sweetalert2";
=======
>>>>>>> task-detail

const createNewUser = async (newUser) => {
  axios
    .post("http://localhost:4001/dashboard/users", newUser)
    .then((res) => console.log(res))
    .catch((err) => console.log(err));
};

<<<<<<< HEAD
async function fetchTasks(setState) {
  try {
    const res = await fetch("http://localhost:4001/dashboard/tasks");
=======

async function fetchAll (urlPath, setState) {
  try {
    const res = await fetch(`http://localhost:4001/dashboard/${urlPath}`)
>>>>>>> task-detail
    const data = await res.json();
    let results;
    if (data.results) {
      results = data.results
      setState(results);
    } else {
      setState(data)
    }
  } catch (error) {
    console.error(error);
  }
}

async function updateTask(dbId, body) {
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

<<<<<<< HEAD
// edit user  details

const updateUser = async (url, options) => {
  const { firstName, lastName, email, role, dropDownInput } = options;

  try {
    const request = await axios.patch(url, {
      firstName,
      lastName,
      email,
      role: role === "undefined" ? "user" : dropDownInput,
    });
    if (request.status === 200) {
      Swal.fire({
        icon: "success",
        text: "User was saved successfully",
      });
    } else {
      Swal.fire({
        icon: "warning",
        text: "Oops, something went wrong!",
      });
    }
  } catch (error) {
    throw Error(error);
  }
};

const getAllUsers = async (url, setState) => {
  try {
    const request = await axios(url);
    if (request.status === 200) setState(request.data.results);
  } catch (error) {
    throw Error(error);
  }
};

export { fetchTasks, updateTask, updateUser, getAllUsers, createNewUser };
=======



export { fetchAll, updateTask }
>>>>>>> task-detail
