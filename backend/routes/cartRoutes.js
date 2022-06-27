const Router = require('@koa/router');
const { getCartDetails, addToCart } = require('../controllers/cartController');

const cartRouter = new Router({
    prefix: '/cart'
})

cartRouter.get('/', async(ctx) => {
    const userId = ctx.request.query.userId;
    ctx.body = await getCartDetails(userId)
})

cartRouter.post('/add', async(ctx) => {
    const data = ctx.request.body;
    ctx.body = await addToCart(data);
    ctx.status = 201;
})

module.exports = cartRouter;