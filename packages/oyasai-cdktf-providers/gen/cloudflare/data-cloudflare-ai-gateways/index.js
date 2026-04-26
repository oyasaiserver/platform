"use strict";
// https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/ai_gateways
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
exports.DataCloudflareAiGateways = exports.DataCloudflareAiGatewaysResultList = exports.DataCloudflareAiGatewaysResultOutputReference = exports.DataCloudflareAiGatewaysResultStripeOutputReference = exports.DataCloudflareAiGatewaysResultStripeUsageEventsList = exports.DataCloudflareAiGatewaysResultStripeUsageEventsOutputReference = exports.DataCloudflareAiGatewaysResultOtelList = exports.DataCloudflareAiGatewaysResultOtelOutputReference = exports.DataCloudflareAiGatewaysResultDlpOutputReference = exports.DataCloudflareAiGatewaysResultDlpPoliciesList = exports.DataCloudflareAiGatewaysResultDlpPoliciesOutputReference = void 0;
exports.dataCloudflareAiGatewaysResultDlpPoliciesToTerraform = dataCloudflareAiGatewaysResultDlpPoliciesToTerraform;
exports.dataCloudflareAiGatewaysResultDlpPoliciesToHclTerraform = dataCloudflareAiGatewaysResultDlpPoliciesToHclTerraform;
exports.dataCloudflareAiGatewaysResultDlpToTerraform = dataCloudflareAiGatewaysResultDlpToTerraform;
exports.dataCloudflareAiGatewaysResultDlpToHclTerraform = dataCloudflareAiGatewaysResultDlpToHclTerraform;
exports.dataCloudflareAiGatewaysResultOtelToTerraform = dataCloudflareAiGatewaysResultOtelToTerraform;
exports.dataCloudflareAiGatewaysResultOtelToHclTerraform = dataCloudflareAiGatewaysResultOtelToHclTerraform;
exports.dataCloudflareAiGatewaysResultStripeUsageEventsToTerraform = dataCloudflareAiGatewaysResultStripeUsageEventsToTerraform;
exports.dataCloudflareAiGatewaysResultStripeUsageEventsToHclTerraform = dataCloudflareAiGatewaysResultStripeUsageEventsToHclTerraform;
exports.dataCloudflareAiGatewaysResultStripeToTerraform = dataCloudflareAiGatewaysResultStripeToTerraform;
exports.dataCloudflareAiGatewaysResultStripeToHclTerraform = dataCloudflareAiGatewaysResultStripeToHclTerraform;
exports.dataCloudflareAiGatewaysResultToTerraform = dataCloudflareAiGatewaysResultToTerraform;
exports.dataCloudflareAiGatewaysResultToHclTerraform = dataCloudflareAiGatewaysResultToHclTerraform;
var cdktf = require("cdktf");
function dataCloudflareAiGatewaysResultDlpPoliciesToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {};
}
function dataCloudflareAiGatewaysResultDlpPoliciesToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    var attrs = {};
    return attrs;
}
var DataCloudflareAiGatewaysResultDlpPoliciesOutputReference = /** @class */ (function (_super) {
    __extends(DataCloudflareAiGatewaysResultDlpPoliciesOutputReference, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    function DataCloudflareAiGatewaysResultDlpPoliciesOutputReference(terraformResource, terraformAttribute, complexObjectIndex, complexObjectIsFromSet) {
        var _this = _super.call(this, terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex) || this;
        _this.isEmptyObject = false;
        return _this;
    }
    Object.defineProperty(DataCloudflareAiGatewaysResultDlpPoliciesOutputReference.prototype, "internalValue", {
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
    Object.defineProperty(DataCloudflareAiGatewaysResultDlpPoliciesOutputReference.prototype, "action", {
        // action - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('action');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareAiGatewaysResultDlpPoliciesOutputReference.prototype, "check", {
        // check - computed: true, optional: false, required: false
        get: function () {
            return this.getListAttribute('check');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareAiGatewaysResultDlpPoliciesOutputReference.prototype, "enabled", {
        // enabled - computed: true, optional: false, required: false
        get: function () {
            return this.getBooleanAttribute('enabled');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareAiGatewaysResultDlpPoliciesOutputReference.prototype, "id", {
        // id - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('id');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareAiGatewaysResultDlpPoliciesOutputReference.prototype, "profiles", {
        // profiles - computed: true, optional: false, required: false
        get: function () {
            return this.getListAttribute('profiles');
        },
        enumerable: false,
        configurable: true
    });
    return DataCloudflareAiGatewaysResultDlpPoliciesOutputReference;
}(cdktf.ComplexObject));
exports.DataCloudflareAiGatewaysResultDlpPoliciesOutputReference = DataCloudflareAiGatewaysResultDlpPoliciesOutputReference;
var DataCloudflareAiGatewaysResultDlpPoliciesList = /** @class */ (function (_super) {
    __extends(DataCloudflareAiGatewaysResultDlpPoliciesList, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    function DataCloudflareAiGatewaysResultDlpPoliciesList(terraformResource, terraformAttribute, wrapsSet) {
        var _this = _super.call(this, terraformResource, terraformAttribute, wrapsSet) || this;
        _this.terraformResource = terraformResource;
        _this.terraformAttribute = terraformAttribute;
        _this.wrapsSet = wrapsSet;
        return _this;
    }
    /**
    * @param index the index of the item to return
    */
    DataCloudflareAiGatewaysResultDlpPoliciesList.prototype.get = function (index) {
        return new DataCloudflareAiGatewaysResultDlpPoliciesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
    };
    return DataCloudflareAiGatewaysResultDlpPoliciesList;
}(cdktf.ComplexList));
exports.DataCloudflareAiGatewaysResultDlpPoliciesList = DataCloudflareAiGatewaysResultDlpPoliciesList;
function dataCloudflareAiGatewaysResultDlpToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {};
}
function dataCloudflareAiGatewaysResultDlpToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    var attrs = {};
    return attrs;
}
var DataCloudflareAiGatewaysResultDlpOutputReference = /** @class */ (function (_super) {
    __extends(DataCloudflareAiGatewaysResultDlpOutputReference, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    function DataCloudflareAiGatewaysResultDlpOutputReference(terraformResource, terraformAttribute) {
        var _this = _super.call(this, terraformResource, terraformAttribute, false) || this;
        _this.isEmptyObject = false;
        // policies - computed: true, optional: false, required: false
        _this._policies = new DataCloudflareAiGatewaysResultDlpPoliciesList(_this, "policies", false);
        return _this;
    }
    Object.defineProperty(DataCloudflareAiGatewaysResultDlpOutputReference.prototype, "internalValue", {
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
    Object.defineProperty(DataCloudflareAiGatewaysResultDlpOutputReference.prototype, "action", {
        // action - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('action');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareAiGatewaysResultDlpOutputReference.prototype, "enabled", {
        // enabled - computed: true, optional: false, required: false
        get: function () {
            return this.getBooleanAttribute('enabled');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareAiGatewaysResultDlpOutputReference.prototype, "policies", {
        get: function () {
            return this._policies;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareAiGatewaysResultDlpOutputReference.prototype, "profiles", {
        // profiles - computed: true, optional: false, required: false
        get: function () {
            return this.getListAttribute('profiles');
        },
        enumerable: false,
        configurable: true
    });
    return DataCloudflareAiGatewaysResultDlpOutputReference;
}(cdktf.ComplexObject));
exports.DataCloudflareAiGatewaysResultDlpOutputReference = DataCloudflareAiGatewaysResultDlpOutputReference;
function dataCloudflareAiGatewaysResultOtelToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {};
}
function dataCloudflareAiGatewaysResultOtelToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    var attrs = {};
    return attrs;
}
var DataCloudflareAiGatewaysResultOtelOutputReference = /** @class */ (function (_super) {
    __extends(DataCloudflareAiGatewaysResultOtelOutputReference, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    function DataCloudflareAiGatewaysResultOtelOutputReference(terraformResource, terraformAttribute, complexObjectIndex, complexObjectIsFromSet) {
        var _this = _super.call(this, terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex) || this;
        _this.isEmptyObject = false;
        // headers - computed: true, optional: false, required: false
        _this._headers = new cdktf.StringMap(_this, "headers");
        return _this;
    }
    Object.defineProperty(DataCloudflareAiGatewaysResultOtelOutputReference.prototype, "internalValue", {
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
    Object.defineProperty(DataCloudflareAiGatewaysResultOtelOutputReference.prototype, "authorization", {
        // authorization - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('authorization');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareAiGatewaysResultOtelOutputReference.prototype, "contentType", {
        // content_type - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('content_type');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareAiGatewaysResultOtelOutputReference.prototype, "headers", {
        get: function () {
            return this._headers;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareAiGatewaysResultOtelOutputReference.prototype, "url", {
        // url - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('url');
        },
        enumerable: false,
        configurable: true
    });
    return DataCloudflareAiGatewaysResultOtelOutputReference;
}(cdktf.ComplexObject));
exports.DataCloudflareAiGatewaysResultOtelOutputReference = DataCloudflareAiGatewaysResultOtelOutputReference;
var DataCloudflareAiGatewaysResultOtelList = /** @class */ (function (_super) {
    __extends(DataCloudflareAiGatewaysResultOtelList, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    function DataCloudflareAiGatewaysResultOtelList(terraformResource, terraformAttribute, wrapsSet) {
        var _this = _super.call(this, terraformResource, terraformAttribute, wrapsSet) || this;
        _this.terraformResource = terraformResource;
        _this.terraformAttribute = terraformAttribute;
        _this.wrapsSet = wrapsSet;
        return _this;
    }
    /**
    * @param index the index of the item to return
    */
    DataCloudflareAiGatewaysResultOtelList.prototype.get = function (index) {
        return new DataCloudflareAiGatewaysResultOtelOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
    };
    return DataCloudflareAiGatewaysResultOtelList;
}(cdktf.ComplexList));
exports.DataCloudflareAiGatewaysResultOtelList = DataCloudflareAiGatewaysResultOtelList;
function dataCloudflareAiGatewaysResultStripeUsageEventsToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {};
}
function dataCloudflareAiGatewaysResultStripeUsageEventsToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    var attrs = {};
    return attrs;
}
var DataCloudflareAiGatewaysResultStripeUsageEventsOutputReference = /** @class */ (function (_super) {
    __extends(DataCloudflareAiGatewaysResultStripeUsageEventsOutputReference, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    function DataCloudflareAiGatewaysResultStripeUsageEventsOutputReference(terraformResource, terraformAttribute, complexObjectIndex, complexObjectIsFromSet) {
        var _this = _super.call(this, terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex) || this;
        _this.isEmptyObject = false;
        return _this;
    }
    Object.defineProperty(DataCloudflareAiGatewaysResultStripeUsageEventsOutputReference.prototype, "internalValue", {
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
    Object.defineProperty(DataCloudflareAiGatewaysResultStripeUsageEventsOutputReference.prototype, "payload", {
        // payload - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('payload');
        },
        enumerable: false,
        configurable: true
    });
    return DataCloudflareAiGatewaysResultStripeUsageEventsOutputReference;
}(cdktf.ComplexObject));
exports.DataCloudflareAiGatewaysResultStripeUsageEventsOutputReference = DataCloudflareAiGatewaysResultStripeUsageEventsOutputReference;
var DataCloudflareAiGatewaysResultStripeUsageEventsList = /** @class */ (function (_super) {
    __extends(DataCloudflareAiGatewaysResultStripeUsageEventsList, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    function DataCloudflareAiGatewaysResultStripeUsageEventsList(terraformResource, terraformAttribute, wrapsSet) {
        var _this = _super.call(this, terraformResource, terraformAttribute, wrapsSet) || this;
        _this.terraformResource = terraformResource;
        _this.terraformAttribute = terraformAttribute;
        _this.wrapsSet = wrapsSet;
        return _this;
    }
    /**
    * @param index the index of the item to return
    */
    DataCloudflareAiGatewaysResultStripeUsageEventsList.prototype.get = function (index) {
        return new DataCloudflareAiGatewaysResultStripeUsageEventsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
    };
    return DataCloudflareAiGatewaysResultStripeUsageEventsList;
}(cdktf.ComplexList));
exports.DataCloudflareAiGatewaysResultStripeUsageEventsList = DataCloudflareAiGatewaysResultStripeUsageEventsList;
function dataCloudflareAiGatewaysResultStripeToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {};
}
function dataCloudflareAiGatewaysResultStripeToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    var attrs = {};
    return attrs;
}
var DataCloudflareAiGatewaysResultStripeOutputReference = /** @class */ (function (_super) {
    __extends(DataCloudflareAiGatewaysResultStripeOutputReference, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    function DataCloudflareAiGatewaysResultStripeOutputReference(terraformResource, terraformAttribute) {
        var _this = _super.call(this, terraformResource, terraformAttribute, false) || this;
        _this.isEmptyObject = false;
        // usage_events - computed: true, optional: false, required: false
        _this._usageEvents = new DataCloudflareAiGatewaysResultStripeUsageEventsList(_this, "usage_events", false);
        return _this;
    }
    Object.defineProperty(DataCloudflareAiGatewaysResultStripeOutputReference.prototype, "internalValue", {
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
    Object.defineProperty(DataCloudflareAiGatewaysResultStripeOutputReference.prototype, "authorization", {
        // authorization - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('authorization');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareAiGatewaysResultStripeOutputReference.prototype, "usageEvents", {
        get: function () {
            return this._usageEvents;
        },
        enumerable: false,
        configurable: true
    });
    return DataCloudflareAiGatewaysResultStripeOutputReference;
}(cdktf.ComplexObject));
exports.DataCloudflareAiGatewaysResultStripeOutputReference = DataCloudflareAiGatewaysResultStripeOutputReference;
function dataCloudflareAiGatewaysResultToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {};
}
function dataCloudflareAiGatewaysResultToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    var attrs = {};
    return attrs;
}
var DataCloudflareAiGatewaysResultOutputReference = /** @class */ (function (_super) {
    __extends(DataCloudflareAiGatewaysResultOutputReference, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    function DataCloudflareAiGatewaysResultOutputReference(terraformResource, terraformAttribute, complexObjectIndex, complexObjectIsFromSet) {
        var _this = _super.call(this, terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex) || this;
        _this.isEmptyObject = false;
        // dlp - computed: true, optional: false, required: false
        _this._dlp = new DataCloudflareAiGatewaysResultDlpOutputReference(_this, "dlp");
        // otel - computed: true, optional: false, required: false
        _this._otel = new DataCloudflareAiGatewaysResultOtelList(_this, "otel", false);
        // stripe - computed: true, optional: false, required: false
        _this._stripe = new DataCloudflareAiGatewaysResultStripeOutputReference(_this, "stripe");
        return _this;
    }
    Object.defineProperty(DataCloudflareAiGatewaysResultOutputReference.prototype, "internalValue", {
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
    Object.defineProperty(DataCloudflareAiGatewaysResultOutputReference.prototype, "authentication", {
        // authentication - computed: true, optional: false, required: false
        get: function () {
            return this.getBooleanAttribute('authentication');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareAiGatewaysResultOutputReference.prototype, "cacheInvalidateOnUpdate", {
        // cache_invalidate_on_update - computed: true, optional: false, required: false
        get: function () {
            return this.getBooleanAttribute('cache_invalidate_on_update');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareAiGatewaysResultOutputReference.prototype, "cacheTtl", {
        // cache_ttl - computed: true, optional: false, required: false
        get: function () {
            return this.getNumberAttribute('cache_ttl');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareAiGatewaysResultOutputReference.prototype, "collectLogs", {
        // collect_logs - computed: true, optional: false, required: false
        get: function () {
            return this.getBooleanAttribute('collect_logs');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareAiGatewaysResultOutputReference.prototype, "createdAt", {
        // created_at - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('created_at');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareAiGatewaysResultOutputReference.prototype, "dlp", {
        get: function () {
            return this._dlp;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareAiGatewaysResultOutputReference.prototype, "id", {
        // id - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('id');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareAiGatewaysResultOutputReference.prototype, "isDefault", {
        // is_default - computed: true, optional: false, required: false
        get: function () {
            return this.getBooleanAttribute('is_default');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareAiGatewaysResultOutputReference.prototype, "logManagement", {
        // log_management - computed: true, optional: false, required: false
        get: function () {
            return this.getNumberAttribute('log_management');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareAiGatewaysResultOutputReference.prototype, "logManagementStrategy", {
        // log_management_strategy - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('log_management_strategy');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareAiGatewaysResultOutputReference.prototype, "logpush", {
        // logpush - computed: true, optional: false, required: false
        get: function () {
            return this.getBooleanAttribute('logpush');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareAiGatewaysResultOutputReference.prototype, "logpushPublicKey", {
        // logpush_public_key - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('logpush_public_key');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareAiGatewaysResultOutputReference.prototype, "modifiedAt", {
        // modified_at - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('modified_at');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareAiGatewaysResultOutputReference.prototype, "otel", {
        get: function () {
            return this._otel;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareAiGatewaysResultOutputReference.prototype, "rateLimitingInterval", {
        // rate_limiting_interval - computed: true, optional: false, required: false
        get: function () {
            return this.getNumberAttribute('rate_limiting_interval');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareAiGatewaysResultOutputReference.prototype, "rateLimitingLimit", {
        // rate_limiting_limit - computed: true, optional: false, required: false
        get: function () {
            return this.getNumberAttribute('rate_limiting_limit');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareAiGatewaysResultOutputReference.prototype, "rateLimitingTechnique", {
        // rate_limiting_technique - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('rate_limiting_technique');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareAiGatewaysResultOutputReference.prototype, "retryBackoff", {
        // retry_backoff - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('retry_backoff');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareAiGatewaysResultOutputReference.prototype, "retryDelay", {
        // retry_delay - computed: true, optional: false, required: false
        get: function () {
            return this.getNumberAttribute('retry_delay');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareAiGatewaysResultOutputReference.prototype, "retryMaxAttempts", {
        // retry_max_attempts - computed: true, optional: false, required: false
        get: function () {
            return this.getNumberAttribute('retry_max_attempts');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareAiGatewaysResultOutputReference.prototype, "storeId", {
        // store_id - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('store_id');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareAiGatewaysResultOutputReference.prototype, "stripe", {
        get: function () {
            return this._stripe;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareAiGatewaysResultOutputReference.prototype, "workersAiBillingMode", {
        // workers_ai_billing_mode - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('workers_ai_billing_mode');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareAiGatewaysResultOutputReference.prototype, "zdr", {
        // zdr - computed: true, optional: false, required: false
        get: function () {
            return this.getBooleanAttribute('zdr');
        },
        enumerable: false,
        configurable: true
    });
    return DataCloudflareAiGatewaysResultOutputReference;
}(cdktf.ComplexObject));
exports.DataCloudflareAiGatewaysResultOutputReference = DataCloudflareAiGatewaysResultOutputReference;
var DataCloudflareAiGatewaysResultList = /** @class */ (function (_super) {
    __extends(DataCloudflareAiGatewaysResultList, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    function DataCloudflareAiGatewaysResultList(terraformResource, terraformAttribute, wrapsSet) {
        var _this = _super.call(this, terraformResource, terraformAttribute, wrapsSet) || this;
        _this.terraformResource = terraformResource;
        _this.terraformAttribute = terraformAttribute;
        _this.wrapsSet = wrapsSet;
        return _this;
    }
    /**
    * @param index the index of the item to return
    */
    DataCloudflareAiGatewaysResultList.prototype.get = function (index) {
        return new DataCloudflareAiGatewaysResultOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
    };
    return DataCloudflareAiGatewaysResultList;
}(cdktf.ComplexList));
exports.DataCloudflareAiGatewaysResultList = DataCloudflareAiGatewaysResultList;
/**
* Represents a {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/ai_gateways cloudflare_ai_gateways}
*/
var DataCloudflareAiGateways = /** @class */ (function (_super) {
    __extends(DataCloudflareAiGateways, _super);
    // ===========
    // INITIALIZER
    // ===========
    /**
    * Create a new {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/ai_gateways cloudflare_ai_gateways} Data Source
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options DataCloudflareAiGatewaysConfig = {}
    */
    function DataCloudflareAiGateways(scope, id, config) {
        if (config === void 0) { config = {}; }
        var _this = _super.call(this, scope, id, {
            terraformResourceType: 'cloudflare_ai_gateways',
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
        // result - computed: true, optional: false, required: false
        _this._result = new DataCloudflareAiGatewaysResultList(_this, "result", false);
        _this._accountId = config.accountId;
        _this._maxItems = config.maxItems;
        _this._search = config.search;
        return _this;
    }
    // ==============
    // STATIC Methods
    // ==============
    /**
    * Generates CDKTF code for importing a DataCloudflareAiGateways resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the DataCloudflareAiGateways to import
    * @param importFromId The id of the existing DataCloudflareAiGateways that should be imported. Refer to the {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/ai_gateways#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the DataCloudflareAiGateways to import is found
    */
    DataCloudflareAiGateways.generateConfigForImport = function (scope, importToId, importFromId, provider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "cloudflare_ai_gateways", importId: importFromId, provider: provider });
    };
    Object.defineProperty(DataCloudflareAiGateways.prototype, "accountId", {
        get: function () {
            return this.getStringAttribute('account_id');
        },
        set: function (value) {
            this._accountId = value;
        },
        enumerable: false,
        configurable: true
    });
    DataCloudflareAiGateways.prototype.resetAccountId = function () {
        this._accountId = undefined;
    };
    Object.defineProperty(DataCloudflareAiGateways.prototype, "accountIdInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._accountId;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareAiGateways.prototype, "maxItems", {
        get: function () {
            return this.getNumberAttribute('max_items');
        },
        set: function (value) {
            this._maxItems = value;
        },
        enumerable: false,
        configurable: true
    });
    DataCloudflareAiGateways.prototype.resetMaxItems = function () {
        this._maxItems = undefined;
    };
    Object.defineProperty(DataCloudflareAiGateways.prototype, "maxItemsInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._maxItems;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareAiGateways.prototype, "result", {
        get: function () {
            return this._result;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareAiGateways.prototype, "search", {
        get: function () {
            return this.getStringAttribute('search');
        },
        set: function (value) {
            this._search = value;
        },
        enumerable: false,
        configurable: true
    });
    DataCloudflareAiGateways.prototype.resetSearch = function () {
        this._search = undefined;
    };
    Object.defineProperty(DataCloudflareAiGateways.prototype, "searchInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._search;
        },
        enumerable: false,
        configurable: true
    });
    // =========
    // SYNTHESIS
    // =========
    DataCloudflareAiGateways.prototype.synthesizeAttributes = function () {
        return {
            account_id: cdktf.stringToTerraform(this._accountId),
            max_items: cdktf.numberToTerraform(this._maxItems),
            search: cdktf.stringToTerraform(this._search),
        };
    };
    DataCloudflareAiGateways.prototype.synthesizeHclAttributes = function () {
        var attrs = {
            account_id: {
                value: cdktf.stringToHclTerraform(this._accountId),
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
            search: {
                value: cdktf.stringToHclTerraform(this._search),
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
    DataCloudflareAiGateways.tfResourceType = "cloudflare_ai_gateways";
    return DataCloudflareAiGateways;
}(cdktf.TerraformDataSource));
exports.DataCloudflareAiGateways = DataCloudflareAiGateways;
