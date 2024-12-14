const Pupuk = require('../Models/pupuk');

module.exports = {
  index: (req, res) => {
    const pupuk = Pupuk.getAll(); // Ambil data pupuk
    res.render('pupuk/index', { pupuk }); // Kirimkan data pupuk ke view
  },
  create: (req, res) => {
    Pupuk.add(req.body);
    res.redirect('/pupuk');
  },
  edit: (req, res) => {
    const pupuk = Pupuk.getAll()[req.params.id];
    res.render('pupuk/form', { pupuk, id: req.params.id });
  },
  update: (req, res) => {
    Pupuk.update(req.params.id, req.body);
    res.redirect('/pupuk');
  },
  delete: (req, res) => {
    Pupuk.delete(req.params.id);
    res.redirect('/pupuk');
  },
};
