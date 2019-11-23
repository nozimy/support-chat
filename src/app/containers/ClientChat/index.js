import Component from '@frame/Component';
import template from './index.handlebars';
import './index.scss';

const messages = [
	{isSender: true, message: 'Hekki'},
	{isSender: false, message: 'Hekki'},
];

export default class ClientChat extends Component {
	constructor({ children = [], ...props }) {
		super(props);

		this.data = {
			children,
			messages
		};
	}

	render() {
		this.html = template({
			...this.props,
			...this.data,
		});

		this.attachToParent();

		return this.html;
	}

	postRender() {
		this.sendBtn = this.el.querySelector('.send-message-button');
		this.sendBtn.addEventListener('click', this.send);
		this.textArea = this.el.querySelector('.message-textarea');
		this.textArea.addEventListener('keypress', this.onKeyPress);
	}

	onKeyPress = event => {
		const code = (event.keyCode ? event.keyCode : event.which);

		if (code === 13) {
			event.preventDefault();
			this.send(event);
			return;
		}
	};

	send = event => {
		event.preventDefault();
		this.addMessage(this.textArea.value);
		this.textArea.focus();
	};

	addMessage = message => {
		this.data.messages.push({
			isSender: true,
			message
		});

		this.stateChanged();
	};
}
