import GamePsuedoServer from './GamePsuedoServer.js';
import Hash from './Hash.js';
import Key from './Key.js';
import KeyboardHandler from './KeyboardHandler.js';
import {KeyNamesByIndex} from './KeyNamesByIndex.js';
import MouseHandler from './MouseHandler.js';
import Player from './Player.js';
import {} from './NativeExtenders.js';

export default class GameClient {
    constructor(clientID, online) {
        function loopUntilAuth(ms, scope){
            if(firebase.auth().currentUser != null){
                firebase.database().ref(`users/${firebase.auth().currentUser.uid}`).once('value', (v)=>{
                    if(v.val() != null){
                        scope.clientID = v.val().clientID || clientID;
                        scope.player = new Player(scope.clientID, new fabric.Point(50, 50));
                        scope.hosting = false;
                        scope.connected = false;
                        scope.assign = Object.assign;
                        scope.Overlay;
                        scope.avatar;
                    }else{
                        scope.clientID = clientID;
                        scope.player = new Player(scope.clientID, new fabric.Point(50, 50));
                        scope.hosting = false;
                        scope.connected = false;
                        scope.assign = Object.assign;
                        scope.Overlay;
                        scope.avatar;
                    }
                });
            }else{
                setTimeout(loopUntilAuth, ms, ms, scope);
            }
        }
        if(online == true){
            loopUntilAuth(100, this);
        }else{
            this.clientID = clientID;
            this.player = new Player(this.clientID, new fabric.Point(50, 50));
            this.hosting = false;
            this.connected = false;
            this.assign = Object.assign;
            this.Overlay;
            this.avatar;
        }
        this.paused = false;
    }
    init(Overlay){
        this.avatar = new fabric.Rect({
            left: 100,
            top: 100,
            fill: config.debug?'red':'green',
            width: 20,
            height: 20,
            selectable: false
        });
        this.Overlay = Overlay;
        this.Overlay.add(this.avatar);
    }
    serialize(){
        let serializedData = JSON.parse(JSON.stringify(this));
        return serializedData;
    }
    togglePauseMenu(){
        this.paused = !this.paused;
    }
    pullData(){
        let self = this;
        async function __syncPlayers__(p){
            if(config.view == 'game'){
                let players = p.val();
                delete players[self.clientID];
                self.Overlay._objects.forEach((o)=>{
                    if(o.type == 'playerrect'){
                        self.Overlay.remove(o);
                    }
                });
                Object.values(players).forEach((_p_)=>{
                    let tempPlayer = new fabric.Rect(_p_.avatar);
                    tempPlayer.type = 'playerrect';
                    self.Overlay.add(tempPlayer)
                });
            }else{                
                firebase.database().ref(`servers/${self.Server.serverID}/members`).off('value', __syncPlayers__);
            }
        }
        if(this.connected && !this.hosting && this.Server){
            this.Server.setUpstream(this.Server.serverID);
            firebase.database().ref(`servers/${this.Server.serverID}/members`).on('value', __syncPlayers__);
        }else if(this.connected && this.hosting && this.Server){
            // Future potential for treating host updates differently
            this.Server.setUpstream(this.Server.serverID);
        }
    }
    connect(server){
        if(!this.connected){
            firebase.database().ref(`servers/${server}`).once('value', (v)=>{
                if(v.val() != null){
                    this.Server = new GamePsuedoServer(v.val().hostID, v.val().serverID);
                    this.connected = true;
                    this.pullData();
                }else{
                    console.error(`Server ${server} not found!`);
                }
            });
        }
    }
    disconnect(){
        if(this.connected && this.Server){
            firebase.database().ref(`servers/${this.Server.serverID}/members/${this.clientID}`).set(null);
            this.Server = undefined;
            this.connected = false;
        }
    }
    host(){
        if(!this.hosting){
            this.hosting = true;
            this.Server = new GamePsuedoServer(this.clientID, Hash(256));
            firebase.database().ref(`servers/${this.Server.serverID}`).update({
                hostID: this.Server.hostID,
                serverID: this.Server.serverID,
                members: {}
            });
            this.connect(this.Server.serverID);
        }
    }
    disband(){
        if(this.hosting && this.Server){
            firebase.database().ref(`servers/${this.Server.serverID}`).set(null);
            this.disconnect();
            this.hosting = false;
        }
    }
    update(){
        let a = this.avatar.canvas.vptCoords.br;
        if(a){
            this.avatar.setPositionByOrigin(this.player.pos,'center','center');
            let serverData = this.serialize();
            delete serverData.Server
            if(this.connected && this.Server){
                firebase.database().ref(`servers/${this.Server.serverID}/members/${this.clientID}`).update(serverData);
            }
            if(firebase.auth().currentUser != null){
                firebase.database().ref(`users/${firebase.auth().currentUser.uid}`).update(serverData);
            }
        }
    }
    renderOthers(){

    }
    updateDB(){
        if(firebase.auth().currentUser != null){
            firebase.database().ref(`users/${firebase.auth().currentUser.uid}`).update(this.serialize());
        }
    }
}