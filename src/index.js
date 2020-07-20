//import Post from './Post'
//import './styles/style.css'
//import './styles/extra.scss'
//import WebpackLogo from './assets/webpack-logo.png'
//const post = new Post('webpack jquery title');
//import './pug/UIKit/test.pug'
import './styles/style.scss';
import '../node_modules/air-datepicker/dist/css/datepicker.min.css';
import '../node_modules/air-datepicker/dist/js/datepicker.min.js';
import '../src/scripts/dropDownGuests'
import '../src/scripts/dropDownRoom'
import 'cleave.js'
//import 'air-datepicker'
$('.datepicker-here').datepicker({ todayButton: true, clearButton: true });
var cleave = new Cleave('.txtField-input-date', {
 date: true,
 delimiter: '.',
 datePattern: ['d', 'm', 'Y']
});
