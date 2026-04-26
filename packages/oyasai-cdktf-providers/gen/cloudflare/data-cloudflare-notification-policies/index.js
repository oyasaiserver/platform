"use strict";
// https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/notification_policies
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
exports.DataCloudflareNotificationPolicies = exports.DataCloudflareNotificationPoliciesResultList = exports.DataCloudflareNotificationPoliciesResultOutputReference = exports.DataCloudflareNotificationPoliciesResultMechanismsOutputReference = exports.DataCloudflareNotificationPoliciesResultMechanismsWebhooksList = exports.DataCloudflareNotificationPoliciesResultMechanismsWebhooksOutputReference = exports.DataCloudflareNotificationPoliciesResultMechanismsPagerdutyList = exports.DataCloudflareNotificationPoliciesResultMechanismsPagerdutyOutputReference = exports.DataCloudflareNotificationPoliciesResultMechanismsEmailList = exports.DataCloudflareNotificationPoliciesResultMechanismsEmailOutputReference = exports.DataCloudflareNotificationPoliciesResultFiltersOutputReference = void 0;
exports.dataCloudflareNotificationPoliciesResultFiltersToTerraform = dataCloudflareNotificationPoliciesResultFiltersToTerraform;
exports.dataCloudflareNotificationPoliciesResultFiltersToHclTerraform = dataCloudflareNotificationPoliciesResultFiltersToHclTerraform;
exports.dataCloudflareNotificationPoliciesResultMechanismsEmailToTerraform = dataCloudflareNotificationPoliciesResultMechanismsEmailToTerraform;
exports.dataCloudflareNotificationPoliciesResultMechanismsEmailToHclTerraform = dataCloudflareNotificationPoliciesResultMechanismsEmailToHclTerraform;
exports.dataCloudflareNotificationPoliciesResultMechanismsPagerdutyToTerraform = dataCloudflareNotificationPoliciesResultMechanismsPagerdutyToTerraform;
exports.dataCloudflareNotificationPoliciesResultMechanismsPagerdutyToHclTerraform = dataCloudflareNotificationPoliciesResultMechanismsPagerdutyToHclTerraform;
exports.dataCloudflareNotificationPoliciesResultMechanismsWebhooksToTerraform = dataCloudflareNotificationPoliciesResultMechanismsWebhooksToTerraform;
exports.dataCloudflareNotificationPoliciesResultMechanismsWebhooksToHclTerraform = dataCloudflareNotificationPoliciesResultMechanismsWebhooksToHclTerraform;
exports.dataCloudflareNotificationPoliciesResultMechanismsToTerraform = dataCloudflareNotificationPoliciesResultMechanismsToTerraform;
exports.dataCloudflareNotificationPoliciesResultMechanismsToHclTerraform = dataCloudflareNotificationPoliciesResultMechanismsToHclTerraform;
exports.dataCloudflareNotificationPoliciesResultToTerraform = dataCloudflareNotificationPoliciesResultToTerraform;
exports.dataCloudflareNotificationPoliciesResultToHclTerraform = dataCloudflareNotificationPoliciesResultToHclTerraform;
var cdktf = require("cdktf");
function dataCloudflareNotificationPoliciesResultFiltersToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {};
}
function dataCloudflareNotificationPoliciesResultFiltersToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    var attrs = {};
    return attrs;
}
var DataCloudflareNotificationPoliciesResultFiltersOutputReference = /** @class */ (function (_super) {
    __extends(DataCloudflareNotificationPoliciesResultFiltersOutputReference, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    function DataCloudflareNotificationPoliciesResultFiltersOutputReference(terraformResource, terraformAttribute) {
        var _this = _super.call(this, terraformResource, terraformAttribute, false) || this;
        _this.isEmptyObject = false;
        return _this;
    }
    Object.defineProperty(DataCloudflareNotificationPoliciesResultFiltersOutputReference.prototype, "internalValue", {
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
    Object.defineProperty(DataCloudflareNotificationPoliciesResultFiltersOutputReference.prototype, "actions", {
        // actions - computed: true, optional: false, required: false
        get: function () {
            return this.getListAttribute('actions');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareNotificationPoliciesResultFiltersOutputReference.prototype, "affectedAsns", {
        // affected_asns - computed: true, optional: false, required: false
        get: function () {
            return this.getListAttribute('affected_asns');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareNotificationPoliciesResultFiltersOutputReference.prototype, "affectedComponents", {
        // affected_components - computed: true, optional: false, required: false
        get: function () {
            return this.getListAttribute('affected_components');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareNotificationPoliciesResultFiltersOutputReference.prototype, "affectedLocations", {
        // affected_locations - computed: true, optional: false, required: false
        get: function () {
            return this.getListAttribute('affected_locations');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareNotificationPoliciesResultFiltersOutputReference.prototype, "airportCode", {
        // airport_code - computed: true, optional: false, required: false
        get: function () {
            return this.getListAttribute('airport_code');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareNotificationPoliciesResultFiltersOutputReference.prototype, "alertTriggerPreferences", {
        // alert_trigger_preferences - computed: true, optional: false, required: false
        get: function () {
            return this.getListAttribute('alert_trigger_preferences');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareNotificationPoliciesResultFiltersOutputReference.prototype, "alertTriggerPreferencesValue", {
        // alert_trigger_preferences_value - computed: true, optional: false, required: false
        get: function () {
            return this.getListAttribute('alert_trigger_preferences_value');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareNotificationPoliciesResultFiltersOutputReference.prototype, "enabled", {
        // enabled - computed: true, optional: false, required: false
        get: function () {
            return this.getListAttribute('enabled');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareNotificationPoliciesResultFiltersOutputReference.prototype, "environment", {
        // environment - computed: true, optional: false, required: false
        get: function () {
            return this.getListAttribute('environment');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareNotificationPoliciesResultFiltersOutputReference.prototype, "event", {
        // event - computed: true, optional: false, required: false
        get: function () {
            return this.getListAttribute('event');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareNotificationPoliciesResultFiltersOutputReference.prototype, "eventSource", {
        // event_source - computed: true, optional: false, required: false
        get: function () {
            return this.getListAttribute('event_source');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareNotificationPoliciesResultFiltersOutputReference.prototype, "eventType", {
        // event_type - computed: true, optional: false, required: false
        get: function () {
            return this.getListAttribute('event_type');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareNotificationPoliciesResultFiltersOutputReference.prototype, "groupBy", {
        // group_by - computed: true, optional: false, required: false
        get: function () {
            return this.getListAttribute('group_by');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareNotificationPoliciesResultFiltersOutputReference.prototype, "healthCheckId", {
        // health_check_id - computed: true, optional: false, required: false
        get: function () {
            return this.getListAttribute('health_check_id');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareNotificationPoliciesResultFiltersOutputReference.prototype, "incidentImpact", {
        // incident_impact - computed: true, optional: false, required: false
        get: function () {
            return this.getListAttribute('incident_impact');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareNotificationPoliciesResultFiltersOutputReference.prototype, "inputId", {
        // input_id - computed: true, optional: false, required: false
        get: function () {
            return this.getListAttribute('input_id');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareNotificationPoliciesResultFiltersOutputReference.prototype, "insightClass", {
        // insight_class - computed: true, optional: false, required: false
        get: function () {
            return this.getListAttribute('insight_class');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareNotificationPoliciesResultFiltersOutputReference.prototype, "limit", {
        // limit - computed: true, optional: false, required: false
        get: function () {
            return this.getListAttribute('limit');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareNotificationPoliciesResultFiltersOutputReference.prototype, "logoTag", {
        // logo_tag - computed: true, optional: false, required: false
        get: function () {
            return this.getListAttribute('logo_tag');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareNotificationPoliciesResultFiltersOutputReference.prototype, "megabitsPerSecond", {
        // megabits_per_second - computed: true, optional: false, required: false
        get: function () {
            return this.getListAttribute('megabits_per_second');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareNotificationPoliciesResultFiltersOutputReference.prototype, "newHealth", {
        // new_health - computed: true, optional: false, required: false
        get: function () {
            return this.getListAttribute('new_health');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareNotificationPoliciesResultFiltersOutputReference.prototype, "newStatus", {
        // new_status - computed: true, optional: false, required: false
        get: function () {
            return this.getListAttribute('new_status');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareNotificationPoliciesResultFiltersOutputReference.prototype, "packetsPerSecond", {
        // packets_per_second - computed: true, optional: false, required: false
        get: function () {
            return this.getListAttribute('packets_per_second');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareNotificationPoliciesResultFiltersOutputReference.prototype, "poolId", {
        // pool_id - computed: true, optional: false, required: false
        get: function () {
            return this.getListAttribute('pool_id');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareNotificationPoliciesResultFiltersOutputReference.prototype, "popNames", {
        // pop_names - computed: true, optional: false, required: false
        get: function () {
            return this.getListAttribute('pop_names');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareNotificationPoliciesResultFiltersOutputReference.prototype, "product", {
        // product - computed: true, optional: false, required: false
        get: function () {
            return this.getListAttribute('product');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareNotificationPoliciesResultFiltersOutputReference.prototype, "projectId", {
        // project_id - computed: true, optional: false, required: false
        get: function () {
            return this.getListAttribute('project_id');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareNotificationPoliciesResultFiltersOutputReference.prototype, "protocol", {
        // protocol - computed: true, optional: false, required: false
        get: function () {
            return this.getListAttribute('protocol');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareNotificationPoliciesResultFiltersOutputReference.prototype, "queryTag", {
        // query_tag - computed: true, optional: false, required: false
        get: function () {
            return this.getListAttribute('query_tag');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareNotificationPoliciesResultFiltersOutputReference.prototype, "requestsPerSecond", {
        // requests_per_second - computed: true, optional: false, required: false
        get: function () {
            return this.getListAttribute('requests_per_second');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareNotificationPoliciesResultFiltersOutputReference.prototype, "selectors", {
        // selectors - computed: true, optional: false, required: false
        get: function () {
            return this.getListAttribute('selectors');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareNotificationPoliciesResultFiltersOutputReference.prototype, "services", {
        // services - computed: true, optional: false, required: false
        get: function () {
            return this.getListAttribute('services');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareNotificationPoliciesResultFiltersOutputReference.prototype, "slo", {
        // slo - computed: true, optional: false, required: false
        get: function () {
            return this.getListAttribute('slo');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareNotificationPoliciesResultFiltersOutputReference.prototype, "status", {
        // status - computed: true, optional: false, required: false
        get: function () {
            return this.getListAttribute('status');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareNotificationPoliciesResultFiltersOutputReference.prototype, "targetHostname", {
        // target_hostname - computed: true, optional: false, required: false
        get: function () {
            return this.getListAttribute('target_hostname');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareNotificationPoliciesResultFiltersOutputReference.prototype, "targetIp", {
        // target_ip - computed: true, optional: false, required: false
        get: function () {
            return this.getListAttribute('target_ip');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareNotificationPoliciesResultFiltersOutputReference.prototype, "targetZoneName", {
        // target_zone_name - computed: true, optional: false, required: false
        get: function () {
            return this.getListAttribute('target_zone_name');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareNotificationPoliciesResultFiltersOutputReference.prototype, "trafficExclusions", {
        // traffic_exclusions - computed: true, optional: false, required: false
        get: function () {
            return this.getListAttribute('traffic_exclusions');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareNotificationPoliciesResultFiltersOutputReference.prototype, "tunnelId", {
        // tunnel_id - computed: true, optional: false, required: false
        get: function () {
            return this.getListAttribute('tunnel_id');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareNotificationPoliciesResultFiltersOutputReference.prototype, "tunnelName", {
        // tunnel_name - computed: true, optional: false, required: false
        get: function () {
            return this.getListAttribute('tunnel_name');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareNotificationPoliciesResultFiltersOutputReference.prototype, "type", {
        // type - computed: true, optional: false, required: false
        get: function () {
            return this.getListAttribute('type');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareNotificationPoliciesResultFiltersOutputReference.prototype, "where", {
        // where - computed: true, optional: false, required: false
        get: function () {
            return this.getListAttribute('where');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareNotificationPoliciesResultFiltersOutputReference.prototype, "zones", {
        // zones - computed: true, optional: false, required: false
        get: function () {
            return this.getListAttribute('zones');
        },
        enumerable: false,
        configurable: true
    });
    return DataCloudflareNotificationPoliciesResultFiltersOutputReference;
}(cdktf.ComplexObject));
exports.DataCloudflareNotificationPoliciesResultFiltersOutputReference = DataCloudflareNotificationPoliciesResultFiltersOutputReference;
function dataCloudflareNotificationPoliciesResultMechanismsEmailToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {};
}
function dataCloudflareNotificationPoliciesResultMechanismsEmailToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    var attrs = {};
    return attrs;
}
var DataCloudflareNotificationPoliciesResultMechanismsEmailOutputReference = /** @class */ (function (_super) {
    __extends(DataCloudflareNotificationPoliciesResultMechanismsEmailOutputReference, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    function DataCloudflareNotificationPoliciesResultMechanismsEmailOutputReference(terraformResource, terraformAttribute, complexObjectIndex, complexObjectIsFromSet) {
        var _this = _super.call(this, terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex) || this;
        _this.isEmptyObject = false;
        return _this;
    }
    Object.defineProperty(DataCloudflareNotificationPoliciesResultMechanismsEmailOutputReference.prototype, "internalValue", {
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
    Object.defineProperty(DataCloudflareNotificationPoliciesResultMechanismsEmailOutputReference.prototype, "id", {
        // id - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('id');
        },
        enumerable: false,
        configurable: true
    });
    return DataCloudflareNotificationPoliciesResultMechanismsEmailOutputReference;
}(cdktf.ComplexObject));
exports.DataCloudflareNotificationPoliciesResultMechanismsEmailOutputReference = DataCloudflareNotificationPoliciesResultMechanismsEmailOutputReference;
var DataCloudflareNotificationPoliciesResultMechanismsEmailList = /** @class */ (function (_super) {
    __extends(DataCloudflareNotificationPoliciesResultMechanismsEmailList, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    function DataCloudflareNotificationPoliciesResultMechanismsEmailList(terraformResource, terraformAttribute, wrapsSet) {
        var _this = _super.call(this, terraformResource, terraformAttribute, wrapsSet) || this;
        _this.terraformResource = terraformResource;
        _this.terraformAttribute = terraformAttribute;
        _this.wrapsSet = wrapsSet;
        return _this;
    }
    /**
    * @param index the index of the item to return
    */
    DataCloudflareNotificationPoliciesResultMechanismsEmailList.prototype.get = function (index) {
        return new DataCloudflareNotificationPoliciesResultMechanismsEmailOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
    };
    return DataCloudflareNotificationPoliciesResultMechanismsEmailList;
}(cdktf.ComplexList));
exports.DataCloudflareNotificationPoliciesResultMechanismsEmailList = DataCloudflareNotificationPoliciesResultMechanismsEmailList;
function dataCloudflareNotificationPoliciesResultMechanismsPagerdutyToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {};
}
function dataCloudflareNotificationPoliciesResultMechanismsPagerdutyToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    var attrs = {};
    return attrs;
}
var DataCloudflareNotificationPoliciesResultMechanismsPagerdutyOutputReference = /** @class */ (function (_super) {
    __extends(DataCloudflareNotificationPoliciesResultMechanismsPagerdutyOutputReference, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    function DataCloudflareNotificationPoliciesResultMechanismsPagerdutyOutputReference(terraformResource, terraformAttribute, complexObjectIndex, complexObjectIsFromSet) {
        var _this = _super.call(this, terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex) || this;
        _this.isEmptyObject = false;
        return _this;
    }
    Object.defineProperty(DataCloudflareNotificationPoliciesResultMechanismsPagerdutyOutputReference.prototype, "internalValue", {
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
    Object.defineProperty(DataCloudflareNotificationPoliciesResultMechanismsPagerdutyOutputReference.prototype, "id", {
        // id - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('id');
        },
        enumerable: false,
        configurable: true
    });
    return DataCloudflareNotificationPoliciesResultMechanismsPagerdutyOutputReference;
}(cdktf.ComplexObject));
exports.DataCloudflareNotificationPoliciesResultMechanismsPagerdutyOutputReference = DataCloudflareNotificationPoliciesResultMechanismsPagerdutyOutputReference;
var DataCloudflareNotificationPoliciesResultMechanismsPagerdutyList = /** @class */ (function (_super) {
    __extends(DataCloudflareNotificationPoliciesResultMechanismsPagerdutyList, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    function DataCloudflareNotificationPoliciesResultMechanismsPagerdutyList(terraformResource, terraformAttribute, wrapsSet) {
        var _this = _super.call(this, terraformResource, terraformAttribute, wrapsSet) || this;
        _this.terraformResource = terraformResource;
        _this.terraformAttribute = terraformAttribute;
        _this.wrapsSet = wrapsSet;
        return _this;
    }
    /**
    * @param index the index of the item to return
    */
    DataCloudflareNotificationPoliciesResultMechanismsPagerdutyList.prototype.get = function (index) {
        return new DataCloudflareNotificationPoliciesResultMechanismsPagerdutyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
    };
    return DataCloudflareNotificationPoliciesResultMechanismsPagerdutyList;
}(cdktf.ComplexList));
exports.DataCloudflareNotificationPoliciesResultMechanismsPagerdutyList = DataCloudflareNotificationPoliciesResultMechanismsPagerdutyList;
function dataCloudflareNotificationPoliciesResultMechanismsWebhooksToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {};
}
function dataCloudflareNotificationPoliciesResultMechanismsWebhooksToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    var attrs = {};
    return attrs;
}
var DataCloudflareNotificationPoliciesResultMechanismsWebhooksOutputReference = /** @class */ (function (_super) {
    __extends(DataCloudflareNotificationPoliciesResultMechanismsWebhooksOutputReference, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    function DataCloudflareNotificationPoliciesResultMechanismsWebhooksOutputReference(terraformResource, terraformAttribute, complexObjectIndex, complexObjectIsFromSet) {
        var _this = _super.call(this, terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex) || this;
        _this.isEmptyObject = false;
        return _this;
    }
    Object.defineProperty(DataCloudflareNotificationPoliciesResultMechanismsWebhooksOutputReference.prototype, "internalValue", {
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
    Object.defineProperty(DataCloudflareNotificationPoliciesResultMechanismsWebhooksOutputReference.prototype, "id", {
        // id - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('id');
        },
        enumerable: false,
        configurable: true
    });
    return DataCloudflareNotificationPoliciesResultMechanismsWebhooksOutputReference;
}(cdktf.ComplexObject));
exports.DataCloudflareNotificationPoliciesResultMechanismsWebhooksOutputReference = DataCloudflareNotificationPoliciesResultMechanismsWebhooksOutputReference;
var DataCloudflareNotificationPoliciesResultMechanismsWebhooksList = /** @class */ (function (_super) {
    __extends(DataCloudflareNotificationPoliciesResultMechanismsWebhooksList, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    function DataCloudflareNotificationPoliciesResultMechanismsWebhooksList(terraformResource, terraformAttribute, wrapsSet) {
        var _this = _super.call(this, terraformResource, terraformAttribute, wrapsSet) || this;
        _this.terraformResource = terraformResource;
        _this.terraformAttribute = terraformAttribute;
        _this.wrapsSet = wrapsSet;
        return _this;
    }
    /**
    * @param index the index of the item to return
    */
    DataCloudflareNotificationPoliciesResultMechanismsWebhooksList.prototype.get = function (index) {
        return new DataCloudflareNotificationPoliciesResultMechanismsWebhooksOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
    };
    return DataCloudflareNotificationPoliciesResultMechanismsWebhooksList;
}(cdktf.ComplexList));
exports.DataCloudflareNotificationPoliciesResultMechanismsWebhooksList = DataCloudflareNotificationPoliciesResultMechanismsWebhooksList;
function dataCloudflareNotificationPoliciesResultMechanismsToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {};
}
function dataCloudflareNotificationPoliciesResultMechanismsToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    var attrs = {};
    return attrs;
}
var DataCloudflareNotificationPoliciesResultMechanismsOutputReference = /** @class */ (function (_super) {
    __extends(DataCloudflareNotificationPoliciesResultMechanismsOutputReference, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    function DataCloudflareNotificationPoliciesResultMechanismsOutputReference(terraformResource, terraformAttribute) {
        var _this = _super.call(this, terraformResource, terraformAttribute, false) || this;
        _this.isEmptyObject = false;
        // email - computed: true, optional: false, required: false
        _this._email = new DataCloudflareNotificationPoliciesResultMechanismsEmailList(_this, "email", false);
        // pagerduty - computed: true, optional: false, required: false
        _this._pagerduty = new DataCloudflareNotificationPoliciesResultMechanismsPagerdutyList(_this, "pagerduty", false);
        // webhooks - computed: true, optional: false, required: false
        _this._webhooks = new DataCloudflareNotificationPoliciesResultMechanismsWebhooksList(_this, "webhooks", false);
        return _this;
    }
    Object.defineProperty(DataCloudflareNotificationPoliciesResultMechanismsOutputReference.prototype, "internalValue", {
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
    Object.defineProperty(DataCloudflareNotificationPoliciesResultMechanismsOutputReference.prototype, "email", {
        get: function () {
            return this._email;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareNotificationPoliciesResultMechanismsOutputReference.prototype, "pagerduty", {
        get: function () {
            return this._pagerduty;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareNotificationPoliciesResultMechanismsOutputReference.prototype, "webhooks", {
        get: function () {
            return this._webhooks;
        },
        enumerable: false,
        configurable: true
    });
    return DataCloudflareNotificationPoliciesResultMechanismsOutputReference;
}(cdktf.ComplexObject));
exports.DataCloudflareNotificationPoliciesResultMechanismsOutputReference = DataCloudflareNotificationPoliciesResultMechanismsOutputReference;
function dataCloudflareNotificationPoliciesResultToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {};
}
function dataCloudflareNotificationPoliciesResultToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    var attrs = {};
    return attrs;
}
var DataCloudflareNotificationPoliciesResultOutputReference = /** @class */ (function (_super) {
    __extends(DataCloudflareNotificationPoliciesResultOutputReference, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    function DataCloudflareNotificationPoliciesResultOutputReference(terraformResource, terraformAttribute, complexObjectIndex, complexObjectIsFromSet) {
        var _this = _super.call(this, terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex) || this;
        _this.isEmptyObject = false;
        // filters - computed: true, optional: false, required: false
        _this._filters = new DataCloudflareNotificationPoliciesResultFiltersOutputReference(_this, "filters");
        // mechanisms - computed: true, optional: false, required: false
        _this._mechanisms = new DataCloudflareNotificationPoliciesResultMechanismsOutputReference(_this, "mechanisms");
        return _this;
    }
    Object.defineProperty(DataCloudflareNotificationPoliciesResultOutputReference.prototype, "internalValue", {
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
    Object.defineProperty(DataCloudflareNotificationPoliciesResultOutputReference.prototype, "alertInterval", {
        // alert_interval - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('alert_interval');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareNotificationPoliciesResultOutputReference.prototype, "alertType", {
        // alert_type - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('alert_type');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareNotificationPoliciesResultOutputReference.prototype, "created", {
        // created - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('created');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareNotificationPoliciesResultOutputReference.prototype, "description", {
        // description - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('description');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareNotificationPoliciesResultOutputReference.prototype, "enabled", {
        // enabled - computed: true, optional: false, required: false
        get: function () {
            return this.getBooleanAttribute('enabled');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareNotificationPoliciesResultOutputReference.prototype, "filters", {
        get: function () {
            return this._filters;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareNotificationPoliciesResultOutputReference.prototype, "id", {
        // id - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('id');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareNotificationPoliciesResultOutputReference.prototype, "mechanisms", {
        get: function () {
            return this._mechanisms;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareNotificationPoliciesResultOutputReference.prototype, "modified", {
        // modified - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('modified');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareNotificationPoliciesResultOutputReference.prototype, "name", {
        // name - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('name');
        },
        enumerable: false,
        configurable: true
    });
    return DataCloudflareNotificationPoliciesResultOutputReference;
}(cdktf.ComplexObject));
exports.DataCloudflareNotificationPoliciesResultOutputReference = DataCloudflareNotificationPoliciesResultOutputReference;
var DataCloudflareNotificationPoliciesResultList = /** @class */ (function (_super) {
    __extends(DataCloudflareNotificationPoliciesResultList, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    function DataCloudflareNotificationPoliciesResultList(terraformResource, terraformAttribute, wrapsSet) {
        var _this = _super.call(this, terraformResource, terraformAttribute, wrapsSet) || this;
        _this.terraformResource = terraformResource;
        _this.terraformAttribute = terraformAttribute;
        _this.wrapsSet = wrapsSet;
        return _this;
    }
    /**
    * @param index the index of the item to return
    */
    DataCloudflareNotificationPoliciesResultList.prototype.get = function (index) {
        return new DataCloudflareNotificationPoliciesResultOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
    };
    return DataCloudflareNotificationPoliciesResultList;
}(cdktf.ComplexList));
exports.DataCloudflareNotificationPoliciesResultList = DataCloudflareNotificationPoliciesResultList;
/**
* Represents a {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/notification_policies cloudflare_notification_policies}
*/
var DataCloudflareNotificationPolicies = /** @class */ (function (_super) {
    __extends(DataCloudflareNotificationPolicies, _super);
    // ===========
    // INITIALIZER
    // ===========
    /**
    * Create a new {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/notification_policies cloudflare_notification_policies} Data Source
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options DataCloudflareNotificationPoliciesConfig = {}
    */
    function DataCloudflareNotificationPolicies(scope, id, config) {
        if (config === void 0) { config = {}; }
        var _this = _super.call(this, scope, id, {
            terraformResourceType: 'cloudflare_notification_policies',
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
        _this._result = new DataCloudflareNotificationPoliciesResultList(_this, "result", false);
        _this._accountId = config.accountId;
        _this._maxItems = config.maxItems;
        return _this;
    }
    // ==============
    // STATIC Methods
    // ==============
    /**
    * Generates CDKTF code for importing a DataCloudflareNotificationPolicies resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the DataCloudflareNotificationPolicies to import
    * @param importFromId The id of the existing DataCloudflareNotificationPolicies that should be imported. Refer to the {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/notification_policies#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the DataCloudflareNotificationPolicies to import is found
    */
    DataCloudflareNotificationPolicies.generateConfigForImport = function (scope, importToId, importFromId, provider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "cloudflare_notification_policies", importId: importFromId, provider: provider });
    };
    Object.defineProperty(DataCloudflareNotificationPolicies.prototype, "accountId", {
        get: function () {
            return this.getStringAttribute('account_id');
        },
        set: function (value) {
            this._accountId = value;
        },
        enumerable: false,
        configurable: true
    });
    DataCloudflareNotificationPolicies.prototype.resetAccountId = function () {
        this._accountId = undefined;
    };
    Object.defineProperty(DataCloudflareNotificationPolicies.prototype, "accountIdInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._accountId;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareNotificationPolicies.prototype, "maxItems", {
        get: function () {
            return this.getNumberAttribute('max_items');
        },
        set: function (value) {
            this._maxItems = value;
        },
        enumerable: false,
        configurable: true
    });
    DataCloudflareNotificationPolicies.prototype.resetMaxItems = function () {
        this._maxItems = undefined;
    };
    Object.defineProperty(DataCloudflareNotificationPolicies.prototype, "maxItemsInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._maxItems;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareNotificationPolicies.prototype, "result", {
        get: function () {
            return this._result;
        },
        enumerable: false,
        configurable: true
    });
    // =========
    // SYNTHESIS
    // =========
    DataCloudflareNotificationPolicies.prototype.synthesizeAttributes = function () {
        return {
            account_id: cdktf.stringToTerraform(this._accountId),
            max_items: cdktf.numberToTerraform(this._maxItems),
        };
    };
    DataCloudflareNotificationPolicies.prototype.synthesizeHclAttributes = function () {
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
    DataCloudflareNotificationPolicies.tfResourceType = "cloudflare_notification_policies";
    return DataCloudflareNotificationPolicies;
}(cdktf.TerraformDataSource));
exports.DataCloudflareNotificationPolicies = DataCloudflareNotificationPolicies;
