const request = require("request");
const cheerio = require("cheerio");

request("https://www.target.com/p/A-14802181", (error, response, html) => {
  if (!error && response.statusCode == 200) {
    const $ = cheerio.load(html);
    const price = $("[data-test='product-price']");
    const specs = $("#specAndDescript");
    // const TCIN = 1-1-6
    // const UPC = 1-1-7
    // const DCPI = 1-1-8
    // parseFloat(price.substr(1))
    console.log(specs.text());
  }
});
