/*sap.ui.define([
    "sap/m/MessageToast"
], function(MessageToast) {
    'use strict';

    return {
        invoice: function(oEvent) {
            MessageToast.show("Custom handler invoked.");
        }
    };
});*/
sap.ui.define(
    [
      "sap/m/MessageBox",
      "sap/ui/core/library",
      "sap/ui/core/BusyIndicator",
      "sap/m/MessageToast",
    ],
    function (MessageBox, coreLibrary, BusyIndicator) {
      "use strict";
      return {
        invoice: function (oBindingContext, aSelectedContexts) {
          $.ajax({
            url: "/odata/v4/satinfotech/BillingFetch",
            type: "POST",
            contentType: "application/json",
            success: function (response) {
              MessageBox.success("Data submitted successfully.");
            },
            error: function (error) {
              MessageBox.error("Error occurred while submitting data.");
            },
          });
        },
      };
    }
  );