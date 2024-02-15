let user = localStorage.getItem('user')

export function checkIfUserLogged() {
    if (!user) {
        location.assign('/pages/signin/')
    }
}