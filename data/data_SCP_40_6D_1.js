var sample_size = 40;
var highlight = 0;
var x_range = [ {x1: 50, x2: 50, x3: 50, x4: 50, x5: 50, x6: 50} ];
var traits = ["x1", "x2", "x3", "x4", "x5", "x6"];
var data = [
{ x1: 45, x2: 28, x3: 41, x4: 21, x5: 19, x6: 28 },
{ x1: 41, x2: 13, x3: 26, x4: 0, x5: 44, x6: 19 },
{ x1: 26, x2: 45, x3: 18, x4: 0, x5: 6, x6: 47 },
{ x1: 1, x2: 2, x3: 6, x4: 14, x5: 44, x6: 0 },
{ x1: 7, x2: 4, x3: 37, x4: 28, x5: 43, x6: 47 },
{ x1: 49, x2: 14, x3: 45, x4: 3, x5: 35, x6: 41 },
{ x1: 13, x2: 37, x3: 9, x4: 38, x5: 43, x6: 48 },
{ x1: 10, x2: 22, x3: 32, x4: 26, x5: 39, x6: 49 },
{ x1: 40, x2: 36, x3: 31, x4: 10, x5: 44, x6: 46 },
{ x1: 29, x2: 0, x3: 8, x4: 15, x5: 16, x6: 0 },
{ x1: 32, x2: 3, x3: 43, x4: 15, x5: 38, x6: 7 },
{ x1: 3, x2: 42, x3: 45, x4: 5, x5: 38, x6: 5 },
{ x1: 48, x2: 26, x3: 43, x4: 16, x5: 5, x6: 42 },
{ x1: 49, x2: 8, x3: 38, x4: 17, x5: 8, x6: 10 },
{ x1: 49, x2: 35, x3: 27, x4: 44, x5: 33, x6: 2 },
{ x1: 38, x2: 21, x3: 43, x4: 17, x5: 14, x6: 37 },
{ x1: 23, x2: 34, x3: 43, x4: 9, x5: 33, x6: 24 },
{ x1: 48, x2: 12, x3: 15, x4: 24, x5: 29, x6: 15 },
{ x1: 13, x2: 26, x3: 6, x4: 23, x5: 34, x6: 5 },
{ x1: 1, x2: 14, x3: 18, x4: 40, x5: 30, x6: 3 },
{ x1: 8, x2: 16, x3: 48, x4: 13, x5: 43, x6: 47 },
{ x1: 18, x2: 32, x3: 1, x4: 40, x5: 16, x6: 48 },
{ x1: 11, x2: 33, x3: 32, x4: 3, x5: 43, x6: 12 },
{ x1: 3, x2: 9, x3: 17, x4: 18, x5: 31, x6: 15 },
{ x1: 19, x2: 39, x3: 7, x4: 43, x5: 44, x6: 2 },
{ x1: 24, x2: 21, x3: 27, x4: 31, x5: 16, x6: 9 },
{ x1: 25, x2: 10, x3: 27, x4: 41, x5: 40, x6: 34 },
{ x1: 30, x2: 8, x3: 39, x4: 34, x5: 29, x6: 7 },
{ x1: 1, x2: 23, x3: 32, x4: 14, x5: 47, x6: 32 },
{ x1: 47, x2: 20, x3: 17, x4: 42, x5: 49, x6: 30 },
{ x1: 40, x2: 10, x3: 27, x4: 48, x5: 11, x6: 25 },
{ x1: 27, x2: 14, x3: 20, x4: 42, x5: 21, x6: 44 },
{ x1: 0, x2: 1, x3: 9, x4: 46, x5: 25, x6: 10 },
{ x1: 1, x2: 47, x3: 26, x4: 19, x5: 45, x6: 39 },
{ x1: 3, x2: 49, x3: 23, x4: 26, x5: 46, x6: 18 },
{ x1: 15, x2: 35, x3: 11, x4: 5, x5: 14, x6: 0 },
{ x1: 1, x2: 2, x3: 46, x4: 34, x5: 12, x6: 11 },
{ x1: 25, x2: 4, x3: 10, x4: 29, x5: 17, x6: 4 },
{ x1: 7, x2: 31, x3: 39, x4: 44, x5: 30, x6: 33 },
{ x1: 1, x2: 23, x3: 4, x4: 45, x5: 0, x6: 17 }
];