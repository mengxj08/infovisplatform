var sample_size = 30;
var highlight = 0;
var x_range = [ {x1: 50, x2: 50, x3: 50, x4: 50, x5: 50, x6: 50, x7: 50, x8: 50} ];
var traits = ["x1", "x2", "x3", "x4", "x5", "x6", "x7", "x8"];
var data = [
{ x1: 17, x2: 22, x3: 28, x4: 42, x5: 16, x6: 17, x7: 11, x8: 8 },
{ x1: 2, x2: 36, x3: 42, x4: 14, x5: 8, x6: 9, x7: 2, x8: 46 },
{ x1: 0, x2: 30, x3: 5, x4: 31, x5: 29, x6: 3, x7: 30, x8: 32 },
{ x1: 37, x2: 35, x3: 32, x4: 3, x5: 1, x6: 43, x7: 28, x8: 40 },
{ x1: 27, x2: 27, x3: 19, x4: 44, x5: 22, x6: 38, x7: 28, x8: 31 },
{ x1: 19, x2: 49, x3: 40, x4: 39, x5: 45, x6: 2, x7: 2, x8: 1 },
{ x1: 47, x2: 33, x3: 49, x4: 31, x5: 44, x6: 8, x7: 39, x8: 5 },
{ x1: 9, x2: 26, x3: 47, x4: 27, x5: 9, x6: 39, x7: 3, x8: 38 },
{ x1: 7, x2: 38, x3: 15, x4: 7, x5: 10, x6: 22, x7: 0, x8: 44 },
{ x1: 11, x2: 12, x3: 10, x4: 37, x5: 28, x6: 26, x7: 7, x8: 36 },
{ x1: 44, x2: 1, x3: 39, x4: 44, x5: 32, x6: 12, x7: 38, x8: 16 },
{ x1: 47, x2: 29, x3: 1, x4: 37, x5: 37, x6: 6, x7: 1, x8: 26 },
{ x1: 14, x2: 43, x3: 33, x4: 0, x5: 4, x6: 28, x7: 9, x8: 15 },
{ x1: 29, x2: 11, x3: 7, x4: 45, x5: 30, x6: 34, x7: 13, x8: 22 },
{ x1: 7, x2: 37, x3: 36, x4: 46, x5: 36, x6: 19, x7: 35, x8: 13 },
{ x1: 31, x2: 34, x3: 42, x4: 0, x5: 25, x6: 24, x7: 13, x8: 12 },
{ x1: 45, x2: 34, x3: 23, x4: 23, x5: 45, x6: 25, x7: 23, x8: 20 },
{ x1: 36, x2: 32, x3: 37, x4: 3, x5: 33, x6: 25, x7: 34, x8: 19 },
{ x1: 46, x2: 20, x3: 7, x4: 10, x5: 14, x6: 6, x7: 30, x8: 0 },
{ x1: 14, x2: 19, x3: 44, x4: 8, x5: 33, x6: 15, x7: 27, x8: 37 },
{ x1: 26, x2: 45, x3: 1, x4: 28, x5: 46, x6: 44, x7: 22, x8: 41 },
{ x1: 1, x2: 30, x3: 2, x4: 28, x5: 0, x6: 41, x7: 33, x8: 23 },
{ x1: 1, x2: 46, x3: 9, x4: 35, x5: 1, x6: 5, x7: 45, x8: 12 },
{ x1: 7, x2: 40, x3: 3, x4: 34, x5: 25, x6: 48, x7: 7, x8: 43 },
{ x1: 27, x2: 46, x3: 21, x4: 35, x5: 24, x6: 33, x7: 44, x8: 25 },
{ x1: 36, x2: 9, x3: 45, x4: 29, x5: 20, x6: 47, x7: 48, x8: 14 },
{ x1: 45, x2: 41, x3: 15, x4: 26, x5: 13, x6: 0, x7: 44, x8: 43 },
{ x1: 14, x2: 25, x3: 42, x4: 37, x5: 47, x6: 7, x7: 23, x8: 26 },
{ x1: 44, x2: 5, x3: 37, x4: 0, x5: 35, x6: 37, x7: 40, x8: 18 },
{ x1: 9, x2: 45, x3: 19, x4: 9, x5: 22, x6: 24, x7: 45, x8: 14 }
];