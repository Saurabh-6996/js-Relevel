function playChildren(temp, israining) {

    if (temp >= 20 && temp <= 25 && !isnotraining) {
        console.log("children will play")
    } else if (temp >= 18 && temp <= 20 && israining) {
        console.log("children will not play")

    } else {
        console.log("invalid")
    }

}


playChildren(22, false)
playChildren(18, true)
playChildren(40, true)