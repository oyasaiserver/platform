"use strict";
// https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/custom_hostname
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
exports.DataCloudflareCustomHostname = exports.DataCloudflareCustomHostnameSslOutputReference = exports.DataCloudflareCustomHostnameSslValidationRecordsList = exports.DataCloudflareCustomHostnameSslValidationRecordsOutputReference = exports.DataCloudflareCustomHostnameSslValidationErrorsList = exports.DataCloudflareCustomHostnameSslValidationErrorsOutputReference = exports.DataCloudflareCustomHostnameSslSettingsOutputReference = exports.DataCloudflareCustomHostnameSslDcvDelegationRecordsList = exports.DataCloudflareCustomHostnameSslDcvDelegationRecordsOutputReference = exports.DataCloudflareCustomHostnameOwnershipVerificationHttpOutputReference = exports.DataCloudflareCustomHostnameOwnershipVerificationOutputReference = exports.DataCloudflareCustomHostnameFilterOutputReference = exports.DataCloudflareCustomHostnameFilterHostnameOutputReference = void 0;
exports.dataCloudflareCustomHostnameFilterHostnameToTerraform = dataCloudflareCustomHostnameFilterHostnameToTerraform;
exports.dataCloudflareCustomHostnameFilterHostnameToHclTerraform = dataCloudflareCustomHostnameFilterHostnameToHclTerraform;
exports.dataCloudflareCustomHostnameFilterToTerraform = dataCloudflareCustomHostnameFilterToTerraform;
exports.dataCloudflareCustomHostnameFilterToHclTerraform = dataCloudflareCustomHostnameFilterToHclTerraform;
exports.dataCloudflareCustomHostnameOwnershipVerificationToTerraform = dataCloudflareCustomHostnameOwnershipVerificationToTerraform;
exports.dataCloudflareCustomHostnameOwnershipVerificationToHclTerraform = dataCloudflareCustomHostnameOwnershipVerificationToHclTerraform;
exports.dataCloudflareCustomHostnameOwnershipVerificationHttpToTerraform = dataCloudflareCustomHostnameOwnershipVerificationHttpToTerraform;
exports.dataCloudflareCustomHostnameOwnershipVerificationHttpToHclTerraform = dataCloudflareCustomHostnameOwnershipVerificationHttpToHclTerraform;
exports.dataCloudflareCustomHostnameSslDcvDelegationRecordsToTerraform = dataCloudflareCustomHostnameSslDcvDelegationRecordsToTerraform;
exports.dataCloudflareCustomHostnameSslDcvDelegationRecordsToHclTerraform = dataCloudflareCustomHostnameSslDcvDelegationRecordsToHclTerraform;
exports.dataCloudflareCustomHostnameSslSettingsToTerraform = dataCloudflareCustomHostnameSslSettingsToTerraform;
exports.dataCloudflareCustomHostnameSslSettingsToHclTerraform = dataCloudflareCustomHostnameSslSettingsToHclTerraform;
exports.dataCloudflareCustomHostnameSslValidationErrorsToTerraform = dataCloudflareCustomHostnameSslValidationErrorsToTerraform;
exports.dataCloudflareCustomHostnameSslValidationErrorsToHclTerraform = dataCloudflareCustomHostnameSslValidationErrorsToHclTerraform;
exports.dataCloudflareCustomHostnameSslValidationRecordsToTerraform = dataCloudflareCustomHostnameSslValidationRecordsToTerraform;
exports.dataCloudflareCustomHostnameSslValidationRecordsToHclTerraform = dataCloudflareCustomHostnameSslValidationRecordsToHclTerraform;
exports.dataCloudflareCustomHostnameSslToTerraform = dataCloudflareCustomHostnameSslToTerraform;
exports.dataCloudflareCustomHostnameSslToHclTerraform = dataCloudflareCustomHostnameSslToHclTerraform;
var cdktf = require("cdktf");
function dataCloudflareCustomHostnameFilterHostnameToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        contain: cdktf.stringToTerraform(struct.contain),
    };
}
function dataCloudflareCustomHostnameFilterHostnameToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    var attrs = {
        contain: {
            value: cdktf.stringToHclTerraform(struct.contain),
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
var DataCloudflareCustomHostnameFilterHostnameOutputReference = /** @class */ (function (_super) {
    __extends(DataCloudflareCustomHostnameFilterHostnameOutputReference, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    function DataCloudflareCustomHostnameFilterHostnameOutputReference(terraformResource, terraformAttribute) {
        var _this = _super.call(this, terraformResource, terraformAttribute, false) || this;
        _this.isEmptyObject = false;
        return _this;
    }
    Object.defineProperty(DataCloudflareCustomHostnameFilterHostnameOutputReference.prototype, "internalValue", {
        get: function () {
            if (this.resolvableValue) {
                return this.resolvableValue;
            }
            var hasAnyValues = this.isEmptyObject;
            var internalValueResult = {};
            if (this._contain !== undefined) {
                hasAnyValues = true;
                internalValueResult.contain = this._contain;
            }
            return hasAnyValues ? internalValueResult : undefined;
        },
        set: function (value) {
            if (value === undefined) {
                this.isEmptyObject = false;
                this.resolvableValue = undefined;
                this._contain = undefined;
            }
            else if (cdktf.Tokenization.isResolvable(value)) {
                this.isEmptyObject = false;
                this.resolvableValue = value;
            }
            else {
                this.isEmptyObject = Object.keys(value).length === 0;
                this.resolvableValue = undefined;
                this._contain = value.contain;
            }
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareCustomHostnameFilterHostnameOutputReference.prototype, "contain", {
        get: function () {
            return this.getStringAttribute('contain');
        },
        set: function (value) {
            this._contain = value;
        },
        enumerable: false,
        configurable: true
    });
    DataCloudflareCustomHostnameFilterHostnameOutputReference.prototype.resetContain = function () {
        this._contain = undefined;
    };
    Object.defineProperty(DataCloudflareCustomHostnameFilterHostnameOutputReference.prototype, "containInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._contain;
        },
        enumerable: false,
        configurable: true
    });
    return DataCloudflareCustomHostnameFilterHostnameOutputReference;
}(cdktf.ComplexObject));
exports.DataCloudflareCustomHostnameFilterHostnameOutputReference = DataCloudflareCustomHostnameFilterHostnameOutputReference;
function dataCloudflareCustomHostnameFilterToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        certificate_authority: cdktf.stringToTerraform(struct.certificateAuthority),
        custom_origin_server: cdktf.stringToTerraform(struct.customOriginServer),
        direction: cdktf.stringToTerraform(struct.direction),
        hostname: dataCloudflareCustomHostnameFilterHostnameToTerraform(struct.hostname),
        hostname_status: cdktf.stringToTerraform(struct.hostnameStatus),
        id: cdktf.stringToTerraform(struct.id),
        order: cdktf.stringToTerraform(struct.order),
        ssl: cdktf.numberToTerraform(struct.ssl),
        ssl_status: cdktf.stringToTerraform(struct.sslStatus),
        wildcard: cdktf.booleanToTerraform(struct.wildcard),
    };
}
function dataCloudflareCustomHostnameFilterToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    var attrs = {
        certificate_authority: {
            value: cdktf.stringToHclTerraform(struct.certificateAuthority),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        custom_origin_server: {
            value: cdktf.stringToHclTerraform(struct.customOriginServer),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        direction: {
            value: cdktf.stringToHclTerraform(struct.direction),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        hostname: {
            value: dataCloudflareCustomHostnameFilterHostnameToHclTerraform(struct.hostname),
            isBlock: true,
            type: "struct",
            storageClassType: "DataCloudflareCustomHostnameFilterHostname",
        },
        hostname_status: {
            value: cdktf.stringToHclTerraform(struct.hostnameStatus),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        id: {
            value: cdktf.stringToHclTerraform(struct.id),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        order: {
            value: cdktf.stringToHclTerraform(struct.order),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        ssl: {
            value: cdktf.numberToHclTerraform(struct.ssl),
            isBlock: false,
            type: "simple",
            storageClassType: "number",
        },
        ssl_status: {
            value: cdktf.stringToHclTerraform(struct.sslStatus),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        wildcard: {
            value: cdktf.booleanToHclTerraform(struct.wildcard),
            isBlock: false,
            type: "simple",
            storageClassType: "boolean",
        },
    };
    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(function (_a) {
        var _ = _a[0], value = _a[1];
        return value !== undefined && value.value !== undefined;
    }));
}
var DataCloudflareCustomHostnameFilterOutputReference = /** @class */ (function (_super) {
    __extends(DataCloudflareCustomHostnameFilterOutputReference, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    function DataCloudflareCustomHostnameFilterOutputReference(terraformResource, terraformAttribute) {
        var _this = _super.call(this, terraformResource, terraformAttribute, false) || this;
        _this.isEmptyObject = false;
        // hostname - computed: false, optional: true, required: false
        _this._hostname = new DataCloudflareCustomHostnameFilterHostnameOutputReference(_this, "hostname");
        return _this;
    }
    Object.defineProperty(DataCloudflareCustomHostnameFilterOutputReference.prototype, "internalValue", {
        get: function () {
            var _a, _b;
            if (this.resolvableValue) {
                return this.resolvableValue;
            }
            var hasAnyValues = this.isEmptyObject;
            var internalValueResult = {};
            if (this._certificateAuthority !== undefined) {
                hasAnyValues = true;
                internalValueResult.certificateAuthority = this._certificateAuthority;
            }
            if (this._customOriginServer !== undefined) {
                hasAnyValues = true;
                internalValueResult.customOriginServer = this._customOriginServer;
            }
            if (this._direction !== undefined) {
                hasAnyValues = true;
                internalValueResult.direction = this._direction;
            }
            if (((_a = this._hostname) === null || _a === void 0 ? void 0 : _a.internalValue) !== undefined) {
                hasAnyValues = true;
                internalValueResult.hostname = (_b = this._hostname) === null || _b === void 0 ? void 0 : _b.internalValue;
            }
            if (this._hostnameStatus !== undefined) {
                hasAnyValues = true;
                internalValueResult.hostnameStatus = this._hostnameStatus;
            }
            if (this._id !== undefined) {
                hasAnyValues = true;
                internalValueResult.id = this._id;
            }
            if (this._order !== undefined) {
                hasAnyValues = true;
                internalValueResult.order = this._order;
            }
            if (this._ssl !== undefined) {
                hasAnyValues = true;
                internalValueResult.ssl = this._ssl;
            }
            if (this._sslStatus !== undefined) {
                hasAnyValues = true;
                internalValueResult.sslStatus = this._sslStatus;
            }
            if (this._wildcard !== undefined) {
                hasAnyValues = true;
                internalValueResult.wildcard = this._wildcard;
            }
            return hasAnyValues ? internalValueResult : undefined;
        },
        set: function (value) {
            if (value === undefined) {
                this.isEmptyObject = false;
                this.resolvableValue = undefined;
                this._certificateAuthority = undefined;
                this._customOriginServer = undefined;
                this._direction = undefined;
                this._hostname.internalValue = undefined;
                this._hostnameStatus = undefined;
                this._id = undefined;
                this._order = undefined;
                this._ssl = undefined;
                this._sslStatus = undefined;
                this._wildcard = undefined;
            }
            else if (cdktf.Tokenization.isResolvable(value)) {
                this.isEmptyObject = false;
                this.resolvableValue = value;
            }
            else {
                this.isEmptyObject = Object.keys(value).length === 0;
                this.resolvableValue = undefined;
                this._certificateAuthority = value.certificateAuthority;
                this._customOriginServer = value.customOriginServer;
                this._direction = value.direction;
                this._hostname.internalValue = value.hostname;
                this._hostnameStatus = value.hostnameStatus;
                this._id = value.id;
                this._order = value.order;
                this._ssl = value.ssl;
                this._sslStatus = value.sslStatus;
                this._wildcard = value.wildcard;
            }
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareCustomHostnameFilterOutputReference.prototype, "certificateAuthority", {
        get: function () {
            return this.getStringAttribute('certificate_authority');
        },
        set: function (value) {
            this._certificateAuthority = value;
        },
        enumerable: false,
        configurable: true
    });
    DataCloudflareCustomHostnameFilterOutputReference.prototype.resetCertificateAuthority = function () {
        this._certificateAuthority = undefined;
    };
    Object.defineProperty(DataCloudflareCustomHostnameFilterOutputReference.prototype, "certificateAuthorityInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._certificateAuthority;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareCustomHostnameFilterOutputReference.prototype, "customOriginServer", {
        get: function () {
            return this.getStringAttribute('custom_origin_server');
        },
        set: function (value) {
            this._customOriginServer = value;
        },
        enumerable: false,
        configurable: true
    });
    DataCloudflareCustomHostnameFilterOutputReference.prototype.resetCustomOriginServer = function () {
        this._customOriginServer = undefined;
    };
    Object.defineProperty(DataCloudflareCustomHostnameFilterOutputReference.prototype, "customOriginServerInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._customOriginServer;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareCustomHostnameFilterOutputReference.prototype, "direction", {
        get: function () {
            return this.getStringAttribute('direction');
        },
        set: function (value) {
            this._direction = value;
        },
        enumerable: false,
        configurable: true
    });
    DataCloudflareCustomHostnameFilterOutputReference.prototype.resetDirection = function () {
        this._direction = undefined;
    };
    Object.defineProperty(DataCloudflareCustomHostnameFilterOutputReference.prototype, "directionInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._direction;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareCustomHostnameFilterOutputReference.prototype, "hostname", {
        get: function () {
            return this._hostname;
        },
        enumerable: false,
        configurable: true
    });
    DataCloudflareCustomHostnameFilterOutputReference.prototype.putHostname = function (value) {
        this._hostname.internalValue = value;
    };
    DataCloudflareCustomHostnameFilterOutputReference.prototype.resetHostname = function () {
        this._hostname.internalValue = undefined;
    };
    Object.defineProperty(DataCloudflareCustomHostnameFilterOutputReference.prototype, "hostnameInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._hostname.internalValue;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareCustomHostnameFilterOutputReference.prototype, "hostnameStatus", {
        get: function () {
            return this.getStringAttribute('hostname_status');
        },
        set: function (value) {
            this._hostnameStatus = value;
        },
        enumerable: false,
        configurable: true
    });
    DataCloudflareCustomHostnameFilterOutputReference.prototype.resetHostnameStatus = function () {
        this._hostnameStatus = undefined;
    };
    Object.defineProperty(DataCloudflareCustomHostnameFilterOutputReference.prototype, "hostnameStatusInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._hostnameStatus;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareCustomHostnameFilterOutputReference.prototype, "id", {
        get: function () {
            return this.getStringAttribute('id');
        },
        set: function (value) {
            this._id = value;
        },
        enumerable: false,
        configurable: true
    });
    DataCloudflareCustomHostnameFilterOutputReference.prototype.resetId = function () {
        this._id = undefined;
    };
    Object.defineProperty(DataCloudflareCustomHostnameFilterOutputReference.prototype, "idInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._id;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareCustomHostnameFilterOutputReference.prototype, "order", {
        get: function () {
            return this.getStringAttribute('order');
        },
        set: function (value) {
            this._order = value;
        },
        enumerable: false,
        configurable: true
    });
    DataCloudflareCustomHostnameFilterOutputReference.prototype.resetOrder = function () {
        this._order = undefined;
    };
    Object.defineProperty(DataCloudflareCustomHostnameFilterOutputReference.prototype, "orderInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._order;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareCustomHostnameFilterOutputReference.prototype, "ssl", {
        get: function () {
            return this.getNumberAttribute('ssl');
        },
        set: function (value) {
            this._ssl = value;
        },
        enumerable: false,
        configurable: true
    });
    DataCloudflareCustomHostnameFilterOutputReference.prototype.resetSsl = function () {
        this._ssl = undefined;
    };
    Object.defineProperty(DataCloudflareCustomHostnameFilterOutputReference.prototype, "sslInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._ssl;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareCustomHostnameFilterOutputReference.prototype, "sslStatus", {
        get: function () {
            return this.getStringAttribute('ssl_status');
        },
        set: function (value) {
            this._sslStatus = value;
        },
        enumerable: false,
        configurable: true
    });
    DataCloudflareCustomHostnameFilterOutputReference.prototype.resetSslStatus = function () {
        this._sslStatus = undefined;
    };
    Object.defineProperty(DataCloudflareCustomHostnameFilterOutputReference.prototype, "sslStatusInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._sslStatus;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareCustomHostnameFilterOutputReference.prototype, "wildcard", {
        get: function () {
            return this.getBooleanAttribute('wildcard');
        },
        set: function (value) {
            this._wildcard = value;
        },
        enumerable: false,
        configurable: true
    });
    DataCloudflareCustomHostnameFilterOutputReference.prototype.resetWildcard = function () {
        this._wildcard = undefined;
    };
    Object.defineProperty(DataCloudflareCustomHostnameFilterOutputReference.prototype, "wildcardInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._wildcard;
        },
        enumerable: false,
        configurable: true
    });
    return DataCloudflareCustomHostnameFilterOutputReference;
}(cdktf.ComplexObject));
exports.DataCloudflareCustomHostnameFilterOutputReference = DataCloudflareCustomHostnameFilterOutputReference;
function dataCloudflareCustomHostnameOwnershipVerificationToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {};
}
function dataCloudflareCustomHostnameOwnershipVerificationToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    var attrs = {};
    return attrs;
}
var DataCloudflareCustomHostnameOwnershipVerificationOutputReference = /** @class */ (function (_super) {
    __extends(DataCloudflareCustomHostnameOwnershipVerificationOutputReference, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    function DataCloudflareCustomHostnameOwnershipVerificationOutputReference(terraformResource, terraformAttribute) {
        var _this = _super.call(this, terraformResource, terraformAttribute, false) || this;
        _this.isEmptyObject = false;
        return _this;
    }
    Object.defineProperty(DataCloudflareCustomHostnameOwnershipVerificationOutputReference.prototype, "internalValue", {
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
    Object.defineProperty(DataCloudflareCustomHostnameOwnershipVerificationOutputReference.prototype, "name", {
        // name - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('name');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareCustomHostnameOwnershipVerificationOutputReference.prototype, "type", {
        // type - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('type');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareCustomHostnameOwnershipVerificationOutputReference.prototype, "value", {
        // value - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('value');
        },
        enumerable: false,
        configurable: true
    });
    return DataCloudflareCustomHostnameOwnershipVerificationOutputReference;
}(cdktf.ComplexObject));
exports.DataCloudflareCustomHostnameOwnershipVerificationOutputReference = DataCloudflareCustomHostnameOwnershipVerificationOutputReference;
function dataCloudflareCustomHostnameOwnershipVerificationHttpToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {};
}
function dataCloudflareCustomHostnameOwnershipVerificationHttpToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    var attrs = {};
    return attrs;
}
var DataCloudflareCustomHostnameOwnershipVerificationHttpOutputReference = /** @class */ (function (_super) {
    __extends(DataCloudflareCustomHostnameOwnershipVerificationHttpOutputReference, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    function DataCloudflareCustomHostnameOwnershipVerificationHttpOutputReference(terraformResource, terraformAttribute) {
        var _this = _super.call(this, terraformResource, terraformAttribute, false) || this;
        _this.isEmptyObject = false;
        return _this;
    }
    Object.defineProperty(DataCloudflareCustomHostnameOwnershipVerificationHttpOutputReference.prototype, "internalValue", {
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
    Object.defineProperty(DataCloudflareCustomHostnameOwnershipVerificationHttpOutputReference.prototype, "httpBody", {
        // http_body - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('http_body');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareCustomHostnameOwnershipVerificationHttpOutputReference.prototype, "httpUrl", {
        // http_url - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('http_url');
        },
        enumerable: false,
        configurable: true
    });
    return DataCloudflareCustomHostnameOwnershipVerificationHttpOutputReference;
}(cdktf.ComplexObject));
exports.DataCloudflareCustomHostnameOwnershipVerificationHttpOutputReference = DataCloudflareCustomHostnameOwnershipVerificationHttpOutputReference;
function dataCloudflareCustomHostnameSslDcvDelegationRecordsToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {};
}
function dataCloudflareCustomHostnameSslDcvDelegationRecordsToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    var attrs = {};
    return attrs;
}
var DataCloudflareCustomHostnameSslDcvDelegationRecordsOutputReference = /** @class */ (function (_super) {
    __extends(DataCloudflareCustomHostnameSslDcvDelegationRecordsOutputReference, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    function DataCloudflareCustomHostnameSslDcvDelegationRecordsOutputReference(terraformResource, terraformAttribute, complexObjectIndex, complexObjectIsFromSet) {
        var _this = _super.call(this, terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex) || this;
        _this.isEmptyObject = false;
        return _this;
    }
    Object.defineProperty(DataCloudflareCustomHostnameSslDcvDelegationRecordsOutputReference.prototype, "internalValue", {
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
    Object.defineProperty(DataCloudflareCustomHostnameSslDcvDelegationRecordsOutputReference.prototype, "cname", {
        // cname - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('cname');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareCustomHostnameSslDcvDelegationRecordsOutputReference.prototype, "cnameTarget", {
        // cname_target - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('cname_target');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareCustomHostnameSslDcvDelegationRecordsOutputReference.prototype, "emails", {
        // emails - computed: true, optional: false, required: false
        get: function () {
            return this.getListAttribute('emails');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareCustomHostnameSslDcvDelegationRecordsOutputReference.prototype, "httpBody", {
        // http_body - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('http_body');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareCustomHostnameSslDcvDelegationRecordsOutputReference.prototype, "httpUrl", {
        // http_url - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('http_url');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareCustomHostnameSslDcvDelegationRecordsOutputReference.prototype, "status", {
        // status - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('status');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareCustomHostnameSslDcvDelegationRecordsOutputReference.prototype, "txtName", {
        // txt_name - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('txt_name');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareCustomHostnameSslDcvDelegationRecordsOutputReference.prototype, "txtValue", {
        // txt_value - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('txt_value');
        },
        enumerable: false,
        configurable: true
    });
    return DataCloudflareCustomHostnameSslDcvDelegationRecordsOutputReference;
}(cdktf.ComplexObject));
exports.DataCloudflareCustomHostnameSslDcvDelegationRecordsOutputReference = DataCloudflareCustomHostnameSslDcvDelegationRecordsOutputReference;
var DataCloudflareCustomHostnameSslDcvDelegationRecordsList = /** @class */ (function (_super) {
    __extends(DataCloudflareCustomHostnameSslDcvDelegationRecordsList, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    function DataCloudflareCustomHostnameSslDcvDelegationRecordsList(terraformResource, terraformAttribute, wrapsSet) {
        var _this = _super.call(this, terraformResource, terraformAttribute, wrapsSet) || this;
        _this.terraformResource = terraformResource;
        _this.terraformAttribute = terraformAttribute;
        _this.wrapsSet = wrapsSet;
        return _this;
    }
    /**
    * @param index the index of the item to return
    */
    DataCloudflareCustomHostnameSslDcvDelegationRecordsList.prototype.get = function (index) {
        return new DataCloudflareCustomHostnameSslDcvDelegationRecordsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
    };
    return DataCloudflareCustomHostnameSslDcvDelegationRecordsList;
}(cdktf.ComplexList));
exports.DataCloudflareCustomHostnameSslDcvDelegationRecordsList = DataCloudflareCustomHostnameSslDcvDelegationRecordsList;
function dataCloudflareCustomHostnameSslSettingsToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {};
}
function dataCloudflareCustomHostnameSslSettingsToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    var attrs = {};
    return attrs;
}
var DataCloudflareCustomHostnameSslSettingsOutputReference = /** @class */ (function (_super) {
    __extends(DataCloudflareCustomHostnameSslSettingsOutputReference, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    function DataCloudflareCustomHostnameSslSettingsOutputReference(terraformResource, terraformAttribute) {
        var _this = _super.call(this, terraformResource, terraformAttribute, false) || this;
        _this.isEmptyObject = false;
        return _this;
    }
    Object.defineProperty(DataCloudflareCustomHostnameSslSettingsOutputReference.prototype, "internalValue", {
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
    Object.defineProperty(DataCloudflareCustomHostnameSslSettingsOutputReference.prototype, "ciphers", {
        // ciphers - computed: true, optional: false, required: false
        get: function () {
            return this.getListAttribute('ciphers');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareCustomHostnameSslSettingsOutputReference.prototype, "earlyHints", {
        // early_hints - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('early_hints');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareCustomHostnameSslSettingsOutputReference.prototype, "http2", {
        // http2 - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('http2');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareCustomHostnameSslSettingsOutputReference.prototype, "minTlsVersion", {
        // min_tls_version - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('min_tls_version');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareCustomHostnameSslSettingsOutputReference.prototype, "tls13", {
        // tls_1_3 - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('tls_1_3');
        },
        enumerable: false,
        configurable: true
    });
    return DataCloudflareCustomHostnameSslSettingsOutputReference;
}(cdktf.ComplexObject));
exports.DataCloudflareCustomHostnameSslSettingsOutputReference = DataCloudflareCustomHostnameSslSettingsOutputReference;
function dataCloudflareCustomHostnameSslValidationErrorsToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {};
}
function dataCloudflareCustomHostnameSslValidationErrorsToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    var attrs = {};
    return attrs;
}
var DataCloudflareCustomHostnameSslValidationErrorsOutputReference = /** @class */ (function (_super) {
    __extends(DataCloudflareCustomHostnameSslValidationErrorsOutputReference, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    function DataCloudflareCustomHostnameSslValidationErrorsOutputReference(terraformResource, terraformAttribute, complexObjectIndex, complexObjectIsFromSet) {
        var _this = _super.call(this, terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex) || this;
        _this.isEmptyObject = false;
        return _this;
    }
    Object.defineProperty(DataCloudflareCustomHostnameSslValidationErrorsOutputReference.prototype, "internalValue", {
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
    Object.defineProperty(DataCloudflareCustomHostnameSslValidationErrorsOutputReference.prototype, "message", {
        // message - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('message');
        },
        enumerable: false,
        configurable: true
    });
    return DataCloudflareCustomHostnameSslValidationErrorsOutputReference;
}(cdktf.ComplexObject));
exports.DataCloudflareCustomHostnameSslValidationErrorsOutputReference = DataCloudflareCustomHostnameSslValidationErrorsOutputReference;
var DataCloudflareCustomHostnameSslValidationErrorsList = /** @class */ (function (_super) {
    __extends(DataCloudflareCustomHostnameSslValidationErrorsList, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    function DataCloudflareCustomHostnameSslValidationErrorsList(terraformResource, terraformAttribute, wrapsSet) {
        var _this = _super.call(this, terraformResource, terraformAttribute, wrapsSet) || this;
        _this.terraformResource = terraformResource;
        _this.terraformAttribute = terraformAttribute;
        _this.wrapsSet = wrapsSet;
        return _this;
    }
    /**
    * @param index the index of the item to return
    */
    DataCloudflareCustomHostnameSslValidationErrorsList.prototype.get = function (index) {
        return new DataCloudflareCustomHostnameSslValidationErrorsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
    };
    return DataCloudflareCustomHostnameSslValidationErrorsList;
}(cdktf.ComplexList));
exports.DataCloudflareCustomHostnameSslValidationErrorsList = DataCloudflareCustomHostnameSslValidationErrorsList;
function dataCloudflareCustomHostnameSslValidationRecordsToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {};
}
function dataCloudflareCustomHostnameSslValidationRecordsToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    var attrs = {};
    return attrs;
}
var DataCloudflareCustomHostnameSslValidationRecordsOutputReference = /** @class */ (function (_super) {
    __extends(DataCloudflareCustomHostnameSslValidationRecordsOutputReference, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    function DataCloudflareCustomHostnameSslValidationRecordsOutputReference(terraformResource, terraformAttribute, complexObjectIndex, complexObjectIsFromSet) {
        var _this = _super.call(this, terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex) || this;
        _this.isEmptyObject = false;
        return _this;
    }
    Object.defineProperty(DataCloudflareCustomHostnameSslValidationRecordsOutputReference.prototype, "internalValue", {
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
    Object.defineProperty(DataCloudflareCustomHostnameSslValidationRecordsOutputReference.prototype, "cname", {
        // cname - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('cname');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareCustomHostnameSslValidationRecordsOutputReference.prototype, "cnameTarget", {
        // cname_target - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('cname_target');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareCustomHostnameSslValidationRecordsOutputReference.prototype, "emails", {
        // emails - computed: true, optional: false, required: false
        get: function () {
            return this.getListAttribute('emails');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareCustomHostnameSslValidationRecordsOutputReference.prototype, "httpBody", {
        // http_body - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('http_body');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareCustomHostnameSslValidationRecordsOutputReference.prototype, "httpUrl", {
        // http_url - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('http_url');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareCustomHostnameSslValidationRecordsOutputReference.prototype, "status", {
        // status - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('status');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareCustomHostnameSslValidationRecordsOutputReference.prototype, "txtName", {
        // txt_name - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('txt_name');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareCustomHostnameSslValidationRecordsOutputReference.prototype, "txtValue", {
        // txt_value - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('txt_value');
        },
        enumerable: false,
        configurable: true
    });
    return DataCloudflareCustomHostnameSslValidationRecordsOutputReference;
}(cdktf.ComplexObject));
exports.DataCloudflareCustomHostnameSslValidationRecordsOutputReference = DataCloudflareCustomHostnameSslValidationRecordsOutputReference;
var DataCloudflareCustomHostnameSslValidationRecordsList = /** @class */ (function (_super) {
    __extends(DataCloudflareCustomHostnameSslValidationRecordsList, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    function DataCloudflareCustomHostnameSslValidationRecordsList(terraformResource, terraformAttribute, wrapsSet) {
        var _this = _super.call(this, terraformResource, terraformAttribute, wrapsSet) || this;
        _this.terraformResource = terraformResource;
        _this.terraformAttribute = terraformAttribute;
        _this.wrapsSet = wrapsSet;
        return _this;
    }
    /**
    * @param index the index of the item to return
    */
    DataCloudflareCustomHostnameSslValidationRecordsList.prototype.get = function (index) {
        return new DataCloudflareCustomHostnameSslValidationRecordsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
    };
    return DataCloudflareCustomHostnameSslValidationRecordsList;
}(cdktf.ComplexList));
exports.DataCloudflareCustomHostnameSslValidationRecordsList = DataCloudflareCustomHostnameSslValidationRecordsList;
function dataCloudflareCustomHostnameSslToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {};
}
function dataCloudflareCustomHostnameSslToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    var attrs = {};
    return attrs;
}
var DataCloudflareCustomHostnameSslOutputReference = /** @class */ (function (_super) {
    __extends(DataCloudflareCustomHostnameSslOutputReference, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    function DataCloudflareCustomHostnameSslOutputReference(terraformResource, terraformAttribute) {
        var _this = _super.call(this, terraformResource, terraformAttribute, false) || this;
        _this.isEmptyObject = false;
        // dcv_delegation_records - computed: true, optional: false, required: false
        _this._dcvDelegationRecords = new DataCloudflareCustomHostnameSslDcvDelegationRecordsList(_this, "dcv_delegation_records", false);
        // settings - computed: true, optional: false, required: false
        _this._settings = new DataCloudflareCustomHostnameSslSettingsOutputReference(_this, "settings");
        // validation_errors - computed: true, optional: false, required: false
        _this._validationErrors = new DataCloudflareCustomHostnameSslValidationErrorsList(_this, "validation_errors", false);
        // validation_records - computed: true, optional: false, required: false
        _this._validationRecords = new DataCloudflareCustomHostnameSslValidationRecordsList(_this, "validation_records", false);
        return _this;
    }
    Object.defineProperty(DataCloudflareCustomHostnameSslOutputReference.prototype, "internalValue", {
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
    Object.defineProperty(DataCloudflareCustomHostnameSslOutputReference.prototype, "bundleMethod", {
        // bundle_method - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('bundle_method');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareCustomHostnameSslOutputReference.prototype, "certificateAuthority", {
        // certificate_authority - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('certificate_authority');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareCustomHostnameSslOutputReference.prototype, "customCertificate", {
        // custom_certificate - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('custom_certificate');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareCustomHostnameSslOutputReference.prototype, "customCsrId", {
        // custom_csr_id - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('custom_csr_id');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareCustomHostnameSslOutputReference.prototype, "customKey", {
        // custom_key - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('custom_key');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareCustomHostnameSslOutputReference.prototype, "dcvDelegationRecords", {
        get: function () {
            return this._dcvDelegationRecords;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareCustomHostnameSslOutputReference.prototype, "expiresOn", {
        // expires_on - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('expires_on');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareCustomHostnameSslOutputReference.prototype, "hosts", {
        // hosts - computed: true, optional: false, required: false
        get: function () {
            return this.getListAttribute('hosts');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareCustomHostnameSslOutputReference.prototype, "id", {
        // id - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('id');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareCustomHostnameSslOutputReference.prototype, "issuer", {
        // issuer - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('issuer');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareCustomHostnameSslOutputReference.prototype, "method", {
        // method - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('method');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareCustomHostnameSslOutputReference.prototype, "serialNumber", {
        // serial_number - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('serial_number');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareCustomHostnameSslOutputReference.prototype, "settings", {
        get: function () {
            return this._settings;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareCustomHostnameSslOutputReference.prototype, "signature", {
        // signature - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('signature');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareCustomHostnameSslOutputReference.prototype, "status", {
        // status - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('status');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareCustomHostnameSslOutputReference.prototype, "type", {
        // type - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('type');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareCustomHostnameSslOutputReference.prototype, "uploadedOn", {
        // uploaded_on - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('uploaded_on');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareCustomHostnameSslOutputReference.prototype, "validationErrors", {
        get: function () {
            return this._validationErrors;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareCustomHostnameSslOutputReference.prototype, "validationRecords", {
        get: function () {
            return this._validationRecords;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareCustomHostnameSslOutputReference.prototype, "wildcard", {
        // wildcard - computed: true, optional: false, required: false
        get: function () {
            return this.getBooleanAttribute('wildcard');
        },
        enumerable: false,
        configurable: true
    });
    return DataCloudflareCustomHostnameSslOutputReference;
}(cdktf.ComplexObject));
exports.DataCloudflareCustomHostnameSslOutputReference = DataCloudflareCustomHostnameSslOutputReference;
/**
* Represents a {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/custom_hostname cloudflare_custom_hostname}
*/
var DataCloudflareCustomHostname = /** @class */ (function (_super) {
    __extends(DataCloudflareCustomHostname, _super);
    // ===========
    // INITIALIZER
    // ===========
    /**
    * Create a new {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/custom_hostname cloudflare_custom_hostname} Data Source
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options DataCloudflareCustomHostnameConfig = {}
    */
    function DataCloudflareCustomHostname(scope, id, config) {
        if (config === void 0) { config = {}; }
        var _this = _super.call(this, scope, id, {
            terraformResourceType: 'cloudflare_custom_hostname',
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
        // custom_metadata - computed: true, optional: false, required: false
        _this._customMetadata = new cdktf.StringMap(_this, "custom_metadata");
        // filter - computed: false, optional: true, required: false
        _this._filter = new DataCloudflareCustomHostnameFilterOutputReference(_this, "filter");
        // ownership_verification - computed: true, optional: false, required: false
        _this._ownershipVerification = new DataCloudflareCustomHostnameOwnershipVerificationOutputReference(_this, "ownership_verification");
        // ownership_verification_http - computed: true, optional: false, required: false
        _this._ownershipVerificationHttp = new DataCloudflareCustomHostnameOwnershipVerificationHttpOutputReference(_this, "ownership_verification_http");
        // ssl - computed: true, optional: false, required: false
        _this._ssl = new DataCloudflareCustomHostnameSslOutputReference(_this, "ssl");
        _this._customHostnameId = config.customHostnameId;
        _this._filter.internalValue = config.filter;
        _this._zoneId = config.zoneId;
        return _this;
    }
    // ==============
    // STATIC Methods
    // ==============
    /**
    * Generates CDKTF code for importing a DataCloudflareCustomHostname resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the DataCloudflareCustomHostname to import
    * @param importFromId The id of the existing DataCloudflareCustomHostname that should be imported. Refer to the {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/custom_hostname#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the DataCloudflareCustomHostname to import is found
    */
    DataCloudflareCustomHostname.generateConfigForImport = function (scope, importToId, importFromId, provider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "cloudflare_custom_hostname", importId: importFromId, provider: provider });
    };
    Object.defineProperty(DataCloudflareCustomHostname.prototype, "createdAt", {
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
    Object.defineProperty(DataCloudflareCustomHostname.prototype, "customHostnameId", {
        get: function () {
            return this.getStringAttribute('custom_hostname_id');
        },
        set: function (value) {
            this._customHostnameId = value;
        },
        enumerable: false,
        configurable: true
    });
    DataCloudflareCustomHostname.prototype.resetCustomHostnameId = function () {
        this._customHostnameId = undefined;
    };
    Object.defineProperty(DataCloudflareCustomHostname.prototype, "customHostnameIdInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._customHostnameId;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareCustomHostname.prototype, "customMetadata", {
        get: function () {
            return this._customMetadata;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareCustomHostname.prototype, "customOriginServer", {
        // custom_origin_server - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('custom_origin_server');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareCustomHostname.prototype, "customOriginSni", {
        // custom_origin_sni - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('custom_origin_sni');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareCustomHostname.prototype, "filter", {
        get: function () {
            return this._filter;
        },
        enumerable: false,
        configurable: true
    });
    DataCloudflareCustomHostname.prototype.putFilter = function (value) {
        this._filter.internalValue = value;
    };
    DataCloudflareCustomHostname.prototype.resetFilter = function () {
        this._filter.internalValue = undefined;
    };
    Object.defineProperty(DataCloudflareCustomHostname.prototype, "filterInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._filter.internalValue;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareCustomHostname.prototype, "hostname", {
        // hostname - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('hostname');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareCustomHostname.prototype, "id", {
        // id - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('id');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareCustomHostname.prototype, "ownershipVerification", {
        get: function () {
            return this._ownershipVerification;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareCustomHostname.prototype, "ownershipVerificationHttp", {
        get: function () {
            return this._ownershipVerificationHttp;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareCustomHostname.prototype, "ssl", {
        get: function () {
            return this._ssl;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareCustomHostname.prototype, "status", {
        // status - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('status');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareCustomHostname.prototype, "verificationErrors", {
        // verification_errors - computed: true, optional: false, required: false
        get: function () {
            return this.getListAttribute('verification_errors');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareCustomHostname.prototype, "zoneId", {
        get: function () {
            return this.getStringAttribute('zone_id');
        },
        set: function (value) {
            this._zoneId = value;
        },
        enumerable: false,
        configurable: true
    });
    DataCloudflareCustomHostname.prototype.resetZoneId = function () {
        this._zoneId = undefined;
    };
    Object.defineProperty(DataCloudflareCustomHostname.prototype, "zoneIdInput", {
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
    DataCloudflareCustomHostname.prototype.synthesizeAttributes = function () {
        return {
            custom_hostname_id: cdktf.stringToTerraform(this._customHostnameId),
            filter: dataCloudflareCustomHostnameFilterToTerraform(this._filter.internalValue),
            zone_id: cdktf.stringToTerraform(this._zoneId),
        };
    };
    DataCloudflareCustomHostname.prototype.synthesizeHclAttributes = function () {
        var attrs = {
            custom_hostname_id: {
                value: cdktf.stringToHclTerraform(this._customHostnameId),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            filter: {
                value: dataCloudflareCustomHostnameFilterToHclTerraform(this._filter.internalValue),
                isBlock: true,
                type: "struct",
                storageClassType: "DataCloudflareCustomHostnameFilter",
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
    DataCloudflareCustomHostname.tfResourceType = "cloudflare_custom_hostname";
    return DataCloudflareCustomHostname;
}(cdktf.TerraformDataSource));
exports.DataCloudflareCustomHostname = DataCloudflareCustomHostname;
