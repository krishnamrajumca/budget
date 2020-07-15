const mobileReg = /^\d{10}$/;
const isMobileNumber = (mobile)=>{
    if(mobile.length === 0)
        return true
    if(mobile.match(mobileReg)){
        return true
    }
    return false
}

export  {
    isMobileNumber
}