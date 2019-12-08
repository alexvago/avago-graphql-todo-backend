import createError from "http-errors";
import express from "express";
import cookieParser from "cookie-parser";
import logger from "morgan";

import typeDefs from "./api/schema.js"
import resolvers from "./api/resolvers.js"

import {ApolloServer} from "apollo-server-express";

const app = express();

// apollo Server
const server = new ApolloServer({typeDefs, resolvers});
server.applyMiddleware({app});

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({extended: false}));
app.use(cookieParser());


// catch 404 and forward to error handler
app.use(function (req, res, next) {
    next(createError(404));
});

// error handler
app.use(function (err, req, res, next) {
    // set locals, only providing error in development
    res.locals.message = err.message;
    res.locals.error = req.app.get('env') === 'development' ? err : {};

    // render the error page
    res.status(err.status || 500);
    res.json({error: err})
});

export default app;
