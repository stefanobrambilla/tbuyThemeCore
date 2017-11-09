import 'jquery'
import 'popper.js'
import 'bootstrap'
import Detection from './modules/detection'
import Utility from './modules/utility'


$(document).on('ready', function () {
    $('body').on('wheel', function (event) {
        console.log(Utility.getScrollDirection(event.originalEvent));
    });
});