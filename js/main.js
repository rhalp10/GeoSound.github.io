var container, camera, scene, renderer;

var controls;
var objects = [];
var SpotLight1;
var helper;
var helper2;
var directionalLight2;
var light;
var pointLightHelper;
var mesh = [];
var speed = [];
var SpotLight2;
var w = 1.5;
var clock = new THREE.Clock();
var delta = clock.getElapsedTime();

var a = new THREE.Object3D();

speed.push(Math.random()/12, Math.random()/12,Math.random()/12,Math.random()/12,Math.random()/12,Math.random()/12,Math.random()/12,Math.random()/12,Math.random()/12);

function setLights(){
	SpotLight1 = new THREE.SpotLight( 'rgb(255,255,255)', 0.35 );
	SpotLight1.position.set( 100,240,30 );
	SpotLight1.target.position.set( 100,-80,-30);
	SpotLight1.castShadow = true;
	helper = new THREE.CameraHelper( SpotLight1.shadow.camera );
	SpotLight1.shadow.camera.near = 1;
	SpotLight1.shadow.camera.right     =  5;
	SpotLight1.shadow.camera.left     = -10;
	SpotLight1.shadow.camera.top      =  2;
	SpotLight1.shadow.camera.bottom   = -10;
	SpotLight1.shadow.bias = 0.00001;
	SpotLight1.shadow.mapSize.width = 2048;
	SpotLight1.shadow.mapSize.height = 2048;

	SpotLight2 = new THREE.SpotLight( 'rgb(255,255,255)', 0.35 );
	SpotLight2.position.set( 420,200,30 );
	SpotLight2.target.position.set( 420,-20,-30);
	SpotLight2.castShadow = true;
	helper2 = new THREE.CameraHelper( SpotLight2.shadow.camera );
	SpotLight2.shadow.camera.near = 1;
	SpotLight2.shadow.camera.right     =  5;
	SpotLight2.shadow.camera.left     = -10;
	SpotLight2.shadow.camera.top      =  2;
	SpotLight2.shadow.camera.bottom   = -10;
	SpotLight2.shadow.bias = 0.00001;
	SpotLight2.shadow.mapSize.width = 2048;
	SpotLight2.shadow.mapSize.height = 2048;



	directionalLight = new THREE.DirectionalLight( 'rgb(255,255,255)', 0.75 );

	pointLight1 = new THREE.PointLight( 0xe1223d, 1.2, 100 );
	pointLight1.position.set( 0, 40, 60 );

	pointLight2 = new THREE.PointLight( 0xe1223d, 1.2, 100 );
	pointLight2.position.set( 200, 50, 60 );

	pointLight3 = new THREE.PointLight( 0xe1223d, 1.2, 100 );
	pointLight3.position.set( 380, 0, 60 );

	pointLight4 = new THREE.PointLight( 0xe1223d, 1.2, 100 );
	pointLight4.position.set( 520, -60, 60 );

	pointLightHelper = new THREE.PointLightHelper( pointLight1, 1 );
	pointLightHelper2 = new THREE.PointLightHelper( pointLight4, 1 );
}



var collidableMeshList = [];


var CylinderGeo1 = new THREE.CylinderGeometry(0.5,0.5,80);

var mat = new THREE.MeshLambertMaterial({color: 0x9e8784});


var cylinderMat = new THREE.MeshBasicMaterial({color: 0xa65c68});
var cylinder1 = new THREE.Mesh(CylinderGeo1, cylinderMat);
cylinder1.position.x = -40;
cylinder1.position.y = 30;

var CylinderGeo2 = new THREE.CylinderGeometry(0.5,0.5,80);
var cylinder2 = new THREE.Mesh(CylinderGeo1, cylinderMat);
cylinder2.position.x = 140;
cylinder2.position.y = -30;

var CylinderGeo3 = new THREE.CylinderGeometry(0.5,0.5,80);
var cylinder3 = new THREE.Mesh(CylinderGeo3, cylinderMat);
cylinder3.position.x = 320;
cylinder3.position.y = -90;

var CylinderGeo4 = new THREE.CylinderGeometry(0.5,0.5,80);
var cylinder4 = new THREE.Mesh(CylinderGeo4, cylinderMat);
cylinder4.position.x = 500;
cylinder4.position.y = -150;

var planeMaterial = new THREE.MeshLambertMaterial({color: 0x383a42});
var planeGeo1 = new THREE.PlaneGeometry(80, 80);
var plane1 = new THREE.Mesh(planeGeo1, planeMaterial);
plane1.rotation.x = -Math.PI * 4/12;
plane1.rotation.z = Math.PI * 5/16;
plane1.position.x = -40;
plane1.position.y = -10;
plane1.receiveShadow = true;

var planeGeo2 = new THREE.PlaneGeometry(80, 80);
var plane2 = new THREE.Mesh(planeGeo2, planeMaterial);
plane2.rotation.x = -Math.PI * 4/12;
plane2.rotation.z = Math.PI * 5/16;
plane2.position.x = 140;
plane2.position.y = -70;
plane2.receiveShadow = true;

var planeGeo3 = new THREE.PlaneGeometry(80, 80);
var plane3 = new THREE.Mesh(planeGeo3, planeMaterial);
plane3.rotation.x = -Math.PI * 4/12;
plane3.rotation.z = Math.PI * 5/16;
plane3.position.x = 320;
plane3.position.y = -130;
plane3.receiveShadow = true;

var planeGeo4 = new THREE.PlaneGeometry(80, 80);
var plane4 = new THREE.Mesh(planeGeo4, planeMaterial);
plane4.rotation.x = -Math.PI * 4/12;
plane4.rotation.z = Math.PI * 5/16;
plane4.position.x = 500;
plane4.position.y = -190;
plane4.receiveShadow = true;


var dashMaterial = new THREE.LineDashedMaterial( { color: 0xa65c68, dashSize: 1*Math.PI*10/40, gapSize: 1*Math.PI*10/40, linewidth:4  } ),
circGeom = new THREE.CircleGeometry( 10, 50 );

circGeom.vertices.shift();
circGeom.computeLineDistances();

var circ1 = new THREE.Line( circGeom, dashMaterial);
circ1.position.set(-30,90,0);
circ1.rotation.x = Math.PI/9;
circ1.rotation.y = -Math.PI/7;
circ1.scale.set(6,6,6);

var circ2 = new THREE.Line( circGeom, dashMaterial);
circ2.position.set(145,30,0);
circ2.rotation.x = Math.PI/9;
circ2.rotation.y = -Math.PI/7;
circ2.scale.set(6,6,6);

var circ3 = new THREE.Line( circGeom, dashMaterial);
circ3.position.set(325,-30,0);
circ3.rotation.x = Math.PI/9;
circ3.rotation.y = -Math.PI/7;
circ3.scale.set(6,6,6);

var circ4 = new THREE.Line( circGeom, dashMaterial);
circ4.position.set(505,-90,0);
circ4.rotation.x = Math.PI/9;
circ4.rotation.y = -Math.PI/7;
circ4.scale.set(6,6,6);

var multiGeo1 = new createMultiGeo();
multiGeo1.mesh.scale.set(3,3,3);
multiGeo1.mesh.position.y = -10;

a.add(circ1);
a.add(plane1);
a.add(cylinder1);

function createMergedGeometry(){
		this.geometry = new THREE.Geometry();
		for (var i = 0; i < 5; i++) {
		var cubeGeometry = new THREE.BoxGeometry(
		65*Math.random(),
	    65*Math.random(),
		65*Math.random());
		// var rotation = new THREE.Matrix4().makeRotationX(Math.random() * Math.PI/2);
		var transformation = new THREE.Matrix4().makeTranslation(Math.random()*10, Math.random()*10, Math.random()*10).makeRotationX(Math.random() * Math.PI);
		cubeGeometry.applyMatrix(transformation);
		// cubeGeometry.applyMatrix(rotation);
		this.geometry.merge(cubeGeometry);
  }
}
var mesh1 = new THREE.Mesh(new createMergedGeometry().geometry, mat);
mesh1.position.x = -500;
mesh1.position.y = 80;
mesh1.castShadow = true;
mesh1.receiveShadow = true;

var mesh2 = new THREE.Mesh(new createMergedGeometry().geometry, mat);
mesh2.position.x = -400;
mesh2.position.y = 80;
mesh2.castShadow = true;
mesh2.receiveShadow = true;

var mesh3 = new THREE.Mesh(new createMergedGeometry().geometry, mat);
mesh3.position.x = -300;
mesh3.position.y = 80;
mesh3.castShadow = true;
mesh3.receiveShadow = true;

var mesh4 = new THREE.Mesh(new createMergedGeometry().geometry, mat);
mesh4.position.x = -500;
mesh4.position.y = -20;
mesh4.castShadow = true;
mesh4.receiveShadow = true;

var mesh5 = new THREE.Mesh(new createMergedGeometry().geometry, mat);
mesh5.position.x = -400;
mesh5.position.y = -20;
mesh5.castShadow = true;
mesh5.receiveShadow = true;

var mesh6 = new THREE.Mesh(new createMergedGeometry().geometry, mat);
mesh6.position.x = -300;
mesh6.position.y = -20;
mesh6.castShadow = true;
mesh6.receiveShadow = true;

var mesh7 = new THREE.Mesh(new createMergedGeometry().geometry, mat);
mesh7.position.x = -500;
mesh7.position.y = -120;
mesh7.castShadow = true;
mesh7.receiveShadow = true;

var mesh8 = new THREE.Mesh(new createMergedGeometry().geometry, mat);
mesh8.position.x = -400;
mesh8.position.y = -120;
mesh8.castShadow = true;
mesh8.receiveShadow = true;

var mesh9 = new THREE.Mesh(new createMergedGeometry().geometry, mat);
mesh9.position.x = -300;
mesh9.position.y = -120;
mesh9.castShadow = true;
mesh9.receiveShadow = true;

mesh.push(mesh1,mesh2,mesh3,mesh4,mesh5,mesh6,mesh7,mesh8,mesh9);

//scene lights: AmbientLight
var ambient = new THREE.AmbientLight( 'rgb(255,255,255)', 0.75 );
var mouseX = 0, mouseY = 0;
var windowHalfX = window.innerWidth / 2;
var windowHalfY = window.innerHeight / 2;

var note1;
var slider1 = document.getElementById("slider1");
var slider2 = document.getElementById("slider2");
var slider3 = document.getElementById("slider3");

var synth = new Tone.MonoSynth({
			"portamento" : 0.01,
			"oscillator" : {
				"type" : "square"
			},
			"envelope" : {
				"attack" : 0.005,
				"decay" : 0.2,
				"sustain" : 0.4,
				"release" : 1.4,
			},
			"filterEnvelope" : {
				"attack" : 0.005,
				"decay" : 0.1,
				"sustain" : 0.05,
				"release" : 0.8,
				"baseFrequency" : 300,
				"octaves" : 4
			}
		}).toMaster();



window.addEventListener( 'load', function(){
	var loadingPage = document.getElementById("loadingPage");
	loadingPage.style.display = "none";
});
document.addEventListener( 'mousemove', onDocumentMouseMove, false );


setLights();
init();
animate();

function init() {

	container = document.createElement( 'div' );
	document.body.appendChild( container );

	//camera
	camera = new THREE.OrthographicCamera( window.innerWidth / - 2, window.innerWidth / 2, window.innerHeight / 2, window.innerHeight / - 2, -500, 1000 );
	camera.position.z = 850;
	// camera.position.x = 180;
	// camera.position.y = 180;
	// camera.position.y = 400;
	//scene
	scene = new THREE.Scene();
	// scene.fog = new THREE.FogExp2(0x211f23, 0.9);

	scene.add( SpotLight1 );
	scene.add( SpotLight2 );
	scene.add( directionalLight );
	scene.add( ambient );
	scene.add( pointLight1 );
	scene.add(pointLight2);
	scene.add(pointLight3);
	scene.add(pointLight4);
	// scene.add(SpotLight1.target);
	// scene.add(SpotLight2.target);
	// scene.add( pointLightHelper2 );
	// scene.add(SpotLight2helper);

	scene.add(cylinder1);
	scene.add(cylinder2);
	scene.add(cylinder3);
	scene.add(cylinder4);
	scene.add(circ1);
	scene.add(circ2);
	scene.add(circ3);
	scene.add(circ4);
	// scene.add(mesh1);
	// scene.add(mesh2);
	// scene.add(mesh3);
	// scene.add(mesh4);
	// scene.add(mesh5);
	// scene.add(mesh6);
	// scene.add(mesh7);
	// scene.add(mesh8);
	// scene.add(mesh9);
	for (var i = 0; i < mesh.length; i ++){
		scene.add(mesh[i]);
	}
	for (var i = 0; i < mesh.length; i ++){
		objects.push(mesh[i]);
	}
	scene.add(plane1);
	scene.add(plane2);
	scene.add(plane3);
	scene.add(plane4);
	// scene.add(helper);
	// scene.add(helper2);
	objects.push( multiGeo1.mesh );
	// scene.add(multiGeo1.mesh);

	//render settings
	renderer = new THREE.WebGLRenderer({antialias: true});
	renderer.setPixelRatio( window.devicePixelRatio );
	renderer.setSize( window.innerWidth, window.innerHeight );
	renderer.setClearColor(0x20252d);
	renderer.domElement.style.position = "relative";
	renderer.shadowMap.enabled = true;
	renderer.shadowMap.type = THREE.PCFSoftShadowMap;
	renderer.shadowMapSoft = true;
	renderer.sortObjects = false;
 

container.appendChild( renderer.domElement );


	var dragControls = new THREE.DragControls( objects, camera, renderer.domElement );
		// dragControls.addEventListener( 'dragstart', function ( event ) { controls.enabled = false; } );
		// dragControls.addEventListener( 'dragend', function ( event ) { controls.enabled = true; } );

	for (var i = 0; i < mesh.length; i ++){
		collidableMeshList.push(mesh[i]);
	}

	// controls = new THREE.OrbitControls( camera, renderer.domElement );
	// controls.addEventListener( 'change', render );
	// controls.enableDamping = true;
	// controls.dampingFactor = 0.35;


	//window events
	window.addEventListener( 'resize', onWindowResize, false );

}

function onDocumentMouseMove( event ) {
	mouseX = ( event.clientX - windowHalfX );
	mouseY = ( event.clientY - windowHalfY );
}


function onWindowResize() {
	// windowHalfX = window.innerWidth / 2;
	// windowHalfY = window.innerHeight / 2;
	camera.aspect = window.innerWidth / window.innerHeight;
	camera.updateProjectionMatrix();
	renderer.setSize( window.innerWidth, window.innerHeight );

}


function createMultiGeo(){
	this.mesh = new THREE.Object3D();
	var geom = new THREE.BoxGeometry(18,18,18);
	var mat = new THREE.MeshPhongMaterial({
		color: 0xe5c9af,
		transparent: true
	});
	var nBlocs = 3+Math.floor(Math.random()*3);
	for (var i=0; i<nBlocs; i++ ){
		var m = new THREE.Mesh(geom, mat);
		m.position.z = 5;
		m.rotation.z = Math.random()*Math.PI*2;
		m.rotation.y = Math.random()*Math.PI*2;
		var s = .1 + Math.random()*.8;
		m.scale.set(s,s,s);
		m.castShadow = true;
		m.receiveShadow = true;
		this.mesh.add(m);
		console.log('success!');
	}
}

function animate() {
	requestAnimationFrame( animate );
	render();
	update();
	for(var i = 0; i < mesh.length; i ++){
		mesh[i].rotation.x += slider1.value/1500;
	}
	for (var i = 0; i < mesh.length; i ++){
		mesh[i].rotation.z += slider2.value/2000;
	}
	for (var i = 0; i < mesh.length; i ++){
		mesh[i].rotation.y += speed[i];
	}

	// for (var i = 0; i < mesh.length; i ++){
	// 	mesh[i].scale.set(slider3.value/100, slider3.value/100, slider3.value/100);
	// }

	console.log(slider3.value);
	// if(mesh1.position.x > -10 && mesh1.position.x < 100){
  //   mesh1.position.set(0,-10,0);
	// }
}

function render(){
	// if (camera.position.x !== 0){
	// 	camera.position.x = 0
	// }
	// if (camera.position.y !== 0){
	// 	camera.position.y = 0
	// }

	// if (camera.position.z !== 380){
	// 	camera.position.z = 380
	// }
	camera.lookAt( scene.position );
	renderer.render( scene, camera );

}

function update(){
	// var time = Date.now() * 0.0005;

	// pointLight1.position.x = Math.sin( time * 0.7 ) * 30;
	// pointLight1.position.y = Math.cos( time * 0.5 ) * 40;
	// pointLight1.position.z = Math.cos( time * 0.5 ) * 40;
	// if(pointLight1.position.x>230 || pointLight1.position.x<0){
	// 	w = -w;
	// }
	for (var i = 0; i < mesh.length; i++){
	if((Math.abs(mesh[i].position.y - cylinder1.position.y) < 120 && Math.abs(mesh[i].position.x - cylinder1.position.x) < 60)
		||(Math.abs(mesh[i].position.y - cylinder2.position.y) < 120 && Math.abs(mesh[i].position.x - cylinder2.position.x) < 60)
		||(Math.abs(mesh[i].position.y - cylinder3.position.y) < 120 && Math.abs(mesh[i].position.x - cylinder3.position.x) < 60)
		||(Math.abs(mesh[i].position.y - cylinder4.position.y) < 120 && Math.abs(mesh[i].position.x - cylinder4.position.x) < 60)
	){
		mesh[i].material = new THREE.MeshLambertMaterial({color: 0x737f8e});
	}else{
		mesh[i].material = new THREE.MeshLambertMaterial({color: 0x9e8684});
	}
}


	// mesh.scale.set(slider1.value/80,slider1.value/80,slider1.value/80);
	// multiGeo.mesh.scale.set(slider1.value/80,slider1.value/80,slider1.value/80);
	// cylinder1.position.y = -50 - slider1.value/10;
	var originPoint1 = cylinder1.position.clone();
	for (var vertexIndex1 = 0; vertexIndex1 < cylinder1.geometry.vertices.length; vertexIndex1++)
	{
		var localVertex1 = cylinder1.geometry.vertices[vertexIndex1].clone();
		var globalVertex1 = localVertex1.applyMatrix4( cylinder1.matrix );
		var directionVector1 = globalVertex1.sub( cylinder1.position );

		var ray1 = new THREE.Raycaster( originPoint1, directionVector1.clone().normalize() );
		var collisionResults1 = ray1.intersectObjects( collidableMeshList );
		if ( collisionResults1.length > 0 && collisionResults1[0].distance>3 && collisionResults1[0].distance < directionVector1.length() ){

		// console.log(" Hit ");
		 console.log(collisionResults1[0].distance);
		 switch(Math.floor(collisionResults1[0].distance)){

			case 5:
			note1 = "C2";
			break;
			case 6:
			note1 = "C4";
			break;
			case 7:
			note1 = "C6";
			break;
			case 8:
			note1 = "D2";
			break;
			case 9:
			note1 = "D4";
			break;
			case 10:
			note1 = "D6";
			break;
			case 11:
			note1 = "E2";
			break;
			case 12:
			note1 = "E4";
			break;
			case 13:
			note1 = "E6";
			break;
			case 14:
			note1 = "F2";
			break;
			case 15:
			note1 = "C2";
			break;
			case 16:
			note1 = "C4";
			break;
			case 17:
			note1 = "C4";
			break;
			case 18:
			note1 = "G4";
			break;
			case 19:
			note1 = "G4";
			break;
			case 20:
			note1 = "A4";
			break;
			case 21:
			note1 = "A4";
			break;
			default:
			note1 = "E2";

		}
		// var k = collisionResults[0].distance - directionVector.length();
		// console.log(k);
		// console.log(note1);
		synth.triggerAttack(note1);
	    }else{
	    	synth.triggerRelease();
				// mesh1.material = new THREE.MeshLambertMaterial({color: 0x9e8684});
	    }
	}
}
