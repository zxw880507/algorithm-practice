/* Cash Register
Design a cash register drawer function checkCashRegister() that accepts purchase price as the first argument (price), payment as the second argument (cash), and cash-in-drawer (cid) as the third argument.

cid is a 2D array listing available currency.

The checkCashRegister() function should always return an object with a status key and a change key.

Return {status: "INSUFFICIENT_FUNDS", change: []} if cash-in-drawer is less than the change due, or if you cannot return the exact change.

Return {status: "CLOSED", change: [...]} with cash-in-drawer as the value for the key change if it is equal to the change due.

Otherwise, return {status: "OPEN", change: [...]}, with the change due in coins and bills, sorted in highest to lowest order, as the value of the change key.

Currency Unit	Amount
Penny	$0.01 (PENNY)
Nickel	$0.05 (NICKEL)
Dime	$0.1 (DIME)
Quarter	$0.25 (QUARTER)
Dollar	$1 (ONE)
Five Dollars	$5 (FIVE)
Ten Dollars	$10 (TEN)
Twenty Dollars	$20 (TWENTY)
One-hundred Dollars	$100 (ONE HUNDRED)
See below for an example of a cash-in-drawer array:

[
  ["PENNY", 1.01],
  ["NICKEL", 2.05],
  ["DIME", 3.1],
  ["QUARTER", 4.25],
  ["ONE", 90],
  ["FIVE", 55],
  ["TEN", 20],
  ["TWENTY", 60],
  ["ONE HUNDRED", 100]
] */

function checkCashRegister(price, cash, cid) {
  let unit = {
    PENNY: 0.01,
    NICKEL: 0.05,
    DIME: 0.1,
    QUARTER: 0.25,
    ONE: 1,
    FIVE: 5,
    TEN: 10,
    TWENTY: 20,
    "ONE HUNDRED": 100,
  };
  let convert = [];
  let entries = Object.fromEntries(cid);
  for (const key in unit) {
    let ele;
    if (entries[key]) {
      ele = [unit[key], Math.round(Number(entries[key]) / Number(unit[key]))];
    } else {
      ele = [unit[key], 0];
    }
    convert.unshift(ele);
  }
  let status,
    change = [],
    cidAfterChange = [];
  // return convert;
  let balance = cash - price;
  for (const bill of convert) {
    let numberOfBill;
    let restBill;
    let currUnit = Object.keys(unit).find((key) => unit[key] === bill[0]);
    if (Math.floor(balance / bill[0])) {
      numberOfBill = Math.floor(balance / bill[0]);
      if (numberOfBill <= bill[1]) {
        balance = Math.round((balance - bill[0] * numberOfBill) * 100) / 100;
      } else {
        balance = Math.round((balance - bill[0] * bill[1]) * 100) / 100;
        numberOfBill = bill[1];
      }
    } else {
      numberOfBill = 0;
    }
    restBill = bill[1] - numberOfBill;
    change.unshift([currUnit, numberOfBill * bill[0]]);
    cidAfterChange.unshift([currUnit, restBill]);
  }
  if (balance) {
    status = "INSUFFICIENT_FUNDS";
    change = [];
  } else {
    if (cidAfterChange.some((ele) => ele[1] !== 0)) {
      status = "OPEN";
      change = change.filter((el) => el[1]).reverse();
    } else {
      status = "CLOSED";
    }
  }
  return { status, change };
}

checkCashRegister(3.26, 100, [
  ["PENNY", 1.01],
  ["NICKEL", 2.05],
  ["DIME", 3.1],
  ["QUARTER", 4.25],
  ["ONE", 90],
  ["FIVE", 55],
  ["TEN", 20],
  ["TWENTY", 60],
  ["ONE HUNDRED", 100],
]);
