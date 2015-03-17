(function() {
  var fs = require('fs');
  var coupon = require('coupon.js');

  var amountArgv = process.argv[2];
  var quantity = (amountArgv && !isNaN(amountArgv)) ? parseInt(amountArgv) : 250;
  if (quantity <= 0) {
    console.log("Error: code quantity must be greater than 0")
    return;
  }

  var codes = coupon.generateCodes(quantity);
  fs.writeFile("./section2", coupon.formatCodes(codes), function(err) {
    if (err) {
      return console.log(err);
    }
    console.log("Success: "+ quantity + " coupon code(s) generated to file 'section2'");
  });
})();
