angular.module("contactApp")
    .service("AppConfigSvc", function (AppNameSvc) {
        this.name = AppNameSvc;
        this.author = "Ukjin";
        this.builtDate = new Date().toDateString();
    });
