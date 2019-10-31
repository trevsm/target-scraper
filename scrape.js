const request = require("request");
const cheerio = require("cheerio");

const itemList = ["14802181", "12856531", "78305097"];

request(
  `https://www.target.com/p/A-${itemList[1]}`,
  (error, response, html) => {
    if (!error && response.statusCode == 200) {
      const $ = cheerio.load(html);
      const data = ["product-price", "product-savings"];

      const specsRaw = $("#specAndDescript b");
      let specs = [];

      // parseFloat(price.substr(1))

      specsRaw.each(function(i, e) {
        specs[i] = $(this).parent();
        console.log(specs[i].text());
      });
    }
  }
);
