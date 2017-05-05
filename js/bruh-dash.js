var global = window || GLOBAL;

/****************************************************************************************
 * Function signatures have been intentionally left out of the comments describing what *
 * each function does so that you can have practice looking up documentation. Please    *
 * Reference the documentation at [ https://lodash.com/docs/4.17.4 ] You should have    *
 * documentation up in a browser window at all times when working on projects!          *
 ****************************************************************************************/

global.bruhdash = {

  // returns the first element of an array
  first: function first(arr) {
      return arr[0];
  },

  // returns the last element of an array
  last: function last(arr) {
    let endPoint = arr.length - 1;
      return arr[endPoint];
  },

  // returns the index of the first matching element from left to right
  indexOf: function indexOf(arr, num, marker) {
    if(marker && marker < arr.length){
        length = marker;
    } else {
      length = arr.length;
    }
    for(var i = 0; i < length; i++){
      if(arr[i] === num){
        return i;
      }
    }
    return -1;
  },

  // returns the index of the last matching element from left to right
  lastIndexOf: function lastIndexOf(arr, num, marker) {
    if(marker && marker < arr.length){
        length = marker;
    } else {
      length = arr.length;
    }
    var index = -1;
    for(var i = 0; i < length; i++){
      if(arr[i] === num){
        index = i;
      }
    }
    return index;
  },

  // returns an array with all elements except for the last element
  initial: function initial(arr) {
    arr.pop();
    return arr;
  },

  // returns an array with all falsey values removed
  compact: function compact(arr) {
    var newArr = [];
    for(var i = 0; i < arr.length; i++){
      if( arr[i] ) {
            newArr.push(arr[i]);
        }
    }
    return newArr;
  },

  // creates a slice of an array from the start index up to but not including the end index
  slice: function slice(arr, start, end) {

    if( (start < 0 || start >= arr.length) ||
        (end < 0 || end >= arr.length) ){
          return -1;
        }

    var newArr = [];
    for(var i = start; i < end; i++){
      newArr.push(arr[i]);
    }
    return newArr;
  },

  // returns a slice of array with n elements dropped from the beignning
  drop: function drop(arr, n) {
    var i;
    if( !(n) && !(n === 0) ){
      i = 1;
    } else if ( (n >= arr.length || n < 0) ){
          return -1;
    } else {
      i = n;
    }
    var newArr = [];
    for(i; i < arr.length; i++){
      newArr.push(arr[i]);
    }
    return newArr;
  },

  // returns a slice of array with n elements dropped from the end
  dropRight: function() {

  },

  // creates a slice of an array with n elements taken from the beginning
  take: function () {

  },

  // creates a slice of an array with n elements taken from the end
  takeRight: function () {

  },

  // fills elements of array with specified value from the start index
  // up to but not including the end index
  fill: function() {

  },

  // removes all given values from an array
  pull: function () {

  },

  // removes elements of an array corresponding to the given indices
  pullAt: function () {

  },

  // creates an array excluding all the specified values
  without: function() {

  },

  // returns an array with specified values excluded
  difference: function() {

  },

  /*******************
   *  STRETCH GOALS! *
   *******************/

  // creates an array of grouped elements
  zip: function () {

  },

  // creates an array of grouped elements in their pre-zip configuration
  unzip: function () {

  },

  // creates an array of elements into groups of length of specified size
  chunk: function(){

  },

  // iterates over elements of a collection and invokes iteratee for each element
  // Note: this should work for arrays and objects
  forEach: function() {

  },

  // creates an array of values by running each element in collection thru the iteratee
  // Note: this should work for arrays and objects
  map: function() {

  },

  /*************************
   *  SUPER STRETCH GOALS!  *
   *************************/

  // iterates over elements of a collection and returns all elements that the predicate returns truthy for
  // Note: this should work for arrays and objects
  filter: function() {

  },

  // Reduces the collection to a value which is the accumulated result of running each element
  // in the collection through an iteratee
  // Note: this should work for arrays and objects
  reduce: function() {

  }
};
