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

let sub = {"endpoint":"https://fcm.googleapis.com/fcm/send/ersaGnfYrB4:APA91bHlz36Ifsv1p_g8CBASPItn5ozWRyQHyPXlkGVPyXk-ma4TKEcMxf4TrKFINYBq3O22PVLqHVoCFTFhSEx36XqI2cZDzJp0zQ4HIoEXdZiqtvV97iNOR7gQfOJWPL6-2FbMJToE","expirationTime":null,"keys":{"p256dh":"BI50CVFZYCgnswZZmR0DHP8IB5Pxa9_u9riiEBT5h2nka0y27G3TCaGEv43LXrzwwblZx4rm6r_otERRE2YavxI","auth":"Yh97czH3f3axYeJC8KcWmA"}};

push.sendNotification(sub, 'test message');
