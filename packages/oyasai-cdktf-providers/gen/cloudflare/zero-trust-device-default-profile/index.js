"use strict";
// https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/zero_trust_device_default_profile
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
exports.ZeroTrustDeviceDefaultProfile = exports.ZeroTrustDeviceDefaultProfileServiceModeV2OutputReference = exports.ZeroTrustDeviceDefaultProfileIncludeList = exports.ZeroTrustDeviceDefaultProfileIncludeOutputReference = exports.ZeroTrustDeviceDefaultProfileFallbackDomainsList = exports.ZeroTrustDeviceDefaultProfileFallbackDomainsOutputReference = exports.ZeroTrustDeviceDefaultProfileExcludeList = exports.ZeroTrustDeviceDefaultProfileExcludeOutputReference = void 0;
exports.zeroTrustDeviceDefaultProfileExcludeToTerraform = zeroTrustDeviceDefaultProfileExcludeToTerraform;
exports.zeroTrustDeviceDefaultProfileExcludeToHclTerraform = zeroTrustDeviceDefaultProfileExcludeToHclTerraform;
exports.zeroTrustDeviceDefaultProfileFallbackDomainsToTerraform = zeroTrustDeviceDefaultProfileFallbackDomainsToTerraform;
exports.zeroTrustDeviceDefaultProfileFallbackDomainsToHclTerraform = zeroTrustDeviceDefaultProfileFallbackDomainsToHclTerraform;
exports.zeroTrustDeviceDefaultProfileIncludeToTerraform = zeroTrustDeviceDefaultProfileIncludeToTerraform;
exports.zeroTrustDeviceDefaultProfileIncludeToHclTerraform = zeroTrustDeviceDefaultProfileIncludeToHclTerraform;
exports.zeroTrustDeviceDefaultProfileServiceModeV2ToTerraform = zeroTrustDeviceDefaultProfileServiceModeV2ToTerraform;
exports.zeroTrustDeviceDefaultProfileServiceModeV2ToHclTerraform = zeroTrustDeviceDefaultProfileServiceModeV2ToHclTerraform;
var cdktf = require("cdktf");
function zeroTrustDeviceDefaultProfileExcludeToTerraform(struct) {
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
function zeroTrustDeviceDefaultProfileExcludeToHclTerraform(struct) {
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
var ZeroTrustDeviceDefaultProfileExcludeOutputReference = /** @class */ (function (_super) {
    __extends(ZeroTrustDeviceDefaultProfileExcludeOutputReference, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    function ZeroTrustDeviceDefaultProfileExcludeOutputReference(terraformResource, terraformAttribute, complexObjectIndex, complexObjectIsFromSet) {
        var _this = _super.call(this, terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex) || this;
        _this.isEmptyObject = false;
        return _this;
    }
    Object.defineProperty(ZeroTrustDeviceDefaultProfileExcludeOutputReference.prototype, "internalValue", {
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
    Object.defineProperty(ZeroTrustDeviceDefaultProfileExcludeOutputReference.prototype, "address", {
        get: function () {
            return this.getStringAttribute('address');
        },
        set: function (value) {
            this._address = value;
        },
        enumerable: false,
        configurable: true
    });
    ZeroTrustDeviceDefaultProfileExcludeOutputReference.prototype.resetAddress = function () {
        this._address = undefined;
    };
    Object.defineProperty(ZeroTrustDeviceDefaultProfileExcludeOutputReference.prototype, "addressInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._address;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ZeroTrustDeviceDefaultProfileExcludeOutputReference.prototype, "description", {
        get: function () {
            return this.getStringAttribute('description');
        },
        set: function (value) {
            this._description = value;
        },
        enumerable: false,
        configurable: true
    });
    ZeroTrustDeviceDefaultProfileExcludeOutputReference.prototype.resetDescription = function () {
        this._description = undefined;
    };
    Object.defineProperty(ZeroTrustDeviceDefaultProfileExcludeOutputReference.prototype, "descriptionInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._description;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ZeroTrustDeviceDefaultProfileExcludeOutputReference.prototype, "host", {
        get: function () {
            return this.getStringAttribute('host');
        },
        set: function (value) {
            this._host = value;
        },
        enumerable: false,
        configurable: true
    });
    ZeroTrustDeviceDefaultProfileExcludeOutputReference.prototype.resetHost = function () {
        this._host = undefined;
    };
    Object.defineProperty(ZeroTrustDeviceDefaultProfileExcludeOutputReference.prototype, "hostInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._host;
        },
        enumerable: false,
        configurable: true
    });
    return ZeroTrustDeviceDefaultProfileExcludeOutputReference;
}(cdktf.ComplexObject));
exports.ZeroTrustDeviceDefaultProfileExcludeOutputReference = ZeroTrustDeviceDefaultProfileExcludeOutputReference;
var ZeroTrustDeviceDefaultProfileExcludeList = /** @class */ (function (_super) {
    __extends(ZeroTrustDeviceDefaultProfileExcludeList, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    function ZeroTrustDeviceDefaultProfileExcludeList(terraformResource, terraformAttribute, wrapsSet) {
        var _this = _super.call(this, terraformResource, terraformAttribute, wrapsSet) || this;
        _this.terraformResource = terraformResource;
        _this.terraformAttribute = terraformAttribute;
        _this.wrapsSet = wrapsSet;
        return _this;
    }
    /**
    * @param index the index of the item to return
    */
    ZeroTrustDeviceDefaultProfileExcludeList.prototype.get = function (index) {
        return new ZeroTrustDeviceDefaultProfileExcludeOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
    };
    return ZeroTrustDeviceDefaultProfileExcludeList;
}(cdktf.ComplexList));
exports.ZeroTrustDeviceDefaultProfileExcludeList = ZeroTrustDeviceDefaultProfileExcludeList;
function zeroTrustDeviceDefaultProfileFallbackDomainsToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {};
}
function zeroTrustDeviceDefaultProfileFallbackDomainsToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    var attrs = {};
    return attrs;
}
var ZeroTrustDeviceDefaultProfileFallbackDomainsOutputReference = /** @class */ (function (_super) {
    __extends(ZeroTrustDeviceDefaultProfileFallbackDomainsOutputReference, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    function ZeroTrustDeviceDefaultProfileFallbackDomainsOutputReference(terraformResource, terraformAttribute, complexObjectIndex, complexObjectIsFromSet) {
        var _this = _super.call(this, terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex) || this;
        _this.isEmptyObject = false;
        return _this;
    }
    Object.defineProperty(ZeroTrustDeviceDefaultProfileFallbackDomainsOutputReference.prototype, "internalValue", {
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
    Object.defineProperty(ZeroTrustDeviceDefaultProfileFallbackDomainsOutputReference.prototype, "description", {
        // description - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('description');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ZeroTrustDeviceDefaultProfileFallbackDomainsOutputReference.prototype, "dnsServer", {
        // dns_server - computed: true, optional: false, required: false
        get: function () {
            return this.getListAttribute('dns_server');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ZeroTrustDeviceDefaultProfileFallbackDomainsOutputReference.prototype, "suffix", {
        // suffix - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('suffix');
        },
        enumerable: false,
        configurable: true
    });
    return ZeroTrustDeviceDefaultProfileFallbackDomainsOutputReference;
}(cdktf.ComplexObject));
exports.ZeroTrustDeviceDefaultProfileFallbackDomainsOutputReference = ZeroTrustDeviceDefaultProfileFallbackDomainsOutputReference;
var ZeroTrustDeviceDefaultProfileFallbackDomainsList = /** @class */ (function (_super) {
    __extends(ZeroTrustDeviceDefaultProfileFallbackDomainsList, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    function ZeroTrustDeviceDefaultProfileFallbackDomainsList(terraformResource, terraformAttribute, wrapsSet) {
        var _this = _super.call(this, terraformResource, terraformAttribute, wrapsSet) || this;
        _this.terraformResource = terraformResource;
        _this.terraformAttribute = terraformAttribute;
        _this.wrapsSet = wrapsSet;
        return _this;
    }
    /**
    * @param index the index of the item to return
    */
    ZeroTrustDeviceDefaultProfileFallbackDomainsList.prototype.get = function (index) {
        return new ZeroTrustDeviceDefaultProfileFallbackDomainsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
    };
    return ZeroTrustDeviceDefaultProfileFallbackDomainsList;
}(cdktf.ComplexList));
exports.ZeroTrustDeviceDefaultProfileFallbackDomainsList = ZeroTrustDeviceDefaultProfileFallbackDomainsList;
function zeroTrustDeviceDefaultProfileIncludeToTerraform(struct) {
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
function zeroTrustDeviceDefaultProfileIncludeToHclTerraform(struct) {
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
var ZeroTrustDeviceDefaultProfileIncludeOutputReference = /** @class */ (function (_super) {
    __extends(ZeroTrustDeviceDefaultProfileIncludeOutputReference, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    function ZeroTrustDeviceDefaultProfileIncludeOutputReference(terraformResource, terraformAttribute, complexObjectIndex, complexObjectIsFromSet) {
        var _this = _super.call(this, terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex) || this;
        _this.isEmptyObject = false;
        return _this;
    }
    Object.defineProperty(ZeroTrustDeviceDefaultProfileIncludeOutputReference.prototype, "internalValue", {
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
    Object.defineProperty(ZeroTrustDeviceDefaultProfileIncludeOutputReference.prototype, "address", {
        get: function () {
            return this.getStringAttribute('address');
        },
        set: function (value) {
            this._address = value;
        },
        enumerable: false,
        configurable: true
    });
    ZeroTrustDeviceDefaultProfileIncludeOutputReference.prototype.resetAddress = function () {
        this._address = undefined;
    };
    Object.defineProperty(ZeroTrustDeviceDefaultProfileIncludeOutputReference.prototype, "addressInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._address;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ZeroTrustDeviceDefaultProfileIncludeOutputReference.prototype, "description", {
        get: function () {
            return this.getStringAttribute('description');
        },
        set: function (value) {
            this._description = value;
        },
        enumerable: false,
        configurable: true
    });
    ZeroTrustDeviceDefaultProfileIncludeOutputReference.prototype.resetDescription = function () {
        this._description = undefined;
    };
    Object.defineProperty(ZeroTrustDeviceDefaultProfileIncludeOutputReference.prototype, "descriptionInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._description;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ZeroTrustDeviceDefaultProfileIncludeOutputReference.prototype, "host", {
        get: function () {
            return this.getStringAttribute('host');
        },
        set: function (value) {
            this._host = value;
        },
        enumerable: false,
        configurable: true
    });
    ZeroTrustDeviceDefaultProfileIncludeOutputReference.prototype.resetHost = function () {
        this._host = undefined;
    };
    Object.defineProperty(ZeroTrustDeviceDefaultProfileIncludeOutputReference.prototype, "hostInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._host;
        },
        enumerable: false,
        configurable: true
    });
    return ZeroTrustDeviceDefaultProfileIncludeOutputReference;
}(cdktf.ComplexObject));
exports.ZeroTrustDeviceDefaultProfileIncludeOutputReference = ZeroTrustDeviceDefaultProfileIncludeOutputReference;
var ZeroTrustDeviceDefaultProfileIncludeList = /** @class */ (function (_super) {
    __extends(ZeroTrustDeviceDefaultProfileIncludeList, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    function ZeroTrustDeviceDefaultProfileIncludeList(terraformResource, terraformAttribute, wrapsSet) {
        var _this = _super.call(this, terraformResource, terraformAttribute, wrapsSet) || this;
        _this.terraformResource = terraformResource;
        _this.terraformAttribute = terraformAttribute;
        _this.wrapsSet = wrapsSet;
        return _this;
    }
    /**
    * @param index the index of the item to return
    */
    ZeroTrustDeviceDefaultProfileIncludeList.prototype.get = function (index) {
        return new ZeroTrustDeviceDefaultProfileIncludeOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
    };
    return ZeroTrustDeviceDefaultProfileIncludeList;
}(cdktf.ComplexList));
exports.ZeroTrustDeviceDefaultProfileIncludeList = ZeroTrustDeviceDefaultProfileIncludeList;
function zeroTrustDeviceDefaultProfileServiceModeV2ToTerraform(struct) {
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
function zeroTrustDeviceDefaultProfileServiceModeV2ToHclTerraform(struct) {
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
var ZeroTrustDeviceDefaultProfileServiceModeV2OutputReference = /** @class */ (function (_super) {
    __extends(ZeroTrustDeviceDefaultProfileServiceModeV2OutputReference, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    function ZeroTrustDeviceDefaultProfileServiceModeV2OutputReference(terraformResource, terraformAttribute) {
        var _this = _super.call(this, terraformResource, terraformAttribute, false) || this;
        _this.isEmptyObject = false;
        return _this;
    }
    Object.defineProperty(ZeroTrustDeviceDefaultProfileServiceModeV2OutputReference.prototype, "internalValue", {
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
    Object.defineProperty(ZeroTrustDeviceDefaultProfileServiceModeV2OutputReference.prototype, "mode", {
        get: function () {
            return this.getStringAttribute('mode');
        },
        set: function (value) {
            this._mode = value;
        },
        enumerable: false,
        configurable: true
    });
    ZeroTrustDeviceDefaultProfileServiceModeV2OutputReference.prototype.resetMode = function () {
        this._mode = undefined;
    };
    Object.defineProperty(ZeroTrustDeviceDefaultProfileServiceModeV2OutputReference.prototype, "modeInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._mode;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ZeroTrustDeviceDefaultProfileServiceModeV2OutputReference.prototype, "port", {
        get: function () {
            return this.getNumberAttribute('port');
        },
        set: function (value) {
            this._port = value;
        },
        enumerable: false,
        configurable: true
    });
    ZeroTrustDeviceDefaultProfileServiceModeV2OutputReference.prototype.resetPort = function () {
        this._port = undefined;
    };
    Object.defineProperty(ZeroTrustDeviceDefaultProfileServiceModeV2OutputReference.prototype, "portInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._port;
        },
        enumerable: false,
        configurable: true
    });
    return ZeroTrustDeviceDefaultProfileServiceModeV2OutputReference;
}(cdktf.ComplexObject));
exports.ZeroTrustDeviceDefaultProfileServiceModeV2OutputReference = ZeroTrustDeviceDefaultProfileServiceModeV2OutputReference;
/**
* Represents a {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/zero_trust_device_default_profile cloudflare_zero_trust_device_default_profile}
*/
var ZeroTrustDeviceDefaultProfile = /** @class */ (function (_super) {
    __extends(ZeroTrustDeviceDefaultProfile, _super);
    // ===========
    // INITIALIZER
    // ===========
    /**
    * Create a new {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/zero_trust_device_default_profile cloudflare_zero_trust_device_default_profile} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options ZeroTrustDeviceDefaultProfileConfig
    */
    function ZeroTrustDeviceDefaultProfile(scope, id, config) {
        var _this = _super.call(this, scope, id, {
            terraformResourceType: 'cloudflare_zero_trust_device_default_profile',
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
        _this._exclude = new ZeroTrustDeviceDefaultProfileExcludeList(_this, "exclude", false);
        // fallback_domains - computed: true, optional: false, required: false
        _this._fallbackDomains = new ZeroTrustDeviceDefaultProfileFallbackDomainsList(_this, "fallback_domains", false);
        // include - computed: true, optional: true, required: false
        _this._include = new ZeroTrustDeviceDefaultProfileIncludeList(_this, "include", false);
        // service_mode_v2 - computed: true, optional: true, required: false
        _this._serviceModeV2 = new ZeroTrustDeviceDefaultProfileServiceModeV2OutputReference(_this, "service_mode_v2");
        _this._accountId = config.accountId;
        _this._allowModeSwitch = config.allowModeSwitch;
        _this._allowUpdates = config.allowUpdates;
        _this._allowedToLeave = config.allowedToLeave;
        _this._autoConnect = config.autoConnect;
        _this._captivePortal = config.captivePortal;
        _this._disableAutoFallback = config.disableAutoFallback;
        _this._exclude.internalValue = config.exclude;
        _this._excludeOfficeIps = config.excludeOfficeIps;
        _this._include.internalValue = config.include;
        _this._lanAllowMinutes = config.lanAllowMinutes;
        _this._lanAllowSubnetSize = config.lanAllowSubnetSize;
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
    * Generates CDKTF code for importing a ZeroTrustDeviceDefaultProfile resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the ZeroTrustDeviceDefaultProfile to import
    * @param importFromId The id of the existing ZeroTrustDeviceDefaultProfile that should be imported. Refer to the {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/zero_trust_device_default_profile#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the ZeroTrustDeviceDefaultProfile to import is found
    */
    ZeroTrustDeviceDefaultProfile.generateConfigForImport = function (scope, importToId, importFromId, provider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "cloudflare_zero_trust_device_default_profile", importId: importFromId, provider: provider });
    };
    Object.defineProperty(ZeroTrustDeviceDefaultProfile.prototype, "accountId", {
        get: function () {
            return this.getStringAttribute('account_id');
        },
        set: function (value) {
            this._accountId = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ZeroTrustDeviceDefaultProfile.prototype, "accountIdInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._accountId;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ZeroTrustDeviceDefaultProfile.prototype, "allowModeSwitch", {
        get: function () {
            return this.getBooleanAttribute('allow_mode_switch');
        },
        set: function (value) {
            this._allowModeSwitch = value;
        },
        enumerable: false,
        configurable: true
    });
    ZeroTrustDeviceDefaultProfile.prototype.resetAllowModeSwitch = function () {
        this._allowModeSwitch = undefined;
    };
    Object.defineProperty(ZeroTrustDeviceDefaultProfile.prototype, "allowModeSwitchInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._allowModeSwitch;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ZeroTrustDeviceDefaultProfile.prototype, "allowUpdates", {
        get: function () {
            return this.getBooleanAttribute('allow_updates');
        },
        set: function (value) {
            this._allowUpdates = value;
        },
        enumerable: false,
        configurable: true
    });
    ZeroTrustDeviceDefaultProfile.prototype.resetAllowUpdates = function () {
        this._allowUpdates = undefined;
    };
    Object.defineProperty(ZeroTrustDeviceDefaultProfile.prototype, "allowUpdatesInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._allowUpdates;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ZeroTrustDeviceDefaultProfile.prototype, "allowedToLeave", {
        get: function () {
            return this.getBooleanAttribute('allowed_to_leave');
        },
        set: function (value) {
            this._allowedToLeave = value;
        },
        enumerable: false,
        configurable: true
    });
    ZeroTrustDeviceDefaultProfile.prototype.resetAllowedToLeave = function () {
        this._allowedToLeave = undefined;
    };
    Object.defineProperty(ZeroTrustDeviceDefaultProfile.prototype, "allowedToLeaveInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._allowedToLeave;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ZeroTrustDeviceDefaultProfile.prototype, "autoConnect", {
        get: function () {
            return this.getNumberAttribute('auto_connect');
        },
        set: function (value) {
            this._autoConnect = value;
        },
        enumerable: false,
        configurable: true
    });
    ZeroTrustDeviceDefaultProfile.prototype.resetAutoConnect = function () {
        this._autoConnect = undefined;
    };
    Object.defineProperty(ZeroTrustDeviceDefaultProfile.prototype, "autoConnectInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._autoConnect;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ZeroTrustDeviceDefaultProfile.prototype, "captivePortal", {
        get: function () {
            return this.getNumberAttribute('captive_portal');
        },
        set: function (value) {
            this._captivePortal = value;
        },
        enumerable: false,
        configurable: true
    });
    ZeroTrustDeviceDefaultProfile.prototype.resetCaptivePortal = function () {
        this._captivePortal = undefined;
    };
    Object.defineProperty(ZeroTrustDeviceDefaultProfile.prototype, "captivePortalInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._captivePortal;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ZeroTrustDeviceDefaultProfile.prototype, "default", {
        // default - computed: true, optional: false, required: false
        get: function () {
            return this.getBooleanAttribute('default');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ZeroTrustDeviceDefaultProfile.prototype, "disableAutoFallback", {
        get: function () {
            return this.getBooleanAttribute('disable_auto_fallback');
        },
        set: function (value) {
            this._disableAutoFallback = value;
        },
        enumerable: false,
        configurable: true
    });
    ZeroTrustDeviceDefaultProfile.prototype.resetDisableAutoFallback = function () {
        this._disableAutoFallback = undefined;
    };
    Object.defineProperty(ZeroTrustDeviceDefaultProfile.prototype, "disableAutoFallbackInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._disableAutoFallback;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ZeroTrustDeviceDefaultProfile.prototype, "enabled", {
        // enabled - computed: true, optional: false, required: false
        get: function () {
            return this.getBooleanAttribute('enabled');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ZeroTrustDeviceDefaultProfile.prototype, "exclude", {
        get: function () {
            return this._exclude;
        },
        enumerable: false,
        configurable: true
    });
    ZeroTrustDeviceDefaultProfile.prototype.putExclude = function (value) {
        this._exclude.internalValue = value;
    };
    ZeroTrustDeviceDefaultProfile.prototype.resetExclude = function () {
        this._exclude.internalValue = undefined;
    };
    Object.defineProperty(ZeroTrustDeviceDefaultProfile.prototype, "excludeInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._exclude.internalValue;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ZeroTrustDeviceDefaultProfile.prototype, "excludeOfficeIps", {
        get: function () {
            return this.getBooleanAttribute('exclude_office_ips');
        },
        set: function (value) {
            this._excludeOfficeIps = value;
        },
        enumerable: false,
        configurable: true
    });
    ZeroTrustDeviceDefaultProfile.prototype.resetExcludeOfficeIps = function () {
        this._excludeOfficeIps = undefined;
    };
    Object.defineProperty(ZeroTrustDeviceDefaultProfile.prototype, "excludeOfficeIpsInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._excludeOfficeIps;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ZeroTrustDeviceDefaultProfile.prototype, "fallbackDomains", {
        get: function () {
            return this._fallbackDomains;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ZeroTrustDeviceDefaultProfile.prototype, "gatewayUniqueId", {
        // gateway_unique_id - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('gateway_unique_id');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ZeroTrustDeviceDefaultProfile.prototype, "id", {
        // id - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('id');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ZeroTrustDeviceDefaultProfile.prototype, "include", {
        get: function () {
            return this._include;
        },
        enumerable: false,
        configurable: true
    });
    ZeroTrustDeviceDefaultProfile.prototype.putInclude = function (value) {
        this._include.internalValue = value;
    };
    ZeroTrustDeviceDefaultProfile.prototype.resetInclude = function () {
        this._include.internalValue = undefined;
    };
    Object.defineProperty(ZeroTrustDeviceDefaultProfile.prototype, "includeInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._include.internalValue;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ZeroTrustDeviceDefaultProfile.prototype, "lanAllowMinutes", {
        get: function () {
            return this.getNumberAttribute('lan_allow_minutes');
        },
        set: function (value) {
            this._lanAllowMinutes = value;
        },
        enumerable: false,
        configurable: true
    });
    ZeroTrustDeviceDefaultProfile.prototype.resetLanAllowMinutes = function () {
        this._lanAllowMinutes = undefined;
    };
    Object.defineProperty(ZeroTrustDeviceDefaultProfile.prototype, "lanAllowMinutesInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._lanAllowMinutes;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ZeroTrustDeviceDefaultProfile.prototype, "lanAllowSubnetSize", {
        get: function () {
            return this.getNumberAttribute('lan_allow_subnet_size');
        },
        set: function (value) {
            this._lanAllowSubnetSize = value;
        },
        enumerable: false,
        configurable: true
    });
    ZeroTrustDeviceDefaultProfile.prototype.resetLanAllowSubnetSize = function () {
        this._lanAllowSubnetSize = undefined;
    };
    Object.defineProperty(ZeroTrustDeviceDefaultProfile.prototype, "lanAllowSubnetSizeInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._lanAllowSubnetSize;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ZeroTrustDeviceDefaultProfile.prototype, "policyId", {
        // policy_id - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('policy_id');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ZeroTrustDeviceDefaultProfile.prototype, "registerInterfaceIpWithDns", {
        get: function () {
            return this.getBooleanAttribute('register_interface_ip_with_dns');
        },
        set: function (value) {
            this._registerInterfaceIpWithDns = value;
        },
        enumerable: false,
        configurable: true
    });
    ZeroTrustDeviceDefaultProfile.prototype.resetRegisterInterfaceIpWithDns = function () {
        this._registerInterfaceIpWithDns = undefined;
    };
    Object.defineProperty(ZeroTrustDeviceDefaultProfile.prototype, "registerInterfaceIpWithDnsInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._registerInterfaceIpWithDns;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ZeroTrustDeviceDefaultProfile.prototype, "sccmVpnBoundarySupport", {
        get: function () {
            return this.getBooleanAttribute('sccm_vpn_boundary_support');
        },
        set: function (value) {
            this._sccmVpnBoundarySupport = value;
        },
        enumerable: false,
        configurable: true
    });
    ZeroTrustDeviceDefaultProfile.prototype.resetSccmVpnBoundarySupport = function () {
        this._sccmVpnBoundarySupport = undefined;
    };
    Object.defineProperty(ZeroTrustDeviceDefaultProfile.prototype, "sccmVpnBoundarySupportInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._sccmVpnBoundarySupport;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ZeroTrustDeviceDefaultProfile.prototype, "serviceModeV2", {
        get: function () {
            return this._serviceModeV2;
        },
        enumerable: false,
        configurable: true
    });
    ZeroTrustDeviceDefaultProfile.prototype.putServiceModeV2 = function (value) {
        this._serviceModeV2.internalValue = value;
    };
    ZeroTrustDeviceDefaultProfile.prototype.resetServiceModeV2 = function () {
        this._serviceModeV2.internalValue = undefined;
    };
    Object.defineProperty(ZeroTrustDeviceDefaultProfile.prototype, "serviceModeV2Input", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._serviceModeV2.internalValue;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ZeroTrustDeviceDefaultProfile.prototype, "supportUrl", {
        get: function () {
            return this.getStringAttribute('support_url');
        },
        set: function (value) {
            this._supportUrl = value;
        },
        enumerable: false,
        configurable: true
    });
    ZeroTrustDeviceDefaultProfile.prototype.resetSupportUrl = function () {
        this._supportUrl = undefined;
    };
    Object.defineProperty(ZeroTrustDeviceDefaultProfile.prototype, "supportUrlInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._supportUrl;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ZeroTrustDeviceDefaultProfile.prototype, "switchLocked", {
        get: function () {
            return this.getBooleanAttribute('switch_locked');
        },
        set: function (value) {
            this._switchLocked = value;
        },
        enumerable: false,
        configurable: true
    });
    ZeroTrustDeviceDefaultProfile.prototype.resetSwitchLocked = function () {
        this._switchLocked = undefined;
    };
    Object.defineProperty(ZeroTrustDeviceDefaultProfile.prototype, "switchLockedInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._switchLocked;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ZeroTrustDeviceDefaultProfile.prototype, "tunnelProtocol", {
        get: function () {
            return this.getStringAttribute('tunnel_protocol');
        },
        set: function (value) {
            this._tunnelProtocol = value;
        },
        enumerable: false,
        configurable: true
    });
    ZeroTrustDeviceDefaultProfile.prototype.resetTunnelProtocol = function () {
        this._tunnelProtocol = undefined;
    };
    Object.defineProperty(ZeroTrustDeviceDefaultProfile.prototype, "tunnelProtocolInput", {
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
    ZeroTrustDeviceDefaultProfile.prototype.synthesizeAttributes = function () {
        return {
            account_id: cdktf.stringToTerraform(this._accountId),
            allow_mode_switch: cdktf.booleanToTerraform(this._allowModeSwitch),
            allow_updates: cdktf.booleanToTerraform(this._allowUpdates),
            allowed_to_leave: cdktf.booleanToTerraform(this._allowedToLeave),
            auto_connect: cdktf.numberToTerraform(this._autoConnect),
            captive_portal: cdktf.numberToTerraform(this._captivePortal),
            disable_auto_fallback: cdktf.booleanToTerraform(this._disableAutoFallback),
            exclude: cdktf.listMapper(zeroTrustDeviceDefaultProfileExcludeToTerraform, false)(this._exclude.internalValue),
            exclude_office_ips: cdktf.booleanToTerraform(this._excludeOfficeIps),
            include: cdktf.listMapper(zeroTrustDeviceDefaultProfileIncludeToTerraform, false)(this._include.internalValue),
            lan_allow_minutes: cdktf.numberToTerraform(this._lanAllowMinutes),
            lan_allow_subnet_size: cdktf.numberToTerraform(this._lanAllowSubnetSize),
            register_interface_ip_with_dns: cdktf.booleanToTerraform(this._registerInterfaceIpWithDns),
            sccm_vpn_boundary_support: cdktf.booleanToTerraform(this._sccmVpnBoundarySupport),
            service_mode_v2: zeroTrustDeviceDefaultProfileServiceModeV2ToTerraform(this._serviceModeV2.internalValue),
            support_url: cdktf.stringToTerraform(this._supportUrl),
            switch_locked: cdktf.booleanToTerraform(this._switchLocked),
            tunnel_protocol: cdktf.stringToTerraform(this._tunnelProtocol),
        };
    };
    ZeroTrustDeviceDefaultProfile.prototype.synthesizeHclAttributes = function () {
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
            disable_auto_fallback: {
                value: cdktf.booleanToHclTerraform(this._disableAutoFallback),
                isBlock: false,
                type: "simple",
                storageClassType: "boolean",
            },
            exclude: {
                value: cdktf.listMapperHcl(zeroTrustDeviceDefaultProfileExcludeToHclTerraform, false)(this._exclude.internalValue),
                isBlock: true,
                type: "list",
                storageClassType: "ZeroTrustDeviceDefaultProfileExcludeList",
            },
            exclude_office_ips: {
                value: cdktf.booleanToHclTerraform(this._excludeOfficeIps),
                isBlock: false,
                type: "simple",
                storageClassType: "boolean",
            },
            include: {
                value: cdktf.listMapperHcl(zeroTrustDeviceDefaultProfileIncludeToHclTerraform, false)(this._include.internalValue),
                isBlock: true,
                type: "list",
                storageClassType: "ZeroTrustDeviceDefaultProfileIncludeList",
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
                value: zeroTrustDeviceDefaultProfileServiceModeV2ToHclTerraform(this._serviceModeV2.internalValue),
                isBlock: true,
                type: "struct",
                storageClassType: "ZeroTrustDeviceDefaultProfileServiceModeV2",
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
    ZeroTrustDeviceDefaultProfile.tfResourceType = "cloudflare_zero_trust_device_default_profile";
    return ZeroTrustDeviceDefaultProfile;
}(cdktf.TerraformResource));
exports.ZeroTrustDeviceDefaultProfile = ZeroTrustDeviceDefaultProfile;
