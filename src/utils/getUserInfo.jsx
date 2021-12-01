import Cookies from 'js-cookie';
import { checkIfValidAuthToken } from '../server/user.requests';

const getUserInfo = async () => {
    const authToken = Cookies.get('AuthToken');
    if(authToken) {
        const res = await checkIfValidAuthToken();
        return res.data;
    }
    else return undefined
}

export default getUserInfo;