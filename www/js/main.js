
var opt = {
  subscriber: 'websocket', //'longpoll', //, 'eventsource', or 'websocket',
    //or an array of the above indicating subscriber type preference
  reconnect: undefined, // or 'session' or 'persist'
    //if the HTML5 sessionStore or localStore should be used to resume
    //connections interrupted by a page load
  shared: undefined, // true, // or undefined
    //share connection to same subscriber url between browser
    //windows and tabs using localStorage. In shared mode,
    //only 1 running subscriber is allowed per url per window/tab.
}

var sub = new NchanSubscriber('/sub?id=mytopic', opt);

sub.on("transportSetup", function(opt, subscriberName) {
  // opt is a hash/object - not all transports support all options equally. Only longpoll supports arbitrary headers
  // subscriberName is a string
});

sub.on("transportNativeCreated", function(nativeTransportObject, subscriberName) {
  // nativeTransportObject is the native transport object and depends on the subscriber type
  // subscriberName is a string
});

sub.on("transportNativeBeforeDestroy", function(nativeTransportObject, subscriberName) {
  // nativeTransportObject is the native transport object and depends on the subscriber type
  // subscriberName is a string
});

sub.on("message", function(message, message_metadata) {
  console.log(message)
  console.log(message_metadata)
  // message is a string
  // message_metadata is a hash that may contain 'id' and 'content-type'
});

sub.on('connect', function(evt) {
  //fired when first connected.
});

sub.on('disconnect', function(evt) {
  // when disconnected.
});

sub.on('error', function(error_code, error_description) {
  //error callback
});

sub.reconnect; // should subscriber try to reconnect? true by default.
sub.reconnectTimeout; //how long to wait to reconnect? does not apply to EventSource, which reconnects on its own.
sub.lastMessageId; //last message id. useful for resuming a connection without loss or repetition.

sub.start(); // begin (or resume) subscribing
