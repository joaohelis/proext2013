window.utils = {
    
    // Asynchronously load templates located in separate .html files
    loadTemplate: function(views, callback) {

        var deferreds = [];

        $.each(views, function(index, view) {
            if (window[view]) {
                deferreds.push($.get('tpl/' + view + '.html', function(data) {
                    window[view].prototype.template = _.template(data);
                }));
            } else {
                alert(view + " not found");
            }
        });

        $.when.apply(null, deferreds).done(callback);
    },

    selectMenuItem: function (menuItem) {        
        $('.nav li').removeClass('active');
        if (menuItem) {
            $('.' + menuItem).addClass('active');
        }
    },

    mapMarker: function(markers, map){     
        for(var i = 0; i < markers.length; i++){
            var auxMarker = markers[i];            
            auxMarker.map = map;            
            var marker = new google.maps.Marker(auxMarker);                   
            this.setInfoWindow(marker);
        }        
    },

    setInfoWindow: function(marker){
        var infowindow = new google.maps.InfoWindow({
            content: marker.infoWindowContent
        });                        
        google.maps.event.addListener(marker, 'click', function() {                                
            infowindow.open(marker.get('map'), marker);
        });
    }
};
