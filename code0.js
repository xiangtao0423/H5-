gdjs.NewSceneCode = {};
gdjs.NewSceneCode.forEachCount0_3 = 0;

gdjs.NewSceneCode.forEachCount1_3 = 0;

gdjs.NewSceneCode.forEachIndex3 = 0;

gdjs.NewSceneCode.forEachObjects3 = [];

gdjs.NewSceneCode.forEachTotalCount3 = 0;

gdjs.NewSceneCode.GDspriteObjects1= [];
gdjs.NewSceneCode.GDspriteObjects2= [];
gdjs.NewSceneCode.GDspriteObjects3= [];
gdjs.NewSceneCode.GDmessageObjects1= [];
gdjs.NewSceneCode.GDmessageObjects2= [];
gdjs.NewSceneCode.GDmessageObjects3= [];
gdjs.NewSceneCode.GDNewSpriteObjects1= [];
gdjs.NewSceneCode.GDNewSpriteObjects2= [];
gdjs.NewSceneCode.GDNewSpriteObjects3= [];
gdjs.NewSceneCode.GDNewSprite2Objects1= [];
gdjs.NewSceneCode.GDNewSprite2Objects2= [];
gdjs.NewSceneCode.GDNewSprite2Objects3= [];
gdjs.NewSceneCode.GDHouseSmall2Objects1= [];
gdjs.NewSceneCode.GDHouseSmall2Objects2= [];
gdjs.NewSceneCode.GDHouseSmall2Objects3= [];
gdjs.NewSceneCode.GDHouseSmallAlt1Objects1= [];
gdjs.NewSceneCode.GDHouseSmallAlt1Objects2= [];
gdjs.NewSceneCode.GDHouseSmallAlt1Objects3= [];
gdjs.NewSceneCode.GDMeteorSquarePlainObjects1= [];
gdjs.NewSceneCode.GDMeteorSquarePlainObjects2= [];
gdjs.NewSceneCode.GDMeteorSquarePlainObjects3= [];
gdjs.NewSceneCode.GDdebug1Objects1= [];
gdjs.NewSceneCode.GDdebug1Objects2= [];
gdjs.NewSceneCode.GDdebug1Objects3= [];
gdjs.NewSceneCode.GDdebug2Objects1= [];
gdjs.NewSceneCode.GDdebug2Objects2= [];
gdjs.NewSceneCode.GDdebug2Objects3= [];
gdjs.NewSceneCode.GDziscaleObjects1= [];
gdjs.NewSceneCode.GDziscaleObjects2= [];
gdjs.NewSceneCode.GDziscaleObjects3= [];
gdjs.NewSceneCode.GDNextObjects1= [];
gdjs.NewSceneCode.GDNextObjects2= [];
gdjs.NewSceneCode.GDNextObjects3= [];

gdjs.NewSceneCode.conditionTrue_0 = {val:false};
gdjs.NewSceneCode.condition0IsTrue_0 = {val:false};
gdjs.NewSceneCode.condition1IsTrue_0 = {val:false};
gdjs.NewSceneCode.condition2IsTrue_0 = {val:false};
gdjs.NewSceneCode.condition3IsTrue_0 = {val:false};
gdjs.NewSceneCode.conditionTrue_1 = {val:false};
gdjs.NewSceneCode.condition0IsTrue_1 = {val:false};
gdjs.NewSceneCode.condition1IsTrue_1 = {val:false};
gdjs.NewSceneCode.condition2IsTrue_1 = {val:false};
gdjs.NewSceneCode.condition3IsTrue_1 = {val:false};


gdjs.NewSceneCode.eventsList0 = function(runtimeScene) {

{


gdjs.NewSceneCode.condition0IsTrue_0.val = false;
gdjs.NewSceneCode.condition1IsTrue_0.val = false;
{
gdjs.NewSceneCode.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
}if ( gdjs.NewSceneCode.condition0IsTrue_0.val ) {
{
gdjs.NewSceneCode.condition1IsTrue_0.val = gdjs.evtTools.systemInfo.hasTouchScreen(runtimeScene);
}}
if (gdjs.NewSceneCode.condition1IsTrue_0.val) {
{gdjs.evtTools.input.touchSimulateMouse(runtimeScene, false);
}}

}


};gdjs.NewSceneCode.mapOfGDgdjs_46NewSceneCode_46GDHouseSmall2Objects2ObjectsGDgdjs_46NewSceneCode_46GDHouseSmallAlt1Objects2Objects = Hashtable.newFrom({"HouseSmall2": gdjs.NewSceneCode.GDHouseSmall2Objects2, "HouseSmallAlt1": gdjs.NewSceneCode.GDHouseSmallAlt1Objects2});
gdjs.NewSceneCode.mapOfGDgdjs_46NewSceneCode_46GDMeteorSquarePlainObjects2Objects = Hashtable.newFrom({"MeteorSquarePlain": gdjs.NewSceneCode.GDMeteorSquarePlainObjects2});
gdjs.NewSceneCode.eventsList1 = function(runtimeScene) {

{


{
{gdjs.evtTools.window.setFullScreen(runtimeScene, true, false);
}}

}


{



}


{

gdjs.copyArray(runtimeScene.getObjects("ziscale"), gdjs.NewSceneCode.GDziscaleObjects2);

gdjs.NewSceneCode.condition0IsTrue_0.val = false;
gdjs.NewSceneCode.condition1IsTrue_0.val = false;
{
gdjs.NewSceneCode.condition0IsTrue_0.val = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left");
}if ( gdjs.NewSceneCode.condition0IsTrue_0.val ) {
{
for(var i = 0, k = 0, l = gdjs.NewSceneCode.GDziscaleObjects2.length;i<l;++i) {
    if ( !(gdjs.NewSceneCode.GDziscaleObjects2[i].getBehavior("DraggableSliderControl").IsBeingDragged((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined))) ) {
        gdjs.NewSceneCode.condition1IsTrue_0.val = true;
        gdjs.NewSceneCode.GDziscaleObjects2[k] = gdjs.NewSceneCode.GDziscaleObjects2[i];
        ++k;
    }
}
gdjs.NewSceneCode.GDziscaleObjects2.length = k;}}
if (gdjs.NewSceneCode.condition1IsTrue_0.val) {
{gdjs.evtsExt__DragCameraWithPointer__DragCameraWithPointer.func(runtimeScene, 0, "", "both", "Left", (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}}

}


{



}


{


{
gdjs.copyArray(runtimeScene.getObjects("MeteorSquarePlain"), gdjs.NewSceneCode.GDMeteorSquarePlainObjects2);
{gdjs.evtTools.camera.centerCameraWithinLimits(runtimeScene, (gdjs.NewSceneCode.GDMeteorSquarePlainObjects2.length !== 0 ? gdjs.NewSceneCode.GDMeteorSquarePlainObjects2[0] : null), 0, 0, 1280, 760, true, "", 0);
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("HouseSmall2"), gdjs.NewSceneCode.GDHouseSmall2Objects2);
gdjs.copyArray(runtimeScene.getObjects("HouseSmallAlt1"), gdjs.NewSceneCode.GDHouseSmallAlt1Objects2);

gdjs.NewSceneCode.condition0IsTrue_0.val = false;
gdjs.NewSceneCode.condition1IsTrue_0.val = false;
gdjs.NewSceneCode.condition2IsTrue_0.val = false;
{
gdjs.NewSceneCode.condition0IsTrue_0.val = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left");
}if ( gdjs.NewSceneCode.condition0IsTrue_0.val ) {
{
gdjs.NewSceneCode.condition1IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.NewSceneCode.mapOfGDgdjs_46NewSceneCode_46GDHouseSmall2Objects2ObjectsGDgdjs_46NewSceneCode_46GDHouseSmallAlt1Objects2Objects, runtimeScene, true, false);
}if ( gdjs.NewSceneCode.condition1IsTrue_0.val ) {
{
{gdjs.NewSceneCode.conditionTrue_1 = gdjs.NewSceneCode.condition2IsTrue_0;
gdjs.NewSceneCode.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(6631324);
}
}}
}
if (gdjs.NewSceneCode.condition2IsTrue_0.val) {
gdjs.NewSceneCode.GDMeteorSquarePlainObjects2.length = 0;

{gdjs.evtTools.object.createObjectOnScene((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : runtimeScene), gdjs.NewSceneCode.mapOfGDgdjs_46NewSceneCode_46GDMeteorSquarePlainObjects2Objects, gdjs.evtTools.input.getMouseX(runtimeScene, "", 0), gdjs.evtTools.input.getMouseY(runtimeScene, "", 0), "");
}}

}


{


gdjs.NewSceneCode.condition0IsTrue_0.val = false;
{
gdjs.NewSceneCode.condition0IsTrue_0.val = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
}if (gdjs.NewSceneCode.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("MeteorSquarePlain"), gdjs.NewSceneCode.GDMeteorSquarePlainObjects1);
{for(var i = 0, len = gdjs.NewSceneCode.GDMeteorSquarePlainObjects1.length ;i < len;++i) {
    gdjs.NewSceneCode.GDMeteorSquarePlainObjects1[i].deleteFromScene(runtimeScene);
}
}}

}


};gdjs.NewSceneCode.mapOfGDgdjs_46NewSceneCode_46GDmessageObjects3Objects = Hashtable.newFrom({"message": gdjs.NewSceneCode.GDmessageObjects3});
gdjs.NewSceneCode.eventsList2 = function(runtimeScene) {

};gdjs.NewSceneCode.mapOfGDgdjs_46NewSceneCode_46GDHouseSmall2Objects2ObjectsGDgdjs_46NewSceneCode_46GDHouseSmallAlt1Objects2Objects = Hashtable.newFrom({"HouseSmall2": gdjs.NewSceneCode.GDHouseSmall2Objects2, "HouseSmallAlt1": gdjs.NewSceneCode.GDHouseSmallAlt1Objects2});
gdjs.NewSceneCode.mapOfGDgdjs_46NewSceneCode_46GDHouseSmall2Objects2ObjectsGDgdjs_46NewSceneCode_46GDHouseSmallAlt1Objects2Objects = Hashtable.newFrom({"HouseSmall2": gdjs.NewSceneCode.GDHouseSmall2Objects2, "HouseSmallAlt1": gdjs.NewSceneCode.GDHouseSmallAlt1Objects2});
gdjs.NewSceneCode.eventsList3 = function(runtimeScene) {

{



}


{

gdjs.copyArray(runtimeScene.getObjects("HouseSmall2"), gdjs.NewSceneCode.GDHouseSmall2Objects2);
gdjs.copyArray(runtimeScene.getObjects("HouseSmallAlt1"), gdjs.NewSceneCode.GDHouseSmallAlt1Objects2);

gdjs.NewSceneCode.forEachTotalCount3 = 0;
gdjs.NewSceneCode.forEachObjects3.length = 0;
gdjs.NewSceneCode.forEachCount0_3 = gdjs.NewSceneCode.GDHouseSmall2Objects2.length;
gdjs.NewSceneCode.forEachTotalCount3 += gdjs.NewSceneCode.forEachCount0_3;
gdjs.NewSceneCode.forEachObjects3.push.apply(gdjs.NewSceneCode.forEachObjects3,gdjs.NewSceneCode.GDHouseSmall2Objects2);
gdjs.NewSceneCode.forEachCount1_3 = gdjs.NewSceneCode.GDHouseSmallAlt1Objects2.length;
gdjs.NewSceneCode.forEachTotalCount3 += gdjs.NewSceneCode.forEachCount1_3;
gdjs.NewSceneCode.forEachObjects3.push.apply(gdjs.NewSceneCode.forEachObjects3,gdjs.NewSceneCode.GDHouseSmallAlt1Objects2);
for(gdjs.NewSceneCode.forEachIndex3 = 0;gdjs.NewSceneCode.forEachIndex3 < gdjs.NewSceneCode.forEachTotalCount3;++gdjs.NewSceneCode.forEachIndex3) {
gdjs.NewSceneCode.GDmessageObjects3.length = 0;

gdjs.NewSceneCode.GDHouseSmall2Objects3.length = 0;

gdjs.NewSceneCode.GDHouseSmallAlt1Objects3.length = 0;


if (gdjs.NewSceneCode.forEachIndex3 < gdjs.NewSceneCode.forEachCount0_3) {
    gdjs.NewSceneCode.GDHouseSmall2Objects3.push(gdjs.NewSceneCode.forEachObjects3[gdjs.NewSceneCode.forEachIndex3]);
}
else if (gdjs.NewSceneCode.forEachIndex3 < gdjs.NewSceneCode.forEachCount0_3+gdjs.NewSceneCode.forEachCount1_3) {
    gdjs.NewSceneCode.GDHouseSmallAlt1Objects3.push(gdjs.NewSceneCode.forEachObjects3[gdjs.NewSceneCode.forEachIndex3]);
}
gdjs.NewSceneCode.condition0IsTrue_0.val = false;
{
{gdjs.NewSceneCode.conditionTrue_1 = gdjs.NewSceneCode.condition0IsTrue_0;
gdjs.NewSceneCode.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(6532780);
}
}if (gdjs.NewSceneCode.condition0IsTrue_0.val) {
{gdjs.evtTools.object.createObjectOnScene((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : runtimeScene), gdjs.NewSceneCode.mapOfGDgdjs_46NewSceneCode_46GDmessageObjects3Objects, (( gdjs.NewSceneCode.GDHouseSmallAlt1Objects3.length === 0 ) ? (( gdjs.NewSceneCode.GDHouseSmall2Objects3.length === 0 ) ? 0 :gdjs.NewSceneCode.GDHouseSmall2Objects3[0].getPointX("")) :gdjs.NewSceneCode.GDHouseSmallAlt1Objects3[0].getPointX("")), (( gdjs.NewSceneCode.GDHouseSmallAlt1Objects3.length === 0 ) ? (( gdjs.NewSceneCode.GDHouseSmall2Objects3.length === 0 ) ? 0 :gdjs.NewSceneCode.GDHouseSmall2Objects3[0].getPointY("")) :gdjs.NewSceneCode.GDHouseSmallAlt1Objects3[0].getPointY("")) - 50, "");
}{for(var i = 0, len = gdjs.NewSceneCode.GDmessageObjects3.length ;i < len;++i) {
    gdjs.NewSceneCode.GDmessageObjects3[i].setString((gdjs.RuntimeObject.getVariableString(((gdjs.NewSceneCode.GDHouseSmallAlt1Objects3.length === 0 ) ? ((gdjs.NewSceneCode.GDHouseSmall2Objects3.length === 0 ) ? gdjs.VariablesContainer.badVariablesContainer : gdjs.NewSceneCode.GDHouseSmall2Objects3[0].getVariables()) : gdjs.NewSceneCode.GDHouseSmallAlt1Objects3[0].getVariables()).get("name"))));
}
}{gdjs.evtTools.linkedObjects.linkObjects(runtimeScene, (gdjs.NewSceneCode.GDHouseSmall2Objects3.length !== 0 ? gdjs.NewSceneCode.GDHouseSmall2Objects3[0] : (gdjs.NewSceneCode.GDHouseSmallAlt1Objects3.length !== 0 ? gdjs.NewSceneCode.GDHouseSmallAlt1Objects3[0] : null)), (gdjs.NewSceneCode.GDmessageObjects3.length !== 0 ? gdjs.NewSceneCode.GDmessageObjects3[0] : null));
}}
}

}


{



}


{

gdjs.copyArray(runtimeScene.getObjects("HouseSmall2"), gdjs.NewSceneCode.GDHouseSmall2Objects2);
gdjs.copyArray(runtimeScene.getObjects("HouseSmallAlt1"), gdjs.NewSceneCode.GDHouseSmallAlt1Objects2);

gdjs.NewSceneCode.condition0IsTrue_0.val = false;
gdjs.NewSceneCode.condition1IsTrue_0.val = false;
{
gdjs.NewSceneCode.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.NewSceneCode.mapOfGDgdjs_46NewSceneCode_46GDHouseSmall2Objects2ObjectsGDgdjs_46NewSceneCode_46GDHouseSmallAlt1Objects2Objects, runtimeScene, true, false);
}if ( gdjs.NewSceneCode.condition0IsTrue_0.val ) {
{
{gdjs.NewSceneCode.conditionTrue_1 = gdjs.NewSceneCode.condition1IsTrue_0;
gdjs.NewSceneCode.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(7200204);
}
}}
if (gdjs.NewSceneCode.condition1IsTrue_0.val) {
/* Reuse gdjs.NewSceneCode.GDHouseSmall2Objects2 */
/* Reuse gdjs.NewSceneCode.GDHouseSmallAlt1Objects2 */
gdjs.copyArray(runtimeScene.getObjects("debug2"), gdjs.NewSceneCode.GDdebug2Objects2);
gdjs.copyArray(runtimeScene.getObjects("message"), gdjs.NewSceneCode.GDmessageObjects2);
{for(var i = 0, len = gdjs.NewSceneCode.GDHouseSmall2Objects2.length ;i < len;++i) {
    gdjs.NewSceneCode.GDHouseSmall2Objects2[i].setScale(1);
}
for(var i = 0, len = gdjs.NewSceneCode.GDHouseSmallAlt1Objects2.length ;i < len;++i) {
    gdjs.NewSceneCode.GDHouseSmallAlt1Objects2[i].setScale(1);
}
}{for(var i = 0, len = gdjs.NewSceneCode.GDdebug2Objects2.length ;i < len;++i) {
    gdjs.NewSceneCode.GDdebug2Objects2[i].setString((gdjs.RuntimeObject.getVariableString(((gdjs.NewSceneCode.GDHouseSmallAlt1Objects2.length === 0 ) ? ((gdjs.NewSceneCode.GDHouseSmall2Objects2.length === 0 ) ? gdjs.VariablesContainer.badVariablesContainer : gdjs.NewSceneCode.GDHouseSmall2Objects2[0].getVariables()) : gdjs.NewSceneCode.GDHouseSmallAlt1Objects2[0].getVariables()).get("name"))));
}
}{for(var i = 0, len = gdjs.NewSceneCode.GDdebug2Objects2.length ;i < len;++i) {
    gdjs.NewSceneCode.GDdebug2Objects2[i].setOutline("245;166;35", gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(1)));
}
}{for(var i = 0, len = gdjs.NewSceneCode.GDdebug2Objects2.length ;i < len;++i) {
    gdjs.NewSceneCode.GDdebug2Objects2[i].setPosition((( gdjs.NewSceneCode.GDHouseSmallAlt1Objects2.length === 0 ) ? (( gdjs.NewSceneCode.GDHouseSmall2Objects2.length === 0 ) ? 0 :gdjs.NewSceneCode.GDHouseSmall2Objects2[0].getPointX("")) :gdjs.NewSceneCode.GDHouseSmallAlt1Objects2[0].getPointX("")) - gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(1)) / 2,(( gdjs.NewSceneCode.GDHouseSmallAlt1Objects2.length === 0 ) ? (( gdjs.NewSceneCode.GDHouseSmall2Objects2.length === 0 ) ? 0 :gdjs.NewSceneCode.GDHouseSmall2Objects2[0].getPointY("")) :gdjs.NewSceneCode.GDHouseSmallAlt1Objects2[0].getPointY("")) - gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(1)) / 2 - 50);
}
}{for(var i = 0, len = gdjs.NewSceneCode.GDdebug2Objects2.length ;i < len;++i) {
    gdjs.NewSceneCode.GDdebug2Objects2[i].setCharacterSize(gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(0)));
}
}{for(var i = 0, len = gdjs.NewSceneCode.GDmessageObjects2.length ;i < len;++i) {
    gdjs.NewSceneCode.GDmessageObjects2[i].setCharacterSize(gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(0)));
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("HouseSmall2"), gdjs.NewSceneCode.GDHouseSmall2Objects2);
gdjs.copyArray(runtimeScene.getObjects("HouseSmallAlt1"), gdjs.NewSceneCode.GDHouseSmallAlt1Objects2);

gdjs.NewSceneCode.condition0IsTrue_0.val = false;
{
gdjs.NewSceneCode.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.NewSceneCode.mapOfGDgdjs_46NewSceneCode_46GDHouseSmall2Objects2ObjectsGDgdjs_46NewSceneCode_46GDHouseSmallAlt1Objects2Objects, runtimeScene, true, true);
}if (gdjs.NewSceneCode.condition0IsTrue_0.val) {
/* Reuse gdjs.NewSceneCode.GDHouseSmall2Objects2 */
/* Reuse gdjs.NewSceneCode.GDHouseSmallAlt1Objects2 */
{for(var i = 0, len = gdjs.NewSceneCode.GDHouseSmall2Objects2.length ;i < len;++i) {
    gdjs.NewSceneCode.GDHouseSmall2Objects2[i].setScale(0.5);
}
for(var i = 0, len = gdjs.NewSceneCode.GDHouseSmallAlt1Objects2.length ;i < len;++i) {
    gdjs.NewSceneCode.GDHouseSmallAlt1Objects2[i].setScale(0.5);
}
}}

}


{


{
}

}


{



}


};gdjs.NewSceneCode.eventsList4 = function(runtimeScene) {

};gdjs.NewSceneCode.mapOfGDgdjs_46NewSceneCode_46GDziscaleObjects2Objects = Hashtable.newFrom({"ziscale": gdjs.NewSceneCode.GDziscaleObjects2});
gdjs.NewSceneCode.mapOfGDgdjs_46NewSceneCode_46GDziscaleObjects1Objects = Hashtable.newFrom({"ziscale": gdjs.NewSceneCode.GDziscaleObjects1});
gdjs.NewSceneCode.eventsList5 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("ziscale"), gdjs.NewSceneCode.GDziscaleObjects2);

gdjs.NewSceneCode.condition0IsTrue_0.val = false;
gdjs.NewSceneCode.condition1IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.NewSceneCode.GDziscaleObjects2.length;i<l;++i) {
    if ( gdjs.NewSceneCode.GDziscaleObjects2[i].getBehavior("DraggableSliderControl").IsEnabled((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        gdjs.NewSceneCode.condition0IsTrue_0.val = true;
        gdjs.NewSceneCode.GDziscaleObjects2[k] = gdjs.NewSceneCode.GDziscaleObjects2[i];
        ++k;
    }
}
gdjs.NewSceneCode.GDziscaleObjects2.length = k;}if ( gdjs.NewSceneCode.condition0IsTrue_0.val ) {
{
for(var i = 0, k = 0, l = gdjs.NewSceneCode.GDziscaleObjects2.length;i<l;++i) {
    if ( gdjs.NewSceneCode.GDziscaleObjects2[i].getBehavior("DraggableSliderControl").IsBeingDragged((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        gdjs.NewSceneCode.condition1IsTrue_0.val = true;
        gdjs.NewSceneCode.GDziscaleObjects2[k] = gdjs.NewSceneCode.GDziscaleObjects2[i];
        ++k;
    }
}
gdjs.NewSceneCode.GDziscaleObjects2.length = k;}}
if (gdjs.NewSceneCode.condition1IsTrue_0.val) {
/* Reuse gdjs.NewSceneCode.GDziscaleObjects2 */
{runtimeScene.getGame().getVariables().getFromIndex(0).setNumber((( gdjs.NewSceneCode.GDziscaleObjects2.length === 0 ) ? 0 :gdjs.NewSceneCode.GDziscaleObjects2[0].getBehavior("DraggableSliderControl").Value((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined))));
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("ziscale"), gdjs.NewSceneCode.GDziscaleObjects2);

gdjs.NewSceneCode.condition0IsTrue_0.val = false;
gdjs.NewSceneCode.condition1IsTrue_0.val = false;
{
gdjs.NewSceneCode.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.NewSceneCode.mapOfGDgdjs_46NewSceneCode_46GDziscaleObjects2Objects, runtimeScene, true, false);
}if ( gdjs.NewSceneCode.condition0IsTrue_0.val ) {
{
{gdjs.NewSceneCode.conditionTrue_1 = gdjs.NewSceneCode.condition1IsTrue_0;
gdjs.NewSceneCode.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(9617684);
}
}}
if (gdjs.NewSceneCode.condition1IsTrue_0.val) {
/* Reuse gdjs.NewSceneCode.GDziscaleObjects2 */
{for(var i = 0, len = gdjs.NewSceneCode.GDziscaleObjects2.length ;i < len;++i) {
    gdjs.NewSceneCode.GDziscaleObjects2[i].getBehavior("Tween").addObjectScaleXTween("he", 1, "bounce", 100, false, false);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("ziscale"), gdjs.NewSceneCode.GDziscaleObjects1);

gdjs.NewSceneCode.condition0IsTrue_0.val = false;
gdjs.NewSceneCode.condition1IsTrue_0.val = false;
{
gdjs.NewSceneCode.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.NewSceneCode.mapOfGDgdjs_46NewSceneCode_46GDziscaleObjects1Objects, runtimeScene, true, true);
}if ( gdjs.NewSceneCode.condition0IsTrue_0.val ) {
{
{gdjs.NewSceneCode.conditionTrue_1 = gdjs.NewSceneCode.condition1IsTrue_0;
gdjs.NewSceneCode.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(6805620);
}
}}
if (gdjs.NewSceneCode.condition1IsTrue_0.val) {
/* Reuse gdjs.NewSceneCode.GDziscaleObjects1 */
{for(var i = 0, len = gdjs.NewSceneCode.GDziscaleObjects1.length ;i < len;++i) {
    gdjs.NewSceneCode.GDziscaleObjects1[i].getBehavior("Tween").addObjectScaleXTween("he", 0.1, "bounce", 50, false, false);
}
}}

}


};gdjs.NewSceneCode.mapOfGDgdjs_46NewSceneCode_46GDNextObjects2Objects = Hashtable.newFrom({"Next": gdjs.NewSceneCode.GDNextObjects2});
gdjs.NewSceneCode.mapOfGDgdjs_46NewSceneCode_46GDNextObjects2Objects = Hashtable.newFrom({"Next": gdjs.NewSceneCode.GDNextObjects2});
gdjs.NewSceneCode.mapOfGDgdjs_46NewSceneCode_46GDNextObjects1Objects = Hashtable.newFrom({"Next": gdjs.NewSceneCode.GDNextObjects1});
gdjs.NewSceneCode.eventsList6 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("Next"), gdjs.NewSceneCode.GDNextObjects2);

gdjs.NewSceneCode.condition0IsTrue_0.val = false;
{
gdjs.NewSceneCode.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.NewSceneCode.mapOfGDgdjs_46NewSceneCode_46GDNextObjects2Objects, runtimeScene, true, false);
}if (gdjs.NewSceneCode.condition0IsTrue_0.val) {
/* Reuse gdjs.NewSceneCode.GDNextObjects2 */
{for(var i = 0, len = gdjs.NewSceneCode.GDNextObjects2.length ;i < len;++i) {
    gdjs.NewSceneCode.GDNextObjects2[i].setAnimation(2);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Next"), gdjs.NewSceneCode.GDNextObjects2);

gdjs.NewSceneCode.condition0IsTrue_0.val = false;
{
gdjs.NewSceneCode.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.NewSceneCode.mapOfGDgdjs_46NewSceneCode_46GDNextObjects2Objects, runtimeScene, true, true);
}if (gdjs.NewSceneCode.condition0IsTrue_0.val) {
/* Reuse gdjs.NewSceneCode.GDNextObjects2 */
{for(var i = 0, len = gdjs.NewSceneCode.GDNextObjects2.length ;i < len;++i) {
    gdjs.NewSceneCode.GDNextObjects2[i].setAnimation(0);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Next"), gdjs.NewSceneCode.GDNextObjects1);

gdjs.NewSceneCode.condition0IsTrue_0.val = false;
gdjs.NewSceneCode.condition1IsTrue_0.val = false;
{
gdjs.NewSceneCode.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.NewSceneCode.mapOfGDgdjs_46NewSceneCode_46GDNextObjects1Objects, runtimeScene, true, false);
}if ( gdjs.NewSceneCode.condition0IsTrue_0.val ) {
{
gdjs.NewSceneCode.condition1IsTrue_0.val = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left");
}}
if (gdjs.NewSceneCode.condition1IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.stopGame(runtimeScene);
}}

}


};gdjs.NewSceneCode.eventsList7 = function(runtimeScene) {

{



}


{


{
}

}


};gdjs.NewSceneCode.eventsList8 = function(runtimeScene) {

{


gdjs.NewSceneCode.eventsList0(runtimeScene);
}


{


gdjs.NewSceneCode.eventsList1(runtimeScene);
}


{


gdjs.NewSceneCode.eventsList3(runtimeScene);
}


{


gdjs.NewSceneCode.eventsList4(runtimeScene);
}


{


gdjs.NewSceneCode.eventsList5(runtimeScene);
}


{


gdjs.NewSceneCode.eventsList6(runtimeScene);
}


{


gdjs.NewSceneCode.eventsList7(runtimeScene);
}


};

gdjs.NewSceneCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.NewSceneCode.GDspriteObjects1.length = 0;
gdjs.NewSceneCode.GDspriteObjects2.length = 0;
gdjs.NewSceneCode.GDspriteObjects3.length = 0;
gdjs.NewSceneCode.GDmessageObjects1.length = 0;
gdjs.NewSceneCode.GDmessageObjects2.length = 0;
gdjs.NewSceneCode.GDmessageObjects3.length = 0;
gdjs.NewSceneCode.GDNewSpriteObjects1.length = 0;
gdjs.NewSceneCode.GDNewSpriteObjects2.length = 0;
gdjs.NewSceneCode.GDNewSpriteObjects3.length = 0;
gdjs.NewSceneCode.GDNewSprite2Objects1.length = 0;
gdjs.NewSceneCode.GDNewSprite2Objects2.length = 0;
gdjs.NewSceneCode.GDNewSprite2Objects3.length = 0;
gdjs.NewSceneCode.GDHouseSmall2Objects1.length = 0;
gdjs.NewSceneCode.GDHouseSmall2Objects2.length = 0;
gdjs.NewSceneCode.GDHouseSmall2Objects3.length = 0;
gdjs.NewSceneCode.GDHouseSmallAlt1Objects1.length = 0;
gdjs.NewSceneCode.GDHouseSmallAlt1Objects2.length = 0;
gdjs.NewSceneCode.GDHouseSmallAlt1Objects3.length = 0;
gdjs.NewSceneCode.GDMeteorSquarePlainObjects1.length = 0;
gdjs.NewSceneCode.GDMeteorSquarePlainObjects2.length = 0;
gdjs.NewSceneCode.GDMeteorSquarePlainObjects3.length = 0;
gdjs.NewSceneCode.GDdebug1Objects1.length = 0;
gdjs.NewSceneCode.GDdebug1Objects2.length = 0;
gdjs.NewSceneCode.GDdebug1Objects3.length = 0;
gdjs.NewSceneCode.GDdebug2Objects1.length = 0;
gdjs.NewSceneCode.GDdebug2Objects2.length = 0;
gdjs.NewSceneCode.GDdebug2Objects3.length = 0;
gdjs.NewSceneCode.GDziscaleObjects1.length = 0;
gdjs.NewSceneCode.GDziscaleObjects2.length = 0;
gdjs.NewSceneCode.GDziscaleObjects3.length = 0;
gdjs.NewSceneCode.GDNextObjects1.length = 0;
gdjs.NewSceneCode.GDNextObjects2.length = 0;
gdjs.NewSceneCode.GDNextObjects3.length = 0;

gdjs.NewSceneCode.eventsList8(runtimeScene);
return;

}

gdjs['NewSceneCode'] = gdjs.NewSceneCode;
