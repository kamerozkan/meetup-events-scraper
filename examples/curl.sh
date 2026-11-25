#!/usr/bin/env bash
# Run meetup-events-scraper synchronously and get the dataset items back. Needs APIFY_TOKEN.
curl -s -X POST "https://api.apify.com/v2/acts/kamerozkan~meetup-events-scraper/run-sync-get-dataset-items" \
  -H "Authorization: Bearer $APIFY_TOKEN" \
  -H "Content-Type: application/json" \
  -d '{"queries": ["python"], "locations": ["New York, NY"], "eventType": "ALL", "maxItems": 20}'
