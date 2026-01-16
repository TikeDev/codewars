var min = function(list){
    list.sort((a, b) => a-b);
    
    return list[0];
}
​
var max = function(list){
    list.sort((a, b) => a-b);
​
    return list[list.length-1];
}