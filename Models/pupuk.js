let pupuks = [];

module.exports = {
  getAll: () => pupuks,
  add: (data) => {
    pupuks.push(data);
  },
  update: (id, data) => {
    pupuks[id] = data;
  },
  delete: (id) => {
    pupuks.splice(id, 1);
  }
};
