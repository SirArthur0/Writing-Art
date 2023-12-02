const db = require('../util/database');


module.exports = class WritingArt {
  constructor(artId, author, authorDetails, artTitle, artDetails) {
    this.artId = artId;
    this.author = author;
    this.authorDetails = authorDetails;
    this.artTitle = artTitle;
    this.artDetails = artDetails;
  }

  static fetchAll() { return db.execute('SELECT * FROM artdetails') }

};