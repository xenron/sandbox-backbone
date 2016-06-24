var commonConfiguration = {foo: true, bar: true};
var specificConfiguration = {foo: false, baz: 7};



var combined = _.extend({}, commonConfiguration,
                        specificConfiguration);
// combined == {foo: false, bar: true, baz: 7}



var combined = _.defaults({}, specificConfiguration, 
                          commonConfiguration);
// combined == {foo: false, bar: true, baz: 7}