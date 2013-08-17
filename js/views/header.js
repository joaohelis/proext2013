window.HeaderView = Backbone.View.extend({

    initialize: function () {
        console.log('Initializing Header View');       
        this.render();        
    },

    events: {
        "click .dropdown-menu li" : "unselectMenuItem"
    },
    
    render: function () {                
        $(this.el).html(this.template());                                                                    
        return this;
    },    

    selectMenuItem: function (menuItem) {        
        $('.nav li').removeClass('active');
        if (menuItem) {
            $('.' + menuItem).addClass('active');
        }
    },

    unselectMenuItem: function (menuItem) {                
        $('.nav li').removeClass('active');
    }
});