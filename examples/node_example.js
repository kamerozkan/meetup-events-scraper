// Run meetup-events-scraper on Apify and print the results. npm install apify-client
import { ApifyClient } from 'apify-client';

const client = new ApifyClient({ token: process.env.APIFY_TOKEN });
const input = {
  "queries": [
    "python"
  ],
  "locations": [
    "New York, NY"
  ],
  "eventType": "ALL",
  "maxItems": 20
};
const run = await client.actor('kamerozkan/meetup-events-scraper').call(input);
const { items } = await client.dataset(run.defaultDatasetId).listItems();
console.log(items);
