// Copyright (c) CLMS. All rights reserved.
// Licensed under the AGPL-3.0 license. See LICENSE file in the project root for full license information.
// This source file was autogenerated by zAppDev(r).
var directiveScopeReadyLimit = 10;
var directiveScopeReadyTimeout = 200;
window.onbeforeunload = (e) => {
    if (window._context.isDirty) {
        var msg = window._resourcesManager.getGlobalResource("RES_WEBFORM_DirtyMessage");
        e.returnValue = msg;     // Gecko, Trident, Chrome 34+
        return msg;
    }
};
interface Window { scope_ApplicationSettingsList: DSS4_ECompliance.Controllers.IApplicationSettingsListScope; }
namespace DSS4_ECompliance.Controllers {
const ApplicationSettingsListConditionalFormattings = [
        ];
const ApplicationSettingsListDataValidations = [
        ];
const ApplicationSettingsListCalculatedExpressions = [
        ];

// Datasets Column Info
var List_ColumnInfo = [
new Joove.Widgets.DataListColumnInfo({
dataType: "string",
dataTypeIsEnum: false,
name: "Key",
caption: window._resourcesManager.getDataListColumnCaption("List", "Key", false),
groupable: true,
searchable: true,
visible: true,
orderable: true,
editable: false,
style: "",
classes: "",
itemType: Joove.Widgets.DataListColumnItemType.TEXTBOX,
importable: false,
supportsAggregators: true,
    length: 500,
formatting: null,
width: null,
css: "",
isEncrypted: false,
showFullImage: false
}),

new Joove.Widgets.DataListColumnInfo({
dataType: "string",
dataTypeIsEnum: false,
name: "Value",
caption: window._resourcesManager.getDataListColumnCaption("List", "Value", false),
groupable: true,
searchable: true,
visible: true,
orderable: true,
editable: false,
style: "",
classes: "",
itemType: Joove.Widgets.DataListColumnItemType.TEXTBOX,
importable: false,
supportsAggregators: true,
    length: 500,
formatting: null,
width: null,
css: "",
isEncrypted: false,
showFullImage: false
}),

new Joove.Widgets.DataListColumnInfo({
dataType: "bool",
dataTypeIsEnum: false,
name: "IsCustom",
caption: window._resourcesManager.getDataListColumnCaption("List", "IsCustom", false),
groupable: true,
searchable: true,
visible: true,
orderable: true,
editable: false,
style: "",
classes: "",
itemType: Joove.Widgets.DataListColumnItemType.CHECKBOX,
importable: false,
supportsAggregators: true,
length: null,
formatting: null,
width: null,
css: "",
isEncrypted: false,
showFullImage: false
})] as any;
window["List_ColumnInfo"] = List_ColumnInfo;

// Datasets Projection Shemas
window["List_ProjectionScema"] = {};


export interface IApplicationSettingsListScope extends Joove.IWebPageScope {
model:
    DSS4_ECompliance.ViewModels.ApplicationSettingsList.ApplicationSettingsListViewModel;
_partialModelStructure:
    any;
    _validations?: {
summary: Array<Joove.Validation.BindingEntry>,

    },
    _masterValidations?: any;
}

class ApplicationSettingsListController {
private timeoutDelayLockCreateClicked:
    any;
private timeoutDelayLockEditClicked:
    any;


    private controllerActionFinished = (resetDirty: boolean) => {
        //window.scope_ApplicationSettingsList.model = window.scope_ApplicationSettingsList.dehydrate();
        //window.scope_MasterPage.model = window.scope_ApplicationSettingsList.model;
        DSS4_ECompliance.ViewModels.ApplicationSettingsList.ApplicationSettingsListViewModel._lightCast(window.scope_ApplicationSettingsList.model);
        // Joove.Common.applyScope(window.scope_ApplicationSettingsList);
        if (resetDirty) {
            window._context.isDirty = false;
        }
        window._ruleEngine.update(Joove.EvaluationTimes.OnChange);
    }

    constructor(private $scope: IApplicationSettingsListScope, $timeout: ng.ITimeoutService) {
        window.scope_ApplicationSettingsList = $scope;
        $scope.$onControlChanged = function (event, newValue, dontMakeDirty) {
            Joove.Core.onChange(event.target, newValue, dontMakeDirty)
        }

        $scope.dehydrate = (context = null) => DSS4_ECompliance.ViewModels.ApplicationSettingsList.ApplicationSettingsListViewModel._initializeFrom($scope.model, context);
        $scope._validationsMaster =  window.scope_MasterPage._validations;
        $scope._validations = { summary:
                                [],
                              };

        this.init($scope, $timeout);
        $timeout(() => {

            window._ruleEngine.update(Joove.EvaluationTimes.OnLoad, null, () => {

                $("body").fadeIn(200);

            });
        });

    }

    init($scope: IApplicationSettingsListScope, $timeout: ng.ITimeoutService) {


        $scope.model = DSS4_ECompliance.ViewModels.ApplicationSettingsList.ApplicationSettingsListViewModel._initializeFrom(window.viewDTO.Model);

        window.scope_MasterPage.model = $scope.model;

        new Joove.ReferencesReconstructor().reconstructReferences($scope.model);
        $scope.trackObject = obj => Joove.Common.trackObject(obj);


        //}

        $.connection['eventsHub'].on('__connectedEvent');

        $.connection['eventsHub'].on('forcePageReload', () => {
            window.onbeforeunload = null;
            setTimeout(() => {
                window.location.reload();
            }, 3000);
        });
        $.connection.hub.start(() => {
            Joove.Common.getScope().connectedToSignals();
            Joove.Common.getMasterScope().connectedToSignals();

        });
        $scope.connectedToSignals = () => {
        }
// Event Listeners
        $scope.events = {
        };
        $scope.expressions = {
        }
// Dataset Handler
        $scope.datasets = {
        };
// Controller actions
        $scope.actions = {
Refresh:
            async (_cb, _modalOptions, _e) => {
                Joove.Common.autocompleteFix();

                const implementation = async (): Promise<any> => {
                    Joove.Common.nullSafe<any>(() => window._commander.dataListRefresh(['List']), null);


                    // Joove.Common.applyScope(window.scope_ApplicationSettingsList);
                }


                let spamHelper = new Joove.SpamControlHelper(_e);
                spamHelper.Disable();
                await implementation();
                spamHelper.Enable();
                this.controllerActionFinished(true);
            },
Retrieve:
            async (_cb, _modalOptions, _e) => {
                Joove.Common.autocompleteFix();


                Joove.Core.executeRedirectControllerAction("ApplicationSettingsList", "Retrieve", "GET", [], {}, _modalOptions);
            },
        };
// Events
        $scope.eventCallbacks = {
CreateClicked:
            (e, DataItem, _parents) => {
                window._recorder.addState(e);

                if (e != null) {
                    e.stopPropagation();
                    e.preventDefault();
                }

                if (this.timeoutDelayLockCreateClicked != null) {
                    $timeout.cancel(this.timeoutDelayLockCreateClicked);
                }

                this.timeoutDelayLockCreateClicked = $timeout(() => {
                    Joove.Common.setControlKeyPressed(e, 0); Joove.Common.setLastClickedElement(e);

                    Joove.Validation.Manager.validateFormAndExecute(() => {
                        //This is true only when the menu item is clicked programmatically
                        //and occurs when the middle mouse button click is triggered
                        var openInNewWindow = $(e.target).data("openInNewWindow") === true || undefined;
if (openInNewWindow) $(e.target).data("openInNewWindow", undefined); Joove.Core.executeRedirectControllerAction("ApplicationSettingForm", "AddApplicationSetting", "GET", [], {}, { mode: 'Slide', width: '50%', height: '50%', onClose: () => { $scope.actions.Refresh(); }});
}, { groups: [], withDataValidationsCheck: false, withRequiredFieldsCheck: false });
                }, 0);
            },

EditClicked:
            (e, DataItem, _parents) => {
                window._recorder.addState(e);

                if (e != null) {
                    e.stopPropagation();
                    e.preventDefault();
                }

                if (this.timeoutDelayLockEditClicked != null) {
                    $timeout.cancel(this.timeoutDelayLockEditClicked);
                }

                this.timeoutDelayLockEditClicked = $timeout(() => {
                    Joove.Common.setControlKeyPressed(e, 0); Joove.Common.setLastClickedElement(e);

                    Joove.Validation.Manager.validateFormAndExecute(() => {
                        //This is true only when the menu item is clicked programmatically
                        //and occurs when the middle mouse button click is triggered
                        var openInNewWindow = $(e.target).data("openInNewWindow") === true || undefined;
if (openInNewWindow) $(e.target).data("openInNewWindow", undefined); Joove.Core.executeRedirectControllerAction("ApplicationSettingForm", "EditApplicationSetting", "GET", [Joove.Common.nullSafe<any>(() => Joove.DatasourceManager.getSelectedItem($("[jb-id='List']"), e).Id, 0)], {}, { mode: 'Slide', width: '50%', height: '50%', onClose: () => { $scope.actions.Refresh(); }});
}, { groups: [], withDataValidationsCheck: false, withRequiredFieldsCheck: false });
                }, 0);
            },

        };

// Rules
        window._ruleEngine.addDataValidations(ApplicationSettingsListDataValidations);
        window._ruleEngine.addConditionalFormattings(ApplicationSettingsListConditionalFormattings);
        window._ruleEngine.addCalculatedExpressions(ApplicationSettingsListCalculatedExpressions);

        window._commander.executeCommands(window.viewDTO.ClientCommands);
        window.viewDTO.ClientCommands = [];

        Joove.Common.setNumberLocalizationSettings();
        Joove.DeveloperApi.init($scope as any, window.scope_MasterPage as any);
        window.$formExtend && window.$formExtend();
        window.$onFormLoaded && window.$onFormLoaded();
    }
}
angular.module("Application").controller("ApplicationSettingsListController", ["$scope", "$timeout", ApplicationSettingsListController] as Array<string>);
}