var sample_size = 20;
var highlight = 0;
var x_range = [ {x1: 50, x2: 50, x3: 50, x4: 50, x5: 50, x6: 50, x7: 50, x8: 50} ];
var traits = ["x1", "x2", "x3", "x4", "x5", "x6", "x7", "x8"];
var data = [
{ x1: 4, x2: 17, x3: 43, x4: 43, x5: 20, x6: 31, x7: 35, x8: 21 },
{ x1: 10, x2: 28, x3: 25, x4: 12, x5: 43, x6: 20, x7: 39, x8: 16 },
{ x1: 44, x2: 35, x3: 34, x4: 4, x5: 45, x6: 47, x7: 45, x8: 29 },
{ x1: 16, x2: 20, x3: 38, x4: 14, x5: 46, x6: 37, x7: 49, x8: 11 },
{ x1: 1, x2: 5, x3: 17, x4: 35, x5: 4, x6: 17, x7: 39, x8: 38 },
{ x1: 11, x2: 29, x3: 38, x4: 25, x5: 0, x6: 6, x7: 41, x8: 27 },
{ x1: 28, x2: 46, x3: 15, x4: 27, x5: 43, x6: 47, x7: 23, x8: 40 },
{ x1: 11, x2: 48, x3: 25, x4: 35, x5: 49, x6: 42, x7: 19, x8: 43 },
{ x1: 39, x2: 44, x3: 25, x4: 1, x5: 0, x6: 36, x7: 8, x8: 11 },
{ x1: 49, x2: 35, x3: 46, x4: 11, x5: 34, x6: 39, x7: 10, x8: 12 },
{ x1: 48, x2: 11, x3: 37, x4: 28, x5: 35, x6: 43, x7: 27, x8: 10 },
{ x1: 43, x2: 28, x3: 28, x4: 0, x5: 14, x6: 18, x7: 29, x8: 18 },
{ x1: 38, x2: 5, x3: 6, x4: 36, x5: 38, x6: 21, x7: 48, x8: 34 },
{ x1: 8, x2: 7, x3: 4, x4: 19, x5: 43, x6: 29, x7: 32, x8: 15 },
{ x1: 15, x2: 29, x3: 15, x4: 39, x5: 42, x6: 10, x7: 23, x8: 15 },
{ x1: 8, x2: 24, x3: 34, x4: 1, x5: 10, x6: 28, x7: 49, x8: 1 },
{ x1: 48, x2: 40, x3: 6, x4: 1, x5: 41, x6: 16, x7: 48, x8: 26 },
{ x1: 29, x2: 29, x3: 5, x4: 45, x5: 49, x6: 33, x7: 11, x8: 39 },
{ x1: 15, x2: 36, x3: 39, x4: 22, x5: 37, x6: 35, x7: 27, x8: 7 },
{ x1: 25, x2: 9, x3: 11, x4: 4, x5: 7, x6: 29, x7: 7, x8: 30 }
];