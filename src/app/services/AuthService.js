import AjaxModule from '@modules/ajax';
import config from '../config';
import store from '@modules/store';
import AccountService from '@services/AccountService';
import { CSRF_TOKEN_NAME } from '@app/constants';

export default class AuthService {
	static isLoggedIn() {
		return !!store.get(['user']);
	}

	static FetchCsrfToken() {
		return AjaxModule.get(config.urls.csrfToken).then((res) => {
			localStorage.setItem(CSRF_TOKEN_NAME, res[CSRF_TOKEN_NAME]);
			store.setState({
				[CSRF_TOKEN_NAME]: res[CSRF_TOKEN_NAME],
			});

			return res[CSRF_TOKEN_NAME];
		});
	}

	static GetCsrfToken() {
		return localStorage.getItem(CSRF_TOKEN_NAME);
		// return store.get([CSRF_TOKEN_NAME]);
	}

	static getCsrfHeader() {
		return {
			[CSRF_TOKEN_NAME]: AuthService.GetCsrfToken(),
		};
	}
}
