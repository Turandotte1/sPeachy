const mongoose = require('mongoose');
const loginCheck = require('../middleware/loginCheck');
const creditsCheck = require('../middleware/creditsCheck');
const Mailer = require('../api/Sendgrid');
const surveyTemplate = require('../api/emailTemplates/surveyTemplate');

const Survey = mongoose.model('surveys');

module.exports = app => {
  app.get('/api/surveys/thanks', (req, res) => {
    res.send('Thank you for voting');
  });

  app.post('/api/surveys', loginCheck, creditsCheck, async (req, res) => {
    const { title, subject, body, recipients } = req.body;

    const survey = new Survey({
      title,
      subject,
      body,
      recipients: recipients.split(',').map(email => ({ email: email.trim() })),
      _user: req.user.id,
      dateSent: Date.now()
    });

    const mailer = new Mailer(survey, surveyTemplate(survey));

    try {
      await mailer.send();
      await survey.save();

      req.user.credits -= 1;
      const user = await req.user.save();

      res.send(user);
    } catch (err) {
        res.status(422).send(err);
    }
  });
};
