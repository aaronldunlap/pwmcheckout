# PWM Checkout UI

HTML is in `checkout.html`, styles are in `checkout.scss`, JS is in `checkout.js`.

No other styles or JS libraries are included so it would be easier to integrate. All JS is vanilla JS written in ES6 style. Babel is used to transpile it into ES5 code and minimize it into `checkout.min.js`.

Styles are all scope to `body.checkout` so it wouldn't interfere with other code. Make sure the <body> tag in the HTML has class "checkout" applied or nothing will show up.

The HTML for multifile print is built out so you could include as many files as you want. Just loop out each item into a `<li class="multifile-item">` and output the appropriate values in the form fields.

Most of the heavy lifting in the JS file is in the function "summarizeSettings()", it takes all of the selected print configurations and reduces them into a single string (like "1 copy B&W")