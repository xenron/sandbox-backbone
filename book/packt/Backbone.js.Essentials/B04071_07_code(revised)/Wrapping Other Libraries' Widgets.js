// File #1
$('#datepicker1').datepicker({changeMonth: true});
// File #2
$('#datepicker2').datepicker({changeMonth: true});



var CalendarView = Backbone.View.extend({
    initialize: function() {
        this.$el.datepicker({changeMonth: true});
    }
});



// File #1
new CalendarView({el: '#datepicker1'});
// File #2
new CalendarView({el: '#datepicker2'});



CalendarView = Backbone.View.extend({
    initialize: function() {
        this.$el.datepicker({
            changeMonth: true,
                         onClose: _.bind(function() {
                             this.remove();
                         }, this)
        });
    }
});