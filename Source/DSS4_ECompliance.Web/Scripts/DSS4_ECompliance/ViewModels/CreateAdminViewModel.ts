// Copyright (c) CLMS. All rights reserved.
// Licensed under the AGPL-3.0 license. See LICENSE file in the project root for full license information.
// This source file was autogenerated by zAppDev(r).
namespace DSS4_ECompliance.ViewModels.CreateAdmin {
export class CreateAdminViewModel extends DSS4_ECompliance.ViewModels.MasterPageSignIn.MasterPageSignInViewModel {
    public constructor() {
        super();
        this._clientPostedProps = null;
        if (this._members == null) {
            this._members = {
username:
true,password:
true,repeatPassword:
                true
            }
        } else {
            this._members["username"] = true;
            this._members["password"] = true;
            this._members["repeatPassword"] = true;
        }

    }


    public static _lightCast(instance: any): any {
        if (instance == null) return;

        return instance;
    }

    public static _initializeFrom(original: CreateAdminViewModel, ignoreReadOnlyProperties: boolean = false, context = new Joove.DTOHelper()): CreateAdminViewModel {
        if(original == null) return null;
        // if (context.Has(original)) {
        //    return context.Get(original);
        // }
var result:
        CreateAdminViewModel = new CreateAdminViewModel();
        if (context != null && context.fillDb == true) {
            context.addToDb(original);
        }
        result._hydrateCreateAdminViewModel(original, ignoreReadOnlyProperties, context);
        // context.Add(original, result);
        return result;
    }


    public _hydrateCreateAdminViewModel(original: CreateAdminViewModel, ignoreReadOnlyProperties: boolean, context = new Joove.DTOHelper()): void {
        if(original == null) return;

        this._hydrateMasterPageSignInViewModel(original, ignoreReadOnlyProperties, context);

        if(original._key !== undefined) this._key = original._key;
        if(original._clientKey !== undefined) this._clientKey = original._clientKey;
        if(original._originalTypeClassName !== undefined) this._originalTypeClassName = original._originalTypeClassName;
        if(original._typeHash !== undefined) this._typeHash = original._typeHash;

        if(original.username !== undefined) this.username = original.username;
        if(original.password !== undefined) this.password = original.password;
        if(original.repeatPassword !== undefined) this.repeatPassword = original.repeatPassword;

        this._reduceData = function(ignoreReadOnlyProperties: boolean) {
            var reduced = CreateAdminViewModel._initializeFrom(this, ignoreReadOnlyProperties);
            CreateAdminViewModel._deleteDropDownInitialValues(reduced);
            return reduced;
        };
    } /* end _initializeFrom() */


    public _reduceData(ignoreReadOnlyProperties: boolean): CreateAdminViewModel {
        var reduced = CreateAdminViewModel._initializeFrom(this, ignoreReadOnlyProperties);
        CreateAdminViewModel._deleteDropDownInitialValues(reduced);
        return reduced;
    }

    public static _deleteDropDownInitialValues(reduced: CreateAdminViewModel) {
        if (reduced == null) return;


        DSS4_ECompliance.ViewModels.MasterPageSignIn.MasterPageSignInViewModel._deleteDropDownInitialValues(reduced);
    }

protected _members:
    any;
protected _clientPostedProps:
    any;

    public hasMember(propertyName: string): boolean {
        const result = this._members[propertyName];
        if (result == null) {
            return false;
        }
        return this._members[propertyName];
    }

public username:
    any;
public password:
    any;
public repeatPassword:
    any;
}

}