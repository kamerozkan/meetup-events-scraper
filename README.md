# Meetup.com Scraper - Events, Groups & Venues API

Meetup.com scraper for upcoming events, groups, venues, and topics by keyword, city, or URL. Built for event marketers, DevRel teams, and AI agents with fast plain-HTTP extraction and no login.

**[Run it on Apify Store](https://apify.com/kamerozkan/meetup-events-scraper)**: no servers, no proxies to manage, results as JSON, CSV or Excel, or straight into your app through the API.

## Why use it

- Runs in the cloud on [Apify](https://apify.com/kamerozkan/meetup-events-scraper); start it from the browser, the API, a schedule, or tools like Make, n8n and Zapier.
- Pay only for results. The current price and plan discounts are always on the [Store page](https://apify.com/kamerozkan/meetup-events-scraper).
- Cap the cost of any run with the maximum cost per run setting.

## Quick start

1. Open the [Actor page](https://apify.com/kamerozkan/meetup-events-scraper) and click **Try for free**.
2. Paste an input like the one below and click **Start**.
3. Download the dataset or read it over the API.

```json
{
  "queries": [
    "python"
  ],
  "locations": [
    "New York, NY"
  ],
  "eventType": "ALL",
  "maxItems": 20
}
```

## Use it from code

Python ([examples/python_example.py](examples/python_example.py)), Node.js ([examples/node_example.js](examples/node_example.js)) and cURL ([examples/curl.sh](examples/curl.sh)) examples are in the `examples` folder. All of them need an [Apify API token](https://console.apify.com/settings/integrations).

## Use in n8n & Make

- **n8n:** Import [integrations/n8n-workflow.json](integrations/n8n-workflow.json) directly into your n8n workspace, set your `APIFY_TOKEN` environment variable (or Bearer token header), and click **Execute Workflow**.
- **Make / Zapier:** Call the Apify **Run an Actor** module with Actor ID `kamerozkan/meetup-events-scraper` and the JSON input above, or POST to `https://api.apify.com/v2/acts/kamerozkan~meetup-events-scraper/run-sync-get-dataset-items`.

## Use with AI Agents (Apify MCP)

This Actor works with Claude Desktop, Cursor, Windsurf and any MCP-compatible AI agent through the official [Apify MCP Server](https://mcp.apify.com). Copy [integrations/mcp-config.json](integrations/mcp-config.json) into your MCP client configuration and replace `YOUR_APIFY_TOKEN` with your token.

## Sample output

Real rows from a recent run, with any contact details masked. Full sample: [sample-output.json](sample-output.json).

```json
[
  {
    "eventId": "317145795",
    "title": "Leverage AI for Business Growth",
    "eventUrl": "https://www.meetup.com/digital-wealth-masters-london/events/317145795/",
    "dateTime": "2026-11-25T19:00:00Z",
    "endTime": "2026-11-25T20:00:00Z",
    "eventType": "ONLINE",
    "status": "ACTIVE",
    "isOnline": true,
    "rsvpCount": 12,
    "maxTickets": 0,
    "isFree": true,
    "feeAmount": null,
    "feeCurrency": null,
    "description": "What could an additional income stream mean for you?\nJoin **Joy Mallard** for a live workshop exploring how AI tools are being used to support new income opportunities.\n\nIn this session, she’ll cover:\n✅ Practical ways people are using AI today\n✅ Approaches that don’t require a technical background\n✅ Flexible options that can fit around your schedule\n\nThis session may be a good fit if you:\n• Are exploring ways to supplement your income\n• Prefer options that don’t rely heavily on selling\n• Want a simple, beginner-friendly introduction to AI tools\n\n🧗🏽For those interested in going further, optional training and mentorship opportunities are available.\n\n**Reserve your spot now**!",
    "imageUrl": "https://secure.meetupstatic.com/photos/event/9/4/4/b/highres_533497963.jpeg",
    "topics": [
      "Artificial Intelligence",
      "Entrepreneurship",
      "Starting an Online Business",
      "Financial Freedom",
      "Success Mindset"
    ],
    "venueName": "Online event",
    "venueAddress": null,
    "venueCity": null,
    "venueState": null,
    "venuePostalCode": null,
    "venueCountry": null,
    "venueLat": -8.521147,
    "venueLon": 179.1962,
    "groupId": "38090236",
    "groupName": "Digital Wealth Masters - London",
    "groupUrlname": "digital-wealth-masters-london",
    "groupUrl": "https://www.meetup.com/digital-wealth-masters-london",
    "groupCity": "London",
    "groupCountry": "gb",
    "groupTimezone": "Europe/London",
    "groupMembersCount": 5233,
    "groupRating": 3.91,
    "groupRatingCount": 211,
    "isPrivateGroup": false,
    "searchQuery": "ai",
    "searchLocation": "London, United Kingdom",
    "sourceUrl": null
  }
]
```

## Support

Found a problem or need a field? Open an issue on the [Actor's Issues tab](https://apify.com/kamerozkan/meetup-events-scraper/issues) and include your run link.

---
This repository holds usage examples and sample data. The Actor itself runs on Apify.
