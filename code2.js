gdjs.WarCode = {};
gdjs.WarCode.repeatCount3 = 0;

gdjs.WarCode.repeatIndex3 = 0;

gdjs.WarCode.GDBackgroundObjects1= [];
gdjs.WarCode.GDBackgroundObjects2= [];
gdjs.WarCode.GDBackgroundObjects3= [];
gdjs.WarCode.GDBackgroundObjects4= [];
gdjs.WarCode.GDBackgroundObjects5= [];
gdjs.WarCode.GDCollide_95ExplosionObjects1= [];
gdjs.WarCode.GDCollide_95ExplosionObjects2= [];
gdjs.WarCode.GDCollide_95ExplosionObjects3= [];
gdjs.WarCode.GDCollide_95ExplosionObjects4= [];
gdjs.WarCode.GDCollide_95ExplosionObjects5= [];
gdjs.WarCode.GDEnemyObjects1= [];
gdjs.WarCode.GDEnemyObjects2= [];
gdjs.WarCode.GDEnemyObjects3= [];
gdjs.WarCode.GDEnemyObjects4= [];
gdjs.WarCode.GDEnemyObjects5= [];
gdjs.WarCode.GDCannonObjects1= [];
gdjs.WarCode.GDCannonObjects2= [];
gdjs.WarCode.GDCannonObjects3= [];
gdjs.WarCode.GDCannonObjects4= [];
gdjs.WarCode.GDCannonObjects5= [];
gdjs.WarCode.GDBulletObjects1= [];
gdjs.WarCode.GDBulletObjects2= [];
gdjs.WarCode.GDBulletObjects3= [];
gdjs.WarCode.GDBulletObjects4= [];
gdjs.WarCode.GDBulletObjects5= [];
gdjs.WarCode.GDEnemySpawnLocationObjects1= [];
gdjs.WarCode.GDEnemySpawnLocationObjects2= [];
gdjs.WarCode.GDEnemySpawnLocationObjects3= [];
gdjs.WarCode.GDEnemySpawnLocationObjects4= [];
gdjs.WarCode.GDEnemySpawnLocationObjects5= [];
gdjs.WarCode.GDCrosshairObjects1= [];
gdjs.WarCode.GDCrosshairObjects2= [];
gdjs.WarCode.GDCrosshairObjects3= [];
gdjs.WarCode.GDCrosshairObjects4= [];
gdjs.WarCode.GDCrosshairObjects5= [];
gdjs.WarCode.GDCrosshair_95CloneObjects1= [];
gdjs.WarCode.GDCrosshair_95CloneObjects2= [];
gdjs.WarCode.GDCrosshair_95CloneObjects3= [];
gdjs.WarCode.GDCrosshair_95CloneObjects4= [];
gdjs.WarCode.GDCrosshair_95CloneObjects5= [];
gdjs.WarCode.GDPOINObjects1= [];
gdjs.WarCode.GDPOINObjects2= [];
gdjs.WarCode.GDPOINObjects3= [];
gdjs.WarCode.GDPOINObjects4= [];
gdjs.WarCode.GDPOINObjects5= [];
gdjs.WarCode.GDCannon_95RefillAnimObjects1= [];
gdjs.WarCode.GDCannon_95RefillAnimObjects2= [];
gdjs.WarCode.GDCannon_95RefillAnimObjects3= [];
gdjs.WarCode.GDCannon_95RefillAnimObjects4= [];
gdjs.WarCode.GDCannon_95RefillAnimObjects5= [];
gdjs.WarCode.GDStarsObjects1= [];
gdjs.WarCode.GDStarsObjects2= [];
gdjs.WarCode.GDStarsObjects3= [];
gdjs.WarCode.GDStarsObjects4= [];
gdjs.WarCode.GDStarsObjects5= [];
gdjs.WarCode.GDAddScoreObjects1= [];
gdjs.WarCode.GDAddScoreObjects2= [];
gdjs.WarCode.GDAddScoreObjects3= [];
gdjs.WarCode.GDAddScoreObjects4= [];
gdjs.WarCode.GDAddScoreObjects5= [];
gdjs.WarCode.GDBtn_95backObjects1= [];
gdjs.WarCode.GDBtn_95backObjects2= [];
gdjs.WarCode.GDBtn_95backObjects3= [];
gdjs.WarCode.GDBtn_95backObjects4= [];
gdjs.WarCode.GDBtn_95backObjects5= [];

gdjs.WarCode.conditionTrue_0 = {val:false};
gdjs.WarCode.condition0IsTrue_0 = {val:false};
gdjs.WarCode.condition1IsTrue_0 = {val:false};
gdjs.WarCode.condition2IsTrue_0 = {val:false};
gdjs.WarCode.condition3IsTrue_0 = {val:false};
gdjs.WarCode.condition4IsTrue_0 = {val:false};
gdjs.WarCode.condition5IsTrue_0 = {val:false};
gdjs.WarCode.conditionTrue_1 = {val:false};
gdjs.WarCode.condition0IsTrue_1 = {val:false};
gdjs.WarCode.condition1IsTrue_1 = {val:false};
gdjs.WarCode.condition2IsTrue_1 = {val:false};
gdjs.WarCode.condition3IsTrue_1 = {val:false};
gdjs.WarCode.condition4IsTrue_1 = {val:false};
gdjs.WarCode.condition5IsTrue_1 = {val:false};


gdjs.WarCode.mapOfGDgdjs_46WarCode_46GDEnemyObjects3Objects = Hashtable.newFrom({"Enemy": gdjs.WarCode.GDEnemyObjects3});
gdjs.WarCode.eventsList0 = function(runtimeScene) {

};gdjs.WarCode.eventsList1 = function(runtimeScene) {

{


gdjs.WarCode.condition0IsTrue_0.val = false;
{
gdjs.WarCode.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
}if (gdjs.WarCode.condition0IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "Timer_Enemy_Spawn");
}}

}


{


{
}

}


{


gdjs.WarCode.repeatCount3 = 1;
for(gdjs.WarCode.repeatIndex3 = 0;gdjs.WarCode.repeatIndex3 < gdjs.WarCode.repeatCount3;++gdjs.WarCode.repeatIndex3) {
gdjs.WarCode.GDEnemyObjects3.length = 0;


gdjs.WarCode.condition0IsTrue_0.val = false;
{
gdjs.WarCode.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.getTimerElapsedTimeInSecondsOrNaN(runtimeScene, "Timer_Enemy_Spawn") > 1;
}if (gdjs.WarCode.condition0IsTrue_0.val)
{
{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "Timer_Enemy_Spawn");
}{gdjs.evtTools.object.createObjectOnScene((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : runtimeScene), gdjs.WarCode.mapOfGDgdjs_46WarCode_46GDEnemyObjects3Objects, gdjs.randomInRange(-(141), 562), gdjs.randomInRange(-(254), 120), "");
}{gdjs.evtTools.sound.playSound(runtimeScene, "454595__breviceps__cartoon-flying-ufo.wav", false, 50, 1);
}}
}

}


{


{
gdjs.copyArray(runtimeScene.getObjects("Enemy"), gdjs.WarCode.GDEnemyObjects2);
{for(var i = 0, len = gdjs.WarCode.GDEnemyObjects2.length ;i < len;++i) {
    gdjs.WarCode.GDEnemyObjects2[i].setSize(83, 85);
}
}}

}


{


{
gdjs.copyArray(runtimeScene.getObjects("Cannon"), gdjs.WarCode.GDCannonObjects1);
gdjs.copyArray(runtimeScene.getObjects("Enemy"), gdjs.WarCode.GDEnemyObjects1);
{for(var i = 0, len = gdjs.WarCode.GDEnemyObjects1.length ;i < len;++i) {
    gdjs.WarCode.GDEnemyObjects1[i].addForceTowardPosition((( gdjs.WarCode.GDCannonObjects1.length === 0 ) ? 0 :gdjs.WarCode.GDCannonObjects1[0].getPointX("")), (( gdjs.WarCode.GDCannonObjects1.length === 0 ) ? 0 :gdjs.WarCode.GDCannonObjects1[0].getPointY("")), 50, 0);
}
}}

}


};gdjs.WarCode.mapOfGDgdjs_46WarCode_46GDBackgroundObjects2Objects = Hashtable.newFrom({"Background": gdjs.WarCode.GDBackgroundObjects2});
gdjs.WarCode.mapOfGDgdjs_46WarCode_46GDBulletObjects2Objects = Hashtable.newFrom({"Bullet": gdjs.WarCode.GDBulletObjects2});
gdjs.WarCode.mapOfGDgdjs_46WarCode_46GDCrosshair_9595CloneObjects2Objects = Hashtable.newFrom({"Crosshair_Clone": gdjs.WarCode.GDCrosshair_95CloneObjects2});
gdjs.WarCode.eventsList2 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("Background"), gdjs.WarCode.GDBackgroundObjects2);

gdjs.WarCode.condition0IsTrue_0.val = false;
gdjs.WarCode.condition1IsTrue_0.val = false;
gdjs.WarCode.condition2IsTrue_0.val = false;
gdjs.WarCode.condition3IsTrue_0.val = false;
gdjs.WarCode.condition4IsTrue_0.val = false;
{
gdjs.WarCode.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.WarCode.mapOfGDgdjs_46WarCode_46GDBackgroundObjects2Objects, runtimeScene, true, false);
}if ( gdjs.WarCode.condition0IsTrue_0.val ) {
{
gdjs.WarCode.condition1IsTrue_0.val = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left");
}if ( gdjs.WarCode.condition1IsTrue_0.val ) {
{
gdjs.WarCode.condition2IsTrue_0.val = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getVariables().get("Bullet_Exists")) == 0;
}if ( gdjs.WarCode.condition2IsTrue_0.val ) {
{
gdjs.WarCode.condition3IsTrue_0.val = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getVariables().get("Reffil_Anim_exist")) == 0;
}if ( gdjs.WarCode.condition3IsTrue_0.val ) {
{
{gdjs.WarCode.conditionTrue_1 = gdjs.WarCode.condition4IsTrue_0;
gdjs.WarCode.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(9956524);
}
}}
}
}
}
if (gdjs.WarCode.condition4IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("Cannon"), gdjs.WarCode.GDCannonObjects2);
gdjs.WarCode.GDBulletObjects2.length = 0;

gdjs.WarCode.GDCrosshair_95CloneObjects2.length = 0;

{gdjs.evtTools.object.createObjectOnScene((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : runtimeScene), gdjs.WarCode.mapOfGDgdjs_46WarCode_46GDBulletObjects2Objects, (( gdjs.WarCode.GDCannonObjects2.length === 0 ) ? 0 :gdjs.WarCode.GDCannonObjects2[0].getPointX("SpawnBullet")), (( gdjs.WarCode.GDCannonObjects2.length === 0 ) ? 0 :gdjs.WarCode.GDCannonObjects2[0].getPointY("SpawnBullet")), "");
}{gdjs.evtTools.object.createObjectOnScene((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : runtimeScene), gdjs.WarCode.mapOfGDgdjs_46WarCode_46GDCrosshair_9595CloneObjects2Objects, gdjs.evtTools.input.getMouseX(runtimeScene, "", 0), gdjs.evtTools.input.getMouseY(runtimeScene, "", 0), "");
}{gdjs.evtTools.sound.playSound(runtimeScene, "155790__deleted-user-1941307__shipboard-railgun.mp3", false, 100, 1);
}{runtimeScene.getVariables().get("Bullet_Exists").setNumber(1);
}{runtimeScene.getVariables().get("Reffil_Anim_exist").setNumber(1);
}}

}


{


{
gdjs.copyArray(runtimeScene.getObjects("Bullet"), gdjs.WarCode.GDBulletObjects1);
gdjs.copyArray(runtimeScene.getObjects("Crosshair_Clone"), gdjs.WarCode.GDCrosshair_95CloneObjects1);
{for(var i = 0, len = gdjs.WarCode.GDBulletObjects1.length ;i < len;++i) {
    gdjs.WarCode.GDBulletObjects1[i].addForceTowardObject((gdjs.WarCode.GDCrosshair_95CloneObjects1.length !== 0 ? gdjs.WarCode.GDCrosshair_95CloneObjects1[0] : null), 600, 0);
}
}}

}


};gdjs.WarCode.eventsList3 = function(runtimeScene) {

{


gdjs.WarCode.condition0IsTrue_0.val = false;
{
gdjs.WarCode.condition0IsTrue_0.val = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getVariables().get("Reffil_Anim_exist")) == 0;
}if (gdjs.WarCode.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("Cannon"), gdjs.WarCode.GDCannonObjects2);
gdjs.copyArray(runtimeScene.getObjects("Cannon_RefillAnim"), gdjs.WarCode.GDCannon_95RefillAnimObjects2);
{for(var i = 0, len = gdjs.WarCode.GDCannon_95RefillAnimObjects2.length ;i < len;++i) {
    gdjs.WarCode.GDCannon_95RefillAnimObjects2[i].getBehavior("Tween").addObjectHeightTween("Refill", 131, "easeInQuad", 50, false);
}
}{for(var i = 0, len = gdjs.WarCode.GDCannonObjects2.length ;i < len;++i) {
    gdjs.WarCode.GDCannonObjects2[i].getBehavior("Tween").addObjectHeightTween("cannon_Reload", 202, "easeInQuad", 50, false);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Cannon_RefillAnim"), gdjs.WarCode.GDCannon_95RefillAnimObjects2);

gdjs.WarCode.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.WarCode.GDCannon_95RefillAnimObjects2.length;i<l;++i) {
    if ( gdjs.WarCode.GDCannon_95RefillAnimObjects2[i].getHeight() > 90 ) {
        gdjs.WarCode.condition0IsTrue_0.val = true;
        gdjs.WarCode.GDCannon_95RefillAnimObjects2[k] = gdjs.WarCode.GDCannon_95RefillAnimObjects2[i];
        ++k;
    }
}
gdjs.WarCode.GDCannon_95RefillAnimObjects2.length = k;}if (gdjs.WarCode.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("Cannon"), gdjs.WarCode.GDCannonObjects2);
{for(var i = 0, len = gdjs.WarCode.GDCannonObjects2.length ;i < len;++i) {
    gdjs.WarCode.GDCannonObjects2[i].setAnimation(1);
}
}}

}


{


gdjs.WarCode.condition0IsTrue_0.val = false;
{
gdjs.WarCode.condition0IsTrue_0.val = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getVariables().get("Reffil_Anim_exist")) == 1;
}if (gdjs.WarCode.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("Cannon"), gdjs.WarCode.GDCannonObjects2);
gdjs.copyArray(runtimeScene.getObjects("Cannon_RefillAnim"), gdjs.WarCode.GDCannon_95RefillAnimObjects2);
{for(var i = 0, len = gdjs.WarCode.GDCannon_95RefillAnimObjects2.length ;i < len;++i) {
    gdjs.WarCode.GDCannon_95RefillAnimObjects2[i].getBehavior("Tween").addObjectHeightTween("Refill", 0, "easeInQuad", 40, false);
}
}{for(var i = 0, len = gdjs.WarCode.GDCannonObjects2.length ;i < len;++i) {
    gdjs.WarCode.GDCannonObjects2[i].getBehavior("Tween").addObjectHeightTween("cannon_Reload", 177, "easeInQuad", 50, false);
}
}{for(var i = 0, len = gdjs.WarCode.GDCannonObjects2.length ;i < len;++i) {
    gdjs.WarCode.GDCannonObjects2[i].setAnimation(0);
}
}}

}


{


{
}

}


};gdjs.WarCode.mapOfGDgdjs_46WarCode_46GDBulletObjects2Objects = Hashtable.newFrom({"Bullet": gdjs.WarCode.GDBulletObjects2});
gdjs.WarCode.mapOfGDgdjs_46WarCode_46GDEnemyObjects2Objects = Hashtable.newFrom({"Enemy": gdjs.WarCode.GDEnemyObjects2});
gdjs.WarCode.mapOfGDgdjs_46WarCode_46GDCollide_9595ExplosionObjects2Objects = Hashtable.newFrom({"Collide_Explosion": gdjs.WarCode.GDCollide_95ExplosionObjects2});
gdjs.WarCode.mapOfGDgdjs_46WarCode_46GDAddScoreObjects2Objects = Hashtable.newFrom({"AddScore": gdjs.WarCode.GDAddScoreObjects2});
gdjs.WarCode.eventsList4 = function(runtimeScene) {

{


gdjs.WarCode.condition0IsTrue_0.val = false;
{
{gdjs.WarCode.conditionTrue_1 = gdjs.WarCode.condition0IsTrue_0;
gdjs.WarCode.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(9970828);
}
}if (gdjs.WarCode.condition0IsTrue_0.val) {
{runtimeScene.getVariables().get("Score").add(1);
}}

}


};gdjs.WarCode.mapOfGDgdjs_46WarCode_46GDBulletObjects2Objects = Hashtable.newFrom({"Bullet": gdjs.WarCode.GDBulletObjects2});
gdjs.WarCode.mapOfGDgdjs_46WarCode_46GDCrosshair_9595CloneObjects2Objects = Hashtable.newFrom({"Crosshair_Clone": gdjs.WarCode.GDCrosshair_95CloneObjects2});
gdjs.WarCode.mapOfGDgdjs_46WarCode_46GDEnemyObjects1Objects = Hashtable.newFrom({"Enemy": gdjs.WarCode.GDEnemyObjects1});
gdjs.WarCode.mapOfGDgdjs_46WarCode_46GDCannonObjects1Objects = Hashtable.newFrom({"Cannon": gdjs.WarCode.GDCannonObjects1});
gdjs.WarCode.eventsList5 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("Bullet"), gdjs.WarCode.GDBulletObjects2);
gdjs.copyArray(runtimeScene.getObjects("Enemy"), gdjs.WarCode.GDEnemyObjects2);

gdjs.WarCode.condition0IsTrue_0.val = false;
{
gdjs.WarCode.condition0IsTrue_0.val = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.WarCode.mapOfGDgdjs_46WarCode_46GDBulletObjects2Objects, gdjs.WarCode.mapOfGDgdjs_46WarCode_46GDEnemyObjects2Objects, false, runtimeScene, false);
}if (gdjs.WarCode.condition0IsTrue_0.val) {
/* Reuse gdjs.WarCode.GDBulletObjects2 */
gdjs.copyArray(runtimeScene.getObjects("Crosshair_Clone"), gdjs.WarCode.GDCrosshair_95CloneObjects2);
/* Reuse gdjs.WarCode.GDEnemyObjects2 */
gdjs.WarCode.GDAddScoreObjects2.length = 0;

gdjs.WarCode.GDCollide_95ExplosionObjects2.length = 0;

{for(var i = 0, len = gdjs.WarCode.GDEnemyObjects2.length ;i < len;++i) {
    gdjs.WarCode.GDEnemyObjects2[i].deleteFromScene(runtimeScene);
}
}{for(var i = 0, len = gdjs.WarCode.GDBulletObjects2.length ;i < len;++i) {
    gdjs.WarCode.GDBulletObjects2[i].deleteFromScene(runtimeScene);
}
}{for(var i = 0, len = gdjs.WarCode.GDCrosshair_95CloneObjects2.length ;i < len;++i) {
    gdjs.WarCode.GDCrosshair_95CloneObjects2[i].deleteFromScene(runtimeScene);
}
}{runtimeScene.getVariables().get("Bullet_Exists").setNumber(0);
}{gdjs.evtTools.sound.playSound(runtimeScene, "587183__derplayer__explosion-03.wav", false, 100, 1);
}{runtimeScene.getVariables().get("Reffil_Anim_exist").setNumber(0);
}{gdjs.deviceVibration.startVibration(140);
}{gdjs.evtTools.object.createObjectOnScene((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : runtimeScene), gdjs.WarCode.mapOfGDgdjs_46WarCode_46GDCollide_9595ExplosionObjects2Objects, (( gdjs.WarCode.GDEnemyObjects2.length === 0 ) ? 0 :gdjs.WarCode.GDEnemyObjects2[0].getPointX("")), (( gdjs.WarCode.GDEnemyObjects2.length === 0 ) ? 0 :gdjs.WarCode.GDEnemyObjects2[0].getPointY("")), "");
}{gdjs.evtTools.object.createObjectOnScene((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : runtimeScene), gdjs.WarCode.mapOfGDgdjs_46WarCode_46GDAddScoreObjects2Objects, (( gdjs.WarCode.GDEnemyObjects2.length === 0 ) ? 0 :gdjs.WarCode.GDEnemyObjects2[0].getPointX("")), (( gdjs.WarCode.GDEnemyObjects2.length === 0 ) ? 0 :gdjs.WarCode.GDEnemyObjects2[0].getPointY("")), "");
}{for(var i = 0, len = gdjs.WarCode.GDAddScoreObjects2.length ;i < len;++i) {
    gdjs.WarCode.GDAddScoreObjects2[i].getBehavior("Tween").addObjectPositionYTween("AddScore_Move_up", (( gdjs.WarCode.GDEnemyObjects2.length === 0 ) ? 0 :gdjs.WarCode.GDEnemyObjects2[0].getPointY("Score")), "easeInQuad", 1000, true);
}
}
{ //Subevents
gdjs.WarCode.eventsList4(runtimeScene);} //End of subevents
}

}


{

gdjs.copyArray(runtimeScene.getObjects("Bullet"), gdjs.WarCode.GDBulletObjects2);
gdjs.copyArray(runtimeScene.getObjects("Crosshair_Clone"), gdjs.WarCode.GDCrosshair_95CloneObjects2);

gdjs.WarCode.condition0IsTrue_0.val = false;
{
gdjs.WarCode.condition0IsTrue_0.val = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.WarCode.mapOfGDgdjs_46WarCode_46GDBulletObjects2Objects, gdjs.WarCode.mapOfGDgdjs_46WarCode_46GDCrosshair_9595CloneObjects2Objects, false, runtimeScene, false);
}if (gdjs.WarCode.condition0IsTrue_0.val) {
/* Reuse gdjs.WarCode.GDBulletObjects2 */
/* Reuse gdjs.WarCode.GDCrosshair_95CloneObjects2 */
{for(var i = 0, len = gdjs.WarCode.GDCrosshair_95CloneObjects2.length ;i < len;++i) {
    gdjs.WarCode.GDCrosshair_95CloneObjects2[i].deleteFromScene(runtimeScene);
}
}{for(var i = 0, len = gdjs.WarCode.GDBulletObjects2.length ;i < len;++i) {
    gdjs.WarCode.GDBulletObjects2[i].deleteFromScene(runtimeScene);
}
}{runtimeScene.getVariables().get("Bullet_Exists").setNumber(0);
}{runtimeScene.getVariables().get("Reffil_Anim_exist").setNumber(0);
}}

}


{


{
gdjs.copyArray(runtimeScene.getObjects("POIN"), gdjs.WarCode.GDPOINObjects2);
{for(var i = 0, len = gdjs.WarCode.GDPOINObjects2.length ;i < len;++i) {
    gdjs.WarCode.GDPOINObjects2[i].setString(gdjs.evtTools.variable.getVariableString(runtimeScene.getVariables().get("Score")));
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Cannon"), gdjs.WarCode.GDCannonObjects1);
gdjs.copyArray(runtimeScene.getObjects("Enemy"), gdjs.WarCode.GDEnemyObjects1);

gdjs.WarCode.condition0IsTrue_0.val = false;
{
gdjs.WarCode.condition0IsTrue_0.val = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.WarCode.mapOfGDgdjs_46WarCode_46GDEnemyObjects1Objects, gdjs.WarCode.mapOfGDgdjs_46WarCode_46GDCannonObjects1Objects, false, runtimeScene, false);
}if (gdjs.WarCode.condition0IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "MainGame", false);
}}

}


};gdjs.WarCode.eventsList6 = function(runtimeScene) {

{



}


{


{
{runtimeScene.getVariables().get("shakeDistance").setNumber(10);
}{runtimeScene.getVariables().get("shakeSpeed").setNumber(0.05);
}{runtimeScene.getVariables().get("shakeDuration").setNumber(0.5);
}{runtimeScene.getVariables().get("shakeCam").setNumber(0);
}}

}


};gdjs.WarCode.eventsList7 = function(runtimeScene) {

{



}


{


{
{runtimeScene.getVariables().get("shakeDirection").setString("both");
}}

}


{



}


{


{
{runtimeScene.getVariables().get("camInitX").setNumber(gdjs.evtTools.camera.getCameraX(runtimeScene, "", 0));
}{runtimeScene.getVariables().get("camInitY").setNumber(gdjs.evtTools.camera.getCameraY(runtimeScene, "", 0));
}}

}


};gdjs.WarCode.eventsList8 = function(runtimeScene) {

{


gdjs.WarCode.condition0IsTrue_0.val = false;
gdjs.WarCode.condition1IsTrue_0.val = false;
{
gdjs.WarCode.condition0IsTrue_0.val = gdjs.evtTools.camera.getCameraY(runtimeScene, "", 0) < gdjs.evtTools.variable.getVariableNumber(runtimeScene.getVariables().get("camInitY"));
}if ( gdjs.WarCode.condition0IsTrue_0.val ) {
{
gdjs.WarCode.condition1IsTrue_0.val = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getVariables().get("breakY")) == 0;
}}
if (gdjs.WarCode.condition1IsTrue_0.val) {
{gdjs.evtTools.camera.setCameraY(runtimeScene, gdjs.evtTools.camera.getCameraY(runtimeScene, "", 0) + (gdjs.evtTools.variable.getVariableNumber(runtimeScene.getVariables().get("shakeDistance")) * 2), "", 0);
}{runtimeScene.getVariables().get("breakY").setNumber(1);
}}

}


{


gdjs.WarCode.condition0IsTrue_0.val = false;
gdjs.WarCode.condition1IsTrue_0.val = false;
{
gdjs.WarCode.condition0IsTrue_0.val = gdjs.evtTools.camera.getCameraY(runtimeScene, "", 0) > gdjs.evtTools.variable.getVariableNumber(runtimeScene.getVariables().get("camInitY"));
}if ( gdjs.WarCode.condition0IsTrue_0.val ) {
{
gdjs.WarCode.condition1IsTrue_0.val = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getVariables().get("breakY")) == 0;
}}
if (gdjs.WarCode.condition1IsTrue_0.val) {
{gdjs.evtTools.camera.setCameraY(runtimeScene, gdjs.evtTools.camera.getCameraY(runtimeScene, "", 0) - (gdjs.evtTools.variable.getVariableNumber(runtimeScene.getVariables().get("shakeDistance")) * 2), "", 0);
}{runtimeScene.getVariables().get("breakY").setNumber(1);
}}

}


};gdjs.WarCode.eventsList9 = function(runtimeScene) {

{


gdjs.WarCode.condition0IsTrue_0.val = false;
gdjs.WarCode.condition1IsTrue_0.val = false;
{
gdjs.WarCode.condition0IsTrue_0.val = gdjs.evtTools.camera.getCameraX(runtimeScene, "", 0) < gdjs.evtTools.variable.getVariableNumber(runtimeScene.getVariables().get("camInitX"));
}if ( gdjs.WarCode.condition0IsTrue_0.val ) {
{
gdjs.WarCode.condition1IsTrue_0.val = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getVariables().get("breakX")) == 0;
}}
if (gdjs.WarCode.condition1IsTrue_0.val) {
{gdjs.evtTools.camera.setCameraX(runtimeScene, gdjs.evtTools.camera.getCameraX(runtimeScene, "", 0) + (gdjs.evtTools.variable.getVariableNumber(runtimeScene.getVariables().get("shakeDistance")) * 2), "", 0);
}{runtimeScene.getVariables().get("breakX").setNumber(1);
}}

}


{


gdjs.WarCode.condition0IsTrue_0.val = false;
gdjs.WarCode.condition1IsTrue_0.val = false;
{
gdjs.WarCode.condition0IsTrue_0.val = gdjs.evtTools.camera.getCameraX(runtimeScene, "", 0) > gdjs.evtTools.variable.getVariableNumber(runtimeScene.getVariables().get("camInitX"));
}if ( gdjs.WarCode.condition0IsTrue_0.val ) {
{
gdjs.WarCode.condition1IsTrue_0.val = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getVariables().get("breakX")) == 0;
}}
if (gdjs.WarCode.condition1IsTrue_0.val) {
{gdjs.evtTools.camera.setCameraX(runtimeScene, gdjs.evtTools.camera.getCameraX(runtimeScene, "", 0) - (gdjs.evtTools.variable.getVariableNumber(runtimeScene.getVariables().get("shakeDistance")) * 2), "", 0);
}{runtimeScene.getVariables().get("breakX").setNumber(1);
}}

}


};gdjs.WarCode.eventsList10 = function(runtimeScene) {

{


gdjs.WarCode.condition0IsTrue_0.val = false;
{
{gdjs.WarCode.conditionTrue_1 = gdjs.WarCode.condition0IsTrue_0;
gdjs.WarCode.condition0IsTrue_1.val = false;
gdjs.WarCode.condition1IsTrue_1.val = false;
{
gdjs.WarCode.condition0IsTrue_1.val = gdjs.evtTools.variable.getVariableString(runtimeScene.getVariables().get("shakeDirection")) == "both";
if( gdjs.WarCode.condition0IsTrue_1.val ) {
    gdjs.WarCode.conditionTrue_1.val = true;
}
}
{
gdjs.WarCode.condition1IsTrue_1.val = gdjs.evtTools.variable.getVariableString(runtimeScene.getVariables().get("shakeDirection")) == "vertical";
if( gdjs.WarCode.condition1IsTrue_1.val ) {
    gdjs.WarCode.conditionTrue_1.val = true;
}
}
{
}
}
}if (gdjs.WarCode.condition0IsTrue_0.val) {
{runtimeScene.getVariables().get("breakY").setNumber(0);
}
{ //Subevents
gdjs.WarCode.eventsList8(runtimeScene);} //End of subevents
}

}


{



}


{


gdjs.WarCode.condition0IsTrue_0.val = false;
{
{gdjs.WarCode.conditionTrue_1 = gdjs.WarCode.condition0IsTrue_0;
gdjs.WarCode.condition0IsTrue_1.val = false;
gdjs.WarCode.condition1IsTrue_1.val = false;
{
gdjs.WarCode.condition0IsTrue_1.val = gdjs.evtTools.variable.getVariableString(runtimeScene.getVariables().get("shakeDirection")) == "both";
if( gdjs.WarCode.condition0IsTrue_1.val ) {
    gdjs.WarCode.conditionTrue_1.val = true;
}
}
{
gdjs.WarCode.condition1IsTrue_1.val = gdjs.evtTools.variable.getVariableString(runtimeScene.getVariables().get("shakeDirection")) == "horizontal";
if( gdjs.WarCode.condition1IsTrue_1.val ) {
    gdjs.WarCode.conditionTrue_1.val = true;
}
}
{
}
}
}if (gdjs.WarCode.condition0IsTrue_0.val) {
{runtimeScene.getVariables().get("breakX").setNumber(0);
}
{ //Subevents
gdjs.WarCode.eventsList9(runtimeScene);} //End of subevents
}

}


{



}


{


{
{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "shake_speed");
}}

}


};gdjs.WarCode.eventsList11 = function(runtimeScene) {

{



}


{


gdjs.WarCode.condition0IsTrue_0.val = false;
{
gdjs.WarCode.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.timerElapsedTime(runtimeScene, gdjs.evtTools.variable.getVariableNumber(runtimeScene.getVariables().get("shakeSpeed")), "shake_speed");
}if (gdjs.WarCode.condition0IsTrue_0.val) {

{ //Subevents
gdjs.WarCode.eventsList10(runtimeScene);} //End of subevents
}

}


};gdjs.WarCode.eventsList12 = function(runtimeScene) {

{


{
{gdjs.evtTools.camera.setCameraX(runtimeScene, gdjs.evtTools.variable.getVariableNumber(runtimeScene.getVariables().get("camInitX")), "", 0);
}{gdjs.evtTools.camera.setCameraY(runtimeScene, gdjs.evtTools.variable.getVariableNumber(runtimeScene.getVariables().get("camInitY")), "", 0);
}{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "shake_duration");
}{gdjs.evtTools.runtimeScene.pauseTimer(runtimeScene, "shake_duration");
}{runtimeScene.getVariables().get("shakeCam").setNumber(0);
}}

}


};gdjs.WarCode.eventsList13 = function(runtimeScene) {

{



}


{


gdjs.WarCode.condition0IsTrue_0.val = false;
{
{gdjs.WarCode.conditionTrue_1 = gdjs.WarCode.condition0IsTrue_0;
gdjs.WarCode.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(9982012);
}
}if (gdjs.WarCode.condition0IsTrue_0.val) {
{gdjs.evtTools.camera.setCameraX(runtimeScene, gdjs.evtTools.camera.getCameraX(runtimeScene, "", 0) + (gdjs.evtTools.variable.getVariableNumber(runtimeScene.getVariables().get("shakeDistance"))), "", 0);
}{gdjs.evtTools.camera.setCameraY(runtimeScene, gdjs.evtTools.camera.getCameraY(runtimeScene, "", 0) + (gdjs.evtTools.variable.getVariableNumber(runtimeScene.getVariables().get("shakeDistance"))), "", 0);
}{gdjs.evtTools.runtimeScene.unpauseTimer(runtimeScene, "shake_duration");
}}

}


{



}


{


gdjs.WarCode.condition0IsTrue_0.val = false;
{
gdjs.WarCode.condition0IsTrue_0.val = !(gdjs.evtTools.runtimeScene.timerElapsedTime(runtimeScene, gdjs.evtTools.variable.getVariableNumber(runtimeScene.getVariables().get("shakeDuration")), "shake_duration"));
}if (gdjs.WarCode.condition0IsTrue_0.val) {

{ //Subevents
gdjs.WarCode.eventsList11(runtimeScene);} //End of subevents
}

}


{



}


{


gdjs.WarCode.condition0IsTrue_0.val = false;
{
gdjs.WarCode.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.timerElapsedTime(runtimeScene, gdjs.evtTools.variable.getVariableNumber(runtimeScene.getVariables().get("shakeDuration")), "shake_duration");
}if (gdjs.WarCode.condition0IsTrue_0.val) {

{ //Subevents
gdjs.WarCode.eventsList12(runtimeScene);} //End of subevents
}

}


};gdjs.WarCode.eventsList14 = function(runtimeScene) {

{


gdjs.WarCode.condition0IsTrue_0.val = false;
{
gdjs.WarCode.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
}if (gdjs.WarCode.condition0IsTrue_0.val) {

{ //Subevents
gdjs.WarCode.eventsList6(runtimeScene);} //End of subevents
}

}


{



}


{


gdjs.WarCode.condition0IsTrue_0.val = false;
gdjs.WarCode.condition1IsTrue_0.val = false;
{
gdjs.WarCode.condition0IsTrue_0.val = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left");
}if ( gdjs.WarCode.condition0IsTrue_0.val ) {
{
{gdjs.WarCode.conditionTrue_1 = gdjs.WarCode.condition1IsTrue_0;
gdjs.WarCode.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(9978124);
}
}}
if (gdjs.WarCode.condition1IsTrue_0.val) {
{runtimeScene.getVariables().get("shakeCam").setNumber(1);
}
{ //Subevents
gdjs.WarCode.eventsList7(runtimeScene);} //End of subevents
}

}


{



}


{


gdjs.WarCode.condition0IsTrue_0.val = false;
{
gdjs.WarCode.condition0IsTrue_0.val = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getVariables().get("shakeCam")) == 1;
}if (gdjs.WarCode.condition0IsTrue_0.val) {

{ //Subevents
gdjs.WarCode.eventsList13(runtimeScene);} //End of subevents
}

}


};gdjs.WarCode.mapOfGDgdjs_46WarCode_46GDBtn_9595backObjects1Objects = Hashtable.newFrom({"Btn_back": gdjs.WarCode.GDBtn_95backObjects1});
gdjs.WarCode.eventsList15 = function(runtimeScene) {

{


gdjs.WarCode.condition0IsTrue_0.val = false;
{
gdjs.WarCode.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
}if (gdjs.WarCode.condition0IsTrue_0.val) {
{runtimeScene.getVariables().get("Score").setNumber(0);
}{runtimeScene.getVariables().get("Bullet_Exists").setNumber(0);
}{gdjs.evtTools.sound.playMusic(runtimeScene, "war.mp3", true, 80, 1);
}}

}


{


{
gdjs.copyArray(runtimeScene.getObjects("Stars"), gdjs.WarCode.GDStarsObjects1);
{for(var i = 0, len = gdjs.WarCode.GDStarsObjects1.length ;i < len;++i) {
    gdjs.WarCode.GDStarsObjects1[i].rotate(15, runtimeScene);
}
}}

}


{



}


{


{
gdjs.copyArray(runtimeScene.getObjects("Crosshair"), gdjs.WarCode.GDCrosshairObjects1);
{for(var i = 0, len = gdjs.WarCode.GDCrosshairObjects1.length ;i < len;++i) {
    gdjs.WarCode.GDCrosshairObjects1[i].setPosition(gdjs.evtTools.input.getMouseX(runtimeScene, "", 0),gdjs.evtTools.input.getMouseY(runtimeScene, "", 0));
}
}}

}


{


gdjs.WarCode.eventsList1(runtimeScene);
}


{


gdjs.WarCode.eventsList2(runtimeScene);
}


{


gdjs.WarCode.eventsList3(runtimeScene);
}


{


gdjs.WarCode.eventsList5(runtimeScene);
}


{


gdjs.WarCode.eventsList14(runtimeScene);
}


{

gdjs.copyArray(runtimeScene.getObjects("Btn_back"), gdjs.WarCode.GDBtn_95backObjects1);

gdjs.WarCode.condition0IsTrue_0.val = false;
gdjs.WarCode.condition1IsTrue_0.val = false;
gdjs.WarCode.condition2IsTrue_0.val = false;
{
gdjs.WarCode.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.WarCode.mapOfGDgdjs_46WarCode_46GDBtn_9595backObjects1Objects, runtimeScene, true, false);
}if ( gdjs.WarCode.condition0IsTrue_0.val ) {
{
gdjs.WarCode.condition1IsTrue_0.val = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left");
}if ( gdjs.WarCode.condition1IsTrue_0.val ) {
{
{gdjs.WarCode.conditionTrue_1 = gdjs.WarCode.condition2IsTrue_0;
gdjs.WarCode.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(9996476);
}
}}
}
if (gdjs.WarCode.condition2IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "MainGame", false);
}}

}


};

gdjs.WarCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.WarCode.GDBackgroundObjects1.length = 0;
gdjs.WarCode.GDBackgroundObjects2.length = 0;
gdjs.WarCode.GDBackgroundObjects3.length = 0;
gdjs.WarCode.GDBackgroundObjects4.length = 0;
gdjs.WarCode.GDBackgroundObjects5.length = 0;
gdjs.WarCode.GDCollide_95ExplosionObjects1.length = 0;
gdjs.WarCode.GDCollide_95ExplosionObjects2.length = 0;
gdjs.WarCode.GDCollide_95ExplosionObjects3.length = 0;
gdjs.WarCode.GDCollide_95ExplosionObjects4.length = 0;
gdjs.WarCode.GDCollide_95ExplosionObjects5.length = 0;
gdjs.WarCode.GDEnemyObjects1.length = 0;
gdjs.WarCode.GDEnemyObjects2.length = 0;
gdjs.WarCode.GDEnemyObjects3.length = 0;
gdjs.WarCode.GDEnemyObjects4.length = 0;
gdjs.WarCode.GDEnemyObjects5.length = 0;
gdjs.WarCode.GDCannonObjects1.length = 0;
gdjs.WarCode.GDCannonObjects2.length = 0;
gdjs.WarCode.GDCannonObjects3.length = 0;
gdjs.WarCode.GDCannonObjects4.length = 0;
gdjs.WarCode.GDCannonObjects5.length = 0;
gdjs.WarCode.GDBulletObjects1.length = 0;
gdjs.WarCode.GDBulletObjects2.length = 0;
gdjs.WarCode.GDBulletObjects3.length = 0;
gdjs.WarCode.GDBulletObjects4.length = 0;
gdjs.WarCode.GDBulletObjects5.length = 0;
gdjs.WarCode.GDEnemySpawnLocationObjects1.length = 0;
gdjs.WarCode.GDEnemySpawnLocationObjects2.length = 0;
gdjs.WarCode.GDEnemySpawnLocationObjects3.length = 0;
gdjs.WarCode.GDEnemySpawnLocationObjects4.length = 0;
gdjs.WarCode.GDEnemySpawnLocationObjects5.length = 0;
gdjs.WarCode.GDCrosshairObjects1.length = 0;
gdjs.WarCode.GDCrosshairObjects2.length = 0;
gdjs.WarCode.GDCrosshairObjects3.length = 0;
gdjs.WarCode.GDCrosshairObjects4.length = 0;
gdjs.WarCode.GDCrosshairObjects5.length = 0;
gdjs.WarCode.GDCrosshair_95CloneObjects1.length = 0;
gdjs.WarCode.GDCrosshair_95CloneObjects2.length = 0;
gdjs.WarCode.GDCrosshair_95CloneObjects3.length = 0;
gdjs.WarCode.GDCrosshair_95CloneObjects4.length = 0;
gdjs.WarCode.GDCrosshair_95CloneObjects5.length = 0;
gdjs.WarCode.GDPOINObjects1.length = 0;
gdjs.WarCode.GDPOINObjects2.length = 0;
gdjs.WarCode.GDPOINObjects3.length = 0;
gdjs.WarCode.GDPOINObjects4.length = 0;
gdjs.WarCode.GDPOINObjects5.length = 0;
gdjs.WarCode.GDCannon_95RefillAnimObjects1.length = 0;
gdjs.WarCode.GDCannon_95RefillAnimObjects2.length = 0;
gdjs.WarCode.GDCannon_95RefillAnimObjects3.length = 0;
gdjs.WarCode.GDCannon_95RefillAnimObjects4.length = 0;
gdjs.WarCode.GDCannon_95RefillAnimObjects5.length = 0;
gdjs.WarCode.GDStarsObjects1.length = 0;
gdjs.WarCode.GDStarsObjects2.length = 0;
gdjs.WarCode.GDStarsObjects3.length = 0;
gdjs.WarCode.GDStarsObjects4.length = 0;
gdjs.WarCode.GDStarsObjects5.length = 0;
gdjs.WarCode.GDAddScoreObjects1.length = 0;
gdjs.WarCode.GDAddScoreObjects2.length = 0;
gdjs.WarCode.GDAddScoreObjects3.length = 0;
gdjs.WarCode.GDAddScoreObjects4.length = 0;
gdjs.WarCode.GDAddScoreObjects5.length = 0;
gdjs.WarCode.GDBtn_95backObjects1.length = 0;
gdjs.WarCode.GDBtn_95backObjects2.length = 0;
gdjs.WarCode.GDBtn_95backObjects3.length = 0;
gdjs.WarCode.GDBtn_95backObjects4.length = 0;
gdjs.WarCode.GDBtn_95backObjects5.length = 0;

gdjs.WarCode.eventsList15(runtimeScene);
return;

}

gdjs['WarCode'] = gdjs.WarCode;
