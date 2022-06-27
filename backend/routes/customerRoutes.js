const Router = require('@koa/router');
const {getCustomers, registerUser, logInUser} = require('../controllers/customerController');

const customerRouter = new Router({
    prefix: '/customer'
})

customerRouter.get('/', async(ctx) => {
    const data = ctx.request.query;     // get sellerId and pass it to controller
    ctx.body = await getCustomers(data)
})

customerRouter.post('/new', async(ctx) => {
    const data = ctx.request.body;
    ctx.body = await registerUser(data);
    ctx.status = 201;
})

customerRouter.post('/login', async(ctx) => {
    const data = ctx.request.body;
    ctx.body = await logInUser(data);
    
})

module.exports = customerRouter