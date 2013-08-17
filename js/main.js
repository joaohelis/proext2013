var AppRouter = Backbone.Router.extend({

    routes: {
        ""                       : "home",
        "resumo"			     : "summary",
        "equipe"			     : "team",
        "objetivos"		         : "objectives",
        "contato"			     : "contact",
        "localderealizacao"      : "implementationlocals",
        "fotos/:id"              : "photos",        
        "artesanato"             : "handicraft",
        "artesanato/:id"         : "handicraft",
        "apicultura"             : "apiculture",
        "apicultura/:id"         : "apiculture",
        "plantas-medicinais"     : "medicinalplants",
        "plantas-medicinais/:id" : "medicinalplants",
        "feiras"                 : "fairs",
        "feiras/:id"             : "fairs",
        "test"                   : "test"
    },

    initialize: function(){
    	this.headerView = new HeaderView();
		$('.header').html(this.headerView.el);    	
        this.headerView.selectMenuItem();
    },

    handicraft: function(){
        $('#content').html(new HandicraftView().el);                                                                                  
    },

    handicraft: function(id){
        var handicraft = new HandicraftView();
        $('#content').html(handicraft.el);   
        switch(id) {                                    
            case "problematica":
                handicraft.selectMenuItem("problematic");
                $("#handicraft-content").html(new HandicraftProblematicView().el);
                break;                
            case "como-chegar":
                handicraft.selectMenuItem("how-to-get");
                $("#handicraft-content").html(new HandicraftHowToGetView().el);
                break;      
        }                                                                               
    },

    apiculture: function(){        
        $('#content').html(new ApicultureView().el);  
    },    

    apiculture: function(id){
        $('#content').html(new ApicultureView().el);
        switch(id) {                                    
            case "problematica":
                utils.selectMenuItem("problematic");
                $("#apiculture-content").html(new ApicultureProblematicView().el);
                break;                            
        }                                                                               
    },

    medicinalplants: function(){
        $('#content').html(new MedicinalPlantsView().el);
    },

    medicinalplants: function(id){
        $('#content').html(new MedicinalPlantsView().el);
        switch(id) {                                    
            case "problematica":
                utils.selectMenuItem("problematic");
                $("#medicinal-plants-content").html(new MedicinalPlantsProblematicView().el);
                break;                            
        }                                                                               
    },

    fairs: function(){
        $('#content').html(new FairsView().el);
    },

    fairs: function(id){
        $('#content').html(new FairsView().el);        
        switch(id) {                                    
            case "problematica":
                utils.selectMenuItem("problematic");
                $("#fairs-content").html(new FairsProblematicView().el);
                break;                
            case "como-chegar":
                utils.selectMenuItem("how-to-get");
                $("#fairs-content").html(new FairsHowToGetView().el);
                break;      
        }                                                                               
    },

    home: function(){
        $('#content').html(new HomeView().render().el);                                         
        $('.carousel').carousel();
        this.headerView.selectMenuItem("home");
    },

    summary: function(){
    	$('#content').html(new SummaryView().render().el);                                         
        this.headerView.selectMenuItem("summary");
    },

    team: function(){
    	$('#content').html(new TeamView().render().el);                                         
        this.headerView.selectMenuItem();
       this.headerView.selectMenuItem("team"); 
    },

    objectives: function(){
    	$('#content').html(new ObjectivesView().render().el);                                         
        this.headerView.selectMenuItem();
        this.headerView.selectMenuItem("objectives");
    },

    contact: function(){
    	$('#content').html(new ContactView().render().el);                                         
        this.headerView.selectMenuItem("contact");        
    },

    implementationlocals: function(){
        $('#content').html(new ImplementationLocalsView().render().el);                                                         
        this.headerView.selectMenuItem("implementationlocals");
        $('#artesanato').attr("class","active");
    },

    photos: function(id){
        this.headerView.selectMenuItem("photos");        
        var photosView = new PhotosView();
        $('#content').html(photosView.el);                  
        switch(id) {
            case "artesanato":                   
                photosView.selectMenuItem("handicraft");
                $("#photo-content").html(new HandicraftPhotoView().el);                
                break;
            case "feiras":                
                photosView.selectMenuItem("fairs");
                $("#photo-content").html(new FairsPhotoView().el);
                break;
            case "apicultura":                
                photosView.selectMenuItem("apiculture");
                $("#photo-content").html(new ApiculturePhotoView().el);
                break;
            case "plantas-medicinais":                
                photosView.selectMenuItem("medicinalplants");
                $("#photo-content").html(new MedicinalPlantsPhotoView().el);                
                break;
        }                
    },

    test: function(){
        var testView = new TestView();
        $('#content').html(testView.el);    
        testView.mapInitialize();
    }
});

utils.loadTemplate(['HeaderView', 'HomeView', 'SummaryView', 
                    'TeamView', 'ObjectivesView', 'ContactView',
                    'ImplementationLocalsView', 'PhotosView', 'TestView', 
                    'HandicraftPhotoView', 'FairsPhotoView', 'ApiculturePhotoView',
                    'MedicinalPlantsPhotoView','ApicultureView', 'HandicraftView',
                    'FairsView','MedicinalPlantsView',"HandicraftProblematicView",
                    "HandicraftHowToGetView", "ApicultureProblematicView",
                    "FairsProblematicView","FairsHowToGetView","MedicinalPlantsProblematicView"], function() {
    app = new AppRouter();
    Backbone.history.start();
});


