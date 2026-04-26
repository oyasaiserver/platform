"use strict";
// https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/zero_trust_device_custom_profile
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
exports.ZeroTrustDeviceCustomProfile = exports.ZeroTrustDeviceCustomProfileTargetTestsList = exports.ZeroTrustDeviceCustomProfileTargetTestsOutputReference = exports.ZeroTrustDeviceCustomProfileServiceModeV2OutputReference = exports.ZeroTrustDeviceCustomProfileIncludeList = exports.ZeroTrustDeviceCustomProfileIncludeOutputReference = exports.ZeroTrustDeviceCustomProfileFallbackDomainsList = exports.ZeroTrustDeviceCustomProfileFallbackDomainsOutputReference = exports.ZeroTrustDeviceCustomProfileExcludeList = exports.ZeroTrustDeviceCustomProfileExcludeOutputReference = void 0;
exports.zeroTrustDeviceCustomProfileExcludeToTerraform = zeroTrustDeviceCustomProfileExcludeToTerraform;
exports.zeroTrustDeviceCustomProfileExcludeToHclTerraform = zeroTrustDeviceCustomProfileExcludeToHclTerraform;
exports.zeroTrustDeviceCustomProfileFallbackDomainsToTerraform = zeroTrustDeviceCustomProfileFallbackDomainsToTerraform;
exports.zeroTrustDeviceCustomProfileFallbackDomainsToHclTerraform = zeroTrustDeviceCustomProfileFallbackDomainsToHclTerraform;
exports.zeroTrustDeviceCustomProfileIncludeToTerraform = zeroTrustDeviceCustomProfileIncludeToTerraform;
exports.zeroTrustDeviceCustomProfileIncludeToHclTerraform = zeroTrustDeviceCustomProfileIncludeToHclTerraform;
exports.zeroTrustDeviceCustomProfileServiceModeV2ToTerraform = zeroTrustDeviceCustomProfileServiceModeV2ToTerraform;
exports.zeroTrustDeviceCustomProfileServiceModeV2ToHclTerraform = zeroTrustDeviceCustomProfileServiceModeV2ToHclTerraform;
exports.zeroTrustDeviceCustomProfileTargetTestsToTerraform = zeroTrustDeviceCustomProfileTargetTestsToTerraform;
exports.zeroTrustDeviceCustomProfileTargetTestsToHclTerraform = zeroTrustDeviceCustomProfileTargetTestsToHclTerraform;
var cdktf = require("cdktf");
function zeroTrustDeviceCustomProfileExcludeToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        address: cdktf.stringToTerraform(struct.address),
        description: cdktf.stringToTerraform(struct.description),
        host: cdktf.stringToTerraform(struct.host),
    };
}
function zeroTrustDeviceCustomProfileExcludeToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    var attrs = {
        address: {
            value: cdktf.stringToHclTerraform(struct.address),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        description: {
            value: cdktf.stringToHclTerraform(struct.description),
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
    };
    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(function (_a) {
        var _ = _a[0], value = _a[1];
        return value !== undefined && value.value !== undefined;
    }));
}
var ZeroTrustDeviceCustomProfileExcludeOutputReference = /** @class */ (function (_super) {
    __extends(ZeroTrustDeviceCustomProfileExcludeOutputReference, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    function ZeroTrustDeviceCustomProfileExcludeOutputReference(terraformResource, terraformAttribute, complexObjectIndex, complexObjectIsFromSet) {
        var _this = _super.call(this, terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex) || this;
        _this.isEmptyObject = false;
        return _this;
    }
    Object.defineProperty(ZeroTrustDeviceCustomProfileExcludeOutputReference.prototype, "internalValue", {
        get: function () {
            if (this.resolvableValue) {
                return this.resolvableValue;
            }
            var hasAnyValues = this.isEmptyObject;
            var internalValueResult = {};
            if (this._address !== undefined) {
                hasAnyValues = true;
                internalValueResult.address = this._address;
            }
            if (this._description !== undefined) {
                hasAnyValues = true;
                internalValueResult.description = this._description;
            }
            if (this._host !== undefined) {
                hasAnyValues = true;
                internalValueResult.host = this._host;
            }
            return hasAnyValues ? internalValueResult : undefined;
        },
        set: function (value) {
            if (value === undefined) {
                this.isEmptyObject = false;
                this.resolvableValue = undefined;
                this._address = undefined;
                this._description = undefined;
                this._host = undefined;
            }
            else if (cdktf.Tokenization.isResolvable(value)) {
                this.isEmptyObject = false;
                this.resolvableValue = value;
            }
            else {
                this.isEmptyObject = Object.keys(value).length === 0;
                this.resolvableValue = undefined;
                this._address = value.address;
                this._description = value.description;
                this._host = value.host;
            }
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ZeroTrustDeviceCustomProfileExcludeOutputReference.prototype, "address", {
        get: function () {
            return this.getStringAttribute('address');
        },
        set: function (value) {
            this._address = value;
        },
        enumerable: false,
        configurable: true
    });
    ZeroTrustDeviceCustomProfileExcludeOutputReference.prototype.resetAddress = function () {
        this._address = undefined;
    };
    Object.defineProperty(ZeroTrustDeviceCustomProfileExcludeOutputReference.prototype, "addressInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._address;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ZeroTrustDeviceCustomProfileExcludeOutputReference.prototype, "description", {
        get: function () {
            return this.getStringAttribute('description');
        },
        set: function (value) {
            this._description = value;
        },
        enumerable: false,
        configurable: true
    });
    ZeroTrustDeviceCustomProfileExcludeOutputReference.prototype.resetDescription = function () {
        this._description = undefined;
    };
    Object.defineProperty(ZeroTrustDeviceCustomProfileExcludeOutputReference.prototype, "descriptionInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._description;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ZeroTrustDeviceCustomProfileExcludeOutputReference.prototype, "host", {
        get: function () {
            return this.getStringAttribute('host');
        },
        set: function (value) {
            this._host = value;
        },
        enumerable: false,
        configurable: true
    });
    ZeroTrustDeviceCustomProfileExcludeOutputReference.prototype.resetHost = function () {
        this._host = undefined;
    };
    Object.defineProperty(ZeroTrustDeviceCustomProfileExcludeOutputReference.prototype, "hostInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._host;
        },
        enumerable: false,
        configurable: true
    });
    return ZeroTrustDeviceCustomProfileExcludeOutputReference;
}(cdktf.ComplexObject));
exports.ZeroTrustDeviceCustomProfileExcludeOutputReference = ZeroTrustDeviceCustomProfileExcludeOutputReference;
var ZeroTrustDeviceCustomProfileExcludeList = /** @class */ (function (_super) {
    __extends(ZeroTrustDeviceCustomProfileExcludeList, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    function ZeroTrustDeviceCustomProfileExcludeList(terraformResource, terraformAttribute, wrapsSet) {
        var _this = _super.call(this, terraformResource, terraformAttribute, wrapsSet) || this;
        _this.terraformResource = terraformResource;
        _this.terraformAttribute = terraformAttribute;
        _this.wrapsSet = wrapsSet;
        return _this;
    }
    /**
    * @param index the index of the item to return
    */
    ZeroTrustDeviceCustomProfileExcludeList.prototype.get = function (index) {
        return new ZeroTrustDeviceCustomProfileExcludeOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
    };
    return ZeroTrustDeviceCustomProfileExcludeList;
}(cdktf.ComplexList));
exports.ZeroTrustDeviceCustomProfileExcludeList = ZeroTrustDeviceCustomProfileExcludeList;
function zeroTrustDeviceCustomProfileFallbackDomainsToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {};
}
function zeroTrustDeviceCustomProfileFallbackDomainsToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    var attrs = {};
    return attrs;
}
var ZeroTrustDeviceCustomProfileFallbackDomainsOutputReference = /** @class */ (function (_super) {
    __extends(ZeroTrustDeviceCustomProfileFallbackDomainsOutputReference, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    function ZeroTrustDeviceCustomProfileFallbackDomainsOutputReference(terraformResource, terraformAttribute, complexObjectIndex, complexObjectIsFromSet) {
        var _this = _super.call(this, terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex) || this;
        _this.isEmptyObject = false;
        return _this;
    }
    Object.defineProperty(ZeroTrustDeviceCustomProfileFallbackDomainsOutputReference.prototype, "internalValue", {
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
    Object.defineProperty(ZeroTrustDeviceCustomProfileFallbackDomainsOutputReference.prototype, "description", {
        // description - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('description');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ZeroTrustDeviceCustomProfileFallbackDomainsOutputReference.prototype, "dnsServer", {
        // dns_server - computed: true, optional: false, required: false
        get: function () {
            return this.getListAttribute('dns_server');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ZeroTrustDeviceCustomProfileFallbackDomainsOutputReference.prototype, "suffix", {
        // suffix - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('suffix');
        },
        enumerable: false,
        configurable: true
    });
    return ZeroTrustDeviceCustomProfileFallbackDomainsOutputReference;
}(cdktf.ComplexObject));
exports.ZeroTrustDeviceCustomProfileFallbackDomainsOutputReference = ZeroTrustDeviceCustomProfileFallbackDomainsOutputReference;
var ZeroTrustDeviceCustomProfileFallbackDomainsList = /** @class */ (function (_super) {
    __extends(ZeroTrustDeviceCustomProfileFallbackDomainsList, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    function ZeroTrustDeviceCustomProfileFallbackDomainsList(terraformResource, terraformAttribute, wrapsSet) {
        var _this = _super.call(this, terraformResource, terraformAttribute, wrapsSet) || this;
        _this.terraformResource = terraformResource;
        _this.terraformAttribute = terraformAttribute;
        _this.wrapsSet = wrapsSet;
        return _this;
    }
    /**
    * @param index the index of the item to return
    */
    ZeroTrustDeviceCustomProfileFallbackDomainsList.prototype.get = function (index) {
        return new ZeroTrustDeviceCustomProfileFallbackDomainsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
    };
    return ZeroTrustDeviceCustomProfileFallbackDomainsList;
}(cdktf.ComplexList));
exports.ZeroTrustDeviceCustomProfileFallbackDomainsList = ZeroTrustDeviceCustomProfileFallbackDomainsList;
function zeroTrustDeviceCustomProfileIncludeToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        address: cdktf.stringToTerraform(struct.address),
        description: cdktf.stringToTerraform(struct.description),
        host: cdktf.stringToTerraform(struct.host),
    };
}
function zeroTrustDeviceCustomProfileIncludeToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    var attrs = {
        address: {
            value: cdktf.stringToHclTerraform(struct.address),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        description: {
            value: cdktf.stringToHclTerraform(struct.description),
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
    };
    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(function (_a) {
        var _ = _a[0], value = _a[1];
        return value !== undefined && value.value !== undefined;
    }));
}
var ZeroTrustDeviceCustomProfileIncludeOutputReference = /** @class */ (function (_super) {
    __extends(ZeroTrustDeviceCustomProfileIncludeOutputReference, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    function ZeroTrustDeviceCustomProfileIncludeOutputReference(terraformResource, terraformAttribute, complexObjectIndex, complexObjectIsFromSet) {
        var _this = _super.call(this, terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex) || this;
        _this.isEmptyObject = false;
        return _this;
    }
    Object.defineProperty(ZeroTrustDeviceCustomProfileIncludeOutputReference.prototype, "internalValue", {
        get: function () {
            if (this.resolvableValue) {
                return this.resolvableValue;
            }
            var hasAnyValues = this.isEmptyObject;
            var internalValueResult = {};
            if (this._address !== undefined) {
                hasAnyValues = true;
                internalValueResult.address = this._address;
            }
            if (this._description !== undefined) {
                hasAnyValues = true;
                internalValueResult.description = this._description;
            }
            if (this._host !== undefined) {
                hasAnyValues = true;
                internalValueResult.host = this._host;
            }
            return hasAnyValues ? internalValueResult : undefined;
        },
        set: function (value) {
            if (value === undefined) {
                this.isEmptyObject = false;
                this.resolvableValue = undefined;
                this._address = undefined;
                this._description = undefined;
                this._host = undefined;
            }
            else if (cdktf.Tokenization.isResolvable(value)) {
                this.isEmptyObject = false;
                this.resolvableValue = value;
            }
            else {
                this.isEmptyObject = Object.keys(value).length === 0;
                this.resolvableValue = undefined;
                this._address = value.address;
                this._description = value.description;
                this._host = value.host;
            }
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ZeroTrustDeviceCustomProfileIncludeOutputReference.prototype, "address", {
        get: function () {
            return this.getStringAttribute('address');
        },
        set: function (value) {
            this._address = value;
        },
        enumerable: false,
        configurable: true
    });
    ZeroTrustDeviceCustomProfileIncludeOutputReference.prototype.resetAddress = function () {
        this._address = undefined;
    };
    Object.defineProperty(ZeroTrustDeviceCustomProfileIncludeOutputReference.prototype, "addressInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._address;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ZeroTrustDeviceCustomProfileIncludeOutputReference.prototype, "description", {
        get: function () {
            return this.getStringAttribute('description');
        },
        set: function (value) {
            this._description = value;
        },
        enumerable: false,
        configurable: true
    });
    ZeroTrustDeviceCustomProfileIncludeOutputReference.prototype.resetDescription = function () {
        this._description = undefined;
    };
    Object.defineProperty(ZeroTrustDeviceCustomProfileIncludeOutputReference.prototype, "descriptionInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._description;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ZeroTrustDeviceCustomProfileIncludeOutputReference.prototype, "host", {
        get: function () {
            return this.getStringAttribute('host');
        },
        set: function (value) {
            this._host = value;
        },
        enumerable: false,
        configurable: true
    });
    ZeroTrustDeviceCustomProfileIncludeOutputReference.prototype.resetHost = function () {
        this._host = undefined;
    };
    Object.defineProperty(ZeroTrustDeviceCustomProfileIncludeOutputReference.prototype, "hostInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._host;
        },
        enumerable: false,
        configurable: true
    });
    return ZeroTrustDeviceCustomProfileIncludeOutputReference;
}(cdktf.ComplexObject));
exports.ZeroTrustDeviceCustomProfileIncludeOutputReference = ZeroTrustDeviceCustomProfileIncludeOutputReference;
var ZeroTrustDeviceCustomProfileIncludeList = /** @class */ (function (_super) {
    __extends(ZeroTrustDeviceCustomProfileIncludeList, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    function ZeroTrustDeviceCustomProfileIncludeList(terraformResource, terraformAttribute, wrapsSet) {
        var _this = _super.call(this, terraformResource, terraformAttribute, wrapsSet) || this;
        _this.terraformResource = terraformResource;
        _this.terraformAttribute = terraformAttribute;
        _this.wrapsSet = wrapsSet;
        return _this;
    }
    /**
    * @param index the index of the item to return
    */
    ZeroTrustDeviceCustomProfileIncludeList.prototype.get = function (index) {
        return new ZeroTrustDeviceCustomProfileIncludeOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
    };
    return ZeroTrustDeviceCustomProfileIncludeList;
}(cdktf.ComplexList));
exports.ZeroTrustDeviceCustomProfileIncludeList = ZeroTrustDeviceCustomProfileIncludeList;
function zeroTrustDeviceCustomProfileServiceModeV2ToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        mode: cdktf.stringToTerraform(struct.mode),
        port: cdktf.numberToTerraform(struct.port),
    };
}
function zeroTrustDeviceCustomProfileServiceModeV2ToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    var attrs = {
        mode: {
            value: cdktf.stringToHclTerraform(struct.mode),
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
    };
    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(function (_a) {
        var _ = _a[0], value = _a[1];
        return value !== undefined && value.value !== undefined;
    }));
}
var ZeroTrustDeviceCustomProfileServiceModeV2OutputReference = /** @class */ (function (_super) {
    __extends(ZeroTrustDeviceCustomProfileServiceModeV2OutputReference, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    function ZeroTrustDeviceCustomProfileServiceModeV2OutputReference(terraformResource, terraformAttribute) {
        var _this = _super.call(this, terraformResource, terraformAttribute, false) || this;
        _this.isEmptyObject = false;
        return _this;
    }
    Object.defineProperty(ZeroTrustDeviceCustomProfileServiceModeV2OutputReference.prototype, "internalValue", {
        get: function () {
            if (this.resolvableValue) {
                return this.resolvableValue;
            }
            var hasAnyValues = this.isEmptyObject;
            var internalValueResult = {};
            if (this._mode !== undefined) {
                hasAnyValues = true;
                internalValueResult.mode = this._mode;
            }
            if (this._port !== undefined) {
                hasAnyValues = true;
                internalValueResult.port = this._port;
            }
            return hasAnyValues ? internalValueResult : undefined;
        },
        set: function (value) {
            if (value === undefined) {
                this.isEmptyObject = false;
                this.resolvableValue = undefined;
                this._mode = undefined;
                this._port = undefined;
            }
            else if (cdktf.Tokenization.isResolvable(value)) {
                this.isEmptyObject = false;
                this.resolvableValue = value;
            }
            else {
                this.isEmptyObject = Object.keys(value).length === 0;
                this.resolvableValue = undefined;
                this._mode = value.mode;
                this._port = value.port;
            }
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ZeroTrustDeviceCustomProfileServiceModeV2OutputReference.prototype, "mode", {
        get: function () {
            return this.getStringAttribute('mode');
        },
        set: function (value) {
            this._mode = value;
        },
        enumerable: false,
        configurable: true
    });
    ZeroTrustDeviceCustomProfileServiceModeV2OutputReference.prototype.resetMode = function () {
        this._mode = undefined;
    };
    Object.defineProperty(ZeroTrustDeviceCustomProfileServiceModeV2OutputReference.prototype, "modeInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._mode;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ZeroTrustDeviceCustomProfileServiceModeV2OutputReference.prototype, "port", {
        get: function () {
            return this.getNumberAttribute('port');
        },
        set: function (value) {
            this._port = value;
        },
        enumerable: false,
        configurable: true
    });
    ZeroTrustDeviceCustomProfileServiceModeV2OutputReference.prototype.resetPort = function () {
        this._port = undefined;
    };
    Object.defineProperty(ZeroTrustDeviceCustomProfileServiceModeV2OutputReference.prototype, "portInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._port;
        },
        enumerable: false,
        configurable: true
    });
    return ZeroTrustDeviceCustomProfileServiceModeV2OutputReference;
}(cdktf.ComplexObject));
exports.ZeroTrustDeviceCustomProfileServiceModeV2OutputReference = ZeroTrustDeviceCustomProfileServiceModeV2OutputReference;
function zeroTrustDeviceCustomProfileTargetTestsToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {};
}
function zeroTrustDeviceCustomProfileTargetTestsToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    var attrs = {};
    return attrs;
}
var ZeroTrustDeviceCustomProfileTargetTestsOutputReference = /** @class */ (function (_super) {
    __extends(ZeroTrustDeviceCustomProfileTargetTestsOutputReference, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    function ZeroTrustDeviceCustomProfileTargetTestsOutputReference(terraformResource, terraformAttribute, complexObjectIndex, complexObjectIsFromSet) {
        var _this = _super.call(this, terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex) || this;
        _this.isEmptyObject = false;
        return _this;
    }
    Object.defineProperty(ZeroTrustDeviceCustomProfileTargetTestsOutputReference.prototype, "internalValue", {
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
    Object.defineProperty(ZeroTrustDeviceCustomProfileTargetTestsOutputReference.prototype, "id", {
        // id - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('id');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ZeroTrustDeviceCustomProfileTargetTestsOutputReference.prototype, "name", {
        // name - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('name');
        },
        enumerable: false,
        configurable: true
    });
    return ZeroTrustDeviceCustomProfileTargetTestsOutputReference;
}(cdktf.ComplexObject));
exports.ZeroTrustDeviceCustomProfileTargetTestsOutputReference = ZeroTrustDeviceCustomProfileTargetTestsOutputReference;
var ZeroTrustDeviceCustomProfileTargetTestsList = /** @class */ (function (_super) {
    __extends(ZeroTrustDeviceCustomProfileTargetTestsList, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    function ZeroTrustDeviceCustomProfileTargetTestsList(terraformResource, terraformAttribute, wrapsSet) {
        var _this = _super.call(this, terraformResource, terraformAttribute, wrapsSet) || this;
        _this.terraformResource = terraformResource;
        _this.terraformAttribute = terraformAttribute;
        _this.wrapsSet = wrapsSet;
        return _this;
    }
    /**
    * @param index the index of the item to return
    */
    ZeroTrustDeviceCustomProfileTargetTestsList.prototype.get = function (index) {
        return new ZeroTrustDeviceCustomProfileTargetTestsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
    };
    return ZeroTrustDeviceCustomProfileTargetTestsList;
}(cdktf.ComplexList));
exports.ZeroTrustDeviceCustomProfileTargetTestsList = ZeroTrustDeviceCustomProfileTargetTestsList;
/**
* Represents a {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/zero_trust_device_custom_profile cloudflare_zero_trust_device_custom_profile}
*/
var ZeroTrustDeviceCustomProfile = /** @class */ (function (_super) {
    __extends(ZeroTrustDeviceCustomProfile, _super);
    // ===========
    // INITIALIZER
    // ===========
    /**
    * Create a new {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/zero_trust_device_custom_profile cloudflare_zero_trust_device_custom_profile} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options ZeroTrustDeviceCustomProfileConfig
    */
    function ZeroTrustDeviceCustomProfile(scope, id, config) {
        var _this = _super.call(this, scope, id, {
            terraformResourceType: 'cloudflare_zero_trust_device_custom_profile',
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
        // exclude - computed: true, optional: true, required: false
        _this._exclude = new ZeroTrustDeviceCustomProfileExcludeList(_this, "exclude", false);
        // fallback_domains - computed: true, optional: false, required: false
        _this._fallbackDomains = new ZeroTrustDeviceCustomProfileFallbackDomainsList(_this, "fallback_domains", false);
        // include - computed: true, optional: true, required: false
        _this._include = new ZeroTrustDeviceCustomProfileIncludeList(_this, "include", false);
        // service_mode_v2 - computed: true, optional: true, required: false
        _this._serviceModeV2 = new ZeroTrustDeviceCustomProfileServiceModeV2OutputReference(_this, "service_mode_v2");
        // target_tests - computed: true, optional: false, required: false
        _this._targetTests = new ZeroTrustDeviceCustomProfileTargetTestsList(_this, "target_tests", false);
        _this._accountId = config.accountId;
        _this._allowModeSwitch = config.allowModeSwitch;
        _this._allowUpdates = config.allowUpdates;
        _this._allowedToLeave = config.allowedToLeave;
        _this._autoConnect = config.autoConnect;
        _this._captivePortal = config.captivePortal;
        _this._description = config.description;
        _this._disableAutoFallback = config.disableAutoFallback;
        _this._enabled = config.enabled;
        _this._exclude.internalValue = config.exclude;
        _this._excludeOfficeIps = config.excludeOfficeIps;
        _this._include.internalValue = config.include;
        _this._lanAllowMinutes = config.lanAllowMinutes;
        _this._lanAllowSubnetSize = config.lanAllowSubnetSize;
        _this._match = config.match;
        _this._name = config.name;
        _this._precedence = config.precedence;
        _this._registerInterfaceIpWithDns = config.registerInterfaceIpWithDns;
        _this._sccmVpnBoundarySupport = config.sccmVpnBoundarySupport;
        _this._serviceModeV2.internalValue = config.serviceModeV2;
        _this._supportUrl = config.supportUrl;
        _this._switchLocked = config.switchLocked;
        _this._tunnelProtocol = config.tunnelProtocol;
        return _this;
    }
    // ==============
    // STATIC Methods
    // ==============
    /**
    * Generates CDKTF code for importing a ZeroTrustDeviceCustomProfile resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the ZeroTrustDeviceCustomProfile to import
    * @param importFromId The id of the existing ZeroTrustDeviceCustomProfile that should be imported. Refer to the {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/zero_trust_device_custom_profile#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the ZeroTrustDeviceCustomProfile to import is found
    */
    ZeroTrustDeviceCustomProfile.generateConfigForImport = function (scope, importToId, importFromId, provider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "cloudflare_zero_trust_device_custom_profile", importId: importFromId, provider: provider });
    };
    Object.defineProperty(ZeroTrustDeviceCustomProfile.prototype, "accountId", {
        get: function () {
            return this.getStringAttribute('account_id');
        },
        set: function (value) {
            this._accountId = value;
        },
        enumerable: false,
        configurable: true
    });
    ZeroTrustDeviceCustomProfile.prototype.resetAccountId = function () {
        this._accountId = undefined;
    };
    Object.defineProperty(ZeroTrustDeviceCustomProfile.prototype, "accountIdInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._accountId;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ZeroTrustDeviceCustomProfile.prototype, "allowModeSwitch", {
        get: function () {
            return this.getBooleanAttribute('allow_mode_switch');
        },
        set: function (value) {
            this._allowModeSwitch = value;
        },
        enumerable: false,
        configurable: true
    });
    ZeroTrustDeviceCustomProfile.prototype.resetAllowModeSwitch = function () {
        this._allowModeSwitch = undefined;
    };
    Object.defineProperty(ZeroTrustDeviceCustomProfile.prototype, "allowModeSwitchInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._allowModeSwitch;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ZeroTrustDeviceCustomProfile.prototype, "allowUpdates", {
        get: function () {
            return this.getBooleanAttribute('allow_updates');
        },
        set: function (value) {
            this._allowUpdates = value;
        },
        enumerable: false,
        configurable: true
    });
    ZeroTrustDeviceCustomProfile.prototype.resetAllowUpdates = function () {
        this._allowUpdates = undefined;
    };
    Object.defineProperty(ZeroTrustDeviceCustomProfile.prototype, "allowUpdatesInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._allowUpdates;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ZeroTrustDeviceCustomProfile.prototype, "allowedToLeave", {
        get: function () {
            return this.getBooleanAttribute('allowed_to_leave');
        },
        set: function (value) {
            this._allowedToLeave = value;
        },
        enumerable: false,
        configurable: true
    });
    ZeroTrustDeviceCustomProfile.prototype.resetAllowedToLeave = function () {
        this._allowedToLeave = undefined;
    };
    Object.defineProperty(ZeroTrustDeviceCustomProfile.prototype, "allowedToLeaveInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._allowedToLeave;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ZeroTrustDeviceCustomProfile.prototype, "autoConnect", {
        get: function () {
            return this.getNumberAttribute('auto_connect');
        },
        set: function (value) {
            this._autoConnect = value;
        },
        enumerable: false,
        configurable: true
    });
    ZeroTrustDeviceCustomProfile.prototype.resetAutoConnect = function () {
        this._autoConnect = undefined;
    };
    Object.defineProperty(ZeroTrustDeviceCustomProfile.prototype, "autoConnectInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._autoConnect;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ZeroTrustDeviceCustomProfile.prototype, "captivePortal", {
        get: function () {
            return this.getNumberAttribute('captive_portal');
        },
        set: function (value) {
            this._captivePortal = value;
        },
        enumerable: false,
        configurable: true
    });
    ZeroTrustDeviceCustomProfile.prototype.resetCaptivePortal = function () {
        this._captivePortal = undefined;
    };
    Object.defineProperty(ZeroTrustDeviceCustomProfile.prototype, "captivePortalInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._captivePortal;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ZeroTrustDeviceCustomProfile.prototype, "default", {
        // default - computed: true, optional: false, required: false
        get: function () {
            return this.getBooleanAttribute('default');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ZeroTrustDeviceCustomProfile.prototype, "description", {
        get: function () {
            return this.getStringAttribute('description');
        },
        set: function (value) {
            this._description = value;
        },
        enumerable: false,
        configurable: true
    });
    ZeroTrustDeviceCustomProfile.prototype.resetDescription = function () {
        this._description = undefined;
    };
    Object.defineProperty(ZeroTrustDeviceCustomProfile.prototype, "descriptionInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._description;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ZeroTrustDeviceCustomProfile.prototype, "disableAutoFallback", {
        get: function () {
            return this.getBooleanAttribute('disable_auto_fallback');
        },
        set: function (value) {
            this._disableAutoFallback = value;
        },
        enumerable: false,
        configurable: true
    });
    ZeroTrustDeviceCustomProfile.prototype.resetDisableAutoFallback = function () {
        this._disableAutoFallback = undefined;
    };
    Object.defineProperty(ZeroTrustDeviceCustomProfile.prototype, "disableAutoFallbackInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._disableAutoFallback;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ZeroTrustDeviceCustomProfile.prototype, "enabled", {
        get: function () {
            return this.getBooleanAttribute('enabled');
        },
        set: function (value) {
            this._enabled = value;
        },
        enumerable: false,
        configurable: true
    });
    ZeroTrustDeviceCustomProfile.prototype.resetEnabled = function () {
        this._enabled = undefined;
    };
    Object.defineProperty(ZeroTrustDeviceCustomProfile.prototype, "enabledInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._enabled;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ZeroTrustDeviceCustomProfile.prototype, "exclude", {
        get: function () {
            return this._exclude;
        },
        enumerable: false,
        configurable: true
    });
    ZeroTrustDeviceCustomProfile.prototype.putExclude = function (value) {
        this._exclude.internalValue = value;
    };
    ZeroTrustDeviceCustomProfile.prototype.resetExclude = function () {
        this._exclude.internalValue = undefined;
    };
    Object.defineProperty(ZeroTrustDeviceCustomProfile.prototype, "excludeInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._exclude.internalValue;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ZeroTrustDeviceCustomProfile.prototype, "excludeOfficeIps", {
        get: function () {
            return this.getBooleanAttribute('exclude_office_ips');
        },
        set: function (value) {
            this._excludeOfficeIps = value;
        },
        enumerable: false,
        configurable: true
    });
    ZeroTrustDeviceCustomProfile.prototype.resetExcludeOfficeIps = function () {
        this._excludeOfficeIps = undefined;
    };
    Object.defineProperty(ZeroTrustDeviceCustomProfile.prototype, "excludeOfficeIpsInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._excludeOfficeIps;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ZeroTrustDeviceCustomProfile.prototype, "fallbackDomains", {
        get: function () {
            return this._fallbackDomains;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ZeroTrustDeviceCustomProfile.prototype, "gatewayUniqueId", {
        // gateway_unique_id - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('gateway_unique_id');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ZeroTrustDeviceCustomProfile.prototype, "id", {
        // id - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('id');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ZeroTrustDeviceCustomProfile.prototype, "include", {
        get: function () {
            return this._include;
        },
        enumerable: false,
        configurable: true
    });
    ZeroTrustDeviceCustomProfile.prototype.putInclude = function (value) {
        this._include.internalValue = value;
    };
    ZeroTrustDeviceCustomProfile.prototype.resetInclude = function () {
        this._include.internalValue = undefined;
    };
    Object.defineProperty(ZeroTrustDeviceCustomProfile.prototype, "includeInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._include.internalValue;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ZeroTrustDeviceCustomProfile.prototype, "lanAllowMinutes", {
        get: function () {
            return this.getNumberAttribute('lan_allow_minutes');
        },
        set: function (value) {
            this._lanAllowMinutes = value;
        },
        enumerable: false,
        configurable: true
    });
    ZeroTrustDeviceCustomProfile.prototype.resetLanAllowMinutes = function () {
        this._lanAllowMinutes = undefined;
    };
    Object.defineProperty(ZeroTrustDeviceCustomProfile.prototype, "lanAllowMinutesInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._lanAllowMinutes;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ZeroTrustDeviceCustomProfile.prototype, "lanAllowSubnetSize", {
        get: function () {
            return this.getNumberAttribute('lan_allow_subnet_size');
        },
        set: function (value) {
            this._lanAllowSubnetSize = value;
        },
        enumerable: false,
        configurable: true
    });
    ZeroTrustDeviceCustomProfile.prototype.resetLanAllowSubnetSize = function () {
        this._lanAllowSubnetSize = undefined;
    };
    Object.defineProperty(ZeroTrustDeviceCustomProfile.prototype, "lanAllowSubnetSizeInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._lanAllowSubnetSize;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ZeroTrustDeviceCustomProfile.prototype, "match", {
        get: function () {
            return this.getStringAttribute('match');
        },
        set: function (value) {
            this._match = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ZeroTrustDeviceCustomProfile.prototype, "matchInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._match;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ZeroTrustDeviceCustomProfile.prototype, "name", {
        get: function () {
            return this.getStringAttribute('name');
        },
        set: function (value) {
            this._name = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ZeroTrustDeviceCustomProfile.prototype, "nameInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._name;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ZeroTrustDeviceCustomProfile.prototype, "policyId", {
        // policy_id - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('policy_id');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ZeroTrustDeviceCustomProfile.prototype, "precedence", {
        get: function () {
            return this.getNumberAttribute('precedence');
        },
        set: function (value) {
            this._precedence = value;
        },
        enumerable: false,
        configurable: true
    });
    ZeroTrustDeviceCustomProfile.prototype.resetPrecedence = function () {
        this._precedence = undefined;
    };
    Object.defineProperty(ZeroTrustDeviceCustomProfile.prototype, "precedenceInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._precedence;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ZeroTrustDeviceCustomProfile.prototype, "registerInterfaceIpWithDns", {
        get: function () {
            return this.getBooleanAttribute('register_interface_ip_with_dns');
        },
        set: function (value) {
            this._registerInterfaceIpWithDns = value;
        },
        enumerable: false,
        configurable: true
    });
    ZeroTrustDeviceCustomProfile.prototype.resetRegisterInterfaceIpWithDns = function () {
        this._registerInterfaceIpWithDns = undefined;
    };
    Object.defineProperty(ZeroTrustDeviceCustomProfile.prototype, "registerInterfaceIpWithDnsInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._registerInterfaceIpWithDns;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ZeroTrustDeviceCustomProfile.prototype, "sccmVpnBoundarySupport", {
        get: function () {
            return this.getBooleanAttribute('sccm_vpn_boundary_support');
        },
        set: function (value) {
            this._sccmVpnBoundarySupport = value;
        },
        enumerable: false,
        configurable: true
    });
    ZeroTrustDeviceCustomProfile.prototype.resetSccmVpnBoundarySupport = function () {
        this._sccmVpnBoundarySupport = undefined;
    };
    Object.defineProperty(ZeroTrustDeviceCustomProfile.prototype, "sccmVpnBoundarySupportInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._sccmVpnBoundarySupport;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ZeroTrustDeviceCustomProfile.prototype, "serviceModeV2", {
        get: function () {
            return this._serviceModeV2;
        },
        enumerable: false,
        configurable: true
    });
    ZeroTrustDeviceCustomProfile.prototype.putServiceModeV2 = function (value) {
        this._serviceModeV2.internalValue = value;
    };
    ZeroTrustDeviceCustomProfile.prototype.resetServiceModeV2 = function () {
        this._serviceModeV2.internalValue = undefined;
    };
    Object.defineProperty(ZeroTrustDeviceCustomProfile.prototype, "serviceModeV2Input", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._serviceModeV2.internalValue;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ZeroTrustDeviceCustomProfile.prototype, "supportUrl", {
        get: function () {
            return this.getStringAttribute('support_url');
        },
        set: function (value) {
            this._supportUrl = value;
        },
        enumerable: false,
        configurable: true
    });
    ZeroTrustDeviceCustomProfile.prototype.resetSupportUrl = function () {
        this._supportUrl = undefined;
    };
    Object.defineProperty(ZeroTrustDeviceCustomProfile.prototype, "supportUrlInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._supportUrl;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ZeroTrustDeviceCustomProfile.prototype, "switchLocked", {
        get: function () {
            return this.getBooleanAttribute('switch_locked');
        },
        set: function (value) {
            this._switchLocked = value;
        },
        enumerable: false,
        configurable: true
    });
    ZeroTrustDeviceCustomProfile.prototype.resetSwitchLocked = function () {
        this._switchLocked = undefined;
    };
    Object.defineProperty(ZeroTrustDeviceCustomProfile.prototype, "switchLockedInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._switchLocked;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ZeroTrustDeviceCustomProfile.prototype, "targetTests", {
        get: function () {
            return this._targetTests;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ZeroTrustDeviceCustomProfile.prototype, "tunnelProtocol", {
        get: function () {
            return this.getStringAttribute('tunnel_protocol');
        },
        set: function (value) {
            this._tunnelProtocol = value;
        },
        enumerable: false,
        configurable: true
    });
    ZeroTrustDeviceCustomProfile.prototype.resetTunnelProtocol = function () {
        this._tunnelProtocol = undefined;
    };
    Object.defineProperty(ZeroTrustDeviceCustomProfile.prototype, "tunnelProtocolInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._tunnelProtocol;
        },
        enumerable: false,
        configurable: true
    });
    // =========
    // SYNTHESIS
    // =========
    ZeroTrustDeviceCustomProfile.prototype.synthesizeAttributes = function () {
        return {
            account_id: cdktf.stringToTerraform(this._accountId),
            allow_mode_switch: cdktf.booleanToTerraform(this._allowModeSwitch),
            allow_updates: cdktf.booleanToTerraform(this._allowUpdates),
            allowed_to_leave: cdktf.booleanToTerraform(this._allowedToLeave),
            auto_connect: cdktf.numberToTerraform(this._autoConnect),
            captive_portal: cdktf.numberToTerraform(this._captivePortal),
            description: cdktf.stringToTerraform(this._description),
            disable_auto_fallback: cdktf.booleanToTerraform(this._disableAutoFallback),
            enabled: cdktf.booleanToTerraform(this._enabled),
            exclude: cdktf.listMapper(zeroTrustDeviceCustomProfileExcludeToTerraform, false)(this._exclude.internalValue),
            exclude_office_ips: cdktf.booleanToTerraform(this._excludeOfficeIps),
            include: cdktf.listMapper(zeroTrustDeviceCustomProfileIncludeToTerraform, false)(this._include.internalValue),
            lan_allow_minutes: cdktf.numberToTerraform(this._lanAllowMinutes),
            lan_allow_subnet_size: cdktf.numberToTerraform(this._lanAllowSubnetSize),
            match: cdktf.stringToTerraform(this._match),
            name: cdktf.stringToTerraform(this._name),
            precedence: cdktf.numberToTerraform(this._precedence),
            register_interface_ip_with_dns: cdktf.booleanToTerraform(this._registerInterfaceIpWithDns),
            sccm_vpn_boundary_support: cdktf.booleanToTerraform(this._sccmVpnBoundarySupport),
            service_mode_v2: zeroTrustDeviceCustomProfileServiceModeV2ToTerraform(this._serviceModeV2.internalValue),
            support_url: cdktf.stringToTerraform(this._supportUrl),
            switch_locked: cdktf.booleanToTerraform(this._switchLocked),
            tunnel_protocol: cdktf.stringToTerraform(this._tunnelProtocol),
        };
    };
    ZeroTrustDeviceCustomProfile.prototype.synthesizeHclAttributes = function () {
        var attrs = {
            account_id: {
                value: cdktf.stringToHclTerraform(this._accountId),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            allow_mode_switch: {
                value: cdktf.booleanToHclTerraform(this._allowModeSwitch),
                isBlock: false,
                type: "simple",
                storageClassType: "boolean",
            },
            allow_updates: {
                value: cdktf.booleanToHclTerraform(this._allowUpdates),
                isBlock: false,
                type: "simple",
                storageClassType: "boolean",
            },
            allowed_to_leave: {
                value: cdktf.booleanToHclTerraform(this._allowedToLeave),
                isBlock: false,
                type: "simple",
                storageClassType: "boolean",
            },
            auto_connect: {
                value: cdktf.numberToHclTerraform(this._autoConnect),
                isBlock: false,
                type: "simple",
                storageClassType: "number",
            },
            captive_portal: {
                value: cdktf.numberToHclTerraform(this._captivePortal),
                isBlock: false,
                type: "simple",
                storageClassType: "number",
            },
            description: {
                value: cdktf.stringToHclTerraform(this._description),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            disable_auto_fallback: {
                value: cdktf.booleanToHclTerraform(this._disableAutoFallback),
                isBlock: false,
                type: "simple",
                storageClassType: "boolean",
            },
            enabled: {
                value: cdktf.booleanToHclTerraform(this._enabled),
                isBlock: false,
                type: "simple",
                storageClassType: "boolean",
            },
            exclude: {
                value: cdktf.listMapperHcl(zeroTrustDeviceCustomProfileExcludeToHclTerraform, false)(this._exclude.internalValue),
                isBlock: true,
                type: "list",
                storageClassType: "ZeroTrustDeviceCustomProfileExcludeList",
            },
            exclude_office_ips: {
                value: cdktf.booleanToHclTerraform(this._excludeOfficeIps),
                isBlock: false,
                type: "simple",
                storageClassType: "boolean",
            },
            include: {
                value: cdktf.listMapperHcl(zeroTrustDeviceCustomProfileIncludeToHclTerraform, false)(this._include.internalValue),
                isBlock: true,
                type: "list",
                storageClassType: "ZeroTrustDeviceCustomProfileIncludeList",
            },
            lan_allow_minutes: {
                value: cdktf.numberToHclTerraform(this._lanAllowMinutes),
                isBlock: false,
                type: "simple",
                storageClassType: "number",
            },
            lan_allow_subnet_size: {
                value: cdktf.numberToHclTerraform(this._lanAllowSubnetSize),
                isBlock: false,
                type: "simple",
                storageClassType: "number",
            },
            match: {
                value: cdktf.stringToHclTerraform(this._match),
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
            precedence: {
                value: cdktf.numberToHclTerraform(this._precedence),
                isBlock: false,
                type: "simple",
                storageClassType: "number",
            },
            register_interface_ip_with_dns: {
                value: cdktf.booleanToHclTerraform(this._registerInterfaceIpWithDns),
                isBlock: false,
                type: "simple",
                storageClassType: "boolean",
            },
            sccm_vpn_boundary_support: {
                value: cdktf.booleanToHclTerraform(this._sccmVpnBoundarySupport),
                isBlock: false,
                type: "simple",
                storageClassType: "boolean",
            },
            service_mode_v2: {
                value: zeroTrustDeviceCustomProfileServiceModeV2ToHclTerraform(this._serviceModeV2.internalValue),
                isBlock: true,
                type: "struct",
                storageClassType: "ZeroTrustDeviceCustomProfileServiceModeV2",
            },
            support_url: {
                value: cdktf.stringToHclTerraform(this._supportUrl),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            switch_locked: {
                value: cdktf.booleanToHclTerraform(this._switchLocked),
                isBlock: false,
                type: "simple",
                storageClassType: "boolean",
            },
            tunnel_protocol: {
                value: cdktf.stringToHclTerraform(this._tunnelProtocol),
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
    ZeroTrustDeviceCustomProfile.tfResourceType = "cloudflare_zero_trust_device_custom_profile";
    return ZeroTrustDeviceCustomProfile;
}(cdktf.TerraformResource));
exports.ZeroTrustDeviceCustomProfile = ZeroTrustDeviceCustomProfile;
