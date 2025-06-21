var wms_layers = [];


        var lyr_SwissFederalGeoportalNationalMapColor_0 = new ol.layer.Tile({
            'title': 'SwissFederalGeoportal.NationalMapColor',
            'opacity': 0.660000,
            
            
            source: new ol.source.XYZ({
            attributions: ' &nbsp &middot; <a href="https://www.swisstopo.admin.ch/">© swisstopo</a>',
                url: 'https://wmts.geo.admin.ch/1.0.0/ch.swisstopo.pixelkarte-farbe/default/current/3857/{z}/{x}/{y}.jpeg'
            })
        });
var format_ChopfholzLager_1 = new ol.format.GeoJSON();
var features_ChopfholzLager_1 = format_ChopfholzLager_1.readFeatures(json_ChopfholzLager_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_ChopfholzLager_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ChopfholzLager_1.addFeatures(features_ChopfholzLager_1);
var lyr_ChopfholzLager_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ChopfholzLager_1, 
                style: style_ChopfholzLager_1,
                popuplayertitle: 'Chopfholz Lager',
                interactive: true,
                title: '<img src="styles/legend/ChopfholzLager_1.png" /> Chopfholz Lager'
            });
var format_AnzahlLager_2 = new ol.format.GeoJSON();
var features_AnzahlLager_2 = format_AnzahlLager_2.readFeatures(json_AnzahlLager_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_AnzahlLager_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_AnzahlLager_2.addFeatures(features_AnzahlLager_2);
var lyr_AnzahlLager_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_AnzahlLager_2, 
                style: style_AnzahlLager_2,
                popuplayertitle: 'Anzahl Lager',
                interactive: true,
                title: 'Anzahl Lager'
            });

lyr_SwissFederalGeoportalNationalMapColor_0.setVisible(true);lyr_ChopfholzLager_1.setVisible(true);lyr_AnzahlLager_2.setVisible(true);
var layersList = [lyr_SwissFederalGeoportalNationalMapColor_0,lyr_ChopfholzLager_1,lyr_AnzahlLager_2];
lyr_ChopfholzLager_1.set('fieldAliases', {'Jahr': 'Jahr', 'Lagerart': 'Lagerart', 'Stamm': 'Stamm', 'Koordinaten X': 'Koordinaten X', 'Koordinaten Y': 'Koordinaten Y', 'Dorf': 'Dorf', 'Kanton': 'Kanton', 'Thema': 'Thema', 'field_9': 'field_9', 'field_10': 'field_10', 'field_11': 'field_11', });
lyr_AnzahlLager_2.set('fieldAliases', {'Jahr': 'Jahr', 'Lagerart': 'Lagerart', 'Stamm': 'Stamm', 'Koordinaten X': 'Koordinaten X', 'Koordinaten Y': 'Koordinaten Y', 'Dorf': 'Dorf', 'Kanton': 'Kanton', 'Thema': 'Thema', 'field_9': 'field_9', 'field_10': 'field_10', 'field_11': 'field_11', });
lyr_ChopfholzLager_1.set('fieldImages', {'Jahr': 'Range', 'Lagerart': 'TextEdit', 'Stamm': 'TextEdit', 'Koordinaten X': 'Range', 'Koordinaten Y': 'Range', 'Dorf': 'TextEdit', 'Kanton': 'TextEdit', 'Thema': 'TextEdit', 'field_9': 'TextEdit', 'field_10': 'TextEdit', 'field_11': 'TextEdit', });
lyr_AnzahlLager_2.set('fieldImages', {'Jahr': 'Range', 'Lagerart': 'TextEdit', 'Stamm': 'TextEdit', 'Koordinaten X': 'Range', 'Koordinaten Y': 'Range', 'Dorf': 'TextEdit', 'Kanton': 'TextEdit', 'Thema': 'TextEdit', 'field_9': 'TextEdit', 'field_10': 'TextEdit', 'field_11': 'TextEdit', });
lyr_ChopfholzLager_1.set('fieldLabels', {'Jahr': 'inline label - visible with data', 'Lagerart': 'inline label - visible with data', 'Stamm': 'inline label - visible with data', 'Koordinaten X': 'hidden field', 'Koordinaten Y': 'hidden field', 'Dorf': 'inline label - visible with data', 'Kanton': 'inline label - visible with data', 'Thema': 'inline label - visible with data', 'field_9': 'hidden field', 'field_10': 'hidden field', 'field_11': 'hidden field', });
lyr_AnzahlLager_2.set('fieldLabels', {'Jahr': 'hidden field', 'Lagerart': 'hidden field', 'Stamm': 'hidden field', 'Koordinaten X': 'hidden field', 'Koordinaten Y': 'hidden field', 'Dorf': 'hidden field', 'Kanton': 'hidden field', 'Thema': 'hidden field', 'field_9': 'hidden field', 'field_10': 'hidden field', 'field_11': 'hidden field', });
lyr_AnzahlLager_2.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});