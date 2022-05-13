const { westernLettingsScrape } = require("./Letting Sites/WesternLettings");
const PORT = 8000;

const axios = require("axios");
const express = require("express");
const cheerio = require("cheerio");
const pretty = require("pretty");
const { newtonScrape } = require("./Letting Sites/Newton");

const app = express();

// only shows available
const westernLettingsURL =
    "https://www.westernlettings.co.uk/property-to-rent-in-glasgow/?bmin=2&bmax=2&pmin=400&pmax=1250&srt=0&av=on&ps=Search&lat=&lng=";

app.listen(PORT, () => console.log(`Server running on Port ${PORT}`));

//westernLettingsScrape();
newtonScrape();
