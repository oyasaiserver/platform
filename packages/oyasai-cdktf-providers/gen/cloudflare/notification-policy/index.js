"use strict";
// https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/notification_policy
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
exports.NotificationPolicy = exports.NotificationPolicyMechanismsOutputReference = exports.NotificationPolicyMechanismsWebhooksList = exports.NotificationPolicyMechanismsWebhooksOutputReference = exports.NotificationPolicyMechanismsPagerdutyList = exports.NotificationPolicyMechanismsPagerdutyOutputReference = exports.NotificationPolicyMechanismsEmailList = exports.NotificationPolicyMechanismsEmailOutputReference = exports.NotificationPolicyFiltersOutputReference = void 0;
exports.notificationPolicyFiltersToTerraform = notificationPolicyFiltersToTerraform;
exports.notificationPolicyFiltersToHclTerraform = notificationPolicyFiltersToHclTerraform;
exports.notificationPolicyMechanismsEmailToTerraform = notificationPolicyMechanismsEmailToTerraform;
exports.notificationPolicyMechanismsEmailToHclTerraform = notificationPolicyMechanismsEmailToHclTerraform;
exports.notificationPolicyMechanismsPagerdutyToTerraform = notificationPolicyMechanismsPagerdutyToTerraform;
exports.notificationPolicyMechanismsPagerdutyToHclTerraform = notificationPolicyMechanismsPagerdutyToHclTerraform;
exports.notificationPolicyMechanismsWebhooksToTerraform = notificationPolicyMechanismsWebhooksToTerraform;
exports.notificationPolicyMechanismsWebhooksToHclTerraform = notificationPolicyMechanismsWebhooksToHclTerraform;
exports.notificationPolicyMechanismsToTerraform = notificationPolicyMechanismsToTerraform;
exports.notificationPolicyMechanismsToHclTerraform = notificationPolicyMechanismsToHclTerraform;
var cdktf = require("cdktf");
function notificationPolicyFiltersToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        actions: cdktf.listMapper(cdktf.stringToTerraform, false)(struct.actions),
        affected_asns: cdktf.listMapper(cdktf.stringToTerraform, false)(struct.affectedAsns),
        affected_components: cdktf.listMapper(cdktf.stringToTerraform, false)(struct.affectedComponents),
        affected_locations: cdktf.listMapper(cdktf.stringToTerraform, false)(struct.affectedLocations),
        airport_code: cdktf.listMapper(cdktf.stringToTerraform, false)(struct.airportCode),
        alert_trigger_preferences: cdktf.listMapper(cdktf.stringToTerraform, false)(struct.alertTriggerPreferences),
        alert_trigger_preferences_value: cdktf.listMapper(cdktf.stringToTerraform, false)(struct.alertTriggerPreferencesValue),
        enabled: cdktf.listMapper(cdktf.stringToTerraform, false)(struct.enabled),
        environment: cdktf.listMapper(cdktf.stringToTerraform, false)(struct.environment),
        event: cdktf.listMapper(cdktf.stringToTerraform, false)(struct.event),
        event_source: cdktf.listMapper(cdktf.stringToTerraform, false)(struct.eventSource),
        event_type: cdktf.listMapper(cdktf.stringToTerraform, false)(struct.eventType),
        group_by: cdktf.listMapper(cdktf.stringToTerraform, false)(struct.groupBy),
        health_check_id: cdktf.listMapper(cdktf.stringToTerraform, false)(struct.healthCheckId),
        incident_impact: cdktf.listMapper(cdktf.stringToTerraform, false)(struct.incidentImpact),
        input_id: cdktf.listMapper(cdktf.stringToTerraform, false)(struct.inputId),
        insight_class: cdktf.listMapper(cdktf.stringToTerraform, false)(struct.insightClass),
        limit: cdktf.listMapper(cdktf.stringToTerraform, false)(struct.limit),
        logo_tag: cdktf.listMapper(cdktf.stringToTerraform, false)(struct.logoTag),
        megabits_per_second: cdktf.listMapper(cdktf.stringToTerraform, false)(struct.megabitsPerSecond),
        new_health: cdktf.listMapper(cdktf.stringToTerraform, false)(struct.newHealth),
        new_status: cdktf.listMapper(cdktf.stringToTerraform, false)(struct.newStatus),
        packets_per_second: cdktf.listMapper(cdktf.stringToTerraform, false)(struct.packetsPerSecond),
        pool_id: cdktf.listMapper(cdktf.stringToTerraform, false)(struct.poolId),
        pop_names: cdktf.listMapper(cdktf.stringToTerraform, false)(struct.popNames),
        product: cdktf.listMapper(cdktf.stringToTerraform, false)(struct.product),
        project_id: cdktf.listMapper(cdktf.stringToTerraform, false)(struct.projectId),
        protocol: cdktf.listMapper(cdktf.stringToTerraform, false)(struct.protocol),
        query_tag: cdktf.listMapper(cdktf.stringToTerraform, false)(struct.queryTag),
        requests_per_second: cdktf.listMapper(cdktf.stringToTerraform, false)(struct.requestsPerSecond),
        selectors: cdktf.listMapper(cdktf.stringToTerraform, false)(struct.selectors),
        services: cdktf.listMapper(cdktf.stringToTerraform, false)(struct.services),
        slo: cdktf.listMapper(cdktf.stringToTerraform, false)(struct.slo),
        status: cdktf.listMapper(cdktf.stringToTerraform, false)(struct.status),
        target_hostname: cdktf.listMapper(cdktf.stringToTerraform, false)(struct.targetHostname),
        target_ip: cdktf.listMapper(cdktf.stringToTerraform, false)(struct.targetIp),
        target_zone_name: cdktf.listMapper(cdktf.stringToTerraform, false)(struct.targetZoneName),
        traffic_exclusions: cdktf.listMapper(cdktf.stringToTerraform, false)(struct.trafficExclusions),
        tunnel_id: cdktf.listMapper(cdktf.stringToTerraform, false)(struct.tunnelId),
        tunnel_name: cdktf.listMapper(cdktf.stringToTerraform, false)(struct.tunnelName),
        type: cdktf.listMapper(cdktf.stringToTerraform, false)(struct.type),
        where: cdktf.listMapper(cdktf.stringToTerraform, false)(struct.where),
        zones: cdktf.listMapper(cdktf.stringToTerraform, false)(struct.zones),
    };
}
function notificationPolicyFiltersToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    var attrs = {
        actions: {
            value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct.actions),
            isBlock: false,
            type: "list",
            storageClassType: "stringList",
        },
        affected_asns: {
            value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct.affectedAsns),
            isBlock: false,
            type: "list",
            storageClassType: "stringList",
        },
        affected_components: {
            value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct.affectedComponents),
            isBlock: false,
            type: "list",
            storageClassType: "stringList",
        },
        affected_locations: {
            value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct.affectedLocations),
            isBlock: false,
            type: "list",
            storageClassType: "stringList",
        },
        airport_code: {
            value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct.airportCode),
            isBlock: false,
            type: "list",
            storageClassType: "stringList",
        },
        alert_trigger_preferences: {
            value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct.alertTriggerPreferences),
            isBlock: false,
            type: "list",
            storageClassType: "stringList",
        },
        alert_trigger_preferences_value: {
            value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct.alertTriggerPreferencesValue),
            isBlock: false,
            type: "list",
            storageClassType: "stringList",
        },
        enabled: {
            value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct.enabled),
            isBlock: false,
            type: "list",
            storageClassType: "stringList",
        },
        environment: {
            value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct.environment),
            isBlock: false,
            type: "list",
            storageClassType: "stringList",
        },
        event: {
            value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct.event),
            isBlock: false,
            type: "list",
            storageClassType: "stringList",
        },
        event_source: {
            value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct.eventSource),
            isBlock: false,
            type: "list",
            storageClassType: "stringList",
        },
        event_type: {
            value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct.eventType),
            isBlock: false,
            type: "list",
            storageClassType: "stringList",
        },
        group_by: {
            value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct.groupBy),
            isBlock: false,
            type: "list",
            storageClassType: "stringList",
        },
        health_check_id: {
            value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct.healthCheckId),
            isBlock: false,
            type: "list",
            storageClassType: "stringList",
        },
        incident_impact: {
            value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct.incidentImpact),
            isBlock: false,
            type: "list",
            storageClassType: "stringList",
        },
        input_id: {
            value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct.inputId),
            isBlock: false,
            type: "list",
            storageClassType: "stringList",
        },
        insight_class: {
            value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct.insightClass),
            isBlock: false,
            type: "list",
            storageClassType: "stringList",
        },
        limit: {
            value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct.limit),
            isBlock: false,
            type: "list",
            storageClassType: "stringList",
        },
        logo_tag: {
            value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct.logoTag),
            isBlock: false,
            type: "list",
            storageClassType: "stringList",
        },
        megabits_per_second: {
            value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct.megabitsPerSecond),
            isBlock: false,
            type: "list",
            storageClassType: "stringList",
        },
        new_health: {
            value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct.newHealth),
            isBlock: false,
            type: "list",
            storageClassType: "stringList",
        },
        new_status: {
            value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct.newStatus),
            isBlock: false,
            type: "list",
            storageClassType: "stringList",
        },
        packets_per_second: {
            value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct.packetsPerSecond),
            isBlock: false,
            type: "list",
            storageClassType: "stringList",
        },
        pool_id: {
            value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct.poolId),
            isBlock: false,
            type: "list",
            storageClassType: "stringList",
        },
        pop_names: {
            value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct.popNames),
            isBlock: false,
            type: "list",
            storageClassType: "stringList",
        },
        product: {
            value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct.product),
            isBlock: false,
            type: "list",
            storageClassType: "stringList",
        },
        project_id: {
            value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct.projectId),
            isBlock: false,
            type: "list",
            storageClassType: "stringList",
        },
        protocol: {
            value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct.protocol),
            isBlock: false,
            type: "list",
            storageClassType: "stringList",
        },
        query_tag: {
            value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct.queryTag),
            isBlock: false,
            type: "list",
            storageClassType: "stringList",
        },
        requests_per_second: {
            value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct.requestsPerSecond),
            isBlock: false,
            type: "list",
            storageClassType: "stringList",
        },
        selectors: {
            value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct.selectors),
            isBlock: false,
            type: "list",
            storageClassType: "stringList",
        },
        services: {
            value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct.services),
            isBlock: false,
            type: "list",
            storageClassType: "stringList",
        },
        slo: {
            value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct.slo),
            isBlock: false,
            type: "list",
            storageClassType: "stringList",
        },
        status: {
            value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct.status),
            isBlock: false,
            type: "list",
            storageClassType: "stringList",
        },
        target_hostname: {
            value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct.targetHostname),
            isBlock: false,
            type: "list",
            storageClassType: "stringList",
        },
        target_ip: {
            value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct.targetIp),
            isBlock: false,
            type: "list",
            storageClassType: "stringList",
        },
        target_zone_name: {
            value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct.targetZoneName),
            isBlock: false,
            type: "list",
            storageClassType: "stringList",
        },
        traffic_exclusions: {
            value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct.trafficExclusions),
            isBlock: false,
            type: "list",
            storageClassType: "stringList",
        },
        tunnel_id: {
            value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct.tunnelId),
            isBlock: false,
            type: "list",
            storageClassType: "stringList",
        },
        tunnel_name: {
            value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct.tunnelName),
            isBlock: false,
            type: "list",
            storageClassType: "stringList",
        },
        type: {
            value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct.type),
            isBlock: false,
            type: "list",
            storageClassType: "stringList",
        },
        where: {
            value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct.where),
            isBlock: false,
            type: "list",
            storageClassType: "stringList",
        },
        zones: {
            value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct.zones),
            isBlock: false,
            type: "list",
            storageClassType: "stringList",
        },
    };
    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(function (_a) {
        var _ = _a[0], value = _a[1];
        return value !== undefined && value.value !== undefined;
    }));
}
var NotificationPolicyFiltersOutputReference = /** @class */ (function (_super) {
    __extends(NotificationPolicyFiltersOutputReference, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    function NotificationPolicyFiltersOutputReference(terraformResource, terraformAttribute) {
        var _this = _super.call(this, terraformResource, terraformAttribute, false) || this;
        _this.isEmptyObject = false;
        return _this;
    }
    Object.defineProperty(NotificationPolicyFiltersOutputReference.prototype, "internalValue", {
        get: function () {
            if (this.resolvableValue) {
                return this.resolvableValue;
            }
            var hasAnyValues = this.isEmptyObject;
            var internalValueResult = {};
            if (this._actions !== undefined) {
                hasAnyValues = true;
                internalValueResult.actions = this._actions;
            }
            if (this._affectedAsns !== undefined) {
                hasAnyValues = true;
                internalValueResult.affectedAsns = this._affectedAsns;
            }
            if (this._affectedComponents !== undefined) {
                hasAnyValues = true;
                internalValueResult.affectedComponents = this._affectedComponents;
            }
            if (this._affectedLocations !== undefined) {
                hasAnyValues = true;
                internalValueResult.affectedLocations = this._affectedLocations;
            }
            if (this._airportCode !== undefined) {
                hasAnyValues = true;
                internalValueResult.airportCode = this._airportCode;
            }
            if (this._alertTriggerPreferences !== undefined) {
                hasAnyValues = true;
                internalValueResult.alertTriggerPreferences = this._alertTriggerPreferences;
            }
            if (this._alertTriggerPreferencesValue !== undefined) {
                hasAnyValues = true;
                internalValueResult.alertTriggerPreferencesValue = this._alertTriggerPreferencesValue;
            }
            if (this._enabled !== undefined) {
                hasAnyValues = true;
                internalValueResult.enabled = this._enabled;
            }
            if (this._environment !== undefined) {
                hasAnyValues = true;
                internalValueResult.environment = this._environment;
            }
            if (this._event !== undefined) {
                hasAnyValues = true;
                internalValueResult.event = this._event;
            }
            if (this._eventSource !== undefined) {
                hasAnyValues = true;
                internalValueResult.eventSource = this._eventSource;
            }
            if (this._eventType !== undefined) {
                hasAnyValues = true;
                internalValueResult.eventType = this._eventType;
            }
            if (this._groupBy !== undefined) {
                hasAnyValues = true;
                internalValueResult.groupBy = this._groupBy;
            }
            if (this._healthCheckId !== undefined) {
                hasAnyValues = true;
                internalValueResult.healthCheckId = this._healthCheckId;
            }
            if (this._incidentImpact !== undefined) {
                hasAnyValues = true;
                internalValueResult.incidentImpact = this._incidentImpact;
            }
            if (this._inputId !== undefined) {
                hasAnyValues = true;
                internalValueResult.inputId = this._inputId;
            }
            if (this._insightClass !== undefined) {
                hasAnyValues = true;
                internalValueResult.insightClass = this._insightClass;
            }
            if (this._limit !== undefined) {
                hasAnyValues = true;
                internalValueResult.limit = this._limit;
            }
            if (this._logoTag !== undefined) {
                hasAnyValues = true;
                internalValueResult.logoTag = this._logoTag;
            }
            if (this._megabitsPerSecond !== undefined) {
                hasAnyValues = true;
                internalValueResult.megabitsPerSecond = this._megabitsPerSecond;
            }
            if (this._newHealth !== undefined) {
                hasAnyValues = true;
                internalValueResult.newHealth = this._newHealth;
            }
            if (this._newStatus !== undefined) {
                hasAnyValues = true;
                internalValueResult.newStatus = this._newStatus;
            }
            if (this._packetsPerSecond !== undefined) {
                hasAnyValues = true;
                internalValueResult.packetsPerSecond = this._packetsPerSecond;
            }
            if (this._poolId !== undefined) {
                hasAnyValues = true;
                internalValueResult.poolId = this._poolId;
            }
            if (this._popNames !== undefined) {
                hasAnyValues = true;
                internalValueResult.popNames = this._popNames;
            }
            if (this._product !== undefined) {
                hasAnyValues = true;
                internalValueResult.product = this._product;
            }
            if (this._projectId !== undefined) {
                hasAnyValues = true;
                internalValueResult.projectId = this._projectId;
            }
            if (this._protocol !== undefined) {
                hasAnyValues = true;
                internalValueResult.protocol = this._protocol;
            }
            if (this._queryTag !== undefined) {
                hasAnyValues = true;
                internalValueResult.queryTag = this._queryTag;
            }
            if (this._requestsPerSecond !== undefined) {
                hasAnyValues = true;
                internalValueResult.requestsPerSecond = this._requestsPerSecond;
            }
            if (this._selectors !== undefined) {
                hasAnyValues = true;
                internalValueResult.selectors = this._selectors;
            }
            if (this._services !== undefined) {
                hasAnyValues = true;
                internalValueResult.services = this._services;
            }
            if (this._slo !== undefined) {
                hasAnyValues = true;
                internalValueResult.slo = this._slo;
            }
            if (this._status !== undefined) {
                hasAnyValues = true;
                internalValueResult.status = this._status;
            }
            if (this._targetHostname !== undefined) {
                hasAnyValues = true;
                internalValueResult.targetHostname = this._targetHostname;
            }
            if (this._targetIp !== undefined) {
                hasAnyValues = true;
                internalValueResult.targetIp = this._targetIp;
            }
            if (this._targetZoneName !== undefined) {
                hasAnyValues = true;
                internalValueResult.targetZoneName = this._targetZoneName;
            }
            if (this._trafficExclusions !== undefined) {
                hasAnyValues = true;
                internalValueResult.trafficExclusions = this._trafficExclusions;
            }
            if (this._tunnelId !== undefined) {
                hasAnyValues = true;
                internalValueResult.tunnelId = this._tunnelId;
            }
            if (this._tunnelName !== undefined) {
                hasAnyValues = true;
                internalValueResult.tunnelName = this._tunnelName;
            }
            if (this._type !== undefined) {
                hasAnyValues = true;
                internalValueResult.type = this._type;
            }
            if (this._where !== undefined) {
                hasAnyValues = true;
                internalValueResult.where = this._where;
            }
            if (this._zones !== undefined) {
                hasAnyValues = true;
                internalValueResult.zones = this._zones;
            }
            return hasAnyValues ? internalValueResult : undefined;
        },
        set: function (value) {
            if (value === undefined) {
                this.isEmptyObject = false;
                this.resolvableValue = undefined;
                this._actions = undefined;
                this._affectedAsns = undefined;
                this._affectedComponents = undefined;
                this._affectedLocations = undefined;
                this._airportCode = undefined;
                this._alertTriggerPreferences = undefined;
                this._alertTriggerPreferencesValue = undefined;
                this._enabled = undefined;
                this._environment = undefined;
                this._event = undefined;
                this._eventSource = undefined;
                this._eventType = undefined;
                this._groupBy = undefined;
                this._healthCheckId = undefined;
                this._incidentImpact = undefined;
                this._inputId = undefined;
                this._insightClass = undefined;
                this._limit = undefined;
                this._logoTag = undefined;
                this._megabitsPerSecond = undefined;
                this._newHealth = undefined;
                this._newStatus = undefined;
                this._packetsPerSecond = undefined;
                this._poolId = undefined;
                this._popNames = undefined;
                this._product = undefined;
                this._projectId = undefined;
                this._protocol = undefined;
                this._queryTag = undefined;
                this._requestsPerSecond = undefined;
                this._selectors = undefined;
                this._services = undefined;
                this._slo = undefined;
                this._status = undefined;
                this._targetHostname = undefined;
                this._targetIp = undefined;
                this._targetZoneName = undefined;
                this._trafficExclusions = undefined;
                this._tunnelId = undefined;
                this._tunnelName = undefined;
                this._type = undefined;
                this._where = undefined;
                this._zones = undefined;
            }
            else if (cdktf.Tokenization.isResolvable(value)) {
                this.isEmptyObject = false;
                this.resolvableValue = value;
            }
            else {
                this.isEmptyObject = Object.keys(value).length === 0;
                this.resolvableValue = undefined;
                this._actions = value.actions;
                this._affectedAsns = value.affectedAsns;
                this._affectedComponents = value.affectedComponents;
                this._affectedLocations = value.affectedLocations;
                this._airportCode = value.airportCode;
                this._alertTriggerPreferences = value.alertTriggerPreferences;
                this._alertTriggerPreferencesValue = value.alertTriggerPreferencesValue;
                this._enabled = value.enabled;
                this._environment = value.environment;
                this._event = value.event;
                this._eventSource = value.eventSource;
                this._eventType = value.eventType;
                this._groupBy = value.groupBy;
                this._healthCheckId = value.healthCheckId;
                this._incidentImpact = value.incidentImpact;
                this._inputId = value.inputId;
                this._insightClass = value.insightClass;
                this._limit = value.limit;
                this._logoTag = value.logoTag;
                this._megabitsPerSecond = value.megabitsPerSecond;
                this._newHealth = value.newHealth;
                this._newStatus = value.newStatus;
                this._packetsPerSecond = value.packetsPerSecond;
                this._poolId = value.poolId;
                this._popNames = value.popNames;
                this._product = value.product;
                this._projectId = value.projectId;
                this._protocol = value.protocol;
                this._queryTag = value.queryTag;
                this._requestsPerSecond = value.requestsPerSecond;
                this._selectors = value.selectors;
                this._services = value.services;
                this._slo = value.slo;
                this._status = value.status;
                this._targetHostname = value.targetHostname;
                this._targetIp = value.targetIp;
                this._targetZoneName = value.targetZoneName;
                this._trafficExclusions = value.trafficExclusions;
                this._tunnelId = value.tunnelId;
                this._tunnelName = value.tunnelName;
                this._type = value.type;
                this._where = value.where;
                this._zones = value.zones;
            }
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(NotificationPolicyFiltersOutputReference.prototype, "actions", {
        get: function () {
            return this.getListAttribute('actions');
        },
        set: function (value) {
            this._actions = value;
        },
        enumerable: false,
        configurable: true
    });
    NotificationPolicyFiltersOutputReference.prototype.resetActions = function () {
        this._actions = undefined;
    };
    Object.defineProperty(NotificationPolicyFiltersOutputReference.prototype, "actionsInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._actions;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(NotificationPolicyFiltersOutputReference.prototype, "affectedAsns", {
        get: function () {
            return this.getListAttribute('affected_asns');
        },
        set: function (value) {
            this._affectedAsns = value;
        },
        enumerable: false,
        configurable: true
    });
    NotificationPolicyFiltersOutputReference.prototype.resetAffectedAsns = function () {
        this._affectedAsns = undefined;
    };
    Object.defineProperty(NotificationPolicyFiltersOutputReference.prototype, "affectedAsnsInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._affectedAsns;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(NotificationPolicyFiltersOutputReference.prototype, "affectedComponents", {
        get: function () {
            return this.getListAttribute('affected_components');
        },
        set: function (value) {
            this._affectedComponents = value;
        },
        enumerable: false,
        configurable: true
    });
    NotificationPolicyFiltersOutputReference.prototype.resetAffectedComponents = function () {
        this._affectedComponents = undefined;
    };
    Object.defineProperty(NotificationPolicyFiltersOutputReference.prototype, "affectedComponentsInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._affectedComponents;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(NotificationPolicyFiltersOutputReference.prototype, "affectedLocations", {
        get: function () {
            return this.getListAttribute('affected_locations');
        },
        set: function (value) {
            this._affectedLocations = value;
        },
        enumerable: false,
        configurable: true
    });
    NotificationPolicyFiltersOutputReference.prototype.resetAffectedLocations = function () {
        this._affectedLocations = undefined;
    };
    Object.defineProperty(NotificationPolicyFiltersOutputReference.prototype, "affectedLocationsInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._affectedLocations;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(NotificationPolicyFiltersOutputReference.prototype, "airportCode", {
        get: function () {
            return this.getListAttribute('airport_code');
        },
        set: function (value) {
            this._airportCode = value;
        },
        enumerable: false,
        configurable: true
    });
    NotificationPolicyFiltersOutputReference.prototype.resetAirportCode = function () {
        this._airportCode = undefined;
    };
    Object.defineProperty(NotificationPolicyFiltersOutputReference.prototype, "airportCodeInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._airportCode;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(NotificationPolicyFiltersOutputReference.prototype, "alertTriggerPreferences", {
        get: function () {
            return this.getListAttribute('alert_trigger_preferences');
        },
        set: function (value) {
            this._alertTriggerPreferences = value;
        },
        enumerable: false,
        configurable: true
    });
    NotificationPolicyFiltersOutputReference.prototype.resetAlertTriggerPreferences = function () {
        this._alertTriggerPreferences = undefined;
    };
    Object.defineProperty(NotificationPolicyFiltersOutputReference.prototype, "alertTriggerPreferencesInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._alertTriggerPreferences;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(NotificationPolicyFiltersOutputReference.prototype, "alertTriggerPreferencesValue", {
        get: function () {
            return this.getListAttribute('alert_trigger_preferences_value');
        },
        set: function (value) {
            this._alertTriggerPreferencesValue = value;
        },
        enumerable: false,
        configurable: true
    });
    NotificationPolicyFiltersOutputReference.prototype.resetAlertTriggerPreferencesValue = function () {
        this._alertTriggerPreferencesValue = undefined;
    };
    Object.defineProperty(NotificationPolicyFiltersOutputReference.prototype, "alertTriggerPreferencesValueInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._alertTriggerPreferencesValue;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(NotificationPolicyFiltersOutputReference.prototype, "enabled", {
        get: function () {
            return this.getListAttribute('enabled');
        },
        set: function (value) {
            this._enabled = value;
        },
        enumerable: false,
        configurable: true
    });
    NotificationPolicyFiltersOutputReference.prototype.resetEnabled = function () {
        this._enabled = undefined;
    };
    Object.defineProperty(NotificationPolicyFiltersOutputReference.prototype, "enabledInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._enabled;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(NotificationPolicyFiltersOutputReference.prototype, "environment", {
        get: function () {
            return this.getListAttribute('environment');
        },
        set: function (value) {
            this._environment = value;
        },
        enumerable: false,
        configurable: true
    });
    NotificationPolicyFiltersOutputReference.prototype.resetEnvironment = function () {
        this._environment = undefined;
    };
    Object.defineProperty(NotificationPolicyFiltersOutputReference.prototype, "environmentInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._environment;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(NotificationPolicyFiltersOutputReference.prototype, "event", {
        get: function () {
            return this.getListAttribute('event');
        },
        set: function (value) {
            this._event = value;
        },
        enumerable: false,
        configurable: true
    });
    NotificationPolicyFiltersOutputReference.prototype.resetEvent = function () {
        this._event = undefined;
    };
    Object.defineProperty(NotificationPolicyFiltersOutputReference.prototype, "eventInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._event;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(NotificationPolicyFiltersOutputReference.prototype, "eventSource", {
        get: function () {
            return this.getListAttribute('event_source');
        },
        set: function (value) {
            this._eventSource = value;
        },
        enumerable: false,
        configurable: true
    });
    NotificationPolicyFiltersOutputReference.prototype.resetEventSource = function () {
        this._eventSource = undefined;
    };
    Object.defineProperty(NotificationPolicyFiltersOutputReference.prototype, "eventSourceInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._eventSource;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(NotificationPolicyFiltersOutputReference.prototype, "eventType", {
        get: function () {
            return this.getListAttribute('event_type');
        },
        set: function (value) {
            this._eventType = value;
        },
        enumerable: false,
        configurable: true
    });
    NotificationPolicyFiltersOutputReference.prototype.resetEventType = function () {
        this._eventType = undefined;
    };
    Object.defineProperty(NotificationPolicyFiltersOutputReference.prototype, "eventTypeInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._eventType;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(NotificationPolicyFiltersOutputReference.prototype, "groupBy", {
        get: function () {
            return this.getListAttribute('group_by');
        },
        set: function (value) {
            this._groupBy = value;
        },
        enumerable: false,
        configurable: true
    });
    NotificationPolicyFiltersOutputReference.prototype.resetGroupBy = function () {
        this._groupBy = undefined;
    };
    Object.defineProperty(NotificationPolicyFiltersOutputReference.prototype, "groupByInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._groupBy;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(NotificationPolicyFiltersOutputReference.prototype, "healthCheckId", {
        get: function () {
            return this.getListAttribute('health_check_id');
        },
        set: function (value) {
            this._healthCheckId = value;
        },
        enumerable: false,
        configurable: true
    });
    NotificationPolicyFiltersOutputReference.prototype.resetHealthCheckId = function () {
        this._healthCheckId = undefined;
    };
    Object.defineProperty(NotificationPolicyFiltersOutputReference.prototype, "healthCheckIdInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._healthCheckId;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(NotificationPolicyFiltersOutputReference.prototype, "incidentImpact", {
        get: function () {
            return this.getListAttribute('incident_impact');
        },
        set: function (value) {
            this._incidentImpact = value;
        },
        enumerable: false,
        configurable: true
    });
    NotificationPolicyFiltersOutputReference.prototype.resetIncidentImpact = function () {
        this._incidentImpact = undefined;
    };
    Object.defineProperty(NotificationPolicyFiltersOutputReference.prototype, "incidentImpactInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._incidentImpact;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(NotificationPolicyFiltersOutputReference.prototype, "inputId", {
        get: function () {
            return this.getListAttribute('input_id');
        },
        set: function (value) {
            this._inputId = value;
        },
        enumerable: false,
        configurable: true
    });
    NotificationPolicyFiltersOutputReference.prototype.resetInputId = function () {
        this._inputId = undefined;
    };
    Object.defineProperty(NotificationPolicyFiltersOutputReference.prototype, "inputIdInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._inputId;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(NotificationPolicyFiltersOutputReference.prototype, "insightClass", {
        get: function () {
            return this.getListAttribute('insight_class');
        },
        set: function (value) {
            this._insightClass = value;
        },
        enumerable: false,
        configurable: true
    });
    NotificationPolicyFiltersOutputReference.prototype.resetInsightClass = function () {
        this._insightClass = undefined;
    };
    Object.defineProperty(NotificationPolicyFiltersOutputReference.prototype, "insightClassInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._insightClass;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(NotificationPolicyFiltersOutputReference.prototype, "limit", {
        get: function () {
            return this.getListAttribute('limit');
        },
        set: function (value) {
            this._limit = value;
        },
        enumerable: false,
        configurable: true
    });
    NotificationPolicyFiltersOutputReference.prototype.resetLimit = function () {
        this._limit = undefined;
    };
    Object.defineProperty(NotificationPolicyFiltersOutputReference.prototype, "limitInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._limit;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(NotificationPolicyFiltersOutputReference.prototype, "logoTag", {
        get: function () {
            return this.getListAttribute('logo_tag');
        },
        set: function (value) {
            this._logoTag = value;
        },
        enumerable: false,
        configurable: true
    });
    NotificationPolicyFiltersOutputReference.prototype.resetLogoTag = function () {
        this._logoTag = undefined;
    };
    Object.defineProperty(NotificationPolicyFiltersOutputReference.prototype, "logoTagInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._logoTag;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(NotificationPolicyFiltersOutputReference.prototype, "megabitsPerSecond", {
        get: function () {
            return this.getListAttribute('megabits_per_second');
        },
        set: function (value) {
            this._megabitsPerSecond = value;
        },
        enumerable: false,
        configurable: true
    });
    NotificationPolicyFiltersOutputReference.prototype.resetMegabitsPerSecond = function () {
        this._megabitsPerSecond = undefined;
    };
    Object.defineProperty(NotificationPolicyFiltersOutputReference.prototype, "megabitsPerSecondInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._megabitsPerSecond;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(NotificationPolicyFiltersOutputReference.prototype, "newHealth", {
        get: function () {
            return this.getListAttribute('new_health');
        },
        set: function (value) {
            this._newHealth = value;
        },
        enumerable: false,
        configurable: true
    });
    NotificationPolicyFiltersOutputReference.prototype.resetNewHealth = function () {
        this._newHealth = undefined;
    };
    Object.defineProperty(NotificationPolicyFiltersOutputReference.prototype, "newHealthInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._newHealth;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(NotificationPolicyFiltersOutputReference.prototype, "newStatus", {
        get: function () {
            return this.getListAttribute('new_status');
        },
        set: function (value) {
            this._newStatus = value;
        },
        enumerable: false,
        configurable: true
    });
    NotificationPolicyFiltersOutputReference.prototype.resetNewStatus = function () {
        this._newStatus = undefined;
    };
    Object.defineProperty(NotificationPolicyFiltersOutputReference.prototype, "newStatusInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._newStatus;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(NotificationPolicyFiltersOutputReference.prototype, "packetsPerSecond", {
        get: function () {
            return this.getListAttribute('packets_per_second');
        },
        set: function (value) {
            this._packetsPerSecond = value;
        },
        enumerable: false,
        configurable: true
    });
    NotificationPolicyFiltersOutputReference.prototype.resetPacketsPerSecond = function () {
        this._packetsPerSecond = undefined;
    };
    Object.defineProperty(NotificationPolicyFiltersOutputReference.prototype, "packetsPerSecondInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._packetsPerSecond;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(NotificationPolicyFiltersOutputReference.prototype, "poolId", {
        get: function () {
            return this.getListAttribute('pool_id');
        },
        set: function (value) {
            this._poolId = value;
        },
        enumerable: false,
        configurable: true
    });
    NotificationPolicyFiltersOutputReference.prototype.resetPoolId = function () {
        this._poolId = undefined;
    };
    Object.defineProperty(NotificationPolicyFiltersOutputReference.prototype, "poolIdInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._poolId;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(NotificationPolicyFiltersOutputReference.prototype, "popNames", {
        get: function () {
            return this.getListAttribute('pop_names');
        },
        set: function (value) {
            this._popNames = value;
        },
        enumerable: false,
        configurable: true
    });
    NotificationPolicyFiltersOutputReference.prototype.resetPopNames = function () {
        this._popNames = undefined;
    };
    Object.defineProperty(NotificationPolicyFiltersOutputReference.prototype, "popNamesInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._popNames;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(NotificationPolicyFiltersOutputReference.prototype, "product", {
        get: function () {
            return this.getListAttribute('product');
        },
        set: function (value) {
            this._product = value;
        },
        enumerable: false,
        configurable: true
    });
    NotificationPolicyFiltersOutputReference.prototype.resetProduct = function () {
        this._product = undefined;
    };
    Object.defineProperty(NotificationPolicyFiltersOutputReference.prototype, "productInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._product;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(NotificationPolicyFiltersOutputReference.prototype, "projectId", {
        get: function () {
            return this.getListAttribute('project_id');
        },
        set: function (value) {
            this._projectId = value;
        },
        enumerable: false,
        configurable: true
    });
    NotificationPolicyFiltersOutputReference.prototype.resetProjectId = function () {
        this._projectId = undefined;
    };
    Object.defineProperty(NotificationPolicyFiltersOutputReference.prototype, "projectIdInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._projectId;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(NotificationPolicyFiltersOutputReference.prototype, "protocol", {
        get: function () {
            return this.getListAttribute('protocol');
        },
        set: function (value) {
            this._protocol = value;
        },
        enumerable: false,
        configurable: true
    });
    NotificationPolicyFiltersOutputReference.prototype.resetProtocol = function () {
        this._protocol = undefined;
    };
    Object.defineProperty(NotificationPolicyFiltersOutputReference.prototype, "protocolInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._protocol;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(NotificationPolicyFiltersOutputReference.prototype, "queryTag", {
        get: function () {
            return this.getListAttribute('query_tag');
        },
        set: function (value) {
            this._queryTag = value;
        },
        enumerable: false,
        configurable: true
    });
    NotificationPolicyFiltersOutputReference.prototype.resetQueryTag = function () {
        this._queryTag = undefined;
    };
    Object.defineProperty(NotificationPolicyFiltersOutputReference.prototype, "queryTagInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._queryTag;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(NotificationPolicyFiltersOutputReference.prototype, "requestsPerSecond", {
        get: function () {
            return this.getListAttribute('requests_per_second');
        },
        set: function (value) {
            this._requestsPerSecond = value;
        },
        enumerable: false,
        configurable: true
    });
    NotificationPolicyFiltersOutputReference.prototype.resetRequestsPerSecond = function () {
        this._requestsPerSecond = undefined;
    };
    Object.defineProperty(NotificationPolicyFiltersOutputReference.prototype, "requestsPerSecondInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._requestsPerSecond;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(NotificationPolicyFiltersOutputReference.prototype, "selectors", {
        get: function () {
            return this.getListAttribute('selectors');
        },
        set: function (value) {
            this._selectors = value;
        },
        enumerable: false,
        configurable: true
    });
    NotificationPolicyFiltersOutputReference.prototype.resetSelectors = function () {
        this._selectors = undefined;
    };
    Object.defineProperty(NotificationPolicyFiltersOutputReference.prototype, "selectorsInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._selectors;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(NotificationPolicyFiltersOutputReference.prototype, "services", {
        get: function () {
            return this.getListAttribute('services');
        },
        set: function (value) {
            this._services = value;
        },
        enumerable: false,
        configurable: true
    });
    NotificationPolicyFiltersOutputReference.prototype.resetServices = function () {
        this._services = undefined;
    };
    Object.defineProperty(NotificationPolicyFiltersOutputReference.prototype, "servicesInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._services;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(NotificationPolicyFiltersOutputReference.prototype, "slo", {
        get: function () {
            return this.getListAttribute('slo');
        },
        set: function (value) {
            this._slo = value;
        },
        enumerable: false,
        configurable: true
    });
    NotificationPolicyFiltersOutputReference.prototype.resetSlo = function () {
        this._slo = undefined;
    };
    Object.defineProperty(NotificationPolicyFiltersOutputReference.prototype, "sloInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._slo;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(NotificationPolicyFiltersOutputReference.prototype, "status", {
        get: function () {
            return this.getListAttribute('status');
        },
        set: function (value) {
            this._status = value;
        },
        enumerable: false,
        configurable: true
    });
    NotificationPolicyFiltersOutputReference.prototype.resetStatus = function () {
        this._status = undefined;
    };
    Object.defineProperty(NotificationPolicyFiltersOutputReference.prototype, "statusInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._status;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(NotificationPolicyFiltersOutputReference.prototype, "targetHostname", {
        get: function () {
            return this.getListAttribute('target_hostname');
        },
        set: function (value) {
            this._targetHostname = value;
        },
        enumerable: false,
        configurable: true
    });
    NotificationPolicyFiltersOutputReference.prototype.resetTargetHostname = function () {
        this._targetHostname = undefined;
    };
    Object.defineProperty(NotificationPolicyFiltersOutputReference.prototype, "targetHostnameInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._targetHostname;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(NotificationPolicyFiltersOutputReference.prototype, "targetIp", {
        get: function () {
            return this.getListAttribute('target_ip');
        },
        set: function (value) {
            this._targetIp = value;
        },
        enumerable: false,
        configurable: true
    });
    NotificationPolicyFiltersOutputReference.prototype.resetTargetIp = function () {
        this._targetIp = undefined;
    };
    Object.defineProperty(NotificationPolicyFiltersOutputReference.prototype, "targetIpInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._targetIp;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(NotificationPolicyFiltersOutputReference.prototype, "targetZoneName", {
        get: function () {
            return this.getListAttribute('target_zone_name');
        },
        set: function (value) {
            this._targetZoneName = value;
        },
        enumerable: false,
        configurable: true
    });
    NotificationPolicyFiltersOutputReference.prototype.resetTargetZoneName = function () {
        this._targetZoneName = undefined;
    };
    Object.defineProperty(NotificationPolicyFiltersOutputReference.prototype, "targetZoneNameInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._targetZoneName;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(NotificationPolicyFiltersOutputReference.prototype, "trafficExclusions", {
        get: function () {
            return this.getListAttribute('traffic_exclusions');
        },
        set: function (value) {
            this._trafficExclusions = value;
        },
        enumerable: false,
        configurable: true
    });
    NotificationPolicyFiltersOutputReference.prototype.resetTrafficExclusions = function () {
        this._trafficExclusions = undefined;
    };
    Object.defineProperty(NotificationPolicyFiltersOutputReference.prototype, "trafficExclusionsInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._trafficExclusions;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(NotificationPolicyFiltersOutputReference.prototype, "tunnelId", {
        get: function () {
            return this.getListAttribute('tunnel_id');
        },
        set: function (value) {
            this._tunnelId = value;
        },
        enumerable: false,
        configurable: true
    });
    NotificationPolicyFiltersOutputReference.prototype.resetTunnelId = function () {
        this._tunnelId = undefined;
    };
    Object.defineProperty(NotificationPolicyFiltersOutputReference.prototype, "tunnelIdInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._tunnelId;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(NotificationPolicyFiltersOutputReference.prototype, "tunnelName", {
        get: function () {
            return this.getListAttribute('tunnel_name');
        },
        set: function (value) {
            this._tunnelName = value;
        },
        enumerable: false,
        configurable: true
    });
    NotificationPolicyFiltersOutputReference.prototype.resetTunnelName = function () {
        this._tunnelName = undefined;
    };
    Object.defineProperty(NotificationPolicyFiltersOutputReference.prototype, "tunnelNameInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._tunnelName;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(NotificationPolicyFiltersOutputReference.prototype, "type", {
        get: function () {
            return this.getListAttribute('type');
        },
        set: function (value) {
            this._type = value;
        },
        enumerable: false,
        configurable: true
    });
    NotificationPolicyFiltersOutputReference.prototype.resetType = function () {
        this._type = undefined;
    };
    Object.defineProperty(NotificationPolicyFiltersOutputReference.prototype, "typeInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._type;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(NotificationPolicyFiltersOutputReference.prototype, "where", {
        get: function () {
            return this.getListAttribute('where');
        },
        set: function (value) {
            this._where = value;
        },
        enumerable: false,
        configurable: true
    });
    NotificationPolicyFiltersOutputReference.prototype.resetWhere = function () {
        this._where = undefined;
    };
    Object.defineProperty(NotificationPolicyFiltersOutputReference.prototype, "whereInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._where;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(NotificationPolicyFiltersOutputReference.prototype, "zones", {
        get: function () {
            return this.getListAttribute('zones');
        },
        set: function (value) {
            this._zones = value;
        },
        enumerable: false,
        configurable: true
    });
    NotificationPolicyFiltersOutputReference.prototype.resetZones = function () {
        this._zones = undefined;
    };
    Object.defineProperty(NotificationPolicyFiltersOutputReference.prototype, "zonesInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._zones;
        },
        enumerable: false,
        configurable: true
    });
    return NotificationPolicyFiltersOutputReference;
}(cdktf.ComplexObject));
exports.NotificationPolicyFiltersOutputReference = NotificationPolicyFiltersOutputReference;
function notificationPolicyMechanismsEmailToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        id: cdktf.stringToTerraform(struct.id),
    };
}
function notificationPolicyMechanismsEmailToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    var attrs = {
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
var NotificationPolicyMechanismsEmailOutputReference = /** @class */ (function (_super) {
    __extends(NotificationPolicyMechanismsEmailOutputReference, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    function NotificationPolicyMechanismsEmailOutputReference(terraformResource, terraformAttribute, complexObjectIndex, complexObjectIsFromSet) {
        var _this = _super.call(this, terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex) || this;
        _this.isEmptyObject = false;
        return _this;
    }
    Object.defineProperty(NotificationPolicyMechanismsEmailOutputReference.prototype, "internalValue", {
        get: function () {
            if (this.resolvableValue) {
                return this.resolvableValue;
            }
            var hasAnyValues = this.isEmptyObject;
            var internalValueResult = {};
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
                this._id = undefined;
            }
            else if (cdktf.Tokenization.isResolvable(value)) {
                this.isEmptyObject = false;
                this.resolvableValue = value;
            }
            else {
                this.isEmptyObject = Object.keys(value).length === 0;
                this.resolvableValue = undefined;
                this._id = value.id;
            }
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(NotificationPolicyMechanismsEmailOutputReference.prototype, "id", {
        get: function () {
            return this.getStringAttribute('id');
        },
        set: function (value) {
            this._id = value;
        },
        enumerable: false,
        configurable: true
    });
    NotificationPolicyMechanismsEmailOutputReference.prototype.resetId = function () {
        this._id = undefined;
    };
    Object.defineProperty(NotificationPolicyMechanismsEmailOutputReference.prototype, "idInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._id;
        },
        enumerable: false,
        configurable: true
    });
    return NotificationPolicyMechanismsEmailOutputReference;
}(cdktf.ComplexObject));
exports.NotificationPolicyMechanismsEmailOutputReference = NotificationPolicyMechanismsEmailOutputReference;
var NotificationPolicyMechanismsEmailList = /** @class */ (function (_super) {
    __extends(NotificationPolicyMechanismsEmailList, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    function NotificationPolicyMechanismsEmailList(terraformResource, terraformAttribute, wrapsSet) {
        var _this = _super.call(this, terraformResource, terraformAttribute, wrapsSet) || this;
        _this.terraformResource = terraformResource;
        _this.terraformAttribute = terraformAttribute;
        _this.wrapsSet = wrapsSet;
        return _this;
    }
    /**
    * @param index the index of the item to return
    */
    NotificationPolicyMechanismsEmailList.prototype.get = function (index) {
        return new NotificationPolicyMechanismsEmailOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
    };
    return NotificationPolicyMechanismsEmailList;
}(cdktf.ComplexList));
exports.NotificationPolicyMechanismsEmailList = NotificationPolicyMechanismsEmailList;
function notificationPolicyMechanismsPagerdutyToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        id: cdktf.stringToTerraform(struct.id),
    };
}
function notificationPolicyMechanismsPagerdutyToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    var attrs = {
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
var NotificationPolicyMechanismsPagerdutyOutputReference = /** @class */ (function (_super) {
    __extends(NotificationPolicyMechanismsPagerdutyOutputReference, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    function NotificationPolicyMechanismsPagerdutyOutputReference(terraformResource, terraformAttribute, complexObjectIndex, complexObjectIsFromSet) {
        var _this = _super.call(this, terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex) || this;
        _this.isEmptyObject = false;
        return _this;
    }
    Object.defineProperty(NotificationPolicyMechanismsPagerdutyOutputReference.prototype, "internalValue", {
        get: function () {
            if (this.resolvableValue) {
                return this.resolvableValue;
            }
            var hasAnyValues = this.isEmptyObject;
            var internalValueResult = {};
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
                this._id = undefined;
            }
            else if (cdktf.Tokenization.isResolvable(value)) {
                this.isEmptyObject = false;
                this.resolvableValue = value;
            }
            else {
                this.isEmptyObject = Object.keys(value).length === 0;
                this.resolvableValue = undefined;
                this._id = value.id;
            }
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(NotificationPolicyMechanismsPagerdutyOutputReference.prototype, "id", {
        get: function () {
            return this.getStringAttribute('id');
        },
        set: function (value) {
            this._id = value;
        },
        enumerable: false,
        configurable: true
    });
    NotificationPolicyMechanismsPagerdutyOutputReference.prototype.resetId = function () {
        this._id = undefined;
    };
    Object.defineProperty(NotificationPolicyMechanismsPagerdutyOutputReference.prototype, "idInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._id;
        },
        enumerable: false,
        configurable: true
    });
    return NotificationPolicyMechanismsPagerdutyOutputReference;
}(cdktf.ComplexObject));
exports.NotificationPolicyMechanismsPagerdutyOutputReference = NotificationPolicyMechanismsPagerdutyOutputReference;
var NotificationPolicyMechanismsPagerdutyList = /** @class */ (function (_super) {
    __extends(NotificationPolicyMechanismsPagerdutyList, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    function NotificationPolicyMechanismsPagerdutyList(terraformResource, terraformAttribute, wrapsSet) {
        var _this = _super.call(this, terraformResource, terraformAttribute, wrapsSet) || this;
        _this.terraformResource = terraformResource;
        _this.terraformAttribute = terraformAttribute;
        _this.wrapsSet = wrapsSet;
        return _this;
    }
    /**
    * @param index the index of the item to return
    */
    NotificationPolicyMechanismsPagerdutyList.prototype.get = function (index) {
        return new NotificationPolicyMechanismsPagerdutyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
    };
    return NotificationPolicyMechanismsPagerdutyList;
}(cdktf.ComplexList));
exports.NotificationPolicyMechanismsPagerdutyList = NotificationPolicyMechanismsPagerdutyList;
function notificationPolicyMechanismsWebhooksToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        id: cdktf.stringToTerraform(struct.id),
    };
}
function notificationPolicyMechanismsWebhooksToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    var attrs = {
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
var NotificationPolicyMechanismsWebhooksOutputReference = /** @class */ (function (_super) {
    __extends(NotificationPolicyMechanismsWebhooksOutputReference, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    function NotificationPolicyMechanismsWebhooksOutputReference(terraformResource, terraformAttribute, complexObjectIndex, complexObjectIsFromSet) {
        var _this = _super.call(this, terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex) || this;
        _this.isEmptyObject = false;
        return _this;
    }
    Object.defineProperty(NotificationPolicyMechanismsWebhooksOutputReference.prototype, "internalValue", {
        get: function () {
            if (this.resolvableValue) {
                return this.resolvableValue;
            }
            var hasAnyValues = this.isEmptyObject;
            var internalValueResult = {};
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
                this._id = undefined;
            }
            else if (cdktf.Tokenization.isResolvable(value)) {
                this.isEmptyObject = false;
                this.resolvableValue = value;
            }
            else {
                this.isEmptyObject = Object.keys(value).length === 0;
                this.resolvableValue = undefined;
                this._id = value.id;
            }
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(NotificationPolicyMechanismsWebhooksOutputReference.prototype, "id", {
        get: function () {
            return this.getStringAttribute('id');
        },
        set: function (value) {
            this._id = value;
        },
        enumerable: false,
        configurable: true
    });
    NotificationPolicyMechanismsWebhooksOutputReference.prototype.resetId = function () {
        this._id = undefined;
    };
    Object.defineProperty(NotificationPolicyMechanismsWebhooksOutputReference.prototype, "idInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._id;
        },
        enumerable: false,
        configurable: true
    });
    return NotificationPolicyMechanismsWebhooksOutputReference;
}(cdktf.ComplexObject));
exports.NotificationPolicyMechanismsWebhooksOutputReference = NotificationPolicyMechanismsWebhooksOutputReference;
var NotificationPolicyMechanismsWebhooksList = /** @class */ (function (_super) {
    __extends(NotificationPolicyMechanismsWebhooksList, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    function NotificationPolicyMechanismsWebhooksList(terraformResource, terraformAttribute, wrapsSet) {
        var _this = _super.call(this, terraformResource, terraformAttribute, wrapsSet) || this;
        _this.terraformResource = terraformResource;
        _this.terraformAttribute = terraformAttribute;
        _this.wrapsSet = wrapsSet;
        return _this;
    }
    /**
    * @param index the index of the item to return
    */
    NotificationPolicyMechanismsWebhooksList.prototype.get = function (index) {
        return new NotificationPolicyMechanismsWebhooksOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
    };
    return NotificationPolicyMechanismsWebhooksList;
}(cdktf.ComplexList));
exports.NotificationPolicyMechanismsWebhooksList = NotificationPolicyMechanismsWebhooksList;
function notificationPolicyMechanismsToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        email: cdktf.listMapper(notificationPolicyMechanismsEmailToTerraform, false)(struct.email),
        pagerduty: cdktf.listMapper(notificationPolicyMechanismsPagerdutyToTerraform, false)(struct.pagerduty),
        webhooks: cdktf.listMapper(notificationPolicyMechanismsWebhooksToTerraform, false)(struct.webhooks),
    };
}
function notificationPolicyMechanismsToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    var attrs = {
        email: {
            value: cdktf.listMapperHcl(notificationPolicyMechanismsEmailToHclTerraform, false)(struct.email),
            isBlock: true,
            type: "set",
            storageClassType: "NotificationPolicyMechanismsEmailList",
        },
        pagerduty: {
            value: cdktf.listMapperHcl(notificationPolicyMechanismsPagerdutyToHclTerraform, false)(struct.pagerduty),
            isBlock: true,
            type: "set",
            storageClassType: "NotificationPolicyMechanismsPagerdutyList",
        },
        webhooks: {
            value: cdktf.listMapperHcl(notificationPolicyMechanismsWebhooksToHclTerraform, false)(struct.webhooks),
            isBlock: true,
            type: "set",
            storageClassType: "NotificationPolicyMechanismsWebhooksList",
        },
    };
    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(function (_a) {
        var _ = _a[0], value = _a[1];
        return value !== undefined && value.value !== undefined;
    }));
}
var NotificationPolicyMechanismsOutputReference = /** @class */ (function (_super) {
    __extends(NotificationPolicyMechanismsOutputReference, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    function NotificationPolicyMechanismsOutputReference(terraformResource, terraformAttribute) {
        var _this = _super.call(this, terraformResource, terraformAttribute, false) || this;
        _this.isEmptyObject = false;
        // email - computed: false, optional: true, required: false
        _this._email = new NotificationPolicyMechanismsEmailList(_this, "email", true);
        // pagerduty - computed: false, optional: true, required: false
        _this._pagerduty = new NotificationPolicyMechanismsPagerdutyList(_this, "pagerduty", true);
        // webhooks - computed: false, optional: true, required: false
        _this._webhooks = new NotificationPolicyMechanismsWebhooksList(_this, "webhooks", true);
        return _this;
    }
    Object.defineProperty(NotificationPolicyMechanismsOutputReference.prototype, "internalValue", {
        get: function () {
            var _a, _b, _c, _d, _e, _f;
            if (this.resolvableValue) {
                return this.resolvableValue;
            }
            var hasAnyValues = this.isEmptyObject;
            var internalValueResult = {};
            if (((_a = this._email) === null || _a === void 0 ? void 0 : _a.internalValue) !== undefined) {
                hasAnyValues = true;
                internalValueResult.email = (_b = this._email) === null || _b === void 0 ? void 0 : _b.internalValue;
            }
            if (((_c = this._pagerduty) === null || _c === void 0 ? void 0 : _c.internalValue) !== undefined) {
                hasAnyValues = true;
                internalValueResult.pagerduty = (_d = this._pagerduty) === null || _d === void 0 ? void 0 : _d.internalValue;
            }
            if (((_e = this._webhooks) === null || _e === void 0 ? void 0 : _e.internalValue) !== undefined) {
                hasAnyValues = true;
                internalValueResult.webhooks = (_f = this._webhooks) === null || _f === void 0 ? void 0 : _f.internalValue;
            }
            return hasAnyValues ? internalValueResult : undefined;
        },
        set: function (value) {
            if (value === undefined) {
                this.isEmptyObject = false;
                this.resolvableValue = undefined;
                this._email.internalValue = undefined;
                this._pagerduty.internalValue = undefined;
                this._webhooks.internalValue = undefined;
            }
            else if (cdktf.Tokenization.isResolvable(value)) {
                this.isEmptyObject = false;
                this.resolvableValue = value;
            }
            else {
                this.isEmptyObject = Object.keys(value).length === 0;
                this.resolvableValue = undefined;
                this._email.internalValue = value.email;
                this._pagerduty.internalValue = value.pagerduty;
                this._webhooks.internalValue = value.webhooks;
            }
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(NotificationPolicyMechanismsOutputReference.prototype, "email", {
        get: function () {
            return this._email;
        },
        enumerable: false,
        configurable: true
    });
    NotificationPolicyMechanismsOutputReference.prototype.putEmail = function (value) {
        this._email.internalValue = value;
    };
    NotificationPolicyMechanismsOutputReference.prototype.resetEmail = function () {
        this._email.internalValue = undefined;
    };
    Object.defineProperty(NotificationPolicyMechanismsOutputReference.prototype, "emailInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._email.internalValue;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(NotificationPolicyMechanismsOutputReference.prototype, "pagerduty", {
        get: function () {
            return this._pagerduty;
        },
        enumerable: false,
        configurable: true
    });
    NotificationPolicyMechanismsOutputReference.prototype.putPagerduty = function (value) {
        this._pagerduty.internalValue = value;
    };
    NotificationPolicyMechanismsOutputReference.prototype.resetPagerduty = function () {
        this._pagerduty.internalValue = undefined;
    };
    Object.defineProperty(NotificationPolicyMechanismsOutputReference.prototype, "pagerdutyInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._pagerduty.internalValue;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(NotificationPolicyMechanismsOutputReference.prototype, "webhooks", {
        get: function () {
            return this._webhooks;
        },
        enumerable: false,
        configurable: true
    });
    NotificationPolicyMechanismsOutputReference.prototype.putWebhooks = function (value) {
        this._webhooks.internalValue = value;
    };
    NotificationPolicyMechanismsOutputReference.prototype.resetWebhooks = function () {
        this._webhooks.internalValue = undefined;
    };
    Object.defineProperty(NotificationPolicyMechanismsOutputReference.prototype, "webhooksInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._webhooks.internalValue;
        },
        enumerable: false,
        configurable: true
    });
    return NotificationPolicyMechanismsOutputReference;
}(cdktf.ComplexObject));
exports.NotificationPolicyMechanismsOutputReference = NotificationPolicyMechanismsOutputReference;
/**
* Represents a {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/notification_policy cloudflare_notification_policy}
*/
var NotificationPolicy = /** @class */ (function (_super) {
    __extends(NotificationPolicy, _super);
    // ===========
    // INITIALIZER
    // ===========
    /**
    * Create a new {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/notification_policy cloudflare_notification_policy} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options NotificationPolicyConfig
    */
    function NotificationPolicy(scope, id, config) {
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
        // filters - computed: false, optional: true, required: false
        _this._filters = new NotificationPolicyFiltersOutputReference(_this, "filters");
        // mechanisms - computed: false, optional: false, required: true
        _this._mechanisms = new NotificationPolicyMechanismsOutputReference(_this, "mechanisms");
        _this._accountId = config.accountId;
        _this._alertInterval = config.alertInterval;
        _this._alertType = config.alertType;
        _this._description = config.description;
        _this._enabled = config.enabled;
        _this._filters.internalValue = config.filters;
        _this._mechanisms.internalValue = config.mechanisms;
        _this._name = config.name;
        return _this;
    }
    // ==============
    // STATIC Methods
    // ==============
    /**
    * Generates CDKTF code for importing a NotificationPolicy resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the NotificationPolicy to import
    * @param importFromId The id of the existing NotificationPolicy that should be imported. Refer to the {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/notification_policy#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the NotificationPolicy to import is found
    */
    NotificationPolicy.generateConfigForImport = function (scope, importToId, importFromId, provider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "cloudflare_notification_policy", importId: importFromId, provider: provider });
    };
    Object.defineProperty(NotificationPolicy.prototype, "accountId", {
        get: function () {
            return this.getStringAttribute('account_id');
        },
        set: function (value) {
            this._accountId = value;
        },
        enumerable: false,
        configurable: true
    });
    NotificationPolicy.prototype.resetAccountId = function () {
        this._accountId = undefined;
    };
    Object.defineProperty(NotificationPolicy.prototype, "accountIdInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._accountId;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(NotificationPolicy.prototype, "alertInterval", {
        get: function () {
            return this.getStringAttribute('alert_interval');
        },
        set: function (value) {
            this._alertInterval = value;
        },
        enumerable: false,
        configurable: true
    });
    NotificationPolicy.prototype.resetAlertInterval = function () {
        this._alertInterval = undefined;
    };
    Object.defineProperty(NotificationPolicy.prototype, "alertIntervalInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._alertInterval;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(NotificationPolicy.prototype, "alertType", {
        get: function () {
            return this.getStringAttribute('alert_type');
        },
        set: function (value) {
            this._alertType = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(NotificationPolicy.prototype, "alertTypeInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._alertType;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(NotificationPolicy.prototype, "created", {
        // created - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('created');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(NotificationPolicy.prototype, "description", {
        get: function () {
            return this.getStringAttribute('description');
        },
        set: function (value) {
            this._description = value;
        },
        enumerable: false,
        configurable: true
    });
    NotificationPolicy.prototype.resetDescription = function () {
        this._description = undefined;
    };
    Object.defineProperty(NotificationPolicy.prototype, "descriptionInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._description;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(NotificationPolicy.prototype, "enabled", {
        get: function () {
            return this.getBooleanAttribute('enabled');
        },
        set: function (value) {
            this._enabled = value;
        },
        enumerable: false,
        configurable: true
    });
    NotificationPolicy.prototype.resetEnabled = function () {
        this._enabled = undefined;
    };
    Object.defineProperty(NotificationPolicy.prototype, "enabledInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._enabled;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(NotificationPolicy.prototype, "filters", {
        get: function () {
            return this._filters;
        },
        enumerable: false,
        configurable: true
    });
    NotificationPolicy.prototype.putFilters = function (value) {
        this._filters.internalValue = value;
    };
    NotificationPolicy.prototype.resetFilters = function () {
        this._filters.internalValue = undefined;
    };
    Object.defineProperty(NotificationPolicy.prototype, "filtersInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._filters.internalValue;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(NotificationPolicy.prototype, "id", {
        // id - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('id');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(NotificationPolicy.prototype, "mechanisms", {
        get: function () {
            return this._mechanisms;
        },
        enumerable: false,
        configurable: true
    });
    NotificationPolicy.prototype.putMechanisms = function (value) {
        this._mechanisms.internalValue = value;
    };
    Object.defineProperty(NotificationPolicy.prototype, "mechanismsInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._mechanisms.internalValue;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(NotificationPolicy.prototype, "modified", {
        // modified - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('modified');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(NotificationPolicy.prototype, "name", {
        get: function () {
            return this.getStringAttribute('name');
        },
        set: function (value) {
            this._name = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(NotificationPolicy.prototype, "nameInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._name;
        },
        enumerable: false,
        configurable: true
    });
    // =========
    // SYNTHESIS
    // =========
    NotificationPolicy.prototype.synthesizeAttributes = function () {
        return {
            account_id: cdktf.stringToTerraform(this._accountId),
            alert_interval: cdktf.stringToTerraform(this._alertInterval),
            alert_type: cdktf.stringToTerraform(this._alertType),
            description: cdktf.stringToTerraform(this._description),
            enabled: cdktf.booleanToTerraform(this._enabled),
            filters: notificationPolicyFiltersToTerraform(this._filters.internalValue),
            mechanisms: notificationPolicyMechanismsToTerraform(this._mechanisms.internalValue),
            name: cdktf.stringToTerraform(this._name),
        };
    };
    NotificationPolicy.prototype.synthesizeHclAttributes = function () {
        var attrs = {
            account_id: {
                value: cdktf.stringToHclTerraform(this._accountId),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            alert_interval: {
                value: cdktf.stringToHclTerraform(this._alertInterval),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            alert_type: {
                value: cdktf.stringToHclTerraform(this._alertType),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            description: {
                value: cdktf.stringToHclTerraform(this._description),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            enabled: {
                value: cdktf.booleanToHclTerraform(this._enabled),
                isBlock: false,
                type: "simple",
                storageClassType: "boolean",
            },
            filters: {
                value: notificationPolicyFiltersToHclTerraform(this._filters.internalValue),
                isBlock: true,
                type: "struct",
                storageClassType: "NotificationPolicyFilters",
            },
            mechanisms: {
                value: notificationPolicyMechanismsToHclTerraform(this._mechanisms.internalValue),
                isBlock: true,
                type: "struct",
                storageClassType: "NotificationPolicyMechanisms",
            },
            name: {
                value: cdktf.stringToHclTerraform(this._name),
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
    NotificationPolicy.tfResourceType = "cloudflare_notification_policy";
    return NotificationPolicy;
}(cdktf.TerraformResource));
exports.NotificationPolicy = NotificationPolicy;
