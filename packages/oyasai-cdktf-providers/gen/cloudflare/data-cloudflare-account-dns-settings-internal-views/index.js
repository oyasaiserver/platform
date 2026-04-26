"use strict";
// https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/account_dns_settings_internal_views
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
exports.DataCloudflareAccountDnsSettingsInternalViews = exports.DataCloudflareAccountDnsSettingsInternalViewsResultList = exports.DataCloudflareAccountDnsSettingsInternalViewsResultOutputReference = exports.DataCloudflareAccountDnsSettingsInternalViewsNameOutputReference = void 0;
exports.dataCloudflareAccountDnsSettingsInternalViewsNameToTerraform = dataCloudflareAccountDnsSettingsInternalViewsNameToTerraform;
exports.dataCloudflareAccountDnsSettingsInternalViewsNameToHclTerraform = dataCloudflareAccountDnsSettingsInternalViewsNameToHclTerraform;
exports.dataCloudflareAccountDnsSettingsInternalViewsResultToTerraform = dataCloudflareAccountDnsSettingsInternalViewsResultToTerraform;
exports.dataCloudflareAccountDnsSettingsInternalViewsResultToHclTerraform = dataCloudflareAccountDnsSettingsInternalViewsResultToHclTerraform;
var cdktf = require("cdktf");
function dataCloudflareAccountDnsSettingsInternalViewsNameToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        contains: cdktf.stringToTerraform(struct.contains),
        endswith: cdktf.stringToTerraform(struct.endswith),
        exact: cdktf.stringToTerraform(struct.exact),
        startswith: cdktf.stringToTerraform(struct.startswith),
    };
}
function dataCloudflareAccountDnsSettingsInternalViewsNameToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    var attrs = {
        contains: {
            value: cdktf.stringToHclTerraform(struct.contains),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        endswith: {
            value: cdktf.stringToHclTerraform(struct.endswith),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        exact: {
            value: cdktf.stringToHclTerraform(struct.exact),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        startswith: {
            value: cdktf.stringToHclTerraform(struct.startswith),
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
var DataCloudflareAccountDnsSettingsInternalViewsNameOutputReference = /** @class */ (function (_super) {
    __extends(DataCloudflareAccountDnsSettingsInternalViewsNameOutputReference, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    function DataCloudflareAccountDnsSettingsInternalViewsNameOutputReference(terraformResource, terraformAttribute) {
        var _this = _super.call(this, terraformResource, terraformAttribute, false) || this;
        _this.isEmptyObject = false;
        return _this;
    }
    Object.defineProperty(DataCloudflareAccountDnsSettingsInternalViewsNameOutputReference.prototype, "internalValue", {
        get: function () {
            if (this.resolvableValue) {
                return this.resolvableValue;
            }
            var hasAnyValues = this.isEmptyObject;
            var internalValueResult = {};
            if (this._contains !== undefined) {
                hasAnyValues = true;
                internalValueResult.contains = this._contains;
            }
            if (this._endswith !== undefined) {
                hasAnyValues = true;
                internalValueResult.endswith = this._endswith;
            }
            if (this._exact !== undefined) {
                hasAnyValues = true;
                internalValueResult.exact = this._exact;
            }
            if (this._startswith !== undefined) {
                hasAnyValues = true;
                internalValueResult.startswith = this._startswith;
            }
            return hasAnyValues ? internalValueResult : undefined;
        },
        set: function (value) {
            if (value === undefined) {
                this.isEmptyObject = false;
                this.resolvableValue = undefined;
                this._contains = undefined;
                this._endswith = undefined;
                this._exact = undefined;
                this._startswith = undefined;
            }
            else if (cdktf.Tokenization.isResolvable(value)) {
                this.isEmptyObject = false;
                this.resolvableValue = value;
            }
            else {
                this.isEmptyObject = Object.keys(value).length === 0;
                this.resolvableValue = undefined;
                this._contains = value.contains;
                this._endswith = value.endswith;
                this._exact = value.exact;
                this._startswith = value.startswith;
            }
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareAccountDnsSettingsInternalViewsNameOutputReference.prototype, "contains", {
        get: function () {
            return this.getStringAttribute('contains');
        },
        set: function (value) {
            this._contains = value;
        },
        enumerable: false,
        configurable: true
    });
    DataCloudflareAccountDnsSettingsInternalViewsNameOutputReference.prototype.resetContains = function () {
        this._contains = undefined;
    };
    Object.defineProperty(DataCloudflareAccountDnsSettingsInternalViewsNameOutputReference.prototype, "containsInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._contains;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareAccountDnsSettingsInternalViewsNameOutputReference.prototype, "endswith", {
        get: function () {
            return this.getStringAttribute('endswith');
        },
        set: function (value) {
            this._endswith = value;
        },
        enumerable: false,
        configurable: true
    });
    DataCloudflareAccountDnsSettingsInternalViewsNameOutputReference.prototype.resetEndswith = function () {
        this._endswith = undefined;
    };
    Object.defineProperty(DataCloudflareAccountDnsSettingsInternalViewsNameOutputReference.prototype, "endswithInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._endswith;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareAccountDnsSettingsInternalViewsNameOutputReference.prototype, "exact", {
        get: function () {
            return this.getStringAttribute('exact');
        },
        set: function (value) {
            this._exact = value;
        },
        enumerable: false,
        configurable: true
    });
    DataCloudflareAccountDnsSettingsInternalViewsNameOutputReference.prototype.resetExact = function () {
        this._exact = undefined;
    };
    Object.defineProperty(DataCloudflareAccountDnsSettingsInternalViewsNameOutputReference.prototype, "exactInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._exact;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareAccountDnsSettingsInternalViewsNameOutputReference.prototype, "startswith", {
        get: function () {
            return this.getStringAttribute('startswith');
        },
        set: function (value) {
            this._startswith = value;
        },
        enumerable: false,
        configurable: true
    });
    DataCloudflareAccountDnsSettingsInternalViewsNameOutputReference.prototype.resetStartswith = function () {
        this._startswith = undefined;
    };
    Object.defineProperty(DataCloudflareAccountDnsSettingsInternalViewsNameOutputReference.prototype, "startswithInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._startswith;
        },
        enumerable: false,
        configurable: true
    });
    return DataCloudflareAccountDnsSettingsInternalViewsNameOutputReference;
}(cdktf.ComplexObject));
exports.DataCloudflareAccountDnsSettingsInternalViewsNameOutputReference = DataCloudflareAccountDnsSettingsInternalViewsNameOutputReference;
function dataCloudflareAccountDnsSettingsInternalViewsResultToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {};
}
function dataCloudflareAccountDnsSettingsInternalViewsResultToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    var attrs = {};
    return attrs;
}
var DataCloudflareAccountDnsSettingsInternalViewsResultOutputReference = /** @class */ (function (_super) {
    __extends(DataCloudflareAccountDnsSettingsInternalViewsResultOutputReference, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    function DataCloudflareAccountDnsSettingsInternalViewsResultOutputReference(terraformResource, terraformAttribute, complexObjectIndex, complexObjectIsFromSet) {
        var _this = _super.call(this, terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex) || this;
        _this.isEmptyObject = false;
        return _this;
    }
    Object.defineProperty(DataCloudflareAccountDnsSettingsInternalViewsResultOutputReference.prototype, "internalValue", {
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
    Object.defineProperty(DataCloudflareAccountDnsSettingsInternalViewsResultOutputReference.prototype, "createdTime", {
        // created_time - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('created_time');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareAccountDnsSettingsInternalViewsResultOutputReference.prototype, "id", {
        // id - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('id');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareAccountDnsSettingsInternalViewsResultOutputReference.prototype, "modifiedTime", {
        // modified_time - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('modified_time');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareAccountDnsSettingsInternalViewsResultOutputReference.prototype, "name", {
        // name - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('name');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareAccountDnsSettingsInternalViewsResultOutputReference.prototype, "zones", {
        // zones - computed: true, optional: false, required: false
        get: function () {
            return cdktf.Fn.tolist(this.getListAttribute('zones'));
        },
        enumerable: false,
        configurable: true
    });
    return DataCloudflareAccountDnsSettingsInternalViewsResultOutputReference;
}(cdktf.ComplexObject));
exports.DataCloudflareAccountDnsSettingsInternalViewsResultOutputReference = DataCloudflareAccountDnsSettingsInternalViewsResultOutputReference;
var DataCloudflareAccountDnsSettingsInternalViewsResultList = /** @class */ (function (_super) {
    __extends(DataCloudflareAccountDnsSettingsInternalViewsResultList, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    function DataCloudflareAccountDnsSettingsInternalViewsResultList(terraformResource, terraformAttribute, wrapsSet) {
        var _this = _super.call(this, terraformResource, terraformAttribute, wrapsSet) || this;
        _this.terraformResource = terraformResource;
        _this.terraformAttribute = terraformAttribute;
        _this.wrapsSet = wrapsSet;
        return _this;
    }
    /**
    * @param index the index of the item to return
    */
    DataCloudflareAccountDnsSettingsInternalViewsResultList.prototype.get = function (index) {
        return new DataCloudflareAccountDnsSettingsInternalViewsResultOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
    };
    return DataCloudflareAccountDnsSettingsInternalViewsResultList;
}(cdktf.ComplexList));
exports.DataCloudflareAccountDnsSettingsInternalViewsResultList = DataCloudflareAccountDnsSettingsInternalViewsResultList;
/**
* Represents a {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/account_dns_settings_internal_views cloudflare_account_dns_settings_internal_views}
*/
var DataCloudflareAccountDnsSettingsInternalViews = /** @class */ (function (_super) {
    __extends(DataCloudflareAccountDnsSettingsInternalViews, _super);
    // ===========
    // INITIALIZER
    // ===========
    /**
    * Create a new {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/account_dns_settings_internal_views cloudflare_account_dns_settings_internal_views} Data Source
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options DataCloudflareAccountDnsSettingsInternalViewsConfig = {}
    */
    function DataCloudflareAccountDnsSettingsInternalViews(scope, id, config) {
        if (config === void 0) { config = {}; }
        var _this = _super.call(this, scope, id, {
            terraformResourceType: 'cloudflare_account_dns_settings_internal_views',
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
        // name - computed: false, optional: true, required: false
        _this._name = new DataCloudflareAccountDnsSettingsInternalViewsNameOutputReference(_this, "name");
        // result - computed: true, optional: false, required: false
        _this._result = new DataCloudflareAccountDnsSettingsInternalViewsResultList(_this, "result", false);
        _this._accountId = config.accountId;
        _this._direction = config.direction;
        _this._match = config.match;
        _this._maxItems = config.maxItems;
        _this._name.internalValue = config.name;
        _this._order = config.order;
        _this._zoneId = config.zoneId;
        _this._zoneName = config.zoneName;
        return _this;
    }
    // ==============
    // STATIC Methods
    // ==============
    /**
    * Generates CDKTF code for importing a DataCloudflareAccountDnsSettingsInternalViews resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the DataCloudflareAccountDnsSettingsInternalViews to import
    * @param importFromId The id of the existing DataCloudflareAccountDnsSettingsInternalViews that should be imported. Refer to the {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/account_dns_settings_internal_views#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the DataCloudflareAccountDnsSettingsInternalViews to import is found
    */
    DataCloudflareAccountDnsSettingsInternalViews.generateConfigForImport = function (scope, importToId, importFromId, provider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "cloudflare_account_dns_settings_internal_views", importId: importFromId, provider: provider });
    };
    Object.defineProperty(DataCloudflareAccountDnsSettingsInternalViews.prototype, "accountId", {
        get: function () {
            return this.getStringAttribute('account_id');
        },
        set: function (value) {
            this._accountId = value;
        },
        enumerable: false,
        configurable: true
    });
    DataCloudflareAccountDnsSettingsInternalViews.prototype.resetAccountId = function () {
        this._accountId = undefined;
    };
    Object.defineProperty(DataCloudflareAccountDnsSettingsInternalViews.prototype, "accountIdInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._accountId;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareAccountDnsSettingsInternalViews.prototype, "direction", {
        get: function () {
            return this.getStringAttribute('direction');
        },
        set: function (value) {
            this._direction = value;
        },
        enumerable: false,
        configurable: true
    });
    DataCloudflareAccountDnsSettingsInternalViews.prototype.resetDirection = function () {
        this._direction = undefined;
    };
    Object.defineProperty(DataCloudflareAccountDnsSettingsInternalViews.prototype, "directionInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._direction;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareAccountDnsSettingsInternalViews.prototype, "match", {
        get: function () {
            return this.getStringAttribute('match');
        },
        set: function (value) {
            this._match = value;
        },
        enumerable: false,
        configurable: true
    });
    DataCloudflareAccountDnsSettingsInternalViews.prototype.resetMatch = function () {
        this._match = undefined;
    };
    Object.defineProperty(DataCloudflareAccountDnsSettingsInternalViews.prototype, "matchInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._match;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareAccountDnsSettingsInternalViews.prototype, "maxItems", {
        get: function () {
            return this.getNumberAttribute('max_items');
        },
        set: function (value) {
            this._maxItems = value;
        },
        enumerable: false,
        configurable: true
    });
    DataCloudflareAccountDnsSettingsInternalViews.prototype.resetMaxItems = function () {
        this._maxItems = undefined;
    };
    Object.defineProperty(DataCloudflareAccountDnsSettingsInternalViews.prototype, "maxItemsInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._maxItems;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareAccountDnsSettingsInternalViews.prototype, "name", {
        get: function () {
            return this._name;
        },
        enumerable: false,
        configurable: true
    });
    DataCloudflareAccountDnsSettingsInternalViews.prototype.putName = function (value) {
        this._name.internalValue = value;
    };
    DataCloudflareAccountDnsSettingsInternalViews.prototype.resetName = function () {
        this._name.internalValue = undefined;
    };
    Object.defineProperty(DataCloudflareAccountDnsSettingsInternalViews.prototype, "nameInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._name.internalValue;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareAccountDnsSettingsInternalViews.prototype, "order", {
        get: function () {
            return this.getStringAttribute('order');
        },
        set: function (value) {
            this._order = value;
        },
        enumerable: false,
        configurable: true
    });
    DataCloudflareAccountDnsSettingsInternalViews.prototype.resetOrder = function () {
        this._order = undefined;
    };
    Object.defineProperty(DataCloudflareAccountDnsSettingsInternalViews.prototype, "orderInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._order;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareAccountDnsSettingsInternalViews.prototype, "result", {
        get: function () {
            return this._result;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareAccountDnsSettingsInternalViews.prototype, "zoneId", {
        get: function () {
            return this.getStringAttribute('zone_id');
        },
        set: function (value) {
            this._zoneId = value;
        },
        enumerable: false,
        configurable: true
    });
    DataCloudflareAccountDnsSettingsInternalViews.prototype.resetZoneId = function () {
        this._zoneId = undefined;
    };
    Object.defineProperty(DataCloudflareAccountDnsSettingsInternalViews.prototype, "zoneIdInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._zoneId;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareAccountDnsSettingsInternalViews.prototype, "zoneName", {
        get: function () {
            return this.getStringAttribute('zone_name');
        },
        set: function (value) {
            this._zoneName = value;
        },
        enumerable: false,
        configurable: true
    });
    DataCloudflareAccountDnsSettingsInternalViews.prototype.resetZoneName = function () {
        this._zoneName = undefined;
    };
    Object.defineProperty(DataCloudflareAccountDnsSettingsInternalViews.prototype, "zoneNameInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._zoneName;
        },
        enumerable: false,
        configurable: true
    });
    // =========
    // SYNTHESIS
    // =========
    DataCloudflareAccountDnsSettingsInternalViews.prototype.synthesizeAttributes = function () {
        return {
            account_id: cdktf.stringToTerraform(this._accountId),
            direction: cdktf.stringToTerraform(this._direction),
            match: cdktf.stringToTerraform(this._match),
            max_items: cdktf.numberToTerraform(this._maxItems),
            name: dataCloudflareAccountDnsSettingsInternalViewsNameToTerraform(this._name.internalValue),
            order: cdktf.stringToTerraform(this._order),
            zone_id: cdktf.stringToTerraform(this._zoneId),
            zone_name: cdktf.stringToTerraform(this._zoneName),
        };
    };
    DataCloudflareAccountDnsSettingsInternalViews.prototype.synthesizeHclAttributes = function () {
        var attrs = {
            account_id: {
                value: cdktf.stringToHclTerraform(this._accountId),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            direction: {
                value: cdktf.stringToHclTerraform(this._direction),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            match: {
                value: cdktf.stringToHclTerraform(this._match),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            max_items: {
                value: cdktf.numberToHclTerraform(this._maxItems),
                isBlock: false,
                type: "simple",
                storageClassType: "number",
            },
            name: {
                value: dataCloudflareAccountDnsSettingsInternalViewsNameToHclTerraform(this._name.internalValue),
                isBlock: true,
                type: "struct",
                storageClassType: "DataCloudflareAccountDnsSettingsInternalViewsName",
            },
            order: {
                value: cdktf.stringToHclTerraform(this._order),
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
            zone_name: {
                value: cdktf.stringToHclTerraform(this._zoneName),
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
    DataCloudflareAccountDnsSettingsInternalViews.tfResourceType = "cloudflare_account_dns_settings_internal_views";
    return DataCloudflareAccountDnsSettingsInternalViews;
}(cdktf.TerraformDataSource));
exports.DataCloudflareAccountDnsSettingsInternalViews = DataCloudflareAccountDnsSettingsInternalViews;
