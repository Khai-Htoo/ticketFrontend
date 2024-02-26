import { createRouter, createWebHistory } from "vue-router";
import AdminPage from "@/views/admin/Admin.vue";
import HomePage from "@/views/frontend/HomePage.vue";
import MyTicketList from "@/views/frontend/MyTicketList.vue";
import TicketDetail from "@/views/frontend/TicketDetail.vue";
import TicketList from "@/views/admin/TicketList.vue";

// auth middleware
const auth = (to, from, next) => {
  const auth = localStorage.getItem("auth");
  const authUser = JSON.parse(auth);
  if (auth) {
    next();
  } else {
    next("/login");
  }
};

// user middleware
const user = (to, from, next) => {
  const auth = localStorage.getItem("auth");
  const authUser = JSON.parse(auth);
  if (auth) {
    if (authUser.role == "user") {
      next();
    } else {
      next("/myTicketList");
    }
  } else {
    next("/");
  }
};

// admin middleware
const admin = (to, from, next) => {
  const auth = localStorage.getItem("auth");
  const authUser = JSON.parse(auth);
  if (auth) {
    if (authUser.role == "staff") {
      next();
    } else {
      next("/admin");
    }
  } else {
    next("/");
  }
};
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/admin",
      name: "admin",
      component: AdminPage,
      children: [
        {
          path: "/admin",
          name: "TicketList",
          component: TicketList,
          beforeEnter: [auth, admin],
        },
      ],
    },
    {
      path: "/",
      name: "home",
      component: HomePage,
    },
    {
      path: "/myTicketList",
      name: "MyTicketList",
      component: MyTicketList,
      beforeEnter: [auth, user],
    },
    {
      path: "/TicketDetail/:id",
      name: "TicketDetail",
      component: TicketDetail,
      props: true,
      beforeEnter: [auth, user],
    },
    {
      path: "/:pathMatch(.*)",
      component: HomePage,
    },
  ],
});

export default router;
