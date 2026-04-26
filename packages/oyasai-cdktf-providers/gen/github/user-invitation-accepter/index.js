"use strict";
// https://registry.terraform.io/providers/integrations/github/6.12.0/docs/resources/user_invitation_accepter
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
exports.UserInvitationAccepter = void 0;
var cdktf = require("cdktf");
/**
* Represents a {@link https://registry.terraform.io/providers/integrations/github/6.12.0/docs/resources/user_invitation_accepter github_user_invitation_accepter}
*/
var UserInvitationAccepter = /** @class */ (function (_super) {
    __extends(UserInvitationAccepter, _super);
    // ===========
    // INITIALIZER
    // ===========
    /**
    * Create a new {@link https://registry.terraform.io/providers/integrations/github/6.12.0/docs/resources/user_invitation_accepter github_user_invitation_accepter} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options UserInvitationAccepterConfig = {}
    */
    function UserInvitationAccepter(scope, id, config) {
        if (config === void 0) { config = {}; }
        var _this = _super.call(this, scope, id, {
            terraformResourceType: 'github_user_invitation_accepter',
            terraformGeneratorMetadata: {
                providerName: 'github',
                providerVersion: '6.12.0'
            },
            provider: config.provider,
            dependsOn: config.dependsOn,
            count: config.count,
            lifecycle: config.lifecycle,
            provisioners: config.provisioners,
            connection: config.connection,
            forEach: config.forEach
        }) || this;
        _this._allowEmptyId = config.allowEmptyId;
        _this._id = config.id;
        _this._invitationId = config.invitationId;
        return _this;
    }
    // ==============
    // STATIC Methods
    // ==============
    /**
    * Generates CDKTF code for importing a UserInvitationAccepter resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the UserInvitationAccepter to import
    * @param importFromId The id of the existing UserInvitationAccepter that should be imported. Refer to the {@link https://registry.terraform.io/providers/integrations/github/6.12.0/docs/resources/user_invitation_accepter#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the UserInvitationAccepter to import is found
    */
    UserInvitationAccepter.generateConfigForImport = function (scope, importToId, importFromId, provider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "github_user_invitation_accepter", importId: importFromId, provider: provider });
    };
    Object.defineProperty(UserInvitationAccepter.prototype, "allowEmptyId", {
        get: function () {
            return this.getBooleanAttribute('allow_empty_id');
        },
        set: function (value) {
            this._allowEmptyId = value;
        },
        enumerable: false,
        configurable: true
    });
    UserInvitationAccepter.prototype.resetAllowEmptyId = function () {
        this._allowEmptyId = undefined;
    };
    Object.defineProperty(UserInvitationAccepter.prototype, "allowEmptyIdInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._allowEmptyId;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(UserInvitationAccepter.prototype, "id", {
        get: function () {
            return this.getStringAttribute('id');
        },
        set: function (value) {
            this._id = value;
        },
        enumerable: false,
        configurable: true
    });
    UserInvitationAccepter.prototype.resetId = function () {
        this._id = undefined;
    };
    Object.defineProperty(UserInvitationAccepter.prototype, "idInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._id;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(UserInvitationAccepter.prototype, "invitationId", {
        get: function () {
            return this.getStringAttribute('invitation_id');
        },
        set: function (value) {
            this._invitationId = value;
        },
        enumerable: false,
        configurable: true
    });
    UserInvitationAccepter.prototype.resetInvitationId = function () {
        this._invitationId = undefined;
    };
    Object.defineProperty(UserInvitationAccepter.prototype, "invitationIdInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._invitationId;
        },
        enumerable: false,
        configurable: true
    });
    // =========
    // SYNTHESIS
    // =========
    UserInvitationAccepter.prototype.synthesizeAttributes = function () {
        return {
            allow_empty_id: cdktf.booleanToTerraform(this._allowEmptyId),
            id: cdktf.stringToTerraform(this._id),
            invitation_id: cdktf.stringToTerraform(this._invitationId),
        };
    };
    UserInvitationAccepter.prototype.synthesizeHclAttributes = function () {
        var attrs = {
            allow_empty_id: {
                value: cdktf.booleanToHclTerraform(this._allowEmptyId),
                isBlock: false,
                type: "simple",
                storageClassType: "boolean",
            },
            id: {
                value: cdktf.stringToHclTerraform(this._id),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            invitation_id: {
                value: cdktf.stringToHclTerraform(this._invitationId),
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
    UserInvitationAccepter.tfResourceType = "github_user_invitation_accepter";
    return UserInvitationAccepter;
}(cdktf.TerraformResource));
exports.UserInvitationAccepter = UserInvitationAccepter;
