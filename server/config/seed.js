/**
 * Populate DB with sample data on server start
 * to disable, edit config/environment/index.js, and set `seedDB: false`
 */

'use strict';

var Thing = require('../api/thing/thing.model');
var User = require('../api/user/user.model');
var Product = require('../api/product/product.model');
var Post = require('../api/post/post.model');

Thing.find({}).remove(function() {
    Thing.create({
        name: 'Development Tools',
        info: 'Integration with popular tools such as Bower, Grunt, Karma, Mocha, JSHint, Node Inspector, Livereload, Protractor, Jade, Stylus, Sass, CoffeeScript, and Less.'
    }, {
        name: 'Server and Client integration',
        info: 'Built with a powerful and fun stack: MongoDB, Express, AngularJS, and Node.'
    }, {
        name: 'Smart Build System',
        info: 'Build system ignores `spec` files, allowing you to keep tests alongside code. Automatic injection of scripts and styles into your index.html'
    }, {
        name: 'Modular Structure',
        info: 'Best practice client and server structures allow for more code reusability and maximum scalability'
    }, {
        name: 'Optimized Build',
        info: 'Build process packs up your templates as a single JavaScript payload, minifies your scripts/css/images, and rewrites asset names for caching.'
    }, {
        name: 'Deployment Ready',
        info: 'Easily deploy your app to Heroku or Openshift with the heroku and openshift subgenerators'
    });
    console.log('Seeding Things');
});

Product.find({}).remove(function() {
    Product.create({
        sku: 1,
        name: 'Yoga Bag',
        description: 'Handmade bag.  Comes in a variety of styles and colors.',
        category: ['Accessories'],
        price: 10,
        "images": [
            "/assets/images/uploads/eva (3 of 25).jpg",
            "/assets/images/uploads/eva (4 of 25).jpg"
        ],

        inStock: true
    }, {
        sku: 2,
        name: 'Shirt',
        description: 'An active wear shirt excellent for all physical activities.  Allows excellent movement and keeps you from getting all sweaty and stinky.',
        category: ['Clothing'],
        price: 25.00,
        "images": [
            "/assets/images/uploads/eva (23 of 25).jpg",
            "/assets/images/uploads/eva (25 of 25).jpg"
        ],
        inStock: true
    }, {
        sku: 3,
        name: 'Wrap',
        description: 'Super chic low carb outer wear.',
        category: ['Clothing'],
        price: 5.00,
        "images": [
            "/assets/images/uploads/eva (5 of 25) - Copy.jpg",
            "/assets/images/uploads/eva (6 of 25).jpg"
        ],
        inStock: false
    });
    console.log('Seeding Products');
});

Post.find({}).remove(function() {
    Post.create({
        title: 'Post 1',
        author: 'Author',
        body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
        comments: [],
        images: []
    }, {
        title: 'Post 2',
        author: 'Author',
        body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
        comments: [],
        images: []
    }, {
        title: 'Post 3',
        author: 'Author',
        body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
        comments: [],
        images: []
    });
    console.log('Seeding Posts');
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
    });
});