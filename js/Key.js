import GameClient from './GameClient.js';
import GamePsuedoServer from './GamePsuedoServer.js';
import Hash from './Hash.js';
import KeyboardHandler from './KeyboardHandler.js';
import {KeyNamesByIndex} from './KeyNamesByIndex.js';
import MouseHandler from './MouseHandler.js';
import Player from './Player.js';
import {} from './NativeExtenders.js';

export default class Key{
    constructor(keyCode){
        this.keyCode = keyCode;
        this.keyName = String.fromKeyCode(this.keyCode);
    }
    get(){
        return this;
    }
}