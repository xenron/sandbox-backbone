var NormalRouter = Backbone.Router({
     routes: {
        // routes for all users would go here
    }
});
var AdminRouter = Backbone.Router({
     routes: {
        // routes for admin users only would go here
    }
});
new NormalRouter();
if (user.get('isAdmin')) {
    new AdminRouter();
}