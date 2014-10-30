/**
 * Populate DB with sample data on server start
 * to disable, edit config/environment/index.js, and set `seedDB: false`
 */

'use strict';

var Thing = require('../api/thing/thing.model');
var User = require('../api/user/user.model');
var Product = require('../api/product/product.model');

Thing.find({}).remove(function() {
  Thing.create({
    name : 'Development Tools',
    info : 'Integration with popular tools such as Bower, Grunt, Karma, Mocha, JSHint, Node Inspector, Livereload, Protractor, Jade, Stylus, Sass, CoffeeScript, and Less.'
  }, {
    name : 'Server and Client integration',
    info : 'Built with a powerful and fun stack: MongoDB, Express, AngularJS, and Node.'
  }, {
    name : 'Smart Build System',
    info : 'Build system ignores `spec` files, allowing you to keep tests alongside code. Automatic injection of scripts and styles into your index.html'
  },  {
    name : 'Modular Structure',
    info : 'Best practice client and server structures allow for more code reusability and maximum scalability'
  },  {
    name : 'Optimized Build',
    info : 'Build process packs up your templates as a single JavaScript payload, minifies your scripts/css/images, and rewrites asset names for caching.'
  },{
    name : 'Deployment Ready',
    info : 'Easily deploy your app to Heroku or Openshift with the heroku and openshift subgenerators'
  });
  console.log('Seeding Things');
});

Product.find({}).remove(function() {
  Product.create({
    sku         : 1,
    name        : 'Yoga Bag',
    description : 'Handmade bag.  Comes in a variety of styles and colors.',
    category    : 'Accessories',
    price       : 10,
    images      : ["5451ac47eaa0d7861940e542", "5451ac4beaa0d7861940e543", "5451ac4feaa0d7861940e544"],
    inStock     : true
  },
  {
    sku         : 2,
    name        : 'Shirt',
    description : 'An active wear shirt excellent for all physical activities.  Allows excellent movement and keeps you from getting all sweaty and stinky.',
    category    : 'Clothing',
    price       : 25.00,
    images      : [],
    inStock     : true
  },
  {
    sku         : 3,
    name        : 'Wrap',
    description : 'Super chic low carb outer wear.',
    category    : 'Clothing',
    price       : 5.00,
    images      : [],
    inStock     : false
  }
  );
  console.log('Seeding Products');
});

User.find({}).remove(function() {
  User.create({
    provider: 'local',
    name: 'Test User',
    email: 'test@test.com',
    password: 'test'
  }, {
    provider: 'local',
    role: 'admin',
    name: 'Admin',
    email: 'admin@admin.com',
    password: 'admin'
  }, function() {
      console.log('finished populating users');
    }
  );
});