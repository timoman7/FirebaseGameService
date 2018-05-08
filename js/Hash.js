import {Config} from './config.js';
import GameClient from './GameClient.js';
import GamePsuedoServer from './GamePsuedoServer.js';
import Key from './Key.js';
import KeyboardHandler from './KeyboardHandler.js';
import {KeyNamesByIndex} from './KeyNamesByIndex.js';
import MouseHandler from './MouseHandler.js';
import Player from './Player.js';
import {} from './NativeExtenders.js';

export default function Hash(hashLength) {
    let rv = '';
    hashLength = hashLength || 256;
    for (let i = 0; i < hashLength; i++) {
        if (Math.random() > 0.5) {
            rv += String.fromCharCode((65 + Math.round(Math.random() * 25)) + (Math.round(Math.random()) * 32));
        } else {
            rv += '' + Math.round(Math.random() * 9);
        }
    }
    return rv;
}