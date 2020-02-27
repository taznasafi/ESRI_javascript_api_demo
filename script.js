require([
    "esri/Map",
    "esri/views/MapView",
    'esri/layers/FeatureLayer',
    'esri/layers/VectorTileLayer'
  ], function(Map, MapView, FeatureLayer, VectorTileLayer) {

      

        const map = new Map({
            basemap: "gray-vector",
        });

        const view = new MapView({
            container: "viewDiv",
            map: map,
            center: [-86.1752, 32.2077],
            zoom: 6
        });

        const testedGridCells = new FeatureLayer({
            // fcc's tested grid cell
            url: "https://services.arcgis.com/YnOQrIGdN9JGtBh4/arcgis/rest/services/Staff_Tested_Grid_Cells/FeatureServer",
            outFields: ["*"],
            popupTemplate:{ //DEMO popup
                title: "State FIPS: {STATE_FIPS}",
                content: "The state FIPS is {STATE_FIPS}."
                }
            });


        const VerizonNetworkCoverage = new VectorTileLayer({
            url:"https://tiles.arcgis.com/tiles/YnOQrIGdN9JGtBh4/arcgis/rest/services/Verizon_Dec_2017_Form_477/VectorTileServer"
        });
                 

      view.when(function() {
          map.add(testedGridCells,0)
          map.add(VerizonNetworkCoverage,0);
      });
     
  });