var colorRed = 0;
var colorGreen = 5;
var colorblue = 3;
var Color;
(function (Color) {
    Color[Color["Red"] = 0] = "Red";
    Color[Color["Green"] = 5] = "Green";
    Color[Color["Blue"] = 3] = "Blue";
})(Color || (Color = {}));
;
var backgoundColor = Color.Blue;
backgoundColor;
