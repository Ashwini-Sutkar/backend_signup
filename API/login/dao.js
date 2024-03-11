const Signup = require("./model");

exports.findAll = () => {
  return Signup.findAll();
};

exports.findById = (id) => {
  return Signup.findByPk(id);
};

exports.deleteById = (id) => {
  return Signup.destroy({ where: { id: id } });
};

exports.deleteAll = () => {
  return Signup.destroy({ where: {} });
};

exports.create = (signup) => {
  var newSignup = new Signup(signup);
  return newSignup.save();
};

exports.updateById = (signup, id) => {
  var updateData = {
    name: signup.first_name,
    email: signup.last_name,
    password: signup.password,
  };
  return Signup.update(updateData, { where: { id: id } });
};
