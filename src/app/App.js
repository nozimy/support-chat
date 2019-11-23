import './App.scss'
import Component from '@frame/Component';
import template from './App.handlebars';
// import bus from '@frame/bus';
// import { busEvents } from '@app/constants';

class AppComponent extends Component {
	constructor({ ...props }) {
		super(props);
	}

	render() {
		this.data = {
		};

		this.html = template(this.data);
		this.attachToParent();

		return this.html;
	}

	postRender() {
		// bus.emit(busEvents.ON_PAGE_LOAD);
	}
}

export default AppComponent;
