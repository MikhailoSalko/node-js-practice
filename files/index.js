// console.log("hello from files");

const path = require("path");
const fs = require("fs/promises");

// console.log(__dirname);
// console.log(path.join());
// console.log(path.resolve());

const usersPath = path.join(__dirname, "..", "db", "users.json");

class FileOperations {
  constructor(path) {
    this.path = path;
  }

  read = async () => {
    return await fs.readFile(this.path, "utf-8");
  };

  display = async () => {
    const data = await this.read();
    console.log(data);
    return true;
  };

  create = async (data) => {
    return await fs.writeFile(this.path, JSON.stringify(data, null, 2));
  };

  update = async (newUser) => {
    const users = JSON.parse(await this.read());
    users.push(newUser);
    return await this.create(users);
  };

  remove = async () => {
    return await fs.unlink(this.path);
  };

  // updateOne = async (data) => {
  //   const users = JSON.parse(await this.read());
  //   const idx = users.findIndex((el) => el.id === data.id);
  //   users.splice(idx, 1, data);
  //   return await this.create(users);
  // };

  updateOne = async (data) => {
    const users = JSON.parse(await this.read());
    const updatedUsers = users.map((el) => {
      if (el.id === data.id) {
        el.name = data.name;
      }
      return el;
    });
    return await this.create(updatedUsers);
  };

  removeOne = async (ID) => {
    const users = JSON.parse(await this.read());
    const idx = users.findIndex((el) => el.id === String(ID));
    if (idx === -1) {
      console.log("not found");
      return false;
    }
    users.splice(idx, 1);
    return await this.create(users);
  };
}

const file = new FileOperations(usersPath);

const users = [
  { id: "1", name: "Michael" },
  { id: "2", name: "Victoria" },
  { id: "3", name: "Oleksandr" },
];

// file.create(users);
// file.display();
// file.update({ id: "4", name: "Andrii" });
// file.remove();
// file.updateOne({
//   id: "2",
//   name: "Victoria Yotka",
// });
file.removeOne(2);

async function errorHandler(func, param) {
  try {
    if (!param) {
      await func();
    } else {
      await func(param);
    }
  } catch (error) {
    console.log("custom: ", error.message);
  }
}

// errorHandler(file.display.bind(file));
// errorHandler(file.update.bind(file), { id: "5", name: "Olena" });
// errorHandler(file.display);
// errorHandler(file.update, { id: "5", name: "Olena" });
