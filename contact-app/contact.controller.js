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
            this.successMessage = undefined;
            this.failureMessage = undefined;
        };

        this.editMode = false;

        this.toggleEditMode = function () {
            this.editMode = !this.editMode;
        };

        this.saveUser = function() {
            this.toggleEditMode();
            ContactDataSvc.saveUser(this.selectedContact)
            .then(function() {
                self.successMessage = "User data successfully updated.";
            }, function() {
                self.failureMessage = "There was an error. Please try again.";
            });
        };
    });