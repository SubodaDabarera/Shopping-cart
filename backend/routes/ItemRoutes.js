const Router = require('@koa/router');
const { viewItems, addItems, ChangeItems, getFarmerItems } = require('../controllers/itemController');

const ItemRouter = new Router({
    prefix: '/items'
})

ItemRouter.get('/', async(ctx) => {
    ctx.body = await viewItems();
})

ItemRouter.get('/farmer', async(ctx) => {
    let data = ctx.request.query;
    ctx.body = await getFarmerItems(data)
})

ItemRouter.post('/new', async(ctx) => {
    let newItem = ctx.request.body;
    ctx.body = await addItems(newItem);
    ctx.status = 201
})

ItemRouter.put('/change', async(ctx) => {
    let data = ctx.request.body;
    ctx.body = await ChangeItems(data);
    ctx.status = 202
})

module.exports = ItemRouter