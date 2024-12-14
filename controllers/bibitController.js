const Bibit = require('../Models/bibit');

module.exports = {
  index: (req, res) => {
    const bibit = Bibit.getAll(); // Mengambil data bibit
    res.render('bibit/index', { bibit }); // Pastikan data bibit dikirim ke view
  },
  create: (req, res) => {
    Bibit.add(req.body);
    res.redirect('/bibit');
  },
  edit: (req, res) => {
    const bibit = Bibit.getAll()[req.params.id]; // Dapatkan bibit berdasarkan id
    res.render('bibit/form', { bibit, id: req.params.id }); // Pastikan id dan bibit dikirim ke view
  },
  update: (req, res) => {
    Bibit.update(req.params.id, req.body);
    res.redirect('/bibit');
  },
  delete: (req, res) => {
    Bibit.delete(req.params.id);
    res.redirect('/bibit');
  },
};
