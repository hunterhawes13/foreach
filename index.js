
function forEach(array, callback){
    for (var i=0; i<array.length; i++){
    	callback(array[i], i, arr)
    }
}

// tests
function IHazValue(value, index, array){
    console.assert(typeof value !== "undefined")
}
forEach([1, 2, 3], IHazValue)

function IHazIndex(value, index, array){
    console.assert(typeof index === "number")
}
forEach([1, 2, 3], IHazIndex)

function IHazArray(value, index, array){
    console.assert(array instanceof Array)
}
forEach([1, 2, 3], IHazArray)