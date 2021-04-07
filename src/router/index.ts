import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";
import Home from "../views/Home.vue";


const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    name: "Home",
    component: Home,
    props: true //passing down the params to the component as props
  },
  {
    path: "/about",
    name: "About",
    props: true,
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ "../views/About.vue"),
  },
  {
    path: "/destinationDetails/:id", //<-- notice the colon!  ****************************
    name: "DestinationDetails",
    props: true,
    component: () => import(/* webpackChunkName: "about" */ "../views/DestinationDetails.vue"),
    //nested routes
    children: [
      {
        path: ":experienceSlug",
        name: "ExperienceDetails",
        props: true,
        component: () => import(/*webpackChunkName: "ExperienceDetails"*/ "../views/ExperienceDetails.vue")
      }
    ],
  },
  {
    // path: "*",
    path: "/:catchAll(.*)",
    name: "NotFound",
    props: true,
    component: () => import(/* webpackChunkName: "about" */ "../views/PageNotFound.vue"),
  }

];

//create a router instance and configure it
const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
}
);

export default router;
