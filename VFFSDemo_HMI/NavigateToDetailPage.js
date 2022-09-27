// Keep these lines for a best effort IntelliSense of Visual Studio 2017 and higher.
/// <reference path="Packages/Beckhoff.TwinCAT.HMI.Framework.12.756.1/runtimes/native1.12-tchmi/TcHmi.d.ts" />

(function (/** @type {globalThis.TcHmi} */ TcHmi) {
    var Functions;
    (function (/** @type {globalThis.TcHmi.Functions} */ Functions) {
        var VFFSDemo_HMI;
        (function (VFFSDemo_HMI) {
            function NavigateToDetailPage(ContentPath) {
                if (ContentPath)
                {
                    var mainRegion = TcHmi.Controls.get('Region_Center');
                    if (mainRegion !== undefined) {
                        mainRegion.setTargetContent(ContentPath);
                    }
                }

            }
            VFFSDemo_HMI.NavigateToDetailPage = NavigateToDetailPage;
        })(VFFSDemo_HMI = Functions.VFFSDemo_HMI || (Functions.VFFSDemo_HMI = {}));
        Functions.registerFunctionEx('NavigateToDetailPage', 'TcHmi.Functions.VFFSDemo_HMI', VFFSDemo_HMI.NavigateToDetailPage);
    })(Functions = TcHmi.Functions || (TcHmi.Functions = {}));
})(TcHmi);