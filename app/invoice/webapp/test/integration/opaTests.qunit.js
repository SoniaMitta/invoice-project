sap.ui.require(
    [
        'sap/fe/test/JourneyRunner',
        'com/sonia/satinfotech/invoice/test/integration/FirstJourney',
		'com/sonia/satinfotech/invoice/test/integration/pages/BillingList',
		'com/sonia/satinfotech/invoice/test/integration/pages/BillingObjectPage',
		'com/sonia/satinfotech/invoice/test/integration/pages/BillingItemsObjectPage'
    ],
    function(JourneyRunner, opaJourney, BillingList, BillingObjectPage, BillingItemsObjectPage) {
        'use strict';
        var JourneyRunner = new JourneyRunner({
            // start index.html in web folder
            launchUrl: sap.ui.require.toUrl('com/sonia/satinfotech/invoice') + '/index.html'
        });

       
        JourneyRunner.run(
            {
                pages: { 
					onTheBillingList: BillingList,
					onTheBillingObjectPage: BillingObjectPage,
					onTheBillingItemsObjectPage: BillingItemsObjectPage
                }
            },
            opaJourney.run
        );
    }
);