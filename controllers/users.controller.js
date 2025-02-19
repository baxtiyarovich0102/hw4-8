import userService from "../service/users.service.js";


let getUsers = function (req, res) {
  let datas = userService.getUsers();
  res.send(datas);
};


let getUserById = (req, res) => {
  let datas = userService.getUsers();
  let data = datas.find((e) => e.userId == req.params.id);
  res.send(data);
};


let postUsers = (req, res) => {
  let data = req.body;

  if (!data) res.send("Ma'lumot kiritilmagan");

  userService.addUser(data);
  res.status(201).json({
    message: "Success", 
    data,
  });
};


let updateUsers = (req, res) => {
  let datas = userService.getUsers();
  let data = datas.find((e) => e.userId == req.params.id);

  if (!data) res.send("Bu foydalanuvchi mavjud emas!!");

  data.username = req.body.username ? req.body.username : data.username;
  data.age = req.body.age ? req.body.age : data.age;
  userService.saveUsers(datas);

  res.status(200).json({ message: "Success" });
};


let deleteUsers = (req, res) => {
  let datas = userService.getUsers();
  datas = datas.filter((e) => e.userId !== +req.params.id);
  console.log(datas);

  userService.saveUsers(datas);

  res.status(200).json({ message: "Success" });
};

export { getUsers, getUserById, postUsers, updateUsers, deleteUsers };
