import React, { Suspense } from "react";
import ROUTES, { RenderRoutes } from "./routes";
import SuspenseSpinner from "components/SuspenseFallback";

const routes: React.FunctionComponent = () => {
    return (
        <Suspense fallback={<SuspenseSpinner />}>
            <RenderRoutes routes={ROUTES} />
        </Suspense>
    );
}

export default routes;