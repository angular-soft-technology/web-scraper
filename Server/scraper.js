/* global businessMap */

const rp = require('request-promise');  
const otcsv = require('objects-to-csv');  
const cheerio = require('cheerio');

const baseURL = 'https://www.emag.ro';  
const searchURL = '/search/calculator?ref=effective_search';  

console.log(baseURL + searchURL);




const getCompanies = async () => {  
  const html = await rp(baseURL + searchURL);
//  console.log(html);
  const businessMap = cheerio('a.product-title.js-product-url', html).map(async (i, e) => {
     
    const link = e.attribs.href;
    const innerHtml = await rp(link);
    const title = cheerio('h1.page-title', innerHtml).text();
    const stoc = cheerio('span.label.label-limited_stock_qty', innerHtml).text();
    const newprice = cheerio('p.product-new-price', innerHtml).text();

    return {
      title,
      link,
      stoc,
      newprice
    };
  }).get();
  return Promise.all(businessMap);
};


getCompanies()  
  .then(result => {
    const transformed = new otcsv(result);
    return transformed.toDisk('./output.csv');
  })
  .then(() => console.log('Am luat toate datele'));