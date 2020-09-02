const push = require('web-push');
// const vapidKeys = push.generateVAPIDKeys();
const vapidKeys = {
    publicKey: 'BFjkSbDToD8SWgH2JFo6XCrG7CUkxdXoOkh-8KJHH8oVdSmGS4WSHCGlE3N9heCaTpteGCBoaoTmYClWRKccAo4',
    privateKey: 'vy-Jqh8qrKX1seaI0HP3rGuuChoxX2xo2_m06L_OOW4'
  };

push.setVapidDetails('mailto:test@code.com.ar',vapidKeys.publicKey,vapidKeys.privateKey);

let sub= {};

push.sendNotification(sub,'test mesaje');
