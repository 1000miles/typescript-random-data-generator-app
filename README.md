# TypeScript Random Data Generator App

A small app to randomly generate data and display them on a GoogleMap using TypeScript.

![Googlemaps Intro](/maps/src/images/googlemaps-intro.jpg)

This app is based on following tutorial: https://www.udemy.com/course/typescript-the-complete-developers-guide/

## Tech Stack

- Parcel (Web Application Bundler)
- TypeScript (Superset of JavaScript to compile plain JS)
- Faker (Fake data generator)
- GoogleMaps

## Getting started

Before you start make sure to create a project, enable API services and register an API key using Google Maps JavaScript API on https://developers.google.com.

```shell

$ cd maps/
$ npm install

# Build the packages and files:
$ npm build # OR:
$ parcel build index.html # manually in the cli

# Run the server and open the browser on http://localhost:1234 with:
$ parcel index.html
```

## Deployment

### Netlify Settings

- Repository: `github.com/<your-username>/typescript-random-generator-app`
- Base directory: `maps`
- Build command: `npm run-script build`
- Publish directory: `maps/dist`

## Troubleshooting

If you are running into issues to display the GoogleMap on the published site-url similar to this in the browser dev console:

```
Google Maps JavaScript API error: RefererNotAllowedMapError
https://developers.google.com/maps/documentation/javascript/error-messages#referer-not-allowed-map-error
Your site URL to be authorized: https://5e4006544f520e1qw3452566--fancy-jumping-url-723642.netlify.com/
```
Remember to check your billing, API key and settings on Google Cloud Platform.
