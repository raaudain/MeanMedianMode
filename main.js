function meanMedianMode(array){
  return {
    mean: getMean(array),
    median: getMedian(array),
    mode: getMode(array)
  }
}

function getMean(array){
  const sum = array.reduce((acc, val) => acc+val, 0);
  return sum / array.length;
}

function getMedian(array){
  array.sort((a,b) => a - b);
  let median;

  // If odd number of elements
  if (array.length % 2 !== 0){
    median = array[Math.floor(array.length / 2)];
  }
  else{
    const mid1 = array[(array.length / 2) - 1];
    const mid2 = array[(array.length / 2)];

    median = (mid1 + mid2) / 2;
  }

  return median;
}

function getMode(array){
  const modeObj = {};

  array.forEach(num => {
    if (modeObj[num]){
      modeObj[num]++;
    }
    else{
      modeObj[num] = 1;
    }
  });

  let maxFrequency = 0;
  let modes = [];


  for (let num in modeObj){
    if (modeObj[num] > maxFrequency){
      maxFrequency = modeObj[num];
      modes = [num];
    }
    else if(modeObj[num] === maxFrequency){
      modes.push(num);
    }
  }

  // If no mode
  if (Object.keys(modeObj).length === modes.length){
    modes = [];
  }

  return modes;
}

//const arr = [1,2,3,4,5,4,6,1]
const arr = [9,10,23,10,23,9]

meanMedianMode(arr);