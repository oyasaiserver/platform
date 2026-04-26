import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface NotificationPolicyConfig extends cdktf.TerraformMetaArguments {
    /**
    * The account id
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/notification_policy#account_id NotificationPolicy#account_id}
    */
    readonly accountId?: string;
    /**
    * Optional specification of how often to re-alert from the same incident, not support on all alert types.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/notification_policy#alert_interval NotificationPolicy#alert_interval}
    */
    readonly alertInterval?: string;
    /**
    * Refers to which event will trigger a Notification dispatch. You can use the endpoint to get available alert types which then will give you a list of possible values.
    * Available values: "abuse_report_alert", "access_custom_certificate_expiration_type", "advanced_ddos_attack_l4_alert", "advanced_ddos_attack_l7_alert", "advanced_http_alert_error", "bgp_hijack_notification", "billing_usage_alert", "block_notification_block_removed", "block_notification_new_block", "block_notification_review_rejected", "bot_traffic_basic_alert", "brand_protection_alert", "brand_protection_digest", "clickhouse_alert_fw_anomaly", "clickhouse_alert_fw_ent_anomaly", "cloudforce_one_request_notification", "cni_maintenance_notification", "custom_analytics", "custom_bot_detection_alert", "custom_ssl_certificate_event_type", "dedicated_ssl_certificate_event_type", "device_connectivity_anomaly_alert", "dos_attack_l4", "dos_attack_l7", "expiring_service_token_alert", "failing_logpush_job_disabled_alert", "fbm_auto_advertisement", "fbm_dosd_attack", "fbm_volumetric_attack", "health_check_status_notification", "hostname_aop_custom_certificate_expiration_type", "http_alert_edge_error", "http_alert_origin_error", "image_notification", "image_resizing_notification", "incident_alert", "load_balancing_health_alert", "load_balancing_pool_enablement_alert", "logo_match_alert", "magic_tunnel_health_check_event", "magic_wan_tunnel_health", "maintenance_event_notification", "mtls_certificate_store_certificate_expiration_type", "pages_event_alert", "radar_notification", "real_origin_monitoring", "scriptmonitor_alert_new_code_change_detections", "scriptmonitor_alert_new_hosts", "scriptmonitor_alert_new_malicious_hosts", "scriptmonitor_alert_new_malicious_scripts", "scriptmonitor_alert_new_malicious_url", "scriptmonitor_alert_new_max_length_resource_url", "scriptmonitor_alert_new_resources", "secondary_dns_all_primaries_failing", "secondary_dns_primaries_failing", "secondary_dns_warning", "secondary_dns_zone_successfully_updated", "secondary_dns_zone_validation_warning", "security_insights_alert", "sentinel_alert", "stream_live_notifications", "synthetic_test_latency_alert", "synthetic_test_low_availability_alert", "traffic_anomalies_alert", "tunnel_health_event", "tunnel_update_event", "universal_ssl_event_type", "web_analytics_metrics_update", "zone_aop_custom_certificate_expiration_type".
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/notification_policy#alert_type NotificationPolicy#alert_type}
    */
    readonly alertType: string;
    /**
    * Optional description for the Notification policy.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/notification_policy#description NotificationPolicy#description}
    */
    readonly description?: string;
    /**
    * Whether or not the Notification policy is enabled.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/notification_policy#enabled NotificationPolicy#enabled}
    */
    readonly enabled?: boolean | cdktf.IResolvable;
    /**
    * Optional filters that allow you to be alerted only on a subset of events for that alert type based on some criteria. This is only available for select alert types. See alert type documentation for more details.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/notification_policy#filters NotificationPolicy#filters}
    */
    readonly filters?: NotificationPolicyFilters;
    /**
    * List of IDs that will be used when dispatching a notification. IDs for email type will be the email address.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/notification_policy#mechanisms NotificationPolicy#mechanisms}
    */
    readonly mechanisms: NotificationPolicyMechanisms;
    /**
    * Name of the policy.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/notification_policy#name NotificationPolicy#name}
    */
    readonly name: string;
}
export interface NotificationPolicyFilters {
    /**
    * Usage depends on specific alert type
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/notification_policy#actions NotificationPolicy#actions}
    */
    readonly actions?: string[];
    /**
    * Used for configuring radar_notification
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/notification_policy#affected_asns NotificationPolicy#affected_asns}
    */
    readonly affectedAsns?: string[];
    /**
    * Used for configuring incident_alert
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/notification_policy#affected_components NotificationPolicy#affected_components}
    */
    readonly affectedComponents?: string[];
    /**
    * Used for configuring radar_notification
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/notification_policy#affected_locations NotificationPolicy#affected_locations}
    */
    readonly affectedLocations?: string[];
    /**
    * Used for configuring maintenance_event_notification
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/notification_policy#airport_code NotificationPolicy#airport_code}
    */
    readonly airportCode?: string[];
    /**
    * Usage depends on specific alert type
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/notification_policy#alert_trigger_preferences NotificationPolicy#alert_trigger_preferences}
    */
    readonly alertTriggerPreferences?: string[];
    /**
    * Usage depends on specific alert type
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/notification_policy#alert_trigger_preferences_value NotificationPolicy#alert_trigger_preferences_value}
    */
    readonly alertTriggerPreferencesValue?: string[];
    /**
    * Used for configuring load_balancing_pool_enablement_alert
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/notification_policy#enabled NotificationPolicy#enabled}
    */
    readonly enabled?: string[];
    /**
    * Used for configuring pages_event_alert
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/notification_policy#environment NotificationPolicy#environment}
    */
    readonly environment?: string[];
    /**
    * Used for configuring pages_event_alert
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/notification_policy#event NotificationPolicy#event}
    */
    readonly event?: string[];
    /**
    * Used for configuring load_balancing_health_alert
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/notification_policy#event_source NotificationPolicy#event_source}
    */
    readonly eventSource?: string[];
    /**
    * Usage depends on specific alert type
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/notification_policy#event_type NotificationPolicy#event_type}
    */
    readonly eventType?: string[];
    /**
    * Usage depends on specific alert type
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/notification_policy#group_by NotificationPolicy#group_by}
    */
    readonly groupBy?: string[];
    /**
    * Used for configuring health_check_status_notification
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/notification_policy#health_check_id NotificationPolicy#health_check_id}
    */
    readonly healthCheckId?: string[];
    /**
    * Used for configuring incident_alert
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/notification_policy#incident_impact NotificationPolicy#incident_impact}
    */
    readonly incidentImpact?: string[];
    /**
    * Used for configuring stream_live_notifications
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/notification_policy#input_id NotificationPolicy#input_id}
    */
    readonly inputId?: string[];
    /**
    * Used for configuring security_insights_alert
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/notification_policy#insight_class NotificationPolicy#insight_class}
    */
    readonly insightClass?: string[];
    /**
    * Used for configuring billing_usage_alert
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/notification_policy#limit NotificationPolicy#limit}
    */
    readonly limit?: string[];
    /**
    * Used for configuring logo_match_alert
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/notification_policy#logo_tag NotificationPolicy#logo_tag}
    */
    readonly logoTag?: string[];
    /**
    * Used for configuring advanced_ddos_attack_l4_alert
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/notification_policy#megabits_per_second NotificationPolicy#megabits_per_second}
    */
    readonly megabitsPerSecond?: string[];
    /**
    * Used for configuring load_balancing_health_alert
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/notification_policy#new_health NotificationPolicy#new_health}
    */
    readonly newHealth?: string[];
    /**
    * Used for configuring tunnel_health_event
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/notification_policy#new_status NotificationPolicy#new_status}
    */
    readonly newStatus?: string[];
    /**
    * Used for configuring advanced_ddos_attack_l4_alert
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/notification_policy#packets_per_second NotificationPolicy#packets_per_second}
    */
    readonly packetsPerSecond?: string[];
    /**
    * Usage depends on specific alert type
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/notification_policy#pool_id NotificationPolicy#pool_id}
    */
    readonly poolId?: string[];
    /**
    * Usage depends on specific alert type
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/notification_policy#pop_names NotificationPolicy#pop_names}
    */
    readonly popNames?: string[];
    /**
    * Used for configuring billing_usage_alert
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/notification_policy#product NotificationPolicy#product}
    */
    readonly product?: string[];
    /**
    * Used for configuring pages_event_alert
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/notification_policy#project_id NotificationPolicy#project_id}
    */
    readonly projectId?: string[];
    /**
    * Used for configuring advanced_ddos_attack_l4_alert
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/notification_policy#protocol NotificationPolicy#protocol}
    */
    readonly protocol?: string[];
    /**
    * Usage depends on specific alert type
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/notification_policy#query_tag NotificationPolicy#query_tag}
    */
    readonly queryTag?: string[];
    /**
    * Used for configuring advanced_ddos_attack_l7_alert
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/notification_policy#requests_per_second NotificationPolicy#requests_per_second}
    */
    readonly requestsPerSecond?: string[];
    /**
    * Usage depends on specific alert type
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/notification_policy#selectors NotificationPolicy#selectors}
    */
    readonly selectors?: string[];
    /**
    * Used for configuring clickhouse_alert_fw_ent_anomaly
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/notification_policy#services NotificationPolicy#services}
    */
    readonly services?: string[];
    /**
    * Usage depends on specific alert type
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/notification_policy#slo NotificationPolicy#slo}
    */
    readonly slo?: string[];
    /**
    * Used for configuring health_check_status_notification
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/notification_policy#status NotificationPolicy#status}
    */
    readonly status?: string[];
    /**
    * Used for configuring advanced_ddos_attack_l7_alert
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/notification_policy#target_hostname NotificationPolicy#target_hostname}
    */
    readonly targetHostname?: string[];
    /**
    * Used for configuring advanced_ddos_attack_l4_alert
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/notification_policy#target_ip NotificationPolicy#target_ip}
    */
    readonly targetIp?: string[];
    /**
    * Used for configuring advanced_ddos_attack_l7_alert
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/notification_policy#target_zone_name NotificationPolicy#target_zone_name}
    */
    readonly targetZoneName?: string[];
    /**
    * Used for configuring traffic_anomalies_alert
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/notification_policy#traffic_exclusions NotificationPolicy#traffic_exclusions}
    */
    readonly trafficExclusions?: string[];
    /**
    * Used for configuring tunnel_health_event
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/notification_policy#tunnel_id NotificationPolicy#tunnel_id}
    */
    readonly tunnelId?: string[];
    /**
    * Usage depends on specific alert type
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/notification_policy#tunnel_name NotificationPolicy#tunnel_name}
    */
    readonly tunnelName?: string[];
    /**
    * Usage depends on specific alert type
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/notification_policy#type NotificationPolicy#type}
    */
    readonly type?: string[];
    /**
    * Usage depends on specific alert type
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/notification_policy#where NotificationPolicy#where}
    */
    readonly where?: string[];
    /**
    * Usage depends on specific alert type
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/notification_policy#zones NotificationPolicy#zones}
    */
    readonly zones?: string[];
}
export declare function notificationPolicyFiltersToTerraform(struct?: NotificationPolicyFilters | cdktf.IResolvable): any;
export declare function notificationPolicyFiltersToHclTerraform(struct?: NotificationPolicyFilters | cdktf.IResolvable): any;
export declare class NotificationPolicyFiltersOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): NotificationPolicyFilters | cdktf.IResolvable | undefined;
    set internalValue(value: NotificationPolicyFilters | cdktf.IResolvable | undefined);
    private _actions?;
    get actions(): string[];
    set actions(value: string[]);
    resetActions(): void;
    get actionsInput(): string[];
    private _affectedAsns?;
    get affectedAsns(): string[];
    set affectedAsns(value: string[]);
    resetAffectedAsns(): void;
    get affectedAsnsInput(): string[];
    private _affectedComponents?;
    get affectedComponents(): string[];
    set affectedComponents(value: string[]);
    resetAffectedComponents(): void;
    get affectedComponentsInput(): string[];
    private _affectedLocations?;
    get affectedLocations(): string[];
    set affectedLocations(value: string[]);
    resetAffectedLocations(): void;
    get affectedLocationsInput(): string[];
    private _airportCode?;
    get airportCode(): string[];
    set airportCode(value: string[]);
    resetAirportCode(): void;
    get airportCodeInput(): string[];
    private _alertTriggerPreferences?;
    get alertTriggerPreferences(): string[];
    set alertTriggerPreferences(value: string[]);
    resetAlertTriggerPreferences(): void;
    get alertTriggerPreferencesInput(): string[];
    private _alertTriggerPreferencesValue?;
    get alertTriggerPreferencesValue(): string[];
    set alertTriggerPreferencesValue(value: string[]);
    resetAlertTriggerPreferencesValue(): void;
    get alertTriggerPreferencesValueInput(): string[];
    private _enabled?;
    get enabled(): string[];
    set enabled(value: string[]);
    resetEnabled(): void;
    get enabledInput(): string[];
    private _environment?;
    get environment(): string[];
    set environment(value: string[]);
    resetEnvironment(): void;
    get environmentInput(): string[];
    private _event?;
    get event(): string[];
    set event(value: string[]);
    resetEvent(): void;
    get eventInput(): string[];
    private _eventSource?;
    get eventSource(): string[];
    set eventSource(value: string[]);
    resetEventSource(): void;
    get eventSourceInput(): string[];
    private _eventType?;
    get eventType(): string[];
    set eventType(value: string[]);
    resetEventType(): void;
    get eventTypeInput(): string[];
    private _groupBy?;
    get groupBy(): string[];
    set groupBy(value: string[]);
    resetGroupBy(): void;
    get groupByInput(): string[];
    private _healthCheckId?;
    get healthCheckId(): string[];
    set healthCheckId(value: string[]);
    resetHealthCheckId(): void;
    get healthCheckIdInput(): string[];
    private _incidentImpact?;
    get incidentImpact(): string[];
    set incidentImpact(value: string[]);
    resetIncidentImpact(): void;
    get incidentImpactInput(): string[];
    private _inputId?;
    get inputId(): string[];
    set inputId(value: string[]);
    resetInputId(): void;
    get inputIdInput(): string[];
    private _insightClass?;
    get insightClass(): string[];
    set insightClass(value: string[]);
    resetInsightClass(): void;
    get insightClassInput(): string[];
    private _limit?;
    get limit(): string[];
    set limit(value: string[]);
    resetLimit(): void;
    get limitInput(): string[];
    private _logoTag?;
    get logoTag(): string[];
    set logoTag(value: string[]);
    resetLogoTag(): void;
    get logoTagInput(): string[];
    private _megabitsPerSecond?;
    get megabitsPerSecond(): string[];
    set megabitsPerSecond(value: string[]);
    resetMegabitsPerSecond(): void;
    get megabitsPerSecondInput(): string[];
    private _newHealth?;
    get newHealth(): string[];
    set newHealth(value: string[]);
    resetNewHealth(): void;
    get newHealthInput(): string[];
    private _newStatus?;
    get newStatus(): string[];
    set newStatus(value: string[]);
    resetNewStatus(): void;
    get newStatusInput(): string[];
    private _packetsPerSecond?;
    get packetsPerSecond(): string[];
    set packetsPerSecond(value: string[]);
    resetPacketsPerSecond(): void;
    get packetsPerSecondInput(): string[];
    private _poolId?;
    get poolId(): string[];
    set poolId(value: string[]);
    resetPoolId(): void;
    get poolIdInput(): string[];
    private _popNames?;
    get popNames(): string[];
    set popNames(value: string[]);
    resetPopNames(): void;
    get popNamesInput(): string[];
    private _product?;
    get product(): string[];
    set product(value: string[]);
    resetProduct(): void;
    get productInput(): string[];
    private _projectId?;
    get projectId(): string[];
    set projectId(value: string[]);
    resetProjectId(): void;
    get projectIdInput(): string[];
    private _protocol?;
    get protocol(): string[];
    set protocol(value: string[]);
    resetProtocol(): void;
    get protocolInput(): string[];
    private _queryTag?;
    get queryTag(): string[];
    set queryTag(value: string[]);
    resetQueryTag(): void;
    get queryTagInput(): string[];
    private _requestsPerSecond?;
    get requestsPerSecond(): string[];
    set requestsPerSecond(value: string[]);
    resetRequestsPerSecond(): void;
    get requestsPerSecondInput(): string[];
    private _selectors?;
    get selectors(): string[];
    set selectors(value: string[]);
    resetSelectors(): void;
    get selectorsInput(): string[];
    private _services?;
    get services(): string[];
    set services(value: string[]);
    resetServices(): void;
    get servicesInput(): string[];
    private _slo?;
    get slo(): string[];
    set slo(value: string[]);
    resetSlo(): void;
    get sloInput(): string[];
    private _status?;
    get status(): string[];
    set status(value: string[]);
    resetStatus(): void;
    get statusInput(): string[];
    private _targetHostname?;
    get targetHostname(): string[];
    set targetHostname(value: string[]);
    resetTargetHostname(): void;
    get targetHostnameInput(): string[];
    private _targetIp?;
    get targetIp(): string[];
    set targetIp(value: string[]);
    resetTargetIp(): void;
    get targetIpInput(): string[];
    private _targetZoneName?;
    get targetZoneName(): string[];
    set targetZoneName(value: string[]);
    resetTargetZoneName(): void;
    get targetZoneNameInput(): string[];
    private _trafficExclusions?;
    get trafficExclusions(): string[];
    set trafficExclusions(value: string[]);
    resetTrafficExclusions(): void;
    get trafficExclusionsInput(): string[];
    private _tunnelId?;
    get tunnelId(): string[];
    set tunnelId(value: string[]);
    resetTunnelId(): void;
    get tunnelIdInput(): string[];
    private _tunnelName?;
    get tunnelName(): string[];
    set tunnelName(value: string[]);
    resetTunnelName(): void;
    get tunnelNameInput(): string[];
    private _type?;
    get type(): string[];
    set type(value: string[]);
    resetType(): void;
    get typeInput(): string[];
    private _where?;
    get where(): string[];
    set where(value: string[]);
    resetWhere(): void;
    get whereInput(): string[];
    private _zones?;
    get zones(): string[];
    set zones(value: string[]);
    resetZones(): void;
    get zonesInput(): string[];
}
export interface NotificationPolicyMechanismsEmail {
    /**
    * The email address
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/notification_policy#id NotificationPolicy#id}
    *
    * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
    * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
    */
    readonly id?: string;
}
export declare function notificationPolicyMechanismsEmailToTerraform(struct?: NotificationPolicyMechanismsEmail | cdktf.IResolvable): any;
export declare function notificationPolicyMechanismsEmailToHclTerraform(struct?: NotificationPolicyMechanismsEmail | cdktf.IResolvable): any;
export declare class NotificationPolicyMechanismsEmailOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): NotificationPolicyMechanismsEmail | cdktf.IResolvable | undefined;
    set internalValue(value: NotificationPolicyMechanismsEmail | cdktf.IResolvable | undefined);
    private _id?;
    get id(): string;
    set id(value: string);
    resetId(): void;
    get idInput(): string;
}
export declare class NotificationPolicyMechanismsEmailList extends cdktf.ComplexList {
    protected terraformResource: cdktf.IInterpolatingParent;
    protected terraformAttribute: string;
    protected wrapsSet: boolean;
    internalValue?: NotificationPolicyMechanismsEmail[] | cdktf.IResolvable;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean);
    /**
    * @param index the index of the item to return
    */
    get(index: number): NotificationPolicyMechanismsEmailOutputReference;
}
export interface NotificationPolicyMechanismsPagerduty {
    /**
    * UUID
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/notification_policy#id NotificationPolicy#id}
    *
    * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
    * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
    */
    readonly id?: string;
}
export declare function notificationPolicyMechanismsPagerdutyToTerraform(struct?: NotificationPolicyMechanismsPagerduty | cdktf.IResolvable): any;
export declare function notificationPolicyMechanismsPagerdutyToHclTerraform(struct?: NotificationPolicyMechanismsPagerduty | cdktf.IResolvable): any;
export declare class NotificationPolicyMechanismsPagerdutyOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): NotificationPolicyMechanismsPagerduty | cdktf.IResolvable | undefined;
    set internalValue(value: NotificationPolicyMechanismsPagerduty | cdktf.IResolvable | undefined);
    private _id?;
    get id(): string;
    set id(value: string);
    resetId(): void;
    get idInput(): string;
}
export declare class NotificationPolicyMechanismsPagerdutyList extends cdktf.ComplexList {
    protected terraformResource: cdktf.IInterpolatingParent;
    protected terraformAttribute: string;
    protected wrapsSet: boolean;
    internalValue?: NotificationPolicyMechanismsPagerduty[] | cdktf.IResolvable;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean);
    /**
    * @param index the index of the item to return
    */
    get(index: number): NotificationPolicyMechanismsPagerdutyOutputReference;
}
export interface NotificationPolicyMechanismsWebhooks {
    /**
    * UUID
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/notification_policy#id NotificationPolicy#id}
    *
    * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
    * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
    */
    readonly id?: string;
}
export declare function notificationPolicyMechanismsWebhooksToTerraform(struct?: NotificationPolicyMechanismsWebhooks | cdktf.IResolvable): any;
export declare function notificationPolicyMechanismsWebhooksToHclTerraform(struct?: NotificationPolicyMechanismsWebhooks | cdktf.IResolvable): any;
export declare class NotificationPolicyMechanismsWebhooksOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): NotificationPolicyMechanismsWebhooks | cdktf.IResolvable | undefined;
    set internalValue(value: NotificationPolicyMechanismsWebhooks | cdktf.IResolvable | undefined);
    private _id?;
    get id(): string;
    set id(value: string);
    resetId(): void;
    get idInput(): string;
}
export declare class NotificationPolicyMechanismsWebhooksList extends cdktf.ComplexList {
    protected terraformResource: cdktf.IInterpolatingParent;
    protected terraformAttribute: string;
    protected wrapsSet: boolean;
    internalValue?: NotificationPolicyMechanismsWebhooks[] | cdktf.IResolvable;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean);
    /**
    * @param index the index of the item to return
    */
    get(index: number): NotificationPolicyMechanismsWebhooksOutputReference;
}
export interface NotificationPolicyMechanisms {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/notification_policy#email NotificationPolicy#email}
    */
    readonly email?: NotificationPolicyMechanismsEmail[] | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/notification_policy#pagerduty NotificationPolicy#pagerduty}
    */
    readonly pagerduty?: NotificationPolicyMechanismsPagerduty[] | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/notification_policy#webhooks NotificationPolicy#webhooks}
    */
    readonly webhooks?: NotificationPolicyMechanismsWebhooks[] | cdktf.IResolvable;
}
export declare function notificationPolicyMechanismsToTerraform(struct?: NotificationPolicyMechanisms | cdktf.IResolvable): any;
export declare function notificationPolicyMechanismsToHclTerraform(struct?: NotificationPolicyMechanisms | cdktf.IResolvable): any;
export declare class NotificationPolicyMechanismsOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): NotificationPolicyMechanisms | cdktf.IResolvable | undefined;
    set internalValue(value: NotificationPolicyMechanisms | cdktf.IResolvable | undefined);
    private _email;
    get email(): NotificationPolicyMechanismsEmailList;
    putEmail(value: NotificationPolicyMechanismsEmail[] | cdktf.IResolvable): void;
    resetEmail(): void;
    get emailInput(): any;
    private _pagerduty;
    get pagerduty(): NotificationPolicyMechanismsPagerdutyList;
    putPagerduty(value: NotificationPolicyMechanismsPagerduty[] | cdktf.IResolvable): void;
    resetPagerduty(): void;
    get pagerdutyInput(): any;
    private _webhooks;
    get webhooks(): NotificationPolicyMechanismsWebhooksList;
    putWebhooks(value: NotificationPolicyMechanismsWebhooks[] | cdktf.IResolvable): void;
    resetWebhooks(): void;
    get webhooksInput(): any;
}
/**
* Represents a {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/notification_policy cloudflare_notification_policy}
*/
export declare class NotificationPolicy extends cdktf.TerraformResource {
    static readonly tfResourceType = "cloudflare_notification_policy";
    /**
    * Generates CDKTF code for importing a NotificationPolicy resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the NotificationPolicy to import
    * @param importFromId The id of the existing NotificationPolicy that should be imported. Refer to the {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/notification_policy#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the NotificationPolicy to import is found
    */
    static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider): any;
    /**
    * Create a new {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/notification_policy cloudflare_notification_policy} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options NotificationPolicyConfig
    */
    constructor(scope: Construct, id: string, config: NotificationPolicyConfig);
    private _accountId?;
    get accountId(): string;
    set accountId(value: string);
    resetAccountId(): void;
    get accountIdInput(): string;
    private _alertInterval?;
    get alertInterval(): string;
    set alertInterval(value: string);
    resetAlertInterval(): void;
    get alertIntervalInput(): string;
    private _alertType?;
    get alertType(): string;
    set alertType(value: string);
    get alertTypeInput(): string;
    get created(): any;
    private _description?;
    get description(): string;
    set description(value: string);
    resetDescription(): void;
    get descriptionInput(): string;
    private _enabled?;
    get enabled(): boolean | cdktf.IResolvable;
    set enabled(value: boolean | cdktf.IResolvable);
    resetEnabled(): void;
    get enabledInput(): any;
    private _filters;
    get filters(): NotificationPolicyFiltersOutputReference;
    putFilters(value: NotificationPolicyFilters): void;
    resetFilters(): void;
    get filtersInput(): any;
    get id(): any;
    private _mechanisms;
    get mechanisms(): NotificationPolicyMechanismsOutputReference;
    putMechanisms(value: NotificationPolicyMechanisms): void;
    get mechanismsInput(): any;
    get modified(): any;
    private _name?;
    get name(): string;
    set name(value: string);
    get nameInput(): string;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
    protected synthesizeHclAttributes(): {
        [name: string]: any;
    };
}
