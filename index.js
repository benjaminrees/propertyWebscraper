const PORT = 8000;

const axios = require("axios");
const express = require("express");
const cheerio = require("cheerio");
const pretty = require("pretty");

const app = express();

// only shows available
const westernLettingsURL =
    "https://www.westernlettings.co.uk/property-to-rent-in-glasgow/?bmin=2&bmax=2&pmin=400&pmax=1250&srt=0&av=on&ps=Search&lat=&lng=";

app.listen(PORT, () => console.log(`Server running on Port ${PORT}`));

console.log("Western Lettings Details");
axios(westernLettingsURL)
    .then((response) => {
        const html = response.data;
        let prices = [];

        let $ = cheerio.load(html);

        $(".property_price").each((i, el) => {
            prices.push($(el).text());
        });

        console.log(prices);

        // # searches for ID
        let numbers = $("#wl_search_count");
        numberText = numbers.text();

        console.log(numberText);
        // regex expression that extracts both of the numbers
        console.log(numberText.match(/\d+/g));
    })
    .catch((error) => console.log(error));
