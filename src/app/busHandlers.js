import bus from '@frame/bus';
import { busEvents } from '@app/constants';
import AuthService from '@services/AuthService';
import AccountService from '@services/AccountService';

bus.on(busEvents.ACCOUNT_GET, () => {
	AccountService.GetAccount().then(() => {
		bus.emit(busEvents.USER_UPDATED);
	});
});

bus.on(busEvents.ON_PAGE_LOAD, () => {
	AuthService.FetchCsrfToken().then((response) => {
		bus.emit(busEvents.ACCOUNT_GET);
	});
});
