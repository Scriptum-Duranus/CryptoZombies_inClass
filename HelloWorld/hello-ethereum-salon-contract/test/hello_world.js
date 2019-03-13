contract('HelloWorld', function(accounts) {
    it("should assert true", function(done) {
        var HelloWorld = artifacts.require('./HelloWorld.sol');

        contract('HelloWorld:GetMessage', function(accounts) {
        
          it("should return a correct string", function(done) {
        
            var hello_world = HelloWorld.deployed();
        
            hello_World.then(function(contract){
        
              return contract.GetMessage.call(); // **IMPORTANT
        
            }).then(function(result){
        
              assert.isTrue(result === 'Hello Ethereum Salon!');
        
              done();
        
            })
        
          });
        
        });
    });
  });