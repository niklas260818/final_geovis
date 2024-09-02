var wms_layers = [];


        var lyr_OpenStreetMap_0 = new ol.layer.Tile({
            'title': 'OpenStreetMap',
            //'type': 'base',
            'opacity': 0.729000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'https://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format_UrbanRuralTypologie_1 = new ol.format.GeoJSON();
var features_UrbanRuralTypologie_1 = format_UrbanRuralTypologie_1.readFeatures(json_UrbanRuralTypologie_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_UrbanRuralTypologie_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_UrbanRuralTypologie_1.addFeatures(features_UrbanRuralTypologie_1);
var lyr_UrbanRuralTypologie_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_UrbanRuralTypologie_1, 
                style: style_UrbanRuralTypologie_1,
                popuplayertitle: "Urban-Rural Typologie",
                interactive: true,
    title: 'Urban-Rural Typologie<br />\
    <img src="styles/legend/UrbanRuralTypologie_1_0.png" /> Urbane Großzentren<br />\
    <img src="styles/legend/UrbanRuralTypologie_1_1.png" /> Urbane Mittelzentren<br />\
    <img src="styles/legend/UrbanRuralTypologie_1_2.png" /> Urbane Kleinzentren<br />\
    <img src="styles/legend/UrbanRuralTypologie_1_3.png" /> Regionale Zentren<br />\
    <img src="styles/legend/UrbanRuralTypologie_1_4.png" /> Ländlicher Raum im Umland von Zentren<br />\
    <img src="styles/legend/UrbanRuralTypologie_1_5.png" /> Ländlicher Raum<br />'
        });
var format_Wahlergebnisse2024inProzent_2 = new ol.format.GeoJSON();
var features_Wahlergebnisse2024inProzent_2 = format_Wahlergebnisse2024inProzent_2.readFeatures(json_Wahlergebnisse2024inProzent_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Wahlergebnisse2024inProzent_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Wahlergebnisse2024inProzent_2.addFeatures(features_Wahlergebnisse2024inProzent_2);
var lyr_Wahlergebnisse2024inProzent_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Wahlergebnisse2024inProzent_2, 
                style: style_Wahlergebnisse2024inProzent_2,
                popuplayertitle: "Wahlergebnisse 2024 in Prozent",
                interactive: true,
    title: 'Wahlergebnisse 2024 in Prozent<br />\
    <img src="styles/legend/Wahlergebnisse2024inProzent_2_0.png" /> FPÖ<br />\
    <img src="styles/legend/Wahlergebnisse2024inProzent_2_1.png" /> ÖVP<br />\
    <img src="styles/legend/Wahlergebnisse2024inProzent_2_2.png" /> SPÖ<br />'
        });
var format_A1Westautobahn_3 = new ol.format.GeoJSON();
var features_A1Westautobahn_3 = format_A1Westautobahn_3.readFeatures(json_A1Westautobahn_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_A1Westautobahn_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_A1Westautobahn_3.addFeatures(features_A1Westautobahn_3);
var lyr_A1Westautobahn_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_A1Westautobahn_3, 
                style: style_A1Westautobahn_3,
                popuplayertitle: "A1 Westautobahn",
                interactive: true,
                title: '<img src="styles/legend/A1Westautobahn_3.png" /> A1 Westautobahn'
            });

lyr_OpenStreetMap_0.setVisible(true);lyr_UrbanRuralTypologie_1.setVisible(true);lyr_Wahlergebnisse2024inProzent_2.setVisible(true);lyr_A1Westautobahn_3.setVisible(true);
var layersList = [lyr_OpenStreetMap_0,lyr_UrbanRuralTypologie_1,lyr_Wahlergebnisse2024inProzent_2,lyr_A1Westautobahn_3];
lyr_UrbanRuralTypologie_1.set('fieldAliases', {'PG': 'PG', 'PB': 'PB', 'BL': 'BL', 'urban_rura': 'urban_rura', 'ÖVP': 'ÖVP', 'SPÖ': 'SPÖ', 'FPÖ': 'FPÖ', 'Grüne': 'Grüne', 'NEOS': 'NEOS', 'DNA': 'DNA', 'KPÖ': 'KPÖ', 'Wahlsieger': 'Wahlsieger', });
lyr_Wahlergebnisse2024inProzent_2.set('fieldAliases', {'PG': 'PG', 'PB': 'PB', 'BL': 'BL', 'urban_rura': 'urban_rura', 'ÖVP': 'ÖVP', 'SPÖ': 'SPÖ', 'FPÖ': 'FPÖ', 'Grüne': 'Grüne', 'NEOS': 'NEOS', 'DNA': 'DNA', 'KPÖ': 'KPÖ', 'Wahlsieger': 'Wahlsieger', });
lyr_A1Westautobahn_3.set('fieldAliases', {'NAME1': 'NAME1', 'FROM_NODE': 'FROM_NODE', 'TO_NODE': 'TO_NODE', 'geom_Lengt': 'geom_Lengt', });
lyr_UrbanRuralTypologie_1.set('fieldImages', {'PG': 'TextEdit', 'PB': 'TextEdit', 'BL': 'TextEdit', 'urban_rura': 'Range', 'ÖVP': 'TextEdit', 'SPÖ': 'TextEdit', 'FPÖ': 'TextEdit', 'Grüne': 'TextEdit', 'NEOS': 'TextEdit', 'DNA': 'TextEdit', 'KPÖ': 'TextEdit', 'Wahlsieger': 'TextEdit', });
lyr_Wahlergebnisse2024inProzent_2.set('fieldImages', {'PG': 'TextEdit', 'PB': 'TextEdit', 'BL': 'TextEdit', 'urban_rura': 'TextEdit', 'ÖVP': 'TextEdit', 'SPÖ': 'TextEdit', 'FPÖ': 'TextEdit', 'Grüne': 'TextEdit', 'NEOS': 'TextEdit', 'DNA': 'TextEdit', 'KPÖ': 'TextEdit', 'Wahlsieger': 'TextEdit', });
lyr_A1Westautobahn_3.set('fieldImages', {'NAME1': 'TextEdit', 'FROM_NODE': 'TextEdit', 'TO_NODE': 'TextEdit', 'geom_Lengt': 'TextEdit', });
lyr_UrbanRuralTypologie_1.set('fieldLabels', {'PG': 'no label', 'PB': 'no label', 'BL': 'no label', 'urban_rura': 'hidden field', 'ÖVP': 'hidden field', 'SPÖ': 'hidden field', 'FPÖ': 'hidden field', 'Grüne': 'hidden field', 'NEOS': 'hidden field', 'DNA': 'hidden field', 'KPÖ': 'hidden field', 'Wahlsieger': 'hidden field', });
lyr_Wahlergebnisse2024inProzent_2.set('fieldLabels', {'PG': 'no label', 'PB': 'no label', 'BL': 'no label', 'urban_rura': 'hidden field', 'ÖVP': 'inline label - always visible', 'SPÖ': 'inline label - always visible', 'FPÖ': 'inline label - always visible', 'Grüne': 'inline label - always visible', 'NEOS': 'inline label - always visible', 'DNA': 'inline label - always visible', 'KPÖ': 'inline label - always visible', 'Wahlsieger': 'inline label - always visible', });
lyr_A1Westautobahn_3.set('fieldLabels', {'NAME1': 'no label', 'FROM_NODE': 'no label', 'TO_NODE': 'no label', 'geom_Lengt': 'no label', });
lyr_A1Westautobahn_3.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});