(function Main(config) {
    function Hash(hashLength) {
        let rv = '';
        for (let i = 0; i < hashLength || 256; i++) {
            if (Math.random() > 0.5) {
                rv += String.fromCharCode((65 + Math.round(Math.random() * 25)) + (Math.round(Math.random()) * 32));
            } else {
                rv += '' + Math.round(Math.random() * 9);
            }
        }
        return rv;
    }
    class GameClient {
        constructor(clientID) {
            this.clientID = clientID;
        }
    }
    class GamePsuedoServer {
        constructor(serverID, hostID) {
            this.serverID = serverID;
            this.hostID = hostID;
        }
    }
    function Test(){
        let GameRender = new fabric.Canvas('game_canvas');
        let rect = new fabric.Rect({
            left: 100,
            top: 100,
            fill: 'red',
            width: 20,
            height: 20,
            selectable: true
        });
        GameRender.add(rect);
    }
    function App(){
        let GameRender = new fabric.Canvas('game_canvas');
        let rect = new fabric.Rect({
            left: 100,
            top: 100,
            fill: 'green',
            width: 20,
            height: 20,
            selectable: true
        });
        GameRender.add(rect);
    }
    window.addEventListener('load', config.debug?Test:App, {
        once: true
    });
})({
    debug: window.location.search.startsWith('?debug')
});