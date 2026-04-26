"use strict";
// https://registry.terraform.io/providers/integrations/github/6.12.0/docs/resources/enterprise_ip_allow_list_entry
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
exports.EnterpriseIpAllowListEntry = void 0;
var cdktf = require("cdktf");
/**
* Represents a {@link https://registry.terraform.io/providers/integrations/github/6.12.0/docs/resources/enterprise_ip_allow_list_entry github_enterprise_ip_allow_list_entry}
*/
var EnterpriseIpAllowListEntry = /** @class */ (function (_super) {
    __extends(EnterpriseIpAllowListEntry, _super);
    // ===========
    // INITIALIZER
    // ===========
    /**
    * Create a new {@link https://registry.terraform.io/providers/integrations/github/6.12.0/docs/resources/enterprise_ip_allow_list_entry github_enterprise_ip_allow_list_entry} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options EnterpriseIpAllowListEntryConfig
    */
    function EnterpriseIpAllowListEntry(scope, id, config) {
        var _this = _super.call(this, scope, id, {
            terraformResourceType: 'github_enterprise_ip_allow_list_entry',
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
        _this._enterpriseSlug = config.enterpriseSlug;
        _this._id = config.id;
        _this._ip = config.ip;
        _this._isActive = config.isActive;
        _this._name = config.name;
        return _this;
    }
    // ==============
    // STATIC Methods
    // ==============
    /**
    * Generates CDKTF code for importing a EnterpriseIpAllowListEntry resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the EnterpriseIpAllowListEntry to import
    * @param importFromId The id of the existing EnterpriseIpAllowListEntry that should be imported. Refer to the {@link https://registry.terraform.io/providers/integrations/github/6.12.0/docs/resources/enterprise_ip_allow_list_entry#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the EnterpriseIpAllowListEntry to import is found
    */
    EnterpriseIpAllowListEntry.generateConfigForImport = function (scope, importToId, importFromId, provider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "github_enterprise_ip_allow_list_entry", importId: importFromId, provider: provider });
    };
    Object.defineProperty(EnterpriseIpAllowListEntry.prototype, "createdAt", {
        // ==========
        // ATTRIBUTES
        // ==========
        // created_at - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('created_at');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(EnterpriseIpAllowListEntry.prototype, "enterpriseSlug", {
        get: function () {
            return this.getStringAttribute('enterprise_slug');
        },
        set: function (value) {
            this._enterpriseSlug = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(EnterpriseIpAllowListEntry.prototype, "enterpriseSlugInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._enterpriseSlug;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(EnterpriseIpAllowListEntry.prototype, "id", {
        get: function () {
            return this.getStringAttribute('id');
        },
        set: function (value) {
            this._id = value;
        },
        enumerable: false,
        configurable: true
    });
    EnterpriseIpAllowListEntry.prototype.resetId = function () {
        this._id = undefined;
    };
    Object.defineProperty(EnterpriseIpAllowListEntry.prototype, "idInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._id;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(EnterpriseIpAllowListEntry.prototype, "ip", {
        get: function () {
            return this.getStringAttribute('ip');
        },
        set: function (value) {
            this._ip = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(EnterpriseIpAllowListEntry.prototype, "ipInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._ip;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(EnterpriseIpAllowListEntry.prototype, "isActive", {
        get: function () {
            return this.getBooleanAttribute('is_active');
        },
        set: function (value) {
            this._isActive = value;
        },
        enumerable: false,
        configurable: true
    });
    EnterpriseIpAllowListEntry.prototype.resetIsActive = function () {
        this._isActive = undefined;
    };
    Object.defineProperty(EnterpriseIpAllowListEntry.prototype, "isActiveInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._isActive;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(EnterpriseIpAllowListEntry.prototype, "name", {
        get: function () {
            return this.getStringAttribute('name');
        },
        set: function (value) {
            this._name = value;
        },
        enumerable: false,
        configurable: true
    });
    EnterpriseIpAllowListEntry.prototype.resetName = function () {
        this._name = undefined;
    };
    Object.defineProperty(EnterpriseIpAllowListEntry.prototype, "nameInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._name;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(EnterpriseIpAllowListEntry.prototype, "updatedAt", {
        // updated_at - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('updated_at');
        },
        enumerable: false,
        configurable: true
    });
    // =========
    // SYNTHESIS
    // =========
    EnterpriseIpAllowListEntry.prototype.synthesizeAttributes = function () {
        return {
            enterprise_slug: cdktf.stringToTerraform(this._enterpriseSlug),
            id: cdktf.stringToTerraform(this._id),
            ip: cdktf.stringToTerraform(this._ip),
            is_active: cdktf.booleanToTerraform(this._isActive),
            name: cdktf.stringToTerraform(this._name),
        };
    };
    EnterpriseIpAllowListEntry.prototype.synthesizeHclAttributes = function () {
        var attrs = {
            enterprise_slug: {
                value: cdktf.stringToHclTerraform(this._enterpriseSlug),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            id: {
                value: cdktf.stringToHclTerraform(this._id),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            ip: {
                value: cdktf.stringToHclTerraform(this._ip),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            is_active: {
                value: cdktf.booleanToHclTerraform(this._isActive),
                isBlock: false,
                type: "simple",
                storageClassType: "boolean",
            },
            name: {
                value: cdktf.stringToHclTerraform(this._name),
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
    EnterpriseIpAllowListEntry.tfResourceType = "github_enterprise_ip_allow_list_entry";
    return EnterpriseIpAllowListEntry;
}(cdktf.TerraformResource));
exports.EnterpriseIpAllowListEntry = EnterpriseIpAllowListEntry;
