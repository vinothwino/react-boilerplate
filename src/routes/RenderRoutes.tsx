import { lazy } from "react";
import { Route, Switch, Redirect } from "react-router-dom";
const Login = lazy(() => import('pages/auth/Login'));
const Home = lazy(() => import('pages/Home'));

type routeItem = {
    path: string,
    key: string,
    exact: boolean,
    component: Function,
}

type routes = routeItem & {
    routes?: routeItem[]
}


const ROUTES: routes[] = [
    {
        path: "/",
        key: "ROOT",
        exact: true,
        component: () => {
            if (!localStorage.getItem("token")) {
                return <Redirect to={"/login"} />;
            }
            return <Redirect to={"/app"} />;
        },
        routes: []
    },
    {
        path: "/login",
        key: "LOGIN",
        exact: true,
        component: Login,
        routes: []
    },
    {
        path: "/app",
        exact: false,
        key: "APP",
        component: props => {
            if (!localStorage.getItem("token")) {
                return <Redirect to={"/"} />;
            }
            return <RenderRoutes {...props} />;
        },
        routes: [
            {
                path: "/app",
                key: "APP_ROOT",
                exact: true,
                component: Home,
            }
        ],
    },
];

export default ROUTES


export function RenderRoutes({ routes }: { routes: routes[] }) {
    return (
        <Switch>
            {routes.map((route, i) => {
                return <RouteWithSubRoutes {...route} />;
            })}

            <Route component={() => <h1>Not Found!</h1>} />
        </Switch>
    );
}

function RouteWithSubRoutes(route: routes) {
    return (
        <Route
            key={route.key}
            path={route.path}
            exact={route.exact}
            render={props => <route.component {...props} routes={route.routes} />}
        />
    );
}