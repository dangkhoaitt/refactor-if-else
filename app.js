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
