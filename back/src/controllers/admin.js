import admin from "./../models/Admin.js";

class adminController {
  static listarAdmin = (req, res) => {
    admin.find((err, admin) => {
      res.status(200).json(admin);
    });
  };

  static listarAdminPorId = (req, res) => {
    const id = req.params.id;
    admin.findById(id).exec((err, admin) => {
      if (err) {
        res
          .status(400)
          .send({ message: `${err.message} - Id do admin não localizado` });
      } else {
        res.status(200).send(admin);
      }
    });
  };

  static cadastrarAdmin = (req, res) => {
    let adm = new admin(req.body);
    adm.save((err) => {
      if (err) {
        res
          .status(500)
          .send({ message: `${err.message} - Falha ao cadastrar admin` });
      } else {
        res.status(201).send(adm.toJSON());
      }
    });
  };

  static atualizarAdmin = (req, res) => {
    const id = req.params.id;
    admin.findByIdAndUpdate(id, { $set: req.body }, (err) => {
      if (!err) {
        res.status(200).send({ message: "admin atualizado com sucesso" });
      } else {
        res.status(500).send({ message: err.message });
      }
    });
  };

  static excluirAdmin = (req, res) => {
    const id = req.params.id;
    admin.findByIdAndDelete(id, (err) => {
      if (!err) {
        res.status(200).send({ message: "admin removido com sucesso" });
      } else {
        res.status(500).send({ message: err.message });
      }
    });
  };
}

export default adminController;
