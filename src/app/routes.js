import ClientChat from '@containers/ClientChat';
import Admin from "@containers/Admin";

const routes = [
	{path: '/', Component: ClientChat},
	{path: '/admin', Component: Admin},
];

export default routes;
