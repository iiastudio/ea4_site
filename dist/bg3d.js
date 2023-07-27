/*
IIA studio - Media + Architecture Program
-----------------------------------------
P5js + BabylonJS + Scene Template
- v1 2023.01.09 by chifu
*****************************************
ref. from= https://doc.babylonjs.com/features/starterSceneCode
ended Notion pages = https://www.notion.so/Babylon-Basic-548bca17f43942568b7295d550e26f36
*/

// ***************************************** 宣告 *****************************************
// 設置 babylon engine 畫布
const canvas = document.getElementById("renderCanvas");
const engine = new BABYLON.Engine(canvas, true);

// ***************************************** 建置 GUI *****************************************
// ********* 宣告 *********

var scene, envTex, gl, hl, tempMat;

var shadowGenerator;






// ***************************************** 建置場景 *****************************************
// 將場景指派給 sceneToRender
const createScene = ()=> {

  
  const {
        Scene, Mesh, HemisphericLight, Vector3, Matrix, CustomMaterial, Quaternion, Color3,
        ArcRotateCamera, MeshBuilder, StandardMaterial, VertexBuffer,
    } = BABYLON;  
  
    
    
    // 場景背景
    const scene = new BABYLON.Scene(engine);
    scene.clearColor = new BABYLON.Color3.Black;
  
    // 攝影機
//     const alpha =  Math.PI*3/4;
//     const beta = Math.PI*5/12;
//     const radius = 100;
//     const target = new BABYLON.Vector3(0, 0, 0);

//     const camera = new BABYLON.ArcRotateCamera("Camera", alpha, beta, radius, target, scene);
//     camera.attachControl(canvas, true); 

  
  
    const camera = new ArcRotateCamera('camera', Math.PI / 2, Math.PI / 3.5, 50.7, new Vector3(0, 0, 0), scene);    
    camera.lowerBetaLimit = null;
    camera.upperBetaLimit = null;
    camera.lowerAlphaLimit = null;
    camera.upperAlphaLimit = null;
    camera.allowUpsideDown = true;
    camera.attachControl(canvas, true);
    camera.fov = 1.0;
    camera.minZ = 0.1;
    // camera.wheelPrecision = 150.0;
    camera.useAutoRotationBehavior = true;
    camera.autoRotationBehavior.idleRotationSpeed = 0.19;

    const baseLight = new HemisphericLight('hemiLight', new Vector3(-1, 1, 0), scene);
    baseLight.intensity = 1;
    baseLight.diffuse = new Color3(1, 1, 1);
    baseLight.specular = new Color3(0.25, 0.25, 0.25);
    baseLight.groundColor = new Color3(0.5, 0.5, 0.5);
    // baseLight.groundColor = new Color3(1, 1, 1);
  
  
  
  
  
  
  
  
  
  
    // 設置環境場景
    const envTex = new BABYLON.CubeTexture("https://rawcdn.githack.com/iiastudio/assets/1a85256ff180edaf4d17572d4c22a7c483383df4/skybox_blur.env", scene);
    scene.environmentTexture = envTex;
    scene.createDefaultSkybox(envTex, true)
    // 特效光暈
    // const glowLayer = new BABYLON.GlowLayer('glow',scene)
    // glowLayer.intensity = 1
 
    // 光源
    // const light = new BABYLON.DirectionalLight("light", new BABYLON.Vector3(0.4,-1,0.4));
    // light.position = new BABYLON.Vector3(100, 100, 100);
    // light.intensity=3
  


    // 
    // Helpers
    //

    const tmpVector1 = Vector3.Zero();
    function setDirectionToRef(normal, quaternion) {
        quaternion = quaternion || new Quaternion();

        tmpVector1.set(normal.z, 0, -normal.x).normalize();
        const radians = Math.acos(normal.y);

        quaternion = Quaternion.RotationAxisToRef(tmpVector1, radians, quaternion);

        return quaternion;
    }

    //
    // Main
    //


    // scene.clearColor = new Color3(16 / 255, 22 / 255, 26 / 255);
    // scene.clearColor = new Color3(245 / 255, 248 / 255, 250 / 255);


    const mat = new CustomMaterial('s', scene);
    // mat.diffuseColor = new Color3(40 / 255, 40 / 255, 60 / 255);
    // mat.specularColor = new Color3(1, 1, 1);
    // mat.specularColor = new Color3(0, 0, 0);
    mat.diffuseTexture = new BABYLON.Texture("assets/img/bg3d/tex.jpg", scene);
    mat.freeze();
  
  
    const baseSphere = MeshBuilder.CreateIcoSphere(
        'baseSphere',
        { radius: 30, subdivisions: 24, updatable: false, flat: false },
        scene,
    );
  
  
  
    const sphereMat = new StandardMaterial('mat', scene);
    baseSphere.material = sphereMat;
    sphereMat.diffuseColor = new Color3(0, 0, 0);
    sphereMat.specularColor = new Color3(0, 0, 0);
    // baseSphere.visibility = 0.25;

    //
    // Mesh
    //

    const path = [];
    const maxSegments = 8;
    for (let i = 0; i < maxSegments; i += 1) {
        path.push(new Vector3(0, i / maxSegments, 0));
    }
    const mesh = MeshBuilder.CreateTube('tube', {
        path,
        tessellation: 6,
        radiusFunction: (i) => {
            const r = 1 - (i + 1) / maxSegments;
            const rs = Math.sin((r * Math.PI) / 2);

            return rs * 0.125;
        },
        cap: Mesh.NO_CAP,
        scene,
        updatable: false,
        sideOrientation: Mesh.DEFAULTSIDE,
    });
    mesh.material = mat;
    mesh.freezeWorldMatrix();
    mesh.doNotSyncBoundingInfo = true;

  
    
    //
    // Instances
    //

    const spherePositions = baseSphere.geometry.getVerticesData(VertexBuffer.PositionKind);
    const sphereNormals = baseSphere.geometry.getVerticesData(VertexBuffer.NormalKind);

    const rotation = Quaternion.RotationAxis(new Vector3(0, 0, 1), Math.PI / 2);
    const scaling = new Vector3(1, 1, 1);

    const resultMatrix = new Matrix();

    const total = spherePositions.length / 3;

    const bufferMatrices = new Float32Array(16 * total);
    const bufferIdxes = new Float32Array(total);

    const transition = new Vector3();
    const normal = new Vector3();
    for (let i = 0; i < total; i += 1) {
        transition.x = spherePositions[i * 3 + 0];
        transition.y = spherePositions[i * 3 + 1];
        transition.z = spherePositions[i * 3 + 2];

        scaling.y = 1 + (Math.random() * 0.5 - 0.5) * .5;

        const rx = (Math.random() * 0.5 - 0.5) * 0.5;
        const ry = (Math.random() * 0.5 - 0.5) * 0.5;
        const rz = (Math.random() * 0.5 - 0.5) * 0.5;

        const randomRot = Quaternion.RotationAlphaBetaGamma(rx, ry, rz);
        transition.rotateByQuaternionToRef(randomRot, transition);

        normal.x = sphereNormals[i * 3 + 0];
        normal.y = sphereNormals[i * 3 + 1];
        normal.z = sphereNormals[i * 3 + 2];

        setDirectionToRef(normal, rotation);

        Matrix.ComposeToRef(scaling, rotation, transition, resultMatrix);
        resultMatrix.copyToArray(bufferMatrices, 16 * i);
        bufferIdxes[i] = i;
    }

    mesh.thinInstanceSetBuffer('matrix', bufferMatrices, 16, true);
    mesh.thinInstanceSetBuffer('idx', bufferIdxes, 1, true);

    //
    // Shaders
    //

    mat.AddAttribute('idx');

    mat.Vertex_Definitions(`
varying float vR;
varying float vIdx;
attribute float idx;

#define MOD3 vec3(.1031, .11369, .13787)

vec3 hash33(vec3 p3) {
  p3 = fract(p3 * MOD3);
  p3 += dot(p3, p3.yxz + 19.19);
  return -1.0 + 2.0 * fract(vec3((p3.x + p3.y) * p3.z, (p3.x + p3.z) * p3.y, (p3.y + p3.z) * p3.x));
}

float hash11(float p) {
  p = fract(p * 0.1031);
  p *= p + 33.33;
  p *= p + p;
  return fract(p);
}

float noise(vec3 p) {
  const float K1 = 0.333333333;
  const float K2 = 0.166666667;

  vec3 i = floor(p + (p.x + p.y + p.z) * K1);
  vec3 d0 = p - (i - (i.x + i.y + i.z) * K2);

  vec3 e = step(vec3(0.0), d0 - d0.yzx);
  vec3 i1 = e * (1.0 - e.zxy);
  vec3 i2 = 1.0 - e.zxy * (1.0 - e);

  vec3 d1 = d0 - (i1 - 1.0 * K2);
  vec3 d2 = d0 - (i2 - 2.0 * K2);
  vec3 d3 = d0 - (1.0 - 3.0 * K2);

  vec4 h = max(0.6 - vec4(dot(d0, d0), dot(d1, d1), dot(d2, d2), dot(d3, d3)), 0.0);
  vec4 n = h * h * h * h *
           vec4(dot(d0, hash33(i)), dot(d1, hash33(i + i1)), dot(d2, hash33(i + i2)), dot(d3, hash33(i + 1.0)));

  return dot(vec4(31.316), n);
}
  
  `);
    mat.Vertex_Before_PositionUpdated(`
// ++++++++++++++++++++++++++

float t = 100. + iTime * .75;

vec3 oPos = position;

vR = positionUpdated.y;
vIdx = idx;

// --------------------------

vec4 world1c = world1;

float lp1 = positionUpdated.y * .25 + 15.;
float lp2 = positionUpdated.y * .25 + 1.;

positionUpdated.y *= 3.;

world1c.x += noise(world2.rgb + vec3(-t, 0, 0) + vec3(lp1, 0., 0.)) * (lp2)*.5;
world1c.y += noise(world2.rgb + vec3(0, -t, 0) + vec3(0., lp1, 0.)) * (lp2)*.5;
world1c.z += noise(world2.rgb + vec3(0, 0, -t) + vec3(0., 0., lp1)) * (lp2)*.5;

mat4 finalWorld = mat4(world0, world1c, world2, world3);
finalWorld = world * finalWorld;
vec4 worldPos = finalWorld * vec4(positionUpdated, 1.0);
mat3 normalWorld = mat3(finalWorld);
vNormalW = normalUpdated / vec3(dot(normalWorld[0], normalWorld[0]), dot(normalWorld[1], normalWorld[1]),
                                dot(normalWorld[2], normalWorld[2]));
vNormalW = normalize(normalWorld * vNormalW);

// Comment below
/*
  
  `);
    mat.Fragment_Definitions(`
varying float vR;
varying float vIdx;

float hash11(float p) {
  p = fract(p * 0.1031);
  p *= p + 33.33;
  p *= p + p;
  return fract(p);
}
  
  `);
    mat.Fragment_Custom_Diffuse(`
// vec3 col = vDiffuseColor.rgb * (vR*.005);

float rColFactor = hash11(vIdx * .001);

diffuseColor = vDiffuseColor.rgb * (vR * 1.5) * (.85 + rColFactor * .003);
  
  `);

    mat.Vertex_After_WorldPosComputed('*/');

    //
    // Attributes
    //

    mat.AddUniform('iTime', 'float');

    const initTime = +new Date();
    let time = 0;
    mat.onBind = () => {
        time = (+new Date() - initTime) * 0.001;
        mat.getEffect().setFloat('iTime', time);
    };
  
  
  
  
    return scene;
};

const sceneToRender = createScene(); // 每次重繪執行 sceneToRender

// ***************************************** 更新 *****************************************
// 設置 babylon 更新與渲染
engine.runRenderLoop(()=>{
    sceneToRender.render();
});

// 設置 babylon 拉伸
// Resize
window.addEventListener("resize", ()=> {
    engine.resize();
});