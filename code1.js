gdjs.MainGameCode = {};
gdjs.MainGameCode.GDTIGERObjects1= [];
gdjs.MainGameCode.GDTIGERObjects2= [];
gdjs.MainGameCode.GDTIGERObjects3= [];
gdjs.MainGameCode.GDLogoObjects1= [];
gdjs.MainGameCode.GDLogoObjects2= [];
gdjs.MainGameCode.GDLogoObjects3= [];
gdjs.MainGameCode.GDFoodObjects1= [];
gdjs.MainGameCode.GDFoodObjects2= [];
gdjs.MainGameCode.GDFoodObjects3= [];
gdjs.MainGameCode.GDProgressBarObjects1= [];
gdjs.MainGameCode.GDProgressBarObjects2= [];
gdjs.MainGameCode.GDProgressBarObjects3= [];
gdjs.MainGameCode.GDFood_95QtyObjects1= [];
gdjs.MainGameCode.GDFood_95QtyObjects2= [];
gdjs.MainGameCode.GDFood_95QtyObjects3= [];
gdjs.MainGameCode.GDBtn_95AddFoodObjects1= [];
gdjs.MainGameCode.GDBtn_95AddFoodObjects2= [];
gdjs.MainGameCode.GDBtn_95AddFoodObjects3= [];
gdjs.MainGameCode.GDAdd_95SelectFoodObjects1= [];
gdjs.MainGameCode.GDAdd_95SelectFoodObjects2= [];
gdjs.MainGameCode.GDAdd_95SelectFoodObjects3= [];
gdjs.MainGameCode.GDBackgroundObjects1= [];
gdjs.MainGameCode.GDBackgroundObjects2= [];
gdjs.MainGameCode.GDBackgroundObjects3= [];
gdjs.MainGameCode.GDEndingObjects1= [];
gdjs.MainGameCode.GDEndingObjects2= [];
gdjs.MainGameCode.GDEndingObjects3= [];
gdjs.MainGameCode.GDStartingObjects1= [];
gdjs.MainGameCode.GDStartingObjects2= [];
gdjs.MainGameCode.GDStartingObjects3= [];
gdjs.MainGameCode.GDWatchVideoObjects1= [];
gdjs.MainGameCode.GDWatchVideoObjects2= [];
gdjs.MainGameCode.GDWatchVideoObjects3= [];
gdjs.MainGameCode.GDVideoObjects1= [];
gdjs.MainGameCode.GDVideoObjects2= [];
gdjs.MainGameCode.GDVideoObjects3= [];
gdjs.MainGameCode.GDFood_95StockObjects1= [];
gdjs.MainGameCode.GDFood_95StockObjects2= [];
gdjs.MainGameCode.GDFood_95StockObjects3= [];
gdjs.MainGameCode.GDText_95FoodAddedObjects1= [];
gdjs.MainGameCode.GDText_95FoodAddedObjects2= [];
gdjs.MainGameCode.GDText_95FoodAddedObjects3= [];
gdjs.MainGameCode.GDTesting_95ObjVar_95ButtonObjects1= [];
gdjs.MainGameCode.GDTesting_95ObjVar_95ButtonObjects2= [];
gdjs.MainGameCode.GDTesting_95ObjVar_95ButtonObjects3= [];
gdjs.MainGameCode.GDTimeObjects1= [];
gdjs.MainGameCode.GDTimeObjects2= [];
gdjs.MainGameCode.GDTimeObjects3= [];
gdjs.MainGameCode.GDDecor_95PCObjects1= [];
gdjs.MainGameCode.GDDecor_95PCObjects2= [];
gdjs.MainGameCode.GDDecor_95PCObjects3= [];
gdjs.MainGameCode.GDDecor_95TableObjects1= [];
gdjs.MainGameCode.GDDecor_95TableObjects2= [];
gdjs.MainGameCode.GDDecor_95TableObjects3= [];
gdjs.MainGameCode.GDDecor_95BarObjects1= [];
gdjs.MainGameCode.GDDecor_95BarObjects2= [];
gdjs.MainGameCode.GDDecor_95BarObjects3= [];
gdjs.MainGameCode.GDBtn_95FightObjects1= [];
gdjs.MainGameCode.GDBtn_95FightObjects2= [];
gdjs.MainGameCode.GDBtn_95FightObjects3= [];

gdjs.MainGameCode.conditionTrue_0 = {val:false};
gdjs.MainGameCode.condition0IsTrue_0 = {val:false};
gdjs.MainGameCode.condition1IsTrue_0 = {val:false};
gdjs.MainGameCode.condition2IsTrue_0 = {val:false};
gdjs.MainGameCode.condition3IsTrue_0 = {val:false};
gdjs.MainGameCode.condition4IsTrue_0 = {val:false};
gdjs.MainGameCode.condition5IsTrue_0 = {val:false};
gdjs.MainGameCode.condition6IsTrue_0 = {val:false};
gdjs.MainGameCode.conditionTrue_1 = {val:false};
gdjs.MainGameCode.condition0IsTrue_1 = {val:false};
gdjs.MainGameCode.condition1IsTrue_1 = {val:false};
gdjs.MainGameCode.condition2IsTrue_1 = {val:false};
gdjs.MainGameCode.condition3IsTrue_1 = {val:false};
gdjs.MainGameCode.condition4IsTrue_1 = {val:false};
gdjs.MainGameCode.condition5IsTrue_1 = {val:false};
gdjs.MainGameCode.condition6IsTrue_1 = {val:false};


gdjs.MainGameCode.mapOfGDgdjs_46MainGameCode_46GDAdd_9595SelectFoodObjects2Objects = Hashtable.newFrom({"Add_SelectFood": gdjs.MainGameCode.GDAdd_95SelectFoodObjects2});
gdjs.MainGameCode.mapOfGDgdjs_46MainGameCode_46GDFoodObjects2Objects = Hashtable.newFrom({"Food": gdjs.MainGameCode.GDFoodObjects2});
gdjs.MainGameCode.eventsList0 = function(runtimeScene) {

{


{
}

}


};gdjs.MainGameCode.mapOfGDgdjs_46MainGameCode_46GDFoodObjects2Objects = Hashtable.newFrom({"Food": gdjs.MainGameCode.GDFoodObjects2});
gdjs.MainGameCode.mapOfGDgdjs_46MainGameCode_46GDTIGERObjects2Objects = Hashtable.newFrom({"TIGER": gdjs.MainGameCode.GDTIGERObjects2});
gdjs.MainGameCode.eventsList1 = function(runtimeScene) {

{


gdjs.MainGameCode.condition0IsTrue_0.val = false;
{
{gdjs.MainGameCode.conditionTrue_1 = gdjs.MainGameCode.condition0IsTrue_0;
gdjs.MainGameCode.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(9905884);
}
}if (gdjs.MainGameCode.condition0IsTrue_0.val) {
{gdjs.evtTools.sound.playSound(runtimeScene, "429591__inspectorj__chewing-breadstick-single-d.wav", false, 100, 1);
}}

}


};gdjs.MainGameCode.eventsList2 = function(runtimeScene) {

{


gdjs.MainGameCode.condition0IsTrue_0.val = false;
{
gdjs.MainGameCode.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
}if (gdjs.MainGameCode.condition0IsTrue_0.val) {
{runtimeScene.getVariables().get("Food_Stock").setNumber(5);
}}

}


{


gdjs.MainGameCode.condition0IsTrue_0.val = false;
{
gdjs.MainGameCode.condition0IsTrue_0.val = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getVariables().get("Food_Stock")) == 0;
}if (gdjs.MainGameCode.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("Add_SelectFood"), gdjs.MainGameCode.GDAdd_95SelectFoodObjects2);
{for(var i = 0, len = gdjs.MainGameCode.GDAdd_95SelectFoodObjects2.length ;i < len;++i) {
    gdjs.MainGameCode.GDAdd_95SelectFoodObjects2[i].setAnimation(1);
}
}}

}


{


gdjs.MainGameCode.condition0IsTrue_0.val = false;
{
gdjs.MainGameCode.condition0IsTrue_0.val = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getVariables().get("Food_Stock")) != 0;
}if (gdjs.MainGameCode.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("Add_SelectFood"), gdjs.MainGameCode.GDAdd_95SelectFoodObjects2);
{for(var i = 0, len = gdjs.MainGameCode.GDAdd_95SelectFoodObjects2.length ;i < len;++i) {
    gdjs.MainGameCode.GDAdd_95SelectFoodObjects2[i].setAnimation(0);
}
}}

}


{


{
}

}


{

gdjs.copyArray(runtimeScene.getObjects("Add_SelectFood"), gdjs.MainGameCode.GDAdd_95SelectFoodObjects2);
gdjs.copyArray(runtimeScene.getObjects("Video"), gdjs.MainGameCode.GDVideoObjects2);

gdjs.MainGameCode.condition0IsTrue_0.val = false;
gdjs.MainGameCode.condition1IsTrue_0.val = false;
gdjs.MainGameCode.condition2IsTrue_0.val = false;
gdjs.MainGameCode.condition3IsTrue_0.val = false;
gdjs.MainGameCode.condition4IsTrue_0.val = false;
gdjs.MainGameCode.condition5IsTrue_0.val = false;
{
gdjs.MainGameCode.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.MainGameCode.mapOfGDgdjs_46MainGameCode_46GDAdd_9595SelectFoodObjects2Objects, runtimeScene, true, false);
}if ( gdjs.MainGameCode.condition0IsTrue_0.val ) {
{
gdjs.MainGameCode.condition1IsTrue_0.val = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left");
}if ( gdjs.MainGameCode.condition1IsTrue_0.val ) {
{
gdjs.MainGameCode.condition2IsTrue_0.val = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getVariables().get("Food_Stock")) != 0;
}if ( gdjs.MainGameCode.condition2IsTrue_0.val ) {
{
gdjs.MainGameCode.condition3IsTrue_0.val = gdjs.evtTools.variable.getVariableBoolean(runtimeScene.getVariables().get("Btn_Video_Exists"), false);
}if ( gdjs.MainGameCode.condition3IsTrue_0.val ) {
{
for(var i = 0, k = 0, l = gdjs.MainGameCode.GDVideoObjects2.length;i<l;++i) {
    if ( !(gdjs.MainGameCode.GDVideoObjects2[i].isPlayed()) ) {
        gdjs.MainGameCode.condition4IsTrue_0.val = true;
        gdjs.MainGameCode.GDVideoObjects2[k] = gdjs.MainGameCode.GDVideoObjects2[i];
        ++k;
    }
}
gdjs.MainGameCode.GDVideoObjects2.length = k;}if ( gdjs.MainGameCode.condition4IsTrue_0.val ) {
{
{gdjs.MainGameCode.conditionTrue_1 = gdjs.MainGameCode.condition5IsTrue_0;
gdjs.MainGameCode.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(9899940);
}
}}
}
}
}
}
if (gdjs.MainGameCode.condition5IsTrue_0.val) {
/* Reuse gdjs.MainGameCode.GDAdd_95SelectFoodObjects2 */
gdjs.MainGameCode.GDFoodObjects2.length = 0;

{gdjs.evtTools.object.createObjectOnScene((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : runtimeScene), gdjs.MainGameCode.mapOfGDgdjs_46MainGameCode_46GDFoodObjects2Objects, (( gdjs.MainGameCode.GDAdd_95SelectFoodObjects2.length === 0 ) ? 0 :gdjs.MainGameCode.GDAdd_95SelectFoodObjects2[0].getPointX("")), 0, "");
}{gdjs.evtTools.sound.playSound(runtimeScene, "546079__stavsounds__button-selected.wav", false, 100, 1);
}{for(var i = 0, len = gdjs.MainGameCode.GDFoodObjects2.length ;i < len;++i) {
    gdjs.MainGameCode.GDFoodObjects2[i].setSize(56, 54);
}
}
{ //Subevents
gdjs.MainGameCode.eventsList0(runtimeScene);} //End of subevents
}

}


{


{
gdjs.copyArray(runtimeScene.getObjects("Food"), gdjs.MainGameCode.GDFoodObjects2);
{for(var i = 0, len = gdjs.MainGameCode.GDFoodObjects2.length ;i < len;++i) {
    gdjs.MainGameCode.GDFoodObjects2[i].setPosition(gdjs.evtTools.input.getMouseX(runtimeScene, "", 0),gdjs.evtTools.input.getMouseY(runtimeScene, "", 0));
}
}}

}


{


gdjs.MainGameCode.condition0IsTrue_0.val = false;
{
gdjs.MainGameCode.condition0IsTrue_0.val = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getVariables().get("Food_Qty")) == 0;
}if (gdjs.MainGameCode.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("ProgressBar"), gdjs.MainGameCode.GDProgressBarObjects2);
{for(var i = 0, len = gdjs.MainGameCode.GDProgressBarObjects2.length ;i < len;++i) {
    gdjs.MainGameCode.GDProgressBarObjects2[i].getBehavior("Tween").addObjectWidthTween("Tween_Progress", 0, "easeInQuad", 100, false);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Food"), gdjs.MainGameCode.GDFoodObjects2);
gdjs.copyArray(runtimeScene.getObjects("TIGER"), gdjs.MainGameCode.GDTIGERObjects2);

gdjs.MainGameCode.condition0IsTrue_0.val = false;
gdjs.MainGameCode.condition1IsTrue_0.val = false;
{
gdjs.MainGameCode.condition0IsTrue_0.val = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.MainGameCode.mapOfGDgdjs_46MainGameCode_46GDFoodObjects2Objects, gdjs.MainGameCode.mapOfGDgdjs_46MainGameCode_46GDTIGERObjects2Objects, false, runtimeScene, false);
}if ( gdjs.MainGameCode.condition0IsTrue_0.val ) {
{
gdjs.MainGameCode.condition1IsTrue_0.val = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getVariables().get("Food_Stock")) != 0;
}}
if (gdjs.MainGameCode.condition1IsTrue_0.val) {
/* Reuse gdjs.MainGameCode.GDFoodObjects2 */
gdjs.copyArray(runtimeScene.getObjects("Food_Qty"), gdjs.MainGameCode.GDFood_95QtyObjects2);
gdjs.copyArray(runtimeScene.getObjects("ProgressBar"), gdjs.MainGameCode.GDProgressBarObjects2);
gdjs.copyArray(runtimeScene.getObjects("Starting"), gdjs.MainGameCode.GDStartingObjects2);
{runtimeScene.getVariables().get("Food_Qty").add(1);
}{runtimeScene.getVariables().get("Food_Stock").sub(1);
}{runtimeScene.getVariables().get("Progess").add(3.28);
}{for(var i = 0, len = gdjs.MainGameCode.GDProgressBarObjects2.length ;i < len;++i) {
    gdjs.MainGameCode.GDProgressBarObjects2[i].getBehavior("Tween").addObjectWidthTween("Tween_Progress", gdjs.evtTools.variable.getVariableNumber(runtimeScene.getVariables().get("Progess")), "easeInQuad", 100, false);
}
}{for(var i = 0, len = gdjs.MainGameCode.GDFood_95QtyObjects2.length ;i < len;++i) {
    gdjs.MainGameCode.GDFood_95QtyObjects2[i].setString(gdjs.evtTools.variable.getVariableString(runtimeScene.getVariables().get("Food_Qty")));
}
}{for(var i = 0, len = gdjs.MainGameCode.GDStartingObjects2.length ;i < len;++i) {
    gdjs.MainGameCode.GDStartingObjects2[i].setString(gdjs.evtTools.variable.getVariableString(runtimeScene.getVariables().get("Food_Qty")));
}
}{for(var i = 0, len = gdjs.MainGameCode.GDFoodObjects2.length ;i < len;++i) {
    gdjs.MainGameCode.GDFoodObjects2[i].deleteFromScene(runtimeScene);
}
}
{ //Subevents
gdjs.MainGameCode.eventsList1(runtimeScene);} //End of subevents
}

}


{


{
}

}


{


gdjs.MainGameCode.condition0IsTrue_0.val = false;
{
gdjs.MainGameCode.condition0IsTrue_0.val = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getVariables().get("Food_Qty")) == 100;
}if (gdjs.MainGameCode.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("ProgressBar"), gdjs.MainGameCode.GDProgressBarObjects2);
{for(var i = 0, len = gdjs.MainGameCode.GDProgressBarObjects2.length ;i < len;++i) {
    gdjs.MainGameCode.GDProgressBarObjects2[i].getBehavior("Tween").addObjectWidthTween("Tween_Progress", 328, "easeInQuad", 100, false);
}
}}

}


{


{
gdjs.copyArray(runtimeScene.getObjects("Food_Stock"), gdjs.MainGameCode.GDFood_95StockObjects1);
{for(var i = 0, len = gdjs.MainGameCode.GDFood_95StockObjects1.length ;i < len;++i) {
    gdjs.MainGameCode.GDFood_95StockObjects1[i].setString(gdjs.evtTools.variable.getVariableString(runtimeScene.getVariables().get("Food_Stock")));
}
}}

}


};gdjs.MainGameCode.mapOfGDgdjs_46MainGameCode_46GDBtn_9595AddFoodObjects2Objects = Hashtable.newFrom({"Btn_AddFood": gdjs.MainGameCode.GDBtn_95AddFoodObjects2});
gdjs.MainGameCode.eventsList3 = function(runtimeScene) {

{

/* Reuse gdjs.MainGameCode.GDBtn_95AddFoodObjects2 */

gdjs.MainGameCode.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.MainGameCode.GDBtn_95AddFoodObjects2.length;i<l;++i) {
    if ( gdjs.MainGameCode.GDBtn_95AddFoodObjects2[i].getTimerElapsedTimeInSecondsOrNaN("Timer_BtnAddFood") > 0.2 ) {
        gdjs.MainGameCode.condition0IsTrue_0.val = true;
        gdjs.MainGameCode.GDBtn_95AddFoodObjects2[k] = gdjs.MainGameCode.GDBtn_95AddFoodObjects2[i];
        ++k;
    }
}
gdjs.MainGameCode.GDBtn_95AddFoodObjects2.length = k;}if (gdjs.MainGameCode.condition0IsTrue_0.val) {
/* Reuse gdjs.MainGameCode.GDBtn_95AddFoodObjects2 */
{for(var i = 0, len = gdjs.MainGameCode.GDBtn_95AddFoodObjects2.length ;i < len;++i) {
    gdjs.MainGameCode.GDBtn_95AddFoodObjects2[i].resetTimer("Timer_BtnAddFood");
}
}{for(var i = 0, len = gdjs.MainGameCode.GDBtn_95AddFoodObjects2.length ;i < len;++i) {
    gdjs.MainGameCode.GDBtn_95AddFoodObjects2[i].returnVariable(gdjs.MainGameCode.GDBtn_95AddFoodObjects2[i].getVariables().getFromIndex(0)).setNumber(2);
}
}}

}


};gdjs.MainGameCode.mapOfGDgdjs_46MainGameCode_46GDBtn_9595AddFoodObjects2Objects = Hashtable.newFrom({"Btn_AddFood": gdjs.MainGameCode.GDBtn_95AddFoodObjects2});
gdjs.MainGameCode.eventsList4 = function(runtimeScene) {

{

/* Reuse gdjs.MainGameCode.GDBtn_95AddFoodObjects2 */

gdjs.MainGameCode.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.MainGameCode.GDBtn_95AddFoodObjects2.length;i<l;++i) {
    if ( gdjs.MainGameCode.GDBtn_95AddFoodObjects2[i].getTimerElapsedTimeInSecondsOrNaN("Timer_BtnAddFood") > 0.2 ) {
        gdjs.MainGameCode.condition0IsTrue_0.val = true;
        gdjs.MainGameCode.GDBtn_95AddFoodObjects2[k] = gdjs.MainGameCode.GDBtn_95AddFoodObjects2[i];
        ++k;
    }
}
gdjs.MainGameCode.GDBtn_95AddFoodObjects2.length = k;}if (gdjs.MainGameCode.condition0IsTrue_0.val) {
/* Reuse gdjs.MainGameCode.GDBtn_95AddFoodObjects2 */
{for(var i = 0, len = gdjs.MainGameCode.GDBtn_95AddFoodObjects2.length ;i < len;++i) {
    gdjs.MainGameCode.GDBtn_95AddFoodObjects2[i].resetTimer("Timer_BtnAddFood");
}
}{for(var i = 0, len = gdjs.MainGameCode.GDBtn_95AddFoodObjects2.length ;i < len;++i) {
    gdjs.MainGameCode.GDBtn_95AddFoodObjects2[i].returnVariable(gdjs.MainGameCode.GDBtn_95AddFoodObjects2[i].getVariables().getFromIndex(0)).setNumber(0);
}
}}

}


};gdjs.MainGameCode.eventsList5 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("Btn_AddFood"), gdjs.MainGameCode.GDBtn_95AddFoodObjects2);

gdjs.MainGameCode.condition0IsTrue_0.val = false;
gdjs.MainGameCode.condition1IsTrue_0.val = false;
gdjs.MainGameCode.condition2IsTrue_0.val = false;
gdjs.MainGameCode.condition3IsTrue_0.val = false;
gdjs.MainGameCode.condition4IsTrue_0.val = false;
{
gdjs.MainGameCode.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.MainGameCode.mapOfGDgdjs_46MainGameCode_46GDBtn_9595AddFoodObjects2Objects, runtimeScene, true, false);
}if ( gdjs.MainGameCode.condition0IsTrue_0.val ) {
{
gdjs.MainGameCode.condition1IsTrue_0.val = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left");
}if ( gdjs.MainGameCode.condition1IsTrue_0.val ) {
{
gdjs.MainGameCode.condition2IsTrue_0.val = gdjs.evtTools.variable.getVariableBoolean(runtimeScene.getVariables().get("Btn_Video_Exists"), false);
}if ( gdjs.MainGameCode.condition2IsTrue_0.val ) {
{
for(var i = 0, k = 0, l = gdjs.MainGameCode.GDBtn_95AddFoodObjects2.length;i<l;++i) {
    if ( gdjs.MainGameCode.GDBtn_95AddFoodObjects2[i].getVariableNumber(gdjs.MainGameCode.GDBtn_95AddFoodObjects2[i].getVariables().getFromIndex(0)) == 0 ) {
        gdjs.MainGameCode.condition3IsTrue_0.val = true;
        gdjs.MainGameCode.GDBtn_95AddFoodObjects2[k] = gdjs.MainGameCode.GDBtn_95AddFoodObjects2[i];
        ++k;
    }
}
gdjs.MainGameCode.GDBtn_95AddFoodObjects2.length = k;}if ( gdjs.MainGameCode.condition3IsTrue_0.val ) {
{
{gdjs.MainGameCode.conditionTrue_1 = gdjs.MainGameCode.condition4IsTrue_0;
gdjs.MainGameCode.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(9908404);
}
}}
}
}
}
if (gdjs.MainGameCode.condition4IsTrue_0.val) {
/* Reuse gdjs.MainGameCode.GDBtn_95AddFoodObjects2 */
gdjs.copyArray(runtimeScene.getObjects("WatchVideo"), gdjs.MainGameCode.GDWatchVideoObjects2);
{for(var i = 0, len = gdjs.MainGameCode.GDWatchVideoObjects2.length ;i < len;++i) {
    gdjs.MainGameCode.GDWatchVideoObjects2[i].getBehavior("Tween").addObjectPositionYTween("show_button_video", 670, "easeInQuad", 100, false);
}
}{gdjs.evtTools.sound.playSound(runtimeScene, "546079__stavsounds__button-selected.wav", false, 100, 1);
}{for(var i = 0, len = gdjs.MainGameCode.GDBtn_95AddFoodObjects2.length ;i < len;++i) {
    gdjs.MainGameCode.GDBtn_95AddFoodObjects2[i].resetTimer("Timer_BtnAddFood");
}
}{for(var i = 0, len = gdjs.MainGameCode.GDBtn_95AddFoodObjects2.length ;i < len;++i) {
    gdjs.MainGameCode.GDBtn_95AddFoodObjects2[i].returnVariable(gdjs.MainGameCode.GDBtn_95AddFoodObjects2[i].getVariables().getFromIndex(0)).setNumber(1);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Btn_AddFood"), gdjs.MainGameCode.GDBtn_95AddFoodObjects2);

gdjs.MainGameCode.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.MainGameCode.GDBtn_95AddFoodObjects2.length;i<l;++i) {
    if ( gdjs.MainGameCode.GDBtn_95AddFoodObjects2[i].getVariableNumber(gdjs.MainGameCode.GDBtn_95AddFoodObjects2[i].getVariables().getFromIndex(0)) == 1 ) {
        gdjs.MainGameCode.condition0IsTrue_0.val = true;
        gdjs.MainGameCode.GDBtn_95AddFoodObjects2[k] = gdjs.MainGameCode.GDBtn_95AddFoodObjects2[i];
        ++k;
    }
}
gdjs.MainGameCode.GDBtn_95AddFoodObjects2.length = k;}if (gdjs.MainGameCode.condition0IsTrue_0.val) {

{ //Subevents
gdjs.MainGameCode.eventsList3(runtimeScene);} //End of subevents
}

}


{

gdjs.copyArray(runtimeScene.getObjects("Btn_AddFood"), gdjs.MainGameCode.GDBtn_95AddFoodObjects2);

gdjs.MainGameCode.condition0IsTrue_0.val = false;
gdjs.MainGameCode.condition1IsTrue_0.val = false;
gdjs.MainGameCode.condition2IsTrue_0.val = false;
gdjs.MainGameCode.condition3IsTrue_0.val = false;
gdjs.MainGameCode.condition4IsTrue_0.val = false;
{
gdjs.MainGameCode.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.MainGameCode.mapOfGDgdjs_46MainGameCode_46GDBtn_9595AddFoodObjects2Objects, runtimeScene, true, false);
}if ( gdjs.MainGameCode.condition0IsTrue_0.val ) {
{
gdjs.MainGameCode.condition1IsTrue_0.val = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left");
}if ( gdjs.MainGameCode.condition1IsTrue_0.val ) {
{
gdjs.MainGameCode.condition2IsTrue_0.val = gdjs.evtTools.variable.getVariableBoolean(runtimeScene.getVariables().get("Btn_Video_Exists"), true);
}if ( gdjs.MainGameCode.condition2IsTrue_0.val ) {
{
for(var i = 0, k = 0, l = gdjs.MainGameCode.GDBtn_95AddFoodObjects2.length;i<l;++i) {
    if ( gdjs.MainGameCode.GDBtn_95AddFoodObjects2[i].getVariableNumber(gdjs.MainGameCode.GDBtn_95AddFoodObjects2[i].getVariables().getFromIndex(0)) == 2 ) {
        gdjs.MainGameCode.condition3IsTrue_0.val = true;
        gdjs.MainGameCode.GDBtn_95AddFoodObjects2[k] = gdjs.MainGameCode.GDBtn_95AddFoodObjects2[i];
        ++k;
    }
}
gdjs.MainGameCode.GDBtn_95AddFoodObjects2.length = k;}if ( gdjs.MainGameCode.condition3IsTrue_0.val ) {
{
{gdjs.MainGameCode.conditionTrue_1 = gdjs.MainGameCode.condition4IsTrue_0;
gdjs.MainGameCode.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(9913468);
}
}}
}
}
}
if (gdjs.MainGameCode.condition4IsTrue_0.val) {
/* Reuse gdjs.MainGameCode.GDBtn_95AddFoodObjects2 */
gdjs.copyArray(runtimeScene.getObjects("WatchVideo"), gdjs.MainGameCode.GDWatchVideoObjects2);
{for(var i = 0, len = gdjs.MainGameCode.GDWatchVideoObjects2.length ;i < len;++i) {
    gdjs.MainGameCode.GDWatchVideoObjects2[i].getBehavior("Tween").addObjectPositionYTween("show_button_video", 783, "easeInQuad", 100, false);
}
}{gdjs.evtTools.sound.playSound(runtimeScene, "546079__stavsounds__button-selected.wav", false, 100, 1);
}{for(var i = 0, len = gdjs.MainGameCode.GDBtn_95AddFoodObjects2.length ;i < len;++i) {
    gdjs.MainGameCode.GDBtn_95AddFoodObjects2[i].resetTimer("Timer_BtnAddFood");
}
}{for(var i = 0, len = gdjs.MainGameCode.GDBtn_95AddFoodObjects2.length ;i < len;++i) {
    gdjs.MainGameCode.GDBtn_95AddFoodObjects2[i].returnVariable(gdjs.MainGameCode.GDBtn_95AddFoodObjects2[i].getVariables().getFromIndex(0)).setNumber(3);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Btn_AddFood"), gdjs.MainGameCode.GDBtn_95AddFoodObjects2);

gdjs.MainGameCode.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.MainGameCode.GDBtn_95AddFoodObjects2.length;i<l;++i) {
    if ( gdjs.MainGameCode.GDBtn_95AddFoodObjects2[i].getVariableNumber(gdjs.MainGameCode.GDBtn_95AddFoodObjects2[i].getVariables().getFromIndex(0)) == 3 ) {
        gdjs.MainGameCode.condition0IsTrue_0.val = true;
        gdjs.MainGameCode.GDBtn_95AddFoodObjects2[k] = gdjs.MainGameCode.GDBtn_95AddFoodObjects2[i];
        ++k;
    }
}
gdjs.MainGameCode.GDBtn_95AddFoodObjects2.length = k;}if (gdjs.MainGameCode.condition0IsTrue_0.val) {

{ //Subevents
gdjs.MainGameCode.eventsList4(runtimeScene);} //End of subevents
}

}


{

gdjs.copyArray(runtimeScene.getObjects("WatchVideo"), gdjs.MainGameCode.GDWatchVideoObjects2);

gdjs.MainGameCode.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.MainGameCode.GDWatchVideoObjects2.length;i<l;++i) {
    if ( gdjs.MainGameCode.GDWatchVideoObjects2[i].getY() == 670 ) {
        gdjs.MainGameCode.condition0IsTrue_0.val = true;
        gdjs.MainGameCode.GDWatchVideoObjects2[k] = gdjs.MainGameCode.GDWatchVideoObjects2[i];
        ++k;
    }
}
gdjs.MainGameCode.GDWatchVideoObjects2.length = k;}if (gdjs.MainGameCode.condition0IsTrue_0.val) {
{gdjs.evtTools.variable.setVariableBoolean(runtimeScene.getVariables().get("Btn_Video_Exists"), true);
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("WatchVideo"), gdjs.MainGameCode.GDWatchVideoObjects2);

gdjs.MainGameCode.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.MainGameCode.GDWatchVideoObjects2.length;i<l;++i) {
    if ( !(gdjs.MainGameCode.GDWatchVideoObjects2[i].getY() == 670) ) {
        gdjs.MainGameCode.condition0IsTrue_0.val = true;
        gdjs.MainGameCode.GDWatchVideoObjects2[k] = gdjs.MainGameCode.GDWatchVideoObjects2[i];
        ++k;
    }
}
gdjs.MainGameCode.GDWatchVideoObjects2.length = k;}if (gdjs.MainGameCode.condition0IsTrue_0.val) {
{gdjs.evtTools.variable.setVariableBoolean(runtimeScene.getVariables().get("Btn_Video_Exists"), false);
}}

}


{


{
gdjs.copyArray(runtimeScene.getObjects("Btn_AddFood"), gdjs.MainGameCode.GDBtn_95AddFoodObjects1);
gdjs.copyArray(runtimeScene.getObjects("Testing_ObjVar_Button"), gdjs.MainGameCode.GDTesting_95ObjVar_95ButtonObjects1);
{for(var i = 0, len = gdjs.MainGameCode.GDTesting_95ObjVar_95ButtonObjects1.length ;i < len;++i) {
    gdjs.MainGameCode.GDTesting_95ObjVar_95ButtonObjects1[i].setString((gdjs.RuntimeObject.getVariableString(((gdjs.MainGameCode.GDBtn_95AddFoodObjects1.length === 0 ) ? gdjs.VariablesContainer.badVariablesContainer : gdjs.MainGameCode.GDBtn_95AddFoodObjects1[0].getVariables()).getFromIndex(0))));
}
}}

}


};gdjs.MainGameCode.mapOfGDgdjs_46MainGameCode_46GDWatchVideoObjects2Objects = Hashtable.newFrom({"WatchVideo": gdjs.MainGameCode.GDWatchVideoObjects2});
gdjs.MainGameCode.eventsList6 = function(runtimeScene) {

{


gdjs.MainGameCode.condition0IsTrue_0.val = false;
{
gdjs.MainGameCode.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
}if (gdjs.MainGameCode.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("Video"), gdjs.MainGameCode.GDVideoObjects2);
{for(var i = 0, len = gdjs.MainGameCode.GDVideoObjects2.length ;i < len;++i) {
    gdjs.MainGameCode.GDVideoObjects2[i].hide();
}
}{for(var i = 0, len = gdjs.MainGameCode.GDVideoObjects2.length ;i < len;++i) {
    gdjs.MainGameCode.GDVideoObjects2[i].pause();
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("WatchVideo"), gdjs.MainGameCode.GDWatchVideoObjects2);

gdjs.MainGameCode.condition0IsTrue_0.val = false;
gdjs.MainGameCode.condition1IsTrue_0.val = false;
gdjs.MainGameCode.condition2IsTrue_0.val = false;
gdjs.MainGameCode.condition3IsTrue_0.val = false;
{
gdjs.MainGameCode.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.MainGameCode.mapOfGDgdjs_46MainGameCode_46GDWatchVideoObjects2Objects, runtimeScene, true, false);
}if ( gdjs.MainGameCode.condition0IsTrue_0.val ) {
{
gdjs.MainGameCode.condition1IsTrue_0.val = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left");
}if ( gdjs.MainGameCode.condition1IsTrue_0.val ) {
{
{gdjs.MainGameCode.conditionTrue_1 = gdjs.MainGameCode.condition2IsTrue_0;
gdjs.MainGameCode.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(9920044);
}
}if ( gdjs.MainGameCode.condition2IsTrue_0.val ) {
{
gdjs.MainGameCode.condition3IsTrue_0.val = gdjs.evtTools.variable.getVariableBoolean(runtimeScene.getVariables().get("Btn_Video_Exists"), true);
}}
}
}
if (gdjs.MainGameCode.condition3IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("Video"), gdjs.MainGameCode.GDVideoObjects2);
/* Reuse gdjs.MainGameCode.GDWatchVideoObjects2 */
{for(var i = 0, len = gdjs.MainGameCode.GDVideoObjects2.length ;i < len;++i) {
    gdjs.MainGameCode.GDVideoObjects2[i].hide(false);
}
}{for(var i = 0, len = gdjs.MainGameCode.GDVideoObjects2.length ;i < len;++i) {
    gdjs.MainGameCode.GDVideoObjects2[i].play();
}
}{for(var i = 0, len = gdjs.MainGameCode.GDWatchVideoObjects2.length ;i < len;++i) {
    gdjs.MainGameCode.GDWatchVideoObjects2[i].getBehavior("Tween").addObjectPositionYTween("show_button_video", 782, "easeInQuad", 100, false);
}
}{gdjs.evtTools.variable.setVariableBoolean(runtimeScene.getVariables().get("Btn_Video_Exists"), false);
}{gdjs.evtTools.sound.playSound(runtimeScene, "546079__stavsounds__button-selected.wav", false, 100, 1);
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Video"), gdjs.MainGameCode.GDVideoObjects1);

gdjs.MainGameCode.condition0IsTrue_0.val = false;
gdjs.MainGameCode.condition1IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.MainGameCode.GDVideoObjects1.length;i<l;++i) {
    if ( gdjs.MainGameCode.GDVideoObjects1[i].isEnded() ) {
        gdjs.MainGameCode.condition0IsTrue_0.val = true;
        gdjs.MainGameCode.GDVideoObjects1[k] = gdjs.MainGameCode.GDVideoObjects1[i];
        ++k;
    }
}
gdjs.MainGameCode.GDVideoObjects1.length = k;}if ( gdjs.MainGameCode.condition0IsTrue_0.val ) {
{
{gdjs.MainGameCode.conditionTrue_1 = gdjs.MainGameCode.condition1IsTrue_0;
gdjs.MainGameCode.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(9922124);
}
}}
if (gdjs.MainGameCode.condition1IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("Btn_AddFood"), gdjs.MainGameCode.GDBtn_95AddFoodObjects1);
/* Reuse gdjs.MainGameCode.GDVideoObjects1 */
{for(var i = 0, len = gdjs.MainGameCode.GDVideoObjects1.length ;i < len;++i) {
    gdjs.MainGameCode.GDVideoObjects1[i].hide();
}
}{runtimeScene.getVariables().get("Food_Stock").add(1);
}{for(var i = 0, len = gdjs.MainGameCode.GDBtn_95AddFoodObjects1.length ;i < len;++i) {
    gdjs.MainGameCode.GDBtn_95AddFoodObjects1[i].returnVariable(gdjs.MainGameCode.GDBtn_95AddFoodObjects1[i].getVariables().getFromIndex(0)).setNumber(0);
}
}}

}


};gdjs.MainGameCode.eventsList7 = function(runtimeScene) {

{


{
gdjs.copyArray(runtimeScene.getObjects("Time"), gdjs.MainGameCode.GDTimeObjects1);
{runtimeScene.getVariables().get("Today_Hour").setNumber(gdjs.evtTools.runtimeScene.getTime(runtimeScene, "hour"));
}{runtimeScene.getVariables().get("Today_Min").setNumber(gdjs.evtTools.runtimeScene.getTime(runtimeScene, "min"));
}{for(var i = 0, len = gdjs.MainGameCode.GDTimeObjects1.length ;i < len;++i) {
    gdjs.MainGameCode.GDTimeObjects1[i].setString(gdjs.evtTools.variable.getVariableString(runtimeScene.getVariables().get("Today_Hour")) + ":" + gdjs.evtTools.variable.getVariableString(runtimeScene.getVariables().get("Today_Min")));
}
}}

}


};gdjs.MainGameCode.mapOfGDgdjs_46MainGameCode_46GDBtn_9595FightObjects1Objects = Hashtable.newFrom({"Btn_Fight": gdjs.MainGameCode.GDBtn_95FightObjects1});
gdjs.MainGameCode.eventsList8 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("Btn_Fight"), gdjs.MainGameCode.GDBtn_95FightObjects1);

gdjs.MainGameCode.condition0IsTrue_0.val = false;
gdjs.MainGameCode.condition1IsTrue_0.val = false;
gdjs.MainGameCode.condition2IsTrue_0.val = false;
{
gdjs.MainGameCode.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.MainGameCode.mapOfGDgdjs_46MainGameCode_46GDBtn_9595FightObjects1Objects, runtimeScene, true, false);
}if ( gdjs.MainGameCode.condition0IsTrue_0.val ) {
{
gdjs.MainGameCode.condition1IsTrue_0.val = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left");
}if ( gdjs.MainGameCode.condition1IsTrue_0.val ) {
{
{gdjs.MainGameCode.conditionTrue_1 = gdjs.MainGameCode.condition2IsTrue_0;
gdjs.MainGameCode.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(9926404);
}
}}
}
if (gdjs.MainGameCode.condition2IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "War", false);
}}

}


};gdjs.MainGameCode.eventsList9 = function(runtimeScene) {

{


gdjs.MainGameCode.condition0IsTrue_0.val = false;
{
gdjs.MainGameCode.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
}if (gdjs.MainGameCode.condition0IsTrue_0.val) {
{gdjs.evtTools.sound.playMusic(runtimeScene, "328668__pearcewilsonking__alien-ufo-lab-1.wav", true, 100, 1);
}}

}


{


gdjs.MainGameCode.eventsList2(runtimeScene);
}


{


gdjs.MainGameCode.eventsList5(runtimeScene);
}


{


gdjs.MainGameCode.eventsList6(runtimeScene);
}


{


gdjs.MainGameCode.eventsList7(runtimeScene);
}


{


gdjs.MainGameCode.condition0IsTrue_0.val = false;
{
gdjs.MainGameCode.condition0IsTrue_0.val = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getVariables().get("Today_Min")) == 20;
}if (gdjs.MainGameCode.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("Background"), gdjs.MainGameCode.GDBackgroundObjects1);
{for(var i = 0, len = gdjs.MainGameCode.GDBackgroundObjects1.length ;i < len;++i) {
    gdjs.MainGameCode.GDBackgroundObjects1[i].setAnimation(1);
}
}}

}


{


gdjs.MainGameCode.condition0IsTrue_0.val = false;
{
gdjs.MainGameCode.condition0IsTrue_0.val = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getVariables().get("Today_Hour")) == 17;
}if (gdjs.MainGameCode.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("Background"), gdjs.MainGameCode.GDBackgroundObjects1);
{for(var i = 0, len = gdjs.MainGameCode.GDBackgroundObjects1.length ;i < len;++i) {
    gdjs.MainGameCode.GDBackgroundObjects1[i].setAnimation(0);
}
}}

}


{


gdjs.MainGameCode.eventsList8(runtimeScene);
}


};

gdjs.MainGameCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.MainGameCode.GDTIGERObjects1.length = 0;
gdjs.MainGameCode.GDTIGERObjects2.length = 0;
gdjs.MainGameCode.GDTIGERObjects3.length = 0;
gdjs.MainGameCode.GDLogoObjects1.length = 0;
gdjs.MainGameCode.GDLogoObjects2.length = 0;
gdjs.MainGameCode.GDLogoObjects3.length = 0;
gdjs.MainGameCode.GDFoodObjects1.length = 0;
gdjs.MainGameCode.GDFoodObjects2.length = 0;
gdjs.MainGameCode.GDFoodObjects3.length = 0;
gdjs.MainGameCode.GDProgressBarObjects1.length = 0;
gdjs.MainGameCode.GDProgressBarObjects2.length = 0;
gdjs.MainGameCode.GDProgressBarObjects3.length = 0;
gdjs.MainGameCode.GDFood_95QtyObjects1.length = 0;
gdjs.MainGameCode.GDFood_95QtyObjects2.length = 0;
gdjs.MainGameCode.GDFood_95QtyObjects3.length = 0;
gdjs.MainGameCode.GDBtn_95AddFoodObjects1.length = 0;
gdjs.MainGameCode.GDBtn_95AddFoodObjects2.length = 0;
gdjs.MainGameCode.GDBtn_95AddFoodObjects3.length = 0;
gdjs.MainGameCode.GDAdd_95SelectFoodObjects1.length = 0;
gdjs.MainGameCode.GDAdd_95SelectFoodObjects2.length = 0;
gdjs.MainGameCode.GDAdd_95SelectFoodObjects3.length = 0;
gdjs.MainGameCode.GDBackgroundObjects1.length = 0;
gdjs.MainGameCode.GDBackgroundObjects2.length = 0;
gdjs.MainGameCode.GDBackgroundObjects3.length = 0;
gdjs.MainGameCode.GDEndingObjects1.length = 0;
gdjs.MainGameCode.GDEndingObjects2.length = 0;
gdjs.MainGameCode.GDEndingObjects3.length = 0;
gdjs.MainGameCode.GDStartingObjects1.length = 0;
gdjs.MainGameCode.GDStartingObjects2.length = 0;
gdjs.MainGameCode.GDStartingObjects3.length = 0;
gdjs.MainGameCode.GDWatchVideoObjects1.length = 0;
gdjs.MainGameCode.GDWatchVideoObjects2.length = 0;
gdjs.MainGameCode.GDWatchVideoObjects3.length = 0;
gdjs.MainGameCode.GDVideoObjects1.length = 0;
gdjs.MainGameCode.GDVideoObjects2.length = 0;
gdjs.MainGameCode.GDVideoObjects3.length = 0;
gdjs.MainGameCode.GDFood_95StockObjects1.length = 0;
gdjs.MainGameCode.GDFood_95StockObjects2.length = 0;
gdjs.MainGameCode.GDFood_95StockObjects3.length = 0;
gdjs.MainGameCode.GDText_95FoodAddedObjects1.length = 0;
gdjs.MainGameCode.GDText_95FoodAddedObjects2.length = 0;
gdjs.MainGameCode.GDText_95FoodAddedObjects3.length = 0;
gdjs.MainGameCode.GDTesting_95ObjVar_95ButtonObjects1.length = 0;
gdjs.MainGameCode.GDTesting_95ObjVar_95ButtonObjects2.length = 0;
gdjs.MainGameCode.GDTesting_95ObjVar_95ButtonObjects3.length = 0;
gdjs.MainGameCode.GDTimeObjects1.length = 0;
gdjs.MainGameCode.GDTimeObjects2.length = 0;
gdjs.MainGameCode.GDTimeObjects3.length = 0;
gdjs.MainGameCode.GDDecor_95PCObjects1.length = 0;
gdjs.MainGameCode.GDDecor_95PCObjects2.length = 0;
gdjs.MainGameCode.GDDecor_95PCObjects3.length = 0;
gdjs.MainGameCode.GDDecor_95TableObjects1.length = 0;
gdjs.MainGameCode.GDDecor_95TableObjects2.length = 0;
gdjs.MainGameCode.GDDecor_95TableObjects3.length = 0;
gdjs.MainGameCode.GDDecor_95BarObjects1.length = 0;
gdjs.MainGameCode.GDDecor_95BarObjects2.length = 0;
gdjs.MainGameCode.GDDecor_95BarObjects3.length = 0;
gdjs.MainGameCode.GDBtn_95FightObjects1.length = 0;
gdjs.MainGameCode.GDBtn_95FightObjects2.length = 0;
gdjs.MainGameCode.GDBtn_95FightObjects3.length = 0;

gdjs.MainGameCode.eventsList9(runtimeScene);
return;

}

gdjs['MainGameCode'] = gdjs.MainGameCode;
