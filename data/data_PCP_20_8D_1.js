var sample_size = 20;
var highlight = 0;
var x_range = [ {x1: 50, x2: 50, x3: 50, x4: 50, x5: 50, x6: 50, x7: 50, x8: 50} ];
var traits = ["x1", "x2", "x3", "x4", "x5", "x6", "x7", "x8"];
var data = [
{ x1: 23, x2: 8, x3: 39, x4: 21, x5: 34, x6: 15, x7: 17, x8: 34 },
{ x1: 37, x2: 36, x3: 4, x4: 19, x5: 18, x6: 31, x7: 0, x8: 31 },
{ x1: 40, x2: 30, x3: 5, x4: 2, x5: 11, x6: 44, x7: 1, x8: 15 },
{ x1: 7, x2: 24, x3: 1, x4: 24, x5: 0, x6: 49, x7: 9, x8: 1 },
{ x1: 12, x2: 35, x3: 48, x4: 26, x5: 13, x6: 11, x7: 42, x8: 32 },
{ x1: 8, x2: 13, x3: 2, x4: 42, x5: 32, x6: 26, x7: 14, x8: 44 },
{ x1: 20, x2: 46, x3: 31, x4: 47, x5: 9, x6: 30, x7: 0, x8: 43 },
{ x1: 40, x2: 29, x3: 36, x4: 5, x5: 15, x6: 19, x7: 12, x8: 0 },
{ x1: 14, x2: 3, x3: 17, x4: 14, x5: 48, x6: 18, x7: 13, x8: 36 },
{ x1: 14, x2: 40, x3: 47, x4: 17, x5: 40, x6: 41, x7: 30, x8: 24 },
{ x1: 32, x2: 33, x3: 14, x4: 14, x5: 45, x6: 17, x7: 23, x8: 6 },
{ x1: 20, x2: 36, x3: 7, x4: 35, x5: 12, x6: 41, x7: 13, x8: 46 },
{ x1: 47, x2: 19, x3: 7, x4: 17, x5: 2, x6: 30, x7: 6, x8: 13 },
{ x1: 29, x2: 48, x3: 4, x4: 35, x5: 0, x6: 39, x7: 6, x8: 16 },
{ x1: 29, x2: 19, x3: 11, x4: 12, x5: 3, x6: 20, x7: 43, x8: 21 },
{ x1: 45, x2: 10, x3: 49, x4: 26, x5: 30, x6: 23, x7: 14, x8: 26 },
{ x1: 25, x2: 29, x3: 7, x4: 30, x5: 46, x6: 23, x7: 13, x8: 0 },
{ x1: 28, x2: 25, x3: 21, x4: 15, x5: 42, x6: 45, x7: 13, x8: 23 },
{ x1: 45, x2: 16, x3: 6, x4: 42, x5: 14, x6: 40, x7: 35, x8: 27 },
{ x1: 45, x2: 5, x3: 30, x4: 14, x5: 42, x6: 4, x7: 3, x8: 23 }
];