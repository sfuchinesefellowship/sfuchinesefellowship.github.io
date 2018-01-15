var models = require('../models');

var express = require('express');

var router = express.router();

    //在PC端通过扫描登录，使用/auth/loginByWeixin
    router.get("/auth/loginByWeixin",
        passport.authenticate('loginByWeixin',{ successRedirect: '/test/hello',
            failureRedirect: '/login' })
    );

    //在微信客户端登录，使用/auth/loginByWeixinClient
    rouer.get("/auth/loginByWeixinClient",
        passport.authenticate('loginByWeixinClient',{ successRedirect: '/test/hello',
            failureRedirect: '/login' })
    );

    