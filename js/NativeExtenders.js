import {Config} from './config.js';
import GameClient from './GameClient.js';
import GamePsuedoServer from './GamePsuedoServer.js';
import Hash from './Hash.js';
import Key from './Key.js';
import KeyboardHandler from './KeyboardHandler.js';
import {KeyNamesByIndex} from './KeyNamesByIndex.js';
import MouseHandler from './MouseHandler.js';
import Player from './Player.js';

export default (function(){
    Object.defineProperty(String, 'fromKeyCode', {
        value: function(keyCode){
            return KeyNamesByIndex[keyCode];
        },
        writable: false,
        enumerable: false
    });
    Object.defineProperty(fabric.Group.prototype, 'empty', {
        value: function(){
            this.getObjects().forEach((o)=>{
                this.remove(o);
            });
        },
        writable: false,
        enumerable: false
    });
})();