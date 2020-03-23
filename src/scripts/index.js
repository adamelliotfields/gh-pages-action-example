import $ from "jquery";
import * as bootstrap from "bootstrap/js/src";

window.bootstrap = bootstrap;

$(() => {
  $('[data-toggle="popover"]').popover();
});
