/**
 * * Viết hàm randomOTP(length) trả về 1 OTP (One Time Password) có độ dài length.
 * * nếu không truyền length thì mặc định length = 6
 */

function randomOTP(length) {
    let otp = ""
    for(let i = 0; i< length; i++){
        otp += Math.floor(Math.random()*10)
    }
    return otp
}
console.log(randomOTP(length=6))