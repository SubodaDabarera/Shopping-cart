const Koa = require('koa')
const bodyParser = require('koa-bodyparser')
const cors = require('@koa/cors')

const ItemRouter = require('./routes/ItemRoutes')
const cartRouter = require('./routes/cartRoutes')
const customerRouter = require('./routes/customerRoutes')
require('./dal')

const app = new Koa();
app.use(cors())
app.use(bodyParser());

app.use(ItemRouter.routes())
    .use(ItemRouter.allowedMethods())

app.use(cartRouter.routes())
    .use(cartRouter.allowedMethods())

app.use(customerRouter.routes())
    .use(customerRouter.allowedMethods())

app.listen(3000, () => {
    console.log("App is listning on PORT 3000")
})