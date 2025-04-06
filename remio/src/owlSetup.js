// owlSetup.js

import jQuery from "jquery";
window.$ = window.jQuery = jQuery;

// Only import Owl after jQuery is attached globally
import "owl.carousel/dist/assets/owl.carousel.min.css";
import "owl.carousel/dist/owl.carousel.min.js";

export default jQuery;
