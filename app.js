// Bài tập 8 (10/06/2021)
// Refactor đoạn code sau bằng 1 line code

// function willItBlend(someObject) {
//   var itWillBlend;

//   if (typeof someObject === "object") {
//     if (someObject.blendable === "It will blend") {
//       itWillBlend = true;
//     } else {
//       itWillBlend = false;
//     }
//   } else {
//     itWillBlend = false;
//   }
//   return itWillBlend;
// }

function willItBlend(someObject) {
  return someObject.blendable === "It will blend";
}

//=================================================================================

// Bài tập 9 (10/06/2021)
// Refactor đoạn code sau, không được sử dụng if lồng nhau, không được sử dụng else

// function someFunction(someCondition, name, value, perms) {
//   retvar = SUCCESS;
//   if (someCondition) {
//     if (name != null && name != "") {
//       if (value != 0) {
//         if (perms.allow(name)) {
//           // Do something
//         } else {
//           retvar = PERM_DENY;
//         }
//       } else {
//         retvar = BAD_VALUE;
//       }
//     } else {
//       retvar = BAD_NAME;
//     }
//   } else {
//     retvar = BAD_COND;
//   }
//   return retvar;
// }

function someFunction(someCondition, name, value, perms) {
  if (!someCondition) return "BAD_COND";
  if (!name) return "BAD_NAME";
  if (!value) return "BAD_VALUE";
  if (!perms.allow(name)) return "PERM_DENY";
  return "SUCCESS";
}

//=================================================================================

// Bài tập 10 (10/06/2021)
// Refactor lại function greet sau bằng 1 line code, không được sử dụng toán tử 3 ngôi

const sayHello = () => {
  console.log("Hello, bonjour, nihao");
  return true;
};

const doNothing = () => {
  console.log("Do nothing");
  return false;
};

// const greet = (hasClient) => {
//   if (hasClient) {
//     sayHello();
//   } else {
//     doNothing();
//   }
// };

const greet1 = (hasClient) => {
  return hasClient || (sayHello() && doNothing());
};
console.log(greet1(false));
