import Koa from 'koa'
import Router from 'koa-router'
import parse from 'koa-bodyparser'
import serve from 'koa-static'

const app = new Koa()
const router = new Router()

router.get('/api/led-matrix', (ctx, next) => {
    ctx.body = {}
    next()
})

router.put('/api/led-matrix/width', (ctx, next) => {
    const {} = ctx.request.body
    next()
})

app.use(parse())
app.use(router.routes())
app.use(router.allowedMethods())
app.use(serve('dist'))

app.listen(3000)