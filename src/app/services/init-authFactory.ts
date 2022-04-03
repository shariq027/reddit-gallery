
export function initAuthFactory() {
    return () => {
        const formdata = new FormData();
        formdata.append("refresh_token", "a156d08f25aea00652f55d1202ef60855a82b893");
        formdata.append("client_id", "a4586c0fa243c8f");
        formdata.append("client_secret", "222b21ce149ad67672765e318bd58010a033c906");
        formdata.append("grant_type", "refresh_token");
        const requestOptions = {
            method: 'POST',
            body: formdata
        };
        fetch("https://api.imgur.com/oauth2/token", requestOptions)
            .then(response => response.json())
            .then(result => {
                const token = result['access_token'];
                const refresh_token = result['refresh_token'];
                localStorage.removeItem('token');
                localStorage.setItem('token', token);
                localStorage.setItem('refresh_token', refresh_token);
            })
            .catch(error => console.log('error', error));
    }
}