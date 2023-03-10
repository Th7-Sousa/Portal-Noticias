import cursos from "../models/Cursos.js";

class cursosController {
  static listarCursos = (req, res) => {
    cursos.find((err, cursos) => {
      res.status(200).json(cursos);
    });
  };

  static cadastrarCurso = (req, res) => {
    let curso = new cursos(req.body);
    curso.save((err) => {
      if (err) {
        res
          .status(500)
          .send({ message: `${err.message} - Falha ao cadastrar curso!` });
      } else {
        res.status(201).send(curso.toJSON());
      }
    });
  };

  static excluirCurso = (req, res) => {
    const id = req.params.id;
    cursos.findByIdAndDelete(id, (err) => {
      if (!err) {
        res.status(200).send({ message: "Curso removido com sucesso!" });
      } else {
        res.status(500).send({ message: err.message });
      }
    });
  };
}

export default cursosController;
