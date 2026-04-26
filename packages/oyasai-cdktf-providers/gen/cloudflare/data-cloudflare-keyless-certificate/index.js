"use strict";
// https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/keyless_certificate
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
exports.DataCloudflareKeylessCertificate = exports.DataCloudflareKeylessCertificateTunnelOutputReference = void 0;
exports.dataCloudflareKeylessCertificateTunnelToTerraform = dataCloudflareKeylessCertificateTunnelToTerraform;
exports.dataCloudflareKeylessCertificateTunnelToHclTerraform = dataCloudflareKeylessCertificateTunnelToHclTerraform;
var cdktf = require("cdktf");
function dataCloudflareKeylessCertificateTunnelToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {};
}
function dataCloudflareKeylessCertificateTunnelToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    var attrs = {};
    return attrs;
}
var DataCloudflareKeylessCertificateTunnelOutputReference = /** @class */ (function (_super) {
    __extends(DataCloudflareKeylessCertificateTunnelOutputReference, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    function DataCloudflareKeylessCertificateTunnelOutputReference(terraformResource, terraformAttribute) {
        var _this = _super.call(this, terraformResource, terraformAttribute, false) || this;
        _this.isEmptyObject = false;
        return _this;
    }
    Object.defineProperty(DataCloudflareKeylessCertificateTunnelOutputReference.prototype, "internalValue", {
        get: function () {
            var hasAnyValues = this.isEmptyObject;
            var internalValueResult = {};
            return hasAnyValues ? internalValueResult : undefined;
        },
        set: function (value) {
            if (value === undefined) {
                this.isEmptyObject = false;
            }
            else {
                this.isEmptyObject = Object.keys(value).length === 0;
            }
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareKeylessCertificateTunnelOutputReference.prototype, "privateIp", {
        // private_ip - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('private_ip');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareKeylessCertificateTunnelOutputReference.prototype, "vnetId", {
        // vnet_id - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('vnet_id');
        },
        enumerable: false,
        configurable: true
    });
    return DataCloudflareKeylessCertificateTunnelOutputReference;
}(cdktf.ComplexObject));
exports.DataCloudflareKeylessCertificateTunnelOutputReference = DataCloudflareKeylessCertificateTunnelOutputReference;
/**
* Represents a {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/keyless_certificate cloudflare_keyless_certificate}
*/
var DataCloudflareKeylessCertificate = /** @class */ (function (_super) {
    __extends(DataCloudflareKeylessCertificate, _super);
    // ===========
    // INITIALIZER
    // ===========
    /**
    * Create a new {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/keyless_certificate cloudflare_keyless_certificate} Data Source
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options DataCloudflareKeylessCertificateConfig
    */
    function DataCloudflareKeylessCertificate(scope, id, config) {
        var _this = _super.call(this, scope, id, {
            terraformResourceType: 'cloudflare_keyless_certificate',
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
        // tunnel - computed: true, optional: false, required: false
        _this._tunnel = new DataCloudflareKeylessCertificateTunnelOutputReference(_this, "tunnel");
        _this._keylessCertificateId = config.keylessCertificateId;
        _this._zoneId = config.zoneId;
        return _this;
    }
    // ==============
    // STATIC Methods
    // ==============
    /**
    * Generates CDKTF code for importing a DataCloudflareKeylessCertificate resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the DataCloudflareKeylessCertificate to import
    * @param importFromId The id of the existing DataCloudflareKeylessCertificate that should be imported. Refer to the {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/keyless_certificate#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the DataCloudflareKeylessCertificate to import is found
    */
    DataCloudflareKeylessCertificate.generateConfigForImport = function (scope, importToId, importFromId, provider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "cloudflare_keyless_certificate", importId: importFromId, provider: provider });
    };
    Object.defineProperty(DataCloudflareKeylessCertificate.prototype, "createdOn", {
        // ==========
        // ATTRIBUTES
        // ==========
        // created_on - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('created_on');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareKeylessCertificate.prototype, "enabled", {
        // enabled - computed: true, optional: false, required: false
        get: function () {
            return this.getBooleanAttribute('enabled');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareKeylessCertificate.prototype, "host", {
        // host - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('host');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareKeylessCertificate.prototype, "id", {
        // id - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('id');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareKeylessCertificate.prototype, "keylessCertificateId", {
        get: function () {
            return this.getStringAttribute('keyless_certificate_id');
        },
        set: function (value) {
            this._keylessCertificateId = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareKeylessCertificate.prototype, "keylessCertificateIdInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._keylessCertificateId;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareKeylessCertificate.prototype, "modifiedOn", {
        // modified_on - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('modified_on');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareKeylessCertificate.prototype, "name", {
        // name - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('name');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareKeylessCertificate.prototype, "permissions", {
        // permissions - computed: true, optional: false, required: false
        get: function () {
            return this.getListAttribute('permissions');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareKeylessCertificate.prototype, "port", {
        // port - computed: true, optional: false, required: false
        get: function () {
            return this.getNumberAttribute('port');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareKeylessCertificate.prototype, "status", {
        // status - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('status');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareKeylessCertificate.prototype, "tunnel", {
        get: function () {
            return this._tunnel;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareKeylessCertificate.prototype, "zoneId", {
        get: function () {
            return this.getStringAttribute('zone_id');
        },
        set: function (value) {
            this._zoneId = value;
        },
        enumerable: false,
        configurable: true
    });
    DataCloudflareKeylessCertificate.prototype.resetZoneId = function () {
        this._zoneId = undefined;
    };
    Object.defineProperty(DataCloudflareKeylessCertificate.prototype, "zoneIdInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._zoneId;
        },
        enumerable: false,
        configurable: true
    });
    // =========
    // SYNTHESIS
    // =========
    DataCloudflareKeylessCertificate.prototype.synthesizeAttributes = function () {
        return {
            keyless_certificate_id: cdktf.stringToTerraform(this._keylessCertificateId),
            zone_id: cdktf.stringToTerraform(this._zoneId),
        };
    };
    DataCloudflareKeylessCertificate.prototype.synthesizeHclAttributes = function () {
        var attrs = {
            keyless_certificate_id: {
                value: cdktf.stringToHclTerraform(this._keylessCertificateId),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            zone_id: {
                value: cdktf.stringToHclTerraform(this._zoneId),
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
    DataCloudflareKeylessCertificate.tfResourceType = "cloudflare_keyless_certificate";
    return DataCloudflareKeylessCertificate;
}(cdktf.TerraformDataSource));
exports.DataCloudflareKeylessCertificate = DataCloudflareKeylessCertificate;
