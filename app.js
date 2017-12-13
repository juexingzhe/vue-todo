const Koa = require('koa');


const app = new Koa();

const isProduction = process.env.NODE_ENV === 'production';

// log request URL:
app.use(async (ctx, next) => {
    console.log(`Process ${ctx.request.method} ${ctx.request.url}...`);
    await next();
});

// redirect to /static/index.html:
app.use(async (ctx, next) => {
    if (ctx.request.path === '/') {
        ctx.response.redirect('/static/index.html');
    } else {
        await next();
    }
});

app.listen(3000);
console.log('app started at port 3000...');
