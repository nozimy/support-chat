import '@assets/scss/main.scss';
import AppComponent from './app/App';
import Frame from '@frame/frame';
import {Router} from '@modules/router';
import routes from '@app/routes';
import '@app/busHandlers';
import Socket from "@modules/socket";
// import AccountService from '@services/AccountService'; // !Нужно обязательно импортировать модуль чтобы подключить обработчики событий для bus

// AccountService.LoadUserFromLocalStorage();

Socket.init('fwork-support.herokuapp.com');

export const router = new Router(document.getElementById('root'), {
	outletName: 'router-outlet',
});
router.register(routes);

Frame.bootstrap(AppComponent, document.getElementById('root'), router);
