var nums = [45, 54, 855, 87, 44, 98, 4, 84, 874, 784];

for (var i = 0; i < nums.length; i++) {
  var num = nums[i];
  if (num > 50) {
    continue;
  }
  console.log(num);
}
