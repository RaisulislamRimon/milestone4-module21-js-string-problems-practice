// 21-7 Who is the tallest? Find the max number in an array
function maxInArray(numbers) {
  console.log("array inside the array : ", numbers);
  let largest = numbers[0];
  console.log(largest);
  for (let i = 0; i < numbers.length; i++) {
    const index = i;
    const element = numbers[index];
    console.log(element);
    if (element > largest) {
      largest = element;
      console.log(largest);
    }
  }
  return largest;
}

const heights = [167, 190, 120, 165, 137];

const tallest = maxInArray(heights);
console.log("tallest person is : ", tallest);
