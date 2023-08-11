import * as koa from 'koa';
import router from './routes/routes.ts';
import * as bodyparser from 'koa-bodyparser';
import connectDb from './db/dbConnection.ts';
import * as si from './swagger.js'

// app initilization
const app = new koa();

// use bodyparser before anything else
app.use(bodyparser());

// router settings
app.use(router.routes()).use(router.allowedMethods());

// Database Connection
connectDb('mongodb://localhost:27017');

// response
app.use((ctx: koa.Context) => {
  ctx.body = {"msg": "Working"};
});

// Swagger Integration
app.use(si(app));

// Server running app
app.listen(3000, () => {
    console.log(`App running on localhost:3000`)
});