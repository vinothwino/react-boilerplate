import { Route, Switch, Redirect } from "react-router-dom";
import Login from 'pages/auth/Login'

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
        component: Login,
        routes: []
    },
    {
        path: "/app",
        exact: false,
        key: "APP",
        component: props => {
            if (!localStorage.getItem("user")) {
                return <Redirect to={"/"} />;
            }
            return <RenderRoutes {...props} />;
        },
        routes: [
            {
                path: "/app",
                key: "APP_ROOT",
                exact: true,
                component: () => <h1>App Index</h1>,
            },
            {
                path: "/app/page",
                key: "APP_PAGE",
                exact: true,
                component: () => <h1>App Page</h1>,
            },
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
            path={route.path}
            exact={route.exact}
            render={props => <route.component {...props} routes={route.routes} />}
        />
    );
}