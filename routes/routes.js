// import router

const routes = [
    {
        path: "/users",
        router: function(){},
    }
]

export const routerFactory = (app)=>{
    routes.map((route)=>{
        app.use(route.path, route.router);
    })
}