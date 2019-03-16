/**
 * @param preferences - an array of integers. Indices of people, whom they love
 * @returns number of love triangles
 */

module.exports = function getLoveTrianglesCount(preferences = []) {

    let count=0;

    for (let i=1; i<preferences.length+1; i++){
        if (getLover(i)!==0 && getLover(i) !== i && checkTriangle(i) ) {
            count++;
            markTriangle(i)
        }
    }
    return count;

    function getLover(i){
        if (preferences[i-1]===0) return 0;
        return preferences[i-1]
    }

    function markLover(i){
        preferences[i-1]=0;
    }

    function checkTriangle(i){
        return getLover(getLover(getLover(i)))===i
    }

    function markTriangle(i){
        markLover(getLover(getLover(i)));
        markLover(getLover(i));
        markLover(i);
    }
};





