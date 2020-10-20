$( document ). ready( function(){

  let counter = 0;


  let scene = new THREE.Scene({ color: 0xfc5353 });
  let camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 );
  let renderer = new THREE.WebGLRenderer();
  renderer.setSize( window.innerWidth, window.innerHeight );
  renderer.setClearColor (0xfc5353, 1);
  $( "body" ).append( renderer.domElement );

  scene.add( camera );
  camera.position.z = 6;

  var light = new THREE.PointLight( 0xffffff, 1, 100 );
  light.position.set( 0, 0, camera.position.z );
  scene.add( light );

  let width = 7;
  let height = 7;
  let depth = 7;

  let malla = new THREE.Object3D();
  scene.add(malla);
  for( let i = 0; i < width; i++ ){
    for( let j = 0; j < height; j++ ){
      for( let k = 0; k < depth; k++ ){
       let geometry = new THREE.BoxGeometry( 0.5, 0.5 );
       let material = new THREE.MeshLambertMaterial({ color: 0xf68523 });
       let nodo = new THREE.Mesh( geometry, material );
       geometry.computeFlatVertexNormals();
       nodo.position.x = -(width/2) + i;
       nodo.position.y = -(height/2) + j;
       nodo.position.z = -(depth/2) + k;
       malla.add( nodo );
     }
    }
  }



  function animate(){
      requestAnimationFrame( animate );
      renderer.render( scene, camera );

      malla.children[counter].material.color.g = 1.0;

      if ( counter > 0){
        malla.children[counter - 1].material.color.g = 0.0;
        malla.children[counter - 1].scale.y = 2;
      }

      if (counter ==  malla.children.length - 1 ){
        malla.children[counter].material.color.g = 0.0;
        malla.children[counter - 1].scale.y = 0.5;
      }

      counter++;

      if( counter > malla.children.length - 1){
        counter = 0;
      }


      malla.rotation.z += 0.001;
      // malla.scale.x = 0.6;

      malla.geometry.verticesNeedUpdate = true;
    }
    
    animate();

    $(document).keyup(function(e){
      console.log(e.key);
    });
})
