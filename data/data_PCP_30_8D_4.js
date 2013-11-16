var sample_size = 30;
var highlight = 0;
var x_range = [ {x1: 50, x2: 50, x3: 50, x4: 50, x5: 50, x6: 50, x7: 50, x8: 50} ];
var traits = ["x1", "x2", "x3", "x4", "x5", "x6", "x7", "x8"];
var data = [
{ x1: 47, x2: 43, x3: 44, x4: 25, x5: 25, x6: 5, x7: 49, x8: 29 },
{ x1: 31, x2: 18, x3: 38, x4: 35, x5: 49, x6: 31, x7: 16, x8: 40 },
{ x1: 6, x2: 10, x3: 16, x4: 8, x5: 17, x6: 32, x7: 3, x8: 6 },
{ x1: 28, x2: 35, x3: 36, x4: 23, x5: 19, x6: 10, x7: 18, x8: 19 },
{ x1: 37, x2: 1, x3: 38, x4: 10, x5: 41, x6: 2, x7: 12, x8: 39 },
{ x1: 34, x2: 40, x3: 23, x4: 35, x5: 1, x6: 47, x7: 29, x8: 27 },
{ x1: 5, x2: 12, x3: 46, x4: 6, x5: 9, x6: 1, x7: 25, x8: 14 },
{ x1: 27, x2: 14, x3: 16, x4: 32, x5: 28, x6: 39, x7: 16, x8: 6 },
{ x1: 2, x2: 38, x3: 46, x4: 27, x5: 19, x6: 22, x7: 37, x8: 35 },
{ x1: 19, x2: 29, x3: 13, x4: 27, x5: 16, x6: 38, x7: 1, x8: 25 },
{ x1: 23, x2: 48, x3: 5, x4: 32, x5: 29, x6: 11, x7: 25, x8: 48 },
{ x1: 7, x2: 39, x3: 18, x4: 10, x5: 6, x6: 13, x7: 14, x8: 33 },
{ x1: 25, x2: 30, x3: 2, x4: 18, x5: 32, x6: 34, x7: 22, x8: 5 },
{ x1: 0, x2: 3, x3: 4, x4: 14, x5: 36, x6: 24, x7: 41, x8: 24 },
{ x1: 35, x2: 36, x3: 12, x4: 34, x5: 14, x6: 42, x7: 32, x8: 23 },
{ x1: 21, x2: 14, x3: 6, x4: 22, x5: 30, x6: 17, x7: 3, x8: 21 },
{ x1: 1, x2: 4, x3: 3, x4: 4, x5: 40, x6: 7, x7: 41, x8: 44 },
{ x1: 27, x2: 33, x3: 39, x4: 5, x5: 23, x6: 8, x7: 16, x8: 3 },
{ x1: 23, x2: 16, x3: 47, x4: 5, x5: 39, x6: 20, x7: 28, x8: 45 },
{ x1: 14, x2: 4, x3: 39, x4: 14, x5: 42, x6: 31, x7: 29, x8: 4 },
{ x1: 15, x2: 48, x3: 30, x4: 31, x5: 12, x6: 35, x7: 44, x8: 32 },
{ x1: 14, x2: 13, x3: 48, x4: 43, x5: 47, x6: 26, x7: 46, x8: 49 },
{ x1: 0, x2: 16, x3: 25, x4: 20, x5: 12, x6: 9, x7: 15, x8: 32 },
{ x1: 8, x2: 48, x3: 8, x4: 16, x5: 31, x6: 31, x7: 7, x8: 41 },
{ x1: 22, x2: 32, x3: 10, x4: 18, x5: 7, x6: 40, x7: 33, x8: 12 },
{ x1: 38, x2: 15, x3: 48, x4: 37, x5: 34, x6: 31, x7: 44, x8: 44 },
{ x1: 41, x2: 5, x3: 25, x4: 45, x5: 3, x6: 36, x7: 32, x8: 39 },
{ x1: 42, x2: 18, x3: 8, x4: 31, x5: 43, x6: 23, x7: 23, x8: 13 },
{ x1: 27, x2: 38, x3: 40, x4: 8, x5: 28, x6: 39, x7: 0, x8: 22 },
{ x1: 39, x2: 4, x3: 29, x4: 35, x5: 11, x6: 30, x7: 22, x8: 38 }
];