module.exports = function check(str, bracketsConfig) {
    var openBreket1 = '(';
    var openBreket2 = '[';
    var closeBreket1 = ')';
    var closeBreket2 = ']';
    var closOpenBreket3 = "|";
    var longBrekets = str.length;
    var calcBreket1 = 0;
    var calcBreket2 = 0;
    var calcBreket3 = 0;
    while (longBrekets >= 0) {
        if (str[longBrekets] === closeBreket1) {
            calcBreket1++;
        }
        if (str[longBrekets] === closeBreket2) {
            calcBreket2++;
        }
        if (str[longBrekets] === openBreket1) {
            if (calcBreket1 - 1 == 0 && calcBreket2 > 0) {
                return false;
            }
            calcBreket1--;
            if (calcBreket1 < 0) {
                return false;
            }
        }
        if (str[longBrekets] === openBreket2) {
            calcBreket2--;
            if (calcBreket2 < 0) {
                return false;
            }
        }
        if (str[longBrekets] === closOpenBreket3) {
            calcBreket3++;
        }
        longBrekets--;
    }
    return (!(calcBreket1) && !(calcBreket1));
}
