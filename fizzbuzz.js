/* Fizzbuzz problem outputs 'fizz' if the input number is divisible by 3,
   'buzz' if the number is divisible by 5, 'fizzbuzz' if it is divisible by 3 and 5
   and returns the number itself if not divisible by either. */

function fizzbuzz(n) {
    ret = '';
    ret += (n % 3 == 0 ? 'fizz' : '')  
    ret += (n % 5 == 0 ? 'buzz' : '')  
    console.log(ret.length > 0 ? ret : n)
}

fizzbuzz(2)
fizzbuzz(3)
fizzbuzz(4)
fizzbuzz(5)
fizzbuzz(15)
fizzbuzz(27)
fizzbuzz(90)
fizzbuzz(91)
