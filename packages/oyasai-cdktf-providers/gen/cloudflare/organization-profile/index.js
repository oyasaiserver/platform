"use strict";
// https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/organization_profile
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
exports.OrganizationProfileA = void 0;
var cdktf = require("cdktf");
/**
* Represents a {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/organization_profile cloudflare_organization_profile}
*/
var OrganizationProfileA = /** @class */ (function (_super) {
    __extends(OrganizationProfileA, _super);
    // ===========
    // INITIALIZER
    // ===========
    /**
    * Create a new {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/organization_profile cloudflare_organization_profile} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options OrganizationProfileAConfig
    */
    function OrganizationProfileA(scope, id, config) {
        var _this = _super.call(this, scope, id, {
            terraformResourceType: 'cloudflare_organization_profile',
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
        _this._businessAddress = config.businessAddress;
        _this._businessEmail = config.businessEmail;
        _this._businessName = config.businessName;
        _this._businessPhone = config.businessPhone;
        _this._externalMetadata = config.externalMetadata;
        _this._organizationId = config.organizationId;
        return _this;
    }
    // ==============
    // STATIC Methods
    // ==============
    /**
    * Generates CDKTF code for importing a OrganizationProfileA resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the OrganizationProfileA to import
    * @param importFromId The id of the existing OrganizationProfileA that should be imported. Refer to the {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/organization_profile#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the OrganizationProfileA to import is found
    */
    OrganizationProfileA.generateConfigForImport = function (scope, importToId, importFromId, provider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "cloudflare_organization_profile", importId: importFromId, provider: provider });
    };
    Object.defineProperty(OrganizationProfileA.prototype, "businessAddress", {
        get: function () {
            return this.getStringAttribute('business_address');
        },
        set: function (value) {
            this._businessAddress = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(OrganizationProfileA.prototype, "businessAddressInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._businessAddress;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(OrganizationProfileA.prototype, "businessEmail", {
        get: function () {
            return this.getStringAttribute('business_email');
        },
        set: function (value) {
            this._businessEmail = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(OrganizationProfileA.prototype, "businessEmailInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._businessEmail;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(OrganizationProfileA.prototype, "businessName", {
        get: function () {
            return this.getStringAttribute('business_name');
        },
        set: function (value) {
            this._businessName = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(OrganizationProfileA.prototype, "businessNameInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._businessName;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(OrganizationProfileA.prototype, "businessPhone", {
        get: function () {
            return this.getStringAttribute('business_phone');
        },
        set: function (value) {
            this._businessPhone = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(OrganizationProfileA.prototype, "businessPhoneInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._businessPhone;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(OrganizationProfileA.prototype, "externalMetadata", {
        get: function () {
            return this.getStringAttribute('external_metadata');
        },
        set: function (value) {
            this._externalMetadata = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(OrganizationProfileA.prototype, "externalMetadataInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._externalMetadata;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(OrganizationProfileA.prototype, "organizationId", {
        get: function () {
            return this.getStringAttribute('organization_id');
        },
        set: function (value) {
            this._organizationId = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(OrganizationProfileA.prototype, "organizationIdInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._organizationId;
        },
        enumerable: false,
        configurable: true
    });
    // =========
    // SYNTHESIS
    // =========
    OrganizationProfileA.prototype.synthesizeAttributes = function () {
        return {
            business_address: cdktf.stringToTerraform(this._businessAddress),
            business_email: cdktf.stringToTerraform(this._businessEmail),
            business_name: cdktf.stringToTerraform(this._businessName),
            business_phone: cdktf.stringToTerraform(this._businessPhone),
            external_metadata: cdktf.stringToTerraform(this._externalMetadata),
            organization_id: cdktf.stringToTerraform(this._organizationId),
        };
    };
    OrganizationProfileA.prototype.synthesizeHclAttributes = function () {
        var attrs = {
            business_address: {
                value: cdktf.stringToHclTerraform(this._businessAddress),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            business_email: {
                value: cdktf.stringToHclTerraform(this._businessEmail),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            business_name: {
                value: cdktf.stringToHclTerraform(this._businessName),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            business_phone: {
                value: cdktf.stringToHclTerraform(this._businessPhone),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            external_metadata: {
                value: cdktf.stringToHclTerraform(this._externalMetadata),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            organization_id: {
                value: cdktf.stringToHclTerraform(this._organizationId),
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
    OrganizationProfileA.tfResourceType = "cloudflare_organization_profile";
    return OrganizationProfileA;
}(cdktf.TerraformResource));
exports.OrganizationProfileA = OrganizationProfileA;
