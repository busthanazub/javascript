function Palindrome(str) {
    const len = str.length;
    for (let i = 0; i < len / 2; i++) {

       
        if (str[i] !== str[len-1-i]) {
            return 'It is not a palindrome';
        }
    }
    return 'It is a palindrome';
}
let str="malayalam"
console.log(Palindrome(str));
