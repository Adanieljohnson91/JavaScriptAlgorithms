var convert = function (s, numRows) {
  //if numROws is 1 everything is in order
  if (numRows <= 1) return s;
  let arr = [];
  let counter = 0;
  let flag = true;
  for (let i = 0; i < s.length; i++) {
    arr[counter] ? (arr[counter] += s[i]) : arr.push(s[i]);
    if (flag === true && counter <= numRows) {
      counter++;
      if (counter >= numRows - 1) {
        flag = false;
        if (numRows === 2) {
          counter = numRows - counter;
        } else {
          counter = numRows - 1;
        }
      }
    } else {
      if (counter <= 0) {
        flag = true;
        counter++;
      } else {
        counter--;
      }
    }
  }
  console.log(arr.join(""));
  return arr.join("");
};
//convert("paypalishiring", 2);

var convertV2 = function (s, numRows) {
  var buckets = [];
  var bucketPointer = 0;
  var pointerDelta = -1;
  for (i = 0; i < s.length; i++) {
    if (!buckets[bucketPointer]) buckets[bucketPointer] = "";
    //
    buckets[bucketPointer] += s[i];
    if (bucketPointer === 0 || bucketPointer === numRows - 1)
      pointerDelta *= -1;
    bucketPointer += pointerDelta;
  }
  console.log(buckets);
  var result = buckets.join("");
  console.log(result);
  return result;
};
convertV2("paypalishiring", 3);

function convertV3(s, numRows) {
  //declare empty array
  let arr = [];
  //create counter
  let counter = -1;
  //create pointer
  let pointer = 0;
  //create forloop
  for (let i = 0; i < s.length; i++) {
    //check for existance in array
    //if not create empty array
    if (!arr[pointer]) arr[pointer] = "";
    arr[pointer] += s[i];
    if(pointer === 0 || pointer === numRows - 1) counter *= -1;
    pointer += counter;
  }
  return arr.join('');
}

