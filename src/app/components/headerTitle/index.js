import Component from '@frame/Component';
import template from './index.handlebars';
import './index.scss';

export default class HeaderTitle extends Component {
	constructor({title = "", ...props}) {
		super(props);

		this.data = {
			title,
		};
	}

	render() {

		this.html = template({
			...this.props,
			...this.data,
		});

		return this.html;
	}
}
