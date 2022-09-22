import axios from "axios";

//url
const loginURL = "http://localhost:4001/login";
const tasksURL = "http://localhost:4001/dashboard/tasks";

//--------------------------------------------

export const userLogin = async () => {
  await axios
    .post(loginURL, user)
    .then((res) => {
      setToken(res.data.token);
      console.log("user: ", res);
      console.log(res.data.authenticatedUser.role);
    })
    .catch((error) => {
      console.log(error);
    });
};

export const getTasks = async (token) => {
  await axios
    .get(tasksURL)
    .then((res) => {
      let data = Object.entries(res);
      const iterableData = data[0][1].results;
      iterableData.map((e) => {
        console.log(e);
      });
    })
    .catch((error) => {
      console.log(error);
    });
};

export const getTask = async (id, token) => {
  await axios
    .get(tasksURL + id)
    .then((res) => {
      console.log(res.data.results);
    })
    .catch((error) => {
      console.log(error);
    });
};

export const createTask = (token) => {
  axios({
    method: "post",
    headers: {
      Authorization: `Bearer ${token}`,
    },
    url: tasksURL,
    data: task,
  })
    .then((res) => console.log("TASK ", res))
    .catch((error) => {
      console.log(error);
    });
};

export const modifyTask = async (id, taskData, token) => {
  await axios({
    method: "patch",
    headers: {
      Authorization: `Bearer ${token}`,
    },
    url: tasksURL + "/" + id,
    data: taskData,
  })
    .then((res) => {
      console.log(res);
    })
    .catch((error) => {
      console.log(error);
    });
};

export const deleteTask = async (id, token) => {
  await axios({
    method: "delete",
    headers: {
      Authorization: `Bearer ${token}`,
    },
    url: tasksURL + "/" + id,
  })
    .then((res) => {
      console.log(res);
    })
    .catch((error) => {
      console.log(error);
    });
};
