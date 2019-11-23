import './App.scss'
import Component from '@frame/Component';
import template from './App.handlebars';
import bus from '@frame/bus';
import { busEvents } from '@app/constants';
import AuthService from "@services/AuthService";

class AppComponent extends Component {
	constructor({...props}) {
		super(props);

		// const loggedIn = AuthService.isLoggedIn();

		// this.data = {
		// 	loggedIn
		// };

		// bus.on(busEvents.USER_UPDATED, this.userUpdated);
	}

	render() {
		this.data = {};

		this.html = template(this.data);
		this.attachToParent();

		return this.html;
	}

	postRender() {
		bus.emit(busEvents.ON_PAGE_LOAD);
	}


}

export default AppComponent;
