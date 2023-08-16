import Cookies from 'js-cookie'

export const isTokenExists = () => {
    const authToken = Cookies.get('TOKEN_AUTH');
    return !!authToken;
}
