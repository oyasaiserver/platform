"use strict";
// https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/ai_gateway
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
exports.DataCloudflareAiGateway = exports.DataCloudflareAiGatewayStripeOutputReference = exports.DataCloudflareAiGatewayStripeUsageEventsList = exports.DataCloudflareAiGatewayStripeUsageEventsOutputReference = exports.DataCloudflareAiGatewayOtelList = exports.DataCloudflareAiGatewayOtelOutputReference = exports.DataCloudflareAiGatewayFilterOutputReference = exports.DataCloudflareAiGatewayDlpOutputReference = exports.DataCloudflareAiGatewayDlpPoliciesList = exports.DataCloudflareAiGatewayDlpPoliciesOutputReference = void 0;
exports.dataCloudflareAiGatewayDlpPoliciesToTerraform = dataCloudflareAiGatewayDlpPoliciesToTerraform;
exports.dataCloudflareAiGatewayDlpPoliciesToHclTerraform = dataCloudflareAiGatewayDlpPoliciesToHclTerraform;
exports.dataCloudflareAiGatewayDlpToTerraform = dataCloudflareAiGatewayDlpToTerraform;
exports.dataCloudflareAiGatewayDlpToHclTerraform = dataCloudflareAiGatewayDlpToHclTerraform;
exports.dataCloudflareAiGatewayFilterToTerraform = dataCloudflareAiGatewayFilterToTerraform;
exports.dataCloudflareAiGatewayFilterToHclTerraform = dataCloudflareAiGatewayFilterToHclTerraform;
exports.dataCloudflareAiGatewayOtelToTerraform = dataCloudflareAiGatewayOtelToTerraform;
exports.dataCloudflareAiGatewayOtelToHclTerraform = dataCloudflareAiGatewayOtelToHclTerraform;
exports.dataCloudflareAiGatewayStripeUsageEventsToTerraform = dataCloudflareAiGatewayStripeUsageEventsToTerraform;
exports.dataCloudflareAiGatewayStripeUsageEventsToHclTerraform = dataCloudflareAiGatewayStripeUsageEventsToHclTerraform;
exports.dataCloudflareAiGatewayStripeToTerraform = dataCloudflareAiGatewayStripeToTerraform;
exports.dataCloudflareAiGatewayStripeToHclTerraform = dataCloudflareAiGatewayStripeToHclTerraform;
var cdktf = require("cdktf");
function dataCloudflareAiGatewayDlpPoliciesToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {};
}
function dataCloudflareAiGatewayDlpPoliciesToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    var attrs = {};
    return attrs;
}
var DataCloudflareAiGatewayDlpPoliciesOutputReference = /** @class */ (function (_super) {
    __extends(DataCloudflareAiGatewayDlpPoliciesOutputReference, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    function DataCloudflareAiGatewayDlpPoliciesOutputReference(terraformResource, terraformAttribute, complexObjectIndex, complexObjectIsFromSet) {
        var _this = _super.call(this, terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex) || this;
        _this.isEmptyObject = false;
        return _this;
    }
    Object.defineProperty(DataCloudflareAiGatewayDlpPoliciesOutputReference.prototype, "internalValue", {
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
    Object.defineProperty(DataCloudflareAiGatewayDlpPoliciesOutputReference.prototype, "action", {
        // action - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('action');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareAiGatewayDlpPoliciesOutputReference.prototype, "check", {
        // check - computed: true, optional: false, required: false
        get: function () {
            return this.getListAttribute('check');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareAiGatewayDlpPoliciesOutputReference.prototype, "enabled", {
        // enabled - computed: true, optional: false, required: false
        get: function () {
            return this.getBooleanAttribute('enabled');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareAiGatewayDlpPoliciesOutputReference.prototype, "id", {
        // id - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('id');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareAiGatewayDlpPoliciesOutputReference.prototype, "profiles", {
        // profiles - computed: true, optional: false, required: false
        get: function () {
            return this.getListAttribute('profiles');
        },
        enumerable: false,
        configurable: true
    });
    return DataCloudflareAiGatewayDlpPoliciesOutputReference;
}(cdktf.ComplexObject));
exports.DataCloudflareAiGatewayDlpPoliciesOutputReference = DataCloudflareAiGatewayDlpPoliciesOutputReference;
var DataCloudflareAiGatewayDlpPoliciesList = /** @class */ (function (_super) {
    __extends(DataCloudflareAiGatewayDlpPoliciesList, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    function DataCloudflareAiGatewayDlpPoliciesList(terraformResource, terraformAttribute, wrapsSet) {
        var _this = _super.call(this, terraformResource, terraformAttribute, wrapsSet) || this;
        _this.terraformResource = terraformResource;
        _this.terraformAttribute = terraformAttribute;
        _this.wrapsSet = wrapsSet;
        return _this;
    }
    /**
    * @param index the index of the item to return
    */
    DataCloudflareAiGatewayDlpPoliciesList.prototype.get = function (index) {
        return new DataCloudflareAiGatewayDlpPoliciesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
    };
    return DataCloudflareAiGatewayDlpPoliciesList;
}(cdktf.ComplexList));
exports.DataCloudflareAiGatewayDlpPoliciesList = DataCloudflareAiGatewayDlpPoliciesList;
function dataCloudflareAiGatewayDlpToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {};
}
function dataCloudflareAiGatewayDlpToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    var attrs = {};
    return attrs;
}
var DataCloudflareAiGatewayDlpOutputReference = /** @class */ (function (_super) {
    __extends(DataCloudflareAiGatewayDlpOutputReference, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    function DataCloudflareAiGatewayDlpOutputReference(terraformResource, terraformAttribute) {
        var _this = _super.call(this, terraformResource, terraformAttribute, false) || this;
        _this.isEmptyObject = false;
        // policies - computed: true, optional: false, required: false
        _this._policies = new DataCloudflareAiGatewayDlpPoliciesList(_this, "policies", false);
        return _this;
    }
    Object.defineProperty(DataCloudflareAiGatewayDlpOutputReference.prototype, "internalValue", {
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
    Object.defineProperty(DataCloudflareAiGatewayDlpOutputReference.prototype, "action", {
        // action - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('action');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareAiGatewayDlpOutputReference.prototype, "enabled", {
        // enabled - computed: true, optional: false, required: false
        get: function () {
            return this.getBooleanAttribute('enabled');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareAiGatewayDlpOutputReference.prototype, "policies", {
        get: function () {
            return this._policies;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareAiGatewayDlpOutputReference.prototype, "profiles", {
        // profiles - computed: true, optional: false, required: false
        get: function () {
            return this.getListAttribute('profiles');
        },
        enumerable: false,
        configurable: true
    });
    return DataCloudflareAiGatewayDlpOutputReference;
}(cdktf.ComplexObject));
exports.DataCloudflareAiGatewayDlpOutputReference = DataCloudflareAiGatewayDlpOutputReference;
function dataCloudflareAiGatewayFilterToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        search: cdktf.stringToTerraform(struct.search),
    };
}
function dataCloudflareAiGatewayFilterToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    var attrs = {
        search: {
            value: cdktf.stringToHclTerraform(struct.search),
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
var DataCloudflareAiGatewayFilterOutputReference = /** @class */ (function (_super) {
    __extends(DataCloudflareAiGatewayFilterOutputReference, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    function DataCloudflareAiGatewayFilterOutputReference(terraformResource, terraformAttribute) {
        var _this = _super.call(this, terraformResource, terraformAttribute, false) || this;
        _this.isEmptyObject = false;
        return _this;
    }
    Object.defineProperty(DataCloudflareAiGatewayFilterOutputReference.prototype, "internalValue", {
        get: function () {
            if (this.resolvableValue) {
                return this.resolvableValue;
            }
            var hasAnyValues = this.isEmptyObject;
            var internalValueResult = {};
            if (this._search !== undefined) {
                hasAnyValues = true;
                internalValueResult.search = this._search;
            }
            return hasAnyValues ? internalValueResult : undefined;
        },
        set: function (value) {
            if (value === undefined) {
                this.isEmptyObject = false;
                this.resolvableValue = undefined;
                this._search = undefined;
            }
            else if (cdktf.Tokenization.isResolvable(value)) {
                this.isEmptyObject = false;
                this.resolvableValue = value;
            }
            else {
                this.isEmptyObject = Object.keys(value).length === 0;
                this.resolvableValue = undefined;
                this._search = value.search;
            }
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareAiGatewayFilterOutputReference.prototype, "search", {
        get: function () {
            return this.getStringAttribute('search');
        },
        set: function (value) {
            this._search = value;
        },
        enumerable: false,
        configurable: true
    });
    DataCloudflareAiGatewayFilterOutputReference.prototype.resetSearch = function () {
        this._search = undefined;
    };
    Object.defineProperty(DataCloudflareAiGatewayFilterOutputReference.prototype, "searchInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._search;
        },
        enumerable: false,
        configurable: true
    });
    return DataCloudflareAiGatewayFilterOutputReference;
}(cdktf.ComplexObject));
exports.DataCloudflareAiGatewayFilterOutputReference = DataCloudflareAiGatewayFilterOutputReference;
function dataCloudflareAiGatewayOtelToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {};
}
function dataCloudflareAiGatewayOtelToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    var attrs = {};
    return attrs;
}
var DataCloudflareAiGatewayOtelOutputReference = /** @class */ (function (_super) {
    __extends(DataCloudflareAiGatewayOtelOutputReference, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    function DataCloudflareAiGatewayOtelOutputReference(terraformResource, terraformAttribute, complexObjectIndex, complexObjectIsFromSet) {
        var _this = _super.call(this, terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex) || this;
        _this.isEmptyObject = false;
        // headers - computed: true, optional: false, required: false
        _this._headers = new cdktf.StringMap(_this, "headers");
        return _this;
    }
    Object.defineProperty(DataCloudflareAiGatewayOtelOutputReference.prototype, "internalValue", {
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
    Object.defineProperty(DataCloudflareAiGatewayOtelOutputReference.prototype, "authorization", {
        // authorization - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('authorization');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareAiGatewayOtelOutputReference.prototype, "contentType", {
        // content_type - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('content_type');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareAiGatewayOtelOutputReference.prototype, "headers", {
        get: function () {
            return this._headers;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareAiGatewayOtelOutputReference.prototype, "url", {
        // url - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('url');
        },
        enumerable: false,
        configurable: true
    });
    return DataCloudflareAiGatewayOtelOutputReference;
}(cdktf.ComplexObject));
exports.DataCloudflareAiGatewayOtelOutputReference = DataCloudflareAiGatewayOtelOutputReference;
var DataCloudflareAiGatewayOtelList = /** @class */ (function (_super) {
    __extends(DataCloudflareAiGatewayOtelList, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    function DataCloudflareAiGatewayOtelList(terraformResource, terraformAttribute, wrapsSet) {
        var _this = _super.call(this, terraformResource, terraformAttribute, wrapsSet) || this;
        _this.terraformResource = terraformResource;
        _this.terraformAttribute = terraformAttribute;
        _this.wrapsSet = wrapsSet;
        return _this;
    }
    /**
    * @param index the index of the item to return
    */
    DataCloudflareAiGatewayOtelList.prototype.get = function (index) {
        return new DataCloudflareAiGatewayOtelOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
    };
    return DataCloudflareAiGatewayOtelList;
}(cdktf.ComplexList));
exports.DataCloudflareAiGatewayOtelList = DataCloudflareAiGatewayOtelList;
function dataCloudflareAiGatewayStripeUsageEventsToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {};
}
function dataCloudflareAiGatewayStripeUsageEventsToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    var attrs = {};
    return attrs;
}
var DataCloudflareAiGatewayStripeUsageEventsOutputReference = /** @class */ (function (_super) {
    __extends(DataCloudflareAiGatewayStripeUsageEventsOutputReference, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    function DataCloudflareAiGatewayStripeUsageEventsOutputReference(terraformResource, terraformAttribute, complexObjectIndex, complexObjectIsFromSet) {
        var _this = _super.call(this, terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex) || this;
        _this.isEmptyObject = false;
        return _this;
    }
    Object.defineProperty(DataCloudflareAiGatewayStripeUsageEventsOutputReference.prototype, "internalValue", {
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
    Object.defineProperty(DataCloudflareAiGatewayStripeUsageEventsOutputReference.prototype, "payload", {
        // payload - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('payload');
        },
        enumerable: false,
        configurable: true
    });
    return DataCloudflareAiGatewayStripeUsageEventsOutputReference;
}(cdktf.ComplexObject));
exports.DataCloudflareAiGatewayStripeUsageEventsOutputReference = DataCloudflareAiGatewayStripeUsageEventsOutputReference;
var DataCloudflareAiGatewayStripeUsageEventsList = /** @class */ (function (_super) {
    __extends(DataCloudflareAiGatewayStripeUsageEventsList, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    function DataCloudflareAiGatewayStripeUsageEventsList(terraformResource, terraformAttribute, wrapsSet) {
        var _this = _super.call(this, terraformResource, terraformAttribute, wrapsSet) || this;
        _this.terraformResource = terraformResource;
        _this.terraformAttribute = terraformAttribute;
        _this.wrapsSet = wrapsSet;
        return _this;
    }
    /**
    * @param index the index of the item to return
    */
    DataCloudflareAiGatewayStripeUsageEventsList.prototype.get = function (index) {
        return new DataCloudflareAiGatewayStripeUsageEventsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
    };
    return DataCloudflareAiGatewayStripeUsageEventsList;
}(cdktf.ComplexList));
exports.DataCloudflareAiGatewayStripeUsageEventsList = DataCloudflareAiGatewayStripeUsageEventsList;
function dataCloudflareAiGatewayStripeToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {};
}
function dataCloudflareAiGatewayStripeToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    var attrs = {};
    return attrs;
}
var DataCloudflareAiGatewayStripeOutputReference = /** @class */ (function (_super) {
    __extends(DataCloudflareAiGatewayStripeOutputReference, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    function DataCloudflareAiGatewayStripeOutputReference(terraformResource, terraformAttribute) {
        var _this = _super.call(this, terraformResource, terraformAttribute, false) || this;
        _this.isEmptyObject = false;
        // usage_events - computed: true, optional: false, required: false
        _this._usageEvents = new DataCloudflareAiGatewayStripeUsageEventsList(_this, "usage_events", false);
        return _this;
    }
    Object.defineProperty(DataCloudflareAiGatewayStripeOutputReference.prototype, "internalValue", {
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
    Object.defineProperty(DataCloudflareAiGatewayStripeOutputReference.prototype, "authorization", {
        // authorization - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('authorization');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareAiGatewayStripeOutputReference.prototype, "usageEvents", {
        get: function () {
            return this._usageEvents;
        },
        enumerable: false,
        configurable: true
    });
    return DataCloudflareAiGatewayStripeOutputReference;
}(cdktf.ComplexObject));
exports.DataCloudflareAiGatewayStripeOutputReference = DataCloudflareAiGatewayStripeOutputReference;
/**
* Represents a {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/ai_gateway cloudflare_ai_gateway}
*/
var DataCloudflareAiGateway = /** @class */ (function (_super) {
    __extends(DataCloudflareAiGateway, _super);
    // ===========
    // INITIALIZER
    // ===========
    /**
    * Create a new {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/ai_gateway cloudflare_ai_gateway} Data Source
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options DataCloudflareAiGatewayConfig = {}
    */
    function DataCloudflareAiGateway(scope, id, config) {
        if (config === void 0) { config = {}; }
        var _this = _super.call(this, scope, id, {
            terraformResourceType: 'cloudflare_ai_gateway',
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
        // dlp - computed: true, optional: false, required: false
        _this._dlp = new DataCloudflareAiGatewayDlpOutputReference(_this, "dlp");
        // filter - computed: false, optional: true, required: false
        _this._filter = new DataCloudflareAiGatewayFilterOutputReference(_this, "filter");
        // otel - computed: true, optional: false, required: false
        _this._otel = new DataCloudflareAiGatewayOtelList(_this, "otel", false);
        // stripe - computed: true, optional: false, required: false
        _this._stripe = new DataCloudflareAiGatewayStripeOutputReference(_this, "stripe");
        _this._accountId = config.accountId;
        _this._filter.internalValue = config.filter;
        _this._id = config.id;
        return _this;
    }
    // ==============
    // STATIC Methods
    // ==============
    /**
    * Generates CDKTF code for importing a DataCloudflareAiGateway resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the DataCloudflareAiGateway to import
    * @param importFromId The id of the existing DataCloudflareAiGateway that should be imported. Refer to the {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/ai_gateway#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the DataCloudflareAiGateway to import is found
    */
    DataCloudflareAiGateway.generateConfigForImport = function (scope, importToId, importFromId, provider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "cloudflare_ai_gateway", importId: importFromId, provider: provider });
    };
    Object.defineProperty(DataCloudflareAiGateway.prototype, "accountId", {
        get: function () {
            return this.getStringAttribute('account_id');
        },
        set: function (value) {
            this._accountId = value;
        },
        enumerable: false,
        configurable: true
    });
    DataCloudflareAiGateway.prototype.resetAccountId = function () {
        this._accountId = undefined;
    };
    Object.defineProperty(DataCloudflareAiGateway.prototype, "accountIdInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._accountId;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareAiGateway.prototype, "authentication", {
        // authentication - computed: true, optional: false, required: false
        get: function () {
            return this.getBooleanAttribute('authentication');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareAiGateway.prototype, "cacheInvalidateOnUpdate", {
        // cache_invalidate_on_update - computed: true, optional: false, required: false
        get: function () {
            return this.getBooleanAttribute('cache_invalidate_on_update');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareAiGateway.prototype, "cacheTtl", {
        // cache_ttl - computed: true, optional: false, required: false
        get: function () {
            return this.getNumberAttribute('cache_ttl');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareAiGateway.prototype, "collectLogs", {
        // collect_logs - computed: true, optional: false, required: false
        get: function () {
            return this.getBooleanAttribute('collect_logs');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareAiGateway.prototype, "createdAt", {
        // created_at - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('created_at');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareAiGateway.prototype, "dlp", {
        get: function () {
            return this._dlp;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareAiGateway.prototype, "filter", {
        get: function () {
            return this._filter;
        },
        enumerable: false,
        configurable: true
    });
    DataCloudflareAiGateway.prototype.putFilter = function (value) {
        this._filter.internalValue = value;
    };
    DataCloudflareAiGateway.prototype.resetFilter = function () {
        this._filter.internalValue = undefined;
    };
    Object.defineProperty(DataCloudflareAiGateway.prototype, "filterInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._filter.internalValue;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareAiGateway.prototype, "id", {
        get: function () {
            return this.getStringAttribute('id');
        },
        set: function (value) {
            this._id = value;
        },
        enumerable: false,
        configurable: true
    });
    DataCloudflareAiGateway.prototype.resetId = function () {
        this._id = undefined;
    };
    Object.defineProperty(DataCloudflareAiGateway.prototype, "idInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._id;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareAiGateway.prototype, "isDefault", {
        // is_default - computed: true, optional: false, required: false
        get: function () {
            return this.getBooleanAttribute('is_default');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareAiGateway.prototype, "logManagement", {
        // log_management - computed: true, optional: false, required: false
        get: function () {
            return this.getNumberAttribute('log_management');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareAiGateway.prototype, "logManagementStrategy", {
        // log_management_strategy - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('log_management_strategy');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareAiGateway.prototype, "logpush", {
        // logpush - computed: true, optional: false, required: false
        get: function () {
            return this.getBooleanAttribute('logpush');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareAiGateway.prototype, "logpushPublicKey", {
        // logpush_public_key - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('logpush_public_key');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareAiGateway.prototype, "modifiedAt", {
        // modified_at - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('modified_at');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareAiGateway.prototype, "otel", {
        get: function () {
            return this._otel;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareAiGateway.prototype, "rateLimitingInterval", {
        // rate_limiting_interval - computed: true, optional: false, required: false
        get: function () {
            return this.getNumberAttribute('rate_limiting_interval');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareAiGateway.prototype, "rateLimitingLimit", {
        // rate_limiting_limit - computed: true, optional: false, required: false
        get: function () {
            return this.getNumberAttribute('rate_limiting_limit');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareAiGateway.prototype, "rateLimitingTechnique", {
        // rate_limiting_technique - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('rate_limiting_technique');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareAiGateway.prototype, "retryBackoff", {
        // retry_backoff - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('retry_backoff');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareAiGateway.prototype, "retryDelay", {
        // retry_delay - computed: true, optional: false, required: false
        get: function () {
            return this.getNumberAttribute('retry_delay');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareAiGateway.prototype, "retryMaxAttempts", {
        // retry_max_attempts - computed: true, optional: false, required: false
        get: function () {
            return this.getNumberAttribute('retry_max_attempts');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareAiGateway.prototype, "storeId", {
        // store_id - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('store_id');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareAiGateway.prototype, "stripe", {
        get: function () {
            return this._stripe;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareAiGateway.prototype, "workersAiBillingMode", {
        // workers_ai_billing_mode - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('workers_ai_billing_mode');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareAiGateway.prototype, "zdr", {
        // zdr - computed: true, optional: false, required: false
        get: function () {
            return this.getBooleanAttribute('zdr');
        },
        enumerable: false,
        configurable: true
    });
    // =========
    // SYNTHESIS
    // =========
    DataCloudflareAiGateway.prototype.synthesizeAttributes = function () {
        return {
            account_id: cdktf.stringToTerraform(this._accountId),
            filter: dataCloudflareAiGatewayFilterToTerraform(this._filter.internalValue),
            id: cdktf.stringToTerraform(this._id),
        };
    };
    DataCloudflareAiGateway.prototype.synthesizeHclAttributes = function () {
        var attrs = {
            account_id: {
                value: cdktf.stringToHclTerraform(this._accountId),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            filter: {
                value: dataCloudflareAiGatewayFilterToHclTerraform(this._filter.internalValue),
                isBlock: true,
                type: "struct",
                storageClassType: "DataCloudflareAiGatewayFilter",
            },
            id: {
                value: cdktf.stringToHclTerraform(this._id),
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
    DataCloudflareAiGateway.tfResourceType = "cloudflare_ai_gateway";
    return DataCloudflareAiGateway;
}(cdktf.TerraformDataSource));
exports.DataCloudflareAiGateway = DataCloudflareAiGateway;
