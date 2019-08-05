var d = new Date();
var n = d.toLocaleTimeString();
const currentTime = React.createElement('string', null, 'The time is: ' + n);
// use setInterval and toLocaleTimeString
setInterval(ReactDOM.render(currentTime, document.getElementById('app')), 1000);