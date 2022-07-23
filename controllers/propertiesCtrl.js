const { getProperties, getProperty, addProperty, removeProperty } = require('../services/propertiesService')

const getAll = async (req, res) => {
    try {
        // const { statusHttp, response } = getProperties(req.query.type, req.query.businessType)
        const filter = req.query;
        // console.log('filter', filter);
        const { statusHttp, response } = await getProperties(filter);
        res.status(statusHttp).json({ response });
    } catch (error) {
        res.status(500).send(error);
    }
};

const getDetail = async (req, res) => {
    try {
        const { statusHttp, response } = await getProperty(req.params.id);
        res.status(statusHttp).json({ response });
    } catch (error) {
        res.status(500).send(error);
    }
};

const create = async (req, res) => {
    try {
        const property = req.body;
        const { statusHttp, response } = await addProperty(property);
        res.status(statusHttp).json({ response });
    } catch (error) {
        res.status(500).send(error);
    }
};

const deleteProperty = async (req, res) => {
    try {
        const { statusHttp, response } = await removeProperty(req.params.id);
        res.status(statusHttp).json({ response });
    } catch (error) {
        res.status(500).send(error);
    }
};

const uploadImage = (req, res) => {
    if (!req.files) {
        res.status(400).send('No files');
    };

    const propertyImage = req.files.propertyImage;
    const nameSplited = propertyImage.name.split('.');
    const ext = nameSplited[nameSplited.length - 1];
    const newFileName = Math.floor(Date.now()) + '.' + ext;

    const path = __dirname + '/../public/' + newFileName;

    propertyImage.mv(path, (err) => {
        if (err) {
            return res.status(500).send(err);
        };
        res.json({ fileName: newFileName });
    });
};

module.exports = {
    getAll,
    getDetail,
    create,
    deleteProperty,
    uploadImage
}