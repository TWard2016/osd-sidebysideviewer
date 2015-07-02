
 //7838

    var viewer = OpenSeadragon({
        	id: "openseadragonid",
        	prefixUrl: "/external/openseadragon/images/",
        	tileSources: "data/ChadGospels-224-220-2010.dzi",

    	});

    viewer.addTiledImage({
    tileSource: 'data/ChadGospels-157-220-2003_Reg2010.dzi',
    x: 0,
    y: 0,
    width: 1,
    });

   var distance = 0.1;
   var clipPosition = 0.5;


    function setUp(){
        tiledImage = viewer.world.getItemAt(1);
        originalImage = viewer.world.getItemAt(0);
    }

   
    function clip(){
        setUp();
        var referencePointUno = originalImage.getContentSize();
        var transformedClipPos = clipPosition*referencePointUno.x;
        var newRectangleOne  = new OpenSeadragon.Rect(0, 0, transformedClipPos, referencePointUno.y);
        var newRectangleTwo  = new OpenSeadragon.Rect(transformedClipPos, 0, referencePointUno.x-transformedClipPos, referencePointUno.y);
        originalImage.setClip(newRectangleOne);
        tiledImage.setClip(newRectangleTwo);

    }

    function shiftRight(){
        if(clipPosition<1.0){
            clipPosition+=0.1;
            clip();
        }
    }
    
    function shiftLeft(){
       if(clipPosition>0){
            clipPosition-=0.1;
            clip();
       } 
    }

    


    function up(){
        if(typeof tiledImage==='undefined'){
            setUp();
        }
        tiledImage.setPosition(new OpenSeadragon.Point(tiledImage.getBounds().x, tiledImage.getBounds().y - distance));
    }

    function down(){
        if(typeof tiledImage==='undefined'){
            setUp();
        }
        tiledImage.setPosition(new OpenSeadragon.Point(tiledImage.getBounds().x, tiledImage.getBounds().y + distance));

    }

    function left(){
        if(typeof tiledImage==='undefined'){
            setUp();
        }
        tiledImage.setPosition(new OpenSeadragon.Point(tiledImage.getBounds().x - distance, tiledImage.getBounds().y));
        

    }
   
    function right(){
        if(typeof tiledImage==='undefined'){
            setUp();
        }
        tiledImage.setPosition(new OpenSeadragon.Point(tiledImage.getBounds().x + distance, tiledImage.getBounds().y));

    }
  


