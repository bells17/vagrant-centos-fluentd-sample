require('log-timestamp')(function() {
  return '[' + (new Date()).toISOString() + ']';
});

console.log('normal log');
console.error('error log one line');
console.error(new Error('error log stacktrace').stack);
