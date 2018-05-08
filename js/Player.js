import GameClient from './GameClient.js';
import GamePsuedoServer from './GamePsuedoServer.js';
import Hash from './Hash.js';
import Key from './Key.js';
import KeyboardHandler from './KeyboardHandler.js';
import {KeyNamesByIndex} from './KeyNamesByIndex.js';
import MouseHandler from './MouseHandler.js';
import {} from './NativeExtenders.js';

export default class Player{
    constructor(playerID, pos){
        this.playerID = playerID;
        this.pos = pos;
    }
    moveBy(dPos){
        this.pos = this.pos.add(dPos);
    }
    moveTo(newPos){
        this.pos.setFromPoint(newPos);
    }
}