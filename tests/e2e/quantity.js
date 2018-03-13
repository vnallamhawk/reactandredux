module.exports = {
    'Testing Title, Quantity functionalityq' : function (client) {
      client
        .url('http://localhost:8080')
        .waitForElementVisible('body', 5000)
        .assert.containsText('.title', 'Ninja™ Professional Blender with Single Serve Blending Cups')
        .click('#btnPlus')
        .assert.containsText('.selectedQuantity', '2')
        .click('#btnMinus')
        .assert.containsText('.selectedQuantity', '1')
        .end();
    }
  };