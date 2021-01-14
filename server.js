const express = require("express");
const compression = require("compression");
const history = require("connect-history-api-fallback");

const app = express();
app.use(compression());

const staticFileMiddleware = express.static("dist");
app.use(staticFileMiddleware);

// Support history api
app.use(
  history({
    index: "/dist/index.html",
  })
);

app.use("/ai-dataset-video", staticFileMiddleware);

// call for redirected requests
app.use(staticFileMiddleware);

const port = 8080;
app.listen(port, function() {
  console.log(`App listening on port ${port}.`);
});
