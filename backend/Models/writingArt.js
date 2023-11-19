const db = require('../util/database');

module.exports = class WritingArt {
  constructor(id, name, description, img) {
    this.id = id;
    this.name = name;
    this.description = description;
    this.img = img;
  }

  static fetchAll() {
    return db.execute('SELECT * FROM writingart');
  }

};