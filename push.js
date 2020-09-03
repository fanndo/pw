var push = require('web-push');

let vapidKeys = {
  publicKey:
    'BHebmqRIcMFi18L5VUNUXVxT3E5gcbxSsL7LPMPhAMnZslSlMilnJX7rAE-0ufoLY2lF6QQ1SERXPckKIw3gbng',
  privateKey: 'PbR4vVQEWx3PskWh8RvMatOKpkXQplNgH3lcuundIck'
};

push.setVapidDetails(
  'mailto:test@code.co.uk',
  vapidKeys.publicKey,
  vapidKeys.privateKey
);

let sub = {"endpoint":"https://fcm.googleapis.com/fcm/send/elM3De1-lhQ:APA91bGGLcAIalvv8quhH24Nf5ydIk5__T3B7hhhUMoFMTO0_OGWxHvOpkuWWvRW9YvnAU4o-KcFCzulS8nSfslHX0No9lCI7RhuU-kLZA3bJ5Dg2fVHSTNdcrlPwuCYl_RJNNZf2AzT","expirationTime":null,"keys":{"p256dh":"BFTUCkJdpqyg6inrvMuASZahqTRIhw8KVl9tJ4zzNHmgHDxjjtqHQgqueJdfHbNtUcvjj33-J24bqSPQDRiUgkc","auth":"j-N9cwDBEfK06smF8IzzEw"}};
push.sendNotification(sub, 'test message');


