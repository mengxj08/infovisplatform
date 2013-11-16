var sample_size = 20;
var highlight = 0;
var x_range = [ {x1: 50, x2: 50, x3: 50, x4: 50, x5: 50, x6: 50, x7: 50, x8: 50} ];
var traits = ["x1", "x2", "x3", "x4", "x5", "x6", "x7", "x8"];
var data = [
{ x1: 24, x2: 26, x3: 22, x4: 36, x5: 14, x6: 40, x7: 22, x8: 34 },
{ x1: 31, x2: 47, x3: 44, x4: 4, x5: 42, x6: 1, x7: 16, x8: 23 },
{ x1: 3, x2: 44, x3: 42, x4: 42, x5: 25, x6: 32, x7: 48, x8: 18 },
{ x1: 12, x2: 32, x3: 2, x4: 0, x5: 32, x6: 23, x7: 37, x8: 12 },
{ x1: 42, x2: 30, x3: 0, x4: 20, x5: 29, x6: 42, x7: 33, x8: 16 },
{ x1: 15, x2: 49, x3: 1, x4: 27, x5: 26, x6: 15, x7: 0, x8: 25 },
{ x1: 13, x2: 24, x3: 45, x4: 5, x5: 31, x6: 34, x7: 37, x8: 9 },
{ x1: 20, x2: 18, x3: 40, x4: 47, x5: 24, x6: 16, x7: 2, x8: 39 },
{ x1: 40, x2: 39, x3: 45, x4: 48, x5: 47, x6: 12, x7: 24, x8: 13 },
{ x1: 21, x2: 31, x3: 8, x4: 33, x5: 31, x6: 2, x7: 37, x8: 46 },
{ x1: 32, x2: 49, x3: 30, x4: 42, x5: 6, x6: 24, x7: 29, x8: 20 },
{ x1: 36, x2: 0, x3: 9, x4: 4, x5: 38, x6: 21, x7: 5, x8: 4 },
{ x1: 17, x2: 17, x3: 15, x4: 31, x5: 26, x6: 28, x7: 30, x8: 43 },
{ x1: 0, x2: 12, x3: 27, x4: 30, x5: 34, x6: 2, x7: 39, x8: 46 },
{ x1: 38, x2: 22, x3: 34, x4: 45, x5: 42, x6: 10, x7: 3, x8: 25 },
{ x1: 47, x2: 19, x3: 14, x4: 43, x5: 38, x6: 33, x7: 42, x8: 31 },
{ x1: 35, x2: 12, x3: 14, x4: 22, x5: 11, x6: 49, x7: 44, x8: 15 },
{ x1: 39, x2: 4, x3: 35, x4: 24, x5: 30, x6: 13, x7: 31, x8: 23 },
{ x1: 12, x2: 12, x3: 45, x4: 41, x5: 5, x6: 8, x7: 30, x8: 4 },
{ x1: 0, x2: 40, x3: 3, x4: 20, x5: 11, x6: 47, x7: 15, x8: 2 }
];