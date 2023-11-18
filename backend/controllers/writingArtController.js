const WritingArt = require('ADD PATH WHEN YOU CREATE THE MODELS');

exports.getAllWritingArt = async (req, res, next) => {
    try {
        const [allWritingArt] = await WritingArt.fetchAll();
        res.status(200).json(allWritingArt);
    } catch (err) {
        if(!err.statusCode) {
            err.statusCode = 500;
        }
        next(err);
    }

};
