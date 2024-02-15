let user = localStorage.getItem('user')
console.log({user});

if(!user) {
    location.assign('/pages/signin/')
}