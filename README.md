# MAQE-Test
author: Ekkapob Chitpanorak

date: March 17, 2015

### Front-end
**HTML/CSS**

* MAQE-test/Frontend/test-htmlcss

**Template Persons**

* MAQE-test/Frontend/test-template

Web server is required for ajax call. Run a script to start basic web server and browse to localhost:8000.
```
$ ./start-server.sh
```

### Back-end

**HTML/CSS** (same as the front-end)

* MAQE-test/Frontend/test-htmlcss

**Generate Coupon Codes**

* MAQE-test/Backend/test-coupons

The program is written in javascript, Node.js. The program generates unique, 10 character long (starting with 'MQ'), coupon codes and saves to file 'section2'.

Usage:
```
# Default generate 250 coupon codes 
$ node generateCoupons.js

# Generate 1000 coupon codes
$ node generateCoupons.js 1000
```


