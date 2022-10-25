// Keep these lines for a best effort IntelliSense of Visual Studio 2017 and higher.
/// <reference path="Packages/Beckhoff.TwinCAT.HMI.Framework.12.758.8/runtimes/native1.12-tchmi/TcHmi.d.ts" />

(function (/** @type {globalThis.TcHmi} */ TcHmi) {
    var Functions;
    (function (/** @type {globalThis.TcHmi.Functions} */ Functions) {
        var VFFSDemo_HMI;
        (function (VFFSDemo_HMI) {
            function SetEventBarFilter() {
                let eventGrid = TcHmi.Controls.get('TcHmiEventGrid_Events_1');
                let header = TcHmi.Controls.get('Header_Top');

                if (header) {
                    let items = header.getHeaderItems();
                    items.forEach((item) => {
                        if (item.itemType === 'EventLine') {
                            let control = item.control;
                            eventGrid.setFilter(control.getFilter());
                        }
                    });
                }


            }
            VFFSDemo_HMI.SetEventBarFilter = SetEventBarFilter;
        })(VFFSDemo_HMI = Functions.VFFSDemo_HMI || (Functions.VFFSDemo_HMI = {}));
    })(Functions = TcHmi.Functions || (TcHmi.Functions = {}));
})(TcHmi);
TcHmi.Functions.registerFunctionEx('SetEventBarFilter', 'TcHmi.Functions.VFFSDemo_HMI', TcHmi.Functions.VFFSDemo_HMI.SetEventBarFilter);
