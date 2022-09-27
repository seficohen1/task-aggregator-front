import axios from "axios";
import Swal from "sweetalert2";

const createNewUser = async (newUser, token) => {
  axios({
    method: "post",
    headers: {
      Authorization: `Bearer ${token}`,
    },
    url: "http://localhost:4001/dashboard/users",
    data: newUser,
  })
    .then((res) => console.log(res))
    .catch((err) => console.log(err));
};

async function fetchAll(urlPath, setState, token) {
  try {
    const res = await fetch(`http://localhost:4001/dashboard/${urlPath}`, {
      headers: { Authorization: `Bearer ${token}` },
    });
    const data = await res.json();
    let results;
    if (data.results) {
      results = data.results;
      setState(results);
    } else {
      setState(data);
    }
  } catch (error) {
    console.error(error);
  }
}

async function createNewTask(taskPost, token) {
    axios({
      method: "post",
      headers: {
        Authorization: `Bearer ${token}`,
      },
      url: "http://localhost:4001/dashboard/tasks",
      data: taskPost,
    })
      .then((res) => console.log(res))
      .catch((err) => console.log(err));
  }


async function updateTask(dbId, body, token) {
  const options = {
    method: "PATCH",
    mode: "cors",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
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

const deleteTask = (id, token) => {
  axios
    .delete(`http://localhost:4001/dashboard/tasks/${id}`, {
      headers: { Authorization: `Bearer ${token}` },
    })
    .then((res) => console.log(res))
    .catch((err) => console.log(err));
};

// edit user  details

const updateUser = async (url, options, token) => {
  const { firstName, lastName, email, role, dropDownInput } = options;

  try {
    const request = await axios({
      method: "patch",
      headers: {
        Authorization: `Bearer ${token}`,
      },
      url: url,
      data: {
        firstName,
        lastName,
        email,
        role: role === "undefined" ? "user" : dropDownInput,
      },
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

const getAllUsers = async (url, setState, token) => {
  try {
    const request = await axios(url, {
      headers: { Authorization: `Bearer ${token}` },
    });
    if (request.status === 200) setState(request.data.results);
  } catch (error) {
    throw Error(error);
  }
};

const getUserFromName = async (urlPath, data, token) => {
  try {
    const res = await fetch(`${urlPath}/${data.firstName}/${data.lastName}`, {
      headers: { Authorization: `Bearer ${token}` },
    });
    const newObj = await res.json();
    return newObj;
  } catch (error) {
    console.log(error);
  }
};

export {
  fetchAll,
  createNewTask,
  deleteTask,
  updateTask,
  updateUser,
  getAllUsers,
  createNewUser,
  getUserFromName,
};
