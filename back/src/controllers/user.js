import user from "./../models/User.js";

class userController {
  static listarUser = (req, res) => {
    user
      .find()
      .populate("cursos")
      .exec((err, user) => {
        res.status(200).json(user);
      });
  };

  static listarUserPorId = (req, res) => {
    const id = req.params.id;
    user
      .findById(id)
      .populate("cursos", "nome")
      .exec((err, user) => {
        if (err) {
          res
            .status(400)
            .send({ message: `${err.message} - Id do usuário não localizado` });
        } else {
          res.status(200).send(user);
        }
      });
  };

  static cadastrarUser = (req, res) => {
    let user = new user(req.body);
    user.save((err) => {
      if (err) {
        res
          .status(500)
          .send({ message: `${err.message} - Falha ao cadastrar usuário` });
      } else {
        res.status(201).send(user.toJSON());
      }
    });
  };

  static atualizarUser = (req, res) => {
    const id = req.params.id;
    user.findByIdAndUpdate(id, { $set: req.body }, (err) => {
      if (!err) {
        res.status(200).send({ message: "Usuário atualizado com sucesso" });
      } else {
        res.status(500).send({ message: err.message });
      }
    });
  };

  static excluirUser = (req, res) => {
    const id = req.params.id;
    user.findByIdAndDelete(id, (err) => {
      if (!err) {
        res.status(200).send({ message: "Usuário removido com sucesso" });
      } else {
        res.status(500).send({ message: err.message });
      }
    });
  };
}

export default userController;
