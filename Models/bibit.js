let bibits = [];

module.exports = {
  getAll: () => bibits,
  add: (data) => {
    bibits.push(data);
  },
  update: (id, data) => {
    bibits[id] = data;
  },
  delete: (id) => {
    bibits.splice(id, 1);
  }
};
