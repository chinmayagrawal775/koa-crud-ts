// import swaggerUi from 'swagger-ui-express';
// import swaggerDocument from './swagger.json';
const swaggerUi = require('swagger-ui-express');
const swaggerDocument = require('./swagger.json');

module.exports = (app) => {
    app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));
};
  