const routes = [
    {
        path: "/",
        component: () => import("./pages/EnteringRoom.vue")
      },
      {
        path: "/Game",
        component: () => import("./pages/Game.vue")
      },
      {
        path: "/Score",
        component: () => import("./pages/Score.vue")
      },

];
    // Always leave this as last one
    if (process.env.MODE !== "ssr") {
        routes.push({
          path: "*",
          component: () => import("./pages/Error.vue")
        });
      }


export default routes;