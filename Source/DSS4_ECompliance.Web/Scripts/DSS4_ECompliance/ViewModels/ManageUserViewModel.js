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
        var ManageUser;
        (function (ManageUser) {
            var ManageUserViewModel = (function (_super) {
                __extends(ManageUserViewModel, _super);
                function ManageUserViewModel() {
                    var _this = _super.call(this) || this;
                    _this._clientPostedProps = null;
                    if (_this._members == null) {
                        _this._members = {
                            ApplicationUser: true, Password: true, PasswordRetype: true, NewPassword: true
                        };
                    }
                    else {
                        _this._members["ApplicationUser"] = true;
                        _this._members["Password"] = true;
                        _this._members["PasswordRetype"] = true;
                        _this._members["NewPassword"] = true;
                    }
                    return _this;
                }
                ManageUserViewModel._lightCast = function (instance) {
                    if (instance == null)
                        return;
                    if (instance.ApplicationUser != null)
                        instance.ApplicationUser = ApplicationUser_ApplicationUserViewModel._lightCast(instance.ApplicationUser);
                    return instance;
                };
                ManageUserViewModel._initializeFrom = function (original, ignoreReadOnlyProperties, context) {
                    if (ignoreReadOnlyProperties === void 0) { ignoreReadOnlyProperties = false; }
                    if (context === void 0) { context = new Joove.DTOHelper(); }
                    if (original == null)
                        return null;
                    // if (context.Has(original)) {
                    //    return context.Get(original);
                    // }
                    var result = new ManageUserViewModel();
                    if (context != null && context.fillDb == true) {
                        context.addToDb(original);
                    }
                    result._hydrateManageUserViewModel(original, ignoreReadOnlyProperties, context);
                    // context.Add(original, result);
                    return result;
                };
                ManageUserViewModel.prototype._hydrateManageUserViewModel = function (original, ignoreReadOnlyProperties, context) {
                    if (context === void 0) { context = new Joove.DTOHelper(); }
                    if (original == null)
                        return;
                    this._hydrateMasterPageForSlideViewModel(original, ignoreReadOnlyProperties, context);
                    if (original._key !== undefined)
                        this._key = original._key;
                    if (original._clientKey !== undefined)
                        this._clientKey = original._clientKey;
                    if (original._originalTypeClassName !== undefined)
                        this._originalTypeClassName = original._originalTypeClassName;
                    if (original._typeHash !== undefined)
                        this._typeHash = original._typeHash;
                    if (original.ApplicationUser !== undefined)
                        this.ApplicationUser = ApplicationUser_ApplicationUserViewModel._initializeFrom(original.ApplicationUser, ignoreReadOnlyProperties, context);
                    if (original.Password !== undefined)
                        this.Password = original.Password;
                    if (original.PasswordRetype !== undefined)
                        this.PasswordRetype = original.PasswordRetype;
                    if (original.NewPassword !== undefined)
                        this.NewPassword = original.NewPassword;
                    this.Button1SelectedItemKeys = original.Button1SelectedItemKeys;
                    this.Button2SelectedItemKeys = original.Button2SelectedItemKeys;
                    this._reduceData = function (ignoreReadOnlyProperties) {
                        var reduced = ManageUserViewModel._initializeFrom(this, ignoreReadOnlyProperties);
                        ManageUserViewModel._deleteDropDownInitialValues(reduced);
                        return reduced;
                    };
                }; /* end _initializeFrom() */
                ManageUserViewModel.prototype._reduceData = function (ignoreReadOnlyProperties) {
                    var reduced = ManageUserViewModel._initializeFrom(this, ignoreReadOnlyProperties);
                    ManageUserViewModel._deleteDropDownInitialValues(reduced);
                    return reduced;
                };
                ManageUserViewModel._deleteDropDownInitialValues = function (reduced) {
                    if (reduced == null)
                        return;
                    DSS4_ECompliance.ViewModels.MasterPageForSlide.MasterPageForSlideViewModel._deleteDropDownInitialValues(reduced);
                };
                ManageUserViewModel.prototype.hasMember = function (propertyName) {
                    var result = this._members[propertyName];
                    if (result == null) {
                        return false;
                    }
                    return this._members[propertyName];
                };
                return ManageUserViewModel;
            }(DSS4_ECompliance.ViewModels.MasterPageForSlide.MasterPageForSlideViewModel));
            ManageUser.ManageUserViewModel = ManageUserViewModel;
            var ApplicationUser_ApplicationUserViewModel = (function (_super) {
                __extends(ApplicationUser_ApplicationUserViewModel, _super);
                function ApplicationUser_ApplicationUserViewModel() {
                    var _this = _super.call(this) || this;
                    _this._clientPostedProps = null;
                    if (_this._members == null) {
                        _this._members = {
                            AccessFailedCount: true, Email: true, LockoutEnabled: true, Name: true, UserName: true, Permissions: true, Roles: true
                        };
                    }
                    else {
                        _this._members["AccessFailedCount"] = true;
                        _this._members["Email"] = true;
                        _this._members["LockoutEnabled"] = true;
                        _this._members["Name"] = true;
                        _this._members["UserName"] = true;
                        _this._members["Permissions"] = true;
                        _this._members["Roles"] = true;
                    }
                    _this.Permissions = new Array();
                    _this.Roles = new Array();
                    return _this;
                }
                ApplicationUser_ApplicationUserViewModel._lightCast = function (instance) {
                    if (instance == null)
                        return;
                    if (instance.Permissions != null) {
                        for (var i = 0; i < instance.Permissions.length; i++) {
                            instance.Permissions[i] = ApplicationUser_ApplicationUser_Permissions_ApplicationPermissionViewModel._lightCast(instance.Permissions[i]);
                        }
                    }
                    if (instance.Roles != null) {
                        for (var i = 0; i < instance.Roles.length; i++) {
                            instance.Roles[i] = ApplicationUser_ApplicationUser_Roles_ApplicationRoleViewModel._lightCast(instance.Roles[i]);
                        }
                    }
                    return instance;
                };
                ApplicationUser_ApplicationUserViewModel._initializeFrom = function (original, ignoreReadOnlyProperties, context) {
                    if (ignoreReadOnlyProperties === void 0) { ignoreReadOnlyProperties = false; }
                    if (context === void 0) { context = new Joove.DTOHelper(); }
                    if (original == null)
                        return null;
                    // if (context.Has(original)) {
                    //    return context.Get(original);
                    // }
                    var result = new ApplicationUser_ApplicationUserViewModel();
                    if (context != null && context.fillDb == true) {
                        context.addToDb(original);
                    }
                    result._hydrateApplicationUser_ApplicationUserViewModel(original, ignoreReadOnlyProperties, context);
                    // context.Add(original, result);
                    return result;
                };
                ApplicationUser_ApplicationUserViewModel.prototype._hydrateApplicationUser_ApplicationUserViewModel = function (original, ignoreReadOnlyProperties, context) {
                    if (context === void 0) { context = new Joove.DTOHelper(); }
                    if (original == null)
                        return;
                    if (original._key !== undefined)
                        this._key = original._key;
                    if (original._clientKey !== undefined)
                        this._clientKey = original._clientKey;
                    if (original._originalTypeClassName !== undefined)
                        this._originalTypeClassName = original._originalTypeClassName;
                    if (original._typeHash !== undefined)
                        this._typeHash = original._typeHash;
                    if (original._versionTimestamp !== undefined)
                        this._versionTimestamp = original._versionTimestamp;
                    if (original.AccessFailedCount !== undefined)
                        this.AccessFailedCount = original.AccessFailedCount;
                    if (original.Email !== undefined)
                        this.Email = original.Email;
                    if (original.LockoutEnabled !== undefined)
                        this.LockoutEnabled = original.LockoutEnabled;
                    if (original.Name !== undefined)
                        this.Name = original.Name;
                    if (original.UserName !== undefined)
                        this.UserName = original.UserName;
                    if (original.Permissions != null) {
                        for (var i = 0; i < original.Permissions.length; i++) {
                            this.Permissions.push(ApplicationUser_ApplicationUser_Permissions_ApplicationPermissionViewModel._initializeFrom(original.Permissions[i], ignoreReadOnlyProperties, context));
                        }
                    }
                    if (original.Roles != null) {
                        for (var i = 0; i < original.Roles.length; i++) {
                            this.Roles.push(ApplicationUser_ApplicationUser_Roles_ApplicationRoleViewModel._initializeFrom(original.Roles[i], ignoreReadOnlyProperties, context));
                        }
                    }
                    this._reduceData = function (ignoreReadOnlyProperties) {
                        var reduced = ApplicationUser_ApplicationUserViewModel._initializeFrom(this, ignoreReadOnlyProperties);
                        return reduced;
                    };
                }; /* end _initializeFrom() */
                ApplicationUser_ApplicationUserViewModel.prototype._reduceData = function (ignoreReadOnlyProperties) {
                    var reduced = ApplicationUser_ApplicationUserViewModel._initializeFrom(this, ignoreReadOnlyProperties);
                    return reduced;
                };
                ApplicationUser_ApplicationUserViewModel.prototype.hasMember = function (propertyName) {
                    var result = this._members[propertyName];
                    if (result == null) {
                        return false;
                    }
                    return this._members[propertyName];
                };
                return ApplicationUser_ApplicationUserViewModel;
            }(BaseClass.ViewModel));
            ManageUser.ApplicationUser_ApplicationUserViewModel = ApplicationUser_ApplicationUserViewModel;
            var ApplicationUser_ApplicationUser_Permissions_ApplicationPermissionViewModel = (function (_super) {
                __extends(ApplicationUser_ApplicationUser_Permissions_ApplicationPermissionViewModel, _super);
                function ApplicationUser_ApplicationUser_Permissions_ApplicationPermissionViewModel() {
                    var _this = _super.call(this) || this;
                    _this._clientPostedProps = null;
                    if (_this._members == null) {
                        _this._members = {
                            Description: true, Id: true, Name: true
                        };
                    }
                    else {
                        _this._members["Description"] = true;
                        _this._members["Id"] = true;
                        _this._members["Name"] = true;
                    }
                    return _this;
                }
                ApplicationUser_ApplicationUser_Permissions_ApplicationPermissionViewModel._lightCast = function (instance) {
                    if (instance == null)
                        return;
                    return instance;
                };
                ApplicationUser_ApplicationUser_Permissions_ApplicationPermissionViewModel._initializeFrom = function (original, ignoreReadOnlyProperties, context) {
                    if (ignoreReadOnlyProperties === void 0) { ignoreReadOnlyProperties = false; }
                    if (context === void 0) { context = new Joove.DTOHelper(); }
                    if (original == null)
                        return null;
                    // if (context.Has(original)) {
                    //    return context.Get(original);
                    // }
                    var result = new ApplicationUser_ApplicationUser_Permissions_ApplicationPermissionViewModel();
                    if (context != null && context.fillDb == true) {
                        context.addToDb(original);
                    }
                    result._hydrateApplicationUser_ApplicationUser_Permissions_ApplicationPermissionViewModel(original, ignoreReadOnlyProperties, context);
                    // context.Add(original, result);
                    return result;
                };
                ApplicationUser_ApplicationUser_Permissions_ApplicationPermissionViewModel.prototype._hydrateApplicationUser_ApplicationUser_Permissions_ApplicationPermissionViewModel = function (original, ignoreReadOnlyProperties, context) {
                    if (context === void 0) { context = new Joove.DTOHelper(); }
                    if (original == null)
                        return;
                    if (original._key !== undefined)
                        this._key = original._key;
                    if (original._clientKey !== undefined)
                        this._clientKey = original._clientKey;
                    if (original._originalTypeClassName !== undefined)
                        this._originalTypeClassName = original._originalTypeClassName;
                    if (original._typeHash !== undefined)
                        this._typeHash = original._typeHash;
                    if (original._versionTimestamp !== undefined)
                        this._versionTimestamp = original._versionTimestamp;
                    if (ignoreReadOnlyProperties !== true) {
                        if (original.Description !== undefined)
                            this.Description = original.Description;
                    }
                    else {
                        delete this['Description'];
                        delete this._members['Description'];
                    }
                    if (original.Id !== undefined)
                        this.Id = original.Id;
                    if (ignoreReadOnlyProperties !== true) {
                        if (original.Name !== undefined)
                            this.Name = original.Name;
                    }
                    else {
                        delete this['Name'];
                        delete this._members['Name'];
                    }
                    this._reduceData = function (ignoreReadOnlyProperties) {
                        var reduced = ApplicationUser_ApplicationUser_Permissions_ApplicationPermissionViewModel._initializeFrom(this, ignoreReadOnlyProperties);
                        return reduced;
                    };
                }; /* end _initializeFrom() */
                ApplicationUser_ApplicationUser_Permissions_ApplicationPermissionViewModel.prototype._reduceData = function (ignoreReadOnlyProperties) {
                    var reduced = ApplicationUser_ApplicationUser_Permissions_ApplicationPermissionViewModel._initializeFrom(this, ignoreReadOnlyProperties);
                    return reduced;
                };
                ApplicationUser_ApplicationUser_Permissions_ApplicationPermissionViewModel.prototype.hasMember = function (propertyName) {
                    var result = this._members[propertyName];
                    if (result == null) {
                        return false;
                    }
                    return this._members[propertyName];
                };
                return ApplicationUser_ApplicationUser_Permissions_ApplicationPermissionViewModel;
            }(BaseClass.ViewModel));
            ManageUser.ApplicationUser_ApplicationUser_Permissions_ApplicationPermissionViewModel = ApplicationUser_ApplicationUser_Permissions_ApplicationPermissionViewModel;
            var ApplicationUser_ApplicationUser_Roles_ApplicationRoleViewModel = (function (_super) {
                __extends(ApplicationUser_ApplicationUser_Roles_ApplicationRoleViewModel, _super);
                function ApplicationUser_ApplicationUser_Roles_ApplicationRoleViewModel() {
                    var _this = _super.call(this) || this;
                    _this._clientPostedProps = null;
                    if (_this._members == null) {
                        _this._members = {
                            Description: true, Id: true, Name: true
                        };
                    }
                    else {
                        _this._members["Description"] = true;
                        _this._members["Id"] = true;
                        _this._members["Name"] = true;
                    }
                    return _this;
                }
                ApplicationUser_ApplicationUser_Roles_ApplicationRoleViewModel._lightCast = function (instance) {
                    if (instance == null)
                        return;
                    return instance;
                };
                ApplicationUser_ApplicationUser_Roles_ApplicationRoleViewModel._initializeFrom = function (original, ignoreReadOnlyProperties, context) {
                    if (ignoreReadOnlyProperties === void 0) { ignoreReadOnlyProperties = false; }
                    if (context === void 0) { context = new Joove.DTOHelper(); }
                    if (original == null)
                        return null;
                    // if (context.Has(original)) {
                    //    return context.Get(original);
                    // }
                    var result = new ApplicationUser_ApplicationUser_Roles_ApplicationRoleViewModel();
                    if (context != null && context.fillDb == true) {
                        context.addToDb(original);
                    }
                    result._hydrateApplicationUser_ApplicationUser_Roles_ApplicationRoleViewModel(original, ignoreReadOnlyProperties, context);
                    // context.Add(original, result);
                    return result;
                };
                ApplicationUser_ApplicationUser_Roles_ApplicationRoleViewModel.prototype._hydrateApplicationUser_ApplicationUser_Roles_ApplicationRoleViewModel = function (original, ignoreReadOnlyProperties, context) {
                    if (context === void 0) { context = new Joove.DTOHelper(); }
                    if (original == null)
                        return;
                    if (original._key !== undefined)
                        this._key = original._key;
                    if (original._clientKey !== undefined)
                        this._clientKey = original._clientKey;
                    if (original._originalTypeClassName !== undefined)
                        this._originalTypeClassName = original._originalTypeClassName;
                    if (original._typeHash !== undefined)
                        this._typeHash = original._typeHash;
                    if (original._versionTimestamp !== undefined)
                        this._versionTimestamp = original._versionTimestamp;
                    if (ignoreReadOnlyProperties !== true) {
                        if (original.Description !== undefined)
                            this.Description = original.Description;
                    }
                    else {
                        delete this['Description'];
                        delete this._members['Description'];
                    }
                    if (original.Id !== undefined)
                        this.Id = original.Id;
                    if (ignoreReadOnlyProperties !== true) {
                        if (original.Name !== undefined)
                            this.Name = original.Name;
                    }
                    else {
                        delete this['Name'];
                        delete this._members['Name'];
                    }
                    this._reduceData = function (ignoreReadOnlyProperties) {
                        var reduced = ApplicationUser_ApplicationUser_Roles_ApplicationRoleViewModel._initializeFrom(this, ignoreReadOnlyProperties);
                        return reduced;
                    };
                }; /* end _initializeFrom() */
                ApplicationUser_ApplicationUser_Roles_ApplicationRoleViewModel.prototype._reduceData = function (ignoreReadOnlyProperties) {
                    var reduced = ApplicationUser_ApplicationUser_Roles_ApplicationRoleViewModel._initializeFrom(this, ignoreReadOnlyProperties);
                    return reduced;
                };
                ApplicationUser_ApplicationUser_Roles_ApplicationRoleViewModel.prototype.hasMember = function (propertyName) {
                    var result = this._members[propertyName];
                    if (result == null) {
                        return false;
                    }
                    return this._members[propertyName];
                };
                return ApplicationUser_ApplicationUser_Roles_ApplicationRoleViewModel;
            }(BaseClass.ViewModel));
            ManageUser.ApplicationUser_ApplicationUser_Roles_ApplicationRoleViewModel = ApplicationUser_ApplicationUser_Roles_ApplicationRoleViewModel;
        })(ManageUser = ViewModels.ManageUser || (ViewModels.ManageUser = {}));
    })(ViewModels = DSS4_ECompliance.ViewModels || (DSS4_ECompliance.ViewModels = {}));
})(DSS4_ECompliance || (DSS4_ECompliance = {}));
