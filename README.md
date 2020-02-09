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

### Netlify

Build command with npx on netflify:
```
npx -p parcel-bundler parcel build index.html
```
