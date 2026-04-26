"use strict";
// https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/user_group_members
// generated from terraform resource schema
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserGroupMembers = exports.UserGroupMembersMembersList = exports.UserGroupMembersMembersOutputReference = void 0;
exports.userGroupMembersMembersToTerraform = userGroupMembersMembersToTerraform;
exports.userGroupMembersMembersToHclTerraform = userGroupMembersMembersToHclTerraform;
var cdktf = require("cdktf");
function userGroupMembersMembersToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        id: cdktf.stringToTerraform(struct.id),
    };
}
function userGroupMembersMembersToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    var attrs = {
        id: {
            value: cdktf.stringToHclTerraform(struct.id),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };
    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(function (_a) {
        var _ = _a[0], value = _a[1];
        return value !== undefined && value.value !== undefined;
    }));
}
var UserGroupMembersMembersOutputReference = /** @class */ (function (_super) {
    __extends(UserGroupMembersMembersOutputReference, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    function UserGroupMembersMembersOutputReference(terraformResource, terraformAttribute, complexObjectIndex, complexObjectIsFromSet) {
        var _this = _super.call(this, terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex) || this;
        _this.isEmptyObject = false;
        return _this;
    }
    Object.defineProperty(UserGroupMembersMembersOutputReference.prototype, "internalValue", {
        get: function () {
            if (this.resolvableValue) {
                return this.resolvableValue;
            }
            var hasAnyValues = this.isEmptyObject;
            var internalValueResult = {};
            if (this._id !== undefined) {
                hasAnyValues = true;
                internalValueResult.id = this._id;
            }
            return hasAnyValues ? internalValueResult : undefined;
        },
        set: function (value) {
            if (value === undefined) {
                this.isEmptyObject = false;
                this.resolvableValue = undefined;
                this._id = undefined;
            }
            else if (cdktf.Tokenization.isResolvable(value)) {
                this.isEmptyObject = false;
                this.resolvableValue = value;
            }
            else {
                this.isEmptyObject = Object.keys(value).length === 0;
                this.resolvableValue = undefined;
                this._id = value.id;
            }
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(UserGroupMembersMembersOutputReference.prototype, "id", {
        get: function () {
            return this.getStringAttribute('id');
        },
        set: function (value) {
            this._id = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(UserGroupMembersMembersOutputReference.prototype, "idInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._id;
        },
        enumerable: false,
        configurable: true
    });
    return UserGroupMembersMembersOutputReference;
}(cdktf.ComplexObject));
exports.UserGroupMembersMembersOutputReference = UserGroupMembersMembersOutputReference;
var UserGroupMembersMembersList = /** @class */ (function (_super) {
    __extends(UserGroupMembersMembersList, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    function UserGroupMembersMembersList(terraformResource, terraformAttribute, wrapsSet) {
        var _this = _super.call(this, terraformResource, terraformAttribute, wrapsSet) || this;
        _this.terraformResource = terraformResource;
        _this.terraformAttribute = terraformAttribute;
        _this.wrapsSet = wrapsSet;
        return _this;
    }
    /**
    * @param index the index of the item to return
    */
    UserGroupMembersMembersList.prototype.get = function (index) {
        return new UserGroupMembersMembersOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
    };
    return UserGroupMembersMembersList;
}(cdktf.ComplexList));
exports.UserGroupMembersMembersList = UserGroupMembersMembersList;
/**
* Represents a {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/user_group_members cloudflare_user_group_members}
*/
var UserGroupMembers = /** @class */ (function (_super) {
    __extends(UserGroupMembers, _super);
    // ===========
    // INITIALIZER
    // ===========
    /**
    * Create a new {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/user_group_members cloudflare_user_group_members} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options UserGroupMembersConfig
    */
    function UserGroupMembers(scope, id, config) {
        var _this = _super.call(this, scope, id, {
            terraformResourceType: 'cloudflare_user_group_members',
            terraformGeneratorMetadata: {
                providerName: 'cloudflare',
                providerVersion: '5.19.0'
            },
            provider: config.provider,
            dependsOn: config.dependsOn,
            count: config.count,
            lifecycle: config.lifecycle,
            provisioners: config.provisioners,
            connection: config.connection,
            forEach: config.forEach
        }) || this;
        // members - computed: false, optional: false, required: true
        _this._members = new UserGroupMembersMembersList(_this, "members", false);
        _this._accountId = config.accountId;
        _this._members.internalValue = config.members;
        _this._userGroupId = config.userGroupId;
        return _this;
    }
    // ==============
    // STATIC Methods
    // ==============
    /**
    * Generates CDKTF code for importing a UserGroupMembers resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the UserGroupMembers to import
    * @param importFromId The id of the existing UserGroupMembers that should be imported. Refer to the {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/user_group_members#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the UserGroupMembers to import is found
    */
    UserGroupMembers.generateConfigForImport = function (scope, importToId, importFromId, provider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "cloudflare_user_group_members", importId: importFromId, provider: provider });
    };
    Object.defineProperty(UserGroupMembers.prototype, "accountId", {
        get: function () {
            return this.getStringAttribute('account_id');
        },
        set: function (value) {
            this._accountId = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(UserGroupMembers.prototype, "accountIdInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._accountId;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(UserGroupMembers.prototype, "id", {
        // id - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('id');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(UserGroupMembers.prototype, "members", {
        get: function () {
            return this._members;
        },
        enumerable: false,
        configurable: true
    });
    UserGroupMembers.prototype.putMembers = function (value) {
        this._members.internalValue = value;
    };
    Object.defineProperty(UserGroupMembers.prototype, "membersInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._members.internalValue;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(UserGroupMembers.prototype, "userGroupId", {
        get: function () {
            return this.getStringAttribute('user_group_id');
        },
        set: function (value) {
            this._userGroupId = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(UserGroupMembers.prototype, "userGroupIdInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._userGroupId;
        },
        enumerable: false,
        configurable: true
    });
    // =========
    // SYNTHESIS
    // =========
    UserGroupMembers.prototype.synthesizeAttributes = function () {
        return {
            account_id: cdktf.stringToTerraform(this._accountId),
            members: cdktf.listMapper(userGroupMembersMembersToTerraform, false)(this._members.internalValue),
            user_group_id: cdktf.stringToTerraform(this._userGroupId),
        };
    };
    UserGroupMembers.prototype.synthesizeHclAttributes = function () {
        var attrs = {
            account_id: {
                value: cdktf.stringToHclTerraform(this._accountId),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            members: {
                value: cdktf.listMapperHcl(userGroupMembersMembersToHclTerraform, false)(this._members.internalValue),
                isBlock: true,
                type: "list",
                storageClassType: "UserGroupMembersMembersList",
            },
            user_group_id: {
                value: cdktf.stringToHclTerraform(this._userGroupId),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
        };
        // remove undefined attributes
        return Object.fromEntries(Object.entries(attrs).filter(function (_a) {
            var _ = _a[0], value = _a[1];
            return value !== undefined && value.value !== undefined;
        }));
    };
    // =================
    // STATIC PROPERTIES
    // =================
    UserGroupMembers.tfResourceType = "cloudflare_user_group_members";
    return UserGroupMembers;
}(cdktf.TerraformResource));
exports.UserGroupMembers = UserGroupMembers;
