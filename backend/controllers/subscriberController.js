const asyncHandler = require('express-async-handler');
var postmark = require('postmark');

const Subscriber = require('../models/subscriberModel');
// @desc   Add Subscriber
// @route  POST /api/subscribers
// @access Public
const addSubscriber = asyncHandler(async (req, res) => {
  const { name, email } = req.body;
  console.log(req.body);
  if (!name || !email) {
    res.status(400);
    throw new Error('Please fill in the fields');
  }
  // Check if subscriber exists
  const subscriberExists = await Subscriber.findOne({ email });

  if (subscriberExists) {
    res.redirect('/fail');
    return;
  }
  // Add subscriber
  const subscriber = await Subscriber.create({
    name,
    email,
    subscribed: true,
  });

  var client = new postmark.ServerClient(process.env.POSTMARK_KEY);

  client.sendEmailWithTemplate({
    From: 'service@boundnetwork.com',
    To: email,
    TemplateId: 31737915,
    TemplateModel: {
      name: name,
    },
    MessageStream: 'welcome-message',
  });
  res.redirect('/success');
});

module.exports = { addSubscriber };
