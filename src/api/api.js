import axios from "axios";
import Swal from "sweetalert2";

const createNewUser = async (newUser) => {
  axios
    .post("http://localhost:4001/dashboard/users", newUser)
    .then((res) => console.log(res))
    .catch((err) => console.log(err));
};


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
    return data;
  } catch (error) {
    console.log(error);
  }
}

const deleteTask = (id) => {    
  axios
    .delete(`http://localhost:4001/dashboard/tasks/${id}`)
    .then((res) => console.log(res))
    .catch((err) => console.log(err));
};

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


const getUserFromName = async (urlPath, data) => {
  try {
    const res = await fetch(`${urlPath}/${data.firstName}/${data.lastName}`);
    const newObj = await res.json();
    return newObj;
  } catch (error) {
    console.log(error)
  }
}

export { fetchAll, updateTask, deleteTask, updateUser, getAllUsers, createNewUser, getUserFromName };
