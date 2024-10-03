# Geocoding Server

A simple server built with Express to find country codes.

## Description

Exposes an endpoint which takes in a longitude and latitude pair and returns the correct country code.

### Credits

Geocoding logic: https://github.com/rapideditor/country-coder

## Installation

1. Clone the repository:

```sh
git clone <respository-url>
cd geocoder-server
```

2. Install dependencies

```sh
npm install
```

**Note:** if using Nodemon on Windows, you may need to run the following then reload your terminal.  This allows Nodemon to be added to your PATH

```sh
npm i -g nodemon
```

## Usage

To start the server, run either:

```sh
npm run start
```

**OR**

```sh
npm run start:nodemon
```

This will allow live reload when changes are made.
