---
title: "Exact Change"
image: steve-johnson-628975-unsplash.jpg
description: The next algorithm on my list was Exact Change, which was very tricky because there are a lot of details to cover so that all expected outcomes pass.
date: '2016-08-29'
tags: ["javascript", "algorithms", array-reduce-method", "object-constructor", "key-value-pairs"]
author: "Maria D. Campbell"
---

## The challenge:

+ Design a **cash register drawer** `function checkRegister()` that accepts `purchase price` as the **first argument** (price), `payment` as the **second argument** (cash), and `cash-in-drawer` (cid) as the **third argument**.

+ `cid` is a **2D array** listing **available currency**.

+ Return the **string** `"Insufficient Funds"` if `cid is < change due`.

+ Return the **string** `"Closed"` if `cid is === change due`.

+ Otherwise, return `change` in `coin` and `bills`, **sorted** in `highest` to `lowest` order.

### The solution should return:

```js
checkCashRegister(19.50, 20.00, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.10], ["QUARTER", 4.25], ["ONE", 90.00], ["FIVE", 55.00], ["TEN", 20.00], ["TWENTY", 60.00], ["ONE HUNDRED", 100.00]]) 
should return an array.

checkCashRegister(19.50, 20.00, [["PENNY", 0.01], ["NICKEL", 0], ["DIME", 0], ["QUARTER", 0], ["ONE", 0], ["FIVE", 0], ["TEN", 0], ["TWENTY", 0], ["ONE HUNDRED", 0]])
should return a string.

checkCashRegister(19.50, 20.00, [["PENNY", 0.50], ["NICKEL", 0], ["DIME", 0], ["QUARTER", 0], ["ONE", 0], ["FIVE", 0], ["TEN", 0], ["TWENTY", 0], ["ONE HUNDRED", 0]])
should return a string.

checkCashRegister(19.50, 20.00, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.10], ["QUARTER", 4.25], ["ONE", 90.00], ["FIVE", 55.00], ["TEN", 20.00], ["TWENTY", 60.00], ["ONE HUNDRED", 100.00]])
should return [["QUARTER", 0.50]]

checkCashRegister(3.26, 100.00, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.10], ["QUARTER", 4.25], ["ONE", 90.00], ["FIVE", 55.00], ["TEN", 20.00], ["TWENTY", 60.00], ["ONE HUNDRED", 100.00]])
should return [["TWENTY", 60.00], ["TEN", 20.00], ["FIVE", 15.00], ["ONE", 1.00], ["QUARTER", 0.50], ["DIME", 0.20], ["PENNY", 0.04]]

checkCashRegister(19.50, 20.00, [["PENNY", 0.01], ["NICKEL", 0], ["DIME", 0], ["QUARTER", 0], ["ONE", 0], ["FIVE", 0], ["TEN", 0], ["TWENTY", 0], ["ONE HUNDRED", 0]])
should return "Insufficient Funds".

checkCashRegister(19.50, 20.00, [["PENNY", 0.01], ["NICKEL", 0], ["DIME", 0], ["QUARTER", 0], ["ONE", 1.00], ["FIVE", 0], ["TEN", 0], ["TWENTY", 0], ["ONE HUNDRED", 0]])
should return "Insufficient Funds".

checkCashRegister(19.50, 20.00, [["PENNY", 0.50], ["NICKEL", 0], ["DIME", 0], ["QUARTER", 0], ["ONE", 0], ["FIVE", 0], ["TEN", 0], ["TWENTY", 0], ["ONE HUNDRED", 0]])
should return "Closed".
```

### Some helpful links:

+ [Global Object](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object)

+ [Array.prototype.reduce()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/Reduce)

The next `algorithm` on my list was `Exact Change`. This was very tricky because there are a lot of little details which can’t go unnoticed in order that all expected outcomes pass. There were also so many steps to take in order that all expected outcomes were covered.

### What my solution should achieve:

+ It should `return` an **array**.

+ It should `return` a **string**.

+ If `cid is < change due`, return `“Insufficient Funds”`.

+ If `cid === change due`, return `“Closed”`.

+ If the `expected outcome` is ***not*** `“Insufficient Funds”` or `“Closed”`, return `change` in `coins` and `bills`, **ordered from** `highest` to `lowest` **denomination**.

+ Make sure that `change` is **rounded down** to **two decimal places**.

### Starter Code:

```js
function checkCashRegister(price, cash, cid) {
    var change;
    // Here is your change, ma'am.
    return change;
}

// Example cash-in-drawer array:
// [["PENNY", 1.01],
// ["NICKEL", 2.05],
// ["DIME", 3.10],
// ["QUARTER", 4.25],
// ["ONE", 90.00],
// ["FIVE", 55.00],
// ["TEN", 20.00],
// ["TWENTY", 60.00],
// ["ONE HUNDRED", 100.00]]

checkCashRegister(19.50, 20.00, [
    [
        "PENNY", 1.01
    ],
    [
        "NICKEL", 2.05
    ],
    [
        "DIME", 3.10
    ],
    [
        "QUARTER", 4.25
    ],
    [
        "ONE", 90.00
    ],
    [
        "FIVE", 55.00
    ],
    [
        "TEN", 20.00
    ],
    [
        "TWENTY", 60.00
    ],
    ["ONE HUNDRED", 100.00]
]);
```

+ First I `declared` the `function checkCashRegister()` ***passing in*** the **parameters** `price`, `cash`, and `cid` (this was actually part of the **starter code**). All other code is wrapped in this **main**, ***outer*** `function.`

+ Then I created an array consisting of the **various denominations** that were ***present*** in the **expected outcomes**. I **hoisted** it up to the **top** of the `checkCashRegister()` **function**, where I **declared** and **defined** it. I made it an `array of objects` so I could ***access*** their **properties**. I called the **variable** in which the `array of objects` was stored `denominations`, since it consisted of the various **monetary denominations**.

+ I called the **object** name/value **pairs** `denomination` and `value.`

+ I made sure that `denominations` went in ***descending order*** to **mirror** the **change** that was being returned to the **customer** from **highest** to **lowest** ***order***.

+ Next I had to create a **variable** `change`. It is the `difference` **between** the `cash` **given** by the ***customer*** and the `price.`

+ I had to determine the **kind of change** that was in the **cash drawer** (`cid`). I created a **variable** called `totalCid` in which I **stored** the `.reduce()` **method** on the `2D cid` **array**.

+ I also had to have something with which to **compare** `totalCid` ***against***. That’s where the `denominations` **array** came in. But I had to put the `.reduce()` **method** on it in order to **make** that happen. I declared ***another*** **variable** called `result` in which I **stored** the `.reduce()` **method** on the `denominations` **array**. The **variable** `result` **stores** a new `2D array` called `accumulator` which ***collects***, or rather ***accumulates*** the `change` being returned to the customer. This `2D array` ***consists of*** `sub-arrays,` **each representing** a `monetary denomination` **string** and its `value` portion of the `change` being returned to the customer.

Why the necessity for `result`? Isn’t the `totalCid` **variable** enough? It is absolutely ***not***. It ***partially*** **takes care of** the ***conditions***, as **indicated by** the `if/else statement`.

However, if I were to ***stop*** at `totalCid`, then **expected outcomes** # 1, #4, #5, and #7 would ***not pass***.

```js
checkCashRegister(19.50, 20.00, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.10], ["QUARTER", 4.25], ["ONE", 90.00], ["FIVE", 55.00], ["TEN", 20.00], ["TWENTY", 60.00], ["ONE HUNDRED", 100.00]]);
```

would return `undefined`. All the good stuff happens in `result,` which in turn leads to `results` for `checkCashRegister(price, cash, cid)`, ***instead of*** `undefined`.

Let’s ***examine*** the various parts making up `totalCid`:

```js
var totalCid = cid.reduce(function(accumulator, next) {
    /* accumulator is equal to the string and next[1] is equal to the value. 0.0 is the starting value. */
    return accumulator + next[1];
}, 0.0);
if (totalCid < change) {
    return "Insufficient Funds";
} else if (totalCid === change) {
    return "Closed";
}
```

`cid` is the **third parameter** in the `checkCashRegister()` **function** ***passed*** as an **argument**, and it is a **2D array**. `totalCid` is a **variable** which ***stores*** the `.reduce()` **method** called upon the `cid` **array**. The `accumulator` is the **string** in the `cid` **array** representing the **monetary denomination**. Next is the `value` of the `denomination` in the ***drawer***. A ***starting*** `value` of `0.0` is **provided** which ***represents*** the `initialValue` **parameter** of `cid.reduce().` `accumulator` and `next[1]` is returned because they are ***both needed*** to **satisfy** the expected outcome(s) of the `exact change` **algorithm**. `next[1]` represents the **actual** cash `value` in the ***drawer***. This is also what is ***being reduced***.  Since `accumulator` is a **string**, and the solution is ***required*** to return an **array**, **expected outcome** #1 **would** ***not pass***. #2 and #3 ***would*** **pass**, because the **expected outcome** is a `string`. #4 ***would*** **not pass**, because, among other things, an **array** is ***not*** **returned**. Same with #5. With #7, there is **nothing** for `cid` to **compare** ***against*** to **determine** whether or not there are `“Insufficient Funds”` in the **cash drawer** to return to the **customer**, because ***technically***, there is **enough** `change.` The question here is, is it the **right** ***type*** of `change`?

Let’s **examine** the `result` **variable**:

```js
var result = denominations.reduce(function(accumulator, next, index) {
    var currentValue = 0.0;
    // if change is >= to the value of the current object we are in
    if (change >= next.value) {
        while (change >= next.value && cid[index][1] >= next.value) {
            currentValue += next.value;
            change -= next.value;
            change = Math.round(change * 100) / 100;
            cid[index][1] -= next.value;
        }
        accumulator.push([next.denomination, currentValue]);
        return accumulator;
    } else {
        return accumulator;
    }
    // give the accumulator value the value of an empty array for starters
}, []);
```

The `result` **variable** provides the `rest of the pieces` to the **Exact Change** puzzle, and the ***mechanics*** of `totalCid` will then become clearer.

+ I **declare** the ***new*** **variable** `result` and **assign it** the `value` of the `.reduce()` **method** on the `denominations` **array of objects**. The `callback function` which **executes** on each `value` in the `denominations` **array** contains **three parameters**: `accumulator`, `next`, and `index`. `accumulator` is the ***new*** **outer array** which will **hold** the **sub-arrays**, ***each*** consisting of `next.denomination` and `currentValue.` `accumulator` is the **accumulation** of the `change` that is ***returned*** to the customer from the **cash in the drawer** (`cid`) **array**. This time, `next` represents **each object** in the `denominations` **array**. This is why I made `denominations` an **array of objects**. So that I could **access** each object’s **properties**. In this case, the `denomination` and the `value`. Therefore, `next.denomination` refers to the **monetary denomination string** in `denominations,` and `next.value` refers to the **corresponding value** of the **monetary denomination**. This time, `currentValue` does ***not*** **refer** to the `initialValue` **parameter** of the `.reduce()` **method** as with `next` in the `.reduce()` method **stored** in the `totalCid` **variable**. Since that is the case, I had to **declare** a ***new*** **variable** called `currentValue` and **assign it** the `value` of `0.0`.

+ `accumulator` is the **parameter** to which the `initialValue` is ***passed*** as the **first argument** to the **first call** of the `.reduce()` method **callback function**. In other words, the [] of ` }, [] );` at the end of the `denominations.reduce()` method represents the **outer array** of the new **2D array** containing the `change` being **returned** to the **customer**, and **stored** as a `value` in the `result` **variable**.

+ I had to **create** a **condition** which would ***determine*** the **mix** of **denominations** needed to return **exact change** to the **customer**. The first and obvious condition is that `change` has to be `> than next.value`. So

```js
if(change >= next.value) {}
```

+ But that is ***not*** enough. We are dealing with **two things** here: `change` and the `value` portion of the `cid` **sub-array**. 

    +  The `value` of the `change` **variable** is the ***difference*** **between** the `price` of the `item` and the `cash` ***received*** from the **customer**. 
    
    + The `value` **portion** of ***each*** `cid` **sub-array** is the (total) `value` of the **monetary denomination** which the **sub-array** in question ***corresponds*** **to**. This is also what is being reduced. And we have to first get even more specific here before we get more general:

```js
while(change >= next.value && cid[index][1] >= next.value) {}
```

+ So while BOTH the ***condition*** `change >= next.value` AND `cid[index][1 ] >= next.value` is `true,` ***add*** `next.value` to `currentValue` (which starts at value `0.0`).

+ Then subtract `next.value` from `change`.

+ Then round off the `value` of `change` to two `decimal` places:

```js
change = Math.round(change * 100) / 100;
```

This is so that when `change < 1.00` and is rounded off with `Math.round(),` it does ***not*** round off to 0. For example, if `change === 0.25`, rounding it off with `Math.round()` would `result` in `0.` By ***first*** **multiplying** by `100` and then **dividing** by `100,` `0.25` would really evaluate to `0.25`. The ***placement*** of this line doesn’t matter. It could go before `change -= next.value` or after (as here). It could also go before or after `currentValue += next.value`; or it could go after `cid[index][1] -= next.value`. Just as long as it is ***placed within*** the `while statement` and therefore makes up part of the **condition**.

+ When `change` no longer `> next.value` and `cid[index][1]` is no longer `>= next.value`, push `[denomination.next`, `currentValue]` into `accumulator` **array**. Then return `accumulator`.

+ However, if the condition `change >= next.value` does not exist, return `accumulator`.

+ And ***BTW***, the `index` parameter of the `denominations.reduce()` **callback function** represents the **index** of `accumulator`, and therefore **each** sub-array of `accumulator` array. `[1]` represents the `index` of the `value` in each `accumulator` sub-array.

+ `cid` array is reversed ***before*** `result` variable is **declared** and **assigned** a `value` because otherwise **expected outcome** #5 would ***not*** pass. ***In addition***, it is ***required*** that the **exact change algorithm solution** return (change) `denominations` from **highest** to **lowest**. ***However***, the `cid` **sub-arrays** that are **provided** in the **arguments** go from **lowest** to **highest**.

+ The **only thing left** is returning the `accumulator` array via the `result` variable. However, if I were to simply return `result,` **expected outcome** #7 would ***not*** pass. Even though we ***technically*** have **enough change**, it is ***not*** the right KIND of **change**, so we can’t give back the ***required*** **change** to the customer. So

```js
return result.length && change === 0 ? result : "Insufficient Funds";
```

Return `result` if `result.length` (meaning that `accumulator` contains a sub-array/sub-arrays) and all `change` has been **dispensed exactly**, else return `"Insufficient Funds".` When I created this line of code, I ***no longer*** **needed**

```js
if(totalCid < change) {
    return "Insufficient Funds";
}
```

stored within the `totalCid` variable. You will see that **this condition** was ***removed*** from the **final solution**. It would have been redundant.

### Solution in ES5:

```js
function checkCashRegister(price, cash, cid) {
    var denominations = [
        {
            denomination: "ONE HUNDRED",
            value: 100.00
        }, {
            denomination: "TWENTY",
            value: 20.00
        }, {
            denomination: "TEN",
            value: 10.00
        }, {
            denomination: "FIVE",
            value: 5.00
        }, {
            denomination: "ONE",
            value: 1.00
        }, {
            denomination: "QUARTER",
            value: 0.25
        }, {
            denomination: "DIME",
            value: 0.10
        }, {
            denomination: "NICKEL",
            value: 0.05
        }, {
            denomination: "PENNY",
            value: 0.01
        }
    ];
    var change = cash - price;
    var totalCid = cid.reduce(function(accumulator, next) {
        /* accumulator starts at value 0.0 and is the accumulated value of next. next is equal to the value in each cid sub-array. */
        return accumulator + next[1];
    }, 0.0);
    if (totalCid === change) {
        return "Closed";
    }
    /* Reverse the cid array here because otherwise expected outcome #5 would not result in actual outcome #5. In addition, when change is returned to the customer, it is required that the denominations be returned from highest to lowest. However, the cid sub-arrays that are provided in the arguments go from lowest to highest. */
    cid = cid.reverse();
    /* return new 2D array which is stored in the result variable. index is equal to the index of the current array we are in */
    var result = denominations.reduce(function(accumulator, next, index) {
        // if change is >= to the value of the current object we are in
        var currentValue = 0.0;
        if (change >= next.value) {
            while (change >= next.value && cid[index][1] >= next.value) {
                currentValue += next.value;
                change -= next.value;
                // this is the formula for rounding off the change value to two decimal places.
                change = Math.round(change * 100) / 100;
                cid[index][1] -= next.value;
            }
            accumulator.push([next.denomination, currentValue]);
            return accumulator;
        } else {
            return accumulator;
        }
        // give the accumulator value the value of an empty array for starters
    }, []);
    /* we have to do this because when we just return result, the second to last expected outcome does not pass. Even though we technically have enough change, it isn't the right kind of change, and we could not give back the required change to the customer. */
    return result.length && change === 0
        ? result
        : "Insufficient Funds";
}
// Example cash-in-drawer array:
// [["PENNY", 1.01],
// ["NICKEL", 2.05],
// ["DIME", 3.10],
// ["QUARTER", 4.25],
// ["ONE", 90.00],
// ["FIVE", 55.00],
// ["TEN", 20.00],
// ["TWENTY", 60.00],
// ["ONE HUNDRED", 100.00]]

checkCashRegister(19.50, 20.00, [
    [
        "PENNY", 1.01
    ],
    [
        "NICKEL", 2.05
    ],
    [
        "DIME", 3.10
    ],
    [
        "QUARTER", 4.25
    ],
    [
        "ONE", 90.00
    ],
    [
        "FIVE", 55.00
    ],
    [
        "TEN", 20.00
    ],
    [
        "TWENTY", 60.00
    ],
    ["ONE HUNDRED", 100.00]
]);
```

### Solution in ES6:

```js
function checkCashRegister(price, cash, cid) {
    const denominations = [
        {
            denomination: "ONE HUNDRED",
            value: 100.00
        }, {
            denomination: "TWENTY",
            value: 20.00
        }, {
            denomination: "TEN",
            value: 10.00
        }, {
            denomination: "FIVE",
            value: 5.00
        }, {
            denomination: "ONE",
            value: 1.00
        }, {
            denomination: "QUARTER",
            value: 0.25
        }, {
            denomination: "DIME",
            value: 0.10
        }, {
            denomination: "NICKEL",
            value: 0.05
        }, {
            denomination: "PENNY",
            value: 0.01
        }
    ];
    let change = cash - price;
    const totalCid = cid.reduce((accumulator, next) => accumulator + next[1], 0.0);
    if (totalCid === change) {
        return "Closed";
    }
    /* Reverse the cid array here because otherwise expected outcome #5 would not result in actual outcome #5. In addition, when change is returned to the customer, it is required that the denominations be returned from highest to lowest. However, the cid sub-arrays that are provided in the arguments go from lowest to highest. */
    cid = cid.reverse();
    /* return new 2D array which is stored in the result variable. index is equal to the index of the current array we are in */
    const result = denominations.reduce((accumulator, next, index) => {
        // if change is >= to the value of the current object we are in
        let currentValue = 0.0;
        if (change >= next.value) {
            while (change >= next.value && cid[index][1] >= next.value) {
                currentValue += next.value;
                change -= next.value;
                // this is the formula for rounding off the change value to two decimal places.
                change = Math.round(change * 100) / 100;
                cid[index][1] -= next.value;
            }
            accumulator.push([next.denomination, currentValue]);
            return accumulator;
        } else {
            return accumulator;
        }
        // give the accumulator value the value of an empty array for starters
    }, []);
    /* we have to do this because when we just return result, the second to last expected outcome does not pass. Even though we technically have enough change, it isn't the right kind of change, and we could not give back the required change to the customer. */
    return result.length && change === 0
        ? result
        : "Insufficient Funds";
}
// Example cash-in-drawer array:
// [["PENNY", 1.01],
// ["NICKEL", 2.05],
// ["DIME", 3.10],
// ["QUARTER", 4.25],
// ["ONE", 90.00],
// ["FIVE", 55.00],
// ["TEN", 20.00],
// ["TWENTY", 60.00],
// ["ONE HUNDRED", 100.00]]

checkCashRegister(19.50, 20.00, [
    [
        "PENNY", 1.01
    ],
    [
        "NICKEL", 2.05
    ],
    [
        "DIME", 3.10
    ],
    [
        "QUARTER", 4.25
    ],
    [
        "ONE", 90.00
    ],
    [
        "FIVE", 55.00
    ],
    [
        "TEN", 20.00
    ],
    [
        "TWENTY", 60.00
    ],
    ["ONE HUNDRED", 100.00]
]);
```


