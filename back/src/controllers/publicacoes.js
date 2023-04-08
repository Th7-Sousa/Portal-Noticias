import publicacoes from "../models/Publicacoes.js";
import { v4 as uuid } from "uuid";
import multer from "multer";

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "./../repository");
  },
  filename: function (req, file, cb) {
    const ext = file.originalname.split(".").pop(); // extensão do arquivo
    const filename = uuid + "." + ext; // arquivo exclusivo
    cb(null, filename);
  },
});

const upload = multer({ storage: storage });

class publicacoesController {
  static listarPubli = (req, res) => {
    publicacoes.find((err, publi) => {
      res.status(200).json(publi);
    });
  };

  // static novaPubli = (req, res) => {
  //   upload.single("imagem")(req, res, function (err) {
  //     if (err) {
  //       return res.status(500).send({ message: "Erro ao carregar a imagem" });
  //     }

  //     let publicacao = new publicacoes(req.body);

  //     // caminho da imagem no campo diretorio
  //     publicacao.diretorio = "/" + req.file.filename;

  //     // salva a publicação no banco de dados
  //     publicacao.save((err) => {
  //       if (err) {
  //         res.status(500).send({
  //           message: `${err.message} - Falha ao adicionar publicação!`,
  //         });
  //       } else {
  //         // retorna a publicação criada como JSON
  //         res.status(201).send(publicacao.toJSON());
  //       }
  //     });
  //   });
  // };

  static novaPubli = (req, res) => {
    let publicacao = new publicacoes(req.body);
    publicacao.save((err) => {
      if (err) {
        res
          .status(500)
          .send({ message: `${err.message} - Falha ao adicionar publicação!` });
      } else {
        res.status(201).send(publicacao.toJSON());
      }
    });
  };

  static atualizarPubli = (req, res) => {
    const id = req.params.id;
    publicacoes.findByIdAndUpdate(id, { $set: req.body }, (err) => {
      if (!err) {
        res.status(200).send({ message: "Publicação Atualizada com Sucesso!" });
      } else {
        res.status(500).send({ message: err.message });
      }
    });
  };

  static excluirPubli = (req, res) => {
    const id = req.params.id;
    publicacoes.findByIdAndDelete(id, (err) => {
      if (!err) {
        res.status(200).send({ message: "Publicação removida com sucesso!" });
      } else {
        res.status(500).send({ message: err.message });
      }
    });
  };
}

export default publicacoesController;
