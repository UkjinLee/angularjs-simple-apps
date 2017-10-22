angular.module("contactApp")
    .controller("ContactCtrl", function (ContactDataSvc) {

        var self = this;

        ContactDataSvc.getContacts()
            .then(function (data) {
                self.contacts = data;
            });

        this.selectContact = function (index) {
            this.selectedContact = this.contacts[index];
            this.editMode = false;
        };

        this.editMode = false;

        this.toggleEditMode = function () {
            this.editMode = !this.editMode;
        };

        this.saveUser = function() {
            this.toggleEditMode();
            ContactDataSvc.saveUser(this.selectedContact);
        };
    });