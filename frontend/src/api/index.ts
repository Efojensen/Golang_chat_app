const socket = new WebSocket("ws://localhost:8080/ws");

const connect = (cb: (sth: MessageEvent<string>) => void) => {
    console.log("Attempting Connection...");

    socket.onopen = () => {
        console.log("Successfully Connected");
    };

    socket.onmessage = msg => {
        console.log(msg);
        cb(msg);
    };

    socket.onclose = event => {
        console.log("Socket Closed Connection: ", event)
    };

    socket.onerror = error => {
        console.log("Socket Error: ", error);
    };
};

const sendMsg = (msg: string): void => {
    console.log("sending msg: ", msg);
    socket.send(msg);
}

export { connect, sendMsg };