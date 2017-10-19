angular.module("contactApp")
    .controller("ContactCtrl", function (ContactDataSvc) {

    this.contacts = ContactDataSvc.contacts;

    this.selectContact = function (index) {
        this.selectedContact = this.contacts[index];
    };
});