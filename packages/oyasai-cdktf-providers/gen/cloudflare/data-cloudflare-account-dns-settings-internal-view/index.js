"use strict";
// https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/account_dns_settings_internal_view
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
exports.DataCloudflareAccountDnsSettingsInternalView = exports.DataCloudflareAccountDnsSettingsInternalViewFilterOutputReference = exports.DataCloudflareAccountDnsSettingsInternalViewFilterNameOutputReference = void 0;
exports.dataCloudflareAccountDnsSettingsInternalViewFilterNameToTerraform = dataCloudflareAccountDnsSettingsInternalViewFilterNameToTerraform;
exports.dataCloudflareAccountDnsSettingsInternalViewFilterNameToHclTerraform = dataCloudflareAccountDnsSettingsInternalViewFilterNameToHclTerraform;
exports.dataCloudflareAccountDnsSettingsInternalViewFilterToTerraform = dataCloudflareAccountDnsSettingsInternalViewFilterToTerraform;
exports.dataCloudflareAccountDnsSettingsInternalViewFilterToHclTerraform = dataCloudflareAccountDnsSettingsInternalViewFilterToHclTerraform;
var cdktf = require("cdktf");
function dataCloudflareAccountDnsSettingsInternalViewFilterNameToTerraform(struct) {
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
function dataCloudflareAccountDnsSettingsInternalViewFilterNameToHclTerraform(struct) {
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
var DataCloudflareAccountDnsSettingsInternalViewFilterNameOutputReference = /** @class */ (function (_super) {
    __extends(DataCloudflareAccountDnsSettingsInternalViewFilterNameOutputReference, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    function DataCloudflareAccountDnsSettingsInternalViewFilterNameOutputReference(terraformResource, terraformAttribute) {
        var _this = _super.call(this, terraformResource, terraformAttribute, false) || this;
        _this.isEmptyObject = false;
        return _this;
    }
    Object.defineProperty(DataCloudflareAccountDnsSettingsInternalViewFilterNameOutputReference.prototype, "internalValue", {
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
    Object.defineProperty(DataCloudflareAccountDnsSettingsInternalViewFilterNameOutputReference.prototype, "contains", {
        get: function () {
            return this.getStringAttribute('contains');
        },
        set: function (value) {
            this._contains = value;
        },
        enumerable: false,
        configurable: true
    });
    DataCloudflareAccountDnsSettingsInternalViewFilterNameOutputReference.prototype.resetContains = function () {
        this._contains = undefined;
    };
    Object.defineProperty(DataCloudflareAccountDnsSettingsInternalViewFilterNameOutputReference.prototype, "containsInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._contains;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareAccountDnsSettingsInternalViewFilterNameOutputReference.prototype, "endswith", {
        get: function () {
            return this.getStringAttribute('endswith');
        },
        set: function (value) {
            this._endswith = value;
        },
        enumerable: false,
        configurable: true
    });
    DataCloudflareAccountDnsSettingsInternalViewFilterNameOutputReference.prototype.resetEndswith = function () {
        this._endswith = undefined;
    };
    Object.defineProperty(DataCloudflareAccountDnsSettingsInternalViewFilterNameOutputReference.prototype, "endswithInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._endswith;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareAccountDnsSettingsInternalViewFilterNameOutputReference.prototype, "exact", {
        get: function () {
            return this.getStringAttribute('exact');
        },
        set: function (value) {
            this._exact = value;
        },
        enumerable: false,
        configurable: true
    });
    DataCloudflareAccountDnsSettingsInternalViewFilterNameOutputReference.prototype.resetExact = function () {
        this._exact = undefined;
    };
    Object.defineProperty(DataCloudflareAccountDnsSettingsInternalViewFilterNameOutputReference.prototype, "exactInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._exact;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareAccountDnsSettingsInternalViewFilterNameOutputReference.prototype, "startswith", {
        get: function () {
            return this.getStringAttribute('startswith');
        },
        set: function (value) {
            this._startswith = value;
        },
        enumerable: false,
        configurable: true
    });
    DataCloudflareAccountDnsSettingsInternalViewFilterNameOutputReference.prototype.resetStartswith = function () {
        this._startswith = undefined;
    };
    Object.defineProperty(DataCloudflareAccountDnsSettingsInternalViewFilterNameOutputReference.prototype, "startswithInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._startswith;
        },
        enumerable: false,
        configurable: true
    });
    return DataCloudflareAccountDnsSettingsInternalViewFilterNameOutputReference;
}(cdktf.ComplexObject));
exports.DataCloudflareAccountDnsSettingsInternalViewFilterNameOutputReference = DataCloudflareAccountDnsSettingsInternalViewFilterNameOutputReference;
function dataCloudflareAccountDnsSettingsInternalViewFilterToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        direction: cdktf.stringToTerraform(struct.direction),
        match: cdktf.stringToTerraform(struct.match),
        name: dataCloudflareAccountDnsSettingsInternalViewFilterNameToTerraform(struct.name),
        order: cdktf.stringToTerraform(struct.order),
        zone_id: cdktf.stringToTerraform(struct.zoneId),
        zone_name: cdktf.stringToTerraform(struct.zoneName),
    };
}
function dataCloudflareAccountDnsSettingsInternalViewFilterToHclTerraform(struct) {
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
        match: {
            value: cdktf.stringToHclTerraform(struct.match),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        name: {
            value: dataCloudflareAccountDnsSettingsInternalViewFilterNameToHclTerraform(struct.name),
            isBlock: true,
            type: "struct",
            storageClassType: "DataCloudflareAccountDnsSettingsInternalViewFilterName",
        },
        order: {
            value: cdktf.stringToHclTerraform(struct.order),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        zone_id: {
            value: cdktf.stringToHclTerraform(struct.zoneId),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        zone_name: {
            value: cdktf.stringToHclTerraform(struct.zoneName),
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
var DataCloudflareAccountDnsSettingsInternalViewFilterOutputReference = /** @class */ (function (_super) {
    __extends(DataCloudflareAccountDnsSettingsInternalViewFilterOutputReference, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    function DataCloudflareAccountDnsSettingsInternalViewFilterOutputReference(terraformResource, terraformAttribute) {
        var _this = _super.call(this, terraformResource, terraformAttribute, false) || this;
        _this.isEmptyObject = false;
        // name - computed: false, optional: true, required: false
        _this._name = new DataCloudflareAccountDnsSettingsInternalViewFilterNameOutputReference(_this, "name");
        return _this;
    }
    Object.defineProperty(DataCloudflareAccountDnsSettingsInternalViewFilterOutputReference.prototype, "internalValue", {
        get: function () {
            var _a, _b;
            if (this.resolvableValue) {
                return this.resolvableValue;
            }
            var hasAnyValues = this.isEmptyObject;
            var internalValueResult = {};
            if (this._direction !== undefined) {
                hasAnyValues = true;
                internalValueResult.direction = this._direction;
            }
            if (this._match !== undefined) {
                hasAnyValues = true;
                internalValueResult.match = this._match;
            }
            if (((_a = this._name) === null || _a === void 0 ? void 0 : _a.internalValue) !== undefined) {
                hasAnyValues = true;
                internalValueResult.name = (_b = this._name) === null || _b === void 0 ? void 0 : _b.internalValue;
            }
            if (this._order !== undefined) {
                hasAnyValues = true;
                internalValueResult.order = this._order;
            }
            if (this._zoneId !== undefined) {
                hasAnyValues = true;
                internalValueResult.zoneId = this._zoneId;
            }
            if (this._zoneName !== undefined) {
                hasAnyValues = true;
                internalValueResult.zoneName = this._zoneName;
            }
            return hasAnyValues ? internalValueResult : undefined;
        },
        set: function (value) {
            if (value === undefined) {
                this.isEmptyObject = false;
                this.resolvableValue = undefined;
                this._direction = undefined;
                this._match = undefined;
                this._name.internalValue = undefined;
                this._order = undefined;
                this._zoneId = undefined;
                this._zoneName = undefined;
            }
            else if (cdktf.Tokenization.isResolvable(value)) {
                this.isEmptyObject = false;
                this.resolvableValue = value;
            }
            else {
                this.isEmptyObject = Object.keys(value).length === 0;
                this.resolvableValue = undefined;
                this._direction = value.direction;
                this._match = value.match;
                this._name.internalValue = value.name;
                this._order = value.order;
                this._zoneId = value.zoneId;
                this._zoneName = value.zoneName;
            }
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareAccountDnsSettingsInternalViewFilterOutputReference.prototype, "direction", {
        get: function () {
            return this.getStringAttribute('direction');
        },
        set: function (value) {
            this._direction = value;
        },
        enumerable: false,
        configurable: true
    });
    DataCloudflareAccountDnsSettingsInternalViewFilterOutputReference.prototype.resetDirection = function () {
        this._direction = undefined;
    };
    Object.defineProperty(DataCloudflareAccountDnsSettingsInternalViewFilterOutputReference.prototype, "directionInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._direction;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareAccountDnsSettingsInternalViewFilterOutputReference.prototype, "match", {
        get: function () {
            return this.getStringAttribute('match');
        },
        set: function (value) {
            this._match = value;
        },
        enumerable: false,
        configurable: true
    });
    DataCloudflareAccountDnsSettingsInternalViewFilterOutputReference.prototype.resetMatch = function () {
        this._match = undefined;
    };
    Object.defineProperty(DataCloudflareAccountDnsSettingsInternalViewFilterOutputReference.prototype, "matchInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._match;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareAccountDnsSettingsInternalViewFilterOutputReference.prototype, "name", {
        get: function () {
            return this._name;
        },
        enumerable: false,
        configurable: true
    });
    DataCloudflareAccountDnsSettingsInternalViewFilterOutputReference.prototype.putName = function (value) {
        this._name.internalValue = value;
    };
    DataCloudflareAccountDnsSettingsInternalViewFilterOutputReference.prototype.resetName = function () {
        this._name.internalValue = undefined;
    };
    Object.defineProperty(DataCloudflareAccountDnsSettingsInternalViewFilterOutputReference.prototype, "nameInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._name.internalValue;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareAccountDnsSettingsInternalViewFilterOutputReference.prototype, "order", {
        get: function () {
            return this.getStringAttribute('order');
        },
        set: function (value) {
            this._order = value;
        },
        enumerable: false,
        configurable: true
    });
    DataCloudflareAccountDnsSettingsInternalViewFilterOutputReference.prototype.resetOrder = function () {
        this._order = undefined;
    };
    Object.defineProperty(DataCloudflareAccountDnsSettingsInternalViewFilterOutputReference.prototype, "orderInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._order;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareAccountDnsSettingsInternalViewFilterOutputReference.prototype, "zoneId", {
        get: function () {
            return this.getStringAttribute('zone_id');
        },
        set: function (value) {
            this._zoneId = value;
        },
        enumerable: false,
        configurable: true
    });
    DataCloudflareAccountDnsSettingsInternalViewFilterOutputReference.prototype.resetZoneId = function () {
        this._zoneId = undefined;
    };
    Object.defineProperty(DataCloudflareAccountDnsSettingsInternalViewFilterOutputReference.prototype, "zoneIdInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._zoneId;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareAccountDnsSettingsInternalViewFilterOutputReference.prototype, "zoneName", {
        get: function () {
            return this.getStringAttribute('zone_name');
        },
        set: function (value) {
            this._zoneName = value;
        },
        enumerable: false,
        configurable: true
    });
    DataCloudflareAccountDnsSettingsInternalViewFilterOutputReference.prototype.resetZoneName = function () {
        this._zoneName = undefined;
    };
    Object.defineProperty(DataCloudflareAccountDnsSettingsInternalViewFilterOutputReference.prototype, "zoneNameInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._zoneName;
        },
        enumerable: false,
        configurable: true
    });
    return DataCloudflareAccountDnsSettingsInternalViewFilterOutputReference;
}(cdktf.ComplexObject));
exports.DataCloudflareAccountDnsSettingsInternalViewFilterOutputReference = DataCloudflareAccountDnsSettingsInternalViewFilterOutputReference;
/**
* Represents a {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/account_dns_settings_internal_view cloudflare_account_dns_settings_internal_view}
*/
var DataCloudflareAccountDnsSettingsInternalView = /** @class */ (function (_super) {
    __extends(DataCloudflareAccountDnsSettingsInternalView, _super);
    // ===========
    // INITIALIZER
    // ===========
    /**
    * Create a new {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/account_dns_settings_internal_view cloudflare_account_dns_settings_internal_view} Data Source
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options DataCloudflareAccountDnsSettingsInternalViewConfig = {}
    */
    function DataCloudflareAccountDnsSettingsInternalView(scope, id, config) {
        if (config === void 0) { config = {}; }
        var _this = _super.call(this, scope, id, {
            terraformResourceType: 'cloudflare_account_dns_settings_internal_view',
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
        // filter - computed: false, optional: true, required: false
        _this._filter = new DataCloudflareAccountDnsSettingsInternalViewFilterOutputReference(_this, "filter");
        _this._accountId = config.accountId;
        _this._filter.internalValue = config.filter;
        _this._viewId = config.viewId;
        return _this;
    }
    // ==============
    // STATIC Methods
    // ==============
    /**
    * Generates CDKTF code for importing a DataCloudflareAccountDnsSettingsInternalView resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the DataCloudflareAccountDnsSettingsInternalView to import
    * @param importFromId The id of the existing DataCloudflareAccountDnsSettingsInternalView that should be imported. Refer to the {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/account_dns_settings_internal_view#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the DataCloudflareAccountDnsSettingsInternalView to import is found
    */
    DataCloudflareAccountDnsSettingsInternalView.generateConfigForImport = function (scope, importToId, importFromId, provider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "cloudflare_account_dns_settings_internal_view", importId: importFromId, provider: provider });
    };
    Object.defineProperty(DataCloudflareAccountDnsSettingsInternalView.prototype, "accountId", {
        get: function () {
            return this.getStringAttribute('account_id');
        },
        set: function (value) {
            this._accountId = value;
        },
        enumerable: false,
        configurable: true
    });
    DataCloudflareAccountDnsSettingsInternalView.prototype.resetAccountId = function () {
        this._accountId = undefined;
    };
    Object.defineProperty(DataCloudflareAccountDnsSettingsInternalView.prototype, "accountIdInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._accountId;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareAccountDnsSettingsInternalView.prototype, "createdTime", {
        // created_time - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('created_time');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareAccountDnsSettingsInternalView.prototype, "filter", {
        get: function () {
            return this._filter;
        },
        enumerable: false,
        configurable: true
    });
    DataCloudflareAccountDnsSettingsInternalView.prototype.putFilter = function (value) {
        this._filter.internalValue = value;
    };
    DataCloudflareAccountDnsSettingsInternalView.prototype.resetFilter = function () {
        this._filter.internalValue = undefined;
    };
    Object.defineProperty(DataCloudflareAccountDnsSettingsInternalView.prototype, "filterInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._filter.internalValue;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareAccountDnsSettingsInternalView.prototype, "id", {
        // id - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('id');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareAccountDnsSettingsInternalView.prototype, "modifiedTime", {
        // modified_time - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('modified_time');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareAccountDnsSettingsInternalView.prototype, "name", {
        // name - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('name');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareAccountDnsSettingsInternalView.prototype, "viewId", {
        get: function () {
            return this.getStringAttribute('view_id');
        },
        set: function (value) {
            this._viewId = value;
        },
        enumerable: false,
        configurable: true
    });
    DataCloudflareAccountDnsSettingsInternalView.prototype.resetViewId = function () {
        this._viewId = undefined;
    };
    Object.defineProperty(DataCloudflareAccountDnsSettingsInternalView.prototype, "viewIdInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._viewId;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareAccountDnsSettingsInternalView.prototype, "zones", {
        // zones - computed: true, optional: false, required: false
        get: function () {
            return cdktf.Fn.tolist(this.getListAttribute('zones'));
        },
        enumerable: false,
        configurable: true
    });
    // =========
    // SYNTHESIS
    // =========
    DataCloudflareAccountDnsSettingsInternalView.prototype.synthesizeAttributes = function () {
        return {
            account_id: cdktf.stringToTerraform(this._accountId),
            filter: dataCloudflareAccountDnsSettingsInternalViewFilterToTerraform(this._filter.internalValue),
            view_id: cdktf.stringToTerraform(this._viewId),
        };
    };
    DataCloudflareAccountDnsSettingsInternalView.prototype.synthesizeHclAttributes = function () {
        var attrs = {
            account_id: {
                value: cdktf.stringToHclTerraform(this._accountId),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            filter: {
                value: dataCloudflareAccountDnsSettingsInternalViewFilterToHclTerraform(this._filter.internalValue),
                isBlock: true,
                type: "struct",
                storageClassType: "DataCloudflareAccountDnsSettingsInternalViewFilter",
            },
            view_id: {
                value: cdktf.stringToHclTerraform(this._viewId),
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
    DataCloudflareAccountDnsSettingsInternalView.tfResourceType = "cloudflare_account_dns_settings_internal_view";
    return DataCloudflareAccountDnsSettingsInternalView;
}(cdktf.TerraformDataSource));
exports.DataCloudflareAccountDnsSettingsInternalView = DataCloudflareAccountDnsSettingsInternalView;
