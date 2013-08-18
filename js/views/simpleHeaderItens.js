window.HomeView = Backbone.View.extend({

    initialize: function () {
    	console.log('Initializing Home View');    
        this.render();
    },

    render: function () {
        $(this.el).html(this.template());                
        return this;
    },
});

window.SummaryView = Backbone.View.extend({

    initialize: function () {
    	console.log('Initializing Summary View');    
        this.render(); 
    },

    render: function () {
        $(this.el).html(this.template());        
        return this;
    },
});

window.TeamView = Backbone.View.extend({

    initialize: function () {
    	console.log('Initializing Team View');    
        this.render();
    },

    render: function () {
        $(this.el).html(this.template());        
        return this;
    },
});

window.ObjectivesView = Backbone.View.extend({

    initialize: function () {
    	console.log('Initializing Objectives View');    
        this.render();
    },

    render: function () {
        $(this.el).html(this.template());        
        return this;
    },
});

window.ContactView = Backbone.View.extend({

    initialize: function () {
    	console.log('Initializing Objectives View');    
        this.render();
    },

    render: function () {
        $(this.el).html(this.template());        
        return this;
    },
});

window.ImplementationLocalsView = Backbone.View.extend({

    initialize: function () {
        console.log('Initializing Implementation Locals View');    
        this.render();
    },

    render: function () {
        $(this.el).html(this.template());        
        return this;
    },
});

window.PhotosView = Backbone.View.extend({

    initialize: function () {
        console.log('Initializing Implementation Locals View');    
        this.render();
    },   

    render: function () {
        $(this.el).html(this.template());        
        return this;
    },

    selectMenuItem: function (menuItem) {                
        $('.nav-tabs li').removeClass('active');
        if (menuItem) {
            $('.' + menuItem).addClass('active');
        }
    }
});

window.TestView = Backbone.View.extend({

    initialize: function () {
        console.log('Initializing Test View');                    
        this.render();        
    },

    render: function () {
        $(this.el).html(this.template());                                                        
        return this;
    },    

    mapInitialize: function () {

          var myLatlng = new google.maps.LatLng(-6.659543, -34.961884);
        
          var mapOptions = {
            zoom: 14,
            center: myLatlng,
            mapTypeId: google.maps.MapTypeId.HYBRID
          }

          var map = new google.maps.Map(document.getElementById('googleMap'), mapOptions);                

          var markersInfo = [
            {
                position: new google.maps.LatLng(-6.658443, -34.967238),
                title: 'Aldeia Galego - Artesanato Indígena',               
                infoWindowContent: "<p><b>Anselmo Potiguara</b><br>Aldeia Galego</p>"
            }, 

            {
                position: new google.maps.LatLng(-6.677881,-34.950570),
                title: 'João Helis Junior',                
                infoWindowContent: "<p><b>João Helis Junior de Azevedo Bernardo</b><br>Baía da Traição<br>twitter.com/joaohelis</p>"                
            },

            {
                position: new google.maps.LatLng(-6.659543, -34.961884),
                title: 'Pajé Antonio',                
                infoWindowContent: "<p><b>Pajé Antonio</b><br>Aldeia Galego</p>"                
            },

            {
                position: new google.maps.LatLng(-6.650991, -34.984090),
                title: 'Junior Potiguara',                
                infoWindowContent: "<p><b>Junior Potiguara</b><br>Aldeia São Francisco</p>"                
            },

            {
                position: new google.maps.LatLng(-6.672142, -34.953644),
                title: 'Iremar Potiguara',                
                infoWindowContent: "<p><b>Iremar Potiguara</b><br>Aldeia Forte</p>"                
            },
            
            {
                position: new google.maps.LatLng(-6.603817, -34.969249),
                title: 'Exposição do artesanato Indígena',                
                infoWindowContent: "<p><b>Exposição do artesanato Indígena</b><br>Barra de Camaratuba</p>"                
            },

            {
                position: new google.maps.LatLng(-6.603817, -34.969249),
                title: 'Artefatos de caracterização para a dança do Toré',                
                infoWindowContent: "<p><b>Artefatos de caracterização para a dança do Toré</b><br>Morrinho, Baía da Traição - PB<br>Zuleide Potiguara</p>"                
            },

            {
                position: new google.maps.LatLng(-6.668281, -34.955559),
                title: 'Chico Potiguara',
                infoWindowContent: "<p><b>Chico Potiguara</b><br>Aldeia Forte</p>"                
            },

            {
                position: new google.maps.LatLng(-6.603817, -34.969249),
                title: 'Exposição do artesanato Indígena',
                infoWindowContent: "<p><b>Exposição do artesanato Indígena</b><br>Barra de Camaratuba</p>"
            }
          ];                  

          utils.mapMarker(markersInfo, map);

          google.maps.event.addDomListener(window, 'load');
    }
});

window.ApiculturePhotoView = Backbone.View.extend({

    initialize: function () {
        console.log('Initializing ApiculturePhotoView View');    
        this.render();
    },

    render: function () {
        $(this.el).html(this.template());        
        return this;
    },
});

window.FairsPhotoView = Backbone.View.extend({

    initialize: function () {
        console.log('Initializing FairsPhotoView View');    
        this.render();
    },

    render: function () {
        $(this.el).html(this.template());        
        return this;
    },
});

window.HandicraftPhotoView = Backbone.View.extend({

    initialize: function () {
        console.log('Initializing HandicraftPhotoView View');    
        this.render();
    },

    render: function () {
        $(this.el).html(this.template());        
        return this;
    },
});

window.MedicinalPlantsPhotoView = Backbone.View.extend({

    initialize: function () {
        console.log('Initializing MedicinalPlantsPhotoView View');    
        this.render();
    },

    render: function () {
        $(this.el).html(this.template());        
        return this;
    },
});

window.ApicultureView = Backbone.View.extend({

    initialize: function () {
        console.log('Initializing Apiculture View');    
        this.render();
    },

    render: function () {
        $(this.el).html(this.template());        
        return this;
    },
});

window.HandicraftView = Backbone.View.extend({

    initialize: function () {
        console.log('Initializing Handicraft View');    
        this.render();
    },

    render: function () {
        $(this.el).html(this.template());        
        return this;
    },

    selectMenuItem: function (menuItem) {
        utils.selectMenuItem(menuItem);
    }
});

window.MedicinalPlantsView = Backbone.View.extend({

    initialize: function () {
        console.log('Initializing Medicinal Plants View');    
        this.render();
    },

    render: function () {
        $(this.el).html(this.template());        
        return this;
    },
});

window.FairsView = Backbone.View.extend({

    initialize: function () {
        console.log('Initializing Fairs View');    
        this.render();
    },

    render: function () {
        $(this.el).html(this.template());        
        return this;
    },
});

window.HandicraftProblematicView = Backbone.View.extend({

    initialize: function () {
        console.log('Initializing HandicraftProblematicView View');    
        this.render();
    },

    render: function () {
        $(this.el).html(this.template());        
        return this;
    },
});

window.HandicraftHowToGetView = Backbone.View.extend({

    initialize: function () {
        console.log('Initializing HandicraftHowToGetView View');    
        this.render();
    },

    render: function () {
        $(this.el).html(this.template());        
        return this;
    },
});

window.ApicultureProblematicView = Backbone.View.extend({

    initialize: function () {
        console.log('Initializing ApicultureProblematicView View');    
        this.render();
    },

    render: function () {
        $(this.el).html(this.template());        
        return this;
    },
});

window.FairsProblematicView = Backbone.View.extend({

    initialize: function () {
        console.log('Initializing FairsProblematicView View');    
        this.render();
    },

    render: function () {
        $(this.el).html(this.template());        
        return this;
    },
});

window.FairsHowToGetView = Backbone.View.extend({

    initialize: function () {
        console.log('Initializing FairsHowToGetView View');    
        this.render();
    },

    render: function () {
        $(this.el).html(this.template());        
        return this;
    },
});

window.MedicinalPlantsProblematicView = Backbone.View.extend({

    initialize: function () {
        console.log('Initializing MedicinalPlantsProblematicView');    
        this.render();
    },

    render: function () {
        $(this.el).html(this.template());        
        return this;
    },
});