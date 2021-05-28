"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.patternGrab = exports.getPositions = void 0;
var getPositions = function (regex, string) {
    var m = null;
    var positions = [];
    var pattern = new RegExp(regex);
    while ((m = pattern.exec(string)) !== null)
        positions.push([m.index, m.index + m[0].length]);
    return positions;
};
exports.getPositions = getPositions;
var patternGrab = function (_a) {
    var regex = _a.regex, string = _a.string;
    var matches = exports.getPositions(regex, string);
    var data = [];
    var positions = [];
    if (matches.length === 0)
        return { data: data, positions: positions };
    if (matches[0][0] !== 0) {
        var pre = matches.shift();
        data.push(string.substr(0, pre[0]));
        positions.push(data.length);
        data.push(string.substr(pre[0], pre[1] - pre[0]));
    }
    for (var matchIndex in matches) {
        var current = matches[matchIndex];
        var next = matches[Number(matchIndex) + 1];
        positions.push(data.length);
        data.push(string.substr(current[0], current[1] - current[0]));
        if (next && current[1] != next[0])
            data.push(string.substr(current[1], next[0] - current[1]));
    }
    if (matches[matches.length - 1]) {
        var lastMatchIndex = matches[matches.length - 1][1];
        if (lastMatchIndex !== string.length)
            data.push(string.substr(lastMatchIndex, string.length - lastMatchIndex));
    }
    return { data: data, positions: positions };
};
exports.patternGrab = patternGrab;
exports.default = exports.patternGrab;
