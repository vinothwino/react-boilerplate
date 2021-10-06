import React from "react";
import ROUTES, { RenderRoutes } from "./routes";

const routes: React.FunctionComponent = () => {
    return (
        <RenderRoutes routes={ROUTES} />
    );
}

export default routes;