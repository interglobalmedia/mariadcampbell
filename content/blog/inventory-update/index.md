---
title: "Inventory Update"
image: keji-gao-655756-unsplash.jpg
description: Compare and update the inventory stored in a 2D array against a second 2D array of a fresh delivery.
date: '2016-08-29'
tags: ["javascript", "algorithm", "arrays", "array-sort-method", "const", "global-array-object", "2D-arrays", "while-statements", "switch-statements"]
author: "Maria D. Campbell"
---

## The challenge:

+ Compare and `update` the `inventory` ***stored*** in a `2D array` ***against*** a `second 2D array` of a `fresh delivery`.

+ Update the `current existing inventory` item quantities (in `arr1`).

+ If an `item` ***cannot be found***, ***add*** the `new item` **and** `quantity` ***into*** the `inventory array`.

+ The ***returned*** `inventory array` should be in `alphabetical order` by `item`.

### The solution should return:

+ The **function** `updateInventory` should ***return*** an `array`.

```js
updateInventory([[21, "Bowling Ball"], [2, "Dirty Sock"], [1, "Hair Pin"], [5, "Microphone"]], [[2, "Hair Pin"], [3, "Half-Eaten Apple"], [67, "Bowling Ball"], [7, "Toothpaste"]]).length
should return an array with a length of 6.

updateInventory([[21, "Bowling Ball"], [2, "Dirty Sock"], [1, "Hair Pin"], [5, "Microphone"]], [[2, "Hair Pin"], [3, "Half-Eaten Apple"], [67, "Bowling Ball"], [7, "Toothpaste"]]) 
should return [[88, "Bowling Ball"], [2, "Dirty Sock"], [3, "Hair Pin"], [3, "Half-Eaten Apple"], [5, "Microphone"], [7, "Toothpaste"]].

updateInventory([[21, "Bowling Ball"], [2, "Dirty Sock"], [1, "Hair Pin"], [5, "Microphone"]], []) 
should return [[21, "Bowling Ball"], [2, "Dirty Sock"], [1, "Hair Pin"], [5, "Microphone"]].

updateInventory([], [[2, "Hair Pin"], [3, "Half-Eaten Apple"], [67, "Bowling Ball"], [7, "Toothpaste"]]) 
should return [[67, "Bowling Ball"], [2, "Hair Pin"], [3, "Half-Eaten Apple"], [7, "Toothpaste"]].

updateInventory([[0, "Bowling Ball"], [0, "Dirty Sock"], [0, "Hair Pin"], [0, "Microphone"]], [[1, "Hair Pin"], [1, "Half-Eaten Apple"], [1, "Bowling Ball"], [1, "Toothpaste"]]) 
should return [[1, "Bowling Ball"], [0, "Dirty Sock"], [1, "Hair Pin"], [1, "Half-Eaten Apple"], [0, "Microphone"], [1, "Toothpaste"]]
```

### Some helpful links:

+ [Global Array Object](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array)

+ [Array.prototype.sort()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/sort)

+ [Sorting a JavaScript Array Using array.sort()](http://www.javascriptkit.com/javatutors/arraysort.shtml)

### What my solution should achieve:

+ It should ***compare*** and ***update*** the `current inventory` in a `2D array` against a ***second*** `2D array` of `new inventory`. In my scenario, `arr1` corresponds to the `2D array` of `current inventory` (`curInv`), and `arr2` corresponds to the `2D array` of `new inventory` (`newInv`). Whatever `inventory item` is in `arr1` and ***not*** in `arr2` should be ***pushed*** into the `newArr`, because `arr1` value can  be ***mutated*** but **not** `re-assigned`.  Whatever `inventory item` is in `arr2` and ***not*** in `arr1`, should be ***pushed*** into `newArr` as well. 

**Note:** if you are creating your solution in `ES5`, go over to `Lebab.io‘s` **repl** and `transpile` your `ES5` into `ES6`. Wherever you see `const` show up, it indicates a read only reference to a value. `Arrays`, for example! Then you will get a better understanding of what is going on with your solution. `read only` **reference** means that a `variable` ***declared*** with `const` can’t have its value changed through re-assignment, and it ***can’t be*** `redeclared`. It does ***not mean*** that it **can’t be mutated**, as with the `.sort()` method, for example.

+ Based on the **comparison** ***between*** `arr1` and `arr2`, it ***should add*** the `new counts` of ***existing inventory*** that are **present** in `arr2` to the `counts` of ***matching inventory*** in `arr1`. This **removes** the ***possibility*** of **more than one** `subarray` of the `same inventory`.

+ It should ***return*** a `2D array` whose `sub-arrays` are `sorted alphabetically`.

### The starter code:

```js
function updateInventory(arr1, arr2) {
    // All inventory must be accounted for or you're fired!
    return arr1;
}

// Example inventory lists
var curInv = [
    [21, "Bowling Ball"],
    [2, "Dirty Sock"],
    [1, "Hair Pin"],
    [5, "Microphone"]
];

var newInv = [
    [2, "Hair Pin"],
    [3, "Half-Eaten Apple"],
    [67, "Bowling Ball"],
    [7, "Toothpaste"]
];

updateInventory(curInv, newInv);
```

*Now let’s examine the code step by step:*

```js
unction compareInventories():

function compareInventories(a, b) {
    return (a[1] < b[1]
        ? -1
        : (a[1] > b[1]
            ? 1
            : 0));
}
```

This `function`, called `function compareInventories(a, b)`, is the `compareFunction` used for the `.sort()` method used to sort `arr1` and `arr2` in `function updateInventory(arr1, arr2)`. See `function updateInventory(arr1, arr2)` below.


[`Array.prototype.sort():`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/sort) the `.sort()` **method** sorts the elements of an array in place and returns the array. The sort is not necessarily stable. The default sort order is according to `string Unicode points`.

`Syntax: arr.sort([compareFunction])`

`Parameters:`

`compareFunction:` optional. `Specifies a function` that `defines` the `sort order`. If `compareFunction` is ***supplied***, the `array elements` are `sorted` according to the `return value` of the `compareFunction`. For example, the `compareFunction` in the **solution** here is `compareInventories(a, b)`. And `if a and b` are `two elements` ***being compared***, then: 

+ if `compareFunction(a, b) is < 0`, it means `sorting` to a `lower index` than b. -> a comes first. 

+ if `compareFunction(a, b)` returns 0, a and b remain unchanged with respect to each other, but `sorted` with respect to all (other) different elements. 

**Note:** the `ECMAscript standard` does not guarantee this behavior, and thus not all browsers (e.g. Mozilla versions dating back to at least 2003) respect this. 

+ if `compareFunction(a, b) is > 0`, sort b to a lower index than a. 

+ `compareFunction(a, b)` must always return the same value when given a specific pair of elements a and b as its two arguments. If ***inconsistent results*** are **returned** then the `sort order` is `undefined`.

`function updateInventory(arr1, arr2):`

```js
function updateInventory(arr1, arr2) {
    arr1.sort(compareInventories);
    arr2.sort(compareInventories);

    var newArr = [],
        i1 = 0,
        i2 = 0;

    while (i1 < arr1.length && i2 < arr2.length) {

        switch (compareInventories(arr1[i1], arr2[i2])) {
            case - 1:
                newArr.push(arr1[i1++]);
                break;
            case 1:
                newArr.push(arr2[i2++]);
                break;
            case 0:
                arr1[i1][0] += arr2[i2][0];
                newArr.push(arr1[i1]);
                i1++;
                i2++;
                break;
        }
    }
    while (i1 < arr1.length) {
        newArr.push(arr1[i1++]);
    }
    while (i2 < arr2.length) {
        newArr.push(arr2[i2++]);
    }

    return newArr;
}
```

`function compareInventories(a, b)` compares `(a[1])`, which refers to `index[1]` of each sub-array of `arr1` (`curInv`), to `index[1]` of each sub-array of `arr2` (`newInv`). `index[1]` is the item string. So the sub-arrays in `arr1` and `arr2` are sorted according to the ***conditions*** set in `compareInventories(a, b)`.  `function updateInventory(arr1, arr2)` 

+ sorts `arr1`, via the conditions set by and returned from `function compareInventories()`. `curInv`, passed in as the `first argument` to `function updateInventory()`, corresponds to the `arr1` parameter.

+ sorts `arr2` via the **conditions** set by and returned from `function compareInventories()`. `newInv`, passed in as the **second argument** to `function updateInventory()`, corresponds to the `arr2 parameter`.

+ In both the case of `arr1` and `arr2`, the `.sort()` **method** makes a `function` ***reference*** to `compareInventories` on `arr1` and then on `arr2`. You can tell `(compareInventories)` is a `function reference` because `()` does not follow `compareInventories`. If `two parentheses`, `()`, ***followed*** `compareInventories`, `compareInventories` would ***immediately*** be **invoked**. And I don’t want that. I want `compareInventories` to be `invoked` ***only after*** `function compareInventories()` and its `body` have been ***executed***. `(compareInventories)` ***therefore***, is a `function reference`, and ***not*** a `function call`. For another example of a `function` ***reference***, please visit my ***articulation*** of the [falsy bouncer algorithm](https://www.mariadcampbell.com/blog/falsy-bouncer/).

+ Next I declare the variable `newArr` and assign it the value of an **empty** `[]` **array**. This is where I ***push*** the `sub-arrays` of `arr1` and `arr2` and ***update*** the **inventory**.

+ After `newArr` has been ***declared*** and **assigned** a ***value***, I declare `i1` and `i2`. `i1` represents `each index` of `arr1`, and therefore each `sub-array` of `arr1`. `i2` represents `each index` of `arr2`, and therefore each `sub-array` of `arr2`. ***Both*** **start** at `index 0`, just as `var i = 0` in a `for loop`, for example. Here, ***however***, we are dealing with a `while` **statement**. The reason for the `while statement` ***instead of*** an `if statement`, is **because** the `while statement` **continues** ***as long as a condition is true***, **whereas** the `if statement` ***executes*** **only once** when the **condition** is ***satisfied***. For me, `using for loops` in this particular algorithm would `not have been` as `visually understandable`, and might have meant ***more*** `time complexity`. The same goes for the use of the `switch statement`. If I had used if/else statements` instead, it would have meant `more lines of code` and ***more confusion***. I tried it all, and this combo worked best. Other scenarios didn’t even completely pass. At least not for me.

+ Next comes the trickier part. I ***create*** a `while statement` that states `as long as i1 < arr1.length && i2 < arr2.length`, **evaluate** the ***proceeding*** `switch expression` (once), and then ***compare it*** with the `values` of `each case presented`. if a **match** is ***found***, the associated block of **code** is ***executed***. Here, the `switch expression` which is being ***evaluated*** is

```js
switch (compareInventories(arr1[i1], arr2[i2]))
```

The `function compareInventories()` is ***invoked***, and the `two parameters` ***passed*** are `arr1[i1]`, in other words `arr1[sub-array(s)]`, and `arr2[i2]`, or `arr2[sub-array(s)]`. The **contents** of `arr1[i1]` are ***compared to*** the **contents** of `arr2[i2]` and **both arrays** have ***already*** **been sorted**.

+ `case -1:` if there are ***any*** `sub-arrays` **unique to** `arr1`, ***push them*** **into** `newArr`. 
    + `case 1`: if there are ***any*** `sub-arrays` **unique to** `arr2`, ***push them*** **into** `newArr`. 
    + `case 0`: if there are ***any*** `sub-arrays` ***common*** to both `arr1` and `arr2`, ***merge them together*** into `arr1`, and then ***push*** the `arr1` **sub-array(s)** into `newArr`. This `case` is ***represented*** `slightly differently` from the `other two`. That’s because the ***focus*** is on the **number** of ***items***, whose **position** is at `index 0` of `arr1` or `arr2's` **sub-array(s)**. In `arr1`, the **number** of a ***particular*** `inventory item` is ***represented by*** `arr1[i1][0]`, and in `arr2`, the **number** of a ***particular*** `inventory item` is ***represented by*** `arr2[i2][0]`. `arr2[i2][0]` is ***added to*** `arr1[i1][0]`, and then `arr1[i1]` is ***pushed into*** `newArr`. ***However***, these **cases** are all ***conditional***. if `any one of them` is ***not*** **true**, the `switch statement` **breaks out of** the ***case***, and **moves** ***onto*** the **next one**. If there are **no matches** for ***any case condition***, the **program** ***breaks out of*** the `switch statement` and **moves** ***onto*** the **next line** of ***code***. The ***first*** `while statement`, which **contains** the `Logical AND operator`, and the `switch block` that ***follows***, are what make ***expected*** `outcomes` #2, #3, and #6 pass. #1 **passes** by ***default*** with the `starter code`.

    + The `lines of code` ***following*** the `switch block` are ***two sets*** of `while statements`. They **take care of** `expected outcome`s #4 and #5. Since the `newInv` **array** is ***empty*** in `expected outcome` scenario #4, there is **nothing** for `curInv` to be ***compared*** **to**. The `curInv/arr1` **sub-arrays** are even ***already*** in `lexicographical (dictionary) order`. So all that has to be done is for the **contents** of `arr1` to be ***pushed*** **into** `newArr`:

```js
while (i1 < arr1.length) {
  newArr.push(arr1[i1++]);
}
```

In `expected outcome scenario #5`, the `curInv` **array** is `empty`, so there is ***nothing*** for `newInv` to be **compared** to. As with `expected outcome #4`, the ***first*** `while statement`, which **contains** the `Logical AND operator` ***followed*** **by** the `switch statement` are ***not relevant*** to the `actual outcome`. And even though the `sub-arrays` have to be `sorted` **lexicographically**, the `sorting` has ***already*** `taken place` by the time the program has reached the last while statement, which consists of:

```js
while (i2 < arr2.length) {
    newArr.push(arr2[i2++]);
}
```

The `only thing left` is to ***return*** `newArr`, which is **returned** ***right before*** the `closing curly brace` for `function updateInventory()`.

`Solution in ES5:`

```js
/* Compare and update the inventory stored in a 2D array against a second 2D array
of a fresh delivery.
Update the current existing inventory item quantities (in arr1).
If an item cannot be found, add the new item and quantity into the inventory array.
The returned inventory array should be in alphabetical order by item.
*/
/* Analysis of the expected outcomes:
1. The function updateInventory should return an array. Given the starter code, it does. So this passes.

2./3. "Bowling Ball" and "Hair Pin" appear in two sub-arrays. They each have to be combined into one Bowling Ball and Hair Pin array so that the length of the outer array is 6 instead of 8. The sub-arrays also have to be sorted into alphabetical order.

4. The reason it passes is because the newInv array is empty. curInv remains the same.

5. There is no curInv, so the update consists only of newInv. And the sub-arrays have to be sorted into alphabetical order.

6. Bowling Ball and Hairpin show up twice again and have to each be reduced to one sub-array. Also has to be sorted into alphabetical order.
*/

function compareInventories(a, b) {
    return (a[1] < b[1]
        ? -1
        : (a[1] > b[1]
            ? 1
            : 0));
}

function updateInventory(arr1, arr2) {
    arr1.sort(compareInventories);
    arr2.sort(compareInventories);

    var newArr = [],
        i1 = 0,
        i2 = 0;

    while (i1 < arr1.length && i2 < arr2.length) {

        switch (compareInventories(arr1[i1], arr2[i2])) {
            case - 1:
                newArr.push(arr1[i1++]);
                break;
            case 1:
                newArr.push(arr2[i2++]);
                break;
            case 0:
                arr1[i1][0] += arr2[i2][0];
                newArr.push(arr1[i1]);
                i1++;
                i2++;
        }
    }
    while (i1 < arr1.length) {
        newArr.push(arr1[i1++]);
    }
    while (i2 < arr2.length) {
        newArr.push(arr2[i2++]);
    }

    return newArr;
}
// Example inventory lists
var curInv = [
    [
        21, "Bowling Ball"
    ],
    [
        2, "Dirty Sock"
    ],
    [
        1, "Hair Pin"
    ],
    [5, "Microphone"]
];

var newInv = [
    [
        2, "Hair Pin"
    ],
    [
        3, "Half-Eaten Apple"
    ],
    [
        67, "Bowling Ball"
    ],
    [7, "Toothpaste"]
];

updateInventory(curInv, newInv);
```

`Solution in ES6:`

```js
Solution in ES6:

/* Compare and update the inventory stored in a 2D array against a second 2D array
of a fresh delivery.
Update the current existing inventory item quantities (in arr1).
If an item cannot be found, add the new item and quantity into the inventory array.
The returned inventory array should be in alphabetical order by item.
*/
/* Analysis of the expected outcomes:
1. The function updateInventory should return an array. Given the starter code, it does. So this passes.

2./3. "Bowling Ball" and "Hair Pin" appear in two sub-arrays. They each have to be combined into one Bowling Ball and Hair Pin array so that the length of the outer array is 6 instead of 8. The sub-arrays also have to be sorted into alphabetical order.

4. The reason it passes is because the newInv array is empty. curInv remains the same.

5. There is no curInv, so the update consists only of newInv. And the sub-arrays have to be sorted into alphabetical order.

6. Bowling Ball and Hairpin show up twice again and have to each be reduced to one sub-array. Also has to be sorted into alphabetical order.
*/

function compareInventories(a, b) {
    return (a[1] < b[1]
        ? -1
        : (a[1] > b[1]
            ? 1
            : 0));
}

function updateInventory(arr1, arr2) {
    arr1.sort(compareInventories);
    arr2.sort(compareInventories);

    const newArr = [];
    let i1 = 0;
    let i2 = 0;

    while (i1 < arr1.length && i2 < arr2.length) {

        switch (compareInventories(arr1[i1], arr2[i2])) {
            case - 1:
                newArr.push(arr1[i1++]);
                break;
            case 1:
                newArr.push(arr2[i2++]);
                break;
            case 0:
                arr1[i1][0] += arr2[i2][0];
                newArr.push(arr1[i1]);
                i1++;
                i2++;
        }
    }
    while (i1 < arr1.length) {
        newArr.push(arr1[i1++]);
    }
    while (i2 < arr2.length) {
        newArr.push(arr2[i2++]);
    }

    return newArr;
}
// Example inventory lists
const curInv = [
    [
        21, "Bowling Ball"
    ],
    [
        2, "Dirty Sock"
    ],
    [
        1, "Hair Pin"
    ],
    [5, "Microphone"]
];

const newInv = [
    [
        2, "Hair Pin"
    ],
    [
        3, "Half-Eaten Apple"
    ],
    [
        67, "Bowling Ball"
    ],
    [7, "Toothpaste"]
];

updateInventory(curInv, newInv);
```
