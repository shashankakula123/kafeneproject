const isLoggedIn = () => {
    if (!accessLocStored('login')) {
        window.location.href = "/kafeneproject/index.html"
    }
}

const loggingOut = () => {
    localStorage.clear()
    window.location.href = '/kafeneproject/index.html'
}



const initializingToLocal = () => accessLocStored('login') && window.location.replace('/kafeneproject/order.html')
const accessLocStored = key => localStorage.getItem(key);
const settingLocalStrg = (key, val) => localStorage.setItem(key, JSON.stringify(val))
