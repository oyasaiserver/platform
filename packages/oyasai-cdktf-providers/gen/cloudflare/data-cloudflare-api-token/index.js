"use strict";
// https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/api_token
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
exports.DataCloudflareApiToken = exports.DataCloudflareApiTokenPoliciesList = exports.DataCloudflareApiTokenPoliciesOutputReference = exports.DataCloudflareApiTokenPoliciesPermissionGroupsList = exports.DataCloudflareApiTokenPoliciesPermissionGroupsOutputReference = exports.DataCloudflareApiTokenPoliciesPermissionGroupsMetaOutputReference = exports.DataCloudflareApiTokenFilterOutputReference = exports.DataCloudflareApiTokenConditionOutputReference = exports.DataCloudflareApiTokenConditionRequestIpOutputReference = void 0;
exports.dataCloudflareApiTokenConditionRequestIpToTerraform = dataCloudflareApiTokenConditionRequestIpToTerraform;
exports.dataCloudflareApiTokenConditionRequestIpToHclTerraform = dataCloudflareApiTokenConditionRequestIpToHclTerraform;
exports.dataCloudflareApiTokenConditionToTerraform = dataCloudflareApiTokenConditionToTerraform;
exports.dataCloudflareApiTokenConditionToHclTerraform = dataCloudflareApiTokenConditionToHclTerraform;
exports.dataCloudflareApiTokenFilterToTerraform = dataCloudflareApiTokenFilterToTerraform;
exports.dataCloudflareApiTokenFilterToHclTerraform = dataCloudflareApiTokenFilterToHclTerraform;
exports.dataCloudflareApiTokenPoliciesPermissionGroupsMetaToTerraform = dataCloudflareApiTokenPoliciesPermissionGroupsMetaToTerraform;
exports.dataCloudflareApiTokenPoliciesPermissionGroupsMetaToHclTerraform = dataCloudflareApiTokenPoliciesPermissionGroupsMetaToHclTerraform;
exports.dataCloudflareApiTokenPoliciesPermissionGroupsToTerraform = dataCloudflareApiTokenPoliciesPermissionGroupsToTerraform;
exports.dataCloudflareApiTokenPoliciesPermissionGroupsToHclTerraform = dataCloudflareApiTokenPoliciesPermissionGroupsToHclTerraform;
exports.dataCloudflareApiTokenPoliciesToTerraform = dataCloudflareApiTokenPoliciesToTerraform;
exports.dataCloudflareApiTokenPoliciesToHclTerraform = dataCloudflareApiTokenPoliciesToHclTerraform;
var cdktf = require("cdktf");
function dataCloudflareApiTokenConditionRequestIpToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {};
}
function dataCloudflareApiTokenConditionRequestIpToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    var attrs = {};
    return attrs;
}
var DataCloudflareApiTokenConditionRequestIpOutputReference = /** @class */ (function (_super) {
    __extends(DataCloudflareApiTokenConditionRequestIpOutputReference, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    function DataCloudflareApiTokenConditionRequestIpOutputReference(terraformResource, terraformAttribute) {
        var _this = _super.call(this, terraformResource, terraformAttribute, false) || this;
        _this.isEmptyObject = false;
        return _this;
    }
    Object.defineProperty(DataCloudflareApiTokenConditionRequestIpOutputReference.prototype, "internalValue", {
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
    Object.defineProperty(DataCloudflareApiTokenConditionRequestIpOutputReference.prototype, "in", {
        // in - computed: true, optional: false, required: false
        get: function () {
            return this.getListAttribute('in');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareApiTokenConditionRequestIpOutputReference.prototype, "notIn", {
        // not_in - computed: true, optional: false, required: false
        get: function () {
            return this.getListAttribute('not_in');
        },
        enumerable: false,
        configurable: true
    });
    return DataCloudflareApiTokenConditionRequestIpOutputReference;
}(cdktf.ComplexObject));
exports.DataCloudflareApiTokenConditionRequestIpOutputReference = DataCloudflareApiTokenConditionRequestIpOutputReference;
function dataCloudflareApiTokenConditionToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {};
}
function dataCloudflareApiTokenConditionToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    var attrs = {};
    return attrs;
}
var DataCloudflareApiTokenConditionOutputReference = /** @class */ (function (_super) {
    __extends(DataCloudflareApiTokenConditionOutputReference, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    function DataCloudflareApiTokenConditionOutputReference(terraformResource, terraformAttribute) {
        var _this = _super.call(this, terraformResource, terraformAttribute, false) || this;
        _this.isEmptyObject = false;
        // request_ip - computed: true, optional: false, required: false
        _this._requestIp = new DataCloudflareApiTokenConditionRequestIpOutputReference(_this, "request_ip");
        return _this;
    }
    Object.defineProperty(DataCloudflareApiTokenConditionOutputReference.prototype, "internalValue", {
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
    Object.defineProperty(DataCloudflareApiTokenConditionOutputReference.prototype, "requestIp", {
        get: function () {
            return this._requestIp;
        },
        enumerable: false,
        configurable: true
    });
    return DataCloudflareApiTokenConditionOutputReference;
}(cdktf.ComplexObject));
exports.DataCloudflareApiTokenConditionOutputReference = DataCloudflareApiTokenConditionOutputReference;
function dataCloudflareApiTokenFilterToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        direction: cdktf.stringToTerraform(struct.direction),
    };
}
function dataCloudflareApiTokenFilterToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    var attrs = {
        direction: {
            value: cdktf.stringToHclTerraform(struct.direction),
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
var DataCloudflareApiTokenFilterOutputReference = /** @class */ (function (_super) {
    __extends(DataCloudflareApiTokenFilterOutputReference, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    function DataCloudflareApiTokenFilterOutputReference(terraformResource, terraformAttribute) {
        var _this = _super.call(this, terraformResource, terraformAttribute, false) || this;
        _this.isEmptyObject = false;
        return _this;
    }
    Object.defineProperty(DataCloudflareApiTokenFilterOutputReference.prototype, "internalValue", {
        get: function () {
            if (this.resolvableValue) {
                return this.resolvableValue;
            }
            var hasAnyValues = this.isEmptyObject;
            var internalValueResult = {};
            if (this._direction !== undefined) {
                hasAnyValues = true;
                internalValueResult.direction = this._direction;
            }
            return hasAnyValues ? internalValueResult : undefined;
        },
        set: function (value) {
            if (value === undefined) {
                this.isEmptyObject = false;
                this.resolvableValue = undefined;
                this._direction = undefined;
            }
            else if (cdktf.Tokenization.isResolvable(value)) {
                this.isEmptyObject = false;
                this.resolvableValue = value;
            }
            else {
                this.isEmptyObject = Object.keys(value).length === 0;
                this.resolvableValue = undefined;
                this._direction = value.direction;
            }
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareApiTokenFilterOutputReference.prototype, "direction", {
        get: function () {
            return this.getStringAttribute('direction');
        },
        set: function (value) {
            this._direction = value;
        },
        enumerable: false,
        configurable: true
    });
    DataCloudflareApiTokenFilterOutputReference.prototype.resetDirection = function () {
        this._direction = undefined;
    };
    Object.defineProperty(DataCloudflareApiTokenFilterOutputReference.prototype, "directionInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._direction;
        },
        enumerable: false,
        configurable: true
    });
    return DataCloudflareApiTokenFilterOutputReference;
}(cdktf.ComplexObject));
exports.DataCloudflareApiTokenFilterOutputReference = DataCloudflareApiTokenFilterOutputReference;
function dataCloudflareApiTokenPoliciesPermissionGroupsMetaToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {};
}
function dataCloudflareApiTokenPoliciesPermissionGroupsMetaToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    var attrs = {};
    return attrs;
}
var DataCloudflareApiTokenPoliciesPermissionGroupsMetaOutputReference = /** @class */ (function (_super) {
    __extends(DataCloudflareApiTokenPoliciesPermissionGroupsMetaOutputReference, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    function DataCloudflareApiTokenPoliciesPermissionGroupsMetaOutputReference(terraformResource, terraformAttribute) {
        var _this = _super.call(this, terraformResource, terraformAttribute, false) || this;
        _this.isEmptyObject = false;
        return _this;
    }
    Object.defineProperty(DataCloudflareApiTokenPoliciesPermissionGroupsMetaOutputReference.prototype, "internalValue", {
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
    Object.defineProperty(DataCloudflareApiTokenPoliciesPermissionGroupsMetaOutputReference.prototype, "key", {
        // key - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('key');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareApiTokenPoliciesPermissionGroupsMetaOutputReference.prototype, "value", {
        // value - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('value');
        },
        enumerable: false,
        configurable: true
    });
    return DataCloudflareApiTokenPoliciesPermissionGroupsMetaOutputReference;
}(cdktf.ComplexObject));
exports.DataCloudflareApiTokenPoliciesPermissionGroupsMetaOutputReference = DataCloudflareApiTokenPoliciesPermissionGroupsMetaOutputReference;
function dataCloudflareApiTokenPoliciesPermissionGroupsToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {};
}
function dataCloudflareApiTokenPoliciesPermissionGroupsToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    var attrs = {};
    return attrs;
}
var DataCloudflareApiTokenPoliciesPermissionGroupsOutputReference = /** @class */ (function (_super) {
    __extends(DataCloudflareApiTokenPoliciesPermissionGroupsOutputReference, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    function DataCloudflareApiTokenPoliciesPermissionGroupsOutputReference(terraformResource, terraformAttribute, complexObjectIndex, complexObjectIsFromSet) {
        var _this = _super.call(this, terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex) || this;
        _this.isEmptyObject = false;
        // meta - computed: true, optional: false, required: false
        _this._meta = new DataCloudflareApiTokenPoliciesPermissionGroupsMetaOutputReference(_this, "meta");
        return _this;
    }
    Object.defineProperty(DataCloudflareApiTokenPoliciesPermissionGroupsOutputReference.prototype, "internalValue", {
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
    Object.defineProperty(DataCloudflareApiTokenPoliciesPermissionGroupsOutputReference.prototype, "id", {
        // id - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('id');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareApiTokenPoliciesPermissionGroupsOutputReference.prototype, "meta", {
        get: function () {
            return this._meta;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareApiTokenPoliciesPermissionGroupsOutputReference.prototype, "name", {
        // name - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('name');
        },
        enumerable: false,
        configurable: true
    });
    return DataCloudflareApiTokenPoliciesPermissionGroupsOutputReference;
}(cdktf.ComplexObject));
exports.DataCloudflareApiTokenPoliciesPermissionGroupsOutputReference = DataCloudflareApiTokenPoliciesPermissionGroupsOutputReference;
var DataCloudflareApiTokenPoliciesPermissionGroupsList = /** @class */ (function (_super) {
    __extends(DataCloudflareApiTokenPoliciesPermissionGroupsList, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    function DataCloudflareApiTokenPoliciesPermissionGroupsList(terraformResource, terraformAttribute, wrapsSet) {
        var _this = _super.call(this, terraformResource, terraformAttribute, wrapsSet) || this;
        _this.terraformResource = terraformResource;
        _this.terraformAttribute = terraformAttribute;
        _this.wrapsSet = wrapsSet;
        return _this;
    }
    /**
    * @param index the index of the item to return
    */
    DataCloudflareApiTokenPoliciesPermissionGroupsList.prototype.get = function (index) {
        return new DataCloudflareApiTokenPoliciesPermissionGroupsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
    };
    return DataCloudflareApiTokenPoliciesPermissionGroupsList;
}(cdktf.ComplexList));
exports.DataCloudflareApiTokenPoliciesPermissionGroupsList = DataCloudflareApiTokenPoliciesPermissionGroupsList;
function dataCloudflareApiTokenPoliciesToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {};
}
function dataCloudflareApiTokenPoliciesToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    var attrs = {};
    return attrs;
}
var DataCloudflareApiTokenPoliciesOutputReference = /** @class */ (function (_super) {
    __extends(DataCloudflareApiTokenPoliciesOutputReference, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    function DataCloudflareApiTokenPoliciesOutputReference(terraformResource, terraformAttribute, complexObjectIndex, complexObjectIsFromSet) {
        var _this = _super.call(this, terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex) || this;
        _this.isEmptyObject = false;
        // permission_groups - computed: true, optional: false, required: false
        _this._permissionGroups = new DataCloudflareApiTokenPoliciesPermissionGroupsList(_this, "permission_groups", false);
        // resources - computed: true, optional: false, required: false
        _this._resources = new cdktf.StringMap(_this, "resources");
        return _this;
    }
    Object.defineProperty(DataCloudflareApiTokenPoliciesOutputReference.prototype, "internalValue", {
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
    Object.defineProperty(DataCloudflareApiTokenPoliciesOutputReference.prototype, "effect", {
        // effect - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('effect');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareApiTokenPoliciesOutputReference.prototype, "id", {
        // id - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('id');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareApiTokenPoliciesOutputReference.prototype, "permissionGroups", {
        get: function () {
            return this._permissionGroups;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareApiTokenPoliciesOutputReference.prototype, "resources", {
        get: function () {
            return this._resources;
        },
        enumerable: false,
        configurable: true
    });
    return DataCloudflareApiTokenPoliciesOutputReference;
}(cdktf.ComplexObject));
exports.DataCloudflareApiTokenPoliciesOutputReference = DataCloudflareApiTokenPoliciesOutputReference;
var DataCloudflareApiTokenPoliciesList = /** @class */ (function (_super) {
    __extends(DataCloudflareApiTokenPoliciesList, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    function DataCloudflareApiTokenPoliciesList(terraformResource, terraformAttribute, wrapsSet) {
        var _this = _super.call(this, terraformResource, terraformAttribute, wrapsSet) || this;
        _this.terraformResource = terraformResource;
        _this.terraformAttribute = terraformAttribute;
        _this.wrapsSet = wrapsSet;
        return _this;
    }
    /**
    * @param index the index of the item to return
    */
    DataCloudflareApiTokenPoliciesList.prototype.get = function (index) {
        return new DataCloudflareApiTokenPoliciesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
    };
    return DataCloudflareApiTokenPoliciesList;
}(cdktf.ComplexList));
exports.DataCloudflareApiTokenPoliciesList = DataCloudflareApiTokenPoliciesList;
/**
* Represents a {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/api_token cloudflare_api_token}
*/
var DataCloudflareApiToken = /** @class */ (function (_super) {
    __extends(DataCloudflareApiToken, _super);
    // ===========
    // INITIALIZER
    // ===========
    /**
    * Create a new {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/api_token cloudflare_api_token} Data Source
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options DataCloudflareApiTokenConfig = {}
    */
    function DataCloudflareApiToken(scope, id, config) {
        if (config === void 0) { config = {}; }
        var _this = _super.call(this, scope, id, {
            terraformResourceType: 'cloudflare_api_token',
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
        // ==========
        // ATTRIBUTES
        // ==========
        // condition - computed: true, optional: false, required: false
        _this._condition = new DataCloudflareApiTokenConditionOutputReference(_this, "condition");
        // filter - computed: false, optional: true, required: false
        _this._filter = new DataCloudflareApiTokenFilterOutputReference(_this, "filter");
        // policies - computed: true, optional: false, required: false
        _this._policies = new DataCloudflareApiTokenPoliciesList(_this, "policies", false);
        _this._filter.internalValue = config.filter;
        _this._tokenId = config.tokenId;
        return _this;
    }
    // ==============
    // STATIC Methods
    // ==============
    /**
    * Generates CDKTF code for importing a DataCloudflareApiToken resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the DataCloudflareApiToken to import
    * @param importFromId The id of the existing DataCloudflareApiToken that should be imported. Refer to the {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/api_token#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the DataCloudflareApiToken to import is found
    */
    DataCloudflareApiToken.generateConfigForImport = function (scope, importToId, importFromId, provider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "cloudflare_api_token", importId: importFromId, provider: provider });
    };
    Object.defineProperty(DataCloudflareApiToken.prototype, "condition", {
        get: function () {
            return this._condition;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareApiToken.prototype, "expiresOn", {
        // expires_on - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('expires_on');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareApiToken.prototype, "filter", {
        get: function () {
            return this._filter;
        },
        enumerable: false,
        configurable: true
    });
    DataCloudflareApiToken.prototype.putFilter = function (value) {
        this._filter.internalValue = value;
    };
    DataCloudflareApiToken.prototype.resetFilter = function () {
        this._filter.internalValue = undefined;
    };
    Object.defineProperty(DataCloudflareApiToken.prototype, "filterInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._filter.internalValue;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareApiToken.prototype, "id", {
        // id - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('id');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareApiToken.prototype, "issuedOn", {
        // issued_on - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('issued_on');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareApiToken.prototype, "lastUsedOn", {
        // last_used_on - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('last_used_on');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareApiToken.prototype, "modifiedOn", {
        // modified_on - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('modified_on');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareApiToken.prototype, "name", {
        // name - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('name');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareApiToken.prototype, "notBefore", {
        // not_before - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('not_before');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareApiToken.prototype, "policies", {
        get: function () {
            return this._policies;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareApiToken.prototype, "status", {
        // status - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('status');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareApiToken.prototype, "tokenId", {
        get: function () {
            return this.getStringAttribute('token_id');
        },
        set: function (value) {
            this._tokenId = value;
        },
        enumerable: false,
        configurable: true
    });
    DataCloudflareApiToken.prototype.resetTokenId = function () {
        this._tokenId = undefined;
    };
    Object.defineProperty(DataCloudflareApiToken.prototype, "tokenIdInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._tokenId;
        },
        enumerable: false,
        configurable: true
    });
    // =========
    // SYNTHESIS
    // =========
    DataCloudflareApiToken.prototype.synthesizeAttributes = function () {
        return {
            filter: dataCloudflareApiTokenFilterToTerraform(this._filter.internalValue),
            token_id: cdktf.stringToTerraform(this._tokenId),
        };
    };
    DataCloudflareApiToken.prototype.synthesizeHclAttributes = function () {
        var attrs = {
            filter: {
                value: dataCloudflareApiTokenFilterToHclTerraform(this._filter.internalValue),
                isBlock: true,
                type: "struct",
                storageClassType: "DataCloudflareApiTokenFilter",
            },
            token_id: {
                value: cdktf.stringToHclTerraform(this._tokenId),
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
    DataCloudflareApiToken.tfResourceType = "cloudflare_api_token";
    return DataCloudflareApiToken;
}(cdktf.TerraformDataSource));
exports.DataCloudflareApiToken = DataCloudflareApiToken;
