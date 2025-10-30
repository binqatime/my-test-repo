exports.mocha.globalSetup = function() {
    console.log('Global hook');
};

exports.mocha.globalTeardown = function() {
    console.log('Global teardown');
};
