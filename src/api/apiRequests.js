import axios from "axios";

//url
export const loginURL = "http://localhost:4001/login";
const tasksURL = "http://localhost:4001/dashboard/tasks/";
const userURL = "http://localhost:4001/dashboard/users/";

//--------------------------------------------

export const userLogin = async (user, setError) => {
  await axios({
    method: "post",
    url: loginURL,
    data: user,
  })
    .then((res) => {
      const userData = {
        token: res.data.token,
        firstName: res.data.authenticatedUser.firstName,
        role: res.data.authenticatedUser.role,
      };
      localStorage.setItem("token", JSON.stringify(userData));
      return userData;
    })
    .catch(() => {
      setError("Wrong email or password");
    });
};

export const getTasks = async (setState, token) => {
  await axios({
    method: "get",
    headers: {
      Authorization: `Bearer ${token}`,
    },
    url: tasksURL,
  })
    .then((res) => {
      setState(res.data.results);
    })
    .catch((error) => {
      console.log(error);
    });
};

export const getTask = async (id, token) => {
  await axios({
    method: "get",
    headers: {
      Authorization: `Bearer ${token}`,
    },
    url: tasksURL + id,
  })
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

//------------------------USERS-----------------------------

export const getUser = async (id, token) => {
  await axios({
    method: "get",
    headers: {
      Authorization: `Bearer ${token}`,
    },
    url: userURL + id,
  })
    .then((res) => {
      console.log(res.data.results);
    })
    .catch((error) => {
      console.log(error);
    });
};

export const createUser = (token) => {
  axios({
    method: "post",
    headers: {
      Authorization: `Bearer ${token}`,
    },
    url: userURL,
    data: task,
  })
    .then((res) => console.log("TASK ", res))
    .catch((error) => {
      console.log(error);
    });
};

export const modifyUser = async (id, taskData, token) => {
  await axios({
    method: "patch",
    headers: {
      Authorization: `Bearer ${token}`,
    },
    url: userURL + "/" + id,
    data: taskData,
  })
    .then((res) => {
      console.log(res);
    })
    .catch((error) => {
      console.log(error);
    });
};

export const deleteUser = async (id, token) => {
  await axios({
    method: "delete",
    headers: {
      Authorization: `Bearer ${token}`,
    },
    url: userURL + "/" + id,
  })
    .then((res) => {
      console.log(res);
    })
    .catch((error) => {
      console.log(error);
    });
};
