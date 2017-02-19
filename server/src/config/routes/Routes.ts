import express = require('express');
import path = require('path');

import HeroRoutes = require('../routes/HeroRoutes');
import UserRoutes = require('../routes/UserRoutes');
import AuthRoutes = require('../routes/AuthRoutes');
import ProjectRoutes = require('../routes/ProjectRoutes');

var app = express();

class Routes {

    get routes() {

        app.use("/", new HeroRoutes().routes);
        app.use("/", new UserRoutes().routes);
        app.use("/", new AuthRoutes().routes);
        app.use("/", new ProjectRoutes().routes);
        
        return app;
    }
}
export = Routes;