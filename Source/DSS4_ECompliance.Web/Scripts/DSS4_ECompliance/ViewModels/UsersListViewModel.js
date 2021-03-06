var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
// Copyright (c) CLMS. All rights reserved.
// Licensed under the AGPL-3.0 license. See LICENSE file in the project root for full license information.
// This source file was autogenerated by zAppDev(r).
var DSS4_ECompliance;
(function (DSS4_ECompliance) {
    var ViewModels;
    (function (ViewModels) {
        var UsersList;
        (function (UsersList) {
            var UsersListViewModel = (function (_super) {
                __extends(UsersListViewModel, _super);
                function UsersListViewModel() {
                    var _this = _super.call(this) || this;
                    _this._clientPostedProps = null;
                    if (_this._members == null) {
                        _this._members = {};
                    }
                    else {
                    }
                    return _this;
                }
                UsersListViewModel._lightCast = function (instance) {
                    if (instance == null)
                        return;
                    return instance;
                };
                UsersListViewModel._initializeFrom = function (original, ignoreReadOnlyProperties, context) {
                    if (ignoreReadOnlyProperties === void 0) { ignoreReadOnlyProperties = false; }
                    if (context === void 0) { context = new Joove.DTOHelper(); }
                    if (original == null)
                        return null;
                    // if (context.Has(original)) {
                    //    return context.Get(original);
                    // }
                    var result = new UsersListViewModel();
                    if (context != null && context.fillDb == true) {
                        context.addToDb(original);
                    }
                    result._hydrateUsersListViewModel(original, ignoreReadOnlyProperties, context);
                    // context.Add(original, result);
                    return result;
                };
                UsersListViewModel.prototype._hydrateUsersListViewModel = function (original, ignoreReadOnlyProperties, context) {
                    if (context === void 0) { context = new Joove.DTOHelper(); }
                    if (original == null)
                        return;
                    this._hydrateMasterPageViewModel(original, ignoreReadOnlyProperties, context);
                    if (original._key !== undefined)
                        this._key = original._key;
                    if (original._clientKey !== undefined)
                        this._clientKey = original._clientKey;
                    if (original._originalTypeClassName !== undefined)
                        this._originalTypeClassName = original._originalTypeClassName;
                    if (original._typeHash !== undefined)
                        this._typeHash = original._typeHash;
                    this.ListSelectedItemKeys = original.ListSelectedItemKeys;
                    this._reduceData = function (ignoreReadOnlyProperties) {
                        var reduced = UsersListViewModel._initializeFrom(this, ignoreReadOnlyProperties);
                        UsersListViewModel._deleteDropDownInitialValues(reduced);
                        return reduced;
                    };
                }; /* end _initializeFrom() */
                UsersListViewModel.prototype._reduceData = function (ignoreReadOnlyProperties) {
                    var reduced = UsersListViewModel._initializeFrom(this, ignoreReadOnlyProperties);
                    UsersListViewModel._deleteDropDownInitialValues(reduced);
                    return reduced;
                };
                UsersListViewModel._deleteDropDownInitialValues = function (reduced) {
                    if (reduced == null)
                        return;
                    DSS4_ECompliance.ViewModels.MasterPage.MasterPageViewModel._deleteDropDownInitialValues(reduced);
                };
                UsersListViewModel.prototype.hasMember = function (propertyName) {
                    var result = this._members[propertyName];
                    if (result == null) {
                        return false;
                    }
                    return this._members[propertyName];
                };
                return UsersListViewModel;
            }(DSS4_ECompliance.ViewModels.MasterPage.MasterPageViewModel));
            UsersList.UsersListViewModel = UsersListViewModel;
        })(UsersList = ViewModels.UsersList || (ViewModels.UsersList = {}));
    })(ViewModels = DSS4_ECompliance.ViewModels || (DSS4_ECompliance.ViewModels = {}));
})(DSS4_ECompliance || (DSS4_ECompliance = {}));
