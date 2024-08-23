sap.ui.define(['sap/fe/test/ObjectPage'], function(ObjectPage) {
    'use strict';

    var CustomPageDefinitions = {
        actions: {},
        assertions: {}
    };

    return new ObjectPage(
        {
            appId: 'com.sonia.satinfotech.invoice',
            componentId: 'BillingObjectPage',
            contextPath: '/Billing'
        },
        CustomPageDefinitions
    );
});