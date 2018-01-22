import path from 'path';
import express from 'express';

// ROUTERS
// const usersRouter = require('./usersRouter');

const router = express.Router();

// Middleware that checks if logged in and sets cookie to true
// Used only on production
// router.use(function(req, res, next) {
//   if (req.isAuthenticated()) {
//     res.cookie('isLoggedIn', true);
//   } else {
//     res.cookie('isLoggedIn', false);
//     req.logout();
//   }
//   next();
// });

// Set up our different api endpoints
// router.use('/users', usersRouter);

const isProduction = process.env.NODE_ENV === 'production';
// // serve our client assets
// // asset folder in dev mode
// const assetFolder = path.resolve(__dirname, '../../_client', 'assets')
// // if production asset folder is copied to dist/app-bundle
// if (isProduction) {
//   assetFolder = path.resolve(__dirname, '../../dist', 'app-bundle', 'assets')
// }

// router.use('/assets', express.static(assetFolder));

export default router
