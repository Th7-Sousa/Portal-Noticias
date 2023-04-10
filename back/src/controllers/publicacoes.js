import publicacoes from "../models/Publicacoes.js";

import fs from "fs";
import path from "path";

class publicacoesController {
  static listarPubli = (req, res) => {
    publicacoes.find((err, publi) => {
      res.status(200).json(publi);
    });
  };

  static novaPubli = (req, res) => {
    const { titulo, descricao } = req.body;
    const imagem = req.file; // recebe a imagem do corpo da solicitação

    let diretorioImagem;
    if (imagem) {
      diretorioImagem = "./../repository/" + imagem.originalname;
    }

    const publicacao = new publicacoes({
      titulo,
      descricao,
      diretorio: diretorioImagem,
    });

    if (imagem) {
      // salva a imagem no diretório especificado
      fs.writeFile(
        path.join(__dirname, diretorioImagem),
        imagem.buffer,
        (err) => {
          if (err) {
            return res.status(500).send({ message: err.message });
          }
          // salva a publicação no banco de dados
          publicacao.save((err) => {
            if (!err) {
              res
                .status(201)
                .send({ message: "Publicação com imagem criada com sucesso!" });
            } else {
              // exclui a imagem salva caso ocorra erro ao salvar a publicação
              fs.unlink(path.join(__dirname, diretorioImagem), () => {});
              res.status(500).send({ message: err.message });
            }
          });
        }
      );
    } else {
      // salva a publicação sem imagem no banco de dados
      publicacao.save((err) => {
        if (!err) {
          res.status(201).send({ message: "Publicação criada com sucesso!" });
        } else {
          res.status(500).send({ message: err.message });
        }
      });
    }
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
