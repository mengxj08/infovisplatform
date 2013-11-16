var sample_size = 30;
var highlight = 0;
var x_range = [ {x1: 50, x2: 50, x3: 50, x4: 50, x5: 50, x6: 50, x7: 50, x8: 50} ];
var traits = ["x1", "x2", "x3", "x4", "x5", "x6", "x7", "x8"];
var data = [
{ x1: 43, x2: 15, x3: 6, x4: 26, x5: 13, x6: 18, x7: 8, x8: 26 },
{ x1: 7, x2: 37, x3: 19, x4: 8, x5: 16, x6: 45, x7: 24, x8: 30 },
{ x1: 20, x2: 25, x3: 37, x4: 42, x5: 35, x6: 44, x7: 44, x8: 2 },
{ x1: 5, x2: 29, x3: 35, x4: 6, x5: 29, x6: 29, x7: 47, x8: 44 },
{ x1: 48, x2: 13, x3: 1, x4: 41, x5: 4, x6: 21, x7: 12, x8: 21 },
{ x1: 48, x2: 42, x3: 44, x4: 33, x5: 41, x6: 12, x7: 47, x8: 19 },
{ x1: 13, x2: 11, x3: 11, x4: 24, x5: 23, x6: 34, x7: 0, x8: 30 },
{ x1: 2, x2: 44, x3: 8, x4: 6, x5: 17, x6: 22, x7: 28, x8: 35 },
{ x1: 28, x2: 24, x3: 18, x4: 37, x5: 10, x6: 40, x7: 11, x8: 9 },
{ x1: 5, x2: 8, x3: 29, x4: 13, x5: 47, x6: 22, x7: 33, x8: 19 },
{ x1: 1, x2: 30, x3: 17, x4: 2, x5: 22, x6: 5, x7: 5, x8: 30 },
{ x1: 5, x2: 10, x3: 29, x4: 10, x5: 31, x6: 4, x7: 12, x8: 17 },
{ x1: 29, x2: 3, x3: 38, x4: 1, x5: 8, x6: 31, x7: 17, x8: 38 },
{ x1: 10, x2: 44, x3: 44, x4: 37, x5: 19, x6: 0, x7: 11, x8: 31 },
{ x1: 11, x2: 34, x3: 13, x4: 41, x5: 15, x6: 28, x7: 39, x8: 48 },
{ x1: 17, x2: 17, x3: 43, x4: 42, x5: 8, x6: 7, x7: 10, x8: 45 },
{ x1: 7, x2: 22, x3: 19, x4: 41, x5: 18, x6: 7, x7: 13, x8: 44 },
{ x1: 28, x2: 7, x3: 8, x4: 32, x5: 49, x6: 23, x7: 10, x8: 29 },
{ x1: 15, x2: 37, x3: 2, x4: 21, x5: 8, x6: 28, x7: 21, x8: 3 },
{ x1: 32, x2: 22, x3: 45, x4: 5, x5: 37, x6: 27, x7: 48, x8: 16 },
{ x1: 3, x2: 36, x3: 47, x4: 24, x5: 8, x6: 8, x7: 18, x8: 21 },
{ x1: 11, x2: 46, x3: 45, x4: 32, x5: 10, x6: 36, x7: 40, x8: 9 },
{ x1: 2, x2: 25, x3: 27, x4: 35, x5: 25, x6: 38, x7: 0, x8: 36 },
{ x1: 28, x2: 32, x3: 10, x4: 1, x5: 32, x6: 43, x7: 28, x8: 24 },
{ x1: 36, x2: 39, x3: 19, x4: 35, x5: 7, x6: 31, x7: 42, x8: 3 },
{ x1: 17, x2: 1, x3: 36, x4: 41, x5: 15, x6: 33, x7: 49, x8: 1 },
{ x1: 4, x2: 3, x3: 41, x4: 28, x5: 20, x6: 8, x7: 36, x8: 37 },
{ x1: 49, x2: 45, x3: 36, x4: 45, x5: 48, x6: 40, x7: 25, x8: 0 },
{ x1: 35, x2: 2, x3: 39, x4: 20, x5: 5, x6: 22, x7: 26, x8: 22 },
{ x1: 30, x2: 9, x3: 40, x4: 24, x5: 34, x6: 36, x7: 12, x8: 9 }
];