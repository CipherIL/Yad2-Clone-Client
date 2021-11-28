import Cookies from 'js-cookie';
import { checkIfValidAuthToken } from '../server/user.requests';

const reloadUserContext = (user,setUser) => {
    if(user) return;
    const authToken = Cookies.get('AuthToken');
    if(authToken) {
        checkIfValidAuthToken()
        .then(res=>{
            setUser(res.data);
        })
        .catch(err=>{
            Cookies.remove('AuthToken');
        })
    }
}

export default reloadUserContext;