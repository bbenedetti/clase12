$( document ). ready( function(){

  let counter = 0;
  let counter_2 = 0;

  let scene = new THREE.Scene();
  let camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 );
  let renderer = new THREE.WebGLRenderer();
  renderer.setSize( window.innerWidth, window.innerHeight );
  $( "body" ).append( renderer.domElement );

  scene.add( camera );
  camera.position.z = 6;

  var light = new THREE.PointLight( 0xffffff, 1, 100 );
  light.position.set( 0, 0, camera.position.z );
  scene.add( light );

  let width = 5;
  let height = 5;
  let depth = 5;

  let malla = new THREE.Object3D();
  scene.add(malla);
  for( let i = 0; i < width; i++ ){
    for( let j = 0; j < height; j++ ){
      for( let k = 0; k < depth; k++ ){
       let geometry = new THREE.IcosahedronGeometry( 0.3, 0 );
       let material = new THREE.MeshLambertMaterial({ color: 0x0000FF });
       let nodo = new THREE.Mesh( geometry, material );
       geometry.computeFlatVertexNormals();
       nodo.position.x = -(width/2) + i;
       nodo.position.y = -(height/2) + j;
       nodo.position.z = -(depth/2) + k;
       malla.add( nodo );
     }
    }
  }

  console.log(malla.children [10].material);

  function animate(){
      requestAnimationFrame( animate );
      renderer.render( scene, camera );

      malla.children[counter].material.color.g = 1.0;

      if ( counter > 0){
        malla.children[counter - 1].material.color.g = 0.0;
      }

      if (counter ==  malla.children.length - 1 ){
        malla.children[counter].material.color.g = 0.0;
      }

      counter++;

      if( counter > malla.children.length - 1){
        counter = 0;
      }


      malla.rotation.y += 0.001;
    }
    animate();

    $(document).keyup(function(e){
      if(e.key == "ArrowRight" && counter_2 <= 0 && counter_2 <= ( malla.children.lenght-1)){
        counter_2++
      }


    if(e.key == "ArrowLeft" && counter_2 > 0){
        counter_2--;
      }

      for(let i = 0; i< malla.children.length; i++){
        malla.children[counter_2].scale.y = 1;
        malla.children[counter_2].scale.y = 1;
        malla.children[counter_2].scale.z = 1;
        malla.children[counter_2].verticesNeedUpdate;
      }
      malla.children[counter_2].scale.y = 2.5;
      malla.children[counter_2].scale.y = 2.5;
      malla.children[counter_2].scale.z = 2.5;
      malla.children[counter_2].verticesNeedUpdate;
    });
})
