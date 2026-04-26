"use strict";
// https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/custom_ssl
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
exports.CustomSsl = exports.CustomSslKeylessServerOutputReference = exports.CustomSslKeylessServerTunnelOutputReference = exports.CustomSslGeoRestrictionsOutputReference = void 0;
exports.customSslGeoRestrictionsToTerraform = customSslGeoRestrictionsToTerraform;
exports.customSslGeoRestrictionsToHclTerraform = customSslGeoRestrictionsToHclTerraform;
exports.customSslKeylessServerTunnelToTerraform = customSslKeylessServerTunnelToTerraform;
exports.customSslKeylessServerTunnelToHclTerraform = customSslKeylessServerTunnelToHclTerraform;
exports.customSslKeylessServerToTerraform = customSslKeylessServerToTerraform;
exports.customSslKeylessServerToHclTerraform = customSslKeylessServerToHclTerraform;
var cdktf = require("cdktf");
function customSslGeoRestrictionsToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        label: cdktf.stringToTerraform(struct.label),
    };
}
function customSslGeoRestrictionsToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    var attrs = {
        label: {
            value: cdktf.stringToHclTerraform(struct.label),
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
var CustomSslGeoRestrictionsOutputReference = /** @class */ (function (_super) {
    __extends(CustomSslGeoRestrictionsOutputReference, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    function CustomSslGeoRestrictionsOutputReference(terraformResource, terraformAttribute) {
        var _this = _super.call(this, terraformResource, terraformAttribute, false) || this;
        _this.isEmptyObject = false;
        return _this;
    }
    Object.defineProperty(CustomSslGeoRestrictionsOutputReference.prototype, "internalValue", {
        get: function () {
            if (this.resolvableValue) {
                return this.resolvableValue;
            }
            var hasAnyValues = this.isEmptyObject;
            var internalValueResult = {};
            if (this._label !== undefined) {
                hasAnyValues = true;
                internalValueResult.label = this._label;
            }
            return hasAnyValues ? internalValueResult : undefined;
        },
        set: function (value) {
            if (value === undefined) {
                this.isEmptyObject = false;
                this.resolvableValue = undefined;
                this._label = undefined;
            }
            else if (cdktf.Tokenization.isResolvable(value)) {
                this.isEmptyObject = false;
                this.resolvableValue = value;
            }
            else {
                this.isEmptyObject = Object.keys(value).length === 0;
                this.resolvableValue = undefined;
                this._label = value.label;
            }
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(CustomSslGeoRestrictionsOutputReference.prototype, "label", {
        get: function () {
            return this.getStringAttribute('label');
        },
        set: function (value) {
            this._label = value;
        },
        enumerable: false,
        configurable: true
    });
    CustomSslGeoRestrictionsOutputReference.prototype.resetLabel = function () {
        this._label = undefined;
    };
    Object.defineProperty(CustomSslGeoRestrictionsOutputReference.prototype, "labelInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._label;
        },
        enumerable: false,
        configurable: true
    });
    return CustomSslGeoRestrictionsOutputReference;
}(cdktf.ComplexObject));
exports.CustomSslGeoRestrictionsOutputReference = CustomSslGeoRestrictionsOutputReference;
function customSslKeylessServerTunnelToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {};
}
function customSslKeylessServerTunnelToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    var attrs = {};
    return attrs;
}
var CustomSslKeylessServerTunnelOutputReference = /** @class */ (function (_super) {
    __extends(CustomSslKeylessServerTunnelOutputReference, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    function CustomSslKeylessServerTunnelOutputReference(terraformResource, terraformAttribute) {
        var _this = _super.call(this, terraformResource, terraformAttribute, false) || this;
        _this.isEmptyObject = false;
        return _this;
    }
    Object.defineProperty(CustomSslKeylessServerTunnelOutputReference.prototype, "internalValue", {
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
    Object.defineProperty(CustomSslKeylessServerTunnelOutputReference.prototype, "privateIp", {
        // private_ip - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('private_ip');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(CustomSslKeylessServerTunnelOutputReference.prototype, "vnetId", {
        // vnet_id - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('vnet_id');
        },
        enumerable: false,
        configurable: true
    });
    return CustomSslKeylessServerTunnelOutputReference;
}(cdktf.ComplexObject));
exports.CustomSslKeylessServerTunnelOutputReference = CustomSslKeylessServerTunnelOutputReference;
function customSslKeylessServerToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {};
}
function customSslKeylessServerToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    var attrs = {};
    return attrs;
}
var CustomSslKeylessServerOutputReference = /** @class */ (function (_super) {
    __extends(CustomSslKeylessServerOutputReference, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    function CustomSslKeylessServerOutputReference(terraformResource, terraformAttribute) {
        var _this = _super.call(this, terraformResource, terraformAttribute, false) || this;
        _this.isEmptyObject = false;
        // tunnel - computed: true, optional: false, required: false
        _this._tunnel = new CustomSslKeylessServerTunnelOutputReference(_this, "tunnel");
        return _this;
    }
    Object.defineProperty(CustomSslKeylessServerOutputReference.prototype, "internalValue", {
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
    Object.defineProperty(CustomSslKeylessServerOutputReference.prototype, "createdOn", {
        // created_on - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('created_on');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(CustomSslKeylessServerOutputReference.prototype, "enabled", {
        // enabled - computed: true, optional: false, required: false
        get: function () {
            return this.getBooleanAttribute('enabled');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(CustomSslKeylessServerOutputReference.prototype, "host", {
        // host - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('host');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(CustomSslKeylessServerOutputReference.prototype, "id", {
        // id - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('id');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(CustomSslKeylessServerOutputReference.prototype, "modifiedOn", {
        // modified_on - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('modified_on');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(CustomSslKeylessServerOutputReference.prototype, "name", {
        // name - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('name');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(CustomSslKeylessServerOutputReference.prototype, "permissions", {
        // permissions - computed: true, optional: false, required: false
        get: function () {
            return this.getListAttribute('permissions');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(CustomSslKeylessServerOutputReference.prototype, "port", {
        // port - computed: true, optional: false, required: false
        get: function () {
            return this.getNumberAttribute('port');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(CustomSslKeylessServerOutputReference.prototype, "status", {
        // status - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('status');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(CustomSslKeylessServerOutputReference.prototype, "tunnel", {
        get: function () {
            return this._tunnel;
        },
        enumerable: false,
        configurable: true
    });
    return CustomSslKeylessServerOutputReference;
}(cdktf.ComplexObject));
exports.CustomSslKeylessServerOutputReference = CustomSslKeylessServerOutputReference;
/**
* Represents a {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/custom_ssl cloudflare_custom_ssl}
*/
var CustomSsl = /** @class */ (function (_super) {
    __extends(CustomSsl, _super);
    // ===========
    // INITIALIZER
    // ===========
    /**
    * Create a new {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/custom_ssl cloudflare_custom_ssl} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options CustomSslConfig
    */
    function CustomSsl(scope, id, config) {
        var _this = _super.call(this, scope, id, {
            terraformResourceType: 'cloudflare_custom_ssl',
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
        // geo_restrictions - computed: false, optional: true, required: false
        _this._geoRestrictions = new CustomSslGeoRestrictionsOutputReference(_this, "geo_restrictions");
        // keyless_server - computed: true, optional: false, required: false
        _this._keylessServer = new CustomSslKeylessServerOutputReference(_this, "keyless_server");
        _this._bundleMethod = config.bundleMethod;
        _this._certificate = config.certificate;
        _this._customCsrId = config.customCsrId;
        _this._deploy = config.deploy;
        _this._geoRestrictions.internalValue = config.geoRestrictions;
        _this._policy = config.policy;
        _this._privateKey = config.privateKey;
        _this._type = config.type;
        _this._zoneId = config.zoneId;
        return _this;
    }
    // ==============
    // STATIC Methods
    // ==============
    /**
    * Generates CDKTF code for importing a CustomSsl resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the CustomSsl to import
    * @param importFromId The id of the existing CustomSsl that should be imported. Refer to the {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/custom_ssl#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the CustomSsl to import is found
    */
    CustomSsl.generateConfigForImport = function (scope, importToId, importFromId, provider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "cloudflare_custom_ssl", importId: importFromId, provider: provider });
    };
    Object.defineProperty(CustomSsl.prototype, "bundleMethod", {
        get: function () {
            return this.getStringAttribute('bundle_method');
        },
        set: function (value) {
            this._bundleMethod = value;
        },
        enumerable: false,
        configurable: true
    });
    CustomSsl.prototype.resetBundleMethod = function () {
        this._bundleMethod = undefined;
    };
    Object.defineProperty(CustomSsl.prototype, "bundleMethodInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._bundleMethod;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(CustomSsl.prototype, "certificate", {
        get: function () {
            return this.getStringAttribute('certificate');
        },
        set: function (value) {
            this._certificate = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(CustomSsl.prototype, "certificateInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._certificate;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(CustomSsl.prototype, "customCsrId", {
        get: function () {
            return this.getStringAttribute('custom_csr_id');
        },
        set: function (value) {
            this._customCsrId = value;
        },
        enumerable: false,
        configurable: true
    });
    CustomSsl.prototype.resetCustomCsrId = function () {
        this._customCsrId = undefined;
    };
    Object.defineProperty(CustomSsl.prototype, "customCsrIdInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._customCsrId;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(CustomSsl.prototype, "deploy", {
        get: function () {
            return this.getStringAttribute('deploy');
        },
        set: function (value) {
            this._deploy = value;
        },
        enumerable: false,
        configurable: true
    });
    CustomSsl.prototype.resetDeploy = function () {
        this._deploy = undefined;
    };
    Object.defineProperty(CustomSsl.prototype, "deployInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._deploy;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(CustomSsl.prototype, "expiresOn", {
        // expires_on - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('expires_on');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(CustomSsl.prototype, "geoRestrictions", {
        get: function () {
            return this._geoRestrictions;
        },
        enumerable: false,
        configurable: true
    });
    CustomSsl.prototype.putGeoRestrictions = function (value) {
        this._geoRestrictions.internalValue = value;
    };
    CustomSsl.prototype.resetGeoRestrictions = function () {
        this._geoRestrictions.internalValue = undefined;
    };
    Object.defineProperty(CustomSsl.prototype, "geoRestrictionsInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._geoRestrictions.internalValue;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(CustomSsl.prototype, "hosts", {
        // hosts - computed: true, optional: false, required: false
        get: function () {
            return this.getListAttribute('hosts');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(CustomSsl.prototype, "id", {
        // id - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('id');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(CustomSsl.prototype, "issuer", {
        // issuer - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('issuer');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(CustomSsl.prototype, "keylessServer", {
        get: function () {
            return this._keylessServer;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(CustomSsl.prototype, "modifiedOn", {
        // modified_on - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('modified_on');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(CustomSsl.prototype, "policy", {
        get: function () {
            return this.getStringAttribute('policy');
        },
        set: function (value) {
            this._policy = value;
        },
        enumerable: false,
        configurable: true
    });
    CustomSsl.prototype.resetPolicy = function () {
        this._policy = undefined;
    };
    Object.defineProperty(CustomSsl.prototype, "policyInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._policy;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(CustomSsl.prototype, "policyRestrictions", {
        // policy_restrictions - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('policy_restrictions');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(CustomSsl.prototype, "priority", {
        // priority - computed: true, optional: false, required: false
        get: function () {
            return this.getNumberAttribute('priority');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(CustomSsl.prototype, "privateKey", {
        get: function () {
            return this.getStringAttribute('private_key');
        },
        set: function (value) {
            this._privateKey = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(CustomSsl.prototype, "privateKeyInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._privateKey;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(CustomSsl.prototype, "signature", {
        // signature - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('signature');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(CustomSsl.prototype, "status", {
        // status - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('status');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(CustomSsl.prototype, "type", {
        get: function () {
            return this.getStringAttribute('type');
        },
        set: function (value) {
            this._type = value;
        },
        enumerable: false,
        configurable: true
    });
    CustomSsl.prototype.resetType = function () {
        this._type = undefined;
    };
    Object.defineProperty(CustomSsl.prototype, "typeInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._type;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(CustomSsl.prototype, "uploadedOn", {
        // uploaded_on - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('uploaded_on');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(CustomSsl.prototype, "zoneId", {
        get: function () {
            return this.getStringAttribute('zone_id');
        },
        set: function (value) {
            this._zoneId = value;
        },
        enumerable: false,
        configurable: true
    });
    CustomSsl.prototype.resetZoneId = function () {
        this._zoneId = undefined;
    };
    Object.defineProperty(CustomSsl.prototype, "zoneIdInput", {
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
    CustomSsl.prototype.synthesizeAttributes = function () {
        return {
            bundle_method: cdktf.stringToTerraform(this._bundleMethod),
            certificate: cdktf.stringToTerraform(this._certificate),
            custom_csr_id: cdktf.stringToTerraform(this._customCsrId),
            deploy: cdktf.stringToTerraform(this._deploy),
            geo_restrictions: customSslGeoRestrictionsToTerraform(this._geoRestrictions.internalValue),
            policy: cdktf.stringToTerraform(this._policy),
            private_key: cdktf.stringToTerraform(this._privateKey),
            type: cdktf.stringToTerraform(this._type),
            zone_id: cdktf.stringToTerraform(this._zoneId),
        };
    };
    CustomSsl.prototype.synthesizeHclAttributes = function () {
        var attrs = {
            bundle_method: {
                value: cdktf.stringToHclTerraform(this._bundleMethod),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            certificate: {
                value: cdktf.stringToHclTerraform(this._certificate),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            custom_csr_id: {
                value: cdktf.stringToHclTerraform(this._customCsrId),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            deploy: {
                value: cdktf.stringToHclTerraform(this._deploy),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            geo_restrictions: {
                value: customSslGeoRestrictionsToHclTerraform(this._geoRestrictions.internalValue),
                isBlock: true,
                type: "struct",
                storageClassType: "CustomSslGeoRestrictions",
            },
            policy: {
                value: cdktf.stringToHclTerraform(this._policy),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            private_key: {
                value: cdktf.stringToHclTerraform(this._privateKey),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            type: {
                value: cdktf.stringToHclTerraform(this._type),
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
    CustomSsl.tfResourceType = "cloudflare_custom_ssl";
    return CustomSsl;
}(cdktf.TerraformResource));
exports.CustomSsl = CustomSsl;
