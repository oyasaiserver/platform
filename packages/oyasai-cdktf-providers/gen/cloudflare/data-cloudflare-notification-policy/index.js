"use strict";
// https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/notification_policy
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
exports.DataCloudflareNotificationPolicy = exports.DataCloudflareNotificationPolicyMechanismsOutputReference = exports.DataCloudflareNotificationPolicyMechanismsWebhooksList = exports.DataCloudflareNotificationPolicyMechanismsWebhooksOutputReference = exports.DataCloudflareNotificationPolicyMechanismsPagerdutyList = exports.DataCloudflareNotificationPolicyMechanismsPagerdutyOutputReference = exports.DataCloudflareNotificationPolicyMechanismsEmailList = exports.DataCloudflareNotificationPolicyMechanismsEmailOutputReference = exports.DataCloudflareNotificationPolicyFiltersOutputReference = void 0;
exports.dataCloudflareNotificationPolicyFiltersToTerraform = dataCloudflareNotificationPolicyFiltersToTerraform;
exports.dataCloudflareNotificationPolicyFiltersToHclTerraform = dataCloudflareNotificationPolicyFiltersToHclTerraform;
exports.dataCloudflareNotificationPolicyMechanismsEmailToTerraform = dataCloudflareNotificationPolicyMechanismsEmailToTerraform;
exports.dataCloudflareNotificationPolicyMechanismsEmailToHclTerraform = dataCloudflareNotificationPolicyMechanismsEmailToHclTerraform;
exports.dataCloudflareNotificationPolicyMechanismsPagerdutyToTerraform = dataCloudflareNotificationPolicyMechanismsPagerdutyToTerraform;
exports.dataCloudflareNotificationPolicyMechanismsPagerdutyToHclTerraform = dataCloudflareNotificationPolicyMechanismsPagerdutyToHclTerraform;
exports.dataCloudflareNotificationPolicyMechanismsWebhooksToTerraform = dataCloudflareNotificationPolicyMechanismsWebhooksToTerraform;
exports.dataCloudflareNotificationPolicyMechanismsWebhooksToHclTerraform = dataCloudflareNotificationPolicyMechanismsWebhooksToHclTerraform;
exports.dataCloudflareNotificationPolicyMechanismsToTerraform = dataCloudflareNotificationPolicyMechanismsToTerraform;
exports.dataCloudflareNotificationPolicyMechanismsToHclTerraform = dataCloudflareNotificationPolicyMechanismsToHclTerraform;
var cdktf = require("cdktf");
function dataCloudflareNotificationPolicyFiltersToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {};
}
function dataCloudflareNotificationPolicyFiltersToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    var attrs = {};
    return attrs;
}
var DataCloudflareNotificationPolicyFiltersOutputReference = /** @class */ (function (_super) {
    __extends(DataCloudflareNotificationPolicyFiltersOutputReference, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    function DataCloudflareNotificationPolicyFiltersOutputReference(terraformResource, terraformAttribute) {
        var _this = _super.call(this, terraformResource, terraformAttribute, false) || this;
        _this.isEmptyObject = false;
        return _this;
    }
    Object.defineProperty(DataCloudflareNotificationPolicyFiltersOutputReference.prototype, "internalValue", {
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
    Object.defineProperty(DataCloudflareNotificationPolicyFiltersOutputReference.prototype, "actions", {
        // actions - computed: true, optional: false, required: false
        get: function () {
            return this.getListAttribute('actions');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareNotificationPolicyFiltersOutputReference.prototype, "affectedAsns", {
        // affected_asns - computed: true, optional: false, required: false
        get: function () {
            return this.getListAttribute('affected_asns');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareNotificationPolicyFiltersOutputReference.prototype, "affectedComponents", {
        // affected_components - computed: true, optional: false, required: false
        get: function () {
            return this.getListAttribute('affected_components');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareNotificationPolicyFiltersOutputReference.prototype, "affectedLocations", {
        // affected_locations - computed: true, optional: false, required: false
        get: function () {
            return this.getListAttribute('affected_locations');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareNotificationPolicyFiltersOutputReference.prototype, "airportCode", {
        // airport_code - computed: true, optional: false, required: false
        get: function () {
            return this.getListAttribute('airport_code');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareNotificationPolicyFiltersOutputReference.prototype, "alertTriggerPreferences", {
        // alert_trigger_preferences - computed: true, optional: false, required: false
        get: function () {
            return this.getListAttribute('alert_trigger_preferences');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareNotificationPolicyFiltersOutputReference.prototype, "alertTriggerPreferencesValue", {
        // alert_trigger_preferences_value - computed: true, optional: false, required: false
        get: function () {
            return this.getListAttribute('alert_trigger_preferences_value');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareNotificationPolicyFiltersOutputReference.prototype, "enabled", {
        // enabled - computed: true, optional: false, required: false
        get: function () {
            return this.getListAttribute('enabled');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareNotificationPolicyFiltersOutputReference.prototype, "environment", {
        // environment - computed: true, optional: false, required: false
        get: function () {
            return this.getListAttribute('environment');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareNotificationPolicyFiltersOutputReference.prototype, "event", {
        // event - computed: true, optional: false, required: false
        get: function () {
            return this.getListAttribute('event');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareNotificationPolicyFiltersOutputReference.prototype, "eventSource", {
        // event_source - computed: true, optional: false, required: false
        get: function () {
            return this.getListAttribute('event_source');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareNotificationPolicyFiltersOutputReference.prototype, "eventType", {
        // event_type - computed: true, optional: false, required: false
        get: function () {
            return this.getListAttribute('event_type');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareNotificationPolicyFiltersOutputReference.prototype, "groupBy", {
        // group_by - computed: true, optional: false, required: false
        get: function () {
            return this.getListAttribute('group_by');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareNotificationPolicyFiltersOutputReference.prototype, "healthCheckId", {
        // health_check_id - computed: true, optional: false, required: false
        get: function () {
            return this.getListAttribute('health_check_id');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareNotificationPolicyFiltersOutputReference.prototype, "incidentImpact", {
        // incident_impact - computed: true, optional: false, required: false
        get: function () {
            return this.getListAttribute('incident_impact');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareNotificationPolicyFiltersOutputReference.prototype, "inputId", {
        // input_id - computed: true, optional: false, required: false
        get: function () {
            return this.getListAttribute('input_id');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareNotificationPolicyFiltersOutputReference.prototype, "insightClass", {
        // insight_class - computed: true, optional: false, required: false
        get: function () {
            return this.getListAttribute('insight_class');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareNotificationPolicyFiltersOutputReference.prototype, "limit", {
        // limit - computed: true, optional: false, required: false
        get: function () {
            return this.getListAttribute('limit');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareNotificationPolicyFiltersOutputReference.prototype, "logoTag", {
        // logo_tag - computed: true, optional: false, required: false
        get: function () {
            return this.getListAttribute('logo_tag');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareNotificationPolicyFiltersOutputReference.prototype, "megabitsPerSecond", {
        // megabits_per_second - computed: true, optional: false, required: false
        get: function () {
            return this.getListAttribute('megabits_per_second');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareNotificationPolicyFiltersOutputReference.prototype, "newHealth", {
        // new_health - computed: true, optional: false, required: false
        get: function () {
            return this.getListAttribute('new_health');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareNotificationPolicyFiltersOutputReference.prototype, "newStatus", {
        // new_status - computed: true, optional: false, required: false
        get: function () {
            return this.getListAttribute('new_status');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareNotificationPolicyFiltersOutputReference.prototype, "packetsPerSecond", {
        // packets_per_second - computed: true, optional: false, required: false
        get: function () {
            return this.getListAttribute('packets_per_second');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareNotificationPolicyFiltersOutputReference.prototype, "poolId", {
        // pool_id - computed: true, optional: false, required: false
        get: function () {
            return this.getListAttribute('pool_id');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareNotificationPolicyFiltersOutputReference.prototype, "popNames", {
        // pop_names - computed: true, optional: false, required: false
        get: function () {
            return this.getListAttribute('pop_names');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareNotificationPolicyFiltersOutputReference.prototype, "product", {
        // product - computed: true, optional: false, required: false
        get: function () {
            return this.getListAttribute('product');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareNotificationPolicyFiltersOutputReference.prototype, "projectId", {
        // project_id - computed: true, optional: false, required: false
        get: function () {
            return this.getListAttribute('project_id');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareNotificationPolicyFiltersOutputReference.prototype, "protocol", {
        // protocol - computed: true, optional: false, required: false
        get: function () {
            return this.getListAttribute('protocol');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareNotificationPolicyFiltersOutputReference.prototype, "queryTag", {
        // query_tag - computed: true, optional: false, required: false
        get: function () {
            return this.getListAttribute('query_tag');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareNotificationPolicyFiltersOutputReference.prototype, "requestsPerSecond", {
        // requests_per_second - computed: true, optional: false, required: false
        get: function () {
            return this.getListAttribute('requests_per_second');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareNotificationPolicyFiltersOutputReference.prototype, "selectors", {
        // selectors - computed: true, optional: false, required: false
        get: function () {
            return this.getListAttribute('selectors');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareNotificationPolicyFiltersOutputReference.prototype, "services", {
        // services - computed: true, optional: false, required: false
        get: function () {
            return this.getListAttribute('services');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareNotificationPolicyFiltersOutputReference.prototype, "slo", {
        // slo - computed: true, optional: false, required: false
        get: function () {
            return this.getListAttribute('slo');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareNotificationPolicyFiltersOutputReference.prototype, "status", {
        // status - computed: true, optional: false, required: false
        get: function () {
            return this.getListAttribute('status');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareNotificationPolicyFiltersOutputReference.prototype, "targetHostname", {
        // target_hostname - computed: true, optional: false, required: false
        get: function () {
            return this.getListAttribute('target_hostname');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareNotificationPolicyFiltersOutputReference.prototype, "targetIp", {
        // target_ip - computed: true, optional: false, required: false
        get: function () {
            return this.getListAttribute('target_ip');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareNotificationPolicyFiltersOutputReference.prototype, "targetZoneName", {
        // target_zone_name - computed: true, optional: false, required: false
        get: function () {
            return this.getListAttribute('target_zone_name');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareNotificationPolicyFiltersOutputReference.prototype, "trafficExclusions", {
        // traffic_exclusions - computed: true, optional: false, required: false
        get: function () {
            return this.getListAttribute('traffic_exclusions');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareNotificationPolicyFiltersOutputReference.prototype, "tunnelId", {
        // tunnel_id - computed: true, optional: false, required: false
        get: function () {
            return this.getListAttribute('tunnel_id');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareNotificationPolicyFiltersOutputReference.prototype, "tunnelName", {
        // tunnel_name - computed: true, optional: false, required: false
        get: function () {
            return this.getListAttribute('tunnel_name');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareNotificationPolicyFiltersOutputReference.prototype, "type", {
        // type - computed: true, optional: false, required: false
        get: function () {
            return this.getListAttribute('type');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareNotificationPolicyFiltersOutputReference.prototype, "where", {
        // where - computed: true, optional: false, required: false
        get: function () {
            return this.getListAttribute('where');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareNotificationPolicyFiltersOutputReference.prototype, "zones", {
        // zones - computed: true, optional: false, required: false
        get: function () {
            return this.getListAttribute('zones');
        },
        enumerable: false,
        configurable: true
    });
    return DataCloudflareNotificationPolicyFiltersOutputReference;
}(cdktf.ComplexObject));
exports.DataCloudflareNotificationPolicyFiltersOutputReference = DataCloudflareNotificationPolicyFiltersOutputReference;
function dataCloudflareNotificationPolicyMechanismsEmailToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {};
}
function dataCloudflareNotificationPolicyMechanismsEmailToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    var attrs = {};
    return attrs;
}
var DataCloudflareNotificationPolicyMechanismsEmailOutputReference = /** @class */ (function (_super) {
    __extends(DataCloudflareNotificationPolicyMechanismsEmailOutputReference, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    function DataCloudflareNotificationPolicyMechanismsEmailOutputReference(terraformResource, terraformAttribute, complexObjectIndex, complexObjectIsFromSet) {
        var _this = _super.call(this, terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex) || this;
        _this.isEmptyObject = false;
        return _this;
    }
    Object.defineProperty(DataCloudflareNotificationPolicyMechanismsEmailOutputReference.prototype, "internalValue", {
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
    Object.defineProperty(DataCloudflareNotificationPolicyMechanismsEmailOutputReference.prototype, "id", {
        // id - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('id');
        },
        enumerable: false,
        configurable: true
    });
    return DataCloudflareNotificationPolicyMechanismsEmailOutputReference;
}(cdktf.ComplexObject));
exports.DataCloudflareNotificationPolicyMechanismsEmailOutputReference = DataCloudflareNotificationPolicyMechanismsEmailOutputReference;
var DataCloudflareNotificationPolicyMechanismsEmailList = /** @class */ (function (_super) {
    __extends(DataCloudflareNotificationPolicyMechanismsEmailList, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    function DataCloudflareNotificationPolicyMechanismsEmailList(terraformResource, terraformAttribute, wrapsSet) {
        var _this = _super.call(this, terraformResource, terraformAttribute, wrapsSet) || this;
        _this.terraformResource = terraformResource;
        _this.terraformAttribute = terraformAttribute;
        _this.wrapsSet = wrapsSet;
        return _this;
    }
    /**
    * @param index the index of the item to return
    */
    DataCloudflareNotificationPolicyMechanismsEmailList.prototype.get = function (index) {
        return new DataCloudflareNotificationPolicyMechanismsEmailOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
    };
    return DataCloudflareNotificationPolicyMechanismsEmailList;
}(cdktf.ComplexList));
exports.DataCloudflareNotificationPolicyMechanismsEmailList = DataCloudflareNotificationPolicyMechanismsEmailList;
function dataCloudflareNotificationPolicyMechanismsPagerdutyToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {};
}
function dataCloudflareNotificationPolicyMechanismsPagerdutyToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    var attrs = {};
    return attrs;
}
var DataCloudflareNotificationPolicyMechanismsPagerdutyOutputReference = /** @class */ (function (_super) {
    __extends(DataCloudflareNotificationPolicyMechanismsPagerdutyOutputReference, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    function DataCloudflareNotificationPolicyMechanismsPagerdutyOutputReference(terraformResource, terraformAttribute, complexObjectIndex, complexObjectIsFromSet) {
        var _this = _super.call(this, terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex) || this;
        _this.isEmptyObject = false;
        return _this;
    }
    Object.defineProperty(DataCloudflareNotificationPolicyMechanismsPagerdutyOutputReference.prototype, "internalValue", {
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
    Object.defineProperty(DataCloudflareNotificationPolicyMechanismsPagerdutyOutputReference.prototype, "id", {
        // id - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('id');
        },
        enumerable: false,
        configurable: true
    });
    return DataCloudflareNotificationPolicyMechanismsPagerdutyOutputReference;
}(cdktf.ComplexObject));
exports.DataCloudflareNotificationPolicyMechanismsPagerdutyOutputReference = DataCloudflareNotificationPolicyMechanismsPagerdutyOutputReference;
var DataCloudflareNotificationPolicyMechanismsPagerdutyList = /** @class */ (function (_super) {
    __extends(DataCloudflareNotificationPolicyMechanismsPagerdutyList, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    function DataCloudflareNotificationPolicyMechanismsPagerdutyList(terraformResource, terraformAttribute, wrapsSet) {
        var _this = _super.call(this, terraformResource, terraformAttribute, wrapsSet) || this;
        _this.terraformResource = terraformResource;
        _this.terraformAttribute = terraformAttribute;
        _this.wrapsSet = wrapsSet;
        return _this;
    }
    /**
    * @param index the index of the item to return
    */
    DataCloudflareNotificationPolicyMechanismsPagerdutyList.prototype.get = function (index) {
        return new DataCloudflareNotificationPolicyMechanismsPagerdutyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
    };
    return DataCloudflareNotificationPolicyMechanismsPagerdutyList;
}(cdktf.ComplexList));
exports.DataCloudflareNotificationPolicyMechanismsPagerdutyList = DataCloudflareNotificationPolicyMechanismsPagerdutyList;
function dataCloudflareNotificationPolicyMechanismsWebhooksToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {};
}
function dataCloudflareNotificationPolicyMechanismsWebhooksToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    var attrs = {};
    return attrs;
}
var DataCloudflareNotificationPolicyMechanismsWebhooksOutputReference = /** @class */ (function (_super) {
    __extends(DataCloudflareNotificationPolicyMechanismsWebhooksOutputReference, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    function DataCloudflareNotificationPolicyMechanismsWebhooksOutputReference(terraformResource, terraformAttribute, complexObjectIndex, complexObjectIsFromSet) {
        var _this = _super.call(this, terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex) || this;
        _this.isEmptyObject = false;
        return _this;
    }
    Object.defineProperty(DataCloudflareNotificationPolicyMechanismsWebhooksOutputReference.prototype, "internalValue", {
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
    Object.defineProperty(DataCloudflareNotificationPolicyMechanismsWebhooksOutputReference.prototype, "id", {
        // id - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('id');
        },
        enumerable: false,
        configurable: true
    });
    return DataCloudflareNotificationPolicyMechanismsWebhooksOutputReference;
}(cdktf.ComplexObject));
exports.DataCloudflareNotificationPolicyMechanismsWebhooksOutputReference = DataCloudflareNotificationPolicyMechanismsWebhooksOutputReference;
var DataCloudflareNotificationPolicyMechanismsWebhooksList = /** @class */ (function (_super) {
    __extends(DataCloudflareNotificationPolicyMechanismsWebhooksList, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    function DataCloudflareNotificationPolicyMechanismsWebhooksList(terraformResource, terraformAttribute, wrapsSet) {
        var _this = _super.call(this, terraformResource, terraformAttribute, wrapsSet) || this;
        _this.terraformResource = terraformResource;
        _this.terraformAttribute = terraformAttribute;
        _this.wrapsSet = wrapsSet;
        return _this;
    }
    /**
    * @param index the index of the item to return
    */
    DataCloudflareNotificationPolicyMechanismsWebhooksList.prototype.get = function (index) {
        return new DataCloudflareNotificationPolicyMechanismsWebhooksOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
    };
    return DataCloudflareNotificationPolicyMechanismsWebhooksList;
}(cdktf.ComplexList));
exports.DataCloudflareNotificationPolicyMechanismsWebhooksList = DataCloudflareNotificationPolicyMechanismsWebhooksList;
function dataCloudflareNotificationPolicyMechanismsToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {};
}
function dataCloudflareNotificationPolicyMechanismsToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    var attrs = {};
    return attrs;
}
var DataCloudflareNotificationPolicyMechanismsOutputReference = /** @class */ (function (_super) {
    __extends(DataCloudflareNotificationPolicyMechanismsOutputReference, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    function DataCloudflareNotificationPolicyMechanismsOutputReference(terraformResource, terraformAttribute) {
        var _this = _super.call(this, terraformResource, terraformAttribute, false) || this;
        _this.isEmptyObject = false;
        // email - computed: true, optional: false, required: false
        _this._email = new DataCloudflareNotificationPolicyMechanismsEmailList(_this, "email", false);
        // pagerduty - computed: true, optional: false, required: false
        _this._pagerduty = new DataCloudflareNotificationPolicyMechanismsPagerdutyList(_this, "pagerduty", false);
        // webhooks - computed: true, optional: false, required: false
        _this._webhooks = new DataCloudflareNotificationPolicyMechanismsWebhooksList(_this, "webhooks", false);
        return _this;
    }
    Object.defineProperty(DataCloudflareNotificationPolicyMechanismsOutputReference.prototype, "internalValue", {
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
    Object.defineProperty(DataCloudflareNotificationPolicyMechanismsOutputReference.prototype, "email", {
        get: function () {
            return this._email;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareNotificationPolicyMechanismsOutputReference.prototype, "pagerduty", {
        get: function () {
            return this._pagerduty;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareNotificationPolicyMechanismsOutputReference.prototype, "webhooks", {
        get: function () {
            return this._webhooks;
        },
        enumerable: false,
        configurable: true
    });
    return DataCloudflareNotificationPolicyMechanismsOutputReference;
}(cdktf.ComplexObject));
exports.DataCloudflareNotificationPolicyMechanismsOutputReference = DataCloudflareNotificationPolicyMechanismsOutputReference;
/**
* Represents a {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/notification_policy cloudflare_notification_policy}
*/
var DataCloudflareNotificationPolicy = /** @class */ (function (_super) {
    __extends(DataCloudflareNotificationPolicy, _super);
    // ===========
    // INITIALIZER
    // ===========
    /**
    * Create a new {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/notification_policy cloudflare_notification_policy} Data Source
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options DataCloudflareNotificationPolicyConfig
    */
    function DataCloudflareNotificationPolicy(scope, id, config) {
        var _this = _super.call(this, scope, id, {
            terraformResourceType: 'cloudflare_notification_policy',
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
        // filters - computed: true, optional: false, required: false
        _this._filters = new DataCloudflareNotificationPolicyFiltersOutputReference(_this, "filters");
        // mechanisms - computed: true, optional: false, required: false
        _this._mechanisms = new DataCloudflareNotificationPolicyMechanismsOutputReference(_this, "mechanisms");
        _this._accountId = config.accountId;
        _this._policyId = config.policyId;
        return _this;
    }
    // ==============
    // STATIC Methods
    // ==============
    /**
    * Generates CDKTF code for importing a DataCloudflareNotificationPolicy resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the DataCloudflareNotificationPolicy to import
    * @param importFromId The id of the existing DataCloudflareNotificationPolicy that should be imported. Refer to the {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/notification_policy#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the DataCloudflareNotificationPolicy to import is found
    */
    DataCloudflareNotificationPolicy.generateConfigForImport = function (scope, importToId, importFromId, provider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "cloudflare_notification_policy", importId: importFromId, provider: provider });
    };
    Object.defineProperty(DataCloudflareNotificationPolicy.prototype, "accountId", {
        get: function () {
            return this.getStringAttribute('account_id');
        },
        set: function (value) {
            this._accountId = value;
        },
        enumerable: false,
        configurable: true
    });
    DataCloudflareNotificationPolicy.prototype.resetAccountId = function () {
        this._accountId = undefined;
    };
    Object.defineProperty(DataCloudflareNotificationPolicy.prototype, "accountIdInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._accountId;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareNotificationPolicy.prototype, "alertInterval", {
        // alert_interval - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('alert_interval');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareNotificationPolicy.prototype, "alertType", {
        // alert_type - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('alert_type');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareNotificationPolicy.prototype, "created", {
        // created - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('created');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareNotificationPolicy.prototype, "description", {
        // description - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('description');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareNotificationPolicy.prototype, "enabled", {
        // enabled - computed: true, optional: false, required: false
        get: function () {
            return this.getBooleanAttribute('enabled');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareNotificationPolicy.prototype, "filters", {
        get: function () {
            return this._filters;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareNotificationPolicy.prototype, "id", {
        // id - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('id');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareNotificationPolicy.prototype, "mechanisms", {
        get: function () {
            return this._mechanisms;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareNotificationPolicy.prototype, "modified", {
        // modified - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('modified');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareNotificationPolicy.prototype, "name", {
        // name - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('name');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareNotificationPolicy.prototype, "policyId", {
        get: function () {
            return this.getStringAttribute('policy_id');
        },
        set: function (value) {
            this._policyId = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareNotificationPolicy.prototype, "policyIdInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._policyId;
        },
        enumerable: false,
        configurable: true
    });
    // =========
    // SYNTHESIS
    // =========
    DataCloudflareNotificationPolicy.prototype.synthesizeAttributes = function () {
        return {
            account_id: cdktf.stringToTerraform(this._accountId),
            policy_id: cdktf.stringToTerraform(this._policyId),
        };
    };
    DataCloudflareNotificationPolicy.prototype.synthesizeHclAttributes = function () {
        var attrs = {
            account_id: {
                value: cdktf.stringToHclTerraform(this._accountId),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            policy_id: {
                value: cdktf.stringToHclTerraform(this._policyId),
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
    DataCloudflareNotificationPolicy.tfResourceType = "cloudflare_notification_policy";
    return DataCloudflareNotificationPolicy;
}(cdktf.TerraformDataSource));
exports.DataCloudflareNotificationPolicy = DataCloudflareNotificationPolicy;
