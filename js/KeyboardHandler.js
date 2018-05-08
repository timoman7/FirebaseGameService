import GameClient from './GameClient.js';
import GamePsuedoServer from './GamePsuedoServer.js';
import Hash from './Hash.js';
import Key from './Key.js';
import {KeyNamesByIndex} from './KeyNamesByIndex.js';
import MouseHandler from './MouseHandler.js';
import Player from './Player.js';
import {} from './NativeExtenders.js';

export default class KeyboardHandler{
    constructor(){
        this.keys = [];
        this.EventListeners = {};
    }
    init(keys){
        this.keys = keys;
        this.EventListeners = (function(_this){
            let tKeys = Object.assign({},_this.keys.map((k,v)=>new Object));
            return tKeys;
        })(this);
    }
    addEventListener(keyCode, eventName, fn, options){
        function tempFunction(e){
            if(e.keyCode == keyCode){
                if(options){
                    if(options.preventDefault){
                        e.preventDefault();
                    }
                }
                fn(e);
            }
        }
        window.addEventListener(eventName, tempFunction, options);
        if(this.EventListeners[keyCode][eventName] == undefined){
            this.EventListeners[keyCode][eventName] = [];
        }
        this.EventListeners[keyCode][eventName].push(tempFunction);
        return tempFunction;
    }
    removeEventListener(keyCode, eventName, fn){
        window.removeEventListener(eventName, fn);
        if(this.EventListeners[keyCode] != undefined){
            if(this.EventListeners[keyCode][eventName] != undefined){
                this.EventListeners[keyCode][eventName].filter((f)=>{
                    return f != fn;
                });
            }
        }
    }
    getEventListeners(keyCode){
        return this.EventListeners[keyCode];
    }
}