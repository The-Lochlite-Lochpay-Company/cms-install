import $ from "jquery";
import "jquery-sparkline";
import * as lodash from "lodash";
import * as chart from "chart.js";
import * as base64 from "js-base64";
import '@fortawesome/fontawesome-free/js/all.js';
import '@mdi/font/css/materialdesignicons.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import 'remixicon/fonts/remixicon.css';

window.$ = window.jQuery = $;
window._ = lodash;
chart.Chart.register(chart.ArcElement,chart.LineElement,chart.BarElement,chart.PointElement,chart.BarController,chart.BubbleController,chart.DoughnutController,chart.LineController,chart.PieController,chart.PolarAreaController,chart.RadarController,chart.ScatterController,chart.CategoryScale,chart.LinearScale,chart.LogarithmicScale,chart.RadialLinearScale,chart.TimeScale,chart.TimeSeriesScale,chart.Decimation,chart.Filler,chart.Legend,chart.Title,chart.Tooltip,chart.SubTitle)
window.Chart = chart.Chart; 
window.Base64 = base64;
$('body').ready(function(){
const popper = require("@popperjs/core");
const bootstrap = require("bootstrap");

window.Popper = popper;
window.bootstrap = bootstrap;


var tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-toggle="tooltip"]')) || [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'));
var tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
  return new bootstrap.Tooltip(tooltipTriggerEl)
})

var popoverTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="popover"]'));
var popoverList = popoverTriggerList.map(function (popoverTriggerEl) {
  return new bootstrap.Popover(popoverTriggerEl)
})

var toastElList = [].slice.call(document.querySelectorAll('.toast'));
var toastList = toastElList.map(function (toastEl) {
  return new bootstrap.Toast(toastEl, option)
})

})
/**
 * We'll load the axios HTTP library which allows us to easily issue requests
 * to our Laravel back-end. This library automatically handles sending the
 * CSRF token as a header based on the value of the "XSRF" token cookie.
 */

window.axios = require('axios');

window.axios.defaults.headers.common['X-Requested-With'] = 'XMLHttpRequest';

/**
 * Echo exposes an expressive API for subscribing to channels and listening
 * for events that are broadcast by Laravel. Echo and event broadcasting
 * allows your team to easily build robust real-time web applications.
 */

window.Echo = require('laravel-echo').default;

window.Pusher = require('pusher-js');
if(process.env.MIX_PUSHER_APP_KEY){
var notifysync = new Echo({
    broadcaster: 'pusher',
    key: process.env.MIX_PUSHER_APP_KEY,
    cluster: process.env.MIX_PUSHER_APP_CLUSTER,
    wsHost: process.env.MIX_PUSHER_HOST,
    wsPort: process.env.MIX_PUSHER_PORT,
    wssPort: process.env.MIX_PUSHER_PORT,
    forceTLS: false,
    encrypted: true,
    enabledTransports: ['ws', 'wss'],
});

        notifysync.channel('Publishnotifications').listen('Publishnotifications', notify => {
            if (! ('Notification' in window)) {
              alert('Web Notification is not supported');
              return;
            }

            Notification.requestPermission( permission => {
              let notification = new Notification(notify.title, {
                body: notify.body, // content for the alert
                icon: notify.image // optional image url
              });

              // link to page on clicking the notification
              notification.onclick = () => {
                window.open(window.location.href);
              };
            });
          })

}