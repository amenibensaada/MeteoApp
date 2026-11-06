# Weather forecast app

An earlier React weather interface with city search, current weather and forecast views, using Axios, React Router and OpenWeather.

Educational frontend project · [Current portfolio](https://amenibensaadaportfolio.netlify.app/?utm_source=github&utm_medium=profile&utm_campaign=personal_brand).

## Run locally

Create your own OpenWeather account/key, then configure your local environment:

```sh
npm ci
cp .env.example .env.local
# Set REACT_APP_OPENWEATHER_API_KEY in .env.local
npm start
```

CRA embeds REACT_APP_* values into the browser bundle: this configuration is not a secret-storage mechanism. Apply provider restrictions/quotas to a browser key, or use a server-side proxy when private credentials are required. The previous embedded key has been removed from the current source; old keys should be revoked with the provider if still active.

`npm run build` creates static assets; `npm test` starts the original CRA harness. These historical React/CRA dependencies have not been migrated to a current framework. Weather data requires the provider’s availability and an active key; no maintained production service is claimed.

`src/containers/WeatherDetails.js` contains the forecast request, with presentation components under `src/components`. Existing forks remain under their owners’ control.
