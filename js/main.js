(async function Main(config) {
    const KeyNamesByIndex = [
        "", // [0]
        "", // [1]
        "", // [2]
        "CANCEL", // [3]
        "", // [4]
        "", // [5]
        "HELP", // [6]
        "", // [7]
        "BACK_SPACE", // [8]
        "TAB", // [9]
        "", // [10]
        "", // [11]
        "CLEAR", // [12]
        "ENTER", // [13]
        "ENTER_SPECIAL", // [14]
        "", // [15]
        "SHIFT", // [16]
        "CONTROL", // [17]
        "ALT", // [18]
        "PAUSE", // [19]
        "CAPS_LOCK", // [20]
        "KANA", // [21]
        "EISU", // [22]
        "JUNJA", // [23]
        "FINAL", // [24]
        "HANJA", // [25]
        "", // [26]
        "ESCAPE", // [27]
        "CONVERT", // [28]
        "NONCONVERT", // [29]
        "ACCEPT", // [30]
        "MODECHANGE", // [31]
        "SPACE", // [32]
        "PAGE_UP", // [33]
        "PAGE_DOWN", // [34]
        "END", // [35]
        "HOME", // [36]
        "LEFT", // [37]
        "UP", // [38]
        "RIGHT", // [39]
        "DOWN", // [40]
        "SELECT", // [41]
        "PRINT", // [42]
        "EXECUTE", // [43]
        "PRINTSCREEN", // [44]
        "INSERT", // [45]
        "DELETE", // [46]
        "", // [47]
        "0", // [48]
        "1", // [49]
        "2", // [50]
        "3", // [51]
        "4", // [52]
        "5", // [53]
        "6", // [54]
        "7", // [55]
        "8", // [56]
        "9", // [57]
        "COLON", // [58]
        "SEMICOLON", // [59]
        "LESS_THAN", // [60]
        "EQUALS", // [61]
        "GREATER_THAN", // [62]
        "QUESTION_MARK", // [63]
        "AT", // [64]
        "A", // [65]
        "B", // [66]
        "C", // [67]
        "D", // [68]
        "E", // [69]
        "F", // [70]
        "G", // [71]
        "H", // [72]
        "I", // [73]
        "J", // [74]
        "K", // [75]
        "L", // [76]
        "M", // [77]
        "N", // [78]
        "O", // [79]
        "P", // [80]
        "Q", // [81]
        "R", // [82]
        "S", // [83]
        "T", // [84]
        "U", // [85]
        "V", // [86]
        "W", // [87]
        "X", // [88]
        "Y", // [89]
        "Z", // [90]
        "OS_KEY", // [91] Windows Key (Windows) or Command Key (Mac)
        "", // [92]
        "CONTEXT_MENU", // [93]
        "", // [94]
        "SLEEP", // [95]
        "NUMPAD0", // [96]
        "NUMPAD1", // [97]
        "NUMPAD2", // [98]
        "NUMPAD3", // [99]
        "NUMPAD4", // [100]
        "NUMPAD5", // [101]
        "NUMPAD6", // [102]
        "NUMPAD7", // [103]
        "NUMPAD8", // [104]
        "NUMPAD9", // [105]
        "MULTIPLY", // [106]
        "ADD", // [107]
        "SEPARATOR", // [108]
        "SUBTRACT", // [109]
        "DECIMAL", // [110]
        "DIVIDE", // [111]
        "F1", // [112]
        "F2", // [113]
        "F3", // [114]
        "F4", // [115]
        "F5", // [116]
        "F6", // [117]
        "F7", // [118]
        "F8", // [119]
        "F9", // [120]
        "F10", // [121]
        "F11", // [122]
        "F12", // [123]
        "F13", // [124]
        "F14", // [125]
        "F15", // [126]
        "F16", // [127]
        "F17", // [128]
        "F18", // [129]
        "F19", // [130]
        "F20", // [131]
        "F21", // [132]
        "F22", // [133]
        "F23", // [134]
        "F24", // [135]
        "", // [136]
        "", // [137]
        "", // [138]
        "", // [139]
        "", // [140]
        "", // [141]
        "", // [142]
        "", // [143]
        "NUM_LOCK", // [144]
        "SCROLL_LOCK", // [145]
        "WIN_OEM_FJ_JISHO", // [146]
        "WIN_OEM_FJ_MASSHOU", // [147]
        "WIN_OEM_FJ_TOUROKU", // [148]
        "WIN_OEM_FJ_LOYA", // [149]
        "WIN_OEM_FJ_ROYA", // [150]
        "", // [151]
        "", // [152]
        "", // [153]
        "", // [154]
        "", // [155]
        "", // [156]
        "", // [157]
        "", // [158]
        "", // [159]
        "CIRCUMFLEX", // [160]
        "EXCLAMATION", // [161]
        "DOUBLE_QUOTE", // [162]
        "HASH", // [163]
        "DOLLAR", // [164]
        "PERCENT", // [165]
        "AMPERSAND", // [166]
        "UNDERSCORE", // [167]
        "OPEN_PAREN", // [168]
        "CLOSE_PAREN", // [169]
        "ASTERISK", // [170]
        "PLUS", // [171]
        "PIPE", // [172]
        "HYPHEN_MINUS", // [173]
        "OPEN_CURLY_BRACKET", // [174]
        "CLOSE_CURLY_BRACKET", // [175]
        "TILDE", // [176]
        "", // [177]
        "", // [178]
        "", // [179]
        "", // [180]
        "VOLUME_MUTE", // [181]
        "VOLUME_DOWN", // [182]
        "VOLUME_UP", // [183]
        "", // [184]
        "", // [185]
        "SEMICOLON", // [186]
        "EQUALS", // [187]
        "COMMA", // [188]
        "MINUS", // [189]
        "PERIOD", // [190]
        "SLASH", // [191]
        "BACK_QUOTE", // [192]
        "", // [193]
        "", // [194]
        "", // [195]
        "", // [196]
        "", // [197]
        "", // [198]
        "", // [199]
        "", // [200]
        "", // [201]
        "", // [202]
        "", // [203]
        "", // [204]
        "", // [205]
        "", // [206]
        "", // [207]
        "", // [208]
        "", // [209]
        "", // [210]
        "", // [211]
        "", // [212]
        "", // [213]
        "", // [214]
        "", // [215]
        "", // [216]
        "", // [217]
        "", // [218]
        "OPEN_BRACKET", // [219]
        "BACK_SLASH", // [220]
        "CLOSE_BRACKET", // [221]
        "QUOTE", // [222]
        "", // [223]
        "META", // [224]
        "ALTGR", // [225]
        "", // [226]
        "WIN_ICO_HELP", // [227]
        "WIN_ICO_00", // [228]
        "", // [229]
        "WIN_ICO_CLEAR", // [230]
        "", // [231]
        "", // [232]
        "WIN_OEM_RESET", // [233]
        "WIN_OEM_JUMP", // [234]
        "WIN_OEM_PA1", // [235]
        "WIN_OEM_PA2", // [236]
        "WIN_OEM_PA3", // [237]
        "WIN_OEM_WSCTRL", // [238]
        "WIN_OEM_CUSEL", // [239]
        "WIN_OEM_ATTN", // [240]
        "WIN_OEM_FINISH", // [241]
        "WIN_OEM_COPY", // [242]
        "WIN_OEM_AUTO", // [243]
        "WIN_OEM_ENLW", // [244]
        "WIN_OEM_BACKTAB", // [245]
        "ATTN", // [246]
        "CRSEL", // [247]
        "EXSEL", // [248]
        "EREOF", // [249]
        "PLAY", // [250]
        "ZOOM", // [251]
        "", // [252]
        "PA1", // [253]
        "WIN_OEM_CLEAR", // [254]
        "" // [255]
    ];
    function Hash(hashLength) {
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
    Object.defineProperty(String, 'fromKeyCode', {
        value: function(keyCode){
            return KeyNamesByIndex[keyCode];
        },
        writable: false,
        enumerable: false
    });
    class Key{
        constructor(keyCode){
            this.keyCode = keyCode;
            this.keyName = String.fromKeyCode(this.keyCode);
        }
        get(){
            return this;
        }
    }
    class KeyboardHandler{
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
    class MouseHandler{
        constructor(){

        }
    }
    class GamePsuedoServer {
        constructor(hostID, serverID) {
            this.serverID = serverID;
            this.hostID = hostID;
            this.apply = Object.apply;
        }
        setUpstream(serverID){
            function pullData(data){
                this.apply(data.val());
            }
            firebase.database().ref(`servers/${serverID}`).on('value', pullData);
        }
        update(){

        }
    }
    class Player{
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
    class GameClient {
        constructor(clientID, online) {
            function loopUntilAuth(ms, scope){
                if(firebase.auth().currentUser != null){
                    firebase.database().ref(`users/${firebase.auth().currentUser.uid}`).once('value', (v)=>{
                        if(v.val() != null){
                            scope.clientID = v.val().clientID;
                            scope.player = new Player(scope.clientID, new fabric.Point(50, 50));
                            scope.hosting = false;
                            scope.connected = false;
                            scope.apply = Object.apply;
                            scope.Render;
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
                this.apply = Object.apply;
                this.Render;
                this.avatar;
            }
        }
        init(Render){
            this.avatar = new fabric.Rect({
                left: 100,
                top: 100,
                fill: config.debug?'red':'green',
                width: 20,
                height: 20,
                selectable: true
            });
            this.Render = Render;
            this.Render.add(this.avatar);
        }
        connect(server){
            if(!this.connected){
                firebase.database().ref(`servers/${server}`).once('value', (v)=>{
                    if(v.val() != null){
                        this.Server = new GamePsuedoServer(v.val().hostID, v.val().serverID);
                        this.connected = true;
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
        pullData(){
            if(this.connected && !this.hosting && this.Server){
                this.Server.pullData(this.Server.serverID);
            }
        }
        update(){
            let a = this.avatar.canvas.vptCoords.br;
            if(a){
                this.avatar.setPositionByOrigin(this.player.pos,'center','center');
                if(this.connected && this.Server){
                    firebase.database().ref(`servers/${this.Server.serverID}/members/${this.clientID}`).update(this.player);
                }else if(firebase.auth().currentUser != null){
                    firebase.database().ref(`users/${firebase.auth().currentUser.uid}`).update(JSON.parse(JSON.stringify(this)));
                }
            }
        }
    }
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
    function SetupMenu(Render, UserClient){
        config.view = 'menu';
        Render.clear();
        let MenuButton = new fabric.Textbox('Play',{
            left: window.innerWidth/2,
            top: window.innerHeight/4,
            fill: 'blue',
            selectable: false
        });
        MenuButton.__eventListeners.mousedown
        .push(function(){
            SetupServerBrowser(Render, UserClient);
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
            if(config.view == 'menu'){
                if(firebase.auth().currentUser == null){
                    LogoutButton.visible = false;
                    LoginButton.visible = true;
                }else if(firebase.auth().currentUser != null){
                    LoginButton.visible = false;
                    LogoutButton.visible = true;
                }
            }
        });
        Render.add(MenuButton);
        Render.add(LoginButton);
        Render.add(LogoutButton);
    }
    function SetupServerBrowser(Render, UserClient){
        config.view = 'server';
        Render.clear();
        let BackButton = new fabric.Textbox('Play',{
            left: window.innerWidth/2,
            top: window.innerHeight/4,
            fill: 'blue',
            selectable: false
        });
        BackButton.__eventListeners.mousedown
        .push(function(){
            SetupGame(Render, UserClient);
        });
        Render.add(BackButton);
    }
    function SetupGame(Render, UserClient){
        config.view = 'game';
        Render.clear();
        UserClient.init(Render);
        let MyKeyboard = new KeyboardHandler();
        CreateKeyInputs(MyKeyboard, DefaultKeys);
        MyKeyboard.addEventListener(37, 'keydown', function(e){
            UserClient.player.moveBy(new fabric.Point(-10, 0));

        });
        MyKeyboard.addEventListener(38, 'keydown', function(e){
            UserClient.player.moveBy(new fabric.Point(0, -10));

        });
        MyKeyboard.addEventListener(39, 'keydown', function(e){
            UserClient.player.moveBy(new fabric.Point(10, 0));

        });
        MyKeyboard.addEventListener(40, 'keydown', function(e){
            UserClient.player.moveBy(new fabric.Point(0, 10));
        });
    }
    function App(){
        let UserClient = new GameClient(Hash(128), true);
        let GameRender = new fabric.Canvas('game_canvas');
        window.GameRender = GameRender;
        window.UserClient = UserClient;
        if(config.view == 'menu'){
            SetupMenu(GameRender, UserClient);
        }else if(config.view =='server'){
            SetupServerBrowser(GameRender, UserClient);
        }else if(config.view =='game'){
            SetupGame(GameRender, UserClient);
        }
        function update(){
            GameRender.setDimensions({
                width:window.innerWidth,
                height:window.innerHeight
            });
            if(config.view == 'menu'){

            }else if(config.view == 'server'){
                
            }else if(config.view == 'game'){
                UserClient.update();
            }
            GameRender.renderAndReset();
            requestAnimationFrame(update)
        }
        update();
    }
    window.addEventListener('load', App, {
        once: true
    });
})({
    debug: window.location.search.startsWith('?debug'),
    view: 'menu'
});