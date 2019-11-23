import bus from '@frame/bus';

class Socket {
	constructor() {
		this.ws = null;
		this.listeners = {};
	}

	init = url => {
		this.ws = new WebSocket(`wss://${url}`);
		this.ws.addEventListener('open', this.onOpen);
		this.ws.addEventListener('message', this.onMessage);
		this.ws.addEventListener('error', this.onError);
		this.ws.addEventListener('close', this.onClose);
	};

	onOpen = () => {

	};

	onMessage = () => {

	};

	onError = () => {

	};

	onClose = () => {

	};

	send = (action, payload) => {
		const data = JSON.stringify({
			action,
			payload
		});

		this.ws.send(data);
	};

	subscribe = (action, callback) => {
		bus.on(action, callback);
	};

	off(action, callback) {
		bus.off(action, callback);
	}
}

export default new Socket();
