const functions = require('firebase-functions');
const mailgun = require('mailgun-js');
const cors = require('cors');
const api_key = functions.config().mailgun.key;
const domain = functions.config().mailgun.domain;
const mg = mailgun({ apiKey: api_key, domain: domain });

// // Create and Deploy Your First Cloud Functions
// // https://firebase.google.com/docs/functions/write-firebase-functions
//
// exports.helloWorld = functions.https.onRequest((request, response) => {
//  response.send("Hello from Firebase!");
// });

exports.sendMail = functions.https.onRequest((request, response) => {
  cors(request, response, () => {
    console.log('request', request.body);
    const { subject, text } = request.body;
    const to = 'taylorw@greysky.io';
    const from = 'Greysky Website <taylorw@greysky.io>';

    const data = {
      to,
      from,
      subject,
      text,
    };

    mg.messages().send(data, function(err, body) {
      if (err) {
        console.log('err', err);
        response.send('There was an issue');
      }

      console.log('body', body);
      response.send(body);
    });
  });
});
