import express from 'express';
import * as countryCoder from '@rapideditor/country-coder';

const app = express();
const port = 3000;

app.get('/', (req, res) => {
    res.send('Hello World!');
});

app.get('/getCountryCode', (req, res) => {
    //get lat and long from request
    const latitude = req.query.lat;
    const longitude = req.query.long;

    if (!latitude || !longitude) {
        return res.status(400).send({
            code: 400,
            error: 'Latitude and longitude are required'
        });
    }

    //get country code from lat and long
    const countryCode = countryCoder.iso1A2Code([longitude, latitude]);

    if (!countryCode) {
        return res.status(404).send({
            code: 404,
            error: 'Country code not found'
        });
    }

    const response = {
        code: 200,
        countryCode: countryCode
    }

    return res.send(response);
});

app.listen(port, () => {
    console.log(`Geocoding app listening at http://localhost:${port}`);
});