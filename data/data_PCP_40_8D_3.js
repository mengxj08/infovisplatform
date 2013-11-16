var sample_size = 40;
var highlight = 0;
var x_range = [ {x1: 50, x2: 50, x3: 50, x4: 50, x5: 50, x6: 50, x7: 50, x8: 50} ];
var traits = ["x1", "x2", "x3", "x4", "x5", "x6", "x7", "x8"];
var data = [
{ x1: 9, x2: 24, x3: 27, x4: 19, x5: 38, x6: 39, x7: 36, x8: 47 },
{ x1: 40, x2: 28, x3: 49, x4: 6, x5: 41, x6: 13, x7: 34, x8: 42 },
{ x1: 31, x2: 45, x3: 35, x4: 48, x5: 1, x6: 35, x7: 26, x8: 18 },
{ x1: 14, x2: 18, x3: 1, x4: 14, x5: 0, x6: 42, x7: 48, x8: 35 },
{ x1: 20, x2: 48, x3: 30, x4: 13, x5: 30, x6: 34, x7: 6, x8: 18 },
{ x1: 33, x2: 3, x3: 19, x4: 25, x5: 41, x6: 0, x7: 24, x8: 0 },
{ x1: 15, x2: 28, x3: 32, x4: 10, x5: 48, x6: 1, x7: 22, x8: 0 },
{ x1: 22, x2: 2, x3: 4, x4: 11, x5: 1, x6: 17, x7: 46, x8: 19 },
{ x1: 20, x2: 18, x3: 1, x4: 28, x5: 28, x6: 43, x7: 39, x8: 45 },
{ x1: 35, x2: 6, x3: 3, x4: 22, x5: 7, x6: 43, x7: 25, x8: 7 },
{ x1: 12, x2: 32, x3: 4, x4: 39, x5: 4, x6: 42, x7: 29, x8: 40 },
{ x1: 29, x2: 42, x3: 15, x4: 22, x5: 12, x6: 32, x7: 16, x8: 6 },
{ x1: 5, x2: 45, x3: 6, x4: 35, x5: 47, x6: 24, x7: 26, x8: 44 },
{ x1: 44, x2: 10, x3: 19, x4: 2, x5: 41, x6: 42, x7: 47, x8: 24 },
{ x1: 31, x2: 35, x3: 37, x4: 24, x5: 41, x6: 27, x7: 30, x8: 22 },
{ x1: 26, x2: 14, x3: 39, x4: 16, x5: 44, x6: 23, x7: 46, x8: 1 },
{ x1: 26, x2: 14, x3: 18, x4: 39, x5: 23, x6: 1, x7: 32, x8: 43 },
{ x1: 21, x2: 17, x3: 33, x4: 43, x5: 35, x6: 13, x7: 33, x8: 23 },
{ x1: 23, x2: 11, x3: 30, x4: 42, x5: 24, x6: 23, x7: 38, x8: 49 },
{ x1: 30, x2: 36, x3: 37, x4: 42, x5: 30, x6: 23, x7: 19, x8: 8 },
{ x1: 1, x2: 19, x3: 15, x4: 2, x5: 42, x6: 24, x7: 14, x8: 40 },
{ x1: 1, x2: 41, x3: 13, x4: 2, x5: 43, x6: 33, x7: 0, x8: 3 },
{ x1: 6, x2: 11, x3: 30, x4: 14, x5: 29, x6: 49, x7: 24, x8: 49 },
{ x1: 4, x2: 7, x3: 29, x4: 32, x5: 8, x6: 8, x7: 45, x8: 17 },
{ x1: 34, x2: 32, x3: 33, x4: 49, x5: 34, x6: 49, x7: 33, x8: 43 },
{ x1: 11, x2: 27, x3: 48, x4: 4, x5: 43, x6: 26, x7: 1, x8: 32 },
{ x1: 29, x2: 9, x3: 20, x4: 9, x5: 5, x6: 6, x7: 32, x8: 36 },
{ x1: 25, x2: 33, x3: 19, x4: 28, x5: 12, x6: 21, x7: 4, x8: 49 },
{ x1: 3, x2: 22, x3: 3, x4: 7, x5: 27, x6: 8, x7: 47, x8: 44 },
{ x1: 30, x2: 12, x3: 41, x4: 30, x5: 46, x6: 9, x7: 5, x8: 25 },
{ x1: 49, x2: 19, x3: 25, x4: 45, x5: 10, x6: 47, x7: 49, x8: 15 },
{ x1: 15, x2: 4, x3: 39, x4: 41, x5: 32, x6: 48, x7: 15, x8: 8 },
{ x1: 7, x2: 33, x3: 9, x4: 49, x5: 14, x6: 8, x7: 48, x8: 1 },
{ x1: 1, x2: 42, x3: 9, x4: 10, x5: 12, x6: 26, x7: 7, x8: 6 },
{ x1: 6, x2: 17, x3: 49, x4: 15, x5: 23, x6: 34, x7: 9, x8: 19 },
{ x1: 33, x2: 11, x3: 2, x4: 46, x5: 40, x6: 31, x7: 47, x8: 38 },
{ x1: 39, x2: 38, x3: 1, x4: 14, x5: 14, x6: 10, x7: 22, x8: 21 },
{ x1: 17, x2: 14, x3: 20, x4: 12, x5: 29, x6: 32, x7: 14, x8: 0 },
{ x1: 13, x2: 29, x3: 13, x4: 12, x5: 26, x6: 3, x7: 47, x8: 36 },
{ x1: 40, x2: 19, x3: 4, x4: 11, x5: 11, x6: 10, x7: 27, x8: 15 }
];