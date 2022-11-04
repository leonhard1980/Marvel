function isTokenValid(token){
    let currentData = new Date();
    if(token > currentData){
        return false
    } else {
        return true
    }
}

export default isTokenValid;
