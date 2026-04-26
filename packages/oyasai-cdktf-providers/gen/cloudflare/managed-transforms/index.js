"use strict";
// https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/managed_transforms
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
exports.ManagedTransforms = exports.ManagedTransformsManagedResponseHeadersList = exports.ManagedTransformsManagedResponseHeadersOutputReference = exports.ManagedTransformsManagedRequestHeadersList = exports.ManagedTransformsManagedRequestHeadersOutputReference = void 0;
exports.managedTransformsManagedRequestHeadersToTerraform = managedTransformsManagedRequestHeadersToTerraform;
exports.managedTransformsManagedRequestHeadersToHclTerraform = managedTransformsManagedRequestHeadersToHclTerraform;
exports.managedTransformsManagedResponseHeadersToTerraform = managedTransformsManagedResponseHeadersToTerraform;
exports.managedTransformsManagedResponseHeadersToHclTerraform = managedTransformsManagedResponseHeadersToHclTerraform;
var cdktf = require("cdktf");
function managedTransformsManagedRequestHeadersToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        enabled: cdktf.booleanToTerraform(struct.enabled),
        id: cdktf.stringToTerraform(struct.id),
    };
}
function managedTransformsManagedRequestHeadersToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    var attrs = {
        enabled: {
            value: cdktf.booleanToHclTerraform(struct.enabled),
            isBlock: false,
            type: "simple",
            storageClassType: "boolean",
        },
        id: {
            value: cdktf.stringToHclTerraform(struct.id),
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
var ManagedTransformsManagedRequestHeadersOutputReference = /** @class */ (function (_super) {
    __extends(ManagedTransformsManagedRequestHeadersOutputReference, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    function ManagedTransformsManagedRequestHeadersOutputReference(terraformResource, terraformAttribute, complexObjectIndex, complexObjectIsFromSet) {
        var _this = _super.call(this, terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex) || this;
        _this.isEmptyObject = false;
        return _this;
    }
    Object.defineProperty(ManagedTransformsManagedRequestHeadersOutputReference.prototype, "internalValue", {
        get: function () {
            if (this.resolvableValue) {
                return this.resolvableValue;
            }
            var hasAnyValues = this.isEmptyObject;
            var internalValueResult = {};
            if (this._enabled !== undefined) {
                hasAnyValues = true;
                internalValueResult.enabled = this._enabled;
            }
            if (this._id !== undefined) {
                hasAnyValues = true;
                internalValueResult.id = this._id;
            }
            return hasAnyValues ? internalValueResult : undefined;
        },
        set: function (value) {
            if (value === undefined) {
                this.isEmptyObject = false;
                this.resolvableValue = undefined;
                this._enabled = undefined;
                this._id = undefined;
            }
            else if (cdktf.Tokenization.isResolvable(value)) {
                this.isEmptyObject = false;
                this.resolvableValue = value;
            }
            else {
                this.isEmptyObject = Object.keys(value).length === 0;
                this.resolvableValue = undefined;
                this._enabled = value.enabled;
                this._id = value.id;
            }
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ManagedTransformsManagedRequestHeadersOutputReference.prototype, "enabled", {
        get: function () {
            return this.getBooleanAttribute('enabled');
        },
        set: function (value) {
            this._enabled = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ManagedTransformsManagedRequestHeadersOutputReference.prototype, "enabledInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._enabled;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ManagedTransformsManagedRequestHeadersOutputReference.prototype, "id", {
        get: function () {
            return this.getStringAttribute('id');
        },
        set: function (value) {
            this._id = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ManagedTransformsManagedRequestHeadersOutputReference.prototype, "idInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._id;
        },
        enumerable: false,
        configurable: true
    });
    return ManagedTransformsManagedRequestHeadersOutputReference;
}(cdktf.ComplexObject));
exports.ManagedTransformsManagedRequestHeadersOutputReference = ManagedTransformsManagedRequestHeadersOutputReference;
var ManagedTransformsManagedRequestHeadersList = /** @class */ (function (_super) {
    __extends(ManagedTransformsManagedRequestHeadersList, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    function ManagedTransformsManagedRequestHeadersList(terraformResource, terraformAttribute, wrapsSet) {
        var _this = _super.call(this, terraformResource, terraformAttribute, wrapsSet) || this;
        _this.terraformResource = terraformResource;
        _this.terraformAttribute = terraformAttribute;
        _this.wrapsSet = wrapsSet;
        return _this;
    }
    /**
    * @param index the index of the item to return
    */
    ManagedTransformsManagedRequestHeadersList.prototype.get = function (index) {
        return new ManagedTransformsManagedRequestHeadersOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
    };
    return ManagedTransformsManagedRequestHeadersList;
}(cdktf.ComplexList));
exports.ManagedTransformsManagedRequestHeadersList = ManagedTransformsManagedRequestHeadersList;
function managedTransformsManagedResponseHeadersToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        enabled: cdktf.booleanToTerraform(struct.enabled),
        id: cdktf.stringToTerraform(struct.id),
    };
}
function managedTransformsManagedResponseHeadersToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    var attrs = {
        enabled: {
            value: cdktf.booleanToHclTerraform(struct.enabled),
            isBlock: false,
            type: "simple",
            storageClassType: "boolean",
        },
        id: {
            value: cdktf.stringToHclTerraform(struct.id),
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
var ManagedTransformsManagedResponseHeadersOutputReference = /** @class */ (function (_super) {
    __extends(ManagedTransformsManagedResponseHeadersOutputReference, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    function ManagedTransformsManagedResponseHeadersOutputReference(terraformResource, terraformAttribute, complexObjectIndex, complexObjectIsFromSet) {
        var _this = _super.call(this, terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex) || this;
        _this.isEmptyObject = false;
        return _this;
    }
    Object.defineProperty(ManagedTransformsManagedResponseHeadersOutputReference.prototype, "internalValue", {
        get: function () {
            if (this.resolvableValue) {
                return this.resolvableValue;
            }
            var hasAnyValues = this.isEmptyObject;
            var internalValueResult = {};
            if (this._enabled !== undefined) {
                hasAnyValues = true;
                internalValueResult.enabled = this._enabled;
            }
            if (this._id !== undefined) {
                hasAnyValues = true;
                internalValueResult.id = this._id;
            }
            return hasAnyValues ? internalValueResult : undefined;
        },
        set: function (value) {
            if (value === undefined) {
                this.isEmptyObject = false;
                this.resolvableValue = undefined;
                this._enabled = undefined;
                this._id = undefined;
            }
            else if (cdktf.Tokenization.isResolvable(value)) {
                this.isEmptyObject = false;
                this.resolvableValue = value;
            }
            else {
                this.isEmptyObject = Object.keys(value).length === 0;
                this.resolvableValue = undefined;
                this._enabled = value.enabled;
                this._id = value.id;
            }
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ManagedTransformsManagedResponseHeadersOutputReference.prototype, "enabled", {
        get: function () {
            return this.getBooleanAttribute('enabled');
        },
        set: function (value) {
            this._enabled = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ManagedTransformsManagedResponseHeadersOutputReference.prototype, "enabledInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._enabled;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ManagedTransformsManagedResponseHeadersOutputReference.prototype, "id", {
        get: function () {
            return this.getStringAttribute('id');
        },
        set: function (value) {
            this._id = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ManagedTransformsManagedResponseHeadersOutputReference.prototype, "idInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._id;
        },
        enumerable: false,
        configurable: true
    });
    return ManagedTransformsManagedResponseHeadersOutputReference;
}(cdktf.ComplexObject));
exports.ManagedTransformsManagedResponseHeadersOutputReference = ManagedTransformsManagedResponseHeadersOutputReference;
var ManagedTransformsManagedResponseHeadersList = /** @class */ (function (_super) {
    __extends(ManagedTransformsManagedResponseHeadersList, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    function ManagedTransformsManagedResponseHeadersList(terraformResource, terraformAttribute, wrapsSet) {
        var _this = _super.call(this, terraformResource, terraformAttribute, wrapsSet) || this;
        _this.terraformResource = terraformResource;
        _this.terraformAttribute = terraformAttribute;
        _this.wrapsSet = wrapsSet;
        return _this;
    }
    /**
    * @param index the index of the item to return
    */
    ManagedTransformsManagedResponseHeadersList.prototype.get = function (index) {
        return new ManagedTransformsManagedResponseHeadersOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
    };
    return ManagedTransformsManagedResponseHeadersList;
}(cdktf.ComplexList));
exports.ManagedTransformsManagedResponseHeadersList = ManagedTransformsManagedResponseHeadersList;
/**
* Represents a {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/managed_transforms cloudflare_managed_transforms}
*/
var ManagedTransforms = /** @class */ (function (_super) {
    __extends(ManagedTransforms, _super);
    // ===========
    // INITIALIZER
    // ===========
    /**
    * Create a new {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/managed_transforms cloudflare_managed_transforms} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options ManagedTransformsConfig
    */
    function ManagedTransforms(scope, id, config) {
        var _this = _super.call(this, scope, id, {
            terraformResourceType: 'cloudflare_managed_transforms',
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
        // managed_request_headers - computed: false, optional: false, required: true
        _this._managedRequestHeaders = new ManagedTransformsManagedRequestHeadersList(_this, "managed_request_headers", true);
        // managed_response_headers - computed: false, optional: false, required: true
        _this._managedResponseHeaders = new ManagedTransformsManagedResponseHeadersList(_this, "managed_response_headers", true);
        _this._managedRequestHeaders.internalValue = config.managedRequestHeaders;
        _this._managedResponseHeaders.internalValue = config.managedResponseHeaders;
        _this._zoneId = config.zoneId;
        return _this;
    }
    // ==============
    // STATIC Methods
    // ==============
    /**
    * Generates CDKTF code for importing a ManagedTransforms resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the ManagedTransforms to import
    * @param importFromId The id of the existing ManagedTransforms that should be imported. Refer to the {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/managed_transforms#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the ManagedTransforms to import is found
    */
    ManagedTransforms.generateConfigForImport = function (scope, importToId, importFromId, provider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "cloudflare_managed_transforms", importId: importFromId, provider: provider });
    };
    Object.defineProperty(ManagedTransforms.prototype, "id", {
        // ==========
        // ATTRIBUTES
        // ==========
        // id - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('id');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ManagedTransforms.prototype, "managedRequestHeaders", {
        get: function () {
            return this._managedRequestHeaders;
        },
        enumerable: false,
        configurable: true
    });
    ManagedTransforms.prototype.putManagedRequestHeaders = function (value) {
        this._managedRequestHeaders.internalValue = value;
    };
    Object.defineProperty(ManagedTransforms.prototype, "managedRequestHeadersInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._managedRequestHeaders.internalValue;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ManagedTransforms.prototype, "managedResponseHeaders", {
        get: function () {
            return this._managedResponseHeaders;
        },
        enumerable: false,
        configurable: true
    });
    ManagedTransforms.prototype.putManagedResponseHeaders = function (value) {
        this._managedResponseHeaders.internalValue = value;
    };
    Object.defineProperty(ManagedTransforms.prototype, "managedResponseHeadersInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._managedResponseHeaders.internalValue;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ManagedTransforms.prototype, "zoneId", {
        get: function () {
            return this.getStringAttribute('zone_id');
        },
        set: function (value) {
            this._zoneId = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ManagedTransforms.prototype, "zoneIdInput", {
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
    ManagedTransforms.prototype.synthesizeAttributes = function () {
        return {
            managed_request_headers: cdktf.listMapper(managedTransformsManagedRequestHeadersToTerraform, false)(this._managedRequestHeaders.internalValue),
            managed_response_headers: cdktf.listMapper(managedTransformsManagedResponseHeadersToTerraform, false)(this._managedResponseHeaders.internalValue),
            zone_id: cdktf.stringToTerraform(this._zoneId),
        };
    };
    ManagedTransforms.prototype.synthesizeHclAttributes = function () {
        var attrs = {
            managed_request_headers: {
                value: cdktf.listMapperHcl(managedTransformsManagedRequestHeadersToHclTerraform, false)(this._managedRequestHeaders.internalValue),
                isBlock: true,
                type: "set",
                storageClassType: "ManagedTransformsManagedRequestHeadersList",
            },
            managed_response_headers: {
                value: cdktf.listMapperHcl(managedTransformsManagedResponseHeadersToHclTerraform, false)(this._managedResponseHeaders.internalValue),
                isBlock: true,
                type: "set",
                storageClassType: "ManagedTransformsManagedResponseHeadersList",
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
    ManagedTransforms.tfResourceType = "cloudflare_managed_transforms";
    return ManagedTransforms;
}(cdktf.TerraformResource));
exports.ManagedTransforms = ManagedTransforms;
