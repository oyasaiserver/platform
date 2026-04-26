"use strict";
// https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/keyless_certificate
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
exports.KeylessCertificate = exports.KeylessCertificateTunnelOutputReference = void 0;
exports.keylessCertificateTunnelToTerraform = keylessCertificateTunnelToTerraform;
exports.keylessCertificateTunnelToHclTerraform = keylessCertificateTunnelToHclTerraform;
var cdktf = require("cdktf");
function keylessCertificateTunnelToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        private_ip: cdktf.stringToTerraform(struct.privateIp),
        vnet_id: cdktf.stringToTerraform(struct.vnetId),
    };
}
function keylessCertificateTunnelToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    var attrs = {
        private_ip: {
            value: cdktf.stringToHclTerraform(struct.privateIp),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        vnet_id: {
            value: cdktf.stringToHclTerraform(struct.vnetId),
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
var KeylessCertificateTunnelOutputReference = /** @class */ (function (_super) {
    __extends(KeylessCertificateTunnelOutputReference, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    function KeylessCertificateTunnelOutputReference(terraformResource, terraformAttribute) {
        var _this = _super.call(this, terraformResource, terraformAttribute, false) || this;
        _this.isEmptyObject = false;
        return _this;
    }
    Object.defineProperty(KeylessCertificateTunnelOutputReference.prototype, "internalValue", {
        get: function () {
            if (this.resolvableValue) {
                return this.resolvableValue;
            }
            var hasAnyValues = this.isEmptyObject;
            var internalValueResult = {};
            if (this._privateIp !== undefined) {
                hasAnyValues = true;
                internalValueResult.privateIp = this._privateIp;
            }
            if (this._vnetId !== undefined) {
                hasAnyValues = true;
                internalValueResult.vnetId = this._vnetId;
            }
            return hasAnyValues ? internalValueResult : undefined;
        },
        set: function (value) {
            if (value === undefined) {
                this.isEmptyObject = false;
                this.resolvableValue = undefined;
                this._privateIp = undefined;
                this._vnetId = undefined;
            }
            else if (cdktf.Tokenization.isResolvable(value)) {
                this.isEmptyObject = false;
                this.resolvableValue = value;
            }
            else {
                this.isEmptyObject = Object.keys(value).length === 0;
                this.resolvableValue = undefined;
                this._privateIp = value.privateIp;
                this._vnetId = value.vnetId;
            }
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(KeylessCertificateTunnelOutputReference.prototype, "privateIp", {
        get: function () {
            return this.getStringAttribute('private_ip');
        },
        set: function (value) {
            this._privateIp = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(KeylessCertificateTunnelOutputReference.prototype, "privateIpInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._privateIp;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(KeylessCertificateTunnelOutputReference.prototype, "vnetId", {
        get: function () {
            return this.getStringAttribute('vnet_id');
        },
        set: function (value) {
            this._vnetId = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(KeylessCertificateTunnelOutputReference.prototype, "vnetIdInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._vnetId;
        },
        enumerable: false,
        configurable: true
    });
    return KeylessCertificateTunnelOutputReference;
}(cdktf.ComplexObject));
exports.KeylessCertificateTunnelOutputReference = KeylessCertificateTunnelOutputReference;
/**
* Represents a {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/keyless_certificate cloudflare_keyless_certificate}
*/
var KeylessCertificate = /** @class */ (function (_super) {
    __extends(KeylessCertificate, _super);
    // ===========
    // INITIALIZER
    // ===========
    /**
    * Create a new {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/keyless_certificate cloudflare_keyless_certificate} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options KeylessCertificateConfig
    */
    function KeylessCertificate(scope, id, config) {
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
        // tunnel - computed: false, optional: true, required: false
        _this._tunnel = new KeylessCertificateTunnelOutputReference(_this, "tunnel");
        _this._bundleMethod = config.bundleMethod;
        _this._certificate = config.certificate;
        _this._enabled = config.enabled;
        _this._host = config.host;
        _this._name = config.name;
        _this._port = config.port;
        _this._tunnel.internalValue = config.tunnel;
        _this._zoneId = config.zoneId;
        return _this;
    }
    // ==============
    // STATIC Methods
    // ==============
    /**
    * Generates CDKTF code for importing a KeylessCertificate resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the KeylessCertificate to import
    * @param importFromId The id of the existing KeylessCertificate that should be imported. Refer to the {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/keyless_certificate#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the KeylessCertificate to import is found
    */
    KeylessCertificate.generateConfigForImport = function (scope, importToId, importFromId, provider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "cloudflare_keyless_certificate", importId: importFromId, provider: provider });
    };
    Object.defineProperty(KeylessCertificate.prototype, "bundleMethod", {
        get: function () {
            return this.getStringAttribute('bundle_method');
        },
        set: function (value) {
            this._bundleMethod = value;
        },
        enumerable: false,
        configurable: true
    });
    KeylessCertificate.prototype.resetBundleMethod = function () {
        this._bundleMethod = undefined;
    };
    Object.defineProperty(KeylessCertificate.prototype, "bundleMethodInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._bundleMethod;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(KeylessCertificate.prototype, "certificate", {
        get: function () {
            return this.getStringAttribute('certificate');
        },
        set: function (value) {
            this._certificate = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(KeylessCertificate.prototype, "certificateInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._certificate;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(KeylessCertificate.prototype, "createdOn", {
        // created_on - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('created_on');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(KeylessCertificate.prototype, "enabled", {
        get: function () {
            return this.getBooleanAttribute('enabled');
        },
        set: function (value) {
            this._enabled = value;
        },
        enumerable: false,
        configurable: true
    });
    KeylessCertificate.prototype.resetEnabled = function () {
        this._enabled = undefined;
    };
    Object.defineProperty(KeylessCertificate.prototype, "enabledInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._enabled;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(KeylessCertificate.prototype, "host", {
        get: function () {
            return this.getStringAttribute('host');
        },
        set: function (value) {
            this._host = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(KeylessCertificate.prototype, "hostInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._host;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(KeylessCertificate.prototype, "id", {
        // id - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('id');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(KeylessCertificate.prototype, "modifiedOn", {
        // modified_on - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('modified_on');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(KeylessCertificate.prototype, "name", {
        get: function () {
            return this.getStringAttribute('name');
        },
        set: function (value) {
            this._name = value;
        },
        enumerable: false,
        configurable: true
    });
    KeylessCertificate.prototype.resetName = function () {
        this._name = undefined;
    };
    Object.defineProperty(KeylessCertificate.prototype, "nameInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._name;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(KeylessCertificate.prototype, "permissions", {
        // permissions - computed: true, optional: false, required: false
        get: function () {
            return this.getListAttribute('permissions');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(KeylessCertificate.prototype, "port", {
        get: function () {
            return this.getNumberAttribute('port');
        },
        set: function (value) {
            this._port = value;
        },
        enumerable: false,
        configurable: true
    });
    KeylessCertificate.prototype.resetPort = function () {
        this._port = undefined;
    };
    Object.defineProperty(KeylessCertificate.prototype, "portInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._port;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(KeylessCertificate.prototype, "status", {
        // status - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('status');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(KeylessCertificate.prototype, "tunnel", {
        get: function () {
            return this._tunnel;
        },
        enumerable: false,
        configurable: true
    });
    KeylessCertificate.prototype.putTunnel = function (value) {
        this._tunnel.internalValue = value;
    };
    KeylessCertificate.prototype.resetTunnel = function () {
        this._tunnel.internalValue = undefined;
    };
    Object.defineProperty(KeylessCertificate.prototype, "tunnelInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._tunnel.internalValue;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(KeylessCertificate.prototype, "zoneId", {
        get: function () {
            return this.getStringAttribute('zone_id');
        },
        set: function (value) {
            this._zoneId = value;
        },
        enumerable: false,
        configurable: true
    });
    KeylessCertificate.prototype.resetZoneId = function () {
        this._zoneId = undefined;
    };
    Object.defineProperty(KeylessCertificate.prototype, "zoneIdInput", {
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
    KeylessCertificate.prototype.synthesizeAttributes = function () {
        return {
            bundle_method: cdktf.stringToTerraform(this._bundleMethod),
            certificate: cdktf.stringToTerraform(this._certificate),
            enabled: cdktf.booleanToTerraform(this._enabled),
            host: cdktf.stringToTerraform(this._host),
            name: cdktf.stringToTerraform(this._name),
            port: cdktf.numberToTerraform(this._port),
            tunnel: keylessCertificateTunnelToTerraform(this._tunnel.internalValue),
            zone_id: cdktf.stringToTerraform(this._zoneId),
        };
    };
    KeylessCertificate.prototype.synthesizeHclAttributes = function () {
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
            enabled: {
                value: cdktf.booleanToHclTerraform(this._enabled),
                isBlock: false,
                type: "simple",
                storageClassType: "boolean",
            },
            host: {
                value: cdktf.stringToHclTerraform(this._host),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            name: {
                value: cdktf.stringToHclTerraform(this._name),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            port: {
                value: cdktf.numberToHclTerraform(this._port),
                isBlock: false,
                type: "simple",
                storageClassType: "number",
            },
            tunnel: {
                value: keylessCertificateTunnelToHclTerraform(this._tunnel.internalValue),
                isBlock: true,
                type: "struct",
                storageClassType: "KeylessCertificateTunnel",
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
    KeylessCertificate.tfResourceType = "cloudflare_keyless_certificate";
    return KeylessCertificate;
}(cdktf.TerraformResource));
exports.KeylessCertificate = KeylessCertificate;
