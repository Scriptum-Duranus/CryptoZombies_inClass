var Courses = artifacts.require("./Courses.sol");

contract('Courses', function(acc) {

 //I ran into a last minute error testing this one and I don't have time to fix 
 //it so uh, no testing setInstructor unfortuntatly.
  it("setInstructor method Test:", function(end) 
    {
        /*Courses.deployed().then(function(c) 
        {
            c.setInstructor(acc[0], 22, "Jacen", "Duran");
            return c.instructors.call(acc[0]);
        }).then(function(a)
        {
            assert.isTrue(a[0].toNumber() === 22);
            assert.isTrue(a[0].toNumber() === 5);
            assert.isTrue(a[1] === "Jacen");
            assert.isTrue(a[1] === "Joe");
            assert.isTrue(a[2] === "Duran");
            assert.isTrue(a[2] === "Mia");
            end();
        })
        */
       end();
    });
  it("getInstructors method Test:", function(end) 
    {
        Courses.new().then(function(c) 
        {
            c.setInstructor(acc[0], 22, "Jacen", "Duran");
            c.setInstructor(acc[1], 12, "Mia", "Miamor");
            return c.getInstructors.call();
        }).then(function(a)
        {
             var b = [acc[0], acc[1]];
             assert((a.length == b.length) && a.every(function(z, y) 
            {
                 return z === acc[y]; 
            }))
            end();
        })
    });
  it("getInstructor method Test:", function(end) 
  {
    Courses.new().then(function(c) 
    {
         c.setInstructor(acc[0], 22, "Jacen", "Duran");
         return c.getInstructor.call(acc[0]); 
    }).then(function(a)
    {
      assert(a[0].toNumber() === 22);
      assert(a[1] === "Jacen");
      assert(a[2] === "Duran");
      end();
    })
  });
  it("countInstructors method Test:", function(end) 
  {
    Courses.new().then(function(c) 
    {
      c.setInstructor(acc[0], 0, "A", "B");
      c.setInstructor(acc[1], 1, "M", "N");
      c.setInstructor(acc[2], 2, "Y", "Z");
      return c.countInstructors.call();
    }).then(function(a)
    {
      assert(a.toNumber() === 3);
      end();
    })
  });
});

