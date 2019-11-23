import AjaxModule from '@modules/ajax';
import config from '../config';
import store from '@modules/store';
import AuthService from '@services/AuthService';

export default class AccountService {
	static GetAccount() {
		return AjaxModule.get(config.urls.account, {
			headers: AuthService.getCsrfHeader(),
		}).then((res) => {
			store.setState({
				user: res,
			});
			AccountService.PutUserToLocalStorage();

			return res;
		});
	}

	static isClient() {
		const user = store.get(['user']);
		return user ? user.type === config.accountTypes.client : false;
	}

	static LoadUserFromLocalStorage() {
		const user = localStorage.getItem('user');
		store.setState({
			user: JSON.parse(user),
		});
	}

	static PutUserToLocalStorage() {
		const user = store.get(['user']);
		localStorage.setItem('user', JSON.stringify(user));
	}
}
