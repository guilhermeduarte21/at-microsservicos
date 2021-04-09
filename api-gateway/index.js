const express = require("express");
const httpProxy = require("express-http-proxy");
const morgan = require("morgan");
const helmet = require("helmet");

const app = express();

app.use(morgan("dev"));
app.use(helmet());

const options = {
  proxyReqPathResolver: (req) => {
    return req.originalUrl;
  },
};

const conclusaoServiceProxy = httpProxy(process.env.CONCLUSAO_API);
const correcaoServiceProxy = httpProxy(process.env.CORRECAO_API);

app.use("/conclusaoAtividade", conclusaoServiceProxy);
app.use("/correcaoAtividade", correcaoServiceProxy);

app.listen(process.env.PORT, () => {
  console.log(`API Gateway started at ${process.env.PORT}`);
});
