"use strict";

var expect = require("chai").expect;
var decode = require("../index");

describe("decode", function() {
  var assert = function(original, expected) {
    expect(decode(original)).to.equal(expected);
  };

  it("should decode v1 URLs", function() {
    assert(
      "https://urldefense.proofpoint.com/v1/url?u=https%3A//www.unicef.org/emergencies/index%5F95476.html&d=DwMCaQ&c=nxfEpP1JWHVKAq835DW4mA&r=oj8zn8hPSl4sSueNf5tb4BCg4XAYp4GWHjw1zTBO4Zw&m=S8MqqmObUKzP7OxUEwQKcTMwi1cbojh4Eux/989oSnA&s=1q3cD9GHQRaulstjWJ9TVj6VAkCvHTe/e9cE2Zuwfsk&e=",
      "https://www.unicef.org/emergencies/index_95476.html"
    );

    assert(
      "https://urldefense.proofpoint.com/v1/url?u=http%3A//www.flashtalking.com/us/creative%2Dshowcase/&d=DwMFAg&c=nxfEpP1JWHVKAq835DW4mA&r=xj9WUdjGR1YvUzToFuZdg3FIy2phyoUHr77YOXSPwV8&m=D%qBrZzn%hsGI7QO74rOFs5OkgFKRMrS66gsInRK//k&s=BrEipCqieRILw8MNYhGqWDXel1PPhnanYWZCrgqKyG0&e=",
      "http://www.flashtalking.com/us/creative-showcase/"
    );
  });

  it("should decode v2 URLs", function() {
    assert(
      "https://urldefense.proofpoint.com/v2/url?u=https-3A__www.unicef.org_emergencies_index-5F95476.html&d=DwMCaQ&c=nxfEpP1JWHVKAq835DW4mA&r=oj8zn8hPSl4sSueNf5tb4BCg4XAYp4GWHjw1zTBO4Zw&m=S8MqqmObUKzP7OxUEwQKcTMwi1cbojh4Eux_989oSnA&s=1q3cD9GHQRaulstjWJ9TVj6VAkCvHTe_e9cE2Zuwfsk&e=",
      "https://www.unicef.org/emergencies/index_95476.html"
    );

    assert(
      "https://urldefense.proofpoint.com/v2/url?u=http-3A__www.flashtalking.com_us_creative-2Dshowcase_&d=DwMFAg&c=nxfEpP1JWHVKAq835DW4mA&r=xj9WUdjGR1YvUzToFuZdg3FIy2phyoUHr77YOXSPwV8&m=D-qBrZzn-hsGI7QO74rOFs5OkgFKRMrS66gsInRK__k&s=BrEipCqieRILw8MNYhGqWDXel1PPhnanYWZCrgqKyG0&e=",
      "http://www.flashtalking.com/us/creative-showcase/"
    );
  });

  it("should leave unrecognized URLs untouched", function() {
    assert(
      "http://www.criteo.com/test",
      "http://www.criteo.com/test"
    );
  });
});
