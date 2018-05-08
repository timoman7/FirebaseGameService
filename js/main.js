import {Config} from './Config.js'
import GameClient from './GameClient.js';
import GamePsuedoServer from './GamePsuedoServer.js';
import Hash from './Hash.js';
import Key from './Key.js';
import KeyboardHandler from './KeyboardHandler.js';
import {KeyNamesByIndex} from './KeyNamesByIndex.js';
import MouseHandler from './MouseHandler.js';
import Player from './Player.js';
import {} from './NativeExtenders.js';
(function(){
    let _queryObject = window.location.search.split(/\?|\&/g).reverse();
    let queryObject = {};
    _queryObject.pop();
    _queryObject = _queryObject.reverse();
    _queryObject.forEach((k)=>{
        let kvp = k.split('=');
        queryObject[kvp[0]] = kvp[1];
    });
    window.location.query = queryObject;
})();
(async function Main(){
let DefaultKeys = (function(){
    let __keys__ = [];
    KeyNamesByIndex.forEach((val, ind)=>{
        __keys__.push(new Key(ind));
    });
    return __keys__;
})();
function CreateKeyInputs(_KeyboardHandler, _KeysArray){
    _KeyboardHandler.init(_KeysArray);
}

function login(){
    firebase.auth().signInWithPopup(new firebase.auth.GoogleAuthProvider);
}
function logout(){
    firebase.auth().signOut();
}
function SetupMenu(Overlay, UserClient){
    Config.view = 'menu';
    Overlay.clear();
    let MenuButton = new fabric.Textbox('Play',{
        left: window.innerWidth/2,
        top: window.innerHeight/4,
        fill: 'blue',
        selectable: false
    });
    MenuButton.__eventListeners.mousedown
    .push(function(){
        SetupServerBrowser(Overlay, UserClient);
    });
    let LoginButton = new fabric.Textbox('Login',{
        left: window.innerWidth/2,
        top: window.innerHeight/3,
        fill: 'green',
        selectable: false,
        visible: firebase.auth().currentUser == null
    });
    LoginButton.__eventListeners.mousedown
    .push(function(){
        login();
    });
    let LogoutButton = new fabric.Textbox('Logout',{
        left: window.innerWidth/2,
        top: window.innerHeight/3,
        fill: 'red',
        selectable: false,
        visible: firebase.auth().currentUser != null
    });
    LogoutButton.__eventListeners.mousedown
    .push(function(){
        logout();
    });
    firebase.auth().onAuthStateChanged(function(e){
        if(Config.view == 'menu'){
            if(firebase.auth().currentUser == null){
                LogoutButton.visible = false;
                LoginButton.visible = true;
            }else if(firebase.auth().currentUser != null){
                LoginButton.visible = false;
                LogoutButton.visible = true;
            }
        }
    });
    Overlay.add(MenuButton);
    Overlay.add(LoginButton);
    Overlay.add(LogoutButton);
}
function PauseMenu(Overlay){
    let PM_BG = new fabric.Text('yes',{
        top:20,
        left:20,
        originX: 'center',
        originY: 'center',
        width:100,
        height:100,
        fill:'blue',
        selectable: false
    });
    let PM = new fabric.Group([PM_BG],{
        left: Overlay.width/2,
        top: Overlay.height/2,
        originX: 'center',
        originY: 'center',
        width: 100,
        selectable: false,
        subTargetCheck: true,
        evented: true
    });
    return PM;
}
function createServerButton(serverID, serverInfo, yPos, Overlay, UserClient){
    let xPos = 120;
    let serverText = new fabric.Text('Server:',{
        left: xPos,
        top: 50,
        originX: 'right',
        originY: 'top',
        width: 100,
        fontSize: 18,
        fill: 'blue',
        selectable: false
    });
    let serverTextID = new fabric.Text(`${serverID.match(/.{1,64}/g).join('\n')}`,{
        left: xPos,
        top: 50,
        originX: 'left',
        originY: 'top',
        width: 400,
        fontSize: 18,
        fill: 'blue',
        selectable: false
    });
    let tempButton = new fabric.Textbox('Connect',{
        left: 50,
        top: 45,
        originX: 'right',
        originY: 'top',
        fontSize: 30,
        width: 110,
        fill: 'blue',
        selectable: false,
        evented: true,
        subTargetCheck: true
    });
    let playerCount = new fabric.Text(`${serverInfo.members?Object.values(serverInfo.members).length:'N/A'} player${serverInfo.members?Object.values(serverInfo.members).length==1?'':'s':'s'}`,{
        left: 50,
        top: 80,
        originX: 'right',
        originY: 'top',
        fontSize: 18,
        width: 110,
        fill: 'blue',
        selectable: false,
        evented: true,
        subTargetCheck: true
    });
    tempButton.__eventListeners.mousedown
    .push(function(){
        SetupGame(Overlay, UserClient);
        UserClient.connect(serverID);
        UserClient.pullData();
    });
    let tempGroup = new fabric.Group([tempButton, serverText, serverTextID, playerCount], {
        left: 50,
        top: yPos,
        originX: 'left',
        originY: 'top',
        fill: 'red',
        type: 'serverbutton',
        height: 200,
        width: 800,
        selectable: false,
        evented: true,
        subTargetCheck: true
    }, false);
    return tempGroup;
}
function SetupServerBrowser(Overlay, UserClient){
    Config.view = 'server';
    Overlay.clear();
    let BackButton = new fabric.Textbox('<< Back',{
        left: Overlay.width/2,
        top: 10,
        originX: 'right',
        width: 200,
        fill: 'blue',
        selectable: false
    });
    BackButton.__eventListeners.mousedown
    .push(function(){
        SetupMenu(Overlay, UserClient);
    });
    let HostButton = new fabric.Textbox('Host Server',{
        left: Overlay.width/2,
        top: 10,
        width: 200,
        originX: 'left',
        fill: 'blue',
        selectable: false
    });
    HostButton.__eventListeners.mousedown
    .push(function(){
        SetupGame(Overlay, UserClient);
        UserClient.host();
    });
    function updateServerBrowser(v){
        if(Config.view == 'server'){
            if(v){
                if(v.val){
                    if(v.val() != null){
                        let servers = v.val();
                        let serverIDs = Object.keys(servers);
                        Overlay._objects.forEach((o)=>{
                            if(o.type == 'serverbutton'){
                                Overlay.remove(o);
                            }
                        });
                        serverIDs.forEach((s, i)=>{
                            let sInfo = servers[s];
                            let newBtn = createServerButton(s, sInfo, (i*100)+40, Overlay, UserClient);
                            Overlay.add(newBtn);
                        });
                    }
                }
            }
        }else{
            firebase.database().ref('servers').off('value', updateServerBrowser);
        }
    }
    let passThrough = false;
    firebase.auth().onAuthStateChanged((a)=>{
        if(firebase.auth().currentUser != null && !passThrough){
            firebase.database().ref('servers').on('value', updateServerBrowser);
            passThrough = true;
        }
    });
    Overlay.add(BackButton);
    Overlay.add(HostButton);
}
function SetupGame(Overlay, UserClient){
    Config.view = 'game';
    Overlay.clear();
    let pauseMenu = PauseMenu(Overlay);
    UserClient.init(Overlay);
    GameOverlay.add(pauseMenu);
    pauseMenu.visible = UserClient.paused;
    window.pauseMenu = pauseMenu;
    let MyKeyboard = new KeyboardHandler();
    CreateKeyInputs(MyKeyboard, DefaultKeys);
    MyKeyboard.addEventListener(37, 'keydown', function(e){
        if(!UserClient.paused){
            UserClient.player.moveBy(new fabric.Point(-10, 0));
        }
    });
    MyKeyboard.addEventListener(38, 'keydown', function(e){
        if(!UserClient.paused){
            UserClient.player.moveBy(new fabric.Point(0, -10));
        }
    });
    MyKeyboard.addEventListener(39, 'keydown', function(e){
        if(!UserClient.paused){
            UserClient.player.moveBy(new fabric.Point(10, 0));
        }
    });
    MyKeyboard.addEventListener(40, 'keydown', function(e){
        if(!UserClient.paused){
            UserClient.player.moveBy(new fabric.Point(0, 10));
        }
    });
    MyKeyboard.addEventListener(27, 'keydown', function(e){
        UserClient.togglePauseMenu();
    });
}
function App(){
    let UserClient = new GameClient(Hash(128), true);
    let GameOverlay = new fabric.Canvas('game_canvas');
    window.GameOverlay = GameOverlay;
    window.UserClient = UserClient;
    if(Config.view == 'menu'){
        SetupMenu(GameOverlay, UserClient);
    }else if(Config.view =='server'){
        SetupServerBrowser(GameOverlay, UserClient);
    }else if(Config.view =='game'){
        SetupGame(GameOverlay, UserClient);
    }
    function update(){
        GameOverlay.setDimensions({
            width:window.innerWidth,
            height:window.innerHeight
        });
        if(Config.view == 'menu'){

        }else if(Config.view == 'server'){
            
        }else if(Config.view == 'game'){
            UserClient.update();
            pauseMenu.visible = UserClient.paused;
        }
        UserClient.updateDB();
        GameOverlay.renderAndReset();
        requestAnimationFrame(update)
    }
    update();
}
window.addEventListener('load', App, {
    once: true
});
})();