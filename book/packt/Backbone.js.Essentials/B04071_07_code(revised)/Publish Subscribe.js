var Player = Backbone.Model.extend();
var bob = new Player({name: 'Robert', score: 2});
var jose = new Player({name: 'Jose', score: 7});
var sep = new Player({name: 'Sepehr', score: 4});
window.setInterval(1000, function() {
    bob.fetch();
    jose.fetch();
    sep.fetch();
});



var Scoreboard = Backbone.View.extend({
    renderScore: function(player, score) {
        this.$('input[name="' + player + '"]').html(score);
    }
});
var scoreboard = new Scoreboard();
Backbone.on('scoreChange', scoreboard.renderScore, scoreboard);



Player = Backbone.Model.extend({
    fetch: function() {
        var promise = Backbone.Model.prototype.fetch.apply(this, arguments);
        promise.done(function() {
            if (this.hasChanged('score')) {
                Backbone.trigger('scoreChange', this.get('name'), this.get('score'));
            }
        });
        return promise;
   }
});