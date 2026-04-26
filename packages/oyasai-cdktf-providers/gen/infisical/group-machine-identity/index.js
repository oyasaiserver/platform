"use strict";
// https://registry.terraform.io/providers/infisical/infisical/0.16.18/docs/resources/group_machine_identity
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
exports.GroupMachineIdentity = void 0;
var cdktf = require("cdktf");
/**
* Represents a {@link https://registry.terraform.io/providers/infisical/infisical/0.16.18/docs/resources/group_machine_identity infisical_group_machine_identity}
*/
var GroupMachineIdentity = /** @class */ (function (_super) {
    __extends(GroupMachineIdentity, _super);
    // ===========
    // INITIALIZER
    // ===========
    /**
    * Create a new {@link https://registry.terraform.io/providers/infisical/infisical/0.16.18/docs/resources/group_machine_identity infisical_group_machine_identity} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options GroupMachineIdentityConfig
    */
    function GroupMachineIdentity(scope, id, config) {
        var _this = _super.call(this, scope, id, {
            terraformResourceType: 'infisical_group_machine_identity',
            terraformGeneratorMetadata: {
                providerName: 'infisical',
                providerVersion: '0.16.18'
            },
            provider: config.provider,
            dependsOn: config.dependsOn,
            count: config.count,
            lifecycle: config.lifecycle,
            provisioners: config.provisioners,
            connection: config.connection,
            forEach: config.forEach
        }) || this;
        _this._groupId = config.groupId;
        _this._identityId = config.identityId;
        return _this;
    }
    // ==============
    // STATIC Methods
    // ==============
    /**
    * Generates CDKTF code for importing a GroupMachineIdentity resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the GroupMachineIdentity to import
    * @param importFromId The id of the existing GroupMachineIdentity that should be imported. Refer to the {@link https://registry.terraform.io/providers/infisical/infisical/0.16.18/docs/resources/group_machine_identity#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the GroupMachineIdentity to import is found
    */
    GroupMachineIdentity.generateConfigForImport = function (scope, importToId, importFromId, provider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "infisical_group_machine_identity", importId: importFromId, provider: provider });
    };
    Object.defineProperty(GroupMachineIdentity.prototype, "groupId", {
        get: function () {
            return this.getStringAttribute('group_id');
        },
        set: function (value) {
            this._groupId = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(GroupMachineIdentity.prototype, "groupIdInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._groupId;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(GroupMachineIdentity.prototype, "identityId", {
        get: function () {
            return this.getStringAttribute('identity_id');
        },
        set: function (value) {
            this._identityId = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(GroupMachineIdentity.prototype, "identityIdInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._identityId;
        },
        enumerable: false,
        configurable: true
    });
    // =========
    // SYNTHESIS
    // =========
    GroupMachineIdentity.prototype.synthesizeAttributes = function () {
        return {
            group_id: cdktf.stringToTerraform(this._groupId),
            identity_id: cdktf.stringToTerraform(this._identityId),
        };
    };
    GroupMachineIdentity.prototype.synthesizeHclAttributes = function () {
        var attrs = {
            group_id: {
                value: cdktf.stringToHclTerraform(this._groupId),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            identity_id: {
                value: cdktf.stringToHclTerraform(this._identityId),
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
    GroupMachineIdentity.tfResourceType = "infisical_group_machine_identity";
    return GroupMachineIdentity;
}(cdktf.TerraformResource));
exports.GroupMachineIdentity = GroupMachineIdentity;
