const AWS = require('aws-sdk');

const request = require('request');

AWS.config.loadFromPath('./AwsConfig.json');

const s3 = new AWS.S3({
  endpoint: "http://fec5-restaurant-photos.s3.amazonaws.com",
  s3BucketEndpoint: true
});


const uploadImg = function(url, name) {
  request( { url: url, encoding: null }, function(err, res, body) {
  	if(err) {
  	  console.log('ERROR', err);
  	} else {
      let params = {
        'Bucket': 'fec5-restaurant-photos',
        'Key': name,
        'Body': body
      };
  	  s3.putObject(params, (err) => {
        if(err) {
          console.log('ERROR saving image into S3', err);
        } else {
          console.log('Uploaded data to S3');
        }
      });
    }
  });
}



uploadImg('https://kids.nationalgeographic.com/content/dam/kids/photos/animals/Mammals/H-P/lion-male-roar.ngsversion.1466679939988.adapt.1900.1.jpg', 'lion.jpg');
