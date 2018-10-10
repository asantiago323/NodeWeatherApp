
const yargs = require('yargs');

const geocode = require('./geocode/geocode');

const argv = yargs
    .options({
        a: {
            demand: true,
            alias: 'address',
            describe: 'Address to fetch weather for',
            string: true
        }
    })
    .help()
    .alias('help', 'h')
    .argv;

geocode.geocodeAddress(argv.a, (errorMessage, results) => {
    if (errorMessage) {
        console.log(errorMessage);
    } else {
        geocode.getTemp(results.latitude, results.longitude, (err, res) => {
            if (err) {
                console.log(err);
            } else {
                console.log('Temperature: ', res.temp);
                console.log('Summary: ', res.summary);
            }
        });
    }
});