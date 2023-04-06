// Given two strings s and t, return true if they are equal when both are typed into empty text editors. '#' means a backspace character.

// Note that after backspacing an empty text, the text will continue empty.

 

// Example 1:

// Input: s = "ab#c", t = "ad#c"
// Output: true
// Explanation: Both s and t become "ac".
// Example 2:

// Input: s = "ab##", t = "c#d#"
// Output: true
// Explanation: Both s and t become "".
// Example 3:

// Input: s = "a#c", t = "b"
// Output: false
// Explanation: s becomes "c" while t becomes "b".


var backspaceCompare = function(s, t) {
    return data(s) === data(t)
};

var data = function(value){
    var result="";
    var backspace=0;

    for(i=value.length-1; i>=0; i--){
        if(value[i] === "#"){
            backspace += 1;
        }else if(backspace>0) {
           backspace--
        }else{
            result = value[i] + result
        }
    }
    return result;
}