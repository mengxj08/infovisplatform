var sample_size = 40;
var highlight = 0;
var x_range = [ {x1: 50, x2: 50, x3: 50, x4: 50, x5: 50, x6: 50, x7: 50, x8: 50} ];
var traits = ["x1", "x2", "x3", "x4", "x5", "x6", "x7", "x8"];
var data = [
{ x1: 22, x2: 18, x3: 36, x4: 42, x5: 44, x6: 27, x7: 39, x8: 16 },
{ x1: 11, x2: 1, x3: 0, x4: 22, x5: 14, x6: 23, x7: 20, x8: 3 },
{ x1: 28, x2: 25, x3: 31, x4: 39, x5: 6, x6: 7, x7: 15, x8: 1 },
{ x1: 11, x2: 30, x3: 9, x4: 17, x5: 14, x6: 37, x7: 16, x8: 19 },
{ x1: 47, x2: 16, x3: 9, x4: 19, x5: 13, x6: 9, x7: 25, x8: 8 },
{ x1: 13, x2: 40, x3: 6, x4: 19, x5: 32, x6: 16, x7: 17, x8: 34 },
{ x1: 25, x2: 39, x3: 24, x4: 30, x5: 19, x6: 42, x7: 23, x8: 32 },
{ x1: 42, x2: 22, x3: 11, x4: 2, x5: 8, x6: 4, x7: 24, x8: 5 },
{ x1: 49, x2: 8, x3: 47, x4: 47, x5: 4, x6: 44, x7: 6, x8: 19 },
{ x1: 6, x2: 33, x3: 33, x4: 18, x5: 21, x6: 47, x7: 20, x8: 10 },
{ x1: 33, x2: 36, x3: 48, x4: 10, x5: 41, x6: 31, x7: 47, x8: 35 },
{ x1: 0, x2: 13, x3: 16, x4: 27, x5: 32, x6: 14, x7: 7, x8: 42 },
{ x1: 25, x2: 22, x3: 23, x4: 31, x5: 34, x6: 20, x7: 28, x8: 10 },
{ x1: 29, x2: 36, x3: 41, x4: 26, x5: 26, x6: 39, x7: 5, x8: 30 },
{ x1: 31, x2: 31, x3: 20, x4: 8, x5: 21, x6: 36, x7: 17, x8: 24 },
{ x1: 28, x2: 47, x3: 42, x4: 48, x5: 22, x6: 32, x7: 43, x8: 3 },
{ x1: 16, x2: 4, x3: 47, x4: 37, x5: 20, x6: 32, x7: 13, x8: 30 },
{ x1: 25, x2: 36, x3: 9, x4: 39, x5: 6, x6: 31, x7: 34, x8: 27 },
{ x1: 37, x2: 29, x3: 34, x4: 32, x5: 29, x6: 29, x7: 19, x8: 38 },
{ x1: 33, x2: 11, x3: 26, x4: 23, x5: 30, x6: 10, x7: 20, x8: 47 },
{ x1: 35, x2: 15, x3: 48, x4: 1, x5: 7, x6: 3, x7: 49, x8: 38 },
{ x1: 31, x2: 1, x3: 2, x4: 33, x5: 11, x6: 37, x7: 6, x8: 43 },
{ x1: 44, x2: 15, x3: 21, x4: 36, x5: 21, x6: 43, x7: 25, x8: 35 },
{ x1: 45, x2: 7, x3: 19, x4: 13, x5: 25, x6: 43, x7: 20, x8: 5 },
{ x1: 37, x2: 25, x3: 18, x4: 4, x5: 18, x6: 10, x7: 44, x8: 37 },
{ x1: 42, x2: 44, x3: 21, x4: 15, x5: 36, x6: 10, x7: 24, x8: 7 },
{ x1: 45, x2: 34, x3: 23, x4: 34, x5: 0, x6: 16, x7: 33, x8: 12 },
{ x1: 16, x2: 40, x3: 10, x4: 14, x5: 22, x6: 20, x7: 15, x8: 36 },
{ x1: 38, x2: 11, x3: 1, x4: 28, x5: 23, x6: 32, x7: 44, x8: 12 },
{ x1: 2, x2: 36, x3: 24, x4: 22, x5: 15, x6: 31, x7: 45, x8: 43 },
{ x1: 9, x2: 23, x3: 29, x4: 15, x5: 48, x6: 6, x7: 13, x8: 38 },
{ x1: 28, x2: 45, x3: 31, x4: 27, x5: 47, x6: 40, x7: 26, x8: 24 },
{ x1: 44, x2: 38, x3: 34, x4: 45, x5: 7, x6: 14, x7: 6, x8: 26 },
{ x1: 37, x2: 20, x3: 12, x4: 45, x5: 16, x6: 49, x7: 17, x8: 33 },
{ x1: 14, x2: 48, x3: 3, x4: 17, x5: 19, x6: 37, x7: 3, x8: 19 },
{ x1: 29, x2: 5, x3: 11, x4: 32, x5: 49, x6: 24, x7: 13, x8: 48 },
{ x1: 31, x2: 5, x3: 11, x4: 35, x5: 32, x6: 31, x7: 17, x8: 35 },
{ x1: 7, x2: 7, x3: 15, x4: 44, x5: 26, x6: 47, x7: 35, x8: 32 },
{ x1: 30, x2: 5, x3: 25, x4: 12, x5: 14, x6: 2, x7: 28, x8: 41 },
{ x1: 41, x2: 15, x3: 25, x4: 26, x5: 22, x6: 40, x7: 19, x8: 22 }
];