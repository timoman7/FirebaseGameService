export function doThingWhenCan(thingContainer, thing, doThing, ms){
    if(thingContainer[thing] != undefined){
        doThing();
    }else{
        setTimeout(arguments.callee, ms, thingContainer, thing, doThing, ms);
    }
}