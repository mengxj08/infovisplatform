var sample_size = 30;
var highlight = 0;
var x_range = [ {x1: 50, x2: 50, x3: 50, x4: 50, x5: 50, x6: 50} ];
var traits = ["x1", "x2", "x3", "x4", "x5", "x6"];
var data = [
{ x1: 22, x2: 10, x3: 34, x4: 12, x5: 6, x6: 32 },
{ x1: 17, x2: 26, x3: 11, x4: 33, x5: 40, x6: 9 },
{ x1: 24, x2: 40, x3: 13, x4: 15, x5: 47, x6: 34 },
{ x1: 7, x2: 18, x3: 8, x4: 3, x5: 21, x6: 5 },
{ x1: 3, x2: 4, x3: 22, x4: 27, x5: 29, x6: 48 },
{ x1: 11, x2: 43, x3: 37, x4: 9, x5: 16, x6: 37 },
{ x1: 36, x2: 41, x3: 8, x4: 16, x5: 35, x6: 46 },
{ x1: 41, x2: 0, x3: 13, x4: 5, x5: 1, x6: 19 },
{ x1: 45, x2: 20, x3: 40, x4: 9, x5: 32, x6: 26 },
{ x1: 0, x2: 16, x3: 19, x4: 16, x5: 29, x6: 48 },
{ x1: 32, x2: 22, x3: 48, x4: 30, x5: 44, x6: 22 },
{ x1: 44, x2: 30, x3: 37, x4: 23, x5: 29, x6: 3 },
{ x1: 36, x2: 22, x3: 14, x4: 33, x5: 29, x6: 35 },
{ x1: 47, x2: 13, x3: 29, x4: 16, x5: 47, x6: 26 },
{ x1: 35, x2: 44, x3: 39, x4: 25, x5: 45, x6: 39 },
{ x1: 35, x2: 12, x3: 24, x4: 36, x5: 18, x6: 45 },
{ x1: 42, x2: 3, x3: 20, x4: 24, x5: 0, x6: 40 },
{ x1: 4, x2: 37, x3: 46, x4: 42, x5: 0, x6: 36 },
{ x1: 29, x2: 15, x3: 31, x4: 3, x5: 47, x6: 29 },
{ x1: 12, x2: 13, x3: 2, x4: 0, x5: 16, x6: 35 },
{ x1: 26, x2: 34, x3: 14, x4: 9, x5: 28, x6: 8 },
{ x1: 44, x2: 40, x3: 38, x4: 24, x5: 42, x6: 48 },
{ x1: 33, x2: 40, x3: 17, x4: 14, x5: 22, x6: 2 },
{ x1: 4, x2: 25, x3: 11, x4: 16, x5: 2, x6: 27 },
{ x1: 20, x2: 44, x3: 41, x4: 4, x5: 18, x6: 27 },
{ x1: 45, x2: 13, x3: 40, x4: 28, x5: 38, x6: 13 },
{ x1: 32, x2: 13, x3: 42, x4: 2, x5: 43, x6: 40 },
{ x1: 33, x2: 27, x3: 15, x4: 23, x5: 31, x6: 35 },
{ x1: 15, x2: 6, x3: 38, x4: 48, x5: 43, x6: 23 },
{ x1: 38, x2: 28, x3: 41, x4: 36, x5: 22, x6: 0 }
];