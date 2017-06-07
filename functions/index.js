const functions = require('firebase-functions');
const mailgun = require('mailgun-js');
const cors = require('cors')({origin: true});
const api_key = functions.config().mailgun.key;
const domain = functions.config().mailgun.domain;
const mg = mailgun({ apiKey: api_key, domain: domain });

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
        response.status(500).send('There was an error');
      }
      response.send(body);
    });
  });
});
