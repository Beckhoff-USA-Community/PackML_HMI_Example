// Keep these lines for a best effort IntelliSense of Visual Studio 2017 and higher.
/// <reference path="Packages/Beckhoff.TwinCAT.HMI.Framework.12.756.1/runtimes/native1.12-tchmi/TcHmi.d.ts" />

(function (/** @type {globalThis.TcHmi} */ TcHmi) {
    var Functions;
    (function (/** @type {globalThis.TcHmi.Functions} */ Functions) {
        var VFFSDemo_HMI;
        (function (VFFSDemo_HMI) {
            function TrimDecimalNumber(NumberToTrim, DecimalPlaces) {
                let myFloat = parseFloat(NumberToTrim).toFixed(DecimalPlaces);
                return myFloat;
                //return Math.round((myFloat + Number.EPSILON) * 100) / 100
                //return Math.round((NumberToTrim + Number.EPSILON) * 100) / 100
            }
            VFFSDemo_HMI.TrimDecimalNumber = TrimDecimalNumber;
        })(VFFSDemo_HMI = Functions.VFFSDemo_HMI || (Functions.VFFSDemo_HMI = {}));
        Functions.registerFunctionEx('TrimDecimalNumber', 'TcHmi.Functions.VFFSDemo_HMI', VFFSDemo_HMI.TrimDecimalNumber);
    })(Functions = TcHmi.Functions || (TcHmi.Functions = {}));
})(TcHmi);