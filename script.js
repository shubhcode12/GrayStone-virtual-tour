(function(){
    var script = {
 "start": "this.init()",
 "horizontalAlign": "left",
 "scrollBarOpacity": 0.5,
 "id": "rootPlayer",
 "children": [
  "this.MainViewer",
  "this.veilPopupPanorama",
  "this.zoomImagePopupPanorama",
  "this.closeButtonPopupPanorama"
 ],
 "scrollBarVisible": "rollOver",
 "overflow": "visible",
 "width": "100%",
 "scrollBarMargin": 2,
 "borderRadius": 0,
 "paddingLeft": 0,
 "paddingRight": 0,
 "propagateClick": false,
 "minHeight": 20,
 "scrollBarWidth": 10,
 "desktopMipmappingEnabled": false,
 "mobileMipmappingEnabled": false,
 "vrPolyfillScale": 1,
 "verticalAlign": "top",
 "minWidth": 20,
 "layout": "absolute",
 "definitions": [{
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": -151.95,
  "pitch": 0
 },
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "id": "camera_22B6BA93_334D_44BF_41C0_C9101687D644"
},
{
 "frames": [
  {
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_24964DBD_2EC8_65F3_4186_70DC22D46559_0/d/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "colCount": 4,
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_24964DBD_2EC8_65F3_4186_70DC22D46559_0/d/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_24964DBD_2EC8_65F3_4186_70DC22D46559_0/d/2/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "front": {
    "levels": [
     {
      "url": "media/panorama_24964DBD_2EC8_65F3_4186_70DC22D46559_0/f/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "colCount": 4,
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_24964DBD_2EC8_65F3_4186_70DC22D46559_0/f/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_24964DBD_2EC8_65F3_4186_70DC22D46559_0/f/2/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_24964DBD_2EC8_65F3_4186_70DC22D46559_0/u/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "colCount": 4,
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_24964DBD_2EC8_65F3_4186_70DC22D46559_0/u/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_24964DBD_2EC8_65F3_4186_70DC22D46559_0/u/2/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_24964DBD_2EC8_65F3_4186_70DC22D46559_0/b/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "colCount": 4,
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_24964DBD_2EC8_65F3_4186_70DC22D46559_0/b/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_24964DBD_2EC8_65F3_4186_70DC22D46559_0/b/2/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "thumbnailUrl": "media/panorama_24964DBD_2EC8_65F3_4186_70DC22D46559_t.jpg",
   "class": "CubicPanoramaFrame",
   "left": {
    "levels": [
     {
      "url": "media/panorama_24964DBD_2EC8_65F3_4186_70DC22D46559_0/l/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "colCount": 4,
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_24964DBD_2EC8_65F3_4186_70DC22D46559_0/l/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_24964DBD_2EC8_65F3_4186_70DC22D46559_0/l/2/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_24964DBD_2EC8_65F3_4186_70DC22D46559_0/r/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "colCount": 4,
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_24964DBD_2EC8_65F3_4186_70DC22D46559_0/r/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_24964DBD_2EC8_65F3_4186_70DC22D46559_0/r/2/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   }
  }
 ],
 "label": "02",
 "hfovMin": "150%",
 "id": "panorama_24964DBD_2EC8_65F3_4186_70DC22D46559",
 "class": "Panorama",
 "overlays": [
  "this.overlay_23216309_2EC8_5E90_41AD_FB4D8840DA61",
  "this.overlay_21DC36BF_2EF8_27F0_41A8_9C65BEB46244",
  "this.overlay_20EFCD4A_3241_C2F9_41B4_33138BCAF8EB",
  "this.popup_262D6EC2_3246_5FE9_41C3_06D1DF8822D6",
  "this.panorama_24964DBD_2EC8_65F3_4186_70DC22D46559_tcap0"
 ],
 "partial": false,
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "yaw": 84.32,
   "distance": 1,
   "backwardYaw": 177.53,
   "panorama": "this.panorama_24BBDBE9_2EC8_2D93_41C4_423B1CECBEC0"
  },
  {
   "class": "AdjacentPanorama",
   "yaw": -177.2,
   "distance": 1,
   "backwardYaw": -3.35,
   "panorama": "this.panorama_3E97576C_3242_4EB9_41C5_DA8FE202B423"
  }
 ],
 "hfov": 360,
 "pitch": 0,
 "vfov": 180,
 "thumbnailUrl": "media/panorama_24964DBD_2EC8_65F3_4186_70DC22D46559_t.jpg",
 "hfovMax": 130
},
{
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": -92.91,
  "pitch": 0
 },
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "id": "camera_210E0B3F_334D_45E7_41B8_E82C1E6F71E4"
},
{
 "frames": [
  {
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_2493764E_2EC8_2690_4195_080B59CD09C9_0/d/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "colCount": 4,
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_2493764E_2EC8_2690_4195_080B59CD09C9_0/d/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_2493764E_2EC8_2690_4195_080B59CD09C9_0/d/2/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "front": {
    "levels": [
     {
      "url": "media/panorama_2493764E_2EC8_2690_4195_080B59CD09C9_0/f/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "colCount": 4,
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_2493764E_2EC8_2690_4195_080B59CD09C9_0/f/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_2493764E_2EC8_2690_4195_080B59CD09C9_0/f/2/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_2493764E_2EC8_2690_4195_080B59CD09C9_0/u/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "colCount": 4,
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_2493764E_2EC8_2690_4195_080B59CD09C9_0/u/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_2493764E_2EC8_2690_4195_080B59CD09C9_0/u/2/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_2493764E_2EC8_2690_4195_080B59CD09C9_0/b/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "colCount": 4,
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_2493764E_2EC8_2690_4195_080B59CD09C9_0/b/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_2493764E_2EC8_2690_4195_080B59CD09C9_0/b/2/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "thumbnailUrl": "media/panorama_2493764E_2EC8_2690_4195_080B59CD09C9_t.jpg",
   "class": "CubicPanoramaFrame",
   "left": {
    "levels": [
     {
      "url": "media/panorama_2493764E_2EC8_2690_4195_080B59CD09C9_0/l/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "colCount": 4,
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_2493764E_2EC8_2690_4195_080B59CD09C9_0/l/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_2493764E_2EC8_2690_4195_080B59CD09C9_0/l/2/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_2493764E_2EC8_2690_4195_080B59CD09C9_0/r/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "colCount": 4,
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_2493764E_2EC8_2690_4195_080B59CD09C9_0/r/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_2493764E_2EC8_2690_4195_080B59CD09C9_0/r/2/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   }
  }
 ],
 "label": "18",
 "hfovMin": "150%",
 "id": "panorama_2493764E_2EC8_2690_4195_080B59CD09C9",
 "class": "Panorama",
 "overlays": [
  "this.overlay_275C53C1_3202_2E44_41C5_E61DBFE4C430",
  "this.overlay_24D39D8B_3202_5AC4_41BF_10685A9AAF12",
  "this.overlay_25C34E5B_3203_D644_41B5_157689F4A30E",
  "this.panorama_2493764E_2EC8_2690_4195_080B59CD09C9_tcap0"
 ],
 "partial": false,
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "yaw": -170.92,
   "distance": 1,
   "backwardYaw": 4.43,
   "panorama": "this.panorama_2493DB03_2EC8_EE90_41B9_9A931BB034DA"
  },
  {
   "class": "AdjacentPanorama",
   "yaw": 96.63,
   "distance": 1,
   "backwardYaw": 69.37,
   "panorama": "this.panorama_24A663B9_2EC8_5DF0_4191_F365AEA11F48"
  },
  {
   "class": "AdjacentPanorama",
   "yaw": 28.05,
   "distance": 1,
   "backwardYaw": -175.94,
   "panorama": "this.panorama_24933CE7_2EC8_2B90_41B9_291ACC114124"
  }
 ],
 "hfov": 360,
 "pitch": 0,
 "vfov": 180,
 "thumbnailUrl": "media/panorama_2493764E_2EC8_2690_4195_080B59CD09C9_t.jpg",
 "hfovMax": 130
},
{
 "frames": [
  {
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_24BB926B_2EC8_3E90_41A8_84DA0AD93437_0/d/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "colCount": 4,
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_24BB926B_2EC8_3E90_41A8_84DA0AD93437_0/d/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_24BB926B_2EC8_3E90_41A8_84DA0AD93437_0/d/2/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "front": {
    "levels": [
     {
      "url": "media/panorama_24BB926B_2EC8_3E90_41A8_84DA0AD93437_0/f/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "colCount": 4,
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_24BB926B_2EC8_3E90_41A8_84DA0AD93437_0/f/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_24BB926B_2EC8_3E90_41A8_84DA0AD93437_0/f/2/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_24BB926B_2EC8_3E90_41A8_84DA0AD93437_0/u/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "colCount": 4,
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_24BB926B_2EC8_3E90_41A8_84DA0AD93437_0/u/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_24BB926B_2EC8_3E90_41A8_84DA0AD93437_0/u/2/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_24BB926B_2EC8_3E90_41A8_84DA0AD93437_0/b/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "colCount": 4,
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_24BB926B_2EC8_3E90_41A8_84DA0AD93437_0/b/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_24BB926B_2EC8_3E90_41A8_84DA0AD93437_0/b/2/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "thumbnailUrl": "media/panorama_24BB926B_2EC8_3E90_41A8_84DA0AD93437_t.jpg",
   "class": "CubicPanoramaFrame",
   "left": {
    "levels": [
     {
      "url": "media/panorama_24BB926B_2EC8_3E90_41A8_84DA0AD93437_0/l/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "colCount": 4,
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_24BB926B_2EC8_3E90_41A8_84DA0AD93437_0/l/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_24BB926B_2EC8_3E90_41A8_84DA0AD93437_0/l/2/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_24BB926B_2EC8_3E90_41A8_84DA0AD93437_0/r/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "colCount": 4,
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_24BB926B_2EC8_3E90_41A8_84DA0AD93437_0/r/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_24BB926B_2EC8_3E90_41A8_84DA0AD93437_0/r/2/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   }
  }
 ],
 "label": "13",
 "hfovMin": "150%",
 "id": "panorama_24BB926B_2EC8_3E90_41A8_84DA0AD93437",
 "class": "Panorama",
 "overlays": [
  "this.overlay_3D146198_3202_6AC4_41A3_FD95B4B68F6B",
  "this.overlay_23266DAD_3202_7ADC_41C5_5D0968CF5B78",
  "this.overlay_20FC0663_3206_D644_41BF_2F5CAC15B552",
  "this.overlay_20FA1370_3246_46A9_4188_7D00C6177FB8",
  "this.overlay_272307BE_32CE_CD98_41BF_DAD6A104FDA4",
  "this.overlay_241CD993_32C2_4268_41AD_7B54532FD815",
  "this.panorama_24BB926B_2EC8_3E90_41A8_84DA0AD93437_tcap0"
 ],
 "partial": false,
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "yaw": -172.93,
   "distance": 1,
   "backwardYaw": -151.83,
   "panorama": "this.panorama_24BBDBE9_2EC8_2D93_41C4_423B1CECBEC0"
  },
  {
   "class": "AdjacentPanorama",
   "yaw": 142.35,
   "distance": 1,
   "backwardYaw": -137.76,
   "panorama": "this.panorama_24BC5D9B_2EC8_25B0_41C4_5A196FBB4EBE"
  },
  {
   "class": "AdjacentPanorama",
   "yaw": 124.27,
   "distance": 1,
   "backwardYaw": -78.22,
   "panorama": "this.panorama_24935558_2EC8_5AB0_41C3_DD0CE36C4A12"
  },
  {
   "class": "AdjacentPanorama",
   "yaw": 80.3,
   "distance": 1,
   "backwardYaw": -116.91,
   "panorama": "this.panorama_2493A020_2EC8_DA90_41BE_1A6FAE68E849"
  }
 ],
 "hfov": 360,
 "pitch": 0,
 "vfov": 180,
 "thumbnailUrl": "media/panorama_24BB926B_2EC8_3E90_41A8_84DA0AD93437_t.jpg",
 "hfovMax": 130
},
{
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 7.07,
  "pitch": 0
 },
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "id": "camera_24D33738_334D_4DE9_41B2_62FA3B4BFBC1"
},
{
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": -94,
  "pitch": 0
 },
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "id": "camera_215A8B7E_334D_4468_41BE_A10884025D28"
},
{
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 69.88,
  "pitch": 0
 },
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "id": "camera_2B0917E4_334D_4C99_41C7_A4700FF3C118"
},
{
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 0,
  "pitch": 0
 },
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "id": "panorama_24BAB721_2EC9_E690_41C3_7C714E7A53B5_camera"
},
{
 "frames": [
  {
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_24BB09D8_2EC8_2DB0_41C5_DA73B4006188_0/d/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "colCount": 4,
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_24BB09D8_2EC8_2DB0_41C5_DA73B4006188_0/d/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_24BB09D8_2EC8_2DB0_41C5_DA73B4006188_0/d/2/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "front": {
    "levels": [
     {
      "url": "media/panorama_24BB09D8_2EC8_2DB0_41C5_DA73B4006188_0/f/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "colCount": 4,
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_24BB09D8_2EC8_2DB0_41C5_DA73B4006188_0/f/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_24BB09D8_2EC8_2DB0_41C5_DA73B4006188_0/f/2/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_24BB09D8_2EC8_2DB0_41C5_DA73B4006188_0/u/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "colCount": 4,
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_24BB09D8_2EC8_2DB0_41C5_DA73B4006188_0/u/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_24BB09D8_2EC8_2DB0_41C5_DA73B4006188_0/u/2/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_24BB09D8_2EC8_2DB0_41C5_DA73B4006188_0/b/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "colCount": 4,
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_24BB09D8_2EC8_2DB0_41C5_DA73B4006188_0/b/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_24BB09D8_2EC8_2DB0_41C5_DA73B4006188_0/b/2/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "thumbnailUrl": "media/panorama_24BB09D8_2EC8_2DB0_41C5_DA73B4006188_t.jpg",
   "class": "CubicPanoramaFrame",
   "left": {
    "levels": [
     {
      "url": "media/panorama_24BB09D8_2EC8_2DB0_41C5_DA73B4006188_0/l/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "colCount": 4,
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_24BB09D8_2EC8_2DB0_41C5_DA73B4006188_0/l/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_24BB09D8_2EC8_2DB0_41C5_DA73B4006188_0/l/2/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_24BB09D8_2EC8_2DB0_41C5_DA73B4006188_0/r/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "colCount": 4,
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_24BB09D8_2EC8_2DB0_41C5_DA73B4006188_0/r/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_24BB09D8_2EC8_2DB0_41C5_DA73B4006188_0/r/2/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   }
  }
 ],
 "label": "23",
 "hfovMin": "150%",
 "id": "panorama_24BB09D8_2EC8_2DB0_41C5_DA73B4006188",
 "class": "Panorama",
 "overlays": [
  "this.overlay_2828CF01_3203_D7C7_41C1_257AD7533CA1",
  "this.panorama_24BB09D8_2EC8_2DB0_41C5_DA73B4006188_tcap0"
 ],
 "partial": false,
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "yaw": -128.96,
   "distance": 1,
   "backwardYaw": -33.75,
   "panorama": "this.panorama_24933CE7_2EC8_2B90_41B9_291ACC114124"
  }
 ],
 "hfov": 360,
 "pitch": 0,
 "vfov": 180,
 "thumbnailUrl": "media/panorama_24BB09D8_2EC8_2DB0_41C5_DA73B4006188_t.jpg",
 "hfovMax": 130
},
{
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 0,
  "pitch": 0
 },
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "id": "panorama_24932127_2EC8_3A90_41BC_8D9A880CACCD_camera"
},
{
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": -133.86,
  "pitch": 0
 },
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "id": "camera_213BAB4F_334D_45A7_41C3_0CCB371DA193"
},
{
 "frames": [
  {
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_24BA736F_2EC9_DE90_41C5_F9EA6B0CA694_0/d/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "colCount": 4,
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_24BA736F_2EC9_DE90_41C5_F9EA6B0CA694_0/d/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_24BA736F_2EC9_DE90_41C5_F9EA6B0CA694_0/d/2/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "front": {
    "levels": [
     {
      "url": "media/panorama_24BA736F_2EC9_DE90_41C5_F9EA6B0CA694_0/f/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "colCount": 4,
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_24BA736F_2EC9_DE90_41C5_F9EA6B0CA694_0/f/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_24BA736F_2EC9_DE90_41C5_F9EA6B0CA694_0/f/2/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_24BA736F_2EC9_DE90_41C5_F9EA6B0CA694_0/u/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "colCount": 4,
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_24BA736F_2EC9_DE90_41C5_F9EA6B0CA694_0/u/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_24BA736F_2EC9_DE90_41C5_F9EA6B0CA694_0/u/2/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_24BA736F_2EC9_DE90_41C5_F9EA6B0CA694_0/b/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "colCount": 4,
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_24BA736F_2EC9_DE90_41C5_F9EA6B0CA694_0/b/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_24BA736F_2EC9_DE90_41C5_F9EA6B0CA694_0/b/2/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "thumbnailUrl": "media/panorama_24BA736F_2EC9_DE90_41C5_F9EA6B0CA694_t.jpg",
   "class": "CubicPanoramaFrame",
   "left": {
    "levels": [
     {
      "url": "media/panorama_24BA736F_2EC9_DE90_41C5_F9EA6B0CA694_0/l/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "colCount": 4,
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_24BA736F_2EC9_DE90_41C5_F9EA6B0CA694_0/l/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_24BA736F_2EC9_DE90_41C5_F9EA6B0CA694_0/l/2/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_24BA736F_2EC9_DE90_41C5_F9EA6B0CA694_0/r/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "colCount": 4,
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_24BA736F_2EC9_DE90_41C5_F9EA6B0CA694_0/r/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_24BA736F_2EC9_DE90_41C5_F9EA6B0CA694_0/r/2/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   }
  }
 ],
 "label": "07",
 "hfovMin": "150%",
 "id": "panorama_24BA736F_2EC9_DE90_41C5_F9EA6B0CA694",
 "class": "Panorama",
 "overlays": [
  "this.overlay_3C3B42C1_2ED7_DF90_41C2_8C89C25A3A2F",
  "this.overlay_3AFFC92C_2ED8_EA90_41A6_D04EB2B0E77F",
  "this.overlay_24DF76B5_32CE_4FAB_41C1_A170AA3F4C97",
  "this.overlay_24DF66B5_32CE_4FAB_417C_5B898845AF33",
  "this.overlay_24AB79D0_32C2_45E9_41BF_5291A2FE7F67",
  "this.overlay_2597F3C0_32C2_45E9_41BC_250DE6CF2E13",
  "this.panorama_24BA736F_2EC9_DE90_41C5_F9EA6B0CA694_tcap0"
 ],
 "partial": false,
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "yaw": -93.54,
   "distance": 1,
   "backwardYaw": -171.67,
   "panorama": "this.panorama_24932127_2EC8_3A90_41BC_8D9A880CACCD"
  },
  {
   "class": "AdjacentPanorama",
   "yaw": 168.48,
   "distance": 1,
   "backwardYaw": -4.36,
   "panorama": "this.panorama_24BBDBE9_2EC8_2D93_41C4_423B1CECBEC0"
  }
 ],
 "hfov": 360,
 "pitch": 0,
 "vfov": 180,
 "thumbnailUrl": "media/panorama_24BA736F_2EC9_DE90_41C5_F9EA6B0CA694_t.jpg",
 "hfovMax": 130
},
{
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 1.29,
  "pitch": 0
 },
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "id": "camera_228C0A84_334D_4498_41C7_B8FB5250A2FB"
},
{
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": -2.47,
  "pitch": 0
 },
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "id": "camera_24CE0767_334D_4C67_41C3_91A07EC0F734"
},
{
 "frames": [
  {
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_24B94D08_2EC8_EA90_41C1_6BFAE03E3E02_0/d/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "colCount": 4,
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_24B94D08_2EC8_EA90_41C1_6BFAE03E3E02_0/d/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_24B94D08_2EC8_EA90_41C1_6BFAE03E3E02_0/d/2/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "front": {
    "levels": [
     {
      "url": "media/panorama_24B94D08_2EC8_EA90_41C1_6BFAE03E3E02_0/f/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "colCount": 4,
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_24B94D08_2EC8_EA90_41C1_6BFAE03E3E02_0/f/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_24B94D08_2EC8_EA90_41C1_6BFAE03E3E02_0/f/2/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_24B94D08_2EC8_EA90_41C1_6BFAE03E3E02_0/u/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "colCount": 4,
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_24B94D08_2EC8_EA90_41C1_6BFAE03E3E02_0/u/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_24B94D08_2EC8_EA90_41C1_6BFAE03E3E02_0/u/2/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_24B94D08_2EC8_EA90_41C1_6BFAE03E3E02_0/b/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "colCount": 4,
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_24B94D08_2EC8_EA90_41C1_6BFAE03E3E02_0/b/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_24B94D08_2EC8_EA90_41C1_6BFAE03E3E02_0/b/2/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "thumbnailUrl": "media/panorama_24B94D08_2EC8_EA90_41C1_6BFAE03E3E02_t.jpg",
   "class": "CubicPanoramaFrame",
   "left": {
    "levels": [
     {
      "url": "media/panorama_24B94D08_2EC8_EA90_41C1_6BFAE03E3E02_0/l/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "colCount": 4,
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_24B94D08_2EC8_EA90_41C1_6BFAE03E3E02_0/l/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_24B94D08_2EC8_EA90_41C1_6BFAE03E3E02_0/l/2/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_24B94D08_2EC8_EA90_41C1_6BFAE03E3E02_0/r/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "colCount": 4,
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_24B94D08_2EC8_EA90_41C1_6BFAE03E3E02_0/r/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_24B94D08_2EC8_EA90_41C1_6BFAE03E3E02_0/r/2/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   }
  }
 ],
 "label": "15",
 "hfovMin": "150%",
 "id": "panorama_24B94D08_2EC8_EA90_41C1_6BFAE03E3E02",
 "class": "Panorama",
 "overlays": [
  "this.overlay_262CEFA0_3201_F6C5_4199_CCBCFA0E6ACE",
  "this.overlay_248C0BBB_3202_7E3B_41B5_66095B57A48F",
  "this.panorama_24B94D08_2EC8_EA90_41C1_6BFAE03E3E02_tcap0"
 ],
 "partial": false,
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "yaw": 175.2,
   "distance": 1,
   "backwardYaw": 12.22,
   "panorama": "this.panorama_24BC5D9B_2EC8_25B0_41C4_5A196FBB4EBE"
  },
  {
   "class": "AdjacentPanorama",
   "yaw": 86,
   "distance": 1,
   "backwardYaw": 98.39,
   "panorama": "this.panorama_2493DB03_2EC8_EE90_41B9_9A931BB034DA"
  }
 ],
 "hfov": 360,
 "pitch": 0,
 "vfov": 180,
 "thumbnailUrl": "media/panorama_24B94D08_2EC8_EA90_41C1_6BFAE03E3E02_t.jpg",
 "hfovMax": 130
},
{
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": -55.73,
  "pitch": 0
 },
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "id": "camera_22622A36_334D_47F8_41B6_C1EA5BD6DBFE"
},
{
 "levels": [
  {
   "url": "media/popup_2B17DDD9_32C2_7D9B_41C6_D7A3F846033D_0_0.jpg",
   "width": 6936,
   "class": "ImageResourceLevel",
   "height": 6936
  },
  {
   "url": "media/popup_2B17DDD9_32C2_7D9B_41C6_D7A3F846033D_0_1.jpg",
   "width": 4096,
   "class": "ImageResourceLevel",
   "height": 4096
  },
  {
   "url": "media/popup_2B17DDD9_32C2_7D9B_41C6_D7A3F846033D_0_2.jpg",
   "width": 2048,
   "class": "ImageResourceLevel",
   "height": 2048
  },
  {
   "url": "media/popup_2B17DDD9_32C2_7D9B_41C6_D7A3F846033D_0_3.jpg",
   "width": 1024,
   "class": "ImageResourceLevel",
   "height": 1024
  },
  {
   "url": "media/popup_2B17DDD9_32C2_7D9B_41C6_D7A3F846033D_0_4.jpg",
   "width": 512,
   "class": "ImageResourceLevel",
   "height": 512
  }
 ],
 "class": "ImageResource",
 "id": "ImageResource_28B77342_32C2_C6E9_41A3_1BF6F34C77F1"
},
{
 "frames": [
  {
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_2493DB03_2EC8_EE90_41B9_9A931BB034DA_0/d/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "colCount": 4,
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_2493DB03_2EC8_EE90_41B9_9A931BB034DA_0/d/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_2493DB03_2EC8_EE90_41B9_9A931BB034DA_0/d/2/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "front": {
    "levels": [
     {
      "url": "media/panorama_2493DB03_2EC8_EE90_41B9_9A931BB034DA_0/f/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "colCount": 4,
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_2493DB03_2EC8_EE90_41B9_9A931BB034DA_0/f/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_2493DB03_2EC8_EE90_41B9_9A931BB034DA_0/f/2/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_2493DB03_2EC8_EE90_41B9_9A931BB034DA_0/u/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "colCount": 4,
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_2493DB03_2EC8_EE90_41B9_9A931BB034DA_0/u/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_2493DB03_2EC8_EE90_41B9_9A931BB034DA_0/u/2/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_2493DB03_2EC8_EE90_41B9_9A931BB034DA_0/b/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "colCount": 4,
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_2493DB03_2EC8_EE90_41B9_9A931BB034DA_0/b/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_2493DB03_2EC8_EE90_41B9_9A931BB034DA_0/b/2/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "thumbnailUrl": "media/panorama_2493DB03_2EC8_EE90_41B9_9A931BB034DA_t.jpg",
   "class": "CubicPanoramaFrame",
   "left": {
    "levels": [
     {
      "url": "media/panorama_2493DB03_2EC8_EE90_41B9_9A931BB034DA_0/l/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "colCount": 4,
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_2493DB03_2EC8_EE90_41B9_9A931BB034DA_0/l/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_2493DB03_2EC8_EE90_41B9_9A931BB034DA_0/l/2/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_2493DB03_2EC8_EE90_41B9_9A931BB034DA_0/r/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "colCount": 4,
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_2493DB03_2EC8_EE90_41B9_9A931BB034DA_0/r/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_2493DB03_2EC8_EE90_41B9_9A931BB034DA_0/r/2/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   }
  }
 ],
 "label": "16",
 "hfovMin": "150%",
 "id": "panorama_2493DB03_2EC8_EE90_41B9_9A931BB034DA",
 "class": "Panorama",
 "overlays": [
  "this.overlay_27100AAB_323E_3EC4_4196_3C399AED8249",
  "this.overlay_2755C967_3202_DA4C_419D_4BAAB17A05A1",
  "this.panorama_2493DB03_2EC8_EE90_41B9_9A931BB034DA_tcap0"
 ],
 "partial": false,
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "yaw": 4.43,
   "distance": 1,
   "backwardYaw": -170.92,
   "panorama": "this.panorama_2493764E_2EC8_2690_4195_080B59CD09C9"
  },
  {
   "class": "AdjacentPanorama",
   "yaw": 98.39,
   "distance": 1,
   "backwardYaw": 86,
   "panorama": "this.panorama_24B94D08_2EC8_EA90_41C1_6BFAE03E3E02"
  }
 ],
 "hfov": 360,
 "pitch": 0,
 "vfov": 180,
 "thumbnailUrl": "media/panorama_2493DB03_2EC8_EE90_41B9_9A931BB034DA_t.jpg",
 "hfovMax": 130
},
{
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 111.08,
  "pitch": 0
 },
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "id": "camera_2BB808EE_334D_4468_41C7_D74FE0B86A36"
},
{
 "hideDuration": 500,
 "rotationX": 0,
 "yaw": -34.16,
 "rotationZ": 0,
 "showEasing": "cubic_in",
 "rotationY": 0,
 "showDuration": 500,
 "class": "PopupPanoramaOverlay",
 "popupMaxWidth": "50%",
 "popupDistance": 100,
 "popupMaxHeight": "50%",
 "id": "popup_2B17DDD9_32C2_7D9B_41C6_D7A3F846033D",
 "image": {
  "levels": [
   {
    "url": "media/popup_2B17DDD9_32C2_7D9B_41C6_D7A3F846033D_0_3.jpg",
    "width": 1024,
    "class": "ImageResourceLevel",
    "height": 1024
   }
  ],
  "class": "ImageResource"
 },
 "pitch": -13.53,
 "hideEasing": "cubic_out",
 "hfov": 13.31
},
{
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 82.69,
  "pitch": 0
 },
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "id": "camera_2B706871_334D_4478_41B3_1FBA4B8F2006"
},
{
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 42.24,
  "pitch": 0
 },
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "id": "camera_21113B10_334D_45B9_4182_9AB5BDDD2F61"
},
{
 "levels": [
  {
   "url": "media/popup_27E8545F_3242_4297_41C3_848B57B20C2C_0_0.jpg",
   "width": 6936,
   "class": "ImageResourceLevel",
   "height": 6936
  },
  {
   "url": "media/popup_27E8545F_3242_4297_41C3_848B57B20C2C_0_1.jpg",
   "width": 4096,
   "class": "ImageResourceLevel",
   "height": 4096
  },
  {
   "url": "media/popup_27E8545F_3242_4297_41C3_848B57B20C2C_0_2.jpg",
   "width": 2048,
   "class": "ImageResourceLevel",
   "height": 2048
  },
  {
   "url": "media/popup_27E8545F_3242_4297_41C3_848B57B20C2C_0_3.jpg",
   "width": 1024,
   "class": "ImageResourceLevel",
   "height": 1024
  },
  {
   "url": "media/popup_27E8545F_3242_4297_41C3_848B57B20C2C_0_4.jpg",
   "width": 512,
   "class": "ImageResourceLevel",
   "height": 512
  }
 ],
 "class": "ImageResource",
 "id": "ImageResource_28BE49FB_3246_459F_41B1_3367E00076D5"
},
{
 "levels": [
  {
   "url": "media/popup_262D6EC2_3246_5FE9_41C3_06D1DF8822D6_0_0.jpg",
   "width": 6936,
   "class": "ImageResourceLevel",
   "height": 6936
  },
  {
   "url": "media/popup_262D6EC2_3246_5FE9_41C3_06D1DF8822D6_0_1.jpg",
   "width": 4096,
   "class": "ImageResourceLevel",
   "height": 4096
  },
  {
   "url": "media/popup_262D6EC2_3246_5FE9_41C3_06D1DF8822D6_0_2.jpg",
   "width": 2048,
   "class": "ImageResourceLevel",
   "height": 2048
  },
  {
   "url": "media/popup_262D6EC2_3246_5FE9_41C3_06D1DF8822D6_0_3.jpg",
   "width": 1024,
   "class": "ImageResourceLevel",
   "height": 1024
  },
  {
   "url": "media/popup_262D6EC2_3246_5FE9_41C3_06D1DF8822D6_0_4.jpg",
   "width": 512,
   "class": "ImageResourceLevel",
   "height": 512
  }
 ],
 "class": "ImageResource",
 "id": "ImageResource_2419F235_3246_46AB_41C6_7A163F437608"
},
{
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": -175.57,
  "pitch": 0
 },
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "id": "camera_22D56AC2_334D_4499_41A6_C2619502B1FB"
},
{
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 51.04,
  "pitch": 0
 },
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "id": "camera_22986A65_334D_4798_41C5_A4EDD514280E"
},
{
 "frames": [
  {
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_3E97576C_3242_4EB9_41C5_DA8FE202B423_0/d/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "colCount": 4,
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_3E97576C_3242_4EB9_41C5_DA8FE202B423_0/d/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_3E97576C_3242_4EB9_41C5_DA8FE202B423_0/d/2/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "front": {
    "levels": [
     {
      "url": "media/panorama_3E97576C_3242_4EB9_41C5_DA8FE202B423_0/f/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "colCount": 4,
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_3E97576C_3242_4EB9_41C5_DA8FE202B423_0/f/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_3E97576C_3242_4EB9_41C5_DA8FE202B423_0/f/2/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_3E97576C_3242_4EB9_41C5_DA8FE202B423_0/u/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "colCount": 4,
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_3E97576C_3242_4EB9_41C5_DA8FE202B423_0/u/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_3E97576C_3242_4EB9_41C5_DA8FE202B423_0/u/2/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_3E97576C_3242_4EB9_41C5_DA8FE202B423_0/b/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "colCount": 4,
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_3E97576C_3242_4EB9_41C5_DA8FE202B423_0/b/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_3E97576C_3242_4EB9_41C5_DA8FE202B423_0/b/2/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "thumbnailUrl": "media/panorama_3E97576C_3242_4EB9_41C5_DA8FE202B423_t.jpg",
   "class": "CubicPanoramaFrame",
   "left": {
    "levels": [
     {
      "url": "media/panorama_3E97576C_3242_4EB9_41C5_DA8FE202B423_0/l/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "colCount": 4,
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_3E97576C_3242_4EB9_41C5_DA8FE202B423_0/l/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_3E97576C_3242_4EB9_41C5_DA8FE202B423_0/l/2/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_3E97576C_3242_4EB9_41C5_DA8FE202B423_0/r/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "colCount": 4,
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_3E97576C_3242_4EB9_41C5_DA8FE202B423_0/r/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_3E97576C_3242_4EB9_41C5_DA8FE202B423_0/r/2/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   }
  }
 ],
 "label": "01",
 "hfovMin": "150%",
 "id": "panorama_3E97576C_3242_4EB9_41C5_DA8FE202B423",
 "class": "Panorama",
 "overlays": [
  "this.overlay_3C4141D7_3242_4597_41B9_AD2544AC190B",
  "this.panorama_3E97576C_3242_4EB9_41C5_DA8FE202B423_tcap0"
 ],
 "partial": false,
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "yaw": -3.35,
   "distance": 1,
   "backwardYaw": -177.2,
   "panorama": "this.panorama_24964DBD_2EC8_65F3_4186_70DC22D46559"
  }
 ],
 "hfov": 360,
 "pitch": 0,
 "vfov": 180,
 "thumbnailUrl": "media/panorama_3E97576C_3242_4EB9_41C5_DA8FE202B423_t.jpg",
 "hfovMax": 130
},
{
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 28.17,
  "pitch": 0
 },
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "id": "camera_22E99B01_334D_4598_41B1_E0491ACA69A4"
},
{
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 176.65,
  "pitch": 0
 },
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "id": "camera_24FFC786_334D_4C99_41BB_8CE3D127ABB3"
},
{
 "frames": [
  {
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_2493A020_2EC8_DA90_41BE_1A6FAE68E849_0/d/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "colCount": 4,
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_2493A020_2EC8_DA90_41BE_1A6FAE68E849_0/d/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_2493A020_2EC8_DA90_41BE_1A6FAE68E849_0/d/2/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "front": {
    "levels": [
     {
      "url": "media/panorama_2493A020_2EC8_DA90_41BE_1A6FAE68E849_0/f/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "colCount": 4,
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_2493A020_2EC8_DA90_41BE_1A6FAE68E849_0/f/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_2493A020_2EC8_DA90_41BE_1A6FAE68E849_0/f/2/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_2493A020_2EC8_DA90_41BE_1A6FAE68E849_0/u/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "colCount": 4,
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_2493A020_2EC8_DA90_41BE_1A6FAE68E849_0/u/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_2493A020_2EC8_DA90_41BE_1A6FAE68E849_0/u/2/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_2493A020_2EC8_DA90_41BE_1A6FAE68E849_0/b/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "colCount": 4,
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_2493A020_2EC8_DA90_41BE_1A6FAE68E849_0/b/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_2493A020_2EC8_DA90_41BE_1A6FAE68E849_0/b/2/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "thumbnailUrl": "media/panorama_2493A020_2EC8_DA90_41BE_1A6FAE68E849_t.jpg",
   "class": "CubicPanoramaFrame",
   "left": {
    "levels": [
     {
      "url": "media/panorama_2493A020_2EC8_DA90_41BE_1A6FAE68E849_0/l/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "colCount": 4,
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_2493A020_2EC8_DA90_41BE_1A6FAE68E849_0/l/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_2493A020_2EC8_DA90_41BE_1A6FAE68E849_0/l/2/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_2493A020_2EC8_DA90_41BE_1A6FAE68E849_0/r/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "colCount": 4,
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_2493A020_2EC8_DA90_41BE_1A6FAE68E849_0/r/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_2493A020_2EC8_DA90_41BE_1A6FAE68E849_0/r/2/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   }
  }
 ],
 "label": "14",
 "hfovMin": "150%",
 "id": "panorama_2493A020_2EC8_DA90_41BE_1A6FAE68E849",
 "class": "Panorama",
 "overlays": [
  "this.overlay_20E783C0_3201_EE45_41AF_FA4DB6B750BB",
  "this.panorama_2493A020_2EC8_DA90_41BE_1A6FAE68E849_tcap0"
 ],
 "partial": false,
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "yaw": -116.91,
   "distance": 1,
   "backwardYaw": 80.3,
   "panorama": "this.panorama_24BB926B_2EC8_3E90_41A8_84DA0AD93437"
  }
 ],
 "hfov": 360,
 "pitch": 0,
 "vfov": 180,
 "thumbnailUrl": "media/panorama_2493A020_2EC8_DA90_41BE_1A6FAE68E849_t.jpg",
 "hfovMax": 130
},
{
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 0,
  "pitch": 0
 },
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "id": "panorama_24933CE7_2EC8_2B90_41B9_291ACC114124_camera"
},
{
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": -167.78,
  "pitch": 0
 },
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "id": "camera_2BC4391C_334D_45A9_41B0_2ADF23CB621A"
},
{
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": -79.1,
  "pitch": 0
 },
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "id": "camera_2B279822_334D_4399_41AE_33F6554FEFE3"
},
{
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 9.08,
  "pitch": 0
 },
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "id": "camera_212E7B6E_334D_4469_41C8_B31AD1D86EEE"
},
{
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 71.38,
  "pitch": 0
 },
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "id": "camera_249DD6EA_334D_4C69_41C0_78BD93A7A1B2"
},
{
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": -99.7,
  "pitch": 0
 },
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "id": "camera_2B36C803_334D_439F_41C2_903DA0927B19"
},
{
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": -3.73,
  "pitch": 0
 },
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "id": "camera_24B7D719_334D_4DA8_4186_DF1BD6E134F7"
},
{
 "frames": [
  {
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_24932127_2EC8_3A90_41BC_8D9A880CACCD_0/d/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "colCount": 4,
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_24932127_2EC8_3A90_41BC_8D9A880CACCD_0/d/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_24932127_2EC8_3A90_41BC_8D9A880CACCD_0/d/2/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "front": {
    "levels": [
     {
      "url": "media/panorama_24932127_2EC8_3A90_41BC_8D9A880CACCD_0/f/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "colCount": 4,
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_24932127_2EC8_3A90_41BC_8D9A880CACCD_0/f/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_24932127_2EC8_3A90_41BC_8D9A880CACCD_0/f/2/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_24932127_2EC8_3A90_41BC_8D9A880CACCD_0/u/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "colCount": 4,
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_24932127_2EC8_3A90_41BC_8D9A880CACCD_0/u/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_24932127_2EC8_3A90_41BC_8D9A880CACCD_0/u/2/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_24932127_2EC8_3A90_41BC_8D9A880CACCD_0/b/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "colCount": 4,
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_24932127_2EC8_3A90_41BC_8D9A880CACCD_0/b/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_24932127_2EC8_3A90_41BC_8D9A880CACCD_0/b/2/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "thumbnailUrl": "media/panorama_24932127_2EC8_3A90_41BC_8D9A880CACCD_t.jpg",
   "class": "CubicPanoramaFrame",
   "left": {
    "levels": [
     {
      "url": "media/panorama_24932127_2EC8_3A90_41BC_8D9A880CACCD_0/l/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "colCount": 4,
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_24932127_2EC8_3A90_41BC_8D9A880CACCD_0/l/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_24932127_2EC8_3A90_41BC_8D9A880CACCD_0/l/2/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_24932127_2EC8_3A90_41BC_8D9A880CACCD_0/r/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "colCount": 4,
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_24932127_2EC8_3A90_41BC_8D9A880CACCD_0/r/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_24932127_2EC8_3A90_41BC_8D9A880CACCD_0/r/2/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   }
  }
 ],
 "label": "08",
 "hfovMin": "150%",
 "id": "panorama_24932127_2EC8_3A90_41BC_8D9A880CACCD",
 "class": "Panorama",
 "overlays": [
  "this.overlay_3D8BB9EE_2ED8_ED90_41BD_68028829017D",
  "this.overlay_242574F7_32C3_C397_4189_CC9F4080E70B",
  "this.overlay_24D4B391_32C2_466B_41C2_7B5ED69EDD2F",
  "this.overlay_242439C1_32C2_45E8_41C7_63CEBF226744",
  "this.overlay_242409C1_32C2_45E8_417D_85F45A2B1C77",
  "this.panorama_24932127_2EC8_3A90_41BC_8D9A880CACCD_tcap0"
 ],
 "partial": false,
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "yaw": -171.67,
   "distance": 1,
   "backwardYaw": -93.54,
   "panorama": "this.panorama_24BA736F_2EC9_DE90_41C5_F9EA6B0CA694"
  }
 ],
 "hfov": 360,
 "pitch": 0,
 "vfov": 180,
 "thumbnailUrl": "media/panorama_24932127_2EC8_3A90_41BC_8D9A880CACCD_t.jpg",
 "hfovMax": 130
},
{
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 0,
  "pitch": 0
 },
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "id": "panorama_24BA07B5_2EC8_65F0_41C1_AAAA3F505535_camera"
},
{
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": -82.61,
  "pitch": 0
 },
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "id": "camera_2B61F890_334D_44B8_41C7_A5DF2BC57790"
},
{
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": -30.36,
  "pitch": 0
 },
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "id": "camera_2B553842_334D_4398_41C6_C54B73ECB82D"
},
{
 "frames": [
  {
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_2490D19F_2ECB_DDAF_41B8_2E505E4C9610_0/d/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "colCount": 4,
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_2490D19F_2ECB_DDAF_41B8_2E505E4C9610_0/d/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_2490D19F_2ECB_DDAF_41B8_2E505E4C9610_0/d/2/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "front": {
    "levels": [
     {
      "url": "media/panorama_2490D19F_2ECB_DDAF_41B8_2E505E4C9610_0/f/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "colCount": 4,
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_2490D19F_2ECB_DDAF_41B8_2E505E4C9610_0/f/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_2490D19F_2ECB_DDAF_41B8_2E505E4C9610_0/f/2/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_2490D19F_2ECB_DDAF_41B8_2E505E4C9610_0/u/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "colCount": 4,
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_2490D19F_2ECB_DDAF_41B8_2E505E4C9610_0/u/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_2490D19F_2ECB_DDAF_41B8_2E505E4C9610_0/u/2/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_2490D19F_2ECB_DDAF_41B8_2E505E4C9610_0/b/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "colCount": 4,
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_2490D19F_2ECB_DDAF_41B8_2E505E4C9610_0/b/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_2490D19F_2ECB_DDAF_41B8_2E505E4C9610_0/b/2/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "thumbnailUrl": "media/panorama_2490D19F_2ECB_DDAF_41B8_2E505E4C9610_t.jpg",
   "class": "CubicPanoramaFrame",
   "left": {
    "levels": [
     {
      "url": "media/panorama_2490D19F_2ECB_DDAF_41B8_2E505E4C9610_0/l/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "colCount": 4,
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_2490D19F_2ECB_DDAF_41B8_2E505E4C9610_0/l/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_2490D19F_2ECB_DDAF_41B8_2E505E4C9610_0/l/2/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_2490D19F_2ECB_DDAF_41B8_2E505E4C9610_0/r/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "colCount": 4,
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_2490D19F_2ECB_DDAF_41B8_2E505E4C9610_0/r/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_2490D19F_2ECB_DDAF_41B8_2E505E4C9610_0/r/2/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   }
  }
 ],
 "label": "26",
 "hfovMin": "150%",
 "id": "panorama_2490D19F_2ECB_DDAF_41B8_2E505E4C9610",
 "class": "Panorama",
 "overlays": [
  "this.overlay_288DECA8_321E_DAC4_41C4_57478F35602E",
  "this.panorama_2490D19F_2ECB_DDAF_41B8_2E505E4C9610_tcap0"
 ],
 "partial": false,
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "yaw": -177.2,
   "distance": 1,
   "backwardYaw": -110.12,
   "panorama": "this.panorama_24B66547_2ECB_FA9F_41B3_5603B4E3CCF0"
  }
 ],
 "hfov": 360,
 "pitch": 0,
 "vfov": 180,
 "thumbnailUrl": "media/panorama_2490D19F_2ECB_DDAF_41B8_2E505E4C9610_t.jpg",
 "hfovMax": 130
},
{
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 81.94,
  "pitch": 0
 },
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "id": "camera_2BD7790D_334D_45A8_4199_295D98A26D0E"
},
{
 "gyroscopeVerticalDraggingEnabled": true,
 "displayPlaybackBar": true,
 "viewerArea": "this.MainViewer",
 "class": "PanoramaPlayer",
 "id": "MainViewerPanoramaPlayer",
 "touchControlMode": "drag_rotation",
 "mouseControlMode": "drag_rotation"
},
{
 "frames": [
  {
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_249314F9_2EC9_FB73_41BD_642E1D4B48BC_0/d/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "colCount": 4,
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_249314F9_2EC9_FB73_41BD_642E1D4B48BC_0/d/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_249314F9_2EC9_FB73_41BD_642E1D4B48BC_0/d/2/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "front": {
    "levels": [
     {
      "url": "media/panorama_249314F9_2EC9_FB73_41BD_642E1D4B48BC_0/f/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "colCount": 4,
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_249314F9_2EC9_FB73_41BD_642E1D4B48BC_0/f/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_249314F9_2EC9_FB73_41BD_642E1D4B48BC_0/f/2/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_249314F9_2EC9_FB73_41BD_642E1D4B48BC_0/u/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "colCount": 4,
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_249314F9_2EC9_FB73_41BD_642E1D4B48BC_0/u/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_249314F9_2EC9_FB73_41BD_642E1D4B48BC_0/u/2/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_249314F9_2EC9_FB73_41BD_642E1D4B48BC_0/b/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "colCount": 4,
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_249314F9_2EC9_FB73_41BD_642E1D4B48BC_0/b/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_249314F9_2EC9_FB73_41BD_642E1D4B48BC_0/b/2/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "thumbnailUrl": "media/panorama_249314F9_2EC9_FB73_41BD_642E1D4B48BC_t.jpg",
   "class": "CubicPanoramaFrame",
   "left": {
    "levels": [
     {
      "url": "media/panorama_249314F9_2EC9_FB73_41BD_642E1D4B48BC_0/l/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "colCount": 4,
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_249314F9_2EC9_FB73_41BD_642E1D4B48BC_0/l/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_249314F9_2EC9_FB73_41BD_642E1D4B48BC_0/l/2/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_249314F9_2EC9_FB73_41BD_642E1D4B48BC_0/r/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "colCount": 4,
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_249314F9_2EC9_FB73_41BD_642E1D4B48BC_0/r/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_249314F9_2EC9_FB73_41BD_642E1D4B48BC_0/r/2/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   }
  }
 ],
 "label": "06",
 "hfovMin": "150%",
 "id": "panorama_249314F9_2EC9_FB73_41BD_642E1D4B48BC",
 "class": "Panorama",
 "overlays": [
  "this.overlay_3EB35387_2EF8_5D90_41BC_28416D3AC401",
  "this.overlay_3FE3D45D_2EFB_DAB3_41A4_C4F8D252C62A",
  "this.overlay_3D87C12E_2EC8_DA90_41C0_ABADD18E458D",
  "this.popup_248E108F_32C7_C278_41C4_AC4ECB95EE39",
  "this.overlay_27435D30_32C2_42A9_41C3_655BE18AF49F",
  "this.overlay_27436D30_32C2_42A9_4193_C943323742A4",
  "this.panorama_249314F9_2EC9_FB73_41BD_642E1D4B48BC_tcap0"
 ],
 "partial": false,
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "yaw": -168.91,
   "distance": 1,
   "backwardYaw": 100.9,
   "panorama": "this.panorama_24BBDBE9_2EC8_2D93_41C4_423B1CECBEC0"
  },
  {
   "class": "AdjacentPanorama",
   "yaw": -46.56,
   "distance": 1,
   "backwardYaw": 149.64,
   "panorama": "this.panorama_2492E99F_2EC8_2DB0_41C3_A52C968A9FC9"
  },
  {
   "class": "AdjacentPanorama",
   "yaw": 46.14,
   "distance": 1,
   "backwardYaw": 179.79,
   "panorama": "this.panorama_24BAB721_2EC9_E690_41C3_7C714E7A53B5"
  }
 ],
 "hfov": 360,
 "pitch": 0,
 "vfov": 180,
 "thumbnailUrl": "media/panorama_249314F9_2EC9_FB73_41BD_642E1D4B48BC_t.jpg",
 "hfovMax": 130
},
{
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 101.78,
  "pitch": 0
 },
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "id": "camera_211B7B20_334D_4599_41C0_F39B2FA712E4"
},
{
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 90.98,
  "pitch": 0
 },
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "id": "camera_227D7A26_334D_4799_41B8_425B962D1F64"
},
{
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 9.33,
  "pitch": 0
 },
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "id": "camera_2B1B97C5_334D_4C98_41C6_38D7F63E51A1"
},
{
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 3.55,
  "pitch": 0
 },
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "id": "camera_2B6E889F_334D_44A7_41C1_D21CB0B4D84C"
},
{
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 146.25,
  "pitch": 0
 },
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "id": "camera_21255B5F_334D_45A8_41B1_AE73299E14AE"
},
{
 "levels": [
  {
   "url": "media/popup_2A4303C5_32CE_45EB_41C0_237D68B89C2F_0_0.jpg",
   "width": 6936,
   "class": "ImageResourceLevel",
   "height": 6936
  },
  {
   "url": "media/popup_2A4303C5_32CE_45EB_41C0_237D68B89C2F_0_1.jpg",
   "width": 4096,
   "class": "ImageResourceLevel",
   "height": 4096
  },
  {
   "url": "media/popup_2A4303C5_32CE_45EB_41C0_237D68B89C2F_0_2.jpg",
   "width": 2048,
   "class": "ImageResourceLevel",
   "height": 2048
  },
  {
   "url": "media/popup_2A4303C5_32CE_45EB_41C0_237D68B89C2F_0_3.jpg",
   "width": 1024,
   "class": "ImageResourceLevel",
   "height": 1024
  },
  {
   "url": "media/popup_2A4303C5_32CE_45EB_41C0_237D68B89C2F_0_4.jpg",
   "width": 512,
   "class": "ImageResourceLevel",
   "height": 512
  }
 ],
 "class": "ImageResource",
 "id": "ImageResource_2F20F0FE_32C2_C399_41C4_F99D5E3C749F"
},
{
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": -95.68,
  "pitch": 0
 },
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "id": "camera_2490E6DA_334D_4CA9_41B1_6B49DE04212B"
},
{
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": -4.8,
  "pitch": 0
 },
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "id": "camera_2B8DE8CE_334D_44A9_41BF_CE5EF9B40A99"
},
{
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 133.44,
  "pitch": 0
 },
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "id": "camera_2290BA55_334D_47BB_41C9_1737F071B750"
},
{
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": -89.65,
  "pitch": 0
 },
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "id": "camera_22FC4AF1_334D_447B_41A3_3CFF78953C1F"
},
{
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 80.18,
  "pitch": 0
 },
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "id": "camera_2A00995B_334D_45AF_41A7_7DA890A345F9"
},
{
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 0,
  "pitch": 0
 },
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "id": "panorama_24BB926B_2EC8_3E90_41A8_84DA0AD93437_camera"
},
{
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 2.8,
  "pitch": 0
 },
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "id": "camera_22F20AE2_334D_4498_41C8_2B77AF2B8F8B"
},
{
 "frames": [
  {
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_24BBDBE9_2EC8_2D93_41C4_423B1CECBEC0_0/d/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "colCount": 4,
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_24BBDBE9_2EC8_2D93_41C4_423B1CECBEC0_0/d/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_24BBDBE9_2EC8_2D93_41C4_423B1CECBEC0_0/d/2/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "front": {
    "levels": [
     {
      "url": "media/panorama_24BBDBE9_2EC8_2D93_41C4_423B1CECBEC0_0/f/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "colCount": 4,
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_24BBDBE9_2EC8_2D93_41C4_423B1CECBEC0_0/f/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_24BBDBE9_2EC8_2D93_41C4_423B1CECBEC0_0/f/2/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_24BBDBE9_2EC8_2D93_41C4_423B1CECBEC0_0/u/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "colCount": 4,
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_24BBDBE9_2EC8_2D93_41C4_423B1CECBEC0_0/u/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_24BBDBE9_2EC8_2D93_41C4_423B1CECBEC0_0/u/2/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_24BBDBE9_2EC8_2D93_41C4_423B1CECBEC0_0/b/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "colCount": 4,
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_24BBDBE9_2EC8_2D93_41C4_423B1CECBEC0_0/b/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_24BBDBE9_2EC8_2D93_41C4_423B1CECBEC0_0/b/2/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "thumbnailUrl": "media/panorama_24BBDBE9_2EC8_2D93_41C4_423B1CECBEC0_t.jpg",
   "class": "CubicPanoramaFrame",
   "left": {
    "levels": [
     {
      "url": "media/panorama_24BBDBE9_2EC8_2D93_41C4_423B1CECBEC0_0/l/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "colCount": 4,
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_24BBDBE9_2EC8_2D93_41C4_423B1CECBEC0_0/l/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_24BBDBE9_2EC8_2D93_41C4_423B1CECBEC0_0/l/2/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_24BBDBE9_2EC8_2D93_41C4_423B1CECBEC0_0/r/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "colCount": 4,
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_24BBDBE9_2EC8_2D93_41C4_423B1CECBEC0_0/r/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_24BBDBE9_2EC8_2D93_41C4_423B1CECBEC0_0/r/2/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   }
  }
 ],
 "label": "03",
 "hfovMin": "150%",
 "id": "panorama_24BBDBE9_2EC8_2D93_41C4_423B1CECBEC0",
 "class": "Panorama",
 "overlays": [
  "this.overlay_21D91188_2EF8_FD90_41BE_1F1FBCFF0109",
  "this.overlay_3EE90129_2EF8_5A90_41C1_4C690774D0BB",
  "this.overlay_3E4B1A37_2EF8_6EFF_41A3_E802A6359FB1",
  "this.overlay_38126F3E_2F78_E6F0_41BB_5F52C04A35CF",
  "this.overlay_367419CE_2F58_2D90_41C6_1E8F71DE2C1D",
  "this.overlay_353B6995_2F58_6DB0_41C7_3326F225126A",
  "this.overlay_235627AA_3207_F6C4_4165_1F1EECE19088",
  "this.overlay_24235EE9_32C2_3FB8_41C2_6C47BC31D336",
  "this.overlay_2423BEE9_32C2_3FB8_41A4_38573735E667",
  "this.overlay_25565FFC_32C6_FD99_41AC_8E2659E96F7E",
  "this.overlay_25567FFD_32C6_FD9B_41AD_27BDF022E409",
  "this.popup_24D8CBDD_32C6_4598_41C5_208B85D34E36",
  "this.overlay_274601C7_32FE_45F7_41A1_F3D32B83C3C5",
  "this.overlay_274611C7_32FE_45F7_41C0_6FB609907D36",
  "this.panorama_24BBDBE9_2EC8_2D93_41C4_423B1CECBEC0_tcap0"
 ],
 "partial": false,
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "yaw": 177.53,
   "distance": 1,
   "backwardYaw": 84.32,
   "panorama": "this.panorama_24964DBD_2EC8_65F3_4186_70DC22D46559"
  },
  {
   "class": "AdjacentPanorama",
   "yaw": -127.96,
   "distance": 1,
   "backwardYaw": -108.62,
   "panorama": "this.panorama_24935558_2EC8_5AB0_41C3_DD0CE36C4A12"
  },
  {
   "class": "AdjacentPanorama",
   "yaw": 100.9,
   "distance": 1,
   "backwardYaw": -168.91,
   "panorama": "this.panorama_249314F9_2EC9_FB73_41BD_642E1D4B48BC"
  },
  {
   "class": "AdjacentPanorama",
   "yaw": -97.31,
   "distance": 1,
   "backwardYaw": 176.27,
   "panorama": "this.panorama_24BC5D9B_2EC8_25B0_41C4_5A196FBB4EBE"
  },
  {
   "class": "AdjacentPanorama",
   "yaw": -68.92,
   "distance": 1,
   "backwardYaw": 23.28,
   "panorama": "this.panorama_24BA07B5_2EC8_65F0_41C1_AAAA3F505535"
  },
  {
   "class": "AdjacentPanorama",
   "yaw": -151.83,
   "distance": 1,
   "backwardYaw": -172.93,
   "panorama": "this.panorama_24BB926B_2EC8_3E90_41A8_84DA0AD93437"
  },
  {
   "class": "AdjacentPanorama",
   "yaw": -4.36,
   "distance": 1,
   "backwardYaw": 168.48,
   "panorama": "this.panorama_24BA736F_2EC9_DE90_41C5_F9EA6B0CA694"
  }
 ],
 "hfov": 360,
 "pitch": 0,
 "vfov": 180,
 "thumbnailUrl": "media/panorama_24BBDBE9_2EC8_2D93_41C4_423B1CECBEC0_t.jpg",
 "hfovMax": 130
},
{
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 0,
  "pitch": 0
 },
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "id": "panorama_24BA736F_2EC9_DE90_41C5_F9EA6B0CA694_camera"
},
{
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 0,
  "pitch": 0
 },
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "id": "panorama_2490F757_2ECB_E6B0_41AB_EC8D45FBF4FA_camera"
},
{
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": -11.52,
  "pitch": 0
 },
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "id": "camera_24C12748_334D_4DA8_41BD_F5DE64809E26"
},
{
 "frames": [
  {
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_2492E99F_2EC8_2DB0_41C3_A52C968A9FC9_0/d/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "colCount": 4,
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_2492E99F_2EC8_2DB0_41C3_A52C968A9FC9_0/d/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_2492E99F_2EC8_2DB0_41C3_A52C968A9FC9_0/d/2/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "front": {
    "levels": [
     {
      "url": "media/panorama_2492E99F_2EC8_2DB0_41C3_A52C968A9FC9_0/f/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "colCount": 4,
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_2492E99F_2EC8_2DB0_41C3_A52C968A9FC9_0/f/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_2492E99F_2EC8_2DB0_41C3_A52C968A9FC9_0/f/2/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_2492E99F_2EC8_2DB0_41C3_A52C968A9FC9_0/u/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "colCount": 4,
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_2492E99F_2EC8_2DB0_41C3_A52C968A9FC9_0/u/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_2492E99F_2EC8_2DB0_41C3_A52C968A9FC9_0/u/2/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_2492E99F_2EC8_2DB0_41C3_A52C968A9FC9_0/b/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "colCount": 4,
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_2492E99F_2EC8_2DB0_41C3_A52C968A9FC9_0/b/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_2492E99F_2EC8_2DB0_41C3_A52C968A9FC9_0/b/2/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "thumbnailUrl": "media/panorama_2492E99F_2EC8_2DB0_41C3_A52C968A9FC9_t.jpg",
   "class": "CubicPanoramaFrame",
   "left": {
    "levels": [
     {
      "url": "media/panorama_2492E99F_2EC8_2DB0_41C3_A52C968A9FC9_0/l/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "colCount": 4,
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_2492E99F_2EC8_2DB0_41C3_A52C968A9FC9_0/l/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_2492E99F_2EC8_2DB0_41C3_A52C968A9FC9_0/l/2/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_2492E99F_2EC8_2DB0_41C3_A52C968A9FC9_0/r/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "colCount": 4,
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_2492E99F_2EC8_2DB0_41C3_A52C968A9FC9_0/r/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_2492E99F_2EC8_2DB0_41C3_A52C968A9FC9_0/r/2/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   }
  }
 ],
 "label": "04",
 "hfovMin": "150%",
 "id": "panorama_2492E99F_2EC8_2DB0_41C3_A52C968A9FC9",
 "class": "Panorama",
 "overlays": [
  "this.overlay_3FC96D33_2EF8_6AF0_41C2_4B9DA82FA91F",
  "this.overlay_3F55042A_2EC8_3A90_41AC_D8DEC84022B8",
  "this.overlay_2A5FA43E_32C2_4299_41C3_47A9375B6432",
  "this.popup_2B17DDD9_32C2_7D9B_41C6_D7A3F846033D",
  "this.overlay_27DEDBB2_32C2_45A8_41C7_D2A37ECFE3E2",
  "this.overlay_27DEABB2_32C2_45A8_41B2_BB09EDDED06C",
  "this.overlay_291ECD20_32FE_42A9_417C_7D449574A988",
  "this.overlay_291E9D20_32FE_42A9_41B0_7C79B84A6192",
  "this.panorama_2492E99F_2EC8_2DB0_41C3_A52C968A9FC9_tcap0"
 ],
 "partial": false,
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "yaw": 87.09,
   "distance": 1,
   "backwardYaw": -96.05,
   "panorama": "this.panorama_24BAB721_2EC9_E690_41C3_7C714E7A53B5"
  },
  {
   "class": "AdjacentPanorama",
   "yaw": 149.64,
   "distance": 1,
   "backwardYaw": -46.56,
   "panorama": "this.panorama_249314F9_2EC9_FB73_41BD_642E1D4B48BC"
  }
 ],
 "hfov": 360,
 "pitch": 0,
 "vfov": 180,
 "thumbnailUrl": "media/panorama_2492E99F_2EC8_2DB0_41C3_A52C968A9FC9_t.jpg",
 "hfovMax": 130
},
{
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 0,
  "pitch": 0
 },
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "id": "panorama_2493A020_2EC8_DA90_41BE_1A6FAE68E849_camera"
},
{
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 0,
  "pitch": 0
 },
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "id": "panorama_249314F9_2EC9_FB73_41BD_642E1D4B48BC_camera"
},
{
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 8.33,
  "pitch": 0
 },
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "id": "camera_2BE2093C_334D_45E8_41A8_AFE1F876D827"
},
{
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 0,
  "pitch": 0
 },
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "id": "panorama_24B66547_2ECB_FA9F_41B3_5603B4E3CCF0_camera"
},
{
 "frames": [
  {
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_24933CE7_2EC8_2B90_41B9_291ACC114124_0/d/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "colCount": 4,
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_24933CE7_2EC8_2B90_41B9_291ACC114124_0/d/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_24933CE7_2EC8_2B90_41B9_291ACC114124_0/d/2/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "front": {
    "levels": [
     {
      "url": "media/panorama_24933CE7_2EC8_2B90_41B9_291ACC114124_0/f/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "colCount": 4,
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_24933CE7_2EC8_2B90_41B9_291ACC114124_0/f/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_24933CE7_2EC8_2B90_41B9_291ACC114124_0/f/2/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_24933CE7_2EC8_2B90_41B9_291ACC114124_0/u/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "colCount": 4,
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_24933CE7_2EC8_2B90_41B9_291ACC114124_0/u/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_24933CE7_2EC8_2B90_41B9_291ACC114124_0/u/2/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_24933CE7_2EC8_2B90_41B9_291ACC114124_0/b/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "colCount": 4,
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_24933CE7_2EC8_2B90_41B9_291ACC114124_0/b/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_24933CE7_2EC8_2B90_41B9_291ACC114124_0/b/2/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "thumbnailUrl": "media/panorama_24933CE7_2EC8_2B90_41B9_291ACC114124_t.jpg",
   "class": "CubicPanoramaFrame",
   "left": {
    "levels": [
     {
      "url": "media/panorama_24933CE7_2EC8_2B90_41B9_291ACC114124_0/l/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "colCount": 4,
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_24933CE7_2EC8_2B90_41B9_291ACC114124_0/l/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_24933CE7_2EC8_2B90_41B9_291ACC114124_0/l/2/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_24933CE7_2EC8_2B90_41B9_291ACC114124_0/r/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "colCount": 4,
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_24933CE7_2EC8_2B90_41B9_291ACC114124_0/r/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_24933CE7_2EC8_2B90_41B9_291ACC114124_0/r/2/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   }
  }
 ],
 "label": "22",
 "hfovMin": "150%",
 "id": "panorama_24933CE7_2EC8_2B90_41B9_291ACC114124",
 "class": "Panorama",
 "overlays": [
  "this.overlay_2A36FF9F_3202_36FB_41B6_4EF6984384B9",
  "this.overlay_2AE16BE0_3207_DE44_41B5_25048DDD5CBE",
  "this.overlay_2B0C5418_3201_E9C4_41C4_5987CE217FFA",
  "this.overlay_29A3B1F2_3202_EA44_418B_89A4F6208BD9",
  "this.panorama_24933CE7_2EC8_2B90_41B9_291ACC114124_tcap0"
 ],
 "partial": false,
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "yaw": -33.75,
   "distance": 1,
   "backwardYaw": -128.96,
   "panorama": "this.panorama_24BB09D8_2EC8_2DB0_41C5_DA73B4006188"
  },
  {
   "class": "AdjacentPanorama",
   "yaw": -99.82,
   "distance": 1,
   "backwardYaw": 175.52,
   "panorama": "this.panorama_2490F757_2ECB_E6B0_41AB_EC8D45FBF4FA"
  },
  {
   "class": "AdjacentPanorama",
   "yaw": 90.35,
   "distance": 1,
   "backwardYaw": -178.71,
   "panorama": "this.panorama_24B66547_2ECB_FA9F_41B3_5603B4E3CCF0"
  },
  {
   "class": "AdjacentPanorama",
   "yaw": -175.94,
   "distance": 1,
   "backwardYaw": 28.05,
   "panorama": "this.panorama_2493764E_2EC8_2690_4195_080B59CD09C9"
  }
 ],
 "hfov": 360,
 "pitch": 0,
 "vfov": 180,
 "thumbnailUrl": "media/panorama_24933CE7_2EC8_2B90_41B9_291ACC114124_t.jpg",
 "hfovMax": 130
},
{
 "hideDuration": 500,
 "rotationX": 0,
 "yaw": 172.16,
 "rotationZ": 0,
 "showEasing": "cubic_in",
 "rotationY": 0,
 "showDuration": 500,
 "class": "PopupPanoramaOverlay",
 "popupMaxWidth": "50%",
 "popupDistance": 100,
 "popupMaxHeight": "50%",
 "id": "popup_2A4303C5_32CE_45EB_41C0_237D68B89C2F",
 "image": {
  "levels": [
   {
    "url": "media/popup_2A4303C5_32CE_45EB_41C0_237D68B89C2F_0_3.jpg",
    "width": 1024,
    "class": "ImageResourceLevel",
    "height": 1024
   }
  ],
  "class": "ImageResource"
 },
 "pitch": -17.04,
 "hideEasing": "cubic_out",
 "hfov": 8.5
},
{
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 0,
  "pitch": 0
 },
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "id": "panorama_2493DB03_2EC8_EE90_41B9_9A931BB034DA_camera"
},
{
 "hideDuration": 500,
 "rotationX": 0,
 "yaw": 12.33,
 "rotationZ": 0,
 "showEasing": "cubic_in",
 "rotationY": 0,
 "showDuration": 500,
 "class": "PopupPanoramaOverlay",
 "popupMaxWidth": "50%",
 "popupDistance": 100,
 "popupMaxHeight": "50%",
 "id": "popup_27E8545F_3242_4297_41C3_848B57B20C2C",
 "image": {
  "levels": [
   {
    "url": "media/popup_27E8545F_3242_4297_41C3_848B57B20C2C_0_3.jpg",
    "width": 1024,
    "class": "ImageResourceLevel",
    "height": 1024
   }
  ],
  "class": "ImageResource"
 },
 "pitch": 18.11,
 "hideEasing": "cubic_out",
 "hfov": 29.33
},
{
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 0,
  "pitch": 0
 },
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "id": "panorama_24BBDBE9_2EC8_2D93_41C4_423B1CECBEC0_camera"
},
{
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": -103.97,
  "pitch": 0
 },
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "id": "camera_2BA988FD_334D_446B_41C0_0A5B9B83DBCD"
},
{
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": -0.21,
  "pitch": 0
 },
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "id": "camera_2B42C851_334D_43BB_4195_DF2DF9369786"
},
{
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 11.09,
  "pitch": 0
 },
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "id": "camera_2489B709_334D_4DAB_41BB_75818247C084"
},
{
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 0,
  "pitch": 0
 },
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "id": "panorama_24B96F7C_2EC8_6570_419D_97833188ABD5_camera"
},
{
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 83.95,
  "pitch": 0
 },
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "id": "camera_226BEA45_334D_479B_41C0_C0300A8FA52B"
},
{
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 0,
  "pitch": 0
 },
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "id": "panorama_2490D19F_2ECB_DDAF_41B8_2E505E4C9610_camera"
},
{
 "frames": [
  {
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_24B66547_2ECB_FA9F_41B3_5603B4E3CCF0_0/d/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "colCount": 4,
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_24B66547_2ECB_FA9F_41B3_5603B4E3CCF0_0/d/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_24B66547_2ECB_FA9F_41B3_5603B4E3CCF0_0/d/2/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "front": {
    "levels": [
     {
      "url": "media/panorama_24B66547_2ECB_FA9F_41B3_5603B4E3CCF0_0/f/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "colCount": 4,
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_24B66547_2ECB_FA9F_41B3_5603B4E3CCF0_0/f/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_24B66547_2ECB_FA9F_41B3_5603B4E3CCF0_0/f/2/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_24B66547_2ECB_FA9F_41B3_5603B4E3CCF0_0/u/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "colCount": 4,
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_24B66547_2ECB_FA9F_41B3_5603B4E3CCF0_0/u/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_24B66547_2ECB_FA9F_41B3_5603B4E3CCF0_0/u/2/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_24B66547_2ECB_FA9F_41B3_5603B4E3CCF0_0/b/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "colCount": 4,
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_24B66547_2ECB_FA9F_41B3_5603B4E3CCF0_0/b/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_24B66547_2ECB_FA9F_41B3_5603B4E3CCF0_0/b/2/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "thumbnailUrl": "media/panorama_24B66547_2ECB_FA9F_41B3_5603B4E3CCF0_t.jpg",
   "class": "CubicPanoramaFrame",
   "left": {
    "levels": [
     {
      "url": "media/panorama_24B66547_2ECB_FA9F_41B3_5603B4E3CCF0_0/l/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "colCount": 4,
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_24B66547_2ECB_FA9F_41B3_5603B4E3CCF0_0/l/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_24B66547_2ECB_FA9F_41B3_5603B4E3CCF0_0/l/2/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_24B66547_2ECB_FA9F_41B3_5603B4E3CCF0_0/r/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "colCount": 4,
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_24B66547_2ECB_FA9F_41B3_5603B4E3CCF0_0/r/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_24B66547_2ECB_FA9F_41B3_5603B4E3CCF0_0/r/2/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   }
  }
 ],
 "label": "25",
 "hfovMin": "150%",
 "id": "panorama_24B66547_2ECB_FA9F_41B3_5603B4E3CCF0",
 "class": "Panorama",
 "overlays": [
  "this.overlay_29515973_3202_5A44_41A8_ABC4AED9A4A9",
  "this.overlay_28B36437_321E_29CB_41AB_CD368059B315",
  "this.panorama_24B66547_2ECB_FA9F_41B3_5603B4E3CCF0_tcap0"
 ],
 "partial": false,
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "yaw": -110.12,
   "distance": 1,
   "backwardYaw": -177.2,
   "panorama": "this.panorama_2490D19F_2ECB_DDAF_41B8_2E505E4C9610"
  },
  {
   "class": "AdjacentPanorama",
   "yaw": -178.71,
   "distance": 1,
   "backwardYaw": 90.35,
   "panorama": "this.panorama_24933CE7_2EC8_2B90_41B9_291ACC114124"
  }
 ],
 "hfov": 360,
 "pitch": 0,
 "vfov": 180,
 "thumbnailUrl": "media/panorama_24B66547_2ECB_FA9F_41B3_5603B4E3CCF0_t.jpg",
 "hfovMax": 130
},
{
 "frames": [
  {
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_24935558_2EC8_5AB0_41C3_DD0CE36C4A12_0/d/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "colCount": 4,
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_24935558_2EC8_5AB0_41C3_DD0CE36C4A12_0/d/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_24935558_2EC8_5AB0_41C3_DD0CE36C4A12_0/d/2/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "front": {
    "levels": [
     {
      "url": "media/panorama_24935558_2EC8_5AB0_41C3_DD0CE36C4A12_0/f/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "colCount": 4,
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_24935558_2EC8_5AB0_41C3_DD0CE36C4A12_0/f/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_24935558_2EC8_5AB0_41C3_DD0CE36C4A12_0/f/2/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_24935558_2EC8_5AB0_41C3_DD0CE36C4A12_0/u/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "colCount": 4,
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_24935558_2EC8_5AB0_41C3_DD0CE36C4A12_0/u/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_24935558_2EC8_5AB0_41C3_DD0CE36C4A12_0/u/2/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_24935558_2EC8_5AB0_41C3_DD0CE36C4A12_0/b/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "colCount": 4,
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_24935558_2EC8_5AB0_41C3_DD0CE36C4A12_0/b/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_24935558_2EC8_5AB0_41C3_DD0CE36C4A12_0/b/2/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "thumbnailUrl": "media/panorama_24935558_2EC8_5AB0_41C3_DD0CE36C4A12_t.jpg",
   "class": "CubicPanoramaFrame",
   "left": {
    "levels": [
     {
      "url": "media/panorama_24935558_2EC8_5AB0_41C3_DD0CE36C4A12_0/l/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "colCount": 4,
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_24935558_2EC8_5AB0_41C3_DD0CE36C4A12_0/l/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_24935558_2EC8_5AB0_41C3_DD0CE36C4A12_0/l/2/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_24935558_2EC8_5AB0_41C3_DD0CE36C4A12_0/r/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "colCount": 4,
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_24935558_2EC8_5AB0_41C3_DD0CE36C4A12_0/r/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_24935558_2EC8_5AB0_41C3_DD0CE36C4A12_0/r/2/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   }
  }
 ],
 "label": "12",
 "hfovMin": "150%",
 "id": "panorama_24935558_2EC8_5AB0_41C3_DD0CE36C4A12",
 "class": "Panorama",
 "overlays": [
  "this.overlay_37221A2E_2F58_2E90_41BA_095B5E8CB380",
  "this.overlay_36ED3D51_2F59_EAB3_41C0_72D4A7B2CFD7",
  "this.overlay_203428B0_3242_43A9_41C7_B8641F80379C",
  "this.overlay_27D85CFE_32C6_C399_41B4_6490DD19D80C",
  "this.overlay_27D84CFE_32C6_C399_41C8_7F8B702A516C",
  "this.overlay_243EAB5F_32C1_C697_41C6_C622CE118DA9",
  "this.overlay_243EDB60_32C1_C6A9_41A0_A95CFD8F8DBA",
  "this.panorama_24935558_2EC8_5AB0_41C3_DD0CE36C4A12_tcap0"
 ],
 "partial": false,
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "yaw": -108.62,
   "distance": 1,
   "backwardYaw": -127.96,
   "panorama": "this.panorama_24BBDBE9_2EC8_2D93_41C4_423B1CECBEC0"
  },
  {
   "class": "AdjacentPanorama",
   "yaw": -176.45,
   "distance": 1,
   "backwardYaw": -89.02,
   "panorama": "this.panorama_24BC5D9B_2EC8_25B0_41C4_5A196FBB4EBE"
  },
  {
   "class": "AdjacentPanorama",
   "yaw": -78.22,
   "distance": 1,
   "backwardYaw": 124.27,
   "panorama": "this.panorama_24BB926B_2EC8_3E90_41A8_84DA0AD93437"
  }
 ],
 "hfov": 360,
 "pitch": 0,
 "vfov": 180,
 "thumbnailUrl": "media/panorama_24935558_2EC8_5AB0_41C3_DD0CE36C4A12_t.jpg",
 "hfovMax": 130
},
{
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 4.06,
  "pitch": 0
 },
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "id": "camera_22C8BAE2_334D_4498_4181_AE45F0D4DCDA"
},
{
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 175.64,
  "pitch": 0
 },
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "id": "camera_2A13F94B_334D_45AF_41C7_8F654813BAD0"
},
{
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 0,
  "pitch": 0
 },
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "id": "panorama_24BB09D8_2EC8_2DB0_41C5_DA73B4006188_camera"
},
{
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 0,
  "pitch": 0
 },
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "id": "panorama_24B94D08_2EC8_EA90_41C1_6BFAE03E3E02_camera"
},
{
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": -4.48,
  "pitch": 0
 },
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "id": "camera_22823A74_334D_4479_41B9_4010EE878D40"
},
{
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 0,
  "pitch": 0
 },
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "id": "panorama_2493764E_2EC8_2690_4195_080B59CD09C9_camera"
},
{
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 0,
  "pitch": 0
 },
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "id": "panorama_24964DBD_2EC8_65F3_4186_70DC22D46559_camera"
},
{
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": -156.72,
  "pitch": 0
 },
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "id": "camera_24A5E728_334D_4DE9_41A1_99DFAF63D420"
},
{
 "class": "PlayList",
 "id": "mainPlayList",
 "items": [
  {
   "begin": "this.setEndToItemIndex(this.mainPlayList, 0, 1)",
   "media": "this.panorama_3E97576C_3242_4EB9_41C5_DA8FE202B423",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_3E97576C_3242_4EB9_41C5_DA8FE202B423_camera"
  },
  {
   "begin": "this.setEndToItemIndex(this.mainPlayList, 1, 2)",
   "media": "this.panorama_24964DBD_2EC8_65F3_4186_70DC22D46559",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_24964DBD_2EC8_65F3_4186_70DC22D46559_camera"
  },
  {
   "begin": "this.setEndToItemIndex(this.mainPlayList, 2, 3)",
   "media": "this.panorama_24BBDBE9_2EC8_2D93_41C4_423B1CECBEC0",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_24BBDBE9_2EC8_2D93_41C4_423B1CECBEC0_camera"
  },
  {
   "begin": "this.setEndToItemIndex(this.mainPlayList, 3, 4)",
   "media": "this.panorama_2492E99F_2EC8_2DB0_41C3_A52C968A9FC9",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_2492E99F_2EC8_2DB0_41C3_A52C968A9FC9_camera"
  },
  {
   "begin": "this.setEndToItemIndex(this.mainPlayList, 4, 5)",
   "media": "this.panorama_24BAB721_2EC9_E690_41C3_7C714E7A53B5",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_24BAB721_2EC9_E690_41C3_7C714E7A53B5_camera"
  },
  {
   "begin": "this.setEndToItemIndex(this.mainPlayList, 5, 6)",
   "media": "this.panorama_249314F9_2EC9_FB73_41BD_642E1D4B48BC",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_249314F9_2EC9_FB73_41BD_642E1D4B48BC_camera"
  },
  {
   "begin": "this.setEndToItemIndex(this.mainPlayList, 6, 7)",
   "media": "this.panorama_24BA736F_2EC9_DE90_41C5_F9EA6B0CA694",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_24BA736F_2EC9_DE90_41C5_F9EA6B0CA694_camera"
  },
  {
   "begin": "this.setEndToItemIndex(this.mainPlayList, 7, 8)",
   "media": "this.panorama_24932127_2EC8_3A90_41BC_8D9A880CACCD",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_24932127_2EC8_3A90_41BC_8D9A880CACCD_camera"
  },
  {
   "begin": "this.setEndToItemIndex(this.mainPlayList, 8, 9)",
   "media": "this.panorama_24BC5D9B_2EC8_25B0_41C4_5A196FBB4EBE",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_24BC5D9B_2EC8_25B0_41C4_5A196FBB4EBE_camera"
  },
  {
   "begin": "this.setEndToItemIndex(this.mainPlayList, 9, 10)",
   "media": "this.panorama_24BA07B5_2EC8_65F0_41C1_AAAA3F505535",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_24BA07B5_2EC8_65F0_41C1_AAAA3F505535_camera"
  },
  {
   "begin": "this.setEndToItemIndex(this.mainPlayList, 10, 11)",
   "media": "this.panorama_24935558_2EC8_5AB0_41C3_DD0CE36C4A12",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_24935558_2EC8_5AB0_41C3_DD0CE36C4A12_camera"
  },
  {
   "begin": "this.setEndToItemIndex(this.mainPlayList, 11, 12)",
   "media": "this.panorama_24BB926B_2EC8_3E90_41A8_84DA0AD93437",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_24BB926B_2EC8_3E90_41A8_84DA0AD93437_camera"
  },
  {
   "begin": "this.setEndToItemIndex(this.mainPlayList, 12, 13)",
   "media": "this.panorama_2493A020_2EC8_DA90_41BE_1A6FAE68E849",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_2493A020_2EC8_DA90_41BE_1A6FAE68E849_camera"
  },
  {
   "begin": "this.setEndToItemIndex(this.mainPlayList, 13, 14)",
   "media": "this.panorama_24B94D08_2EC8_EA90_41C1_6BFAE03E3E02",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_24B94D08_2EC8_EA90_41C1_6BFAE03E3E02_camera"
  },
  {
   "begin": "this.setEndToItemIndex(this.mainPlayList, 14, 15)",
   "media": "this.panorama_2493DB03_2EC8_EE90_41B9_9A931BB034DA",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_2493DB03_2EC8_EE90_41B9_9A931BB034DA_camera"
  },
  {
   "begin": "this.setEndToItemIndex(this.mainPlayList, 15, 16)",
   "media": "this.panorama_2493764E_2EC8_2690_4195_080B59CD09C9",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_2493764E_2EC8_2690_4195_080B59CD09C9_camera"
  },
  {
   "begin": "this.setEndToItemIndex(this.mainPlayList, 16, 17)",
   "media": "this.panorama_24A663B9_2EC8_5DF0_4191_F365AEA11F48",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_24A663B9_2EC8_5DF0_4191_F365AEA11F48_camera"
  },
  {
   "begin": "this.setEndToItemIndex(this.mainPlayList, 17, 18)",
   "media": "this.panorama_24B96F7C_2EC8_6570_419D_97833188ABD5",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_24B96F7C_2EC8_6570_419D_97833188ABD5_camera"
  },
  {
   "begin": "this.setEndToItemIndex(this.mainPlayList, 18, 19)",
   "media": "this.panorama_24933CE7_2EC8_2B90_41B9_291ACC114124",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_24933CE7_2EC8_2B90_41B9_291ACC114124_camera"
  },
  {
   "begin": "this.setEndToItemIndex(this.mainPlayList, 19, 20)",
   "media": "this.panorama_24BB09D8_2EC8_2DB0_41C5_DA73B4006188",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_24BB09D8_2EC8_2DB0_41C5_DA73B4006188_camera"
  },
  {
   "begin": "this.setEndToItemIndex(this.mainPlayList, 20, 21)",
   "media": "this.panorama_2490F757_2ECB_E6B0_41AB_EC8D45FBF4FA",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_2490F757_2ECB_E6B0_41AB_EC8D45FBF4FA_camera"
  },
  {
   "begin": "this.setEndToItemIndex(this.mainPlayList, 21, 22)",
   "media": "this.panorama_24B66547_2ECB_FA9F_41B3_5603B4E3CCF0",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_24B66547_2ECB_FA9F_41B3_5603B4E3CCF0_camera"
  },
  {
   "begin": "this.setEndToItemIndex(this.mainPlayList, 22, 0)",
   "media": "this.panorama_2490D19F_2ECB_DDAF_41B8_2E505E4C9610",
   "end": "this.trigger('tourEnded')",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_2490D19F_2ECB_DDAF_41B8_2E505E4C9610_camera"
  }
 ]
},
{
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 0,
  "pitch": 0
 },
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "id": "panorama_24A663B9_2EC8_5DF0_4191_F365AEA11F48_camera"
},
{
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": -37.65,
  "pitch": 0
 },
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "id": "camera_2B9C68BF_334D_44E8_41C6_AA24774BE8A4"
},
{
 "frames": [
  {
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_2490F757_2ECB_E6B0_41AB_EC8D45FBF4FA_0/d/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "colCount": 4,
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_2490F757_2ECB_E6B0_41AB_EC8D45FBF4FA_0/d/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_2490F757_2ECB_E6B0_41AB_EC8D45FBF4FA_0/d/2/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "front": {
    "levels": [
     {
      "url": "media/panorama_2490F757_2ECB_E6B0_41AB_EC8D45FBF4FA_0/f/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "colCount": 4,
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_2490F757_2ECB_E6B0_41AB_EC8D45FBF4FA_0/f/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_2490F757_2ECB_E6B0_41AB_EC8D45FBF4FA_0/f/2/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_2490F757_2ECB_E6B0_41AB_EC8D45FBF4FA_0/u/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "colCount": 4,
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_2490F757_2ECB_E6B0_41AB_EC8D45FBF4FA_0/u/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_2490F757_2ECB_E6B0_41AB_EC8D45FBF4FA_0/u/2/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_2490F757_2ECB_E6B0_41AB_EC8D45FBF4FA_0/b/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "colCount": 4,
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_2490F757_2ECB_E6B0_41AB_EC8D45FBF4FA_0/b/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_2490F757_2ECB_E6B0_41AB_EC8D45FBF4FA_0/b/2/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "thumbnailUrl": "media/panorama_2490F757_2ECB_E6B0_41AB_EC8D45FBF4FA_t.jpg",
   "class": "CubicPanoramaFrame",
   "left": {
    "levels": [
     {
      "url": "media/panorama_2490F757_2ECB_E6B0_41AB_EC8D45FBF4FA_0/l/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "colCount": 4,
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_2490F757_2ECB_E6B0_41AB_EC8D45FBF4FA_0/l/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_2490F757_2ECB_E6B0_41AB_EC8D45FBF4FA_0/l/2/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_2490F757_2ECB_E6B0_41AB_EC8D45FBF4FA_0/r/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "colCount": 4,
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_2490F757_2ECB_E6B0_41AB_EC8D45FBF4FA_0/r/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_2490F757_2ECB_E6B0_41AB_EC8D45FBF4FA_0/r/2/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   }
  }
 ],
 "label": "24",
 "hfovMin": "150%",
 "id": "panorama_2490F757_2ECB_E6B0_41AB_EC8D45FBF4FA",
 "class": "Panorama",
 "overlays": [
  "this.overlay_2ACB9F58_3206_D644_41B7_185449477B0F",
  "this.panorama_2490F757_2ECB_E6B0_41AB_EC8D45FBF4FA_tcap0"
 ],
 "partial": false,
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "yaw": 175.52,
   "distance": 1,
   "backwardYaw": -99.82,
   "panorama": "this.panorama_24933CE7_2EC8_2B90_41B9_291ACC114124"
  }
 ],
 "hfov": 360,
 "pitch": 0,
 "vfov": 180,
 "thumbnailUrl": "media/panorama_2490F757_2ECB_E6B0_41AB_EC8D45FBF4FA_t.jpg",
 "hfovMax": 130
},
{
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 63.09,
  "pitch": 0
 },
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "id": "camera_2104BB30_334D_45F8_4152_43242FA8B5F8"
},
{
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 0,
  "pitch": 0
 },
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "id": "panorama_24935558_2EC8_5AB0_41C3_DD0CE36C4A12_camera"
},
{
 "frames": [
  {
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_24B96F7C_2EC8_6570_419D_97833188ABD5_0/d/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "colCount": 4,
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_24B96F7C_2EC8_6570_419D_97833188ABD5_0/d/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_24B96F7C_2EC8_6570_419D_97833188ABD5_0/d/2/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "front": {
    "levels": [
     {
      "url": "media/panorama_24B96F7C_2EC8_6570_419D_97833188ABD5_0/f/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "colCount": 4,
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_24B96F7C_2EC8_6570_419D_97833188ABD5_0/f/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_24B96F7C_2EC8_6570_419D_97833188ABD5_0/f/2/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_24B96F7C_2EC8_6570_419D_97833188ABD5_0/u/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "colCount": 4,
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_24B96F7C_2EC8_6570_419D_97833188ABD5_0/u/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_24B96F7C_2EC8_6570_419D_97833188ABD5_0/u/2/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_24B96F7C_2EC8_6570_419D_97833188ABD5_0/b/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "colCount": 4,
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_24B96F7C_2EC8_6570_419D_97833188ABD5_0/b/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_24B96F7C_2EC8_6570_419D_97833188ABD5_0/b/2/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "thumbnailUrl": "media/panorama_24B96F7C_2EC8_6570_419D_97833188ABD5_t.jpg",
   "class": "CubicPanoramaFrame",
   "left": {
    "levels": [
     {
      "url": "media/panorama_24B96F7C_2EC8_6570_419D_97833188ABD5_0/l/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "colCount": 4,
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_24B96F7C_2EC8_6570_419D_97833188ABD5_0/l/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_24B96F7C_2EC8_6570_419D_97833188ABD5_0/l/2/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_24B96F7C_2EC8_6570_419D_97833188ABD5_0/r/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "colCount": 4,
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_24B96F7C_2EC8_6570_419D_97833188ABD5_0/r/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_24B96F7C_2EC8_6570_419D_97833188ABD5_0/r/2/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   }
  }
 ],
 "label": "21",
 "hfovMin": "150%",
 "id": "panorama_24B96F7C_2EC8_6570_419D_97833188ABD5",
 "class": "Panorama",
 "overlays": [
  "this.overlay_252D3255_3202_EE4F_41C5_9CF256B04B12",
  "this.panorama_24B96F7C_2EC8_6570_419D_97833188ABD5_tcap0"
 ],
 "partial": false,
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "yaw": -170.67,
   "distance": 1,
   "backwardYaw": -98.06,
   "panorama": "this.panorama_24A663B9_2EC8_5DF0_4191_F365AEA11F48"
  }
 ],
 "hfov": 360,
 "pitch": 0,
 "vfov": 180,
 "thumbnailUrl": "media/panorama_24B96F7C_2EC8_6570_419D_97833188ABD5_t.jpg",
 "hfovMax": 130
},
{
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": -110.63,
  "pitch": 0
 },
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "id": "camera_22DE9AD2_334D_44B9_41C5_A5EDAEC586FC"
},
{
 "frames": [
  {
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_24BC5D9B_2EC8_25B0_41C4_5A196FBB4EBE_0/d/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "colCount": 4,
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_24BC5D9B_2EC8_25B0_41C4_5A196FBB4EBE_0/d/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_24BC5D9B_2EC8_25B0_41C4_5A196FBB4EBE_0/d/2/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "front": {
    "levels": [
     {
      "url": "media/panorama_24BC5D9B_2EC8_25B0_41C4_5A196FBB4EBE_0/f/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "colCount": 4,
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_24BC5D9B_2EC8_25B0_41C4_5A196FBB4EBE_0/f/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_24BC5D9B_2EC8_25B0_41C4_5A196FBB4EBE_0/f/2/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_24BC5D9B_2EC8_25B0_41C4_5A196FBB4EBE_0/u/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "colCount": 4,
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_24BC5D9B_2EC8_25B0_41C4_5A196FBB4EBE_0/u/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_24BC5D9B_2EC8_25B0_41C4_5A196FBB4EBE_0/u/2/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_24BC5D9B_2EC8_25B0_41C4_5A196FBB4EBE_0/b/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "colCount": 4,
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_24BC5D9B_2EC8_25B0_41C4_5A196FBB4EBE_0/b/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_24BC5D9B_2EC8_25B0_41C4_5A196FBB4EBE_0/b/2/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "thumbnailUrl": "media/panorama_24BC5D9B_2EC8_25B0_41C4_5A196FBB4EBE_t.jpg",
   "class": "CubicPanoramaFrame",
   "left": {
    "levels": [
     {
      "url": "media/panorama_24BC5D9B_2EC8_25B0_41C4_5A196FBB4EBE_0/l/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "colCount": 4,
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_24BC5D9B_2EC8_25B0_41C4_5A196FBB4EBE_0/l/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_24BC5D9B_2EC8_25B0_41C4_5A196FBB4EBE_0/l/2/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_24BC5D9B_2EC8_25B0_41C4_5A196FBB4EBE_0/r/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "colCount": 4,
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_24BC5D9B_2EC8_25B0_41C4_5A196FBB4EBE_0/r/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_24BC5D9B_2EC8_25B0_41C4_5A196FBB4EBE_0/r/2/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   }
  }
 ],
 "label": "09",
 "hfovMin": "150%",
 "id": "panorama_24BC5D9B_2EC8_25B0_41C4_5A196FBB4EBE",
 "class": "Panorama",
 "overlays": [
  "this.overlay_3DF74FBF_320E_363B_41AB_C47E682FBD3B",
  "this.overlay_2353A811_320E_79C4_4174_022E32FEDC7F",
  "this.overlay_20334A03_3202_59CB_41C5_412255ADD0A6",
  "this.overlay_2160F024_3201_E9CD_41B1_9CFA3A9096B8",
  "this.overlay_226B86E8_3246_4FB8_41C0_289A3B6A5737",
  "this.overlay_27003932_32C1_C2A8_41BE_CADCC748E106",
  "this.overlay_27004932_32C1_C2A8_41C4_3D952DD82FE6",
  "this.overlay_24DE9E1E_32C2_3E99_41A7_8657E7C0580A",
  "this.overlay_24DE8E1F_32C2_3E97_41B7_942BD87F2573",
  "this.panorama_24BC5D9B_2EC8_25B0_41C4_5A196FBB4EBE_tcap0"
 ],
 "partial": false,
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "yaw": 176.27,
   "distance": 1,
   "backwardYaw": -97.31,
   "panorama": "this.panorama_24BBDBE9_2EC8_2D93_41C4_423B1CECBEC0"
  },
  {
   "class": "AdjacentPanorama",
   "yaw": 76.03,
   "distance": 1,
   "backwardYaw": 97.39,
   "panorama": "this.panorama_24BA07B5_2EC8_65F0_41C1_AAAA3F505535"
  },
  {
   "class": "AdjacentPanorama",
   "yaw": -89.02,
   "distance": 1,
   "backwardYaw": -176.45,
   "panorama": "this.panorama_24935558_2EC8_5AB0_41C3_DD0CE36C4A12"
  },
  {
   "class": "AdjacentPanorama",
   "yaw": -137.76,
   "distance": 1,
   "backwardYaw": 142.35,
   "panorama": "this.panorama_24BB926B_2EC8_3E90_41A8_84DA0AD93437"
  },
  {
   "class": "AdjacentPanorama",
   "yaw": 12.22,
   "distance": 1,
   "backwardYaw": 175.2,
   "panorama": "this.panorama_24B94D08_2EC8_EA90_41C1_6BFAE03E3E02"
  }
 ],
 "hfov": 360,
 "pitch": 0,
 "vfov": 180,
 "thumbnailUrl": "media/panorama_24BC5D9B_2EC8_25B0_41C4_5A196FBB4EBE_t.jpg",
 "hfovMax": 130
},
{
 "frames": [
  {
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_24A663B9_2EC8_5DF0_4191_F365AEA11F48_0/d/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "colCount": 4,
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_24A663B9_2EC8_5DF0_4191_F365AEA11F48_0/d/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_24A663B9_2EC8_5DF0_4191_F365AEA11F48_0/d/2/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "front": {
    "levels": [
     {
      "url": "media/panorama_24A663B9_2EC8_5DF0_4191_F365AEA11F48_0/f/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "colCount": 4,
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_24A663B9_2EC8_5DF0_4191_F365AEA11F48_0/f/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_24A663B9_2EC8_5DF0_4191_F365AEA11F48_0/f/2/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_24A663B9_2EC8_5DF0_4191_F365AEA11F48_0/u/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "colCount": 4,
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_24A663B9_2EC8_5DF0_4191_F365AEA11F48_0/u/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_24A663B9_2EC8_5DF0_4191_F365AEA11F48_0/u/2/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_24A663B9_2EC8_5DF0_4191_F365AEA11F48_0/b/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "colCount": 4,
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_24A663B9_2EC8_5DF0_4191_F365AEA11F48_0/b/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_24A663B9_2EC8_5DF0_4191_F365AEA11F48_0/b/2/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "thumbnailUrl": "media/panorama_24A663B9_2EC8_5DF0_4191_F365AEA11F48_t.jpg",
   "class": "CubicPanoramaFrame",
   "left": {
    "levels": [
     {
      "url": "media/panorama_24A663B9_2EC8_5DF0_4191_F365AEA11F48_0/l/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "colCount": 4,
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_24A663B9_2EC8_5DF0_4191_F365AEA11F48_0/l/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_24A663B9_2EC8_5DF0_4191_F365AEA11F48_0/l/2/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_24A663B9_2EC8_5DF0_4191_F365AEA11F48_0/r/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "colCount": 4,
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_24A663B9_2EC8_5DF0_4191_F365AEA11F48_0/r/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_24A663B9_2EC8_5DF0_4191_F365AEA11F48_0/r/2/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   }
  }
 ],
 "label": "19",
 "hfovMin": "150%",
 "id": "panorama_24A663B9_2EC8_5DF0_4191_F365AEA11F48",
 "class": "Panorama",
 "overlays": [
  "this.overlay_24F5DD5F_3202_DA7C_41B3_DDE69381B892",
  "this.overlay_24F4E4B0_3201_EAC4_4197_6949A8539C26",
  "this.panorama_24A663B9_2EC8_5DF0_4191_F365AEA11F48_tcap0"
 ],
 "partial": false,
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "yaw": 69.37,
   "distance": 1,
   "backwardYaw": 96.63,
   "panorama": "this.panorama_2493764E_2EC8_2690_4195_080B59CD09C9"
  },
  {
   "class": "AdjacentPanorama",
   "yaw": -98.06,
   "distance": 1,
   "backwardYaw": -170.67,
   "panorama": "this.panorama_24B96F7C_2EC8_6570_419D_97833188ABD5"
  }
 ],
 "hfov": 360,
 "pitch": 0,
 "vfov": 180,
 "thumbnailUrl": "media/panorama_24A663B9_2EC8_5DF0_4191_F365AEA11F48_t.jpg",
 "hfovMax": 130
},
{
 "frames": [
  {
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_24BAB721_2EC9_E690_41C3_7C714E7A53B5_0/d/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "colCount": 4,
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_24BAB721_2EC9_E690_41C3_7C714E7A53B5_0/d/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_24BAB721_2EC9_E690_41C3_7C714E7A53B5_0/d/2/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "front": {
    "levels": [
     {
      "url": "media/panorama_24BAB721_2EC9_E690_41C3_7C714E7A53B5_0/f/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "colCount": 4,
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_24BAB721_2EC9_E690_41C3_7C714E7A53B5_0/f/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_24BAB721_2EC9_E690_41C3_7C714E7A53B5_0/f/2/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_24BAB721_2EC9_E690_41C3_7C714E7A53B5_0/u/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "colCount": 4,
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_24BAB721_2EC9_E690_41C3_7C714E7A53B5_0/u/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_24BAB721_2EC9_E690_41C3_7C714E7A53B5_0/u/2/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_24BAB721_2EC9_E690_41C3_7C714E7A53B5_0/b/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "colCount": 4,
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_24BAB721_2EC9_E690_41C3_7C714E7A53B5_0/b/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_24BAB721_2EC9_E690_41C3_7C714E7A53B5_0/b/2/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "thumbnailUrl": "media/panorama_24BAB721_2EC9_E690_41C3_7C714E7A53B5_t.jpg",
   "class": "CubicPanoramaFrame",
   "left": {
    "levels": [
     {
      "url": "media/panorama_24BAB721_2EC9_E690_41C3_7C714E7A53B5_0/l/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "colCount": 4,
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_24BAB721_2EC9_E690_41C3_7C714E7A53B5_0/l/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_24BAB721_2EC9_E690_41C3_7C714E7A53B5_0/l/2/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_24BAB721_2EC9_E690_41C3_7C714E7A53B5_0/r/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "colCount": 4,
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_24BAB721_2EC9_E690_41C3_7C714E7A53B5_0/r/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_24BAB721_2EC9_E690_41C3_7C714E7A53B5_0/r/2/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   }
  }
 ],
 "label": "05",
 "hfovMin": "150%",
 "id": "panorama_24BAB721_2EC9_E690_41C3_7C714E7A53B5",
 "class": "Panorama",
 "overlays": [
  "this.overlay_3F8E53FC_2EF8_3D70_41AC_854A0CA20D06",
  "this.overlay_3F5758A9_2EC8_6B90_41B9_0D0500D1E9C2",
  "this.overlay_262A6BE6_3242_C5A8_4157_A38D3469031F",
  "this.popup_27E8545F_3242_4297_41C3_848B57B20C2C",
  "this.popup_241B5456_32C6_42E9_41B7_2FCCDA5E3CF0",
  "this.overlay_24ABE4D0_32C1_C3E8_41C6_0592D6AFB412",
  "this.overlay_24AC14D0_32C1_C3E8_41C4_788C7A08CE3C",
  "this.panorama_24BAB721_2EC9_E690_41C3_7C714E7A53B5_tcap0"
 ],
 "partial": false,
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "yaw": -96.05,
   "distance": 1,
   "backwardYaw": 87.09,
   "panorama": "this.panorama_2492E99F_2EC8_2DB0_41C3_A52C968A9FC9"
  },
  {
   "class": "AdjacentPanorama",
   "yaw": 179.79,
   "distance": 1,
   "backwardYaw": 46.14,
   "panorama": "this.panorama_249314F9_2EC9_FB73_41BD_642E1D4B48BC"
  }
 ],
 "hfov": 360,
 "pitch": 0,
 "vfov": 180,
 "thumbnailUrl": "media/panorama_24BAB721_2EC9_E690_41C3_7C714E7A53B5_t.jpg",
 "hfovMax": 130
},
{
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 86.46,
  "pitch": 0
 },
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "id": "camera_22AB1AB3_334D_44F8_41AF_8BBCA2F18801"
},
{
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": -83.37,
  "pitch": 0
 },
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "id": "camera_24EAD7A5_334D_4C9B_4195_E87BF1B17749"
},
{
 "hideDuration": 500,
 "rotationX": 0,
 "yaw": -59.27,
 "rotationZ": 0,
 "showEasing": "cubic_in",
 "rotationY": 0,
 "showDuration": 500,
 "class": "PopupPanoramaOverlay",
 "popupMaxWidth": "50%",
 "popupDistance": 100,
 "popupMaxHeight": "50%",
 "id": "popup_262D6EC2_3246_5FE9_41C3_06D1DF8822D6",
 "image": {
  "levels": [
   {
    "url": "media/popup_262D6EC2_3246_5FE9_41C3_06D1DF8822D6_0_3.jpg",
    "width": 1024,
    "class": "ImageResourceLevel",
    "height": 1024
   }
  ],
  "class": "ImageResource"
 },
 "pitch": -41.24,
 "hideEasing": "cubic_out",
 "hfov": 22.19
},
{
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": -81.61,
  "pitch": 0
 },
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "id": "camera_2BF5692C_334D_45E9_41C1_83604C7520AA"
},
{
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 0,
  "pitch": 0
 },
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "id": "panorama_3E97576C_3242_4EB9_41C5_DA8FE202B423_camera"
},
{
 "frames": [
  {
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_24BA07B5_2EC8_65F0_41C1_AAAA3F505535_0/d/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "colCount": 4,
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_24BA07B5_2EC8_65F0_41C1_AAAA3F505535_0/d/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_24BA07B5_2EC8_65F0_41C1_AAAA3F505535_0/d/2/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "front": {
    "levels": [
     {
      "url": "media/panorama_24BA07B5_2EC8_65F0_41C1_AAAA3F505535_0/f/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "colCount": 4,
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_24BA07B5_2EC8_65F0_41C1_AAAA3F505535_0/f/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_24BA07B5_2EC8_65F0_41C1_AAAA3F505535_0/f/2/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_24BA07B5_2EC8_65F0_41C1_AAAA3F505535_0/u/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "colCount": 4,
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_24BA07B5_2EC8_65F0_41C1_AAAA3F505535_0/u/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_24BA07B5_2EC8_65F0_41C1_AAAA3F505535_0/u/2/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_24BA07B5_2EC8_65F0_41C1_AAAA3F505535_0/b/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "colCount": 4,
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_24BA07B5_2EC8_65F0_41C1_AAAA3F505535_0/b/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_24BA07B5_2EC8_65F0_41C1_AAAA3F505535_0/b/2/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "thumbnailUrl": "media/panorama_24BA07B5_2EC8_65F0_41C1_AAAA3F505535_t.jpg",
   "class": "CubicPanoramaFrame",
   "left": {
    "levels": [
     {
      "url": "media/panorama_24BA07B5_2EC8_65F0_41C1_AAAA3F505535_0/l/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "colCount": 4,
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_24BA07B5_2EC8_65F0_41C1_AAAA3F505535_0/l/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_24BA07B5_2EC8_65F0_41C1_AAAA3F505535_0/l/2/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_24BA07B5_2EC8_65F0_41C1_AAAA3F505535_0/r/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "colCount": 4,
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_24BA07B5_2EC8_65F0_41C1_AAAA3F505535_0/r/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_24BA07B5_2EC8_65F0_41C1_AAAA3F505535_0/r/2/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   }
  }
 ],
 "label": "11",
 "hfovMin": "150%",
 "id": "panorama_24BA07B5_2EC8_65F0_41C1_AAAA3F505535",
 "class": "Panorama",
 "overlays": [
  "this.overlay_39B2BC61_2F48_EA90_41C4_C763B173A452",
  "this.overlay_36F96B38_2F48_2EF0_41B9_7616743BEC6E",
  "this.overlay_21FC18AE_3201_DADC_41B6_48CC3C89F93D",
  "this.overlay_270A26A9_32C6_4FBB_419E_732164430F0F",
  "this.overlay_270A36A9_32C6_4FBB_41C4_C3E0867A498F",
  "this.overlay_25114615_32CE_4E6B_41C8_E40E734769AF",
  "this.popup_2A4303C5_32CE_45EB_41C0_237D68B89C2F",
  "this.overlay_242B9FBE_32C2_3D99_41C7_729018FFFF13",
  "this.overlay_242B8FBF_32C2_3D97_41C2_7232C5824629",
  "this.panorama_24BA07B5_2EC8_65F0_41C1_AAAA3F505535_tcap0"
 ],
 "partial": false,
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "yaw": 23.28,
   "distance": 1,
   "backwardYaw": -68.92,
   "panorama": "this.panorama_24BBDBE9_2EC8_2D93_41C4_423B1CECBEC0"
  },
  {
   "class": "AdjacentPanorama",
   "yaw": 97.39,
   "distance": 1,
   "backwardYaw": 76.03,
   "panorama": "this.panorama_24BC5D9B_2EC8_25B0_41C4_5A196FBB4EBE"
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_24B94D08_2EC8_EA90_41C1_6BFAE03E3E02"
  }
 ],
 "hfov": 360,
 "pitch": 0,
 "vfov": 180,
 "thumbnailUrl": "media/panorama_24BA07B5_2EC8_65F0_41C1_AAAA3F505535_t.jpg",
 "hfovMax": 130
},
{
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 0,
  "pitch": 0
 },
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "id": "panorama_24BC5D9B_2EC8_25B0_41C4_5A196FBB4EBE_camera"
},
{
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 2.8,
  "pitch": 0
 },
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "id": "camera_22A08AA3_334D_449F_41A4_25C5678BD840"
},
{
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 0,
  "pitch": 0
 },
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "id": "panorama_2492E99F_2EC8_2DB0_41C3_A52C968A9FC9_camera"
},
{
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 52.04,
  "pitch": 0
 },
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "id": "camera_2A0E796B_334D_4468_41B1_4A0F6E57D612"
},
{
 "progressBarBorderSize": 0,
 "id": "MainViewer",
 "width": "100%",
 "playbackBarProgressBorderRadius": 0,
 "progressBarBorderRadius": 0,
 "toolTipShadowOpacity": 1,
 "playbackBarBorderRadius": 0,
 "toolTipFontStyle": "normal",
 "paddingLeft": 0,
 "playbackBarProgressBorderColor": "#000000",
 "minHeight": 50,
 "toolTipFontFamily": "Arial",
 "propagateClick": false,
 "toolTipTextShadowOpacity": 0,
 "playbackBarHeadBorderRadius": 0,
 "progressLeft": 0,
 "playbackBarHeadBorderSize": 0,
 "playbackBarProgressOpacity": 1,
 "toolTipShadowVerticalLength": 0,
 "playbackBarBorderSize": 0,
 "transitionDuration": 500,
 "minWidth": 100,
 "playbackBarBackgroundOpacity": 1,
 "height": "100%",
 "toolTipFontColor": "#606060",
 "playbackBarHeadBorderColor": "#000000",
 "vrPointerSelectionColor": "#FF6600",
 "toolTipBackgroundColor": "#F6F6F6",
 "toolTipShadowHorizontalLength": 0,
 "playbackBarHeadShadowHorizontalLength": 0,
 "playbackBarHeadShadowColor": "#000000",
 "borderSize": 0,
 "progressRight": 0,
 "firstTransitionDuration": 0,
 "progressOpacity": 1,
 "playbackBarHeadBackgroundColor": [
  "#111111",
  "#666666"
 ],
 "vrPointerSelectionTime": 2000,
 "progressBarBackgroundColorDirection": "vertical",
 "progressBottom": 0,
 "progressHeight": 10,
 "playbackBarHeadShadow": true,
 "shadow": false,
 "playbackBarHeadBackgroundColorDirection": "vertical",
 "progressBackgroundOpacity": 1,
 "playbackBarProgressBackgroundColor": [
  "#3399FF"
 ],
 "playbackBarOpacity": 1,
 "toolTipPaddingRight": 6,
 "playbackBarHeadShadowOpacity": 0.7,
 "toolTipBorderSize": 1,
 "toolTipPaddingLeft": 6,
 "toolTipPaddingTop": 4,
 "vrPointerColor": "#FFFFFF",
 "toolTipDisplayTime": 600,
 "progressBarOpacity": 1,
 "playbackBarBorderColor": "#FFFFFF",
 "progressBorderSize": 0,
 "transitionMode": "blending",
 "displayTooltipInTouchScreens": true,
 "toolTipBorderRadius": 3,
 "borderRadius": 0,
 "progressBorderRadius": 0,
 "paddingRight": 0,
 "playbackBarProgressBackgroundColorRatios": [
  0
 ],
 "playbackBarLeft": 0,
 "progressBackgroundColorRatios": [
  0
 ],
 "playbackBarHeadHeight": 15,
 "playbackBarHeadShadowBlurRadius": 3,
 "playbackBarHeadShadowVerticalLength": 0,
 "playbackBarHeadBackgroundColorRatios": [
  0,
  1
 ],
 "progressBarBorderColor": "#000000",
 "toolTipBorderColor": "#767676",
 "progressBarBackgroundColorRatios": [
  0
 ],
 "progressBackgroundColorDirection": "vertical",
 "toolTipShadowSpread": 0,
 "toolTipShadowBlurRadius": 3,
 "class": "ViewerArea",
 "toolTipTextShadowColor": "#000000",
 "toolTipOpacity": 1,
 "playbackBarHeadOpacity": 1,
 "playbackBarBottom": 5,
 "progressBarBackgroundColor": [
  "#3399FF"
 ],
 "paddingTop": 0,
 "progressBorderColor": "#000000",
 "toolTipPaddingBottom": 4,
 "paddingBottom": 0,
 "toolTipFontSize": "1.11vmin",
 "toolTipTextShadowBlurRadius": 3,
 "progressBackgroundColor": [
  "#FFFFFF"
 ],
 "playbackBarProgressBackgroundColorDirection": "vertical",
 "toolTipShadowColor": "#333333",
 "playbackBarBackgroundColor": [
  "#FFFFFF"
 ],
 "data": {
  "name": "Main Viewer"
 },
 "playbackBarHeight": 10,
 "playbackBarHeadWidth": 6,
 "playbackBarBackgroundColorDirection": "vertical",
 "toolTipFontWeight": "normal",
 "playbackBarProgressBorderSize": 0,
 "playbackBarRight": 0
},
{
 "id": "veilPopupPanorama",
 "left": 0,
 "showEffect": {
  "duration": 350,
  "class": "FadeInEffect",
  "easing": "cubic_in_out"
 },
 "backgroundOpacity": 0.55,
 "right": 0,
 "paddingRight": 0,
 "paddingLeft": 0,
 "borderRadius": 0,
 "backgroundColorRatios": [
  0
 ],
 "propagateClick": false,
 "minHeight": 0,
 "top": 0,
 "bottom": 0,
 "backgroundColor": [
  "#000000"
 ],
 "minWidth": 0,
 "class": "UIComponent",
 "borderSize": 0,
 "paddingTop": 0,
 "backgroundColorDirection": "vertical",
 "paddingBottom": 0,
 "data": {
  "name": "UIComponent6668"
 },
 "shadow": false,
 "visible": false
},
{
 "id": "zoomImagePopupPanorama",
 "left": 0,
 "backgroundOpacity": 1,
 "right": 0,
 "paddingRight": 0,
 "paddingLeft": 0,
 "borderRadius": 0,
 "backgroundColorRatios": [],
 "propagateClick": false,
 "minHeight": 0,
 "top": 0,
 "bottom": 0,
 "backgroundColor": [],
 "minWidth": 0,
 "class": "ZoomImage",
 "borderSize": 0,
 "paddingTop": 0,
 "backgroundColorDirection": "vertical",
 "paddingBottom": 0,
 "scaleMode": "custom",
 "data": {
  "name": "ZoomImage6669"
 },
 "shadow": false,
 "visible": false
},
{
 "textDecoration": "none",
 "fontFamily": "Arial",
 "horizontalAlign": "center",
 "id": "closeButtonPopupPanorama",
 "backgroundOpacity": 0.3,
 "showEffect": {
  "duration": 350,
  "class": "FadeInEffect",
  "easing": "cubic_in_out"
 },
 "shadowColor": "#000000",
 "right": 10,
 "iconHeight": 20,
 "paddingRight": 5,
 "paddingLeft": 5,
 "borderRadius": 0,
 "iconColor": "#000000",
 "backgroundColorRatios": [
  0,
  0.1,
  1
 ],
 "propagateClick": false,
 "minHeight": 0,
 "top": 10,
 "verticalAlign": "middle",
 "rollOverIconColor": "#666666",
 "pressedIconColor": "#888888",
 "iconBeforeLabel": true,
 "backgroundColor": [
  "#DDDDDD",
  "#EEEEEE",
  "#FFFFFF"
 ],
 "borderColor": "#000000",
 "minWidth": 0,
 "mode": "push",
 "fontSize": "1.29vmin",
 "class": "CloseButton",
 "paddingTop": 5,
 "backgroundColorDirection": "vertical",
 "paddingBottom": 5,
 "label": "",
 "fontStyle": "normal",
 "borderSize": 0,
 "iconLineWidth": 5,
 "gap": 5,
 "layout": "horizontal",
 "data": {
  "name": "CloseButton6670"
 },
 "shadow": false,
 "iconWidth": 20,
 "visible": false,
 "shadowBlurRadius": 6,
 "shadowSpread": 1,
 "cursor": "hand",
 "fontColor": "#FFFFFF",
 "fontWeight": "normal"
},
{
 "useHandCursor": true,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -177.2,
   "hfov": 14.91,
   "image": {
    "levels": [
     {
      "url": "media/panorama_24964DBD_2EC8_65F3_4186_70DC22D46559_1_HS_0_0_0_map.gif",
      "width": 37,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -22.63
  }
 ],
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_3C900715_2EF8_66B0_41A7_3AE43A1D211A",
   "pitch": -22.63,
   "yaw": -177.2,
   "hfov": 14.91,
   "distance": 100
  }
 ],
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_3E97576C_3242_4EB9_41C5_DA8FE202B423, this.camera_24FFC786_334D_4C99_41BB_8CE3D127ABB3); this.mainPlayList.set('selectedIndex', 0)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "class": "HotspotPanoramaOverlay",
 "id": "overlay_23216309_2EC8_5E90_41AD_FB4D8840DA61",
 "data": {
  "label": "Circle Arrow 01b"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 84.32,
   "hfov": 14.11,
   "image": {
    "levels": [
     {
      "url": "media/panorama_24964DBD_2EC8_65F3_4186_70DC22D46559_0_HS_1_0_0_map.gif",
      "width": 37,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -29.16
  }
 ],
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_3D51671E_2EF9_E6B1_4188_5A6CF36AD6A0",
   "pitch": -29.16,
   "yaw": 84.32,
   "hfov": 14.11,
   "distance": 100
  }
 ],
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_24BBDBE9_2EC8_2D93_41C4_423B1CECBEC0, this.camera_24CE0767_334D_4C67_41C3_91A07EC0F734); this.mainPlayList.set('selectedIndex', 2)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "class": "HotspotPanoramaOverlay",
 "id": "overlay_21DC36BF_2EF8_27F0_41A8_9C65BEB46244",
 "data": {
  "label": "Circle Arrow 01b"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -59.27,
   "hfov": 25.16,
   "image": {
    "levels": [
     {
      "url": "media/panorama_24964DBD_2EC8_65F3_4186_70DC22D46559_1_HS_2_1_0_map.gif",
      "width": 151,
      "class": "ImageResourceLevel",
      "height": 200
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -41.24
  }
 ],
 "areas": [
  {
   "rollOver": "this.showPopupPanoramaOverlay(this.popup_262D6EC2_3246_5FE9_41C3_06D1DF8822D6, {'pressedBackgroundOpacity':0.3,'rollOverBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'pressedIconColor':'#888888','rollOverBorderSize':0,'backgroundOpacity':0.3,'iconWidth':20,'borderSize':0,'pressedBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'iconHeight':20,'paddingBottom':5,'pressedBorderColor':'#000000','rollOverBackgroundColorDirection':'vertical','backgroundColorDirection':'vertical','iconColor':'#000000','rollOverBackgroundColorRatios':[0,0.09803921568627451,1],'paddingLeft':5,'pressedIconLineWidth':5,'pressedBorderSize':0,'rollOverBorderColor':'#000000','iconLineWidth':5,'rollOverBackgroundOpacity':0.3,'backgroundColorRatios':[0,0.09803921568627451,1],'rollOverIconHeight':20,'rollOverIconColor':'#666666','rollOverIconWidth':20,'pressedBackgroundColorDirection':'vertical','pressedIconWidth':20,'pressedIconHeight':20,'paddingRight':5,'pressedBackgroundColorRatios':[0,0.09803921568627451,1],'paddingTop':5,'rollOverIconLineWidth':5,'backgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'borderColor':'#000000'}, this.ImageResource_2419F235_3246_46AB_41C6_7A163F437608, null, null, null, null, false)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "class": "HotspotPanoramaOverlay",
 "id": "overlay_20EFCD4A_3241_C2F9_41B4_33138BCAF8EB",
 "data": {
  "label": "Polygon"
 }
},
{
 "inertia": true,
 "hfov": 19.5,
 "angle": 0,
 "image": {
  "levels": [
   {
    "url": "media/panorama_3E97576C_3242_4EB9_41C5_DA8FE202B423_tcap0.png",
    "width": 850,
    "class": "ImageResourceLevel",
    "height": 850
   }
  ],
  "class": "ImageResource"
 },
 "rotate": false,
 "class": "TripodCapPanoramaOverlay",
 "id": "panorama_24964DBD_2EC8_65F3_4186_70DC22D46559_tcap0",
 "distance": 50
},
{
 "useHandCursor": true,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -170.92,
   "hfov": 14.34,
   "image": {
    "levels": [
     {
      "url": "media/panorama_2493764E_2EC8_2690_4195_080B59CD09C9_0_HS_0_0_0_map.gif",
      "width": 37,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -27.4
  }
 ],
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_10D70291_3201_EEC4_41A5_EAC5A3CADF76",
   "pitch": -27.4,
   "yaw": -170.92,
   "hfov": 14.34,
   "distance": 100
  }
 ],
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_2493DB03_2EC8_EE90_41B9_9A931BB034DA, this.camera_22D56AC2_334D_4499_41A6_C2619502B1FB); this.mainPlayList.set('selectedIndex', 14)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "class": "HotspotPanoramaOverlay",
 "id": "overlay_275C53C1_3202_2E44_41C5_E61DBFE4C430",
 "data": {
  "label": "Circle Arrow 01b"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 96.63,
   "hfov": 8.5,
   "image": {
    "levels": [
     {
      "url": "media/panorama_2493764E_2EC8_2690_4195_080B59CD09C9_0_HS_1_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -9.31
  }
 ],
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_10D6D296_3201_EECC_41B0_35FB4AB7B3B9",
   "pitch": -9.31,
   "yaw": 96.63,
   "hfov": 8.5,
   "distance": 100
  }
 ],
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_24A663B9_2EC8_5DF0_4191_F365AEA11F48, this.camera_22DE9AD2_334D_44B9_41C5_A5EDAEC586FC); this.mainPlayList.set('selectedIndex', 16)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "class": "HotspotPanoramaOverlay",
 "id": "overlay_24D39D8B_3202_5AC4_41BF_10685A9AAF12",
 "data": {
  "label": "Circle Arrow 01b"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 28.05,
   "hfov": 8.53,
   "image": {
    "levels": [
     {
      "url": "media/panorama_2493764E_2EC8_2690_4195_080B59CD09C9_0_HS_2_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -8.31
  }
 ],
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_2D86106B_321F_EA44_41C8_F5462B742115",
   "pitch": -8.31,
   "yaw": 28.05,
   "hfov": 8.53,
   "distance": 100
  }
 ],
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_24933CE7_2EC8_2B90_41B9_291ACC114124, this.camera_22C8BAE2_334D_4498_4181_AE45F0D4DCDA); this.mainPlayList.set('selectedIndex', 18)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "class": "HotspotPanoramaOverlay",
 "id": "overlay_25C34E5B_3203_D644_41B5_157689F4A30E",
 "data": {
  "label": "Circle Arrow 01b"
 }
},
{
 "inertia": true,
 "hfov": 19.5,
 "angle": 0,
 "image": {
  "levels": [
   {
    "url": "media/panorama_3E97576C_3242_4EB9_41C5_DA8FE202B423_tcap0.png",
    "width": 850,
    "class": "ImageResourceLevel",
    "height": 850
   }
  ],
  "class": "ImageResource"
 },
 "rotate": false,
 "class": "TripodCapPanoramaOverlay",
 "id": "panorama_2493764E_2EC8_2690_4195_080B59CD09C9_tcap0",
 "distance": 50
},
{
 "useHandCursor": true,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -172.93,
   "hfov": 14.47,
   "image": {
    "levels": [
     {
      "url": "media/panorama_24BB926B_2EC8_3E90_41A8_84DA0AD93437_0_HS_0_0_0_map.gif",
      "width": 37,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -26.4
  }
 ],
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_20CBBDCC_320E_3A5C_41B6_FD7B775F4CDA",
   "pitch": -26.4,
   "yaw": -172.93,
   "hfov": 14.47,
   "distance": 100
  }
 ],
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_24BBDBE9_2EC8_2D93_41C4_423B1CECBEC0, this.camera_22E99B01_334D_4598_41B1_E0491ACA69A4); this.mainPlayList.set('selectedIndex', 2)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "class": "HotspotPanoramaOverlay",
 "id": "overlay_3D146198_3202_6AC4_41A3_FD95B4B68F6B",
 "data": {
  "label": "Circle Arrow 01b"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 142.35,
   "hfov": 13.93,
   "image": {
    "levels": [
     {
      "url": "media/panorama_24BB926B_2EC8_3E90_41A8_84DA0AD93437_0_HS_1_0_0_map.gif",
      "width": 37,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -30.42
  }
 ],
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_2418D1C7_3246_45E8_41C1_D812369F3FC6",
   "pitch": -30.42,
   "yaw": 142.35,
   "hfov": 13.93,
   "distance": 100
  }
 ],
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_24BC5D9B_2EC8_25B0_41C4_5A196FBB4EBE, this.camera_21113B10_334D_45B9_4182_9AB5BDDD2F61); this.mainPlayList.set('selectedIndex', 8)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "class": "HotspotPanoramaOverlay",
 "id": "overlay_23266DAD_3202_7ADC_41C5_5D0968CF5B78",
 "data": {
  "label": "Circle Arrow 01b"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 80.3,
   "hfov": 13.82,
   "image": {
    "levels": [
     {
      "url": "media/panorama_24BB926B_2EC8_3E90_41A8_84DA0AD93437_0_HS_2_0_0_map.gif",
      "width": 37,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -31.17
  }
 ],
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_24A8F66E_3202_D65C_41BA_77FE011DDCDD",
   "pitch": -31.17,
   "yaw": 80.3,
   "hfov": 13.82,
   "distance": 100
  }
 ],
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_2493A020_2EC8_DA90_41BE_1A6FAE68E849, this.camera_2104BB30_334D_45F8_4152_43242FA8B5F8); this.mainPlayList.set('selectedIndex', 12)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "class": "HotspotPanoramaOverlay",
 "id": "overlay_20FC0663_3206_D644_41BF_2F5CAC15B552",
 "data": {
  "label": "Circle Arrow 01b"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 124.27,
   "hfov": 12.82,
   "image": {
    "levels": [
     {
      "url": "media/panorama_24BB926B_2EC8_3E90_41A8_84DA0AD93437_0_HS_3_0_0_map.gif",
      "width": 37,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -37.45
  }
 ],
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_241F41C8_3246_45F8_41C8_F764B387D2E0",
   "pitch": -37.45,
   "yaw": 124.27,
   "hfov": 12.82,
   "distance": 100
  }
 ],
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_24935558_2EC8_5AB0_41C3_DD0CE36C4A12, this.camera_211B7B20_334D_4599_41C0_F39B2FA712E4); this.mainPlayList.set('selectedIndex', 10)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "class": "HotspotPanoramaOverlay",
 "id": "overlay_20FA1370_3246_46A9_4188_7D00C6177FB8",
 "data": {
  "label": "Circle Arrow 01b"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 81.65,
   "hfov": 16.96,
   "image": {
    "levels": [
     {
      "url": "media/panorama_24BB926B_2EC8_3E90_41A8_84DA0AD93437_0_HS_4_0_map.gif",
      "width": 42,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -12
  }
 ],
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": {
    "levels": [
     {
      "url": "media/panorama_24BB926B_2EC8_3E90_41A8_84DA0AD93437_0_HS_4_0.png",
      "width": 258,
      "class": "ImageResourceLevel",
      "height": 97
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -12,
   "yaw": 81.65,
   "hfov": 16.96,
   "distance": 50
  }
 ],
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "class": "HotspotPanoramaOverlay",
 "id": "overlay_272307BE_32CE_CD98_41BF_DAD6A104FDA4",
 "data": {
  "label": "KITCHEN"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 80.56,
   "hfov": 8.71,
   "image": {
    "levels": [
     {
      "url": "media/panorama_24BB926B_2EC8_3E90_41A8_84DA0AD93437_0_HS_5_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -17.31
  }
 ],
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_13707972_32C2_C2A8_415B_FC1FCC98FF6C",
   "pitch": -17.31,
   "yaw": 80.56,
   "hfov": 8.71,
   "distance": 100
  }
 ],
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "class": "HotspotPanoramaOverlay",
 "id": "overlay_241CD993_32C2_4268_41AD_7B54532FD815",
 "data": {
  "label": "Info Red 02"
 }
},
{
 "inertia": true,
 "hfov": 19.5,
 "angle": 0,
 "image": {
  "levels": [
   {
    "url": "media/panorama_3E97576C_3242_4EB9_41C5_DA8FE202B423_tcap0.png",
    "width": 850,
    "class": "ImageResourceLevel",
    "height": 850
   }
  ],
  "class": "ImageResource"
 },
 "rotate": false,
 "class": "TripodCapPanoramaOverlay",
 "id": "panorama_24BB926B_2EC8_3E90_41A8_84DA0AD93437_tcap0",
 "distance": 50
},
{
 "useHandCursor": true,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -128.96,
   "hfov": 13.23,
   "image": {
    "levels": [
     {
      "url": "media/panorama_24BB09D8_2EC8_2DB0_41C5_DA73B4006188_0_HS_0_0_0_map.gif",
      "width": 37,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -25.39
  }
 ],
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_2D89006B_321F_EA44_41BC_1F2B7612DAC2",
   "pitch": -25.39,
   "yaw": -128.96,
   "hfov": 13.23,
   "distance": 100
  }
 ],
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_24933CE7_2EC8_2B90_41B9_291ACC114124, this.camera_21255B5F_334D_45A8_41B1_AE73299E14AE); this.mainPlayList.set('selectedIndex', 18)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "class": "HotspotPanoramaOverlay",
 "id": "overlay_2828CF01_3203_D7C7_41C1_257AD7533CA1",
 "data": {
  "label": "Circle Arrow 01b"
 }
},
{
 "inertia": true,
 "hfov": 19.5,
 "angle": 0,
 "image": {
  "levels": [
   {
    "url": "media/panorama_3E97576C_3242_4EB9_41C5_DA8FE202B423_tcap0.png",
    "width": 850,
    "class": "ImageResourceLevel",
    "height": 850
   }
  ],
  "class": "ImageResource"
 },
 "rotate": false,
 "class": "TripodCapPanoramaOverlay",
 "id": "panorama_24BB09D8_2EC8_2DB0_41C5_DA73B4006188_tcap0",
 "distance": 50
},
{
 "useHandCursor": true,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -93.54,
   "hfov": 14.91,
   "image": {
    "levels": [
     {
      "url": "media/panorama_24BA736F_2EC9_DE90_41C5_F9EA6B0CA694_0_HS_0_0_0_map.gif",
      "width": 37,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -22.63
  }
 ],
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_36B7C42D_2ED8_3A90_4168_2DCB946F74ED",
   "pitch": -22.63,
   "yaw": -93.54,
   "hfov": 14.91,
   "distance": 100
  }
 ],
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_24932127_2EC8_3A90_41BC_8D9A880CACCD, this.camera_2BE2093C_334D_45E8_41A8_AFE1F876D827); this.mainPlayList.set('selectedIndex', 7)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "class": "HotspotPanoramaOverlay",
 "id": "overlay_3C3B42C1_2ED7_DF90_41C2_8C89C25A3A2F",
 "data": {
  "label": "Circle Arrow 01b"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 168.48,
   "hfov": 14.24,
   "image": {
    "levels": [
     {
      "url": "media/panorama_24BA736F_2EC9_DE90_41C5_F9EA6B0CA694_0_HS_1_0_0_map.gif",
      "width": 37,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -28.16
  }
 ],
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_28015F07_32C2_DE77_415D_965A13609DB6",
   "pitch": -28.16,
   "yaw": 168.48,
   "hfov": 14.24,
   "distance": 100
  }
 ],
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_24BBDBE9_2EC8_2D93_41C4_423B1CECBEC0, this.camera_2A13F94B_334D_45AF_41C7_8F654813BAD0); this.mainPlayList.set('selectedIndex', 2)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "class": "HotspotPanoramaOverlay",
 "id": "overlay_3AFFC92C_2ED8_EA90_41A6_D04EB2B0E77F",
 "data": {
  "label": "Circle Arrow 01b"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 37.67,
   "hfov": 14.83,
   "image": {
    "levels": [
     {
      "url": "media/panorama_24BA736F_2EC9_DE90_41C5_F9EA6B0CA694_0_HS_2_0_map.gif",
      "width": 76,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -2.07
  }
 ],
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": {
    "levels": [
     {
      "url": "media/panorama_24BA736F_2EC9_DE90_41C5_F9EA6B0CA694_0_HS_2_0.png",
      "width": 221,
      "class": "ImageResourceLevel",
      "height": 46
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -2.07,
   "yaw": 37.67,
   "hfov": 14.83,
   "distance": 50
  }
 ],
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "class": "HotspotPanoramaOverlay",
 "id": "overlay_24DF76B5_32CE_4FAB_41C1_A170AA3F4C97",
 "data": {
  "label": "SHALINI PALACE"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -34.85,
   "hfov": 7.18,
   "image": {
    "levels": [
     {
      "url": "media/panorama_24BA736F_2EC9_DE90_41C5_F9EA6B0CA694_0_HS_3_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -8.6
  }
 ],
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_129F31E8_32C6_45B9_41BE_01F895FA0D08",
   "pitch": -8.6,
   "yaw": -34.85,
   "hfov": 7.18,
   "distance": 100
  }
 ],
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "class": "HotspotPanoramaOverlay",
 "id": "overlay_24DF66B5_32CE_4FAB_417C_5B898845AF33",
 "data": {
  "label": "Info Red 02"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -33.66,
   "hfov": 14.8,
   "image": {
    "levels": [
     {
      "url": "media/panorama_24BA736F_2EC9_DE90_41C5_F9EA6B0CA694_0_HS_4_0_map.gif",
      "width": 76,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -3.71
  }
 ],
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": {
    "levels": [
     {
      "url": "media/panorama_24BA736F_2EC9_DE90_41C5_F9EA6B0CA694_0_HS_4_0.png",
      "width": 221,
      "class": "ImageResourceLevel",
      "height": 46
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -3.71,
   "yaw": -33.66,
   "hfov": 14.8,
   "distance": 50
  }
 ],
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "class": "HotspotPanoramaOverlay",
 "id": "overlay_24AB79D0_32C2_45E9_41BF_5291A2FE7F67",
 "data": {
  "label": "RANKALA LAKE"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 37.3,
   "hfov": 7.22,
   "image": {
    "levels": [
     {
      "url": "media/panorama_24BA736F_2EC9_DE90_41C5_F9EA6B0CA694_0_HS_5_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -6.45
  }
 ],
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_129FA1E8_32C6_45B9_41BA_45ED88330D72",
   "pitch": -6.45,
   "yaw": 37.3,
   "hfov": 7.22,
   "distance": 100
  }
 ],
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "class": "HotspotPanoramaOverlay",
 "id": "overlay_2597F3C0_32C2_45E9_41BC_250DE6CF2E13",
 "data": {
  "label": "Info Red 02"
 }
},
{
 "inertia": true,
 "hfov": 19.5,
 "angle": 0,
 "image": {
  "levels": [
   {
    "url": "media/panorama_3E97576C_3242_4EB9_41C5_DA8FE202B423_tcap0.png",
    "width": 850,
    "class": "ImageResourceLevel",
    "height": 850
   }
  ],
  "class": "ImageResource"
 },
 "rotate": false,
 "class": "TripodCapPanoramaOverlay",
 "id": "panorama_24BA736F_2EC9_DE90_41C5_F9EA6B0CA694_tcap0",
 "distance": 50
},
{
 "useHandCursor": true,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 86,
   "hfov": 15.66,
   "image": {
    "levels": [
     {
      "url": "media/panorama_24B94D08_2EC8_EA90_41C1_6BFAE03E3E02_0_HS_0_0_0_map.gif",
      "width": 37,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -14.27
  }
 ],
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_2DFFDAB2_3202_5EC5_418E_B47FF7F750A0",
   "pitch": -14.27,
   "yaw": 86,
   "hfov": 15.66,
   "distance": 100
  }
 ],
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_2493DB03_2EC8_EE90_41B9_9A931BB034DA, this.camera_2BF5692C_334D_45E9_41C1_83604C7520AA); this.mainPlayList.set('selectedIndex', 14)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "class": "HotspotPanoramaOverlay",
 "id": "overlay_262CEFA0_3201_F6C5_4199_CCBCFA0E6ACE",
 "data": {
  "label": "Circle Arrow 01b"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 175.2,
   "hfov": 12.98,
   "image": {
    "levels": [
     {
      "url": "media/panorama_24B94D08_2EC8_EA90_41C1_6BFAE03E3E02_0_HS_1_0_0_map.gif",
      "width": 37,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -36.56
  }
 ],
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_2DFF0AB2_3202_5EC5_418B_621ABD5CCAA1",
   "pitch": -36.56,
   "yaw": 175.2,
   "hfov": 12.98,
   "distance": 100
  }
 ],
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_24BC5D9B_2EC8_25B0_41C4_5A196FBB4EBE, this.camera_2BC4391C_334D_45A9_41B0_2ADF23CB621A); this.mainPlayList.set('selectedIndex', 8)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "class": "HotspotPanoramaOverlay",
 "id": "overlay_248C0BBB_3202_7E3B_41B5_66095B57A48F",
 "data": {
  "label": "Circle Arrow 01b"
 }
},
{
 "inertia": true,
 "hfov": 19.5,
 "angle": 0,
 "image": {
  "levels": [
   {
    "url": "media/panorama_3E97576C_3242_4EB9_41C5_DA8FE202B423_tcap0.png",
    "width": 850,
    "class": "ImageResourceLevel",
    "height": 850
   }
  ],
  "class": "ImageResource"
 },
 "rotate": false,
 "class": "TripodCapPanoramaOverlay",
 "id": "panorama_24B94D08_2EC8_EA90_41C1_6BFAE03E3E02_tcap0",
 "distance": 50
},
{
 "useHandCursor": true,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 98.39,
   "hfov": 14.77,
   "image": {
    "levels": [
     {
      "url": "media/panorama_2493DB03_2EC8_EE90_41B9_9A931BB034DA_0_HS_0_0_0_map.gif",
      "width": 37,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -23.89
  }
 ],
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_2445D51F_323E_6BFC_41BB_DEF5DFC9ECBB",
   "pitch": -23.89,
   "yaw": 98.39,
   "hfov": 14.77,
   "distance": 100
  }
 ],
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_24B94D08_2EC8_EA90_41C1_6BFAE03E3E02, this.camera_215A8B7E_334D_4468_41BE_A10884025D28); this.mainPlayList.set('selectedIndex', 13)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "class": "HotspotPanoramaOverlay",
 "id": "overlay_27100AAB_323E_3EC4_4196_3C399AED8249",
 "data": {
  "label": "Circle Arrow 01b"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 4.43,
   "hfov": 15.58,
   "image": {
    "levels": [
     {
      "url": "media/panorama_2493DB03_2EC8_EE90_41B9_9A931BB034DA_0_HS_1_0_0_map.gif",
      "width": 37,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -15.34
  }
 ],
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_2AF27458_3206_2A44_41C4_67170E33C79F",
   "pitch": -15.34,
   "yaw": 4.43,
   "hfov": 15.58,
   "distance": 100
  }
 ],
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_2493764E_2EC8_2690_4195_080B59CD09C9, this.camera_212E7B6E_334D_4469_41C8_B31AD1D86EEE); this.mainPlayList.set('selectedIndex', 15)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "class": "HotspotPanoramaOverlay",
 "id": "overlay_2755C967_3202_DA4C_419D_4BAAB17A05A1",
 "data": {
  "label": "Circle Arrow 01b"
 }
},
{
 "inertia": true,
 "hfov": 19.5,
 "angle": 0,
 "image": {
  "levels": [
   {
    "url": "media/panorama_3E97576C_3242_4EB9_41C5_DA8FE202B423_tcap0.png",
    "width": 850,
    "class": "ImageResourceLevel",
    "height": 850
   }
  ],
  "class": "ImageResource"
 },
 "rotate": false,
 "class": "TripodCapPanoramaOverlay",
 "id": "panorama_2493DB03_2EC8_EE90_41B9_9A931BB034DA_tcap0",
 "distance": 50
},
{
 "useHandCursor": true,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -3.35,
   "hfov": 14.77,
   "image": {
    "levels": [
     {
      "url": "media/panorama_3E97576C_3242_4EB9_41C5_DA8FE202B423_1_HS_0_0_0_map.gif",
      "width": 37,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -23.89
  }
 ],
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_22C5DAF5_3242_47AB_41B3_69A513D05518",
   "pitch": -23.89,
   "yaw": -3.35,
   "hfov": 14.77,
   "distance": 100
  }
 ],
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_24964DBD_2EC8_65F3_4186_70DC22D46559, this.camera_22A08AA3_334D_449F_41A4_25C5678BD840); this.mainPlayList.set('selectedIndex', 1)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "class": "HotspotPanoramaOverlay",
 "id": "overlay_3C4141D7_3242_4597_41B9_AD2544AC190B",
 "data": {
  "label": "Circle Arrow 01b"
 }
},
{
 "inertia": true,
 "hfov": 19.5,
 "angle": 0,
 "image": {
  "levels": [
   {
    "url": "media/panorama_3E97576C_3242_4EB9_41C5_DA8FE202B423_tcap0.png",
    "width": 850,
    "class": "ImageResourceLevel",
    "height": 850
   }
  ],
  "class": "ImageResource"
 },
 "rotate": false,
 "class": "TripodCapPanoramaOverlay",
 "id": "panorama_3E97576C_3242_4EB9_41C5_DA8FE202B423_tcap0",
 "distance": 50
},
{
 "useHandCursor": true,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -116.91,
   "hfov": 14.37,
   "image": {
    "levels": [
     {
      "url": "media/panorama_2493A020_2EC8_DA90_41BE_1A6FAE68E849_0_HS_0_0_0_map.gif",
      "width": 37,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -27.15
  }
 ],
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_24A8A66E_3202_D65C_41C8_4AE067EAF1AE",
   "pitch": -27.15,
   "yaw": -116.91,
   "hfov": 14.37,
   "distance": 100
  }
 ],
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_24BB926B_2EC8_3E90_41A8_84DA0AD93437, this.camera_2B36C803_334D_439F_41C2_903DA0927B19); this.mainPlayList.set('selectedIndex', 11)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "class": "HotspotPanoramaOverlay",
 "id": "overlay_20E783C0_3201_EE45_41AF_FA4DB6B750BB",
 "data": {
  "label": "Circle Arrow 01b"
 }
},
{
 "inertia": true,
 "hfov": 19.5,
 "angle": 0,
 "image": {
  "levels": [
   {
    "url": "media/panorama_3E97576C_3242_4EB9_41C5_DA8FE202B423_tcap0.png",
    "width": 850,
    "class": "ImageResourceLevel",
    "height": 850
   }
  ],
  "class": "ImageResource"
 },
 "rotate": false,
 "class": "TripodCapPanoramaOverlay",
 "id": "panorama_2493A020_2EC8_DA90_41BE_1A6FAE68E849_tcap0",
 "distance": 50
},
{
 "useHandCursor": true,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -171.67,
   "hfov": 15.61,
   "image": {
    "levels": [
     {
      "url": "media/panorama_24932127_2EC8_3A90_41BC_8D9A880CACCD_0_HS_0_0_0_map.gif",
      "width": 37,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -14.84
  }
 ],
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_36B7742D_2ED8_3A90_41AE_9B87E206C768",
   "pitch": -14.84,
   "yaw": -171.67,
   "hfov": 15.61,
   "distance": 100
  }
 ],
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_24BA736F_2EC9_DE90_41C5_F9EA6B0CA694, this.camera_22AB1AB3_334D_44F8_41AF_8BBCA2F18801); this.mainPlayList.set('selectedIndex', 6)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "class": "HotspotPanoramaOverlay",
 "id": "overlay_3D8BB9EE_2ED8_ED90_41BD_68028829017D",
 "data": {
  "label": "Circle Arrow 01b"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 139.09,
   "hfov": 14.83,
   "image": {
    "levels": [
     {
      "url": "media/panorama_24932127_2EC8_3A90_41BC_8D9A880CACCD_0_HS_1_0_map.gif",
      "width": 78,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -2.06
  }
 ],
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": {
    "levels": [
     {
      "url": "media/panorama_24932127_2EC8_3A90_41BC_8D9A880CACCD_0_HS_1_0.png",
      "width": 221,
      "class": "ImageResourceLevel",
      "height": 45
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -2.06,
   "yaw": 139.09,
   "hfov": 14.83,
   "distance": 50
  }
 ],
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "class": "HotspotPanoramaOverlay",
 "id": "overlay_242574F7_32C3_C397_4189_CC9F4080E70B",
 "data": {
  "label": "SHALINI PALACE"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 138.94,
   "hfov": 7.22,
   "image": {
    "levels": [
     {
      "url": "media/panorama_24932127_2EC8_3A90_41BC_8D9A880CACCD_0_HS_2_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -5.96
  }
 ],
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_129CF1E9_32C6_45BB_41BF_E5C60618BD6F",
   "pitch": -5.96,
   "yaw": 138.94,
   "hfov": 7.22,
   "distance": 100
  }
 ],
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "class": "HotspotPanoramaOverlay",
 "id": "overlay_24D4B391_32C2_466B_41C2_7B5ED69EDD2F",
 "data": {
  "label": "Info Red 02"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 66.45,
   "hfov": 14.82,
   "image": {
    "levels": [
     {
      "url": "media/panorama_24932127_2EC8_3A90_41BC_8D9A880CACCD_0_HS_3_0_map.gif",
      "width": 76,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -2.82
  }
 ],
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": {
    "levels": [
     {
      "url": "media/panorama_24932127_2EC8_3A90_41BC_8D9A880CACCD_0_HS_3_0.png",
      "width": 221,
      "class": "ImageResourceLevel",
      "height": 46
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -2.82,
   "yaw": 66.45,
   "hfov": 14.82,
   "distance": 50
  }
 ],
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "class": "HotspotPanoramaOverlay",
 "id": "overlay_242439C1_32C2_45E8_41C7_63CEBF226744",
 "data": {
  "label": "RANKALA LAKE"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 65.09,
   "hfov": 7.2,
   "image": {
    "levels": [
     {
      "url": "media/panorama_24932127_2EC8_3A90_41BC_8D9A880CACCD_0_HS_4_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -7.48
  }
 ],
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_129D71EA_32C6_45B9_41B5_9B3F5FCD11C3",
   "pitch": -7.48,
   "yaw": 65.09,
   "hfov": 7.2,
   "distance": 100
  }
 ],
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "class": "HotspotPanoramaOverlay",
 "id": "overlay_242409C1_32C2_45E8_417D_85F45A2B1C77",
 "data": {
  "label": "Info Red 02"
 }
},
{
 "inertia": true,
 "hfov": 19.5,
 "angle": 0,
 "image": {
  "levels": [
   {
    "url": "media/panorama_3E97576C_3242_4EB9_41C5_DA8FE202B423_tcap0.png",
    "width": 850,
    "class": "ImageResourceLevel",
    "height": 850
   }
  ],
  "class": "ImageResource"
 },
 "rotate": false,
 "class": "TripodCapPanoramaOverlay",
 "id": "panorama_24932127_2EC8_3A90_41BC_8D9A880CACCD_tcap0",
 "distance": 50
},
{
 "useHandCursor": true,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -177.2,
   "hfov": 8.55,
   "image": {
    "levels": [
     {
      "url": "media/panorama_2490D19F_2ECB_DDAF_41B8_2E505E4C9610_0_HS_0_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -7.3
  }
 ],
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_2D8B606B_321F_EA44_41C0_2173376AC1A8",
   "pitch": -7.3,
   "yaw": -177.2,
   "hfov": 8.55,
   "distance": 100
  }
 ],
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_24B66547_2ECB_FA9F_41B3_5603B4E3CCF0, this.camera_2B0917E4_334D_4C99_41C7_A4700FF3C118); this.mainPlayList.set('selectedIndex', 21)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "class": "HotspotPanoramaOverlay",
 "id": "overlay_288DECA8_321E_DAC4_41C4_57478F35602E",
 "data": {
  "label": "Circle Arrow 01b"
 }
},
{
 "inertia": true,
 "hfov": 19.5,
 "angle": 0,
 "image": {
  "levels": [
   {
    "url": "media/panorama_3E97576C_3242_4EB9_41C5_DA8FE202B423_tcap0.png",
    "width": 850,
    "class": "ImageResourceLevel",
    "height": 850
   }
  ],
  "class": "ImageResource"
 },
 "rotate": false,
 "class": "TripodCapPanoramaOverlay",
 "id": "panorama_2490D19F_2ECB_DDAF_41B8_2E505E4C9610_tcap0",
 "distance": 50
},
{
 "useHandCursor": true,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 46.14,
   "hfov": 12.87,
   "image": {
    "levels": [
     {
      "url": "media/panorama_249314F9_2EC9_FB73_41BD_642E1D4B48BC_0_HS_0_0_0_map.gif",
      "width": 37,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -37.2
  }
 ],
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_3F32E56B_2EF9_FA90_41B4_B481F53A61EB",
   "pitch": -37.2,
   "yaw": 46.14,
   "hfov": 12.87,
   "distance": 100
  }
 ],
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_24BAB721_2EC9_E690_41C3_7C714E7A53B5, this.camera_2B42C851_334D_43BB_4195_DF2DF9369786); this.mainPlayList.set('selectedIndex', 4)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "class": "HotspotPanoramaOverlay",
 "id": "overlay_3EB35387_2EF8_5D90_41BC_28416D3AC401",
 "data": {
  "label": "Circle Arrow 01b"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -46.56,
   "hfov": 12.82,
   "image": {
    "levels": [
     {
      "url": "media/panorama_249314F9_2EC9_FB73_41BD_642E1D4B48BC_0_HS_1_0_0_map.gif",
      "width": 37,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -37.45
  }
 ],
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_3AFBF1E5_2EF8_7D90_4196_C4ED5A3D9266",
   "pitch": -37.45,
   "yaw": -46.56,
   "hfov": 12.82,
   "distance": 100
  }
 ],
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_2492E99F_2EC8_2DB0_41C3_A52C968A9FC9, this.camera_2B553842_334D_4398_41C6_C54B73ECB82D); this.mainPlayList.set('selectedIndex', 3)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "class": "HotspotPanoramaOverlay",
 "id": "overlay_3FE3D45D_2EFB_DAB3_41A4_C4F8D252C62A",
 "data": {
  "label": "Circle Arrow 01b"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -168.91,
   "hfov": 14.44,
   "image": {
    "levels": [
     {
      "url": "media/panorama_249314F9_2EC9_FB73_41BD_642E1D4B48BC_0_HS_2_0_0_map.gif",
      "width": 37,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -26.65
  }
 ],
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_3BF47538_2EC8_5AF0_41C0_3CE114BE9C04",
   "pitch": -26.65,
   "yaw": -168.91,
   "hfov": 14.44,
   "distance": 100
  }
 ],
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_24BBDBE9_2EC8_2D93_41C4_423B1CECBEC0, this.camera_2B279822_334D_4399_41AE_33F6554FEFE3); this.mainPlayList.set('selectedIndex', 2)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "class": "HotspotPanoramaOverlay",
 "id": "overlay_3D87C12E_2EC8_DA90_41C0_ABADD18E458D",
 "data": {
  "label": "Circle Arrow 01b"
 }
},
{
 "autoplay": true,
 "rotationX": 0,
 "yaw": 83.96,
 "rotationZ": 0,
 "rotationY": 0,
 "showEasing": "cubic_in",
 "hideDuration": 500,
 "showDuration": 500,
 "class": "PopupPanoramaOverlay",
 "popupMaxWidth": "50%",
 "popupDistance": 100,
 "popupMaxHeight": "50%",
 "loop": false,
 "id": "popup_248E108F_32C7_C278_41C4_AC4ECB95EE39",
 "pitch": -6.28,
 "hideEasing": "cubic_out",
 "hfov": 3.38,
 "video": {
  "width": 1920,
  "class": "VideoResource",
  "mp4Url": "media/video_28962713_32DE_4E6F_418C_79FBEC63D9AA.mp4",
  "height": 1080
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -2.93,
   "hfov": 13.54,
   "image": {
    "levels": [
     {
      "url": "media/panorama_249314F9_2EC9_FB73_41BD_642E1D4B48BC_0_HS_4_0_map.gif",
      "width": 70,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -13.29
  }
 ],
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": {
    "levels": [
     {
      "url": "media/panorama_249314F9_2EC9_FB73_41BD_642E1D4B48BC_0_HS_4_0.png",
      "width": 207,
      "class": "ImageResourceLevel",
      "height": 47
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -13.29,
   "yaw": -2.93,
   "hfov": 13.54,
   "distance": 50
  }
 ],
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "class": "HotspotPanoramaOverlay",
 "id": "overlay_27435D30_32C2_42A9_41C3_655BE18AF49F",
 "data": {
  "label": "LIVING ROOM"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -3.39,
   "hfov": 6.84,
   "image": {
    "levels": [
     {
      "url": "media/panorama_249314F9_2EC9_FB73_41BD_642E1D4B48BC_0_HS_5_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -19.53
  }
 ],
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_2F40494D_32C2_C2FB_41B8_7CBE55D3CCC2",
   "pitch": -19.53,
   "yaw": -3.39,
   "hfov": 6.84,
   "distance": 100
  }
 ],
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "class": "HotspotPanoramaOverlay",
 "id": "overlay_27436D30_32C2_42A9_4193_C943323742A4",
 "data": {
  "label": "Info Red 02"
 }
},
{
 "inertia": true,
 "hfov": 19.5,
 "angle": 0,
 "image": {
  "levels": [
   {
    "url": "media/panorama_3E97576C_3242_4EB9_41C5_DA8FE202B423_tcap0.png",
    "width": 850,
    "class": "ImageResourceLevel",
    "height": 850
   }
  ],
  "class": "ImageResource"
 },
 "rotate": false,
 "class": "TripodCapPanoramaOverlay",
 "id": "panorama_249314F9_2EC9_FB73_41BD_642E1D4B48BC_tcap0",
 "distance": 50
},
{
 "useHandCursor": true,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 177.53,
   "hfov": 14.62,
   "image": {
    "levels": [
     {
      "url": "media/panorama_24BBDBE9_2EC8_2D93_41C4_423B1CECBEC0_0_HS_0_0_0_map.gif",
      "width": 37,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -25.14
  }
 ],
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_3D51B71E_2EF9_E6B1_41B7_32416FD24010",
   "pitch": -25.14,
   "yaw": 177.53,
   "hfov": 14.62,
   "distance": 100
  }
 ],
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_24964DBD_2EC8_65F3_4186_70DC22D46559, this.camera_2490E6DA_334D_4CA9_41B1_6B49DE04212B); this.mainPlayList.set('selectedIndex', 1)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "class": "HotspotPanoramaOverlay",
 "id": "overlay_21D91188_2EF8_FD90_41BE_1F1FBCFF0109",
 "data": {
  "label": "Circle Arrow 01b"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 100.9,
   "hfov": 13.86,
   "image": {
    "levels": [
     {
      "url": "media/panorama_24BBDBE9_2EC8_2D93_41C4_423B1CECBEC0_0_HS_1_0_0_map.gif",
      "width": 37,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -30.92
  }
 ],
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_3F32456B_2EF9_FA90_41BF_46CC39547E1D",
   "pitch": -30.92,
   "yaw": 100.9,
   "hfov": 13.86,
   "distance": 100
  }
 ],
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_249314F9_2EC9_FB73_41BD_642E1D4B48BC, this.camera_2489B709_334D_4DAB_41BB_75818247C084); this.mainPlayList.set('selectedIndex', 5)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "class": "HotspotPanoramaOverlay",
 "id": "overlay_3EE90129_2EF8_5A90_41C1_4C690774D0BB",
 "data": {
  "label": "Circle Arrow 01b"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -4.36,
   "hfov": 13.32,
   "image": {
    "levels": [
     {
      "url": "media/panorama_24BBDBE9_2EC8_2D93_41C4_423B1CECBEC0_0_HS_2_0_0_map.gif",
      "width": 37,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -34.44
  }
 ],
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_3F32B56B_2EF9_FA90_41B7_BB4BEE8AB42E",
   "pitch": -34.44,
   "yaw": -4.36,
   "hfov": 13.32,
   "distance": 100
  }
 ],
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_24BA736F_2EC9_DE90_41C5_F9EA6B0CA694, this.camera_24C12748_334D_4DA8_41BD_F5DE64809E26); this.mainPlayList.set('selectedIndex', 6)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "class": "HotspotPanoramaOverlay",
 "id": "overlay_3E4B1A37_2EF8_6EFF_41A3_E802A6359FB1",
 "data": {
  "label": "Circle Arrow 01b"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -68.92,
   "hfov": 14.17,
   "image": {
    "levels": [
     {
      "url": "media/panorama_24BBDBE9_2EC8_2D93_41C4_423B1CECBEC0_0_HS_4_0_0_map.gif",
      "width": 37,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -28.66
  }
 ],
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_37C7E62F_2F79_E6EF_41C1_97BD030DB280",
   "pitch": -28.66,
   "yaw": -68.92,
   "hfov": 14.17,
   "distance": 100
  }
 ],
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_24BA07B5_2EC8_65F0_41C1_AAAA3F505535, this.camera_24A5E728_334D_4DE9_41A1_99DFAF63D420); this.mainPlayList.set('selectedIndex', 9)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "class": "HotspotPanoramaOverlay",
 "id": "overlay_38126F3E_2F78_E6F0_41BB_5F52C04A35CF",
 "data": {
  "label": "Circle Arrow 01b"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -127.96,
   "hfov": 14.37,
   "image": {
    "levels": [
     {
      "url": "media/panorama_24BBDBE9_2EC8_2D93_41C4_423B1CECBEC0_0_HS_5_0_0_map.gif",
      "width": 37,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -27.15
  }
 ],
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_318B4078_2F58_5B70_41AB_9DF8B7CEFBF6",
   "pitch": -27.15,
   "yaw": -127.96,
   "hfov": 14.37,
   "distance": 100
  }
 ],
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_24935558_2EC8_5AB0_41C3_DD0CE36C4A12, this.camera_249DD6EA_334D_4C69_41C0_78BD93A7A1B2); this.mainPlayList.set('selectedIndex', 10)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "class": "HotspotPanoramaOverlay",
 "id": "overlay_367419CE_2F58_2D90_41C6_1E8F71DE2C1D",
 "data": {
  "label": "Circle Arrow 01b"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -151.83,
   "hfov": 14.94,
   "image": {
    "levels": [
     {
      "url": "media/panorama_24BBDBE9_2EC8_2D93_41C4_423B1CECBEC0_0_HS_6_0_0_map.gif",
      "width": 37,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -22.38
  }
 ],
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_3188F078_2F58_5B70_41C5_3975ED1DCEC5",
   "pitch": -22.38,
   "yaw": -151.83,
   "hfov": 14.94,
   "distance": 100
  }
 ],
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_24BB926B_2EC8_3E90_41A8_84DA0AD93437, this.camera_24D33738_334D_4DE9_41B2_62FA3B4BFBC1); this.mainPlayList.set('selectedIndex', 11)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "class": "HotspotPanoramaOverlay",
 "id": "overlay_353B6995_2F58_6DB0_41C7_3326F225126A",
 "data": {
  "label": "Circle Arrow 01b"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -97.31,
   "hfov": 15.56,
   "image": {
    "levels": [
     {
      "url": "media/panorama_24BBDBE9_2EC8_2D93_41C4_423B1CECBEC0_0_HS_7_0_0_map.gif",
      "width": 37,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -15.59
  }
 ],
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_264A1318_3206_6FC4_41C8_241A5848EB56",
   "pitch": -15.59,
   "yaw": -97.31,
   "hfov": 15.56,
   "distance": 100
  }
 ],
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_24BC5D9B_2EC8_25B0_41C4_5A196FBB4EBE, this.camera_24B7D719_334D_4DA8_4186_DF1BD6E134F7); this.mainPlayList.set('selectedIndex', 8)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "class": "HotspotPanoramaOverlay",
 "id": "overlay_235627AA_3207_F6C4_4165_1F1EECE19088",
 "data": {
  "label": "Circle Arrow 01b"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -112.75,
   "hfov": 6.03,
   "image": {
    "levels": [
     {
      "url": "media/panorama_24BBDBE9_2EC8_2D93_41C4_423B1CECBEC0_0_HS_8_0_map.gif",
      "width": 26,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 0.62
  }
 ],
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": {
    "levels": [
     {
      "url": "media/panorama_24BBDBE9_2EC8_2D93_41C4_423B1CECBEC0_0_HS_8_0.png",
      "width": 90,
      "class": "ImageResourceLevel",
      "height": 54
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 0.62,
   "yaw": -112.75,
   "hfov": 6.03,
   "distance": 50
  }
 ],
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "class": "HotspotPanoramaOverlay",
 "id": "overlay_24235EE9_32C2_3FB8_41C2_6C47BC31D336",
 "data": {
  "label": "BAR"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -112.84,
   "hfov": 4.26,
   "image": {
    "levels": [
     {
      "url": "media/panorama_24BBDBE9_2EC8_2D93_41C4_423B1CECBEC0_0_HS_9_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -2.85
  }
 ],
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_2F0F80B7_32C2_C397_41BF_B40F28348272",
   "pitch": -2.85,
   "yaw": -112.84,
   "hfov": 4.26,
   "distance": 100
  }
 ],
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "class": "HotspotPanoramaOverlay",
 "id": "overlay_2423BEE9_32C2_3FB8_41A4_38573735E667",
 "data": {
  "label": "Info Red 02"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 17.77,
   "hfov": 13.97,
   "image": {
    "levels": [
     {
      "url": "media/panorama_24BBDBE9_2EC8_2D93_41C4_423B1CECBEC0_0_HS_11_0_map.gif",
      "width": 62,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -9.26
  }
 ],
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": {
    "levels": [
     {
      "url": "media/panorama_24BBDBE9_2EC8_2D93_41C4_423B1CECBEC0_0_HS_11_0.png",
      "width": 211,
      "class": "ImageResourceLevel",
      "height": 54
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -9.26,
   "yaw": 17.77,
   "hfov": 13.97,
   "distance": 50
  }
 ],
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "class": "HotspotPanoramaOverlay",
 "id": "overlay_25565FFC_32C6_FD99_41AC_8E2659E96F7E",
 "data": {
  "label": "LAKE VIEW"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 16.04,
   "hfov": 4.16,
   "image": {
    "levels": [
     {
      "url": "media/panorama_24BBDBE9_2EC8_2D93_41C4_423B1CECBEC0_0_HS_12_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -12.64
  }
 ],
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_258745D5_32C2_4DEA_41C4_04D2978F6D9C",
   "pitch": -12.64,
   "yaw": 16.04,
   "hfov": 4.16,
   "distance": 100
  }
 ],
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "class": "HotspotPanoramaOverlay",
 "id": "overlay_25567FFD_32C6_FD9B_41AD_27BDF022E409",
 "data": {
  "label": "Info Red 02"
 }
},
{
 "autoplay": true,
 "rotationX": 0,
 "yaw": 129.57,
 "rotationZ": 0,
 "rotationY": 0,
 "showEasing": "cubic_in",
 "hideDuration": 500,
 "showDuration": 500,
 "class": "PopupPanoramaOverlay",
 "popupMaxWidth": "50%",
 "popupDistance": 100,
 "popupMaxHeight": "50%",
 "loop": false,
 "id": "popup_24D8CBDD_32C6_4598_41C5_208B85D34E36",
 "pitch": -3.05,
 "hideEasing": "cubic_out",
 "hfov": 3.39,
 "video": {
  "width": 1920,
  "class": "VideoResource",
  "mp4Url": "media/video_28962713_32DE_4E6F_418C_79FBEC63D9AA.mp4",
  "height": 1080
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 95.3,
   "hfov": 13.85,
   "image": {
    "levels": [
     {
      "url": "media/panorama_24BBDBE9_2EC8_2D93_41C4_423B1CECBEC0_0_HS_13_0_map.gif",
      "width": 70,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -5.75
  }
 ],
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": {
    "levels": [
     {
      "url": "media/panorama_24BBDBE9_2EC8_2D93_41C4_423B1CECBEC0_0_HS_13_0.png",
      "width": 207,
      "class": "ImageResourceLevel",
      "height": 47
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -5.75,
   "yaw": 95.3,
   "hfov": 13.85,
   "distance": 50
  }
 ],
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "class": "HotspotPanoramaOverlay",
 "id": "overlay_274601C7_32FE_45F7_41A1_F3D32B83C3C5",
 "data": {
  "label": "LIVING ROOM"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 95.09,
   "hfov": 7.12,
   "image": {
    "levels": [
     {
      "url": "media/panorama_24BBDBE9_2EC8_2D93_41C4_423B1CECBEC0_0_HS_14_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -11.49
  }
 ],
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_2F7A1946_32C2_C2E9_4168_B67E296C9B40",
   "pitch": -11.49,
   "yaw": 95.09,
   "hfov": 7.12,
   "distance": 100
  }
 ],
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "class": "HotspotPanoramaOverlay",
 "id": "overlay_274611C7_32FE_45F7_41C0_6FB609907D36",
 "data": {
  "label": "Info Red 02"
 }
},
{
 "inertia": true,
 "hfov": 19.5,
 "angle": 0,
 "image": {
  "levels": [
   {
    "url": "media/panorama_3E97576C_3242_4EB9_41C5_DA8FE202B423_tcap0.png",
    "width": 850,
    "class": "ImageResourceLevel",
    "height": 850
   }
  ],
  "class": "ImageResource"
 },
 "rotate": false,
 "class": "TripodCapPanoramaOverlay",
 "id": "panorama_24BBDBE9_2EC8_2D93_41C4_423B1CECBEC0_tcap0",
 "distance": 50
},
{
 "useHandCursor": true,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 149.64,
   "hfov": 13.32,
   "image": {
    "levels": [
     {
      "url": "media/panorama_2492E99F_2EC8_2DB0_41C3_A52C968A9FC9_0_HS_0_0_0_map.gif",
      "width": 37,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -34.44
  }
 ],
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_3B367BFE_2F78_2D70_41BC_9B35BD7AB937",
   "pitch": -34.44,
   "yaw": 149.64,
   "hfov": 13.32,
   "distance": 100
  }
 ],
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_249314F9_2EC9_FB73_41BD_642E1D4B48BC, this.camera_2290BA55_334D_47BB_41C9_1737F071B750); this.mainPlayList.set('selectedIndex', 5)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "class": "HotspotPanoramaOverlay",
 "id": "overlay_3FC96D33_2EF8_6AF0_41C2_4B9DA82FA91F",
 "data": {
  "label": "Circle Arrow 01b"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 87.09,
   "hfov": 13.82,
   "image": {
    "levels": [
     {
      "url": "media/panorama_2492E99F_2EC8_2DB0_41C3_A52C968A9FC9_0_HS_1_0_0_map.gif",
      "width": 37,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -31.17
  }
 ],
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_3F3EFF34_2EC8_66F1_41B0_7133C9F97252",
   "pitch": -31.17,
   "yaw": 87.09,
   "hfov": 13.82,
   "distance": 100
  }
 ],
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_24BAB721_2EC9_E690_41C3_7C714E7A53B5, this.camera_226BEA45_334D_479B_41C0_C0300A8FA52B); this.mainPlayList.set('selectedIndex', 4)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "class": "HotspotPanoramaOverlay",
 "id": "overlay_3F55042A_2EC8_3A90_41AC_D8DEC84022B8",
 "data": {
  "label": "Circle Arrow 01b"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -34.16,
   "hfov": 13.76,
   "image": {
    "levels": [
     {
      "url": "media/panorama_2492E99F_2EC8_2DB0_41C3_A52C968A9FC9_0_HS_2_1_0_map.gif",
      "width": 103,
      "class": "ImageResourceLevel",
      "height": 159
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -13.53
  }
 ],
 "areas": [
  {
   "rollOver": "this.showPopupPanoramaOverlay(this.popup_2B17DDD9_32C2_7D9B_41C6_D7A3F846033D, {'pressedBackgroundOpacity':0.3,'rollOverBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'pressedIconColor':'#888888','rollOverBorderSize':0,'backgroundOpacity':0.3,'iconWidth':20,'borderSize':0,'pressedBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'iconHeight':20,'paddingBottom':5,'pressedBorderColor':'#000000','rollOverBackgroundColorDirection':'vertical','backgroundColorDirection':'vertical','iconColor':'#000000','rollOverBackgroundColorRatios':[0,0.09803921568627451,1],'paddingLeft':5,'pressedIconLineWidth':5,'pressedBorderSize':0,'rollOverBorderColor':'#000000','iconLineWidth':5,'rollOverBackgroundOpacity':0.3,'backgroundColorRatios':[0,0.09803921568627451,1],'rollOverIconHeight':20,'rollOverIconColor':'#666666','rollOverIconWidth':20,'pressedBackgroundColorDirection':'vertical','pressedIconWidth':20,'pressedIconHeight':20,'paddingRight':5,'pressedBackgroundColorRatios':[0,0.09803921568627451,1],'paddingTop':5,'rollOverIconLineWidth':5,'backgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'borderColor':'#000000'}, this.ImageResource_28B77342_32C2_C6E9_41A3_1BF6F34C77F1, null, null, null, null, false)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "class": "HotspotPanoramaOverlay",
 "id": "overlay_2A5FA43E_32C2_4299_41C3_47A9375B6432",
 "data": {
  "label": "Polygon"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 162.07,
   "hfov": 4.96,
   "image": {
    "levels": [
     {
      "url": "media/panorama_2492E99F_2EC8_2DB0_41C3_A52C968A9FC9_0_HS_3_0_map.gif",
      "width": 25,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 2.25
  }
 ],
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": {
    "levels": [
     {
      "url": "media/panorama_2492E99F_2EC8_2DB0_41C3_A52C968A9FC9_0_HS_3_0.png",
      "width": 74,
      "class": "ImageResourceLevel",
      "height": 47
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 2.25,
   "yaw": 162.07,
   "hfov": 4.96,
   "distance": 50
  }
 ],
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "class": "HotspotPanoramaOverlay",
 "id": "overlay_27DEDBB2_32C2_45A8_41C7_D2A37ECFE3E2",
 "data": {
  "label": "BAR"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 162.03,
   "hfov": 3.16,
   "image": {
    "levels": [
     {
      "url": "media/panorama_2492E99F_2EC8_2DB0_41C3_A52C968A9FC9_0_HS_4_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -0.31
  }
 ],
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_2F7B5948_32C2_C2F9_41B6_BB8A9964BB17",
   "pitch": -0.31,
   "yaw": 162.03,
   "hfov": 3.16,
   "distance": 100
  }
 ],
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "class": "HotspotPanoramaOverlay",
 "id": "overlay_27DEABB2_32C2_45A8_41B2_BB09EDDED06C",
 "data": {
  "label": "Info Red 02"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 8.13,
   "hfov": 13.89,
   "image": {
    "levels": [
     {
      "url": "media/panorama_2492E99F_2EC8_2DB0_41C3_A52C968A9FC9_0_HS_7_0_map.gif",
      "width": 70,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -4
  }
 ],
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": {
    "levels": [
     {
      "url": "media/panorama_2492E99F_2EC8_2DB0_41C3_A52C968A9FC9_0_HS_7_0.png",
      "width": 207,
      "class": "ImageResourceLevel",
      "height": 47
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -4,
   "yaw": 8.13,
   "hfov": 13.89,
   "distance": 50
  }
 ],
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "class": "HotspotPanoramaOverlay",
 "id": "overlay_291ECD20_32FE_42A9_417C_7D449574A988",
 "data": {
  "label": "LIVING ROOM"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 7.93,
   "hfov": 7.17,
   "image": {
    "levels": [
     {
      "url": "media/panorama_2492E99F_2EC8_2DB0_41C3_A52C968A9FC9_0_HS_8_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -9.24
  }
 ],
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_2F7DB949_32C2_C2FB_41C8_B05651E46695",
   "pitch": -9.24,
   "yaw": 7.93,
   "hfov": 7.17,
   "distance": 100
  }
 ],
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "class": "HotspotPanoramaOverlay",
 "id": "overlay_291E9D20_32FE_42A9_41B0_7C79B84A6192",
 "data": {
  "label": "Info Red 02"
 }
},
{
 "inertia": true,
 "hfov": 19.5,
 "angle": 0,
 "image": {
  "levels": [
   {
    "url": "media/panorama_3E97576C_3242_4EB9_41C5_DA8FE202B423_tcap0.png",
    "width": 850,
    "class": "ImageResourceLevel",
    "height": 850
   }
  ],
  "class": "ImageResource"
 },
 "rotate": false,
 "class": "TripodCapPanoramaOverlay",
 "id": "panorama_2492E99F_2EC8_2DB0_41C3_A52C968A9FC9_tcap0",
 "distance": 50
},
{
 "useHandCursor": true,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -175.94,
   "hfov": 8.49,
   "image": {
    "levels": [
     {
      "url": "media/panorama_24933CE7_2EC8_2B90_41B9_291ACC114124_0_HS_0_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -9.82
  }
 ],
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_2D88A06B_321F_EA44_41A4_6124164B2315",
   "pitch": -9.82,
   "yaw": -175.94,
   "hfov": 8.49,
   "distance": 100
  }
 ],
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_2493764E_2EC8_2690_4195_080B59CD09C9, this.camera_22B6BA93_334D_44BF_41C0_C9101687D644); this.mainPlayList.set('selectedIndex', 15)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "class": "HotspotPanoramaOverlay",
 "id": "overlay_2A36FF9F_3202_36FB_41B6_4EF6984384B9",
 "data": {
  "label": "Circle Arrow 01b"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -99.82,
   "hfov": 12.04,
   "image": {
    "levels": [
     {
      "url": "media/panorama_24933CE7_2EC8_2B90_41B9_291ACC114124_0_HS_1_0_0_map.gif",
      "width": 37,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -34.69
  }
 ],
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_2D88406B_321F_EA44_41B4_1C2165D2453D",
   "pitch": -34.69,
   "yaw": -99.82,
   "hfov": 12.04,
   "distance": 100
  }
 ],
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_2490F757_2ECB_E6B0_41AB_EC8D45FBF4FA, this.camera_22823A74_334D_4479_41B9_4010EE878D40); this.mainPlayList.set('selectedIndex', 20)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "class": "HotspotPanoramaOverlay",
 "id": "overlay_2AE16BE0_3207_DE44_41B5_25048DDD5CBE",
 "data": {
  "label": "Circle Arrow 01b"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -33.75,
   "hfov": 12.79,
   "image": {
    "levels": [
     {
      "url": "media/panorama_24933CE7_2EC8_2B90_41B9_291ACC114124_0_HS_2_0_0_map.gif",
      "width": 37,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -29.16
  }
 ],
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_2D89D06B_321F_EA44_41A0_F0847A21F397",
   "pitch": -29.16,
   "yaw": -33.75,
   "hfov": 12.79,
   "distance": 100
  }
 ],
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_24BB09D8_2EC8_2DB0_41C5_DA73B4006188, this.camera_22986A65_334D_4798_41C5_A4EDD514280E); this.mainPlayList.set('selectedIndex', 19)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "class": "HotspotPanoramaOverlay",
 "id": "overlay_2B0C5418_3201_E9C4_41C4_5987CE217FFA",
 "data": {
  "label": "Circle Arrow 01b"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 90.35,
   "hfov": 13.26,
   "image": {
    "levels": [
     {
      "url": "media/panorama_24933CE7_2EC8_2B90_41B9_291ACC114124_0_HS_3_0_0_map.gif",
      "width": 37,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -25.14
  }
 ],
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_2D89806B_321F_EA44_41C0_3F4CDC66244D",
   "pitch": -25.14,
   "yaw": 90.35,
   "hfov": 13.26,
   "distance": 100
  }
 ],
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_24B66547_2ECB_FA9F_41B3_5603B4E3CCF0, this.camera_228C0A84_334D_4498_41C7_B8FB5250A2FB); this.mainPlayList.set('selectedIndex', 21)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "class": "HotspotPanoramaOverlay",
 "id": "overlay_29A3B1F2_3202_EA44_418B_89A4F6208BD9",
 "data": {
  "label": "Circle Arrow 01b"
 }
},
{
 "inertia": true,
 "hfov": 19.5,
 "angle": 0,
 "image": {
  "levels": [
   {
    "url": "media/panorama_3E97576C_3242_4EB9_41C5_DA8FE202B423_tcap0.png",
    "width": 850,
    "class": "ImageResourceLevel",
    "height": 850
   }
  ],
  "class": "ImageResource"
 },
 "rotate": false,
 "class": "TripodCapPanoramaOverlay",
 "id": "panorama_24933CE7_2EC8_2B90_41B9_291ACC114124_tcap0",
 "distance": 50
},
{
 "useHandCursor": true,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -178.71,
   "hfov": 12.46,
   "image": {
    "levels": [
     {
      "url": "media/panorama_24B66547_2ECB_FA9F_41B3_5603B4E3CCF0_0_HS_0_0_0_map.gif",
      "width": 37,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -31.67
  }
 ],
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_2D8A306B_321F_EA44_41AA_48A47F96A172",
   "pitch": -31.67,
   "yaw": -178.71,
   "hfov": 12.46,
   "distance": 100
  }
 ],
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_24933CE7_2EC8_2B90_41B9_291ACC114124, this.camera_22FC4AF1_334D_447B_41A3_3CFF78953C1F); this.mainPlayList.set('selectedIndex', 18)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "class": "HotspotPanoramaOverlay",
 "id": "overlay_29515973_3202_5A44_41A8_ABC4AED9A4A9",
 "data": {
  "label": "Circle Arrow 01b"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -110.12,
   "hfov": 8.42,
   "image": {
    "levels": [
     {
      "url": "media/panorama_24B66547_2ECB_FA9F_41B3_5603B4E3CCF0_0_HS_1_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -12.33
  }
 ],
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_2D8BD06B_321F_EA44_4190_6719375E3336",
   "pitch": -12.33,
   "yaw": -110.12,
   "hfov": 8.42,
   "distance": 100
  }
 ],
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_2490D19F_2ECB_DDAF_41B8_2E505E4C9610, this.camera_22F20AE2_334D_4498_41C8_2B77AF2B8F8B); this.mainPlayList.set('selectedIndex', 22)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "class": "HotspotPanoramaOverlay",
 "id": "overlay_28B36437_321E_29CB_41AB_CD368059B315",
 "data": {
  "label": "Circle Arrow 01b"
 }
},
{
 "inertia": true,
 "hfov": 19.5,
 "angle": 0,
 "image": {
  "levels": [
   {
    "url": "media/panorama_3E97576C_3242_4EB9_41C5_DA8FE202B423_tcap0.png",
    "width": 850,
    "class": "ImageResourceLevel",
    "height": 850
   }
  ],
  "class": "ImageResource"
 },
 "rotate": false,
 "class": "TripodCapPanoramaOverlay",
 "id": "panorama_24B66547_2ECB_FA9F_41B3_5603B4E3CCF0_tcap0",
 "distance": 50
},
{
 "useHandCursor": true,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -176.45,
   "hfov": 13.44,
   "image": {
    "levels": [
     {
      "url": "media/panorama_24935558_2EC8_5AB0_41C3_DD0CE36C4A12_0_HS_0_0_0_map.gif",
      "width": 37,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -33.68
  }
 ],
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_36449775_2F58_2570_41A9_7C7A07E8AE48",
   "pitch": -33.68,
   "yaw": -176.45,
   "hfov": 13.44,
   "distance": 100
  }
 ],
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_24BC5D9B_2EC8_25B0_41C4_5A196FBB4EBE, this.camera_227D7A26_334D_4799_41B8_425B962D1F64); this.mainPlayList.set('selectedIndex', 8)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "class": "HotspotPanoramaOverlay",
 "id": "overlay_37221A2E_2F58_2E90_41BA_095B5E8CB380",
 "data": {
  "label": "Circle Arrow 01b"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -108.62,
   "hfov": 14.5,
   "image": {
    "levels": [
     {
      "url": "media/panorama_24935558_2EC8_5AB0_41C3_DD0CE36C4A12_0_HS_1_0_0_map.gif",
      "width": 37,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -26.15
  }
 ],
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_36473775_2F58_2570_41C1_25E19B283E1C",
   "pitch": -26.15,
   "yaw": -108.62,
   "hfov": 14.5,
   "distance": 100
  }
 ],
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_24BBDBE9_2EC8_2D93_41C4_423B1CECBEC0, this.camera_2A0E796B_334D_4468_41B1_4A0F6E57D612); this.mainPlayList.set('selectedIndex', 2)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "class": "HotspotPanoramaOverlay",
 "id": "overlay_36ED3D51_2F59_EAB3_41C0_72D4A7B2CFD7",
 "data": {
  "label": "Circle Arrow 01b"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -78.22,
   "hfov": 14.24,
   "image": {
    "levels": [
     {
      "url": "media/panorama_24935558_2EC8_5AB0_41C3_DD0CE36C4A12_0_HS_2_0_0_map.gif",
      "width": 37,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -28.16
  }
 ],
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_2052AAD4_3242_C7E9_4162_98EBFF0E617C",
   "pitch": -28.16,
   "yaw": -78.22,
   "hfov": 14.24,
   "distance": 100
  }
 ],
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_24BB926B_2EC8_3E90_41A8_84DA0AD93437, this.camera_22622A36_334D_47F8_41B6_C1EA5BD6DBFE); this.mainPlayList.set('selectedIndex', 11)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "class": "HotspotPanoramaOverlay",
 "id": "overlay_203428B0_3242_43A9_41C7_B8641F80379C",
 "data": {
  "label": "Circle Arrow 01b"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 95.46,
   "hfov": 9.74,
   "image": {
    "levels": [
     {
      "url": "media/panorama_24935558_2EC8_5AB0_41C3_DD0CE36C4A12_0_HS_3_0_map.gif",
      "width": 24,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -5.97
  }
 ],
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": {
    "levels": [
     {
      "url": "media/panorama_24935558_2EC8_5AB0_41C3_DD0CE36C4A12_0_HS_3_0.png",
      "width": 146,
      "class": "ImageResourceLevel",
      "height": 97
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -5.97,
   "yaw": 95.46,
   "hfov": 9.74,
   "distance": 50
  }
 ],
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "class": "HotspotPanoramaOverlay",
 "id": "overlay_27D85CFE_32C6_C399_41B4_6490DD19D80C",
 "data": {
  "label": "BAR"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 95.13,
   "hfov": 8.92,
   "image": {
    "levels": [
     {
      "url": "media/panorama_24935558_2EC8_5AB0_41C3_DD0CE36C4A12_0_HS_4_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -12.04
  }
 ],
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_134FC96F_32C2_C2B8_41C2_102BD542FF30",
   "pitch": -12.04,
   "yaw": 95.13,
   "hfov": 8.92,
   "distance": 100
  }
 ],
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "class": "HotspotPanoramaOverlay",
 "id": "overlay_27D84CFE_32C6_C399_41C8_7F8B702A516C",
 "data": {
  "label": "Info Red 02"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -105.9,
   "hfov": 13.92,
   "image": {
    "levels": [
     {
      "url": "media/panorama_24935558_2EC8_5AB0_41C3_DD0CE36C4A12_0_HS_5_0_map.gif",
      "width": 70,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 0.84
  }
 ],
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": {
    "levels": [
     {
      "url": "media/panorama_24935558_2EC8_5AB0_41C3_DD0CE36C4A12_0_HS_5_0.png",
      "width": 207,
      "class": "ImageResourceLevel",
      "height": 47
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 0.84,
   "yaw": -105.9,
   "hfov": 13.92,
   "distance": 50
  }
 ],
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "class": "HotspotPanoramaOverlay",
 "id": "overlay_243EAB5F_32C1_C697_41C6_C622CE118DA9",
 "data": {
  "label": "LIVING ROOM"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -106.92,
   "hfov": 7.25,
   "image": {
    "levels": [
     {
      "url": "media/panorama_24935558_2EC8_5AB0_41C3_DD0CE36C4A12_0_HS_6_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -3.64
  }
 ],
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_24A86C9C_32C6_4399_4186_00B19F2848A8",
   "pitch": -3.64,
   "yaw": -106.92,
   "hfov": 7.25,
   "distance": 100
  }
 ],
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "class": "HotspotPanoramaOverlay",
 "id": "overlay_243EDB60_32C1_C6A9_41A0_A95CFD8F8DBA",
 "data": {
  "label": "Info Red 02"
 }
},
{
 "inertia": true,
 "hfov": 19.5,
 "angle": 0,
 "image": {
  "levels": [
   {
    "url": "media/panorama_3E97576C_3242_4EB9_41C5_DA8FE202B423_tcap0.png",
    "width": 850,
    "class": "ImageResourceLevel",
    "height": 850
   }
  ],
  "class": "ImageResource"
 },
 "rotate": false,
 "class": "TripodCapPanoramaOverlay",
 "id": "panorama_24935558_2EC8_5AB0_41C3_DD0CE36C4A12_tcap0",
 "distance": 50
},
{
 "useHandCursor": true,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 175.52,
   "hfov": 12.08,
   "image": {
    "levels": [
     {
      "url": "media/panorama_2490F757_2ECB_E6B0_41AB_EC8D45FBF4FA_0_HS_0_0_0_map.gif",
      "width": 37,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -34.44
  }
 ],
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_2D8A906B_321F_EA44_41C9_04929C0A4D97",
   "pitch": -34.44,
   "yaw": 175.52,
   "hfov": 12.08,
   "distance": 100
  }
 ],
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_24933CE7_2EC8_2B90_41B9_291ACC114124, this.camera_2A00995B_334D_45AF_41A7_7DA890A345F9); this.mainPlayList.set('selectedIndex', 18)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "class": "HotspotPanoramaOverlay",
 "id": "overlay_2ACB9F58_3206_D644_41B7_185449477B0F",
 "data": {
  "label": "Circle Arrow 01b"
 }
},
{
 "inertia": true,
 "hfov": 19.5,
 "angle": 0,
 "image": {
  "levels": [
   {
    "url": "media/panorama_3E97576C_3242_4EB9_41C5_DA8FE202B423_tcap0.png",
    "width": 850,
    "class": "ImageResourceLevel",
    "height": 850
   }
  ],
  "class": "ImageResource"
 },
 "rotate": false,
 "class": "TripodCapPanoramaOverlay",
 "id": "panorama_2490F757_2ECB_E6B0_41AB_EC8D45FBF4FA_tcap0",
 "distance": 50
},
{
 "useHandCursor": true,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -170.67,
   "hfov": 13.75,
   "image": {
    "levels": [
     {
      "url": "media/panorama_24B96F7C_2EC8_6570_419D_97833188ABD5_0_HS_0_0_0_map.gif",
      "width": 37,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -31.67
  }
 ],
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_2D87106B_321F_EA44_41B6_5132A466A4CA",
   "pitch": -31.67,
   "yaw": -170.67,
   "hfov": 13.75,
   "distance": 100
  }
 ],
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_24A663B9_2EC8_5DF0_4191_F365AEA11F48, this.camera_2BD7790D_334D_45A8_4199_295D98A26D0E); this.mainPlayList.set('selectedIndex', 16)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "class": "HotspotPanoramaOverlay",
 "id": "overlay_252D3255_3202_EE4F_41C5_9CF256B04B12",
 "data": {
  "label": "Circle Arrow 01b"
 }
},
{
 "inertia": true,
 "hfov": 19.5,
 "angle": 0,
 "image": {
  "levels": [
   {
    "url": "media/panorama_3E97576C_3242_4EB9_41C5_DA8FE202B423_tcap0.png",
    "width": 850,
    "class": "ImageResourceLevel",
    "height": 850
   }
  ],
  "class": "ImageResource"
 },
 "rotate": false,
 "class": "TripodCapPanoramaOverlay",
 "id": "panorama_24B96F7C_2EC8_6570_419D_97833188ABD5_tcap0",
 "distance": 50
},
{
 "useHandCursor": true,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 176.27,
   "hfov": 14.85,
   "image": {
    "levels": [
     {
      "url": "media/panorama_24BC5D9B_2EC8_25B0_41C4_5A196FBB4EBE_0_HS_0_0_0_map.gif",
      "width": 37,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -23.13
  }
 ],
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_228770FB_3202_2A3B_41BA_D8FFC8935675",
   "pitch": -23.13,
   "yaw": 176.27,
   "hfov": 14.85,
   "distance": 100
  }
 ],
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_24BBDBE9_2EC8_2D93_41C4_423B1CECBEC0, this.camera_2B706871_334D_4478_41B3_1FBA4B8F2006); this.mainPlayList.set('selectedIndex', 2)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "class": "HotspotPanoramaOverlay",
 "id": "overlay_3DF74FBF_320E_363B_41AB_C47E682FBD3B",
 "data": {
  "label": "Circle Arrow 01b"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 76.03,
   "hfov": 13.24,
   "image": {
    "levels": [
     {
      "url": "media/panorama_24BC5D9B_2EC8_25B0_41C4_5A196FBB4EBE_0_HS_1_0_0_map.gif",
      "width": 37,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -34.94
  }
 ],
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_228490FB_3202_2A3B_4181_A995EE7A2FB1",
   "pitch": -34.94,
   "yaw": 76.03,
   "hfov": 13.24,
   "distance": 100
  }
 ],
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_24BA07B5_2EC8_65F0_41C1_AAAA3F505535, this.camera_2B61F890_334D_44B8_41C7_A5DF2BC57790); this.mainPlayList.set('selectedIndex', 9)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "class": "HotspotPanoramaOverlay",
 "id": "overlay_2353A811_320E_79C4_4174_022E32FEDC7F",
 "data": {
  "label": "Circle Arrow 01b"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -89.02,
   "hfov": 13.16,
   "image": {
    "levels": [
     {
      "url": "media/panorama_24BC5D9B_2EC8_25B0_41C4_5A196FBB4EBE_0_HS_2_0_0_map.gif",
      "width": 37,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -35.44
  }
 ],
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_24F2FDE7_3206_7A4C_41BB_E46049FE5E3B",
   "pitch": -35.44,
   "yaw": -89.02,
   "hfov": 13.16,
   "distance": 100
  }
 ],
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_24935558_2EC8_5AB0_41C3_DD0CE36C4A12, this.camera_2B6E889F_334D_44A7_41C1_D21CB0B4D84C); this.mainPlayList.set('selectedIndex', 10)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "class": "HotspotPanoramaOverlay",
 "id": "overlay_20334A03_3202_59CB_41C5_412255ADD0A6",
 "data": {
  "label": "Circle Arrow 01b"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -137.76,
   "hfov": 15.04,
   "image": {
    "levels": [
     {
      "url": "media/panorama_24BC5D9B_2EC8_25B0_41C4_5A196FBB4EBE_0_HS_3_0_0_map.gif",
      "width": 37,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -21.37
  }
 ],
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_24F30DE7_3206_7A4C_41C1_FD89AAE874DA",
   "pitch": -21.37,
   "yaw": -137.76,
   "hfov": 15.04,
   "distance": 100
  }
 ],
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_24BB926B_2EC8_3E90_41A8_84DA0AD93437, this.camera_2B9C68BF_334D_44E8_41C6_AA24774BE8A4); this.mainPlayList.set('selectedIndex', 11)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "class": "HotspotPanoramaOverlay",
 "id": "overlay_2160F024_3201_E9CD_41B1_9CFA3A9096B8",
 "data": {
  "label": "Circle Arrow 01b"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 12.22,
   "hfov": 13.28,
   "image": {
    "levels": [
     {
      "url": "media/panorama_24BC5D9B_2EC8_25B0_41C4_5A196FBB4EBE_0_HS_4_0_0_map.gif",
      "width": 37,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -34.69
  }
 ],
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_23927B59_3241_C69B_41C6_554C92B159EB",
   "pitch": -34.69,
   "yaw": 12.22,
   "hfov": 13.28,
   "distance": 100
  }
 ],
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_24B94D08_2EC8_EA90_41C1_6BFAE03E3E02, this.camera_2B8DE8CE_334D_44A9_41BF_CE5EF9B40A99); this.mainPlayList.set('selectedIndex', 13)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "class": "HotspotPanoramaOverlay",
 "id": "overlay_226B86E8_3246_4FB8_41C0_289A3B6A5737",
 "data": {
  "label": "Circle Arrow 01b"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -50.24,
   "hfov": 9.75,
   "image": {
    "levels": [
     {
      "url": "media/panorama_24BC5D9B_2EC8_25B0_41C4_5A196FBB4EBE_0_HS_5_0_map.gif",
      "width": 24,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -5.46
  }
 ],
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": {
    "levels": [
     {
      "url": "media/panorama_24BC5D9B_2EC8_25B0_41C4_5A196FBB4EBE_0_HS_5_0.png",
      "width": 146,
      "class": "ImageResourceLevel",
      "height": 97
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -5.46,
   "yaw": -50.24,
   "hfov": 9.75,
   "distance": 50
  }
 ],
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "class": "HotspotPanoramaOverlay",
 "id": "overlay_27003932_32C1_C2A8_41BE_CADCC748E106",
 "data": {
  "label": "BAR"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -50.83,
   "hfov": 8.98,
   "image": {
    "levels": [
     {
      "url": "media/panorama_24BC5D9B_2EC8_25B0_41C4_5A196FBB4EBE_0_HS_6_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -10.03
  }
 ],
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_134DA96B_32C2_C2B8_41B0_195741164728",
   "pitch": -10.03,
   "yaw": -50.83,
   "hfov": 8.98,
   "distance": 100
  }
 ],
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "class": "HotspotPanoramaOverlay",
 "id": "overlay_27004932_32C1_C2A8_41C4_3D952DD82FE6",
 "data": {
  "label": "Info Red 02"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 179.08,
   "hfov": 13.89,
   "image": {
    "levels": [
     {
      "url": "media/panorama_24BC5D9B_2EC8_25B0_41C4_5A196FBB4EBE_0_HS_9_0_map.gif",
      "width": 70,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 0.21
  }
 ],
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": {
    "levels": [
     {
      "url": "media/panorama_24BC5D9B_2EC8_25B0_41C4_5A196FBB4EBE_0_HS_9_0.png",
      "width": 207,
      "class": "ImageResourceLevel",
      "height": 47
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 0.21,
   "yaw": 179.08,
   "hfov": 13.89,
   "distance": 50
  }
 ],
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "class": "HotspotPanoramaOverlay",
 "id": "overlay_24DE9E1E_32C2_3E99_41A7_8657E7C0580A",
 "data": {
  "label": "LIVING ROOM"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 178.27,
   "hfov": 7.25,
   "image": {
    "levels": [
     {
      "url": "media/panorama_24BC5D9B_2EC8_25B0_41C4_5A196FBB4EBE_0_HS_10_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -3.58
  }
 ],
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_2E456007_32CE_C277_41C0_05E94D6FF70C",
   "pitch": -3.58,
   "yaw": 178.27,
   "hfov": 7.25,
   "distance": 100
  }
 ],
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "class": "HotspotPanoramaOverlay",
 "id": "overlay_24DE8E1F_32C2_3E97_41B7_942BD87F2573",
 "data": {
  "label": "Info Red 02"
 }
},
{
 "inertia": true,
 "hfov": 19.5,
 "angle": 0,
 "image": {
  "levels": [
   {
    "url": "media/panorama_3E97576C_3242_4EB9_41C5_DA8FE202B423_tcap0.png",
    "width": 850,
    "class": "ImageResourceLevel",
    "height": 850
   }
  ],
  "class": "ImageResource"
 },
 "rotate": false,
 "class": "TripodCapPanoramaOverlay",
 "id": "panorama_24BC5D9B_2EC8_25B0_41C4_5A196FBB4EBE_tcap0",
 "distance": 50
},
{
 "useHandCursor": true,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 69.37,
   "hfov": 8.75,
   "image": {
    "levels": [
     {
      "url": "media/panorama_24A663B9_2EC8_5DF0_4191_F365AEA11F48_0_HS_0_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -9.19
  }
 ],
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_29C2352B_320E_EBC4_41C4_83BF3BDE6421",
   "pitch": -9.19,
   "yaw": 69.37,
   "hfov": 8.75,
   "distance": 100
  }
 ],
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_2493764E_2EC8_2690_4195_080B59CD09C9, this.camera_24EAD7A5_334D_4C9B_4195_E87BF1B17749); this.mainPlayList.set('selectedIndex', 15)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "class": "HotspotPanoramaOverlay",
 "id": "overlay_24F5DD5F_3202_DA7C_41B3_DDE69381B892",
 "data": {
  "label": "Circle Arrow 01b"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -98.06,
   "hfov": 12.61,
   "image": {
    "levels": [
     {
      "url": "media/panorama_24A663B9_2EC8_5DF0_4191_F365AEA11F48_0_HS_1_0_0_map.gif",
      "width": 37,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -38.71
  }
 ],
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_29A97086_320E_EACD_41B1_BDD75793108F",
   "pitch": -38.71,
   "yaw": -98.06,
   "hfov": 12.61,
   "distance": 100
  }
 ],
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_24B96F7C_2EC8_6570_419D_97833188ABD5, this.camera_2B1B97C5_334D_4C98_41C6_38D7F63E51A1); this.mainPlayList.set('selectedIndex', 17)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "class": "HotspotPanoramaOverlay",
 "id": "overlay_24F4E4B0_3201_EAC4_4197_6949A8539C26",
 "data": {
  "label": "Circle Arrow 01b"
 }
},
{
 "inertia": true,
 "hfov": 19.5,
 "angle": 0,
 "image": {
  "levels": [
   {
    "url": "media/panorama_3E97576C_3242_4EB9_41C5_DA8FE202B423_tcap0.png",
    "width": 850,
    "class": "ImageResourceLevel",
    "height": 850
   }
  ],
  "class": "ImageResource"
 },
 "rotate": false,
 "class": "TripodCapPanoramaOverlay",
 "id": "panorama_24A663B9_2EC8_5DF0_4191_F365AEA11F48_tcap0",
 "distance": 50
},
{
 "useHandCursor": true,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 179.79,
   "hfov": 12.99,
   "image": {
    "levels": [
     {
      "url": "media/panorama_24BAB721_2EC9_E690_41C3_7C714E7A53B5_0_HS_0_0_0_map.gif",
      "width": 37,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -36.45
  }
 ],
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_381CD421_2F48_FA90_41B6_B161581B11B7",
   "pitch": -36.45,
   "yaw": 179.79,
   "hfov": 12.99,
   "distance": 100
  }
 ],
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_249314F9_2EC9_FB73_41BD_642E1D4B48BC, this.camera_213BAB4F_334D_45A7_41C3_0CCB371DA193); this.mainPlayList.set('selectedIndex', 5)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "class": "HotspotPanoramaOverlay",
 "id": "overlay_3F8E53FC_2EF8_3D70_41AC_854A0CA20D06",
 "data": {
  "label": "Circle Arrow 01b"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -96.05,
   "hfov": 13.63,
   "image": {
    "levels": [
     {
      "url": "media/panorama_24BAB721_2EC9_E690_41C3_7C714E7A53B5_0_HS_1_0_0_map.gif",
      "width": 37,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -32.43
  }
 ],
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_3F3EBF35_2EC8_66F0_419A_E2D078125A1E",
   "pitch": -32.43,
   "yaw": -96.05,
   "hfov": 13.63,
   "distance": 100
  }
 ],
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_2492E99F_2EC8_2DB0_41C3_A52C968A9FC9, this.camera_210E0B3F_334D_45E7_41B8_E82C1E6F71E4); this.mainPlayList.set('selectedIndex', 3)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "class": "HotspotPanoramaOverlay",
 "id": "overlay_3F5758A9_2EC8_6B90_41B9_0D0500D1E9C2",
 "data": {
  "label": "Circle Arrow 01b"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 12.33,
   "hfov": 34.76,
   "image": {
    "levels": [
     {
      "url": "media/panorama_24BAB721_2EC9_E690_41C3_7C714E7A53B5_0_HS_2_1_0_map.gif",
      "width": 62,
      "class": "ImageResourceLevel",
      "height": 200
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 18.11
  }
 ],
 "areas": [
  {
   "rollOver": "this.showPopupPanoramaOverlay(this.popup_27E8545F_3242_4297_41C3_848B57B20C2C, {'pressedBackgroundOpacity':0.3,'rollOverBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'pressedIconColor':'#888888','rollOverBorderSize':5,'backgroundOpacity':0.3,'iconWidth':20,'borderSize':5,'pressedBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'iconHeight':20,'paddingBottom':5,'pressedBorderColor':'#FFFFFF','rollOverBackgroundColorDirection':'vertical','backgroundColorDirection':'vertical','iconColor':'#000000','rollOverBackgroundColorRatios':[0,0.09803921568627451,1],'paddingLeft':5,'pressedIconLineWidth':5,'pressedBorderSize':5,'rollOverBorderColor':'#FFFFFF','iconLineWidth':5,'rollOverBackgroundOpacity':0.3,'backgroundColorRatios':[0,0.09803921568627451,1],'rollOverIconHeight':20,'rollOverIconColor':'#666666','rollOverIconWidth':20,'pressedBackgroundColorDirection':'vertical','pressedIconWidth':20,'pressedIconHeight':20,'paddingRight':5,'pressedBackgroundColorRatios':[0,0.09803921568627451,1],'paddingTop':5,'rollOverIconLineWidth':5,'backgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'borderColor':'#FFFFFF'}, this.ImageResource_28BE49FB_3246_459F_41B1_3367E00076D5, null, null, null, null, false)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "class": "HotspotPanoramaOverlay",
 "id": "overlay_262A6BE6_3242_C5A8_4157_A38D3469031F",
 "data": {
  "label": "Polygon"
 }
},
{
 "autoplay": true,
 "rotationX": 0,
 "yaw": 153.05,
 "rotationZ": 0,
 "rotationY": 0,
 "showEasing": "cubic_in",
 "hideDuration": 500,
 "showDuration": 500,
 "class": "PopupPanoramaOverlay",
 "popupMaxWidth": "50%",
 "popupDistance": 100,
 "popupMaxHeight": "50%",
 "loop": false,
 "id": "popup_241B5456_32C6_42E9_41B7_2FCCDA5E3CF0",
 "pitch": -7.9,
 "hideEasing": "cubic_out",
 "hfov": 3.37,
 "video": {
  "width": 1920,
  "class": "VideoResource",
  "mp4Url": "media/video_28962713_32DE_4E6F_418C_79FBEC63D9AA.mp4",
  "height": 1080
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -56.69,
   "hfov": 13.76,
   "image": {
    "levels": [
     {
      "url": "media/panorama_24BAB721_2EC9_E690_41C3_7C714E7A53B5_0_HS_4_0_map.gif",
      "width": 70,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -8.77
  }
 ],
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": {
    "levels": [
     {
      "url": "media/panorama_24BAB721_2EC9_E690_41C3_7C714E7A53B5_0_HS_4_0.png",
      "width": 207,
      "class": "ImageResourceLevel",
      "height": 47
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -8.77,
   "yaw": -56.69,
   "hfov": 13.76,
   "distance": 50
  }
 ],
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "class": "HotspotPanoramaOverlay",
 "id": "overlay_24ABE4D0_32C1_C3E8_41C6_0592D6AFB412",
 "data": {
  "label": "LIVING ROOM"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -57.15,
   "hfov": 7.04,
   "image": {
    "levels": [
     {
      "url": "media/panorama_24BAB721_2EC9_E690_41C3_7C714E7A53B5_0_HS_5_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -14.25
  }
 ],
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_2F7E594B_32C2_C2FF_41A2_6372264202C9",
   "pitch": -14.25,
   "yaw": -57.15,
   "hfov": 7.04,
   "distance": 100
  }
 ],
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "class": "HotspotPanoramaOverlay",
 "id": "overlay_24AC14D0_32C1_C3E8_41C4_788C7A08CE3C",
 "data": {
  "label": "Info Red 02"
 }
},
{
 "inertia": true,
 "hfov": 19.5,
 "angle": 0,
 "image": {
  "levels": [
   {
    "url": "media/panorama_3E97576C_3242_4EB9_41C5_DA8FE202B423_tcap0.png",
    "width": 850,
    "class": "ImageResourceLevel",
    "height": 850
   }
  ],
  "class": "ImageResource"
 },
 "rotate": false,
 "class": "TripodCapPanoramaOverlay",
 "id": "panorama_24BAB721_2EC9_E690_41C3_7C714E7A53B5_tcap0",
 "distance": 50
},
{
 "useHandCursor": true,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 97.39,
   "hfov": 13.4,
   "image": {
    "levels": [
     {
      "url": "media/panorama_24BA07B5_2EC8_65F0_41C1_AAAA3F505535_0_HS_0_0_0_map.gif",
      "width": 37,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -33.93
  }
 ],
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_38620339_2F48_5EF0_41BD_72C522C24395",
   "pitch": -33.93,
   "yaw": 97.39,
   "hfov": 13.4,
   "distance": 100
  }
 ],
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_24BC5D9B_2EC8_25B0_41C4_5A196FBB4EBE, this.camera_2BA988FD_334D_446B_41C0_0A5B9B83DBCD); this.mainPlayList.set('selectedIndex', 8)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "class": "HotspotPanoramaOverlay",
 "id": "overlay_39B2BC61_2F48_EA90_41C4_C763B173A452",
 "data": {
  "label": "Circle Arrow 01b"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 23.28,
   "hfov": 13.89,
   "image": {
    "levels": [
     {
      "url": "media/panorama_24BA07B5_2EC8_65F0_41C1_AAAA3F505535_0_HS_1_0_0_map.gif",
      "width": 37,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -30.67
  }
 ],
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_3862C339_2F48_5EF0_41A9_27DC7719D00F",
   "pitch": -30.67,
   "yaw": 23.28,
   "hfov": 13.89,
   "distance": 100
  }
 ],
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_24BBDBE9_2EC8_2D93_41C4_423B1CECBEC0, this.camera_2BB808EE_334D_4468_41C7_D74FE0B86A36); this.mainPlayList.set('selectedIndex', 2)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "class": "HotspotPanoramaOverlay",
 "id": "overlay_36F96B38_2F48_2EF0_41B9_7616743BEC6E",
 "data": {
  "label": "Circle Arrow 01b"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 137.83,
   "hfov": 14.24,
   "image": {
    "levels": [
     {
      "url": "media/panorama_24BA07B5_2EC8_65F0_41C1_AAAA3F505535_0_HS_2_0_0_map.gif",
      "width": 37,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -28.16
  }
 ],
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_27AFA77D_3202_763C_41A9_8A822A8AEC49",
   "pitch": -28.16,
   "yaw": 137.83,
   "hfov": 14.24,
   "distance": 100
  }
 ],
 "areas": [
  {
   "click": "this.mainPlayList.set('selectedIndex', 13)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "class": "HotspotPanoramaOverlay",
 "id": "overlay_21FC18AE_3201_DADC_41B6_48CC3C89F93D",
 "data": {
  "label": "Circle Arrow 01b"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 108.73,
   "hfov": 6.67,
   "image": {
    "levels": [
     {
      "url": "media/panorama_24BA07B5_2EC8_65F0_41C1_AAAA3F505535_0_HS_3_0_map.gif",
      "width": 25,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -1.51
  }
 ],
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": {
    "levels": [
     {
      "url": "media/panorama_24BA07B5_2EC8_65F0_41C1_AAAA3F505535_0_HS_3_0.png",
      "width": 99,
      "class": "ImageResourceLevel",
      "height": 62
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -1.51,
   "yaw": 108.73,
   "hfov": 6.67,
   "distance": 50
  }
 ],
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "class": "HotspotPanoramaOverlay",
 "id": "overlay_270A26A9_32C6_4FBB_419E_732164430F0F",
 "data": {
  "label": "BAR"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 108.03,
   "hfov": 5.14,
   "image": {
    "levels": [
     {
      "url": "media/panorama_24BA07B5_2EC8_65F0_41C1_AAAA3F505535_0_HS_4_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -4.64
  }
 ],
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_134EE96D_32C2_C2B8_41BC_476B41B0C489",
   "pitch": -4.64,
   "yaw": 108.03,
   "hfov": 5.14,
   "distance": 100
  }
 ],
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "class": "HotspotPanoramaOverlay",
 "id": "overlay_270A36A9_32C6_4FBB_41C4_C3E0867A498F",
 "data": {
  "label": "Info Red 02"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 172.16,
   "hfov": 9.09,
   "image": {
    "levels": [
     {
      "url": "media/panorama_24BA07B5_2EC8_65F0_41C1_AAAA3F505535_0_HS_5_1_0_map.gif",
      "width": 53,
      "class": "ImageResourceLevel",
      "height": 200
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -17.04
  }
 ],
 "areas": [
  {
   "rollOver": "this.showPopupPanoramaOverlay(this.popup_2A4303C5_32CE_45EB_41C0_237D68B89C2F, {'pressedBackgroundOpacity':1,'rollOverBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'pressedIconColor':'#888888','rollOverBorderSize':10,'backgroundOpacity':0.3,'iconWidth':20,'borderSize':10,'pressedBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'iconHeight':20,'paddingBottom':5,'pressedBorderColor':'#FFFFFF','rollOverBackgroundColorDirection':'vertical','backgroundColorDirection':'vertical','iconColor':'#FFFFFF','rollOverBackgroundColorRatios':[0,0.09803921568627451,1],'paddingLeft':5,'pressedIconLineWidth':5,'pressedBorderSize':10,'rollOverBorderColor':'#FFFFFF','iconLineWidth':5,'rollOverBackgroundOpacity':0.3,'backgroundColorRatios':[0,0.09803921568627451,1],'rollOverIconHeight':20,'rollOverIconColor':'#666666','rollOverIconWidth':20,'pressedBackgroundColorDirection':'vertical','pressedIconWidth':20,'pressedIconHeight':20,'paddingRight':5,'pressedBackgroundColorRatios':[0,0.09803921568627451,1],'paddingTop':5,'rollOverIconLineWidth':5,'backgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'borderColor':'#FFFFFF'}, this.ImageResource_2F20F0FE_32C2_C399_41C4_F99D5E3C749F, null, null, null, null, false)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "class": "HotspotPanoramaOverlay",
 "id": "overlay_25114615_32CE_4E6B_41C8_E40E734769AF",
 "data": {
  "label": "Polygon"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 17.31,
   "hfov": 13.91,
   "image": {
    "levels": [
     {
      "url": "media/panorama_24BA07B5_2EC8_65F0_41C1_AAAA3F505535_0_HS_6_0_map.gif",
      "width": 70,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -2.32
  }
 ],
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": {
    "levels": [
     {
      "url": "media/panorama_24BA07B5_2EC8_65F0_41C1_AAAA3F505535_0_HS_6_0.png",
      "width": 207,
      "class": "ImageResourceLevel",
      "height": 47
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -2.32,
   "yaw": 17.31,
   "hfov": 13.91,
   "distance": 50
  }
 ],
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "class": "HotspotPanoramaOverlay",
 "id": "overlay_242B9FBE_32C2_3D99_41C7_729018FFFF13",
 "data": {
  "label": "LIVING ROOM"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 16.68,
   "hfov": 5.82,
   "image": {
    "levels": [
     {
      "url": "media/panorama_24BA07B5_2EC8_65F0_41C1_AAAA3F505535_0_HS_7_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -5.35
  }
 ],
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_24A8CC9B_32C6_439F_41C4_D23F2E5CD47B",
   "pitch": -5.35,
   "yaw": 16.68,
   "hfov": 5.82,
   "distance": 100
  }
 ],
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "class": "HotspotPanoramaOverlay",
 "id": "overlay_242B8FBF_32C2_3D97_41C2_7232C5824629",
 "data": {
  "label": "Info Red 02"
 }
},
{
 "inertia": true,
 "hfov": 19.5,
 "angle": 0,
 "image": {
  "levels": [
   {
    "url": "media/panorama_3E97576C_3242_4EB9_41C5_DA8FE202B423_tcap0.png",
    "width": 850,
    "class": "ImageResourceLevel",
    "height": 850
   }
  ],
  "class": "ImageResource"
 },
 "rotate": false,
 "class": "TripodCapPanoramaOverlay",
 "id": "panorama_24BA07B5_2EC8_65F0_41C1_AAAA3F505535_tcap0",
 "distance": 50
},
{
 "colCount": 4,
 "rowCount": 6,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_24964DBD_2EC8_65F3_4186_70DC22D46559_1_HS_0_0.png",
   "width": 1220,
   "class": "ImageResourceLevel",
   "height": 780
  }
 ],
 "class": "AnimatedImageResource",
 "id": "AnimatedImageResource_3C900715_2EF8_66B0_41A7_3AE43A1D211A",
 "frameCount": 24
},
{
 "colCount": 4,
 "rowCount": 6,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_24964DBD_2EC8_65F3_4186_70DC22D46559_0_HS_1_0.png",
   "width": 1220,
   "class": "ImageResourceLevel",
   "height": 780
  }
 ],
 "class": "AnimatedImageResource",
 "id": "AnimatedImageResource_3D51671E_2EF9_E6B1_4188_5A6CF36AD6A0",
 "frameCount": 24
},
{
 "colCount": 4,
 "rowCount": 6,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_2493764E_2EC8_2690_4195_080B59CD09C9_0_HS_0_0.png",
   "width": 1220,
   "class": "ImageResourceLevel",
   "height": 780
  }
 ],
 "class": "AnimatedImageResource",
 "id": "AnimatedImageResource_10D70291_3201_EEC4_41A5_EAC5A3CADF76",
 "frameCount": 24
},
{
 "colCount": 4,
 "rowCount": 6,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_2493764E_2EC8_2690_4195_080B59CD09C9_0_HS_1_0.png",
   "width": 800,
   "class": "ImageResourceLevel",
   "height": 1200
  }
 ],
 "class": "AnimatedImageResource",
 "id": "AnimatedImageResource_10D6D296_3201_EECC_41B0_35FB4AB7B3B9",
 "frameCount": 24
},
{
 "colCount": 4,
 "rowCount": 6,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_2493764E_2EC8_2690_4195_080B59CD09C9_0_HS_2_0.png",
   "width": 800,
   "class": "ImageResourceLevel",
   "height": 1200
  }
 ],
 "class": "AnimatedImageResource",
 "id": "AnimatedImageResource_2D86106B_321F_EA44_41C8_F5462B742115",
 "frameCount": 24
},
{
 "colCount": 4,
 "rowCount": 6,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_24BB926B_2EC8_3E90_41A8_84DA0AD93437_0_HS_0_0.png",
   "width": 1220,
   "class": "ImageResourceLevel",
   "height": 780
  }
 ],
 "class": "AnimatedImageResource",
 "id": "AnimatedImageResource_20CBBDCC_320E_3A5C_41B6_FD7B775F4CDA",
 "frameCount": 24
},
{
 "colCount": 4,
 "rowCount": 6,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_24BB926B_2EC8_3E90_41A8_84DA0AD93437_0_HS_1_0.png",
   "width": 1220,
   "class": "ImageResourceLevel",
   "height": 780
  }
 ],
 "class": "AnimatedImageResource",
 "id": "AnimatedImageResource_2418D1C7_3246_45E8_41C1_D812369F3FC6",
 "frameCount": 24
},
{
 "colCount": 4,
 "rowCount": 6,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_24BB926B_2EC8_3E90_41A8_84DA0AD93437_0_HS_2_0.png",
   "width": 1220,
   "class": "ImageResourceLevel",
   "height": 780
  }
 ],
 "class": "AnimatedImageResource",
 "id": "AnimatedImageResource_24A8F66E_3202_D65C_41BA_77FE011DDCDD",
 "frameCount": 24
},
{
 "colCount": 4,
 "rowCount": 6,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_24BB926B_2EC8_3E90_41A8_84DA0AD93437_0_HS_3_0.png",
   "width": 1220,
   "class": "ImageResourceLevel",
   "height": 780
  }
 ],
 "class": "AnimatedImageResource",
 "id": "AnimatedImageResource_241F41C8_3246_45F8_41C8_F764B387D2E0",
 "frameCount": 24
},
{
 "colCount": 4,
 "rowCount": 6,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_24BB926B_2EC8_3E90_41A8_84DA0AD93437_0_HS_5_0.png",
   "width": 680,
   "class": "ImageResourceLevel",
   "height": 1020
  }
 ],
 "class": "AnimatedImageResource",
 "id": "AnimatedImageResource_13707972_32C2_C2A8_415B_FC1FCC98FF6C",
 "frameCount": 24
},
{
 "colCount": 4,
 "rowCount": 6,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_24BB09D8_2EC8_2DB0_41C5_DA73B4006188_0_HS_0_0.png",
   "width": 1220,
   "class": "ImageResourceLevel",
   "height": 780
  }
 ],
 "class": "AnimatedImageResource",
 "id": "AnimatedImageResource_2D89006B_321F_EA44_41BC_1F2B7612DAC2",
 "frameCount": 24
},
{
 "colCount": 4,
 "rowCount": 6,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_24BA736F_2EC9_DE90_41C5_F9EA6B0CA694_0_HS_0_0.png",
   "width": 1220,
   "class": "ImageResourceLevel",
   "height": 780
  }
 ],
 "class": "AnimatedImageResource",
 "id": "AnimatedImageResource_36B7C42D_2ED8_3A90_4168_2DCB946F74ED",
 "frameCount": 24
},
{
 "colCount": 4,
 "rowCount": 6,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_24BA736F_2EC9_DE90_41C5_F9EA6B0CA694_0_HS_1_0.png",
   "width": 1220,
   "class": "ImageResourceLevel",
   "height": 780
  }
 ],
 "class": "AnimatedImageResource",
 "id": "AnimatedImageResource_28015F07_32C2_DE77_415D_965A13609DB6",
 "frameCount": 24
},
{
 "colCount": 4,
 "rowCount": 6,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_24BA736F_2EC9_DE90_41C5_F9EA6B0CA694_0_HS_3_0.png",
   "width": 680,
   "class": "ImageResourceLevel",
   "height": 1020
  }
 ],
 "class": "AnimatedImageResource",
 "id": "AnimatedImageResource_129F31E8_32C6_45B9_41BE_01F895FA0D08",
 "frameCount": 24
},
{
 "colCount": 4,
 "rowCount": 6,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_24BA736F_2EC9_DE90_41C5_F9EA6B0CA694_0_HS_5_0.png",
   "width": 680,
   "class": "ImageResourceLevel",
   "height": 1020
  }
 ],
 "class": "AnimatedImageResource",
 "id": "AnimatedImageResource_129FA1E8_32C6_45B9_41BA_45ED88330D72",
 "frameCount": 24
},
{
 "colCount": 4,
 "rowCount": 6,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_24B94D08_2EC8_EA90_41C1_6BFAE03E3E02_0_HS_0_0.png",
   "width": 1220,
   "class": "ImageResourceLevel",
   "height": 780
  }
 ],
 "class": "AnimatedImageResource",
 "id": "AnimatedImageResource_2DFFDAB2_3202_5EC5_418E_B47FF7F750A0",
 "frameCount": 24
},
{
 "colCount": 4,
 "rowCount": 6,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_24B94D08_2EC8_EA90_41C1_6BFAE03E3E02_0_HS_1_0.png",
   "width": 1220,
   "class": "ImageResourceLevel",
   "height": 780
  }
 ],
 "class": "AnimatedImageResource",
 "id": "AnimatedImageResource_2DFF0AB2_3202_5EC5_418B_621ABD5CCAA1",
 "frameCount": 24
},
{
 "colCount": 4,
 "rowCount": 6,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_2493DB03_2EC8_EE90_41B9_9A931BB034DA_0_HS_0_0.png",
   "width": 1220,
   "class": "ImageResourceLevel",
   "height": 780
  }
 ],
 "class": "AnimatedImageResource",
 "id": "AnimatedImageResource_2445D51F_323E_6BFC_41BB_DEF5DFC9ECBB",
 "frameCount": 24
},
{
 "colCount": 4,
 "rowCount": 6,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_2493DB03_2EC8_EE90_41B9_9A931BB034DA_0_HS_1_0.png",
   "width": 1220,
   "class": "ImageResourceLevel",
   "height": 780
  }
 ],
 "class": "AnimatedImageResource",
 "id": "AnimatedImageResource_2AF27458_3206_2A44_41C4_67170E33C79F",
 "frameCount": 24
},
{
 "colCount": 4,
 "rowCount": 6,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_3E97576C_3242_4EB9_41C5_DA8FE202B423_1_HS_0_0.png",
   "width": 1220,
   "class": "ImageResourceLevel",
   "height": 780
  }
 ],
 "class": "AnimatedImageResource",
 "id": "AnimatedImageResource_22C5DAF5_3242_47AB_41B3_69A513D05518",
 "frameCount": 24
},
{
 "colCount": 4,
 "rowCount": 6,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_2493A020_2EC8_DA90_41BE_1A6FAE68E849_0_HS_0_0.png",
   "width": 1220,
   "class": "ImageResourceLevel",
   "height": 780
  }
 ],
 "class": "AnimatedImageResource",
 "id": "AnimatedImageResource_24A8A66E_3202_D65C_41C8_4AE067EAF1AE",
 "frameCount": 24
},
{
 "colCount": 4,
 "rowCount": 6,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_24932127_2EC8_3A90_41BC_8D9A880CACCD_0_HS_0_0.png",
   "width": 1220,
   "class": "ImageResourceLevel",
   "height": 780
  }
 ],
 "class": "AnimatedImageResource",
 "id": "AnimatedImageResource_36B7742D_2ED8_3A90_41AE_9B87E206C768",
 "frameCount": 24
},
{
 "colCount": 4,
 "rowCount": 6,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_24932127_2EC8_3A90_41BC_8D9A880CACCD_0_HS_2_0.png",
   "width": 680,
   "class": "ImageResourceLevel",
   "height": 1020
  }
 ],
 "class": "AnimatedImageResource",
 "id": "AnimatedImageResource_129CF1E9_32C6_45BB_41BF_E5C60618BD6F",
 "frameCount": 24
},
{
 "colCount": 4,
 "rowCount": 6,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_24932127_2EC8_3A90_41BC_8D9A880CACCD_0_HS_4_0.png",
   "width": 680,
   "class": "ImageResourceLevel",
   "height": 1020
  }
 ],
 "class": "AnimatedImageResource",
 "id": "AnimatedImageResource_129D71EA_32C6_45B9_41B5_9B3F5FCD11C3",
 "frameCount": 24
},
{
 "colCount": 4,
 "rowCount": 6,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_2490D19F_2ECB_DDAF_41B8_2E505E4C9610_0_HS_0_0.png",
   "width": 800,
   "class": "ImageResourceLevel",
   "height": 1200
  }
 ],
 "class": "AnimatedImageResource",
 "id": "AnimatedImageResource_2D8B606B_321F_EA44_41C0_2173376AC1A8",
 "frameCount": 24
},
{
 "colCount": 4,
 "rowCount": 6,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_249314F9_2EC9_FB73_41BD_642E1D4B48BC_0_HS_0_0.png",
   "width": 1220,
   "class": "ImageResourceLevel",
   "height": 780
  }
 ],
 "class": "AnimatedImageResource",
 "id": "AnimatedImageResource_3F32E56B_2EF9_FA90_41B4_B481F53A61EB",
 "frameCount": 24
},
{
 "colCount": 4,
 "rowCount": 6,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_249314F9_2EC9_FB73_41BD_642E1D4B48BC_0_HS_1_0.png",
   "width": 1220,
   "class": "ImageResourceLevel",
   "height": 780
  }
 ],
 "class": "AnimatedImageResource",
 "id": "AnimatedImageResource_3AFBF1E5_2EF8_7D90_4196_C4ED5A3D9266",
 "frameCount": 24
},
{
 "colCount": 4,
 "rowCount": 6,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_249314F9_2EC9_FB73_41BD_642E1D4B48BC_0_HS_2_0.png",
   "width": 1220,
   "class": "ImageResourceLevel",
   "height": 780
  }
 ],
 "class": "AnimatedImageResource",
 "id": "AnimatedImageResource_3BF47538_2EC8_5AF0_41C0_3CE114BE9C04",
 "frameCount": 24
},
{
 "colCount": 4,
 "rowCount": 6,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_249314F9_2EC9_FB73_41BD_642E1D4B48BC_0_HS_5_0.png",
   "width": 680,
   "class": "ImageResourceLevel",
   "height": 1020
  }
 ],
 "class": "AnimatedImageResource",
 "id": "AnimatedImageResource_2F40494D_32C2_C2FB_41B8_7CBE55D3CCC2",
 "frameCount": 24
},
{
 "colCount": 4,
 "rowCount": 6,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_24BBDBE9_2EC8_2D93_41C4_423B1CECBEC0_0_HS_0_0.png",
   "width": 1220,
   "class": "ImageResourceLevel",
   "height": 780
  }
 ],
 "class": "AnimatedImageResource",
 "id": "AnimatedImageResource_3D51B71E_2EF9_E6B1_41B7_32416FD24010",
 "frameCount": 24
},
{
 "colCount": 4,
 "rowCount": 6,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_24BBDBE9_2EC8_2D93_41C4_423B1CECBEC0_0_HS_1_0.png",
   "width": 1220,
   "class": "ImageResourceLevel",
   "height": 780
  }
 ],
 "class": "AnimatedImageResource",
 "id": "AnimatedImageResource_3F32456B_2EF9_FA90_41BF_46CC39547E1D",
 "frameCount": 24
},
{
 "colCount": 4,
 "rowCount": 6,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_24BBDBE9_2EC8_2D93_41C4_423B1CECBEC0_0_HS_2_0.png",
   "width": 1220,
   "class": "ImageResourceLevel",
   "height": 780
  }
 ],
 "class": "AnimatedImageResource",
 "id": "AnimatedImageResource_3F32B56B_2EF9_FA90_41B7_BB4BEE8AB42E",
 "frameCount": 24
},
{
 "colCount": 4,
 "rowCount": 6,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_24BBDBE9_2EC8_2D93_41C4_423B1CECBEC0_0_HS_4_0.png",
   "width": 1220,
   "class": "ImageResourceLevel",
   "height": 780
  }
 ],
 "class": "AnimatedImageResource",
 "id": "AnimatedImageResource_37C7E62F_2F79_E6EF_41C1_97BD030DB280",
 "frameCount": 24
},
{
 "colCount": 4,
 "rowCount": 6,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_24BBDBE9_2EC8_2D93_41C4_423B1CECBEC0_0_HS_5_0.png",
   "width": 1220,
   "class": "ImageResourceLevel",
   "height": 780
  }
 ],
 "class": "AnimatedImageResource",
 "id": "AnimatedImageResource_318B4078_2F58_5B70_41AB_9DF8B7CEFBF6",
 "frameCount": 24
},
{
 "colCount": 4,
 "rowCount": 6,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_24BBDBE9_2EC8_2D93_41C4_423B1CECBEC0_0_HS_6_0.png",
   "width": 1220,
   "class": "ImageResourceLevel",
   "height": 780
  }
 ],
 "class": "AnimatedImageResource",
 "id": "AnimatedImageResource_3188F078_2F58_5B70_41C5_3975ED1DCEC5",
 "frameCount": 24
},
{
 "colCount": 4,
 "rowCount": 6,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_24BBDBE9_2EC8_2D93_41C4_423B1CECBEC0_0_HS_7_0.png",
   "width": 1220,
   "class": "ImageResourceLevel",
   "height": 780
  }
 ],
 "class": "AnimatedImageResource",
 "id": "AnimatedImageResource_264A1318_3206_6FC4_41C8_241A5848EB56",
 "frameCount": 24
},
{
 "colCount": 4,
 "rowCount": 6,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_24BBDBE9_2EC8_2D93_41C4_423B1CECBEC0_0_HS_9_0.png",
   "width": 680,
   "class": "ImageResourceLevel",
   "height": 1020
  }
 ],
 "class": "AnimatedImageResource",
 "id": "AnimatedImageResource_2F0F80B7_32C2_C397_41BF_B40F28348272",
 "frameCount": 24
},
{
 "colCount": 4,
 "rowCount": 6,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_24BBDBE9_2EC8_2D93_41C4_423B1CECBEC0_0_HS_12_0.png",
   "width": 680,
   "class": "ImageResourceLevel",
   "height": 1020
  }
 ],
 "class": "AnimatedImageResource",
 "id": "AnimatedImageResource_258745D5_32C2_4DEA_41C4_04D2978F6D9C",
 "frameCount": 24
},
{
 "colCount": 4,
 "rowCount": 6,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_24BBDBE9_2EC8_2D93_41C4_423B1CECBEC0_0_HS_14_0.png",
   "width": 680,
   "class": "ImageResourceLevel",
   "height": 1020
  }
 ],
 "class": "AnimatedImageResource",
 "id": "AnimatedImageResource_2F7A1946_32C2_C2E9_4168_B67E296C9B40",
 "frameCount": 24
},
{
 "colCount": 4,
 "rowCount": 6,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_2492E99F_2EC8_2DB0_41C3_A52C968A9FC9_0_HS_0_0.png",
   "width": 1220,
   "class": "ImageResourceLevel",
   "height": 780
  }
 ],
 "class": "AnimatedImageResource",
 "id": "AnimatedImageResource_3B367BFE_2F78_2D70_41BC_9B35BD7AB937",
 "frameCount": 24
},
{
 "colCount": 4,
 "rowCount": 6,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_2492E99F_2EC8_2DB0_41C3_A52C968A9FC9_0_HS_1_0.png",
   "width": 1220,
   "class": "ImageResourceLevel",
   "height": 780
  }
 ],
 "class": "AnimatedImageResource",
 "id": "AnimatedImageResource_3F3EFF34_2EC8_66F1_41B0_7133C9F97252",
 "frameCount": 24
},
{
 "colCount": 4,
 "rowCount": 6,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_2492E99F_2EC8_2DB0_41C3_A52C968A9FC9_0_HS_4_0.png",
   "width": 680,
   "class": "ImageResourceLevel",
   "height": 1020
  }
 ],
 "class": "AnimatedImageResource",
 "id": "AnimatedImageResource_2F7B5948_32C2_C2F9_41B6_BB8A9964BB17",
 "frameCount": 24
},
{
 "colCount": 4,
 "rowCount": 6,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_2492E99F_2EC8_2DB0_41C3_A52C968A9FC9_0_HS_8_0.png",
   "width": 680,
   "class": "ImageResourceLevel",
   "height": 1020
  }
 ],
 "class": "AnimatedImageResource",
 "id": "AnimatedImageResource_2F7DB949_32C2_C2FB_41C8_B05651E46695",
 "frameCount": 24
},
{
 "colCount": 4,
 "rowCount": 6,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_24933CE7_2EC8_2B90_41B9_291ACC114124_0_HS_0_0.png",
   "width": 800,
   "class": "ImageResourceLevel",
   "height": 1200
  }
 ],
 "class": "AnimatedImageResource",
 "id": "AnimatedImageResource_2D88A06B_321F_EA44_41A4_6124164B2315",
 "frameCount": 24
},
{
 "colCount": 4,
 "rowCount": 6,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_24933CE7_2EC8_2B90_41B9_291ACC114124_0_HS_1_0.png",
   "width": 1220,
   "class": "ImageResourceLevel",
   "height": 780
  }
 ],
 "class": "AnimatedImageResource",
 "id": "AnimatedImageResource_2D88406B_321F_EA44_41B4_1C2165D2453D",
 "frameCount": 24
},
{
 "colCount": 4,
 "rowCount": 6,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_24933CE7_2EC8_2B90_41B9_291ACC114124_0_HS_2_0.png",
   "width": 1220,
   "class": "ImageResourceLevel",
   "height": 780
  }
 ],
 "class": "AnimatedImageResource",
 "id": "AnimatedImageResource_2D89D06B_321F_EA44_41A0_F0847A21F397",
 "frameCount": 24
},
{
 "colCount": 4,
 "rowCount": 6,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_24933CE7_2EC8_2B90_41B9_291ACC114124_0_HS_3_0.png",
   "width": 1220,
   "class": "ImageResourceLevel",
   "height": 780
  }
 ],
 "class": "AnimatedImageResource",
 "id": "AnimatedImageResource_2D89806B_321F_EA44_41C0_3F4CDC66244D",
 "frameCount": 24
},
{
 "colCount": 4,
 "rowCount": 6,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_24B66547_2ECB_FA9F_41B3_5603B4E3CCF0_0_HS_0_0.png",
   "width": 1220,
   "class": "ImageResourceLevel",
   "height": 780
  }
 ],
 "class": "AnimatedImageResource",
 "id": "AnimatedImageResource_2D8A306B_321F_EA44_41AA_48A47F96A172",
 "frameCount": 24
},
{
 "colCount": 4,
 "rowCount": 6,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_24B66547_2ECB_FA9F_41B3_5603B4E3CCF0_0_HS_1_0.png",
   "width": 800,
   "class": "ImageResourceLevel",
   "height": 1200
  }
 ],
 "class": "AnimatedImageResource",
 "id": "AnimatedImageResource_2D8BD06B_321F_EA44_4190_6719375E3336",
 "frameCount": 24
},
{
 "colCount": 4,
 "rowCount": 6,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_24935558_2EC8_5AB0_41C3_DD0CE36C4A12_0_HS_0_0.png",
   "width": 1220,
   "class": "ImageResourceLevel",
   "height": 780
  }
 ],
 "class": "AnimatedImageResource",
 "id": "AnimatedImageResource_36449775_2F58_2570_41A9_7C7A07E8AE48",
 "frameCount": 24
},
{
 "colCount": 4,
 "rowCount": 6,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_24935558_2EC8_5AB0_41C3_DD0CE36C4A12_0_HS_1_0.png",
   "width": 1220,
   "class": "ImageResourceLevel",
   "height": 780
  }
 ],
 "class": "AnimatedImageResource",
 "id": "AnimatedImageResource_36473775_2F58_2570_41C1_25E19B283E1C",
 "frameCount": 24
},
{
 "colCount": 4,
 "rowCount": 6,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_24935558_2EC8_5AB0_41C3_DD0CE36C4A12_0_HS_2_0.png",
   "width": 1220,
   "class": "ImageResourceLevel",
   "height": 780
  }
 ],
 "class": "AnimatedImageResource",
 "id": "AnimatedImageResource_2052AAD4_3242_C7E9_4162_98EBFF0E617C",
 "frameCount": 24
},
{
 "colCount": 4,
 "rowCount": 6,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_24935558_2EC8_5AB0_41C3_DD0CE36C4A12_0_HS_4_0.png",
   "width": 680,
   "class": "ImageResourceLevel",
   "height": 1020
  }
 ],
 "class": "AnimatedImageResource",
 "id": "AnimatedImageResource_134FC96F_32C2_C2B8_41C2_102BD542FF30",
 "frameCount": 24
},
{
 "colCount": 4,
 "rowCount": 6,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_24935558_2EC8_5AB0_41C3_DD0CE36C4A12_0_HS_6_0.png",
   "width": 680,
   "class": "ImageResourceLevel",
   "height": 1020
  }
 ],
 "class": "AnimatedImageResource",
 "id": "AnimatedImageResource_24A86C9C_32C6_4399_4186_00B19F2848A8",
 "frameCount": 24
},
{
 "colCount": 4,
 "rowCount": 6,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_2490F757_2ECB_E6B0_41AB_EC8D45FBF4FA_0_HS_0_0.png",
   "width": 1220,
   "class": "ImageResourceLevel",
   "height": 780
  }
 ],
 "class": "AnimatedImageResource",
 "id": "AnimatedImageResource_2D8A906B_321F_EA44_41C9_04929C0A4D97",
 "frameCount": 24
},
{
 "colCount": 4,
 "rowCount": 6,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_24B96F7C_2EC8_6570_419D_97833188ABD5_0_HS_0_0.png",
   "width": 1220,
   "class": "ImageResourceLevel",
   "height": 780
  }
 ],
 "class": "AnimatedImageResource",
 "id": "AnimatedImageResource_2D87106B_321F_EA44_41B6_5132A466A4CA",
 "frameCount": 24
},
{
 "colCount": 4,
 "rowCount": 6,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_24BC5D9B_2EC8_25B0_41C4_5A196FBB4EBE_0_HS_0_0.png",
   "width": 1220,
   "class": "ImageResourceLevel",
   "height": 780
  }
 ],
 "class": "AnimatedImageResource",
 "id": "AnimatedImageResource_228770FB_3202_2A3B_41BA_D8FFC8935675",
 "frameCount": 24
},
{
 "colCount": 4,
 "rowCount": 6,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_24BC5D9B_2EC8_25B0_41C4_5A196FBB4EBE_0_HS_1_0.png",
   "width": 1220,
   "class": "ImageResourceLevel",
   "height": 780
  }
 ],
 "class": "AnimatedImageResource",
 "id": "AnimatedImageResource_228490FB_3202_2A3B_4181_A995EE7A2FB1",
 "frameCount": 24
},
{
 "colCount": 4,
 "rowCount": 6,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_24BC5D9B_2EC8_25B0_41C4_5A196FBB4EBE_0_HS_2_0.png",
   "width": 1220,
   "class": "ImageResourceLevel",
   "height": 780
  }
 ],
 "class": "AnimatedImageResource",
 "id": "AnimatedImageResource_24F2FDE7_3206_7A4C_41BB_E46049FE5E3B",
 "frameCount": 24
},
{
 "colCount": 4,
 "rowCount": 6,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_24BC5D9B_2EC8_25B0_41C4_5A196FBB4EBE_0_HS_3_0.png",
   "width": 1220,
   "class": "ImageResourceLevel",
   "height": 780
  }
 ],
 "class": "AnimatedImageResource",
 "id": "AnimatedImageResource_24F30DE7_3206_7A4C_41C1_FD89AAE874DA",
 "frameCount": 24
},
{
 "colCount": 4,
 "rowCount": 6,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_24BC5D9B_2EC8_25B0_41C4_5A196FBB4EBE_0_HS_4_0.png",
   "width": 1220,
   "class": "ImageResourceLevel",
   "height": 780
  }
 ],
 "class": "AnimatedImageResource",
 "id": "AnimatedImageResource_23927B59_3241_C69B_41C6_554C92B159EB",
 "frameCount": 24
},
{
 "colCount": 4,
 "rowCount": 6,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_24BC5D9B_2EC8_25B0_41C4_5A196FBB4EBE_0_HS_6_0.png",
   "width": 680,
   "class": "ImageResourceLevel",
   "height": 1020
  }
 ],
 "class": "AnimatedImageResource",
 "id": "AnimatedImageResource_134DA96B_32C2_C2B8_41B0_195741164728",
 "frameCount": 24
},
{
 "colCount": 4,
 "rowCount": 6,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_24BC5D9B_2EC8_25B0_41C4_5A196FBB4EBE_0_HS_10_0.png",
   "width": 680,
   "class": "ImageResourceLevel",
   "height": 1020
  }
 ],
 "class": "AnimatedImageResource",
 "id": "AnimatedImageResource_2E456007_32CE_C277_41C0_05E94D6FF70C",
 "frameCount": 24
},
{
 "colCount": 4,
 "rowCount": 6,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_24A663B9_2EC8_5DF0_4191_F365AEA11F48_0_HS_0_0.png",
   "width": 800,
   "class": "ImageResourceLevel",
   "height": 1200
  }
 ],
 "class": "AnimatedImageResource",
 "id": "AnimatedImageResource_29C2352B_320E_EBC4_41C4_83BF3BDE6421",
 "frameCount": 24
},
{
 "colCount": 4,
 "rowCount": 6,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_24A663B9_2EC8_5DF0_4191_F365AEA11F48_0_HS_1_0.png",
   "width": 1220,
   "class": "ImageResourceLevel",
   "height": 780
  }
 ],
 "class": "AnimatedImageResource",
 "id": "AnimatedImageResource_29A97086_320E_EACD_41B1_BDD75793108F",
 "frameCount": 24
},
{
 "colCount": 4,
 "rowCount": 6,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_24BAB721_2EC9_E690_41C3_7C714E7A53B5_0_HS_0_0.png",
   "width": 1220,
   "class": "ImageResourceLevel",
   "height": 780
  }
 ],
 "class": "AnimatedImageResource",
 "id": "AnimatedImageResource_381CD421_2F48_FA90_41B6_B161581B11B7",
 "frameCount": 24
},
{
 "colCount": 4,
 "rowCount": 6,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_24BAB721_2EC9_E690_41C3_7C714E7A53B5_0_HS_1_0.png",
   "width": 1220,
   "class": "ImageResourceLevel",
   "height": 780
  }
 ],
 "class": "AnimatedImageResource",
 "id": "AnimatedImageResource_3F3EBF35_2EC8_66F0_419A_E2D078125A1E",
 "frameCount": 24
},
{
 "colCount": 4,
 "rowCount": 6,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_24BAB721_2EC9_E690_41C3_7C714E7A53B5_0_HS_5_0.png",
   "width": 680,
   "class": "ImageResourceLevel",
   "height": 1020
  }
 ],
 "class": "AnimatedImageResource",
 "id": "AnimatedImageResource_2F7E594B_32C2_C2FF_41A2_6372264202C9",
 "frameCount": 24
},
{
 "colCount": 4,
 "rowCount": 6,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_24BA07B5_2EC8_65F0_41C1_AAAA3F505535_0_HS_0_0.png",
   "width": 1220,
   "class": "ImageResourceLevel",
   "height": 780
  }
 ],
 "class": "AnimatedImageResource",
 "id": "AnimatedImageResource_38620339_2F48_5EF0_41BD_72C522C24395",
 "frameCount": 24
},
{
 "colCount": 4,
 "rowCount": 6,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_24BA07B5_2EC8_65F0_41C1_AAAA3F505535_0_HS_1_0.png",
   "width": 1220,
   "class": "ImageResourceLevel",
   "height": 780
  }
 ],
 "class": "AnimatedImageResource",
 "id": "AnimatedImageResource_3862C339_2F48_5EF0_41A9_27DC7719D00F",
 "frameCount": 24
},
{
 "colCount": 4,
 "rowCount": 6,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_24BA07B5_2EC8_65F0_41C1_AAAA3F505535_0_HS_2_0.png",
   "width": 1220,
   "class": "ImageResourceLevel",
   "height": 780
  }
 ],
 "class": "AnimatedImageResource",
 "id": "AnimatedImageResource_27AFA77D_3202_763C_41A9_8A822A8AEC49",
 "frameCount": 24
},
{
 "colCount": 4,
 "rowCount": 6,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_24BA07B5_2EC8_65F0_41C1_AAAA3F505535_0_HS_4_0.png",
   "width": 680,
   "class": "ImageResourceLevel",
   "height": 1020
  }
 ],
 "class": "AnimatedImageResource",
 "id": "AnimatedImageResource_134EE96D_32C2_C2B8_41BC_476B41B0C489",
 "frameCount": 24
},
{
 "colCount": 4,
 "rowCount": 6,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_24BA07B5_2EC8_65F0_41C1_AAAA3F505535_0_HS_7_0.png",
   "width": 680,
   "class": "ImageResourceLevel",
   "height": 1020
  }
 ],
 "class": "AnimatedImageResource",
 "id": "AnimatedImageResource_24A8CC9B_32C6_439F_41C4_D23F2E5CD47B",
 "frameCount": 24
}],
 "class": "Player",
 "backgroundPreloadEnabled": true,
 "paddingTop": 0,
 "paddingBottom": 0,
 "gap": 10,
 "borderSize": 0,
 "height": "100%",
 "contentOpaque": false,
 "scripts": {
  "getOverlays": function(media){  switch(media.get('class')){ case 'Panorama': var overlays = media.get('overlays').concat() || []; var frames = media.get('frames'); for(var j = 0; j<frames.length; ++j){ overlays = overlays.concat(frames[j].get('overlays') || []); } return overlays; case 'Video360': case 'Map': return media.get('overlays') || []; default: return []; } },
  "setEndToItemIndex": function(playList, fromIndex, toIndex){  var endFunction = function(){ if(playList.get('selectedIndex') == fromIndex) playList.set('selectedIndex', toIndex); }; this.executeFunctionWhenChange(playList, fromIndex, endFunction); },
  "getMediaByName": function(name){  var list = this.getByClassName('Media'); for(var i = 0, count = list.length; i<count; ++i){ var media = list[i]; if((media.get('class') == 'Audio' && media.get('data').label == name) || media.get('label') == name){ return media; } } return undefined; },
  "resumePlayers": function(players, onlyResumeCameraIfPanorama){  for(var i = 0; i<players.length; ++i){ var player = players[i]; if(onlyResumeCameraIfPanorama && player.get('class') == 'PanoramaPlayer' && typeof player.get('video') === 'undefined'){ player.resumeCamera(); } else{ player.play(); } } },
  "pauseCurrentPlayers": function(onlyPauseCameraIfPanorama){  var players = this.getCurrentPlayers(); var i = players.length; while(i-- > 0){ var player = players[i]; if(player.get('state') == 'playing') { if(onlyPauseCameraIfPanorama && player.get('class') == 'PanoramaPlayer' && typeof player.get('video') === 'undefined'){ player.pauseCamera(); } else { player.pause(); } } else { players.splice(i, 1); } } return players; },
  "setComponentVisibility": function(component, visible, applyAt, effect, propertyEffect, ignoreClearTimeout){  var keepVisibility = this.getKey('keepVisibility_' + component.get('id')); if(keepVisibility) return; this.unregisterKey('visibility_'+component.get('id')); var changeVisibility = function(){ if(effect && propertyEffect){ component.set(propertyEffect, effect); } component.set('visible', visible); if(component.get('class') == 'ViewerArea'){ try{ if(visible) component.restart(); else if(component.get('playbackState') == 'playing') component.pause(); } catch(e){}; } }; var effectTimeoutName = 'effectTimeout_'+component.get('id'); if(!ignoreClearTimeout && window.hasOwnProperty(effectTimeoutName)){ var effectTimeout = window[effectTimeoutName]; if(effectTimeout instanceof Array){ for(var i=0; i<effectTimeout.length; i++){ clearTimeout(effectTimeout[i]) } }else{ clearTimeout(effectTimeout); } delete window[effectTimeoutName]; } else if(visible == component.get('visible') && !ignoreClearTimeout) return; if(applyAt && applyAt > 0){ var effectTimeout = setTimeout(function(){ if(window[effectTimeoutName] instanceof Array) { var arrayTimeoutVal = window[effectTimeoutName]; var index = arrayTimeoutVal.indexOf(effectTimeout); arrayTimeoutVal.splice(index, 1); if(arrayTimeoutVal.length == 0){ delete window[effectTimeoutName]; } }else{ delete window[effectTimeoutName]; } changeVisibility(); }, applyAt); if(window.hasOwnProperty(effectTimeoutName)){ window[effectTimeoutName] = [window[effectTimeoutName], effectTimeout]; }else{ window[effectTimeoutName] = effectTimeout; } } else{ changeVisibility(); } },
  "getMediaHeight": function(media){  switch(media.get('class')){ case 'Video360': var res = media.get('video'); if(res instanceof Array){ var maxH=0; for(var i=0; i<res.length; i++){ var r = res[i]; if(r.get('height') > maxH) maxH = r.get('height'); } return maxH; }else{ return r.get('height') } default: return media.get('height'); } },
  "showPopupPanoramaVideoOverlay": function(popupPanoramaOverlay, closeButtonProperties, stopAudios){  var self = this; var showEndFunction = function() { popupPanoramaOverlay.unbind('showEnd', showEndFunction); closeButton.bind('click', hideFunction, this); setCloseButtonPosition(); closeButton.set('visible', true); }; var endFunction = function() { if(!popupPanoramaOverlay.get('loop')) hideFunction(); }; var hideFunction = function() { self.MainViewer.set('toolTipEnabled', true); popupPanoramaOverlay.set('visible', false); closeButton.set('visible', false); closeButton.unbind('click', hideFunction, self); popupPanoramaOverlay.unbind('end', endFunction, self); popupPanoramaOverlay.unbind('hideEnd', hideFunction, self, true); self.resumePlayers(playersPaused, true); if(stopAudios) { self.resumeGlobalAudios(); } }; var setCloseButtonPosition = function() { var right = 10; var top = 10; closeButton.set('right', right); closeButton.set('top', top); }; this.MainViewer.set('toolTipEnabled', false); var closeButton = this.closeButtonPopupPanorama; if(closeButtonProperties){ for(var key in closeButtonProperties){ closeButton.set(key, closeButtonProperties[key]); } } var playersPaused = this.pauseCurrentPlayers(true); if(stopAudios) { this.pauseGlobalAudios(); } popupPanoramaOverlay.bind('end', endFunction, this, true); popupPanoramaOverlay.bind('showEnd', showEndFunction, this, true); popupPanoramaOverlay.bind('hideEnd', hideFunction, this, true); popupPanoramaOverlay.set('visible', true); },
  "resumeGlobalAudios": function(caller){  if (window.pauseGlobalAudiosState == undefined || !(caller in window.pauseGlobalAudiosState)) return; var audiosPaused = window.pauseGlobalAudiosState[caller]; delete window.pauseGlobalAudiosState[caller]; var values = Object.values(window.pauseGlobalAudiosState); for (var i = 0, count = values.length; i<count; ++i) { var objAudios = values[i]; for (var j = audiosPaused.length-1; j>=0; --j) { var a = audiosPaused[j]; if(objAudios.indexOf(a) != -1) audiosPaused.splice(j, 1); } } for (var i = 0, count = audiosPaused.length; i<count; ++i) { var a = audiosPaused[i]; if (a.get('state') == 'paused') a.play(); } },
  "fixTogglePlayPauseButton": function(player){  var state = player.get('state'); var buttons = player.get('buttonPlayPause'); if(typeof buttons !== 'undefined' && player.get('state') == 'playing'){ if(!Array.isArray(buttons)) buttons = [buttons]; for(var i = 0; i<buttons.length; ++i) buttons[i].set('pressed', true); } },
  "setPanoramaCameraWithCurrentSpot": function(playListItem){  var currentPlayer = this.getActivePlayerWithViewer(this.MainViewer); if(currentPlayer == undefined){ return; } var playerClass = currentPlayer.get('class'); if(playerClass != 'PanoramaPlayer' && playerClass != 'Video360Player'){ return; } var fromMedia = currentPlayer.get('panorama'); if(fromMedia == undefined) { fromMedia = currentPlayer.get('video'); } var panorama = playListItem.get('media'); var newCamera = this.cloneCamera(playListItem.get('camera')); this.setCameraSameSpotAsMedia(newCamera, fromMedia); this.startPanoramaWithCamera(panorama, newCamera); },
  "getMediaFromPlayer": function(player){  switch(player.get('class')){ case 'PanoramaPlayer': return player.get('panorama') || player.get('video'); case 'VideoPlayer': case 'Video360Player': return player.get('video'); case 'PhotoAlbumPlayer': return player.get('photoAlbum'); case 'MapPlayer': return player.get('map'); } },
  "showWindow": function(w, autoCloseMilliSeconds, containsAudio){  if(w.get('visible') == true){ return; } var closeFunction = function(){ clearAutoClose(); this.resumePlayers(playersPaused, !containsAudio); w.unbind('close', closeFunction, this); }; var clearAutoClose = function(){ w.unbind('click', clearAutoClose, this); if(timeoutID != undefined){ clearTimeout(timeoutID); } }; var timeoutID = undefined; if(autoCloseMilliSeconds){ var autoCloseFunction = function(){ w.hide(); }; w.bind('click', clearAutoClose, this); timeoutID = setTimeout(autoCloseFunction, autoCloseMilliSeconds); } var playersPaused = this.pauseCurrentPlayers(!containsAudio); w.bind('close', closeFunction, this); w.show(this, true); },
  "getCurrentPlayerWithMedia": function(media){  var playerClass = undefined; var mediaPropertyName = undefined; switch(media.get('class')) { case 'Panorama': case 'LivePanorama': case 'HDRPanorama': playerClass = 'PanoramaPlayer'; mediaPropertyName = 'panorama'; break; case 'Video360': playerClass = 'PanoramaPlayer'; mediaPropertyName = 'video'; break; case 'PhotoAlbum': playerClass = 'PhotoAlbumPlayer'; mediaPropertyName = 'photoAlbum'; break; case 'Map': playerClass = 'MapPlayer'; mediaPropertyName = 'map'; break; case 'Video': playerClass = 'VideoPlayer'; mediaPropertyName = 'video'; break; }; if(playerClass != undefined) { var players = this.getByClassName(playerClass); for(var i = 0; i<players.length; ++i){ var player = players[i]; if(player.get(mediaPropertyName) == media) { return player; } } } else { return undefined; } },
  "getKey": function(key){  return window[key]; },
  "getPlayListItems": function(media, player){  var itemClass = (function() { switch(media.get('class')) { case 'Panorama': case 'LivePanorama': case 'HDRPanorama': return 'PanoramaPlayListItem'; case 'Video360': return 'Video360PlayListItem'; case 'PhotoAlbum': return 'PhotoAlbumPlayListItem'; case 'Map': return 'MapPlayListItem'; case 'Video': return 'VideoPlayListItem'; } })(); if (itemClass != undefined) { var items = this.getByClassName(itemClass); for (var i = items.length-1; i>=0; --i) { var item = items[i]; if(item.get('media') != media || (player != undefined && item.get('player') != player)) { items.splice(i, 1); } } return items; } else { return []; } },
  "setCameraSameSpotAsMedia": function(camera, media){  var player = this.getCurrentPlayerWithMedia(media); if(player != undefined) { var position = camera.get('initialPosition'); position.set('yaw', player.get('yaw')); position.set('pitch', player.get('pitch')); position.set('hfov', player.get('hfov')); } },
  "updateMediaLabelFromPlayList": function(playList, htmlText, playListItemStopToDispose){  var changeFunction = function(){ var index = playList.get('selectedIndex'); if(index >= 0){ var beginFunction = function(){ playListItem.unbind('begin', beginFunction); setMediaLabel(index); }; var setMediaLabel = function(index){ var media = playListItem.get('media'); var text = media.get('data'); if(!text) text = media.get('label'); setHtml(text); }; var setHtml = function(text){ if(text !== undefined) { htmlText.set('html', '<div style=\"text-align:left\"><SPAN STYLE=\"color:#FFFFFF;font-size:12px;font-family:Verdana\"><span color=\"white\" font-family=\"Verdana\" font-size=\"12px\">' + text + '</SPAN></div>'); } else { htmlText.set('html', ''); } }; var playListItem = playList.get('items')[index]; if(htmlText.get('html')){ setHtml('Loading...'); playListItem.bind('begin', beginFunction); } else{ setMediaLabel(index); } } }; var disposeFunction = function(){ htmlText.set('html', undefined); playList.unbind('change', changeFunction, this); playListItemStopToDispose.unbind('stop', disposeFunction, this); }; if(playListItemStopToDispose){ playListItemStopToDispose.bind('stop', disposeFunction, this); } playList.bind('change', changeFunction, this); changeFunction(); },
  "historyGoBack": function(playList){  var history = this.get('data')['history'][playList.get('id')]; if(history != undefined) { history.back(); } },
  "showPopupPanoramaOverlay": function(popupPanoramaOverlay, closeButtonProperties, imageHD, toggleImage, toggleImageHD, autoCloseMilliSeconds, audio, stopBackgroundAudio){  var self = this; this.MainViewer.set('toolTipEnabled', false); var cardboardEnabled = this.isCardboardViewMode(); if(!cardboardEnabled) { var zoomImage = this.zoomImagePopupPanorama; var showDuration = popupPanoramaOverlay.get('showDuration'); var hideDuration = popupPanoramaOverlay.get('hideDuration'); var playersPaused = this.pauseCurrentPlayers(audio == null || !stopBackgroundAudio); var popupMaxWidthBackup = popupPanoramaOverlay.get('popupMaxWidth'); var popupMaxHeightBackup = popupPanoramaOverlay.get('popupMaxHeight'); var showEndFunction = function() { var loadedFunction = function(){ if(!self.isCardboardViewMode()) popupPanoramaOverlay.set('visible', false); }; popupPanoramaOverlay.unbind('showEnd', showEndFunction, self); popupPanoramaOverlay.set('showDuration', 1); popupPanoramaOverlay.set('hideDuration', 1); self.showPopupImage(imageHD, toggleImageHD, popupPanoramaOverlay.get('popupMaxWidth'), popupPanoramaOverlay.get('popupMaxHeight'), null, null, closeButtonProperties, autoCloseMilliSeconds, audio, stopBackgroundAudio, loadedFunction, hideFunction); }; var hideFunction = function() { var restoreShowDurationFunction = function(){ popupPanoramaOverlay.unbind('showEnd', restoreShowDurationFunction, self); popupPanoramaOverlay.set('visible', false); popupPanoramaOverlay.set('showDuration', showDuration); popupPanoramaOverlay.set('popupMaxWidth', popupMaxWidthBackup); popupPanoramaOverlay.set('popupMaxHeight', popupMaxHeightBackup); }; self.resumePlayers(playersPaused, audio == null || !stopBackgroundAudio); var currentWidth = zoomImage.get('imageWidth'); var currentHeight = zoomImage.get('imageHeight'); popupPanoramaOverlay.bind('showEnd', restoreShowDurationFunction, self, true); popupPanoramaOverlay.set('showDuration', 1); popupPanoramaOverlay.set('hideDuration', hideDuration); popupPanoramaOverlay.set('popupMaxWidth', currentWidth); popupPanoramaOverlay.set('popupMaxHeight', currentHeight); if(popupPanoramaOverlay.get('visible')) restoreShowDurationFunction(); else popupPanoramaOverlay.set('visible', true); self.MainViewer.set('toolTipEnabled', true); }; if(!imageHD){ imageHD = popupPanoramaOverlay.get('image'); } if(!toggleImageHD && toggleImage){ toggleImageHD = toggleImage; } popupPanoramaOverlay.bind('showEnd', showEndFunction, this, true); } else { var hideEndFunction = function() { self.resumePlayers(playersPaused, audio == null || stopBackgroundAudio); if(audio){ if(stopBackgroundAudio){ self.resumeGlobalAudios(); } self.stopGlobalAudio(audio); } popupPanoramaOverlay.unbind('hideEnd', hideEndFunction, self); self.MainViewer.set('toolTipEnabled', true); }; var playersPaused = this.pauseCurrentPlayers(audio == null || !stopBackgroundAudio); if(audio){ if(stopBackgroundAudio){ this.pauseGlobalAudios(); } this.playGlobalAudio(audio); } popupPanoramaOverlay.bind('hideEnd', hideEndFunction, this, true); } popupPanoramaOverlay.set('visible', true); },
  "getPlayListWithMedia": function(media, onlySelected){  var playLists = this.getByClassName('PlayList'); for(var i = 0, count = playLists.length; i<count; ++i){ var playList = playLists[i]; if(onlySelected && playList.get('selectedIndex') == -1) continue; if(this.getPlayListItemByMedia(playList, media) != undefined) return playList; } return undefined; },
  "setMainMediaByIndex": function(index){  var item = undefined; if(index >= 0 && index < this.mainPlayList.get('items').length){ this.mainPlayList.set('selectedIndex', index); item = this.mainPlayList.get('items')[index]; } return item; },
  "startPanoramaWithCamera": function(media, camera){  if(window.currentPanoramasWithCameraChanged != undefined && window.currentPanoramasWithCameraChanged.indexOf(media) != -1){ return; } var playLists = this.getByClassName('PlayList'); if(playLists.length == 0) return; var restoreItems = []; for(var i = 0, count = playLists.length; i<count; ++i){ var playList = playLists[i]; var items = playList.get('items'); for(var j = 0, countJ = items.length; j<countJ; ++j){ var item = items[j]; if(item.get('media') == media && (item.get('class') == 'PanoramaPlayListItem' || item.get('class') == 'Video360PlayListItem')){ restoreItems.push({camera: item.get('camera'), item: item}); item.set('camera', camera); } } } if(restoreItems.length > 0) { if(window.currentPanoramasWithCameraChanged == undefined) { window.currentPanoramasWithCameraChanged = [media]; } else { window.currentPanoramasWithCameraChanged.push(media); } var restoreCameraOnStop = function(){ var index = window.currentPanoramasWithCameraChanged.indexOf(media); if(index != -1) { window.currentPanoramasWithCameraChanged.splice(index, 1); } for (var i = 0; i < restoreItems.length; i++) { restoreItems[i].item.set('camera', restoreItems[i].camera); restoreItems[i].item.unbind('stop', restoreCameraOnStop, this); } }; for (var i = 0; i < restoreItems.length; i++) { restoreItems[i].item.bind('stop', restoreCameraOnStop, this); } } },
  "playAudioList": function(audios){  if(audios.length == 0) return; var currentAudioCount = -1; var currentAudio; var playGlobalAudioFunction = this.playGlobalAudio; var playNext = function(){ if(++currentAudioCount >= audios.length) currentAudioCount = 0; currentAudio = audios[currentAudioCount]; playGlobalAudioFunction(currentAudio, playNext); }; playNext(); },
  "getPlayListItemByMedia": function(playList, media){  var items = playList.get('items'); for(var j = 0, countJ = items.length; j<countJ; ++j){ var item = items[j]; if(item.get('media') == media) return item; } return undefined; },
  "stopGlobalAudio": function(audio){  var audios = window.currentGlobalAudios; if(audios){ audio = audios[audio.get('id')]; if(audio){ delete audios[audio.get('id')]; if(Object.keys(audios).length == 0){ window.currentGlobalAudios = undefined; } } } if(audio) audio.stop(); },
  "shareTwitter": function(url){  window.open('https://twitter.com/intent/tweet?source=webclient&url=' + url, '_blank'); },
  "syncPlaylists": function(playLists){  var changeToMedia = function(media, playListDispatched){ for(var i = 0, count = playLists.length; i<count; ++i){ var playList = playLists[i]; if(playList != playListDispatched){ var items = playList.get('items'); for(var j = 0, countJ = items.length; j<countJ; ++j){ if(items[j].get('media') == media){ if(playList.get('selectedIndex') != j){ playList.set('selectedIndex', j); } break; } } } } }; var changeFunction = function(event){ var playListDispatched = event.source; var selectedIndex = playListDispatched.get('selectedIndex'); if(selectedIndex < 0) return; var media = playListDispatched.get('items')[selectedIndex].get('media'); changeToMedia(media, playListDispatched); }; var mapPlayerChangeFunction = function(event){ var panoramaMapLocation = event.source.get('panoramaMapLocation'); if(panoramaMapLocation){ var map = panoramaMapLocation.get('map'); changeToMedia(map); } }; for(var i = 0, count = playLists.length; i<count; ++i){ playLists[i].bind('change', changeFunction, this); } var mapPlayers = this.getByClassName('MapPlayer'); for(var i = 0, count = mapPlayers.length; i<count; ++i){ mapPlayers[i].bind('panoramaMapLocation_change', mapPlayerChangeFunction, this); } },
  "getPixels": function(value){  var result = new RegExp('((\\+|\\-)?\\d+(\\.\\d*)?)(px|vw|vh|vmin|vmax)?', 'i').exec(value); if (result == undefined) { return 0; } var num = parseFloat(result[1]); var unit = result[4]; var vw = this.rootPlayer.get('actualWidth') / 100; var vh = this.rootPlayer.get('actualHeight') / 100; switch(unit) { case 'vw': return num * vw; case 'vh': return num * vh; case 'vmin': return num * Math.min(vw, vh); case 'vmax': return num * Math.max(vw, vh); default: return num; } },
  "registerKey": function(key, value){  window[key] = value; },
  "playGlobalAudioWhilePlay": function(playList, index, audio, endCallback){  var changeFunction = function(event){ if(event.data.previousSelectedIndex == index){ this.stopGlobalAudio(audio); if(isPanorama) { var media = playListItem.get('media'); var audios = media.get('audios'); audios.splice(audios.indexOf(audio), 1); media.set('audios', audios); } playList.unbind('change', changeFunction, this); if(endCallback) endCallback(); } }; var audios = window.currentGlobalAudios; if(audios && audio.get('id') in audios){ audio = audios[audio.get('id')]; if(audio.get('state') != 'playing'){ audio.play(); } return audio; } playList.bind('change', changeFunction, this); var playListItem = playList.get('items')[index]; var isPanorama = playListItem.get('class') == 'PanoramaPlayListItem'; if(isPanorama) { var media = playListItem.get('media'); var audios = (media.get('audios') || []).slice(); if(audio.get('class') == 'MediaAudio') { var panoramaAudio = this.rootPlayer.createInstance('PanoramaAudio'); panoramaAudio.set('autoplay', false); panoramaAudio.set('audio', audio.get('audio')); panoramaAudio.set('loop', audio.get('loop')); panoramaAudio.set('id', audio.get('id')); var stateChangeFunctions = audio.getBindings('stateChange'); for(var i = 0; i<stateChangeFunctions.length; ++i){ var f = stateChangeFunctions[i]; if(typeof f == 'string') f = new Function('event', f); panoramaAudio.bind('stateChange', f, this); } audio = panoramaAudio; } audios.push(audio); media.set('audios', audios); } return this.playGlobalAudio(audio, endCallback); },
  "getMediaWidth": function(media){  switch(media.get('class')){ case 'Video360': var res = media.get('video'); if(res instanceof Array){ var maxW=0; for(var i=0; i<res.length; i++){ var r = res[i]; if(r.get('width') > maxW) maxW = r.get('width'); } return maxW; }else{ return r.get('width') } default: return media.get('width'); } },
  "init": function(){  if(!Object.hasOwnProperty('values')) { Object.values = function(o){ return Object.keys(o).map(function(e) { return o[e]; }); }; } var history = this.get('data')['history']; var playListChangeFunc = function(e){ var playList = e.source; var index = playList.get('selectedIndex'); if(index < 0) return; var id = playList.get('id'); if(!history.hasOwnProperty(id)) history[id] = new HistoryData(playList); history[id].add(index); }; var playLists = this.getByClassName('PlayList'); for(var i = 0, count = playLists.length; i<count; ++i) { var playList = playLists[i]; playList.bind('change', playListChangeFunc, this); } },
  "setMapLocation": function(panoramaPlayListItem, mapPlayer){  var resetFunction = function(){ panoramaPlayListItem.unbind('stop', resetFunction, this); player.set('mapPlayer', null); }; panoramaPlayListItem.bind('stop', resetFunction, this); var player = panoramaPlayListItem.get('player'); player.set('mapPlayer', mapPlayer); },
  "executeFunctionWhenChange": function(playList, index, endFunction, changeFunction){  var endObject = undefined; var changePlayListFunction = function(event){ if(event.data.previousSelectedIndex == index){ if(changeFunction) changeFunction.call(this); if(endFunction && endObject) endObject.unbind('end', endFunction, this); playList.unbind('change', changePlayListFunction, this); } }; if(endFunction){ var playListItem = playList.get('items')[index]; if(playListItem.get('class') == 'PanoramaPlayListItem'){ var camera = playListItem.get('camera'); if(camera != undefined) endObject = camera.get('initialSequence'); if(endObject == undefined) endObject = camera.get('idleSequence'); } else{ endObject = playListItem.get('media'); } if(endObject){ endObject.bind('end', endFunction, this); } } playList.bind('change', changePlayListFunction, this); },
  "pauseGlobalAudio": function(audio){  var audios = window.currentGlobalAudios; if(audios){ audio = audios[audio.get('id')]; } if(audio.get('state') == 'playing') audio.pause(); },
  "initGA": function(){  var sendFunc = function(category, event, label) { ga('send', 'event', category, event, label); }; var media = this.getByClassName('Panorama'); media = media.concat(this.getByClassName('Video360')); media = media.concat(this.getByClassName('Map')); for(var i = 0, countI = media.length; i<countI; ++i){ var m = media[i]; var mediaLabel = m.get('label'); var overlays = this.getOverlays(m); for(var j = 0, countJ = overlays.length; j<countJ; ++j){ var overlay = overlays[j]; var overlayLabel = overlay.get('data') != undefined ? mediaLabel + ' - ' + overlay.get('data')['label'] : mediaLabel; switch(overlay.get('class')) { case 'HotspotPanoramaOverlay': case 'HotspotMapOverlay': var areas = overlay.get('areas'); for (var z = 0; z<areas.length; ++z) { areas[z].bind('click', sendFunc.bind(this, 'Hotspot', 'click', overlayLabel), this); } break; case 'CeilingCapPanoramaOverlay': case 'TripodCapPanoramaOverlay': overlay.bind('click', sendFunc.bind(this, 'Cap', 'click', overlayLabel), this); break; } } } var components = this.getByClassName('Button'); components = components.concat(this.getByClassName('IconButton')); for(var i = 0, countI = components.length; i<countI; ++i){ var c = components[i]; var componentLabel = c.get('data')['name']; c.bind('click', sendFunc.bind(this, 'Skin', 'click', componentLabel), this); } var items = this.getByClassName('PlayListItem'); var media2Item = {}; for(var i = 0, countI = items.length; i<countI; ++i) { var item = items[i]; var media = item.get('media'); if(!(media.get('id') in media2Item)) { item.bind('begin', sendFunc.bind(this, 'Media', 'play', media.get('label')), this); media2Item[media.get('id')] = item; } } },
  "getCurrentPlayers": function(){  var players = this.getByClassName('PanoramaPlayer'); players = players.concat(this.getByClassName('VideoPlayer')); players = players.concat(this.getByClassName('Video360Player')); players = players.concat(this.getByClassName('PhotoAlbumPlayer')); return players; },
  "changeBackgroundWhilePlay": function(playList, index, color){  var stopFunction = function(event){ playListItem.unbind('stop', stopFunction, this); if((color == viewerArea.get('backgroundColor')) && (colorRatios == viewerArea.get('backgroundColorRatios'))){ viewerArea.set('backgroundColor', backgroundColorBackup); viewerArea.set('backgroundColorRatios', backgroundColorRatiosBackup); } }; var playListItem = playList.get('items')[index]; var player = playListItem.get('player'); var viewerArea = player.get('viewerArea'); var backgroundColorBackup = viewerArea.get('backgroundColor'); var backgroundColorRatiosBackup = viewerArea.get('backgroundColorRatios'); var colorRatios = [0]; if((color != backgroundColorBackup) || (colorRatios != backgroundColorRatiosBackup)){ viewerArea.set('backgroundColor', color); viewerArea.set('backgroundColorRatios', colorRatios); playListItem.bind('stop', stopFunction, this); } },
  "getComponentByName": function(name){  var list = this.getByClassName('UIComponent'); for(var i = 0, count = list.length; i<count; ++i){ var component = list[i]; var data = component.get('data'); if(data != undefined && data.name == name){ return component; } } return undefined; },
  "unregisterKey": function(key){  delete window[key]; },
  "shareWhatsapp": function(url){  window.open('https://api.whatsapp.com/send/?text=' + encodeURIComponent(url), '_blank'); },
  "cloneCamera": function(camera){  var newCamera = this.rootPlayer.createInstance(camera.get('class')); newCamera.set('id', camera.get('id') + '_copy'); newCamera.set('idleSequence', camera.get('initialSequence')); return newCamera; },
  "setStartTimeVideo": function(video, time){  var items = this.getPlayListItems(video); var startTimeBackup = []; var restoreStartTimeFunc = function() { for(var i = 0; i<items.length; ++i){ var item = items[i]; item.set('startTime', startTimeBackup[i]); item.unbind('stop', restoreStartTimeFunc, this); } }; for(var i = 0; i<items.length; ++i) { var item = items[i]; var player = item.get('player'); if(player.get('video') == video && player.get('state') == 'playing') { player.seek(time); } else { startTimeBackup.push(item.get('startTime')); item.set('startTime', time); item.bind('stop', restoreStartTimeFunc, this); } } },
  "setPanoramaCameraWithSpot": function(playListItem, yaw, pitch){  var panorama = playListItem.get('media'); var newCamera = this.cloneCamera(playListItem.get('camera')); var initialPosition = newCamera.get('initialPosition'); initialPosition.set('yaw', yaw); initialPosition.set('pitch', pitch); this.startPanoramaWithCamera(panorama, newCamera); },
  "pauseGlobalAudiosWhilePlayItem": function(playList, index, exclude){  var self = this; var item = playList.get('items')[index]; var media = item.get('media'); var player = item.get('player'); var caller = media.get('id'); var endFunc = function(){ if(playList.get('selectedIndex') != index) { if(hasState){ player.unbind('stateChange', stateChangeFunc, self); } self.resumeGlobalAudios(caller); } }; var stateChangeFunc = function(event){ var state = event.data.state; if(state == 'stopped'){ this.resumeGlobalAudios(caller); } else if(state == 'playing'){ this.pauseGlobalAudios(caller, exclude); } }; var mediaClass = media.get('class'); var hasState = mediaClass == 'Video360' || mediaClass == 'Video'; if(hasState){ player.bind('stateChange', stateChangeFunc, this); } this.pauseGlobalAudios(caller, exclude); this.executeFunctionWhenChange(playList, index, endFunc, endFunc); },
  "loadFromCurrentMediaPlayList": function(playList, delta){  var currentIndex = playList.get('selectedIndex'); var totalItems = playList.get('items').length; var newIndex = (currentIndex + delta) % totalItems; while(newIndex < 0){ newIndex = totalItems + newIndex; }; if(currentIndex != newIndex){ playList.set('selectedIndex', newIndex); } },
  "existsKey": function(key){  return key in window; },
  "setOverlayBehaviour": function(overlay, media, action){  var executeFunc = function() { switch(action){ case 'triggerClick': this.triggerOverlay(overlay, 'click'); break; case 'stop': case 'play': case 'pause': overlay[action](); break; case 'togglePlayPause': case 'togglePlayStop': if(overlay.get('state') == 'playing') overlay[action == 'togglePlayPause' ? 'pause' : 'stop'](); else overlay.play(); break; } if(window.overlaysDispatched == undefined) window.overlaysDispatched = {}; var id = overlay.get('id'); window.overlaysDispatched[id] = true; setTimeout(function(){ delete window.overlaysDispatched[id]; }, 2000); }; if(window.overlaysDispatched != undefined && overlay.get('id') in window.overlaysDispatched) return; var playList = this.getPlayListWithMedia(media, true); if(playList != undefined){ var item = this.getPlayListItemByMedia(playList, media); if(playList.get('items').indexOf(item) != playList.get('selectedIndex')){ var beginFunc = function(e){ item.unbind('begin', beginFunc, this); executeFunc.call(this); }; item.bind('begin', beginFunc, this); return; } } executeFunc.call(this); },
  "keepComponentVisibility": function(component, keep){  var key = 'keepVisibility_' + component.get('id'); var value = this.getKey(key); if(value == undefined && keep) { this.registerKey(key, keep); } else if(value != undefined && !keep) { this.unregisterKey(key); } },
  "stopAndGoCamera": function(camera, ms){  var sequence = camera.get('initialSequence'); sequence.pause(); var timeoutFunction = function(){ sequence.play(); }; setTimeout(timeoutFunction, ms); },
  "setMainMediaByName": function(name){  var items = this.mainPlayList.get('items'); for(var i = 0; i<items.length; ++i){ var item = items[i]; if(item.get('media').get('label') == name) { this.mainPlayList.set('selectedIndex', i); return item; } } },
  "changePlayListWithSameSpot": function(playList, newIndex){  var currentIndex = playList.get('selectedIndex'); if (currentIndex >= 0 && newIndex >= 0 && currentIndex != newIndex) { var currentItem = playList.get('items')[currentIndex]; var newItem = playList.get('items')[newIndex]; var currentPlayer = currentItem.get('player'); var newPlayer = newItem.get('player'); if ((currentPlayer.get('class') == 'PanoramaPlayer' || currentPlayer.get('class') == 'Video360Player') && (newPlayer.get('class') == 'PanoramaPlayer' || newPlayer.get('class') == 'Video360Player')) { var newCamera = this.cloneCamera(newItem.get('camera')); this.setCameraSameSpotAsMedia(newCamera, currentItem.get('media')); this.startPanoramaWithCamera(newItem.get('media'), newCamera); } } },
  "getGlobalAudio": function(audio){  var audios = window.currentGlobalAudios; if(audios != undefined && audio.get('id') in audios){ audio = audios[audio.get('id')]; } return audio; },
  "historyGoForward": function(playList){  var history = this.get('data')['history'][playList.get('id')]; if(history != undefined) { history.forward(); } },
  "getActivePlayerWithViewer": function(viewerArea){  var players = this.getByClassName('PanoramaPlayer'); players = players.concat(this.getByClassName('VideoPlayer')); players = players.concat(this.getByClassName('Video360Player')); players = players.concat(this.getByClassName('PhotoAlbumPlayer')); players = players.concat(this.getByClassName('MapPlayer')); var i = players.length; while(i-- > 0){ var player = players[i]; if(player.get('viewerArea') == viewerArea) { var playerClass = player.get('class'); if(playerClass == 'PanoramaPlayer' && (player.get('panorama') != undefined || player.get('video') != undefined)) return player; else if((playerClass == 'VideoPlayer' || playerClass == 'Video360Player') && player.get('video') != undefined) return player; else if(playerClass == 'PhotoAlbumPlayer' && player.get('photoAlbum') != undefined) return player; else if(playerClass == 'MapPlayer' && player.get('map') != undefined) return player; } } return undefined; },
  "triggerOverlay": function(overlay, eventName){  if(overlay.get('areas') != undefined) { var areas = overlay.get('areas'); for(var i = 0; i<areas.length; ++i) { areas[i].trigger(eventName); } } else { overlay.trigger(eventName); } },
  "setStartTimeVideoSync": function(video, player){  this.setStartTimeVideo(video, player.get('currentTime')); },
  "autotriggerAtStart": function(playList, callback, once){  var onChange = function(event){ callback(); if(once == true) playList.unbind('change', onChange, this); }; playList.bind('change', onChange, this); },
  "loopAlbum": function(playList, index){  var playListItem = playList.get('items')[index]; var player = playListItem.get('player'); var loopFunction = function(){ player.play(); }; this.executeFunctionWhenChange(playList, index, loopFunction); },
  "visibleComponentsIfPlayerFlagEnabled": function(components, playerFlag){  var enabled = this.get(playerFlag); for(var i in components){ components[i].set('visible', enabled); } },
  "shareFacebook": function(url){  window.open('https://www.facebook.com/sharer/sharer.php?u=' + url, '_blank'); },
  "showPopupMedia": function(w, media, playList, popupMaxWidth, popupMaxHeight, autoCloseWhenFinished, stopAudios){  var self = this; var closeFunction = function(){ playList.set('selectedIndex', -1); self.MainViewer.set('toolTipEnabled', true); if(stopAudios) { self.resumeGlobalAudios(); } this.resumePlayers(playersPaused, !stopAudios); if(isVideo) { this.unbind('resize', resizeFunction, this); } w.unbind('close', closeFunction, this); }; var endFunction = function(){ w.hide(); }; var resizeFunction = function(){ var getWinValue = function(property){ return w.get(property) || 0; }; var parentWidth = self.get('actualWidth'); var parentHeight = self.get('actualHeight'); var mediaWidth = self.getMediaWidth(media); var mediaHeight = self.getMediaHeight(media); var popupMaxWidthNumber = parseFloat(popupMaxWidth) / 100; var popupMaxHeightNumber = parseFloat(popupMaxHeight) / 100; var windowWidth = popupMaxWidthNumber * parentWidth; var windowHeight = popupMaxHeightNumber * parentHeight; var footerHeight = getWinValue('footerHeight'); var headerHeight = getWinValue('headerHeight'); if(!headerHeight) { var closeButtonHeight = getWinValue('closeButtonIconHeight') + getWinValue('closeButtonPaddingTop') + getWinValue('closeButtonPaddingBottom'); var titleHeight = self.getPixels(getWinValue('titleFontSize')) + getWinValue('titlePaddingTop') + getWinValue('titlePaddingBottom'); headerHeight = closeButtonHeight > titleHeight ? closeButtonHeight : titleHeight; headerHeight += getWinValue('headerPaddingTop') + getWinValue('headerPaddingBottom'); } var contentWindowWidth = windowWidth - getWinValue('bodyPaddingLeft') - getWinValue('bodyPaddingRight') - getWinValue('paddingLeft') - getWinValue('paddingRight'); var contentWindowHeight = windowHeight - headerHeight - footerHeight - getWinValue('bodyPaddingTop') - getWinValue('bodyPaddingBottom') - getWinValue('paddingTop') - getWinValue('paddingBottom'); var parentAspectRatio = contentWindowWidth / contentWindowHeight; var mediaAspectRatio = mediaWidth / mediaHeight; if(parentAspectRatio > mediaAspectRatio) { windowWidth = contentWindowHeight * mediaAspectRatio + getWinValue('bodyPaddingLeft') + getWinValue('bodyPaddingRight') + getWinValue('paddingLeft') + getWinValue('paddingRight'); } else { windowHeight = contentWindowWidth / mediaAspectRatio + headerHeight + footerHeight + getWinValue('bodyPaddingTop') + getWinValue('bodyPaddingBottom') + getWinValue('paddingTop') + getWinValue('paddingBottom'); } if(windowWidth > parentWidth * popupMaxWidthNumber) { windowWidth = parentWidth * popupMaxWidthNumber; } if(windowHeight > parentHeight * popupMaxHeightNumber) { windowHeight = parentHeight * popupMaxHeightNumber; } w.set('width', windowWidth); w.set('height', windowHeight); w.set('x', (parentWidth - getWinValue('actualWidth')) * 0.5); w.set('y', (parentHeight - getWinValue('actualHeight')) * 0.5); }; if(autoCloseWhenFinished){ this.executeFunctionWhenChange(playList, 0, endFunction); } var mediaClass = media.get('class'); var isVideo = mediaClass == 'Video' || mediaClass == 'Video360'; playList.set('selectedIndex', 0); if(isVideo){ this.bind('resize', resizeFunction, this); resizeFunction(); playList.get('items')[0].get('player').play(); } else { w.set('width', popupMaxWidth); w.set('height', popupMaxHeight); } this.MainViewer.set('toolTipEnabled', false); if(stopAudios) { this.pauseGlobalAudios(); } var playersPaused = this.pauseCurrentPlayers(!stopAudios); w.bind('close', closeFunction, this); w.show(this, true); },
  "playGlobalAudio": function(audio, endCallback){  var endFunction = function(){ audio.unbind('end', endFunction, this); this.stopGlobalAudio(audio); if(endCallback) endCallback(); }; audio = this.getGlobalAudio(audio); var audios = window.currentGlobalAudios; if(!audios){ audios = window.currentGlobalAudios = {}; } audios[audio.get('id')] = audio; if(audio.get('state') == 'playing'){ return audio; } if(!audio.get('loop')){ audio.bind('end', endFunction, this); } audio.play(); return audio; },
  "updateVideoCues": function(playList, index){  var playListItem = playList.get('items')[index]; var video = playListItem.get('media'); if(video.get('cues').length == 0) return; var player = playListItem.get('player'); var cues = []; var changeFunction = function(){ if(playList.get('selectedIndex') != index){ video.unbind('cueChange', cueChangeFunction, this); playList.unbind('change', changeFunction, this); } }; var cueChangeFunction = function(event){ var activeCues = event.data.activeCues; for(var i = 0, count = cues.length; i<count; ++i){ var cue = cues[i]; if(activeCues.indexOf(cue) == -1 && (cue.get('startTime') > player.get('currentTime') || cue.get('endTime') < player.get('currentTime')+0.5)){ cue.trigger('end'); } } cues = activeCues; }; video.bind('cueChange', cueChangeFunction, this); playList.bind('change', changeFunction, this); },
  "isCardboardViewMode": function(){  var players = this.getByClassName('PanoramaPlayer'); return players.length > 0 && players[0].get('viewMode') == 'cardboard'; },
  "setMediaBehaviour": function(playList, index, mediaDispatcher){  var self = this; var stateChangeFunction = function(event){ if(event.data.state == 'stopped'){ dispose.call(this, true); } }; var onBeginFunction = function() { item.unbind('begin', onBeginFunction, self); var media = item.get('media'); if(media.get('class') != 'Panorama' || (media.get('camera') != undefined && media.get('camera').get('initialSequence') != undefined)){ player.bind('stateChange', stateChangeFunction, self); } }; var changeFunction = function(){ var index = playListDispatcher.get('selectedIndex'); if(index != -1){ indexDispatcher = index; dispose.call(this, false); } }; var disposeCallback = function(){ dispose.call(this, false); }; var dispose = function(forceDispose){ if(!playListDispatcher) return; var media = item.get('media'); if((media.get('class') == 'Video360' || media.get('class') == 'Video') && media.get('loop') == true && !forceDispose) return; playList.set('selectedIndex', -1); if(panoramaSequence && panoramaSequenceIndex != -1){ if(panoramaSequence) { if(panoramaSequenceIndex > 0 && panoramaSequence.get('movements')[panoramaSequenceIndex-1].get('class') == 'TargetPanoramaCameraMovement'){ var initialPosition = camera.get('initialPosition'); var oldYaw = initialPosition.get('yaw'); var oldPitch = initialPosition.get('pitch'); var oldHfov = initialPosition.get('hfov'); var previousMovement = panoramaSequence.get('movements')[panoramaSequenceIndex-1]; initialPosition.set('yaw', previousMovement.get('targetYaw')); initialPosition.set('pitch', previousMovement.get('targetPitch')); initialPosition.set('hfov', previousMovement.get('targetHfov')); var restoreInitialPositionFunction = function(event){ initialPosition.set('yaw', oldYaw); initialPosition.set('pitch', oldPitch); initialPosition.set('hfov', oldHfov); itemDispatcher.unbind('end', restoreInitialPositionFunction, this); }; itemDispatcher.bind('end', restoreInitialPositionFunction, this); } panoramaSequence.set('movementIndex', panoramaSequenceIndex); } } if(player){ item.unbind('begin', onBeginFunction, this); player.unbind('stateChange', stateChangeFunction, this); for(var i = 0; i<buttons.length; ++i) { buttons[i].unbind('click', disposeCallback, this); } } if(sameViewerArea){ var currentMedia = this.getMediaFromPlayer(player); if(currentMedia == undefined || currentMedia == item.get('media')){ playListDispatcher.set('selectedIndex', indexDispatcher); } if(playList != playListDispatcher) playListDispatcher.unbind('change', changeFunction, this); } else{ viewerArea.set('visible', viewerVisibility); } playListDispatcher = undefined; }; var mediaDispatcherByParam = mediaDispatcher != undefined; if(!mediaDispatcher){ var currentIndex = playList.get('selectedIndex'); var currentPlayer = (currentIndex != -1) ? playList.get('items')[playList.get('selectedIndex')].get('player') : this.getActivePlayerWithViewer(this.MainViewer); if(currentPlayer) { mediaDispatcher = this.getMediaFromPlayer(currentPlayer); } } var playListDispatcher = mediaDispatcher ? this.getPlayListWithMedia(mediaDispatcher, true) : undefined; if(!playListDispatcher){ playList.set('selectedIndex', index); return; } var indexDispatcher = playListDispatcher.get('selectedIndex'); if(playList.get('selectedIndex') == index || indexDispatcher == -1){ return; } var item = playList.get('items')[index]; var itemDispatcher = playListDispatcher.get('items')[indexDispatcher]; var player = item.get('player'); var viewerArea = player.get('viewerArea'); var viewerVisibility = viewerArea.get('visible'); var sameViewerArea = viewerArea == itemDispatcher.get('player').get('viewerArea'); if(sameViewerArea){ if(playList != playListDispatcher){ playListDispatcher.set('selectedIndex', -1); playListDispatcher.bind('change', changeFunction, this); } } else{ viewerArea.set('visible', true); } var panoramaSequenceIndex = -1; var panoramaSequence = undefined; var camera = itemDispatcher.get('camera'); if(camera){ panoramaSequence = camera.get('initialSequence'); if(panoramaSequence) { panoramaSequenceIndex = panoramaSequence.get('movementIndex'); } } playList.set('selectedIndex', index); var buttons = []; var addButtons = function(property){ var value = player.get(property); if(value == undefined) return; if(Array.isArray(value)) buttons = buttons.concat(value); else buttons.push(value); }; addButtons('buttonStop'); for(var i = 0; i<buttons.length; ++i) { buttons[i].bind('click', disposeCallback, this); } if(player != itemDispatcher.get('player') || !mediaDispatcherByParam){ item.bind('begin', onBeginFunction, self); } this.executeFunctionWhenChange(playList, index, disposeCallback); },
  "showComponentsWhileMouseOver": function(parentComponent, components, durationVisibleWhileOut){  var setVisibility = function(visible){ for(var i = 0, length = components.length; i<length; i++){ var component = components[i]; if(component.get('class') == 'HTMLText' && (component.get('html') == '' || component.get('html') == undefined)) { continue; } component.set('visible', visible); } }; if (this.rootPlayer.get('touchDevice') == true){ setVisibility(true); } else { var timeoutID = -1; var rollOverFunction = function(){ setVisibility(true); if(timeoutID >= 0) clearTimeout(timeoutID); parentComponent.unbind('rollOver', rollOverFunction, this); parentComponent.bind('rollOut', rollOutFunction, this); }; var rollOutFunction = function(){ var timeoutFunction = function(){ setVisibility(false); parentComponent.unbind('rollOver', rollOverFunction, this); }; parentComponent.unbind('rollOut', rollOutFunction, this); parentComponent.bind('rollOver', rollOverFunction, this); timeoutID = setTimeout(timeoutFunction, durationVisibleWhileOut); }; parentComponent.bind('rollOver', rollOverFunction, this); } },
  "pauseGlobalAudios": function(caller, exclude){  if (window.pauseGlobalAudiosState == undefined) window.pauseGlobalAudiosState = {}; if (window.pauseGlobalAudiosList == undefined) window.pauseGlobalAudiosList = []; if (caller in window.pauseGlobalAudiosState) { return; } var audios = this.getByClassName('Audio').concat(this.getByClassName('VideoPanoramaOverlay')); if (window.currentGlobalAudios != undefined) audios = audios.concat(Object.values(window.currentGlobalAudios)); var audiosPaused = []; var values = Object.values(window.pauseGlobalAudiosState); for (var i = 0, count = values.length; i<count; ++i) { var objAudios = values[i]; for (var j = 0; j<objAudios.length; ++j) { var a = objAudios[j]; if(audiosPaused.indexOf(a) == -1) audiosPaused.push(a); } } window.pauseGlobalAudiosState[caller] = audiosPaused; for (var i = 0, count = audios.length; i < count; ++i) { var a = audios[i]; if (a.get('state') == 'playing' && (exclude == undefined || exclude.indexOf(a) == -1)) { a.pause(); audiosPaused.push(a); } } },
  "getPanoramaOverlayByName": function(panorama, name){  var overlays = this.getOverlays(panorama); for(var i = 0, count = overlays.length; i<count; ++i){ var overlay = overlays[i]; var data = overlay.get('data'); if(data != undefined && data.label == name){ return overlay; } } return undefined; },
  "showPopupImage": function(image, toggleImage, customWidth, customHeight, showEffect, hideEffect, closeButtonProperties, autoCloseMilliSeconds, audio, stopBackgroundAudio, loadedCallback, hideCallback){  var self = this; var closed = false; var playerClickFunction = function() { zoomImage.unbind('loaded', loadedFunction, self); hideFunction(); }; var clearAutoClose = function(){ zoomImage.unbind('click', clearAutoClose, this); if(timeoutID != undefined){ clearTimeout(timeoutID); } }; var resizeFunction = function(){ setTimeout(setCloseButtonPosition, 0); }; var loadedFunction = function(){ self.unbind('click', playerClickFunction, self); veil.set('visible', true); setCloseButtonPosition(); closeButton.set('visible', true); zoomImage.unbind('loaded', loadedFunction, this); zoomImage.bind('userInteractionStart', userInteractionStartFunction, this); zoomImage.bind('userInteractionEnd', userInteractionEndFunction, this); zoomImage.bind('resize', resizeFunction, this); timeoutID = setTimeout(timeoutFunction, 200); }; var timeoutFunction = function(){ timeoutID = undefined; if(autoCloseMilliSeconds){ var autoCloseFunction = function(){ hideFunction(); }; zoomImage.bind('click', clearAutoClose, this); timeoutID = setTimeout(autoCloseFunction, autoCloseMilliSeconds); } zoomImage.bind('backgroundClick', hideFunction, this); if(toggleImage) { zoomImage.bind('click', toggleFunction, this); zoomImage.set('imageCursor', 'hand'); } closeButton.bind('click', hideFunction, this); if(loadedCallback) loadedCallback(); }; var hideFunction = function() { self.MainViewer.set('toolTipEnabled', true); closed = true; if(timeoutID) clearTimeout(timeoutID); if (timeoutUserInteractionID) clearTimeout(timeoutUserInteractionID); if(autoCloseMilliSeconds) clearAutoClose(); if(hideCallback) hideCallback(); zoomImage.set('visible', false); if(hideEffect && hideEffect.get('duration') > 0){ hideEffect.bind('end', endEffectFunction, this); } else{ zoomImage.set('image', null); } closeButton.set('visible', false); veil.set('visible', false); self.unbind('click', playerClickFunction, self); zoomImage.unbind('backgroundClick', hideFunction, this); zoomImage.unbind('userInteractionStart', userInteractionStartFunction, this); zoomImage.unbind('userInteractionEnd', userInteractionEndFunction, this, true); zoomImage.unbind('resize', resizeFunction, this); if(toggleImage) { zoomImage.unbind('click', toggleFunction, this); zoomImage.set('cursor', 'default'); } closeButton.unbind('click', hideFunction, this); self.resumePlayers(playersPaused, audio == null || stopBackgroundAudio); if(audio){ if(stopBackgroundAudio){ self.resumeGlobalAudios(); } self.stopGlobalAudio(audio); } }; var endEffectFunction = function() { zoomImage.set('image', null); hideEffect.unbind('end', endEffectFunction, this); }; var toggleFunction = function() { zoomImage.set('image', isToggleVisible() ? image : toggleImage); }; var isToggleVisible = function() { return zoomImage.get('image') == toggleImage; }; var setCloseButtonPosition = function() { var right = zoomImage.get('actualWidth') - zoomImage.get('imageLeft') - zoomImage.get('imageWidth') + 10; var top = zoomImage.get('imageTop') + 10; if(right < 10) right = 10; if(top < 10) top = 10; closeButton.set('right', right); closeButton.set('top', top); }; var userInteractionStartFunction = function() { if(timeoutUserInteractionID){ clearTimeout(timeoutUserInteractionID); timeoutUserInteractionID = undefined; } else{ closeButton.set('visible', false); } }; var userInteractionEndFunction = function() { if(!closed){ timeoutUserInteractionID = setTimeout(userInteractionTimeoutFunction, 300); } }; var userInteractionTimeoutFunction = function() { timeoutUserInteractionID = undefined; closeButton.set('visible', true); setCloseButtonPosition(); }; this.MainViewer.set('toolTipEnabled', false); var veil = this.veilPopupPanorama; var zoomImage = this.zoomImagePopupPanorama; var closeButton = this.closeButtonPopupPanorama; if(closeButtonProperties){ for(var key in closeButtonProperties){ closeButton.set(key, closeButtonProperties[key]); } } var playersPaused = this.pauseCurrentPlayers(audio == null || !stopBackgroundAudio); if(audio){ if(stopBackgroundAudio){ this.pauseGlobalAudios(); } this.playGlobalAudio(audio); } var timeoutID = undefined; var timeoutUserInteractionID = undefined; zoomImage.bind('loaded', loadedFunction, this); setTimeout(function(){ self.bind('click', playerClickFunction, self, false); }, 0); zoomImage.set('image', image); zoomImage.set('customWidth', customWidth); zoomImage.set('customHeight', customHeight); zoomImage.set('showEffect', showEffect); zoomImage.set('hideEffect', hideEffect); zoomImage.set('visible', true); return zoomImage; },
  "openLink": function(url, name){  if(url == location.href) { return; } var isElectron = (window && window.process && window.process.versions && window.process.versions['electron']) || (navigator && navigator.userAgent && navigator.userAgent.indexOf('Electron') >= 0); if (name == '_blank' && isElectron) { if (url.startsWith('/')) { var r = window.location.href.split('/'); r.pop(); url = r.join('/') + url; } var extension = url.split('.').pop().toLowerCase(); if(extension != 'pdf' || url.startsWith('file://')) { var shell = window.require('electron').shell; shell.openExternal(url); } else { window.open(url, name); } } else if(isElectron && (name == '_top' || name == '_self')) { window.location = url; } else { var newWindow = window.open(url, name); newWindow.focus(); } }
 },
 "scrollBarColor": "#000000",
 "data": {
  "name": "Player436"
 },
 "mouseWheelEnabled": true,
 "shadow": false,
 "downloadEnabled": true,
 "defaultVRPointer": "laser"
};

    
    function HistoryData(playList) {
        this.playList = playList;
        this.list = [];
        this.pointer = -1;
    }

    HistoryData.prototype.add = function(index){
        if(this.pointer < this.list.length && this.list[this.pointer] == index) {
            return;
        }
        ++this.pointer;
        this.list.splice(this.pointer, this.list.length - this.pointer, index);
    };

    HistoryData.prototype.back = function(){
        if(!this.canBack()) return;
        this.playList.set('selectedIndex', this.list[--this.pointer]);
    };

    HistoryData.prototype.forward = function(){
        if(!this.canForward()) return;
        this.playList.set('selectedIndex', this.list[++this.pointer]);
    };

    HistoryData.prototype.canBack = function(){
        return this.pointer > 0;
    };

    HistoryData.prototype.canForward = function(){
        return this.pointer >= 0 && this.pointer < this.list.length-1;
    };
    //

    if(script.data == undefined)
        script.data = {};
    script.data["history"] = {};    //playListID -> HistoryData

    TDV.PlayerAPI.defineScript(script);
})();
