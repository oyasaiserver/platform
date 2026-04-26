"use strict";
// https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/hyperdrive_config
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
exports.HyperdriveConfig = exports.HyperdriveConfigOriginOutputReference = exports.HyperdriveConfigMtlsOutputReference = exports.HyperdriveConfigCachingOutputReference = void 0;
exports.hyperdriveConfigCachingToTerraform = hyperdriveConfigCachingToTerraform;
exports.hyperdriveConfigCachingToHclTerraform = hyperdriveConfigCachingToHclTerraform;
exports.hyperdriveConfigMtlsToTerraform = hyperdriveConfigMtlsToTerraform;
exports.hyperdriveConfigMtlsToHclTerraform = hyperdriveConfigMtlsToHclTerraform;
exports.hyperdriveConfigOriginToTerraform = hyperdriveConfigOriginToTerraform;
exports.hyperdriveConfigOriginToHclTerraform = hyperdriveConfigOriginToHclTerraform;
var cdktf = require("cdktf");
function hyperdriveConfigCachingToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        disabled: cdktf.booleanToTerraform(struct.disabled),
        max_age: cdktf.numberToTerraform(struct.maxAge),
        stale_while_revalidate: cdktf.numberToTerraform(struct.staleWhileRevalidate),
    };
}
function hyperdriveConfigCachingToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    var attrs = {
        disabled: {
            value: cdktf.booleanToHclTerraform(struct.disabled),
            isBlock: false,
            type: "simple",
            storageClassType: "boolean",
        },
        max_age: {
            value: cdktf.numberToHclTerraform(struct.maxAge),
            isBlock: false,
            type: "simple",
            storageClassType: "number",
        },
        stale_while_revalidate: {
            value: cdktf.numberToHclTerraform(struct.staleWhileRevalidate),
            isBlock: false,
            type: "simple",
            storageClassType: "number",
        },
    };
    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(function (_a) {
        var _ = _a[0], value = _a[1];
        return value !== undefined && value.value !== undefined;
    }));
}
var HyperdriveConfigCachingOutputReference = /** @class */ (function (_super) {
    __extends(HyperdriveConfigCachingOutputReference, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    function HyperdriveConfigCachingOutputReference(terraformResource, terraformAttribute) {
        var _this = _super.call(this, terraformResource, terraformAttribute, false) || this;
        _this.isEmptyObject = false;
        return _this;
    }
    Object.defineProperty(HyperdriveConfigCachingOutputReference.prototype, "internalValue", {
        get: function () {
            if (this.resolvableValue) {
                return this.resolvableValue;
            }
            var hasAnyValues = this.isEmptyObject;
            var internalValueResult = {};
            if (this._disabled !== undefined) {
                hasAnyValues = true;
                internalValueResult.disabled = this._disabled;
            }
            if (this._maxAge !== undefined) {
                hasAnyValues = true;
                internalValueResult.maxAge = this._maxAge;
            }
            if (this._staleWhileRevalidate !== undefined) {
                hasAnyValues = true;
                internalValueResult.staleWhileRevalidate = this._staleWhileRevalidate;
            }
            return hasAnyValues ? internalValueResult : undefined;
        },
        set: function (value) {
            if (value === undefined) {
                this.isEmptyObject = false;
                this.resolvableValue = undefined;
                this._disabled = undefined;
                this._maxAge = undefined;
                this._staleWhileRevalidate = undefined;
            }
            else if (cdktf.Tokenization.isResolvable(value)) {
                this.isEmptyObject = false;
                this.resolvableValue = value;
            }
            else {
                this.isEmptyObject = Object.keys(value).length === 0;
                this.resolvableValue = undefined;
                this._disabled = value.disabled;
                this._maxAge = value.maxAge;
                this._staleWhileRevalidate = value.staleWhileRevalidate;
            }
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(HyperdriveConfigCachingOutputReference.prototype, "disabled", {
        get: function () {
            return this.getBooleanAttribute('disabled');
        },
        set: function (value) {
            this._disabled = value;
        },
        enumerable: false,
        configurable: true
    });
    HyperdriveConfigCachingOutputReference.prototype.resetDisabled = function () {
        this._disabled = undefined;
    };
    Object.defineProperty(HyperdriveConfigCachingOutputReference.prototype, "disabledInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._disabled;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(HyperdriveConfigCachingOutputReference.prototype, "maxAge", {
        get: function () {
            return this.getNumberAttribute('max_age');
        },
        set: function (value) {
            this._maxAge = value;
        },
        enumerable: false,
        configurable: true
    });
    HyperdriveConfigCachingOutputReference.prototype.resetMaxAge = function () {
        this._maxAge = undefined;
    };
    Object.defineProperty(HyperdriveConfigCachingOutputReference.prototype, "maxAgeInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._maxAge;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(HyperdriveConfigCachingOutputReference.prototype, "staleWhileRevalidate", {
        get: function () {
            return this.getNumberAttribute('stale_while_revalidate');
        },
        set: function (value) {
            this._staleWhileRevalidate = value;
        },
        enumerable: false,
        configurable: true
    });
    HyperdriveConfigCachingOutputReference.prototype.resetStaleWhileRevalidate = function () {
        this._staleWhileRevalidate = undefined;
    };
    Object.defineProperty(HyperdriveConfigCachingOutputReference.prototype, "staleWhileRevalidateInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._staleWhileRevalidate;
        },
        enumerable: false,
        configurable: true
    });
    return HyperdriveConfigCachingOutputReference;
}(cdktf.ComplexObject));
exports.HyperdriveConfigCachingOutputReference = HyperdriveConfigCachingOutputReference;
function hyperdriveConfigMtlsToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        ca_certificate_id: cdktf.stringToTerraform(struct.caCertificateId),
        mtls_certificate_id: cdktf.stringToTerraform(struct.mtlsCertificateId),
        sslmode: cdktf.stringToTerraform(struct.sslmode),
    };
}
function hyperdriveConfigMtlsToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    var attrs = {
        ca_certificate_id: {
            value: cdktf.stringToHclTerraform(struct.caCertificateId),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        mtls_certificate_id: {
            value: cdktf.stringToHclTerraform(struct.mtlsCertificateId),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        sslmode: {
            value: cdktf.stringToHclTerraform(struct.sslmode),
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
var HyperdriveConfigMtlsOutputReference = /** @class */ (function (_super) {
    __extends(HyperdriveConfigMtlsOutputReference, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    function HyperdriveConfigMtlsOutputReference(terraformResource, terraformAttribute) {
        var _this = _super.call(this, terraformResource, terraformAttribute, false) || this;
        _this.isEmptyObject = false;
        return _this;
    }
    Object.defineProperty(HyperdriveConfigMtlsOutputReference.prototype, "internalValue", {
        get: function () {
            if (this.resolvableValue) {
                return this.resolvableValue;
            }
            var hasAnyValues = this.isEmptyObject;
            var internalValueResult = {};
            if (this._caCertificateId !== undefined) {
                hasAnyValues = true;
                internalValueResult.caCertificateId = this._caCertificateId;
            }
            if (this._mtlsCertificateId !== undefined) {
                hasAnyValues = true;
                internalValueResult.mtlsCertificateId = this._mtlsCertificateId;
            }
            if (this._sslmode !== undefined) {
                hasAnyValues = true;
                internalValueResult.sslmode = this._sslmode;
            }
            return hasAnyValues ? internalValueResult : undefined;
        },
        set: function (value) {
            if (value === undefined) {
                this.isEmptyObject = false;
                this.resolvableValue = undefined;
                this._caCertificateId = undefined;
                this._mtlsCertificateId = undefined;
                this._sslmode = undefined;
            }
            else if (cdktf.Tokenization.isResolvable(value)) {
                this.isEmptyObject = false;
                this.resolvableValue = value;
            }
            else {
                this.isEmptyObject = Object.keys(value).length === 0;
                this.resolvableValue = undefined;
                this._caCertificateId = value.caCertificateId;
                this._mtlsCertificateId = value.mtlsCertificateId;
                this._sslmode = value.sslmode;
            }
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(HyperdriveConfigMtlsOutputReference.prototype, "caCertificateId", {
        get: function () {
            return this.getStringAttribute('ca_certificate_id');
        },
        set: function (value) {
            this._caCertificateId = value;
        },
        enumerable: false,
        configurable: true
    });
    HyperdriveConfigMtlsOutputReference.prototype.resetCaCertificateId = function () {
        this._caCertificateId = undefined;
    };
    Object.defineProperty(HyperdriveConfigMtlsOutputReference.prototype, "caCertificateIdInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._caCertificateId;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(HyperdriveConfigMtlsOutputReference.prototype, "mtlsCertificateId", {
        get: function () {
            return this.getStringAttribute('mtls_certificate_id');
        },
        set: function (value) {
            this._mtlsCertificateId = value;
        },
        enumerable: false,
        configurable: true
    });
    HyperdriveConfigMtlsOutputReference.prototype.resetMtlsCertificateId = function () {
        this._mtlsCertificateId = undefined;
    };
    Object.defineProperty(HyperdriveConfigMtlsOutputReference.prototype, "mtlsCertificateIdInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._mtlsCertificateId;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(HyperdriveConfigMtlsOutputReference.prototype, "sslmode", {
        get: function () {
            return this.getStringAttribute('sslmode');
        },
        set: function (value) {
            this._sslmode = value;
        },
        enumerable: false,
        configurable: true
    });
    HyperdriveConfigMtlsOutputReference.prototype.resetSslmode = function () {
        this._sslmode = undefined;
    };
    Object.defineProperty(HyperdriveConfigMtlsOutputReference.prototype, "sslmodeInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._sslmode;
        },
        enumerable: false,
        configurable: true
    });
    return HyperdriveConfigMtlsOutputReference;
}(cdktf.ComplexObject));
exports.HyperdriveConfigMtlsOutputReference = HyperdriveConfigMtlsOutputReference;
function hyperdriveConfigOriginToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        access_client_id: cdktf.stringToTerraform(struct.accessClientId),
        access_client_secret: cdktf.stringToTerraform(struct.accessClientSecret),
        database: cdktf.stringToTerraform(struct.database),
        host: cdktf.stringToTerraform(struct.host),
        password: cdktf.stringToTerraform(struct.password),
        port: cdktf.numberToTerraform(struct.port),
        scheme: cdktf.stringToTerraform(struct.scheme),
        service_id: cdktf.stringToTerraform(struct.serviceId),
        user: cdktf.stringToTerraform(struct.user),
    };
}
function hyperdriveConfigOriginToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    var attrs = {
        access_client_id: {
            value: cdktf.stringToHclTerraform(struct.accessClientId),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        access_client_secret: {
            value: cdktf.stringToHclTerraform(struct.accessClientSecret),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        database: {
            value: cdktf.stringToHclTerraform(struct.database),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        host: {
            value: cdktf.stringToHclTerraform(struct.host),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        password: {
            value: cdktf.stringToHclTerraform(struct.password),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        port: {
            value: cdktf.numberToHclTerraform(struct.port),
            isBlock: false,
            type: "simple",
            storageClassType: "number",
        },
        scheme: {
            value: cdktf.stringToHclTerraform(struct.scheme),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        service_id: {
            value: cdktf.stringToHclTerraform(struct.serviceId),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        user: {
            value: cdktf.stringToHclTerraform(struct.user),
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
var HyperdriveConfigOriginOutputReference = /** @class */ (function (_super) {
    __extends(HyperdriveConfigOriginOutputReference, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    function HyperdriveConfigOriginOutputReference(terraformResource, terraformAttribute) {
        var _this = _super.call(this, terraformResource, terraformAttribute, false) || this;
        _this.isEmptyObject = false;
        return _this;
    }
    Object.defineProperty(HyperdriveConfigOriginOutputReference.prototype, "internalValue", {
        get: function () {
            if (this.resolvableValue) {
                return this.resolvableValue;
            }
            var hasAnyValues = this.isEmptyObject;
            var internalValueResult = {};
            if (this._accessClientId !== undefined) {
                hasAnyValues = true;
                internalValueResult.accessClientId = this._accessClientId;
            }
            if (this._accessClientSecret !== undefined) {
                hasAnyValues = true;
                internalValueResult.accessClientSecret = this._accessClientSecret;
            }
            if (this._database !== undefined) {
                hasAnyValues = true;
                internalValueResult.database = this._database;
            }
            if (this._host !== undefined) {
                hasAnyValues = true;
                internalValueResult.host = this._host;
            }
            if (this._password !== undefined) {
                hasAnyValues = true;
                internalValueResult.password = this._password;
            }
            if (this._port !== undefined) {
                hasAnyValues = true;
                internalValueResult.port = this._port;
            }
            if (this._scheme !== undefined) {
                hasAnyValues = true;
                internalValueResult.scheme = this._scheme;
            }
            if (this._serviceId !== undefined) {
                hasAnyValues = true;
                internalValueResult.serviceId = this._serviceId;
            }
            if (this._user !== undefined) {
                hasAnyValues = true;
                internalValueResult.user = this._user;
            }
            return hasAnyValues ? internalValueResult : undefined;
        },
        set: function (value) {
            if (value === undefined) {
                this.isEmptyObject = false;
                this.resolvableValue = undefined;
                this._accessClientId = undefined;
                this._accessClientSecret = undefined;
                this._database = undefined;
                this._host = undefined;
                this._password = undefined;
                this._port = undefined;
                this._scheme = undefined;
                this._serviceId = undefined;
                this._user = undefined;
            }
            else if (cdktf.Tokenization.isResolvable(value)) {
                this.isEmptyObject = false;
                this.resolvableValue = value;
            }
            else {
                this.isEmptyObject = Object.keys(value).length === 0;
                this.resolvableValue = undefined;
                this._accessClientId = value.accessClientId;
                this._accessClientSecret = value.accessClientSecret;
                this._database = value.database;
                this._host = value.host;
                this._password = value.password;
                this._port = value.port;
                this._scheme = value.scheme;
                this._serviceId = value.serviceId;
                this._user = value.user;
            }
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(HyperdriveConfigOriginOutputReference.prototype, "accessClientId", {
        get: function () {
            return this.getStringAttribute('access_client_id');
        },
        set: function (value) {
            this._accessClientId = value;
        },
        enumerable: false,
        configurable: true
    });
    HyperdriveConfigOriginOutputReference.prototype.resetAccessClientId = function () {
        this._accessClientId = undefined;
    };
    Object.defineProperty(HyperdriveConfigOriginOutputReference.prototype, "accessClientIdInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._accessClientId;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(HyperdriveConfigOriginOutputReference.prototype, "accessClientSecret", {
        get: function () {
            return this.getStringAttribute('access_client_secret');
        },
        set: function (value) {
            this._accessClientSecret = value;
        },
        enumerable: false,
        configurable: true
    });
    HyperdriveConfigOriginOutputReference.prototype.resetAccessClientSecret = function () {
        this._accessClientSecret = undefined;
    };
    Object.defineProperty(HyperdriveConfigOriginOutputReference.prototype, "accessClientSecretInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._accessClientSecret;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(HyperdriveConfigOriginOutputReference.prototype, "database", {
        get: function () {
            return this.getStringAttribute('database');
        },
        set: function (value) {
            this._database = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(HyperdriveConfigOriginOutputReference.prototype, "databaseInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._database;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(HyperdriveConfigOriginOutputReference.prototype, "host", {
        get: function () {
            return this.getStringAttribute('host');
        },
        set: function (value) {
            this._host = value;
        },
        enumerable: false,
        configurable: true
    });
    HyperdriveConfigOriginOutputReference.prototype.resetHost = function () {
        this._host = undefined;
    };
    Object.defineProperty(HyperdriveConfigOriginOutputReference.prototype, "hostInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._host;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(HyperdriveConfigOriginOutputReference.prototype, "password", {
        get: function () {
            return this.getStringAttribute('password');
        },
        set: function (value) {
            this._password = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(HyperdriveConfigOriginOutputReference.prototype, "passwordInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._password;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(HyperdriveConfigOriginOutputReference.prototype, "port", {
        get: function () {
            return this.getNumberAttribute('port');
        },
        set: function (value) {
            this._port = value;
        },
        enumerable: false,
        configurable: true
    });
    HyperdriveConfigOriginOutputReference.prototype.resetPort = function () {
        this._port = undefined;
    };
    Object.defineProperty(HyperdriveConfigOriginOutputReference.prototype, "portInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._port;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(HyperdriveConfigOriginOutputReference.prototype, "scheme", {
        get: function () {
            return this.getStringAttribute('scheme');
        },
        set: function (value) {
            this._scheme = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(HyperdriveConfigOriginOutputReference.prototype, "schemeInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._scheme;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(HyperdriveConfigOriginOutputReference.prototype, "serviceId", {
        get: function () {
            return this.getStringAttribute('service_id');
        },
        set: function (value) {
            this._serviceId = value;
        },
        enumerable: false,
        configurable: true
    });
    HyperdriveConfigOriginOutputReference.prototype.resetServiceId = function () {
        this._serviceId = undefined;
    };
    Object.defineProperty(HyperdriveConfigOriginOutputReference.prototype, "serviceIdInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._serviceId;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(HyperdriveConfigOriginOutputReference.prototype, "user", {
        get: function () {
            return this.getStringAttribute('user');
        },
        set: function (value) {
            this._user = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(HyperdriveConfigOriginOutputReference.prototype, "userInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._user;
        },
        enumerable: false,
        configurable: true
    });
    return HyperdriveConfigOriginOutputReference;
}(cdktf.ComplexObject));
exports.HyperdriveConfigOriginOutputReference = HyperdriveConfigOriginOutputReference;
/**
* Represents a {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/hyperdrive_config cloudflare_hyperdrive_config}
*/
var HyperdriveConfig = /** @class */ (function (_super) {
    __extends(HyperdriveConfig, _super);
    // ===========
    // INITIALIZER
    // ===========
    /**
    * Create a new {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/hyperdrive_config cloudflare_hyperdrive_config} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options HyperdriveConfigConfig
    */
    function HyperdriveConfig(scope, id, config) {
        var _this = _super.call(this, scope, id, {
            terraformResourceType: 'cloudflare_hyperdrive_config',
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
        // caching - computed: false, optional: true, required: false
        _this._caching = new HyperdriveConfigCachingOutputReference(_this, "caching");
        // mtls - computed: false, optional: true, required: false
        _this._mtls = new HyperdriveConfigMtlsOutputReference(_this, "mtls");
        // origin - computed: false, optional: false, required: true
        _this._origin = new HyperdriveConfigOriginOutputReference(_this, "origin");
        _this._accountId = config.accountId;
        _this._caching.internalValue = config.caching;
        _this._mtls.internalValue = config.mtls;
        _this._name = config.name;
        _this._origin.internalValue = config.origin;
        _this._originConnectionLimit = config.originConnectionLimit;
        return _this;
    }
    // ==============
    // STATIC Methods
    // ==============
    /**
    * Generates CDKTF code for importing a HyperdriveConfig resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the HyperdriveConfig to import
    * @param importFromId The id of the existing HyperdriveConfig that should be imported. Refer to the {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/hyperdrive_config#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the HyperdriveConfig to import is found
    */
    HyperdriveConfig.generateConfigForImport = function (scope, importToId, importFromId, provider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "cloudflare_hyperdrive_config", importId: importFromId, provider: provider });
    };
    Object.defineProperty(HyperdriveConfig.prototype, "accountId", {
        get: function () {
            return this.getStringAttribute('account_id');
        },
        set: function (value) {
            this._accountId = value;
        },
        enumerable: false,
        configurable: true
    });
    HyperdriveConfig.prototype.resetAccountId = function () {
        this._accountId = undefined;
    };
    Object.defineProperty(HyperdriveConfig.prototype, "accountIdInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._accountId;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(HyperdriveConfig.prototype, "caching", {
        get: function () {
            return this._caching;
        },
        enumerable: false,
        configurable: true
    });
    HyperdriveConfig.prototype.putCaching = function (value) {
        this._caching.internalValue = value;
    };
    HyperdriveConfig.prototype.resetCaching = function () {
        this._caching.internalValue = undefined;
    };
    Object.defineProperty(HyperdriveConfig.prototype, "cachingInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._caching.internalValue;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(HyperdriveConfig.prototype, "createdOn", {
        // created_on - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('created_on');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(HyperdriveConfig.prototype, "id", {
        // id - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('id');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(HyperdriveConfig.prototype, "modifiedOn", {
        // modified_on - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('modified_on');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(HyperdriveConfig.prototype, "mtls", {
        get: function () {
            return this._mtls;
        },
        enumerable: false,
        configurable: true
    });
    HyperdriveConfig.prototype.putMtls = function (value) {
        this._mtls.internalValue = value;
    };
    HyperdriveConfig.prototype.resetMtls = function () {
        this._mtls.internalValue = undefined;
    };
    Object.defineProperty(HyperdriveConfig.prototype, "mtlsInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._mtls.internalValue;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(HyperdriveConfig.prototype, "name", {
        get: function () {
            return this.getStringAttribute('name');
        },
        set: function (value) {
            this._name = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(HyperdriveConfig.prototype, "nameInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._name;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(HyperdriveConfig.prototype, "origin", {
        get: function () {
            return this._origin;
        },
        enumerable: false,
        configurable: true
    });
    HyperdriveConfig.prototype.putOrigin = function (value) {
        this._origin.internalValue = value;
    };
    Object.defineProperty(HyperdriveConfig.prototype, "originInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._origin.internalValue;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(HyperdriveConfig.prototype, "originConnectionLimit", {
        get: function () {
            return this.getNumberAttribute('origin_connection_limit');
        },
        set: function (value) {
            this._originConnectionLimit = value;
        },
        enumerable: false,
        configurable: true
    });
    HyperdriveConfig.prototype.resetOriginConnectionLimit = function () {
        this._originConnectionLimit = undefined;
    };
    Object.defineProperty(HyperdriveConfig.prototype, "originConnectionLimitInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._originConnectionLimit;
        },
        enumerable: false,
        configurable: true
    });
    // =========
    // SYNTHESIS
    // =========
    HyperdriveConfig.prototype.synthesizeAttributes = function () {
        return {
            account_id: cdktf.stringToTerraform(this._accountId),
            caching: hyperdriveConfigCachingToTerraform(this._caching.internalValue),
            mtls: hyperdriveConfigMtlsToTerraform(this._mtls.internalValue),
            name: cdktf.stringToTerraform(this._name),
            origin: hyperdriveConfigOriginToTerraform(this._origin.internalValue),
            origin_connection_limit: cdktf.numberToTerraform(this._originConnectionLimit),
        };
    };
    HyperdriveConfig.prototype.synthesizeHclAttributes = function () {
        var attrs = {
            account_id: {
                value: cdktf.stringToHclTerraform(this._accountId),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            caching: {
                value: hyperdriveConfigCachingToHclTerraform(this._caching.internalValue),
                isBlock: true,
                type: "struct",
                storageClassType: "HyperdriveConfigCaching",
            },
            mtls: {
                value: hyperdriveConfigMtlsToHclTerraform(this._mtls.internalValue),
                isBlock: true,
                type: "struct",
                storageClassType: "HyperdriveConfigMtls",
            },
            name: {
                value: cdktf.stringToHclTerraform(this._name),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            origin: {
                value: hyperdriveConfigOriginToHclTerraform(this._origin.internalValue),
                isBlock: true,
                type: "struct",
                storageClassType: "HyperdriveConfigOrigin",
            },
            origin_connection_limit: {
                value: cdktf.numberToHclTerraform(this._originConnectionLimit),
                isBlock: false,
                type: "simple",
                storageClassType: "number",
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
    HyperdriveConfig.tfResourceType = "cloudflare_hyperdrive_config";
    return HyperdriveConfig;
}(cdktf.TerraformResource));
exports.HyperdriveConfig = HyperdriveConfig;
