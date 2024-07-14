import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/10.12.1/firebase-auth.js";
import {writeUserData} from '../../../../l4/js/user'

const SignUp = (email, password) => {
    const auth = getAuth();
    createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            // Signed up 
            const user = userCredential.user;

            alert("Đăng ký thành công")
        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            console.log(errorCode, errorMessage);
            alert("Đăng ký thất bại")
        });
}

const SignIn = (email, password) => {
    const auth = getAuth();
    signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            // Signed in 
            const user = userCredential.user;
            console.log(user);
            let infouser = {
                "uid" : user.id,
                "username" : DocumentTimeline.getElementById("username"),
                "email" : user.email
            }
            writeUserData(infoUser)

            alert("Đăng nhập thành công")
            window.location.href = "../html/profile.html"
        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            console.log(errorCode, errorMessage);
            alert("Đăng nhập thất bại")
        });
}

let formSignUp = document.getElementById("signUp")
let formSignIn = document.getElementById("signIn")

formSignUp.addEventListener("submit", (event) => {
    event.preventDefault()
    let email = document.getElementById("emailSignUp").value
    let password = document.getElementById("passwordSignUp").value
    let rePass = document.getElementById("rePassword").value

    if (password == rePass) {
        SignUp(email, password)
    } else {
        alert("Vui lòng kiểm tra lại mật khẩu")
    }
})

formSignIn.addEventListener("submit", (event) => {
    event.preventDefault()
    let email = document.getElementById("emailSignIn").value
    let password = document.getElementById("passwordSignIn").value

    SignIn(email, password)

})