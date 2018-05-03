(function Main() {
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

})();