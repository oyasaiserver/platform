"use strict";
// https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/organization_profile
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
exports.DataCloudflareOrganizationProfileA = void 0;
var cdktf = require("cdktf");
/**
* Represents a {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/organization_profile cloudflare_organization_profile}
*/
var DataCloudflareOrganizationProfileA = /** @class */ (function (_super) {
    __extends(DataCloudflareOrganizationProfileA, _super);
    // ===========
    // INITIALIZER
    // ===========
    /**
    * Create a new {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/organization_profile cloudflare_organization_profile} Data Source
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options DataCloudflareOrganizationProfileAConfig
    */
    function DataCloudflareOrganizationProfileA(scope, id, config) {
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
        _this._organizationId = config.organizationId;
        return _this;
    }
    // ==============
    // STATIC Methods
    // ==============
    /**
    * Generates CDKTF code for importing a DataCloudflareOrganizationProfileA resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the DataCloudflareOrganizationProfileA to import
    * @param importFromId The id of the existing DataCloudflareOrganizationProfileA that should be imported. Refer to the {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/organization_profile#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the DataCloudflareOrganizationProfileA to import is found
    */
    DataCloudflareOrganizationProfileA.generateConfigForImport = function (scope, importToId, importFromId, provider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "cloudflare_organization_profile", importId: importFromId, provider: provider });
    };
    Object.defineProperty(DataCloudflareOrganizationProfileA.prototype, "businessAddress", {
        // ==========
        // ATTRIBUTES
        // ==========
        // business_address - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('business_address');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareOrganizationProfileA.prototype, "businessEmail", {
        // business_email - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('business_email');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareOrganizationProfileA.prototype, "businessName", {
        // business_name - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('business_name');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareOrganizationProfileA.prototype, "businessPhone", {
        // business_phone - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('business_phone');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareOrganizationProfileA.prototype, "externalMetadata", {
        // external_metadata - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('external_metadata');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareOrganizationProfileA.prototype, "organizationId", {
        get: function () {
            return this.getStringAttribute('organization_id');
        },
        set: function (value) {
            this._organizationId = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareOrganizationProfileA.prototype, "organizationIdInput", {
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
    DataCloudflareOrganizationProfileA.prototype.synthesizeAttributes = function () {
        return {
            organization_id: cdktf.stringToTerraform(this._organizationId),
        };
    };
    DataCloudflareOrganizationProfileA.prototype.synthesizeHclAttributes = function () {
        var attrs = {
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
    DataCloudflareOrganizationProfileA.tfResourceType = "cloudflare_organization_profile";
    return DataCloudflareOrganizationProfileA;
}(cdktf.TerraformDataSource));
exports.DataCloudflareOrganizationProfileA = DataCloudflareOrganizationProfileA;
