import Component from '@frame/Component';
import template from './index.handlebars';
// import './index.scss';

export default class Admin extends Component {
	constructor({ children = [], ...props }) {
		super(props);

		this.data = {
			children,
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
}
