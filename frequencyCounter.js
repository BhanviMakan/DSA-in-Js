function same(arr1,arr2){
    if(arr2.length!=arr1.length){
        return false;
    }
    var count1={};
    var count2={};
    for(var len of arr1){
       count1[len]=(count1[len] || 0) +1
    }
    for(var len of arr2){
        count2[len]=(count2[len] || 0) +1
    }
    for(let key in count1){
        if(!(key**2 in count2)){
            return false;
        }
        if(count2[key**2] !== count1[key]){
            return false;
        }
    }
    return true;
}
same([1,2,3],[1,9,4]);