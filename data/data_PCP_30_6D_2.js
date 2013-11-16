var sample_size = 30;
var highlight = 0;
var x_range = [ {x1: 50, x2: 50, x3: 50, x4: 50, x5: 50, x6: 50} ];
var traits = ["x1", "x2", "x3", "x4", "x5", "x6"];
var data = [
{ x1: 36, x2: 19, x3: 15, x4: 46, x5: 23, x6: 6 },
{ x1: 6, x2: 0, x3: 8, x4: 4, x5: 19, x6: 4 },
{ x1: 10, x2: 30, x3: 13, x4: 9, x5: 28, x6: 22 },
{ x1: 15, x2: 15, x3: 44, x4: 15, x5: 9, x6: 4 },
{ x1: 48, x2: 9, x3: 8, x4: 9, x5: 27, x6: 49 },
{ x1: 38, x2: 1, x3: 21, x4: 29, x5: 34, x6: 8 },
{ x1: 17, x2: 46, x3: 18, x4: 12, x5: 40, x6: 41 },
{ x1: 13, x2: 0, x3: 18, x4: 20, x5: 31, x6: 32 },
{ x1: 16, x2: 6, x3: 26, x4: 34, x5: 39, x6: 12 },
{ x1: 5, x2: 12, x3: 18, x4: 30, x5: 32, x6: 33 },
{ x1: 18, x2: 4, x3: 1, x4: 10, x5: 21, x6: 16 },
{ x1: 30, x2: 27, x3: 47, x4: 8, x5: 37, x6: 18 },
{ x1: 41, x2: 32, x3: 39, x4: 26, x5: 30, x6: 22 },
{ x1: 47, x2: 39, x3: 2, x4: 38, x5: 33, x6: 4 },
{ x1: 21, x2: 37, x3: 11, x4: 11, x5: 40, x6: 21 },
{ x1: 48, x2: 3, x3: 17, x4: 28, x5: 16, x6: 2 },
{ x1: 26, x2: 17, x3: 21, x4: 34, x5: 25, x6: 1 },
{ x1: 0, x2: 44, x3: 20, x4: 1, x5: 27, x6: 38 },
{ x1: 38, x2: 35, x3: 34, x4: 26, x5: 32, x6: 13 },
{ x1: 46, x2: 28, x3: 18, x4: 40, x5: 4, x6: 31 },
{ x1: 24, x2: 17, x3: 28, x4: 15, x5: 18, x6: 28 },
{ x1: 24, x2: 2, x3: 32, x4: 42, x5: 37, x6: 13 },
{ x1: 14, x2: 5, x3: 9, x4: 10, x5: 46, x6: 2 },
{ x1: 24, x2: 0, x3: 29, x4: 28, x5: 25, x6: 41 },
{ x1: 18, x2: 0, x3: 0, x4: 14, x5: 33, x6: 19 },
{ x1: 49, x2: 7, x3: 49, x4: 0, x5: 2, x6: 12 },
{ x1: 41, x2: 38, x3: 28, x4: 24, x5: 39, x6: 32 },
{ x1: 19, x2: 44, x3: 26, x4: 24, x5: 7, x6: 38 },
{ x1: 22, x2: 45, x3: 30, x4: 26, x5: 39, x6: 16 },
{ x1: 11, x2: 13, x3: 33, x4: 49, x5: 17, x6: 10 }
];