import Koa from 'koa'
import parse from 'koa-bodyparser'
import serve from 'koa-static'
import mongoose from 'mongoose'
import Router from "koa-router"


async function main() {
    //await mongoose.connect('mongodb://localhost/lecture-5')

    const router = new Router({prefix: '/api'})

    router.get('/data', (ctx, next) => {
        ctx.body = {data: ['A', 'B', 'C']}
        next()
    })

    // start server
    {
        const app = new Koa()
        app.use(parse())
        app.use(router.routes())
        app.use(router.allowedMethods())
        //app.use(serve('dist'))

        app.listen(3000)
    }
}

main()

