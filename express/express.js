const express = require("express");
const app = express();
const port = process.env.PORT || 3000;

app.get("/", function (req, res) {
  var input_pageId = ["page1", "page2", "page3"];
  var html = `
        <a href="/create/${input_pageId[0]}">page1</a><br>
        <a href="/create/${input_pageId[1]}">page2</a><br>
        <a href="/create/${input_pageId[2]}">page3</a><br>
    `;
  res.send(html);
});

app.get("/create/:pageId", function (req, res) {
  var filteredId = req.params.pageId;
  var html = `
  <h1>${filteredId}</h1>
          <a href="/">home</a><br>
      `;
  res.send(html);
});

app.listen(port, () => console.log("hi2"));
