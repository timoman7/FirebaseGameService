import GameClient from './GameClient.js';
import Hash from './Hash.js';
import Key from './Key.js';
import KeyboardHandler from './KeyboardHandler.js';
import {KeyNamesByIndex} from './KeyNamesByIndex.js';
import MouseHandler from './MouseHandler.js';
import Player from './Player.js';
import {} from './NativeExtenders.js';

export default class GamePsuedoServer {
    constructor(hostID, serverID) {
        this.serverID = serverID;
        this.hostID = hostID;
    }
    extend(obj){
        for(let prop in obj){
            let val = obj[prop];
            this[prop] = val;
        }
    }
    setUpstream(serverID){
        let self = this;
        function pullData(data){
            self.extend(data.val());
        }
        firebase.database().ref(`servers/${serverID}`).on('value', pullData);
    }
    update(){

    }
}