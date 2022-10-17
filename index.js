




function reverseNum() {

    let num = document.getElementById("input").value;
    let lastDigit;
    let rev = 0;

    while (num != 0) {
        lastDigit = num % 10;
        rev = rev * 10 + lastDigit;
        num = Math.floor(num / 10);
    }
    document.getElementById("para").innerHTML = "The reverse number is : " + rev;

}