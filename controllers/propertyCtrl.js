const { propertys, property, createProperty } = require('../services/propertyService')

const properties = (req, res) => {
    try {
        const { statusHttp, response } = propertys(req.query.type, req.query.businessType)
        res.status(statusHttp).json({ response });
    } catch (error) {
        res.status(500).send(error);
    }
};

const properti = (req, res) => {
    try {
        const { statusHttp, response } = property(req.params.id)
        res.status(statusHttp).json({ response });
    } catch (error) {
        res.status(500).send(error);
    }
}

const createProperti = (req, res) => {
    try {
        const proper = req.body;
        const { statusHttp, response } = createProperty(proper)
        res.status(statusHttp).json({ response });
    } catch (error) {
        res.status(500).send(error);
    }
}

module.exports = {
    properties,
    properti,
    createProperti
}