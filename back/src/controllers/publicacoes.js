import publicacoes from '../models/Publicacoes';

class publicacoesController {
 
  static novaPubli = (req, res) => {
    let publicacoes = new publicacoes(req.body);
    publicacoes.save((err) => {
      if (err) {
        res
          .status(500)
          .send({ message: `${err.message} - Falha ao adicionar publicação!` });
      } else {
        res.status(201).send(publicacoes.toJSON());
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
