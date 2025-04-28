const { onRequest } = require("firebase-functions/v2/https");
const FormData = require('form-data');
const cors = require('cors')({ origin: true });
const { defineString, defineSecret } = require('firebase-functions/params');
const Mailgun = require('mailgun.js');

const api_key = defineSecret('MAILGUN_API_KEY');
const domain = defineString('MAILGUN_DOMAIN');

exports.sendMailGen2 = onRequest(
  { secrets: [api_key] },
  (request, response) => {
    cors(request, response, () => {

      const mailgun = new Mailgun(FormData)
      const mg = mailgun.client({ username: 'api', key: api_key });


      console.log('request', request.body);
      const { subject, text } = request.body;
      const to = ['Taylor <taylorw@greysky.io>']
      const from = `Greysky Website <mailgun@${domain}>`;

      const data = {
        to,
        from,
        subject,
        text,
      };

      mg.messages.create(domain, data).then((msg) => response.send(msg)
      ).catch((error) => {
        console.log('error', error);
        response.status(500).send({ message: 'There was an error' });
      });

      //old version
      // mg.messages().send(data, function (err, body) {
      //   if (err) {
      //     console.log('err', err);
      //     response.status(500).send('There was an error');
      //   }
      //   response.send(body);
      // });
    });
  });
