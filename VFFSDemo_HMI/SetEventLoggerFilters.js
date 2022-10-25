// Keep these lines for a best effort IntelliSense of Visual Studio 2017 and higher.
/// <reference path="Packages/Beckhoff.TwinCAT.HMI.Framework.12.756.1/runtimes/native1.12-tchmi/TcHmi.d.ts" />

(function (/** @type {globalThis.TcHmi} */ TcHmi) {
    var Functions;
    (function (/** @type {globalThis.TcHmi.Functions} */ Functions) {
        var VFFSDemo_HMI;
        (function (VFFSDemo_HMI) {
            function SetEventLoggerFilters(EventGrid, FilterPML) {
                let currentFilter = EventGrid.getFilter();

                let filterItems = [];
                let filterResult = [];

                let andOperator = { logic: 'AND' };
                let eventRaisedFilter = { path: 'alarmState', comparator: '==', value: 0};

                if (FilterPML) {
                    let pmlFilter = {};
                    pmlFilter.path = 'params::eventClassName';
                    pmlFilter.comparator = '!=';
                    pmlFilter.value = 'PackML';
                    filterItems.push(pmlFilter);
                }

                filterResult.push(eventRaisedFilter);

                filterItems.forEach(e => {
                    filterResult.push(andOperator);
                    filterResult.push(e);
                });

                EventGrid.setFilter(filterResult);

            }
            ILBD_HMI.SetEventLoggerFilters = SetEventLoggerFilters;
        })(ILBD_HMI = Functions.ILBD_HMI || (Functions.ILBD_HMI = {}));
        Functions.registerFunctionEx('SetEventLoggerFilters', 'TcHmi.Functions.ILBD_HMI', ILBD_HMI.SetEventLoggerFilters);
    })(Functions = TcHmi.Functions || (TcHmi.Functions = {}));
})(TcHmi);