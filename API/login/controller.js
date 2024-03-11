
const dao = require("./dao");
const model = require("./model");

exports.add = async (req, res, next) => {
    console.log("data=",req.body);
  dao
    .create(req.body)
    .then((data) => {
      return res.status(201).send(data);
    })
    .catch((err) => {
      return res.status(500).send(err);
    });
};
exports.findById = (req, res) => {
  dao
    .findById(req.params.id)
    .then((data) => {
      if (data) {
        return res.status(200).send(data);
      } else {
        return res
          .status(400)
          .send("The data with the provided id does not exist!!");
      }
    })
    .catch((error) => {
      return res.status(404).send(error);
    });
};

exports.deleteById = (req, res) => {
  dao
    .deleteById(req.params.id)
    .then((data) => {
      if (data > 0) {
        return res.status(200).send("data with the id deleted Successfully");
      } else {
        return res.status(400).send("Does'nt  exist  data!!");
      }
    })
    .catch((error) => {
      return res.status(400).send(error);
    });
};

exports.updateById = (req, res) => {
  dao
    .updateById(req.body, req.params.id)
    .then((data) => {
      if (data > 0) {
        return res.status(200).send("data updated Successfully");
      } else {
        return res.status(400).send("Does'nt  update any data!!");
      }
    })
    .catch((error) => {
      return res.status(403).send(error);
    });
};
 
exports.findAll = (req, res) => {
  dao
    .findAll()
    .then((data) => {
      return res.status(200).send(data);
    })
    .catch((error) => {
      return res.status(404).send(error);
    });
};

exports.login = async (req, res) => {
  let email = req.body.email;
  const password = req.body.password;

  let userObj = await model.findOne({
    where: { email: email, password: password },
  });

  if (userObj == null) {
    return res.status(404).send("Please give correct email!!");
  } else return res.status(200).send(userObj);
};
