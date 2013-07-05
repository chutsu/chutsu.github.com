# WebGL and three.js - 3D graphics in the web browser
- tags: #javascript #three.js #webgl #3d #browser

<iframe src="../demos/three.js_box.html"  width="300" height="300"
scrolling="no" frameborder="0" style="display: block; margin-left: auto;
margin-right: auto;"></iframe>

WebGL is the web version of OpenGL, it allows web browsers to display 3D
graphics just like the one above **using just javascript and html**, and I have
to say it is actually pretty impressive. This is where
[three.js](http://mrdoob.github.com/three.js/) comes in, it is a WebGL
framework so instead of starting from scratch you can now achieve more with
relatively little effort.

Lets take a quick look at three.js, here we are going to **draw a red 3D
wireframe cube rotating**. Just like any html document you tell the browser
where the javascript files live with:

    <script src="/js/three.min.js"></script> 

then in body of the html document define the javascript with the `script` tag

    <body> <script> . . . </script> </body>

now we can define the actual javascript needed to describe the 3D scene. We
have to declare global variables

    var camera; var scene; var renderer; var geometry; var material; var mesh;

then we can set the scene with the following, which creates a new scene,
camera, red cube and renderer:

    function init() {
        camera = new THREE.PerspectiveCamera(
                75, 
                window.innerWidth / window.innerHeight, 
                1, 
                10000);
        camera.position.z = 1000;

        scene = new THREE.Scene();
        geometry = new THREE.CubeGeometry( 200, 200, 200 );
        material = new THREE.MeshBasicMaterial(
                {
                    color: 0xff0000, 
                    wireframe: true 
                });
        mesh = new THREE.Mesh(geometry, material);
        scene.add(mesh);

        renderer = new THREE.CanvasRenderer();
        renderer.setSize( window.innerWidth, window.innerHeight );

        document.body.appendChild( renderer.domElement );
    }

we can also animate the red cube by defining

    function animate() {
        requestAnimationFrame( animate );
        mesh.rotation.x += 0.01;
        mesh.rotation.y += 0.02;
        renderer.render( scene, camera );
    }

after defining the two functions we can call them by

    init();
    animate();

which results in a rotating 3D wireframe red cube in the above.

Check out a full live demo [here](../demos/three.js_box.html)
