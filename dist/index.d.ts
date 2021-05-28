export declare const getPositions: (regex: RegExp, string: string) => [number, number][];
export declare const patternGrab: ({ regex, string }: {
    regex: RegExp;
    string: string;
}) => {
    data: string[];
    positions: number[];
};
export default patternGrab;
