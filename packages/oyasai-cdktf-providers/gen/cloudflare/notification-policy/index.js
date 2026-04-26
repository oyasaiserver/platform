// https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/notification_policy
// generated from terraform resource schema
import * as cdktf from 'cdktf';
export function notificationPolicyFiltersToTerraform(struct) {
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
export function notificationPolicyFiltersToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    const attrs = {
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
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}
export class NotificationPolicyFiltersOutputReference extends cdktf.ComplexObject {
    isEmptyObject = false;
    resolvableValue;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource, terraformAttribute) {
        super(terraformResource, terraformAttribute, false);
    }
    get internalValue() {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult = {};
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
    }
    set internalValue(value) {
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
    }
    // actions - computed: false, optional: true, required: false
    _actions;
    get actions() {
        return this.getListAttribute('actions');
    }
    set actions(value) {
        this._actions = value;
    }
    resetActions() {
        this._actions = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get actionsInput() {
        return this._actions;
    }
    // affected_asns - computed: false, optional: true, required: false
    _affectedAsns;
    get affectedAsns() {
        return this.getListAttribute('affected_asns');
    }
    set affectedAsns(value) {
        this._affectedAsns = value;
    }
    resetAffectedAsns() {
        this._affectedAsns = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get affectedAsnsInput() {
        return this._affectedAsns;
    }
    // affected_components - computed: false, optional: true, required: false
    _affectedComponents;
    get affectedComponents() {
        return this.getListAttribute('affected_components');
    }
    set affectedComponents(value) {
        this._affectedComponents = value;
    }
    resetAffectedComponents() {
        this._affectedComponents = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get affectedComponentsInput() {
        return this._affectedComponents;
    }
    // affected_locations - computed: false, optional: true, required: false
    _affectedLocations;
    get affectedLocations() {
        return this.getListAttribute('affected_locations');
    }
    set affectedLocations(value) {
        this._affectedLocations = value;
    }
    resetAffectedLocations() {
        this._affectedLocations = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get affectedLocationsInput() {
        return this._affectedLocations;
    }
    // airport_code - computed: false, optional: true, required: false
    _airportCode;
    get airportCode() {
        return this.getListAttribute('airport_code');
    }
    set airportCode(value) {
        this._airportCode = value;
    }
    resetAirportCode() {
        this._airportCode = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get airportCodeInput() {
        return this._airportCode;
    }
    // alert_trigger_preferences - computed: false, optional: true, required: false
    _alertTriggerPreferences;
    get alertTriggerPreferences() {
        return this.getListAttribute('alert_trigger_preferences');
    }
    set alertTriggerPreferences(value) {
        this._alertTriggerPreferences = value;
    }
    resetAlertTriggerPreferences() {
        this._alertTriggerPreferences = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get alertTriggerPreferencesInput() {
        return this._alertTriggerPreferences;
    }
    // alert_trigger_preferences_value - computed: false, optional: true, required: false
    _alertTriggerPreferencesValue;
    get alertTriggerPreferencesValue() {
        return this.getListAttribute('alert_trigger_preferences_value');
    }
    set alertTriggerPreferencesValue(value) {
        this._alertTriggerPreferencesValue = value;
    }
    resetAlertTriggerPreferencesValue() {
        this._alertTriggerPreferencesValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get alertTriggerPreferencesValueInput() {
        return this._alertTriggerPreferencesValue;
    }
    // enabled - computed: false, optional: true, required: false
    _enabled;
    get enabled() {
        return this.getListAttribute('enabled');
    }
    set enabled(value) {
        this._enabled = value;
    }
    resetEnabled() {
        this._enabled = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get enabledInput() {
        return this._enabled;
    }
    // environment - computed: false, optional: true, required: false
    _environment;
    get environment() {
        return this.getListAttribute('environment');
    }
    set environment(value) {
        this._environment = value;
    }
    resetEnvironment() {
        this._environment = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get environmentInput() {
        return this._environment;
    }
    // event - computed: false, optional: true, required: false
    _event;
    get event() {
        return this.getListAttribute('event');
    }
    set event(value) {
        this._event = value;
    }
    resetEvent() {
        this._event = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get eventInput() {
        return this._event;
    }
    // event_source - computed: false, optional: true, required: false
    _eventSource;
    get eventSource() {
        return this.getListAttribute('event_source');
    }
    set eventSource(value) {
        this._eventSource = value;
    }
    resetEventSource() {
        this._eventSource = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get eventSourceInput() {
        return this._eventSource;
    }
    // event_type - computed: false, optional: true, required: false
    _eventType;
    get eventType() {
        return this.getListAttribute('event_type');
    }
    set eventType(value) {
        this._eventType = value;
    }
    resetEventType() {
        this._eventType = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get eventTypeInput() {
        return this._eventType;
    }
    // group_by - computed: false, optional: true, required: false
    _groupBy;
    get groupBy() {
        return this.getListAttribute('group_by');
    }
    set groupBy(value) {
        this._groupBy = value;
    }
    resetGroupBy() {
        this._groupBy = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get groupByInput() {
        return this._groupBy;
    }
    // health_check_id - computed: false, optional: true, required: false
    _healthCheckId;
    get healthCheckId() {
        return this.getListAttribute('health_check_id');
    }
    set healthCheckId(value) {
        this._healthCheckId = value;
    }
    resetHealthCheckId() {
        this._healthCheckId = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get healthCheckIdInput() {
        return this._healthCheckId;
    }
    // incident_impact - computed: false, optional: true, required: false
    _incidentImpact;
    get incidentImpact() {
        return this.getListAttribute('incident_impact');
    }
    set incidentImpact(value) {
        this._incidentImpact = value;
    }
    resetIncidentImpact() {
        this._incidentImpact = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get incidentImpactInput() {
        return this._incidentImpact;
    }
    // input_id - computed: false, optional: true, required: false
    _inputId;
    get inputId() {
        return this.getListAttribute('input_id');
    }
    set inputId(value) {
        this._inputId = value;
    }
    resetInputId() {
        this._inputId = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get inputIdInput() {
        return this._inputId;
    }
    // insight_class - computed: false, optional: true, required: false
    _insightClass;
    get insightClass() {
        return this.getListAttribute('insight_class');
    }
    set insightClass(value) {
        this._insightClass = value;
    }
    resetInsightClass() {
        this._insightClass = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get insightClassInput() {
        return this._insightClass;
    }
    // limit - computed: false, optional: true, required: false
    _limit;
    get limit() {
        return this.getListAttribute('limit');
    }
    set limit(value) {
        this._limit = value;
    }
    resetLimit() {
        this._limit = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get limitInput() {
        return this._limit;
    }
    // logo_tag - computed: false, optional: true, required: false
    _logoTag;
    get logoTag() {
        return this.getListAttribute('logo_tag');
    }
    set logoTag(value) {
        this._logoTag = value;
    }
    resetLogoTag() {
        this._logoTag = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get logoTagInput() {
        return this._logoTag;
    }
    // megabits_per_second - computed: false, optional: true, required: false
    _megabitsPerSecond;
    get megabitsPerSecond() {
        return this.getListAttribute('megabits_per_second');
    }
    set megabitsPerSecond(value) {
        this._megabitsPerSecond = value;
    }
    resetMegabitsPerSecond() {
        this._megabitsPerSecond = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get megabitsPerSecondInput() {
        return this._megabitsPerSecond;
    }
    // new_health - computed: false, optional: true, required: false
    _newHealth;
    get newHealth() {
        return this.getListAttribute('new_health');
    }
    set newHealth(value) {
        this._newHealth = value;
    }
    resetNewHealth() {
        this._newHealth = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get newHealthInput() {
        return this._newHealth;
    }
    // new_status - computed: false, optional: true, required: false
    _newStatus;
    get newStatus() {
        return this.getListAttribute('new_status');
    }
    set newStatus(value) {
        this._newStatus = value;
    }
    resetNewStatus() {
        this._newStatus = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get newStatusInput() {
        return this._newStatus;
    }
    // packets_per_second - computed: false, optional: true, required: false
    _packetsPerSecond;
    get packetsPerSecond() {
        return this.getListAttribute('packets_per_second');
    }
    set packetsPerSecond(value) {
        this._packetsPerSecond = value;
    }
    resetPacketsPerSecond() {
        this._packetsPerSecond = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get packetsPerSecondInput() {
        return this._packetsPerSecond;
    }
    // pool_id - computed: false, optional: true, required: false
    _poolId;
    get poolId() {
        return this.getListAttribute('pool_id');
    }
    set poolId(value) {
        this._poolId = value;
    }
    resetPoolId() {
        this._poolId = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get poolIdInput() {
        return this._poolId;
    }
    // pop_names - computed: false, optional: true, required: false
    _popNames;
    get popNames() {
        return this.getListAttribute('pop_names');
    }
    set popNames(value) {
        this._popNames = value;
    }
    resetPopNames() {
        this._popNames = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get popNamesInput() {
        return this._popNames;
    }
    // product - computed: false, optional: true, required: false
    _product;
    get product() {
        return this.getListAttribute('product');
    }
    set product(value) {
        this._product = value;
    }
    resetProduct() {
        this._product = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get productInput() {
        return this._product;
    }
    // project_id - computed: false, optional: true, required: false
    _projectId;
    get projectId() {
        return this.getListAttribute('project_id');
    }
    set projectId(value) {
        this._projectId = value;
    }
    resetProjectId() {
        this._projectId = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get projectIdInput() {
        return this._projectId;
    }
    // protocol - computed: false, optional: true, required: false
    _protocol;
    get protocol() {
        return this.getListAttribute('protocol');
    }
    set protocol(value) {
        this._protocol = value;
    }
    resetProtocol() {
        this._protocol = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get protocolInput() {
        return this._protocol;
    }
    // query_tag - computed: false, optional: true, required: false
    _queryTag;
    get queryTag() {
        return this.getListAttribute('query_tag');
    }
    set queryTag(value) {
        this._queryTag = value;
    }
    resetQueryTag() {
        this._queryTag = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get queryTagInput() {
        return this._queryTag;
    }
    // requests_per_second - computed: false, optional: true, required: false
    _requestsPerSecond;
    get requestsPerSecond() {
        return this.getListAttribute('requests_per_second');
    }
    set requestsPerSecond(value) {
        this._requestsPerSecond = value;
    }
    resetRequestsPerSecond() {
        this._requestsPerSecond = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get requestsPerSecondInput() {
        return this._requestsPerSecond;
    }
    // selectors - computed: false, optional: true, required: false
    _selectors;
    get selectors() {
        return this.getListAttribute('selectors');
    }
    set selectors(value) {
        this._selectors = value;
    }
    resetSelectors() {
        this._selectors = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get selectorsInput() {
        return this._selectors;
    }
    // services - computed: false, optional: true, required: false
    _services;
    get services() {
        return this.getListAttribute('services');
    }
    set services(value) {
        this._services = value;
    }
    resetServices() {
        this._services = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get servicesInput() {
        return this._services;
    }
    // slo - computed: false, optional: true, required: false
    _slo;
    get slo() {
        return this.getListAttribute('slo');
    }
    set slo(value) {
        this._slo = value;
    }
    resetSlo() {
        this._slo = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get sloInput() {
        return this._slo;
    }
    // status - computed: false, optional: true, required: false
    _status;
    get status() {
        return this.getListAttribute('status');
    }
    set status(value) {
        this._status = value;
    }
    resetStatus() {
        this._status = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get statusInput() {
        return this._status;
    }
    // target_hostname - computed: false, optional: true, required: false
    _targetHostname;
    get targetHostname() {
        return this.getListAttribute('target_hostname');
    }
    set targetHostname(value) {
        this._targetHostname = value;
    }
    resetTargetHostname() {
        this._targetHostname = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get targetHostnameInput() {
        return this._targetHostname;
    }
    // target_ip - computed: false, optional: true, required: false
    _targetIp;
    get targetIp() {
        return this.getListAttribute('target_ip');
    }
    set targetIp(value) {
        this._targetIp = value;
    }
    resetTargetIp() {
        this._targetIp = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get targetIpInput() {
        return this._targetIp;
    }
    // target_zone_name - computed: false, optional: true, required: false
    _targetZoneName;
    get targetZoneName() {
        return this.getListAttribute('target_zone_name');
    }
    set targetZoneName(value) {
        this._targetZoneName = value;
    }
    resetTargetZoneName() {
        this._targetZoneName = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get targetZoneNameInput() {
        return this._targetZoneName;
    }
    // traffic_exclusions - computed: false, optional: true, required: false
    _trafficExclusions;
    get trafficExclusions() {
        return this.getListAttribute('traffic_exclusions');
    }
    set trafficExclusions(value) {
        this._trafficExclusions = value;
    }
    resetTrafficExclusions() {
        this._trafficExclusions = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get trafficExclusionsInput() {
        return this._trafficExclusions;
    }
    // tunnel_id - computed: false, optional: true, required: false
    _tunnelId;
    get tunnelId() {
        return this.getListAttribute('tunnel_id');
    }
    set tunnelId(value) {
        this._tunnelId = value;
    }
    resetTunnelId() {
        this._tunnelId = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get tunnelIdInput() {
        return this._tunnelId;
    }
    // tunnel_name - computed: false, optional: true, required: false
    _tunnelName;
    get tunnelName() {
        return this.getListAttribute('tunnel_name');
    }
    set tunnelName(value) {
        this._tunnelName = value;
    }
    resetTunnelName() {
        this._tunnelName = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get tunnelNameInput() {
        return this._tunnelName;
    }
    // type - computed: false, optional: true, required: false
    _type;
    get type() {
        return this.getListAttribute('type');
    }
    set type(value) {
        this._type = value;
    }
    resetType() {
        this._type = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get typeInput() {
        return this._type;
    }
    // where - computed: false, optional: true, required: false
    _where;
    get where() {
        return this.getListAttribute('where');
    }
    set where(value) {
        this._where = value;
    }
    resetWhere() {
        this._where = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get whereInput() {
        return this._where;
    }
    // zones - computed: false, optional: true, required: false
    _zones;
    get zones() {
        return this.getListAttribute('zones');
    }
    set zones(value) {
        this._zones = value;
    }
    resetZones() {
        this._zones = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get zonesInput() {
        return this._zones;
    }
}
export function notificationPolicyMechanismsEmailToTerraform(struct) {
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
export function notificationPolicyMechanismsEmailToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    const attrs = {
        id: {
            value: cdktf.stringToHclTerraform(struct.id),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };
    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}
export class NotificationPolicyMechanismsEmailOutputReference extends cdktf.ComplexObject {
    isEmptyObject = false;
    resolvableValue;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource, terraformAttribute, complexObjectIndex, complexObjectIsFromSet) {
        super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
    }
    get internalValue() {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult = {};
        if (this._id !== undefined) {
            hasAnyValues = true;
            internalValueResult.id = this._id;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }
    set internalValue(value) {
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
    }
    // id - computed: false, optional: true, required: false
    _id;
    get id() {
        return this.getStringAttribute('id');
    }
    set id(value) {
        this._id = value;
    }
    resetId() {
        this._id = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get idInput() {
        return this._id;
    }
}
export class NotificationPolicyMechanismsEmailList extends cdktf.ComplexList {
    terraformResource;
    terraformAttribute;
    wrapsSet;
    internalValue;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource, terraformAttribute, wrapsSet) {
        super(terraformResource, terraformAttribute, wrapsSet);
        this.terraformResource = terraformResource;
        this.terraformAttribute = terraformAttribute;
        this.wrapsSet = wrapsSet;
    }
    /**
    * @param index the index of the item to return
    */
    get(index) {
        return new NotificationPolicyMechanismsEmailOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
    }
}
export function notificationPolicyMechanismsPagerdutyToTerraform(struct) {
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
export function notificationPolicyMechanismsPagerdutyToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    const attrs = {
        id: {
            value: cdktf.stringToHclTerraform(struct.id),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };
    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}
export class NotificationPolicyMechanismsPagerdutyOutputReference extends cdktf.ComplexObject {
    isEmptyObject = false;
    resolvableValue;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource, terraformAttribute, complexObjectIndex, complexObjectIsFromSet) {
        super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
    }
    get internalValue() {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult = {};
        if (this._id !== undefined) {
            hasAnyValues = true;
            internalValueResult.id = this._id;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }
    set internalValue(value) {
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
    }
    // id - computed: false, optional: true, required: false
    _id;
    get id() {
        return this.getStringAttribute('id');
    }
    set id(value) {
        this._id = value;
    }
    resetId() {
        this._id = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get idInput() {
        return this._id;
    }
}
export class NotificationPolicyMechanismsPagerdutyList extends cdktf.ComplexList {
    terraformResource;
    terraformAttribute;
    wrapsSet;
    internalValue;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource, terraformAttribute, wrapsSet) {
        super(terraformResource, terraformAttribute, wrapsSet);
        this.terraformResource = terraformResource;
        this.terraformAttribute = terraformAttribute;
        this.wrapsSet = wrapsSet;
    }
    /**
    * @param index the index of the item to return
    */
    get(index) {
        return new NotificationPolicyMechanismsPagerdutyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
    }
}
export function notificationPolicyMechanismsWebhooksToTerraform(struct) {
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
export function notificationPolicyMechanismsWebhooksToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    const attrs = {
        id: {
            value: cdktf.stringToHclTerraform(struct.id),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };
    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}
export class NotificationPolicyMechanismsWebhooksOutputReference extends cdktf.ComplexObject {
    isEmptyObject = false;
    resolvableValue;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource, terraformAttribute, complexObjectIndex, complexObjectIsFromSet) {
        super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
    }
    get internalValue() {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult = {};
        if (this._id !== undefined) {
            hasAnyValues = true;
            internalValueResult.id = this._id;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }
    set internalValue(value) {
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
    }
    // id - computed: false, optional: true, required: false
    _id;
    get id() {
        return this.getStringAttribute('id');
    }
    set id(value) {
        this._id = value;
    }
    resetId() {
        this._id = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get idInput() {
        return this._id;
    }
}
export class NotificationPolicyMechanismsWebhooksList extends cdktf.ComplexList {
    terraformResource;
    terraformAttribute;
    wrapsSet;
    internalValue;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource, terraformAttribute, wrapsSet) {
        super(terraformResource, terraformAttribute, wrapsSet);
        this.terraformResource = terraformResource;
        this.terraformAttribute = terraformAttribute;
        this.wrapsSet = wrapsSet;
    }
    /**
    * @param index the index of the item to return
    */
    get(index) {
        return new NotificationPolicyMechanismsWebhooksOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
    }
}
export function notificationPolicyMechanismsToTerraform(struct) {
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
export function notificationPolicyMechanismsToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    const attrs = {
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
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}
export class NotificationPolicyMechanismsOutputReference extends cdktf.ComplexObject {
    isEmptyObject = false;
    resolvableValue;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource, terraformAttribute) {
        super(terraformResource, terraformAttribute, false);
    }
    get internalValue() {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult = {};
        if (this._email?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.email = this._email?.internalValue;
        }
        if (this._pagerduty?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.pagerduty = this._pagerduty?.internalValue;
        }
        if (this._webhooks?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.webhooks = this._webhooks?.internalValue;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }
    set internalValue(value) {
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
    }
    // email - computed: false, optional: true, required: false
    _email = new NotificationPolicyMechanismsEmailList(this, "email", true);
    get email() {
        return this._email;
    }
    putEmail(value) {
        this._email.internalValue = value;
    }
    resetEmail() {
        this._email.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get emailInput() {
        return this._email.internalValue;
    }
    // pagerduty - computed: false, optional: true, required: false
    _pagerduty = new NotificationPolicyMechanismsPagerdutyList(this, "pagerduty", true);
    get pagerduty() {
        return this._pagerduty;
    }
    putPagerduty(value) {
        this._pagerduty.internalValue = value;
    }
    resetPagerduty() {
        this._pagerduty.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get pagerdutyInput() {
        return this._pagerduty.internalValue;
    }
    // webhooks - computed: false, optional: true, required: false
    _webhooks = new NotificationPolicyMechanismsWebhooksList(this, "webhooks", true);
    get webhooks() {
        return this._webhooks;
    }
    putWebhooks(value) {
        this._webhooks.internalValue = value;
    }
    resetWebhooks() {
        this._webhooks.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get webhooksInput() {
        return this._webhooks.internalValue;
    }
}
/**
* Represents a {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/notification_policy cloudflare_notification_policy}
*/
export class NotificationPolicy extends cdktf.TerraformResource {
    // =================
    // STATIC PROPERTIES
    // =================
    static tfResourceType = "cloudflare_notification_policy";
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
    static generateConfigForImport(scope, importToId, importFromId, provider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "cloudflare_notification_policy", importId: importFromId, provider });
    }
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
    constructor(scope, id, config) {
        super(scope, id, {
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
        });
        this._accountId = config.accountId;
        this._alertInterval = config.alertInterval;
        this._alertType = config.alertType;
        this._description = config.description;
        this._enabled = config.enabled;
        this._filters.internalValue = config.filters;
        this._mechanisms.internalValue = config.mechanisms;
        this._name = config.name;
    }
    // ==========
    // ATTRIBUTES
    // ==========
    // account_id - computed: false, optional: true, required: false
    _accountId;
    get accountId() {
        return this.getStringAttribute('account_id');
    }
    set accountId(value) {
        this._accountId = value;
    }
    resetAccountId() {
        this._accountId = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get accountIdInput() {
        return this._accountId;
    }
    // alert_interval - computed: false, optional: true, required: false
    _alertInterval;
    get alertInterval() {
        return this.getStringAttribute('alert_interval');
    }
    set alertInterval(value) {
        this._alertInterval = value;
    }
    resetAlertInterval() {
        this._alertInterval = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get alertIntervalInput() {
        return this._alertInterval;
    }
    // alert_type - computed: false, optional: false, required: true
    _alertType;
    get alertType() {
        return this.getStringAttribute('alert_type');
    }
    set alertType(value) {
        this._alertType = value;
    }
    // Temporarily expose input value. Use with caution.
    get alertTypeInput() {
        return this._alertType;
    }
    // created - computed: true, optional: false, required: false
    get created() {
        return this.getStringAttribute('created');
    }
    // description - computed: false, optional: true, required: false
    _description;
    get description() {
        return this.getStringAttribute('description');
    }
    set description(value) {
        this._description = value;
    }
    resetDescription() {
        this._description = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get descriptionInput() {
        return this._description;
    }
    // enabled - computed: true, optional: true, required: false
    _enabled;
    get enabled() {
        return this.getBooleanAttribute('enabled');
    }
    set enabled(value) {
        this._enabled = value;
    }
    resetEnabled() {
        this._enabled = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get enabledInput() {
        return this._enabled;
    }
    // filters - computed: false, optional: true, required: false
    _filters = new NotificationPolicyFiltersOutputReference(this, "filters");
    get filters() {
        return this._filters;
    }
    putFilters(value) {
        this._filters.internalValue = value;
    }
    resetFilters() {
        this._filters.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get filtersInput() {
        return this._filters.internalValue;
    }
    // id - computed: true, optional: false, required: false
    get id() {
        return this.getStringAttribute('id');
    }
    // mechanisms - computed: false, optional: false, required: true
    _mechanisms = new NotificationPolicyMechanismsOutputReference(this, "mechanisms");
    get mechanisms() {
        return this._mechanisms;
    }
    putMechanisms(value) {
        this._mechanisms.internalValue = value;
    }
    // Temporarily expose input value. Use with caution.
    get mechanismsInput() {
        return this._mechanisms.internalValue;
    }
    // modified - computed: true, optional: false, required: false
    get modified() {
        return this.getStringAttribute('modified');
    }
    // name - computed: false, optional: false, required: true
    _name;
    get name() {
        return this.getStringAttribute('name');
    }
    set name(value) {
        this._name = value;
    }
    // Temporarily expose input value. Use with caution.
    get nameInput() {
        return this._name;
    }
    // =========
    // SYNTHESIS
    // =========
    synthesizeAttributes() {
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
    }
    synthesizeHclAttributes() {
        const attrs = {
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
        return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
    }
}
