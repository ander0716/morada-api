const responseOk = require('../utils/responseOk');
const responseError = require('../utils/responseError');

const propertys = (type, businessType) => {
    if (type === "casa" && businessType === "venta"){
        return responseOk([{ 'property': 'casa', "valor": 200 }, { 'property': 'casa2', "valor": 202 }]);
    }
    return responseError(404, 'propiedad no encontrada');
};

const property = (id) => {
    if (id === "1") {
        return responseOk({ 'property': 'casa', "valor": 200 });
    };
    return responseError(404, 'propiedad no encontrada');
};

const createProperty = (property) => {
    if (property !== null) {
        return responseOk( property );
    };
    return responseError(404, 'propiedad no encontrada');
};


module.exports = {
    propertys,
    property,
    createProperty
}