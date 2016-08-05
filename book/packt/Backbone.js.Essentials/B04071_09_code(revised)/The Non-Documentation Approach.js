var Book = Backbone.Model.extend();



/**
 * This defines a book model.
 */
Book = Backbone.Model.extend();



    bookNav: function() {
         router.navigate('bookPage', {silent: true, trigger: true});
    }



    navigateSilentlyToBookPage: function() {
         router.navigate('bookPage', {silent: true, trigger: true});
    }



    example: function(router) {
        var newCounter =  this.model.get('counter') + 1;
        this.model.set('counter', newCounter);
        this.model.save();

        this.siblingView.model = this.model;
        this.siblingView.render();

        var url = this.url();
        router.navigate(url, {silent: true, trigger: false});
    }



    incrementCounterAndSave: function() {
        var newCounter =  this.model.get('counter') + 1;
        this.model.set('counter',newCounter);
        this.model.save();
    },
    updateAndRenderSiblingView: function() {
        this.siblingView.model = this.model;
        this.siblingView.render();
    },
    refreshURL: function(router) {
        var url = this.url();
        router.navigate(url, {silent: true, trigger: false});
    },
    updateCounterAndRefresh: function(router) {
        this.incrementAndSaveCounter();
        this.updateAndRenderSiblingView();
        this.refreshURL(router);
    }