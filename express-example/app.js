const express = require('express');
const bodyParser = require('body-parser');
const app = express();

const adminRoutes = require('./routes/admin');
const shopRoutes = require('./routes/shop');

app.use(bodyParser.urlencoded({ extended: false }));

// here we connect our routes to the app
// app.use is a middleware function that will
// execute for every incoming request
// app.post or app.get are also middleware functions, but
// they are only executed for incoming requests that match
// the specified method
// './admin/' adds the specified path to the beginning of
// all the paths in the adminRoutes file
app.use('/admin', adminRoutes);
app.use(shopRoutes);

// catch all middleware function
app.use((req, res, next) => {
  res.status(404).send('<h1>Page not found</h1>');
});

app.listen(3000);