var heOrShe = '{{#if isMale }}he{{else}}she{{/if}}';



var heOrSheTemplate = Handlebars.compile(heOrShe);
alert(heOrSheTemplate({isMale: false})); // alerts “she”