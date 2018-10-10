const request = require('request');
const key = '82bsP2sYlrAQ7MOlTIXQeN5EHuzmmnfL';

var geocodeAddress = (adrs, callback) => {
    var address = encodeURIComponent(adrs);
    request({
        url: `http://www.mapquestapi.com/geocoding/v1/address?key=${key}&location=${address}`,
        json: true
    }, (error, response, body) => {
        if (error) {
            // do something
            callback('Error!');
        } else {
            var locations = body.results[0].locations[0].latLng;
            callback(undefined, {
                latitude: locations.lat,
                longitude: locations.lng
            });
        }
    });
};

var getTemp = (lat, long, callback) => {
    request({
        url: `https://api.forecast.io/forecast/4a04d1c42fd9d32c97a2c291a32d5e2d/${lat},${long}`,
        json: true
    }, (error, response, body) => {
        if (error) {
            // do something
            callbackg('Error!');
        } else {
            callback(undefined, {
               temp: body.currently.temperature,
               summary: body.currently.summary
            });
        }
    });
}


module.exports.geocodeAddress = geocodeAddress;
module.exports.getTemp = getTemp;
