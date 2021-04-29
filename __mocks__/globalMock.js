jest.mock('global', () => ({
    ...global,
    WebSocket: function Websocket() {},
}));