# Stateful Express.JS API's

### Stateful

- creates session and holds that info for further api calls and communications.
- Continuous interactions between client and server for extended period.
- Examples: online games to store player positions in game world. Video streaming pause resume and seek within a video maintain session state.Collaborative softwares like google docs for real-time interactions.
- Biggest challenge is scalability, reliability and complex error handling.

### Stateless

- In stateless each API request are independent all and required necessary data along with it like cookie authentication headers.(No session state, Independence of requests, Scalability, Caching). Client side required to manage their state of required information and include it in each request.
- Summary: each request are self-contained independent and doesn't rely on server storing client information. This design principle makes API easy to scale, cache and maintain while promoting client-server interactions.

# How to use this app

- Simply install modules and request `http://localhost:3000/api/count` in browser, I have also created .http file for api calls so you can use that with vs code extension `REST`.
