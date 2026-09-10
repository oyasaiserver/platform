// https://registry.terraform.io/providers/grafana/grafana/4.45.2/docs/resources/cloud_stack
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface CloudStackConfig extends cdktf.TerraformMetaArguments {
  /**
  * Whether to enable delete protection for the stack, preventing accidental deletion. Defaults to `true`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana/4.45.2/docs/resources/cloud_stack#delete_protection CloudStack#delete_protection}
  */
  readonly deleteProtection?: boolean | cdktf.IResolvable;
  /**
  * Description of stack.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana/4.45.2/docs/resources/cloud_stack#description CloudStack#description}
  */
  readonly description?: string;
  /**
  * A map of labels to assign to the stack. Label keys and values must match the following regexp: "^[a-zA-Z0-9/\\-._]+$" and stacks cannot have more than 10 labels.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana/4.45.2/docs/resources/cloud_stack#labels CloudStack#labels}
  */
  readonly labels?: { [key: string]: string };
  /**
  * Name of stack. Conventionally matches the url of the instance (e.g. `<stack_slug>.grafana.net`).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana/4.45.2/docs/resources/cloud_stack#name CloudStack#name}
  */
  readonly name: string;
  /**
  * Region slug to assign to this stack. Changing region will destroy the existing stack and create a new one in the desired region. Use the region list API to get the list of available regions: https://grafana.com/docs/grafana-cloud/developer-resources/api-reference/cloud-api/#list-regions.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana/4.45.2/docs/resources/cloud_stack#region_slug CloudStack#region_slug}
  */
  readonly regionSlug?: string;
  /**
  * Subdomain that the Grafana instance will be available at. Setting slug to `<stack_slug>` will make the instance available at `https://<stack_slug>.grafana.net`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana/4.45.2/docs/resources/cloud_stack#slug CloudStack#slug}
  */
  readonly slug: string;
  /**
  * Custom URL for the Grafana instance. Must have a CNAME setup to point to `.grafana.net` before creating the stack
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana/4.45.2/docs/resources/cloud_stack#url CloudStack#url}
  */
  readonly url?: string;
  /**
  * Whether to wait for readiness of the stack after creating it. The check is a HEAD request to the stack URL (Grafana instance). Defaults to `true`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana/4.45.2/docs/resources/cloud_stack#wait_for_readiness CloudStack#wait_for_readiness}
  */
  readonly waitForReadiness?: boolean | cdktf.IResolvable;
  /**
  * How long to wait for readiness (if enabled). Defaults to `10m0s`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana/4.45.2/docs/resources/cloud_stack#wait_for_readiness_timeout CloudStack#wait_for_readiness_timeout}
  */
  readonly waitForReadinessTimeout?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/grafana/grafana/4.45.2/docs/resources/cloud_stack grafana_cloud_stack}
*/
export class CloudStack extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "grafana_cloud_stack";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a CloudStack resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the CloudStack to import
  * @param importFromId The id of the existing CloudStack that should be imported. Refer to the {@link https://registry.terraform.io/providers/grafana/grafana/4.45.2/docs/resources/cloud_stack#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the CloudStack to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "grafana_cloud_stack", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/grafana/grafana/4.45.2/docs/resources/cloud_stack grafana_cloud_stack} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options CloudStackConfig
  */
  public constructor(scope: Construct, id: string, config: CloudStackConfig) {
    super(scope, id, {
      terraformResourceType: 'grafana_cloud_stack',
      terraformGeneratorMetadata: {
        providerName: 'grafana',
        providerVersion: '4.45.2'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._deleteProtection = config.deleteProtection;
    this._description = config.description;
    this._labels = config.labels;
    this._name = config.name;
    this._regionSlug = config.regionSlug;
    this._slug = config.slug;
    this._url = config.url;
    this._waitForReadiness = config.waitForReadiness;
    this._waitForReadinessTimeout = config.waitForReadinessTimeout;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // alertmanager_allowlist_url - computed: true, optional: false, required: false
  public get alertmanagerAllowlistUrl() {
    return this.getStringAttribute('alertmanager_allowlist_url');
  }

  // alertmanager_ip_allow_list_cname - computed: true, optional: false, required: false
  public get alertmanagerIpAllowListCname() {
    return this.getStringAttribute('alertmanager_ip_allow_list_cname');
  }

  // alertmanager_name - computed: true, optional: false, required: false
  public get alertmanagerName() {
    return this.getStringAttribute('alertmanager_name');
  }

  // alertmanager_status - computed: true, optional: false, required: false
  public get alertmanagerStatus() {
    return this.getStringAttribute('alertmanager_status');
  }

  // alertmanager_url - computed: true, optional: false, required: false
  public get alertmanagerUrl() {
    return this.getStringAttribute('alertmanager_url');
  }

  // alertmanager_user_id - computed: true, optional: false, required: false
  public get alertmanagerUserId() {
    return this.getNumberAttribute('alertmanager_user_id');
  }

  // cloud_provider_url - computed: true, optional: false, required: false
  public get cloudProviderUrl() {
    return this.getStringAttribute('cloud_provider_url');
  }

  // cluster_name - computed: true, optional: false, required: false
  public get clusterName() {
    return this.getStringAttribute('cluster_name');
  }

  // cluster_slug - computed: true, optional: false, required: false
  public get clusterSlug() {
    return this.getStringAttribute('cluster_slug');
  }

  // connections_api_url - computed: true, optional: false, required: false
  public get connectionsApiUrl() {
    return this.getStringAttribute('connections_api_url');
  }

  // delete_protection - computed: false, optional: true, required: false
  private _deleteProtection?: boolean | cdktf.IResolvable; 
  public get deleteProtection() {
    return this.getBooleanAttribute('delete_protection');
  }
  public set deleteProtection(value: boolean | cdktf.IResolvable) {
    this._deleteProtection = value;
  }
  public resetDeleteProtection() {
    this._deleteProtection = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deleteProtectionInput() {
    return this._deleteProtection;
  }

  // description - computed: false, optional: true, required: false
  private _description?: string; 
  public get description() {
    return this.getStringAttribute('description');
  }
  public set description(value: string) {
    this._description = value;
  }
  public resetDescription() {
    this._description = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get descriptionInput() {
    return this._description;
  }

  // fleet_management_allowlist_url - computed: true, optional: false, required: false
  public get fleetManagementAllowlistUrl() {
    return this.getStringAttribute('fleet_management_allowlist_url');
  }

  // fleet_management_name - computed: true, optional: false, required: false
  public get fleetManagementName() {
    return this.getStringAttribute('fleet_management_name');
  }

  // fleet_management_private_connectivity_info_availability_zone_ids - computed: true, optional: false, required: false
  public get fleetManagementPrivateConnectivityInfoAvailabilityZoneIds() {
    return this.getListAttribute('fleet_management_private_connectivity_info_availability_zone_ids');
  }

  // fleet_management_private_connectivity_info_availability_zones - computed: true, optional: false, required: false
  public get fleetManagementPrivateConnectivityInfoAvailabilityZones() {
    return this.getListAttribute('fleet_management_private_connectivity_info_availability_zones');
  }

  // fleet_management_private_connectivity_info_private_dns - computed: true, optional: false, required: false
  public get fleetManagementPrivateConnectivityInfoPrivateDns() {
    return this.getStringAttribute('fleet_management_private_connectivity_info_private_dns');
  }

  // fleet_management_private_connectivity_info_regions - computed: true, optional: false, required: false
  public get fleetManagementPrivateConnectivityInfoRegions() {
    return this.getListAttribute('fleet_management_private_connectivity_info_regions');
  }

  // fleet_management_private_connectivity_info_service_name - computed: true, optional: false, required: false
  public get fleetManagementPrivateConnectivityInfoServiceName() {
    return this.getStringAttribute('fleet_management_private_connectivity_info_service_name');
  }

  // fleet_management_status - computed: true, optional: false, required: false
  public get fleetManagementStatus() {
    return this.getStringAttribute('fleet_management_status');
  }

  // fleet_management_url - computed: true, optional: false, required: false
  public get fleetManagementUrl() {
    return this.getStringAttribute('fleet_management_url');
  }

  // fleet_management_user_id - computed: true, optional: false, required: false
  public get fleetManagementUserId() {
    return this.getNumberAttribute('fleet_management_user_id');
  }

  // grafanas_allowlist_url - computed: true, optional: false, required: false
  public get grafanasAllowlistUrl() {
    return this.getStringAttribute('grafanas_allowlist_url');
  }

  // grafanas_ip_allow_list_cname - computed: true, optional: false, required: false
  public get grafanasIpAllowListCname() {
    return this.getStringAttribute('grafanas_ip_allow_list_cname');
  }

  // graphite_allowlist_url - computed: true, optional: false, required: false
  public get graphiteAllowlistUrl() {
    return this.getStringAttribute('graphite_allowlist_url');
  }

  // graphite_ip_allow_list_cname - computed: true, optional: false, required: false
  public get graphiteIpAllowListCname() {
    return this.getStringAttribute('graphite_ip_allow_list_cname');
  }

  // graphite_name - computed: true, optional: false, required: false
  public get graphiteName() {
    return this.getStringAttribute('graphite_name');
  }

  // graphite_private_connectivity_info_availability_zone_ids - computed: true, optional: false, required: false
  public get graphitePrivateConnectivityInfoAvailabilityZoneIds() {
    return this.getListAttribute('graphite_private_connectivity_info_availability_zone_ids');
  }

  // graphite_private_connectivity_info_availability_zones - computed: true, optional: false, required: false
  public get graphitePrivateConnectivityInfoAvailabilityZones() {
    return this.getListAttribute('graphite_private_connectivity_info_availability_zones');
  }

  // graphite_private_connectivity_info_private_dns - computed: true, optional: false, required: false
  public get graphitePrivateConnectivityInfoPrivateDns() {
    return this.getStringAttribute('graphite_private_connectivity_info_private_dns');
  }

  // graphite_private_connectivity_info_regions - computed: true, optional: false, required: false
  public get graphitePrivateConnectivityInfoRegions() {
    return this.getListAttribute('graphite_private_connectivity_info_regions');
  }

  // graphite_private_connectivity_info_service_name - computed: true, optional: false, required: false
  public get graphitePrivateConnectivityInfoServiceName() {
    return this.getStringAttribute('graphite_private_connectivity_info_service_name');
  }

  // graphite_status - computed: true, optional: false, required: false
  public get graphiteStatus() {
    return this.getStringAttribute('graphite_status');
  }

  // graphite_url - computed: true, optional: false, required: false
  public get graphiteUrl() {
    return this.getStringAttribute('graphite_url');
  }

  // graphite_user_id - computed: true, optional: false, required: false
  public get graphiteUserId() {
    return this.getNumberAttribute('graphite_user_id');
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // influx_url - computed: true, optional: false, required: false
  public get influxUrl() {
    return this.getStringAttribute('influx_url');
  }

  // labels - computed: false, optional: true, required: false
  private _labels?: { [key: string]: string }; 
  public get labels() {
    return this.getStringMapAttribute('labels');
  }
  public set labels(value: { [key: string]: string }) {
    this._labels = value;
  }
  public resetLabels() {
    this._labels = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get labelsInput() {
    return this._labels;
  }

  // logs_allowlist_url - computed: true, optional: false, required: false
  public get logsAllowlistUrl() {
    return this.getStringAttribute('logs_allowlist_url');
  }

  // logs_ip_allow_list_cname - computed: true, optional: false, required: false
  public get logsIpAllowListCname() {
    return this.getStringAttribute('logs_ip_allow_list_cname');
  }

  // logs_name - computed: true, optional: false, required: false
  public get logsName() {
    return this.getStringAttribute('logs_name');
  }

  // logs_private_connectivity_info_availability_zone_ids - computed: true, optional: false, required: false
  public get logsPrivateConnectivityInfoAvailabilityZoneIds() {
    return this.getListAttribute('logs_private_connectivity_info_availability_zone_ids');
  }

  // logs_private_connectivity_info_availability_zones - computed: true, optional: false, required: false
  public get logsPrivateConnectivityInfoAvailabilityZones() {
    return this.getListAttribute('logs_private_connectivity_info_availability_zones');
  }

  // logs_private_connectivity_info_private_dns - computed: true, optional: false, required: false
  public get logsPrivateConnectivityInfoPrivateDns() {
    return this.getStringAttribute('logs_private_connectivity_info_private_dns');
  }

  // logs_private_connectivity_info_regions - computed: true, optional: false, required: false
  public get logsPrivateConnectivityInfoRegions() {
    return this.getListAttribute('logs_private_connectivity_info_regions');
  }

  // logs_private_connectivity_info_service_name - computed: true, optional: false, required: false
  public get logsPrivateConnectivityInfoServiceName() {
    return this.getStringAttribute('logs_private_connectivity_info_service_name');
  }

  // logs_status - computed: true, optional: false, required: false
  public get logsStatus() {
    return this.getStringAttribute('logs_status');
  }

  // logs_url - computed: true, optional: false, required: false
  public get logsUrl() {
    return this.getStringAttribute('logs_url');
  }

  // logs_user_id - computed: true, optional: false, required: false
  public get logsUserId() {
    return this.getNumberAttribute('logs_user_id');
  }

  // name - computed: false, optional: false, required: true
  private _name?: string; 
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string) {
    this._name = value;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name;
  }

  // oncall_api_url - computed: true, optional: false, required: false
  public get oncallApiUrl() {
    return this.getStringAttribute('oncall_api_url');
  }

  // org_id - computed: true, optional: false, required: false
  public get orgId() {
    return this.getNumberAttribute('org_id');
  }

  // org_name - computed: true, optional: false, required: false
  public get orgName() {
    return this.getStringAttribute('org_name');
  }

  // org_slug - computed: true, optional: false, required: false
  public get orgSlug() {
    return this.getStringAttribute('org_slug');
  }

  // otlp_private_connectivity_info_availability_zone_ids - computed: true, optional: false, required: false
  public get otlpPrivateConnectivityInfoAvailabilityZoneIds() {
    return this.getListAttribute('otlp_private_connectivity_info_availability_zone_ids');
  }

  // otlp_private_connectivity_info_availability_zones - computed: true, optional: false, required: false
  public get otlpPrivateConnectivityInfoAvailabilityZones() {
    return this.getListAttribute('otlp_private_connectivity_info_availability_zones');
  }

  // otlp_private_connectivity_info_private_dns - computed: true, optional: false, required: false
  public get otlpPrivateConnectivityInfoPrivateDns() {
    return this.getStringAttribute('otlp_private_connectivity_info_private_dns');
  }

  // otlp_private_connectivity_info_regions - computed: true, optional: false, required: false
  public get otlpPrivateConnectivityInfoRegions() {
    return this.getListAttribute('otlp_private_connectivity_info_regions');
  }

  // otlp_private_connectivity_info_service_name - computed: true, optional: false, required: false
  public get otlpPrivateConnectivityInfoServiceName() {
    return this.getStringAttribute('otlp_private_connectivity_info_service_name');
  }

  // otlp_url - computed: true, optional: false, required: false
  public get otlpUrl() {
    return this.getStringAttribute('otlp_url');
  }

  // pdc_api_private_connectivity_info_availability_zone_ids - computed: true, optional: false, required: false
  public get pdcApiPrivateConnectivityInfoAvailabilityZoneIds() {
    return this.getListAttribute('pdc_api_private_connectivity_info_availability_zone_ids');
  }

  // pdc_api_private_connectivity_info_availability_zones - computed: true, optional: false, required: false
  public get pdcApiPrivateConnectivityInfoAvailabilityZones() {
    return this.getListAttribute('pdc_api_private_connectivity_info_availability_zones');
  }

  // pdc_api_private_connectivity_info_private_dns - computed: true, optional: false, required: false
  public get pdcApiPrivateConnectivityInfoPrivateDns() {
    return this.getStringAttribute('pdc_api_private_connectivity_info_private_dns');
  }

  // pdc_api_private_connectivity_info_regions - computed: true, optional: false, required: false
  public get pdcApiPrivateConnectivityInfoRegions() {
    return this.getListAttribute('pdc_api_private_connectivity_info_regions');
  }

  // pdc_api_private_connectivity_info_service_name - computed: true, optional: false, required: false
  public get pdcApiPrivateConnectivityInfoServiceName() {
    return this.getStringAttribute('pdc_api_private_connectivity_info_service_name');
  }

  // pdc_gateway_private_connectivity_info_availability_zone_ids - computed: true, optional: false, required: false
  public get pdcGatewayPrivateConnectivityInfoAvailabilityZoneIds() {
    return this.getListAttribute('pdc_gateway_private_connectivity_info_availability_zone_ids');
  }

  // pdc_gateway_private_connectivity_info_availability_zones - computed: true, optional: false, required: false
  public get pdcGatewayPrivateConnectivityInfoAvailabilityZones() {
    return this.getListAttribute('pdc_gateway_private_connectivity_info_availability_zones');
  }

  // pdc_gateway_private_connectivity_info_private_dns - computed: true, optional: false, required: false
  public get pdcGatewayPrivateConnectivityInfoPrivateDns() {
    return this.getStringAttribute('pdc_gateway_private_connectivity_info_private_dns');
  }

  // pdc_gateway_private_connectivity_info_regions - computed: true, optional: false, required: false
  public get pdcGatewayPrivateConnectivityInfoRegions() {
    return this.getListAttribute('pdc_gateway_private_connectivity_info_regions');
  }

  // pdc_gateway_private_connectivity_info_service_name - computed: true, optional: false, required: false
  public get pdcGatewayPrivateConnectivityInfoServiceName() {
    return this.getStringAttribute('pdc_gateway_private_connectivity_info_service_name');
  }

  // profiles_allowlist_url - computed: true, optional: false, required: false
  public get profilesAllowlistUrl() {
    return this.getStringAttribute('profiles_allowlist_url');
  }

  // profiles_ip_allow_list_cname - computed: true, optional: false, required: false
  public get profilesIpAllowListCname() {
    return this.getStringAttribute('profiles_ip_allow_list_cname');
  }

  // profiles_name - computed: true, optional: false, required: false
  public get profilesName() {
    return this.getStringAttribute('profiles_name');
  }

  // profiles_private_connectivity_info_availability_zone_ids - computed: true, optional: false, required: false
  public get profilesPrivateConnectivityInfoAvailabilityZoneIds() {
    return this.getListAttribute('profiles_private_connectivity_info_availability_zone_ids');
  }

  // profiles_private_connectivity_info_availability_zones - computed: true, optional: false, required: false
  public get profilesPrivateConnectivityInfoAvailabilityZones() {
    return this.getListAttribute('profiles_private_connectivity_info_availability_zones');
  }

  // profiles_private_connectivity_info_private_dns - computed: true, optional: false, required: false
  public get profilesPrivateConnectivityInfoPrivateDns() {
    return this.getStringAttribute('profiles_private_connectivity_info_private_dns');
  }

  // profiles_private_connectivity_info_regions - computed: true, optional: false, required: false
  public get profilesPrivateConnectivityInfoRegions() {
    return this.getListAttribute('profiles_private_connectivity_info_regions');
  }

  // profiles_private_connectivity_info_service_name - computed: true, optional: false, required: false
  public get profilesPrivateConnectivityInfoServiceName() {
    return this.getStringAttribute('profiles_private_connectivity_info_service_name');
  }

  // profiles_status - computed: true, optional: false, required: false
  public get profilesStatus() {
    return this.getStringAttribute('profiles_status');
  }

  // profiles_url - computed: true, optional: false, required: false
  public get profilesUrl() {
    return this.getStringAttribute('profiles_url');
  }

  // profiles_user_id - computed: true, optional: false, required: false
  public get profilesUserId() {
    return this.getNumberAttribute('profiles_user_id');
  }

  // prometheus_allowlist_url - computed: true, optional: false, required: false
  public get prometheusAllowlistUrl() {
    return this.getStringAttribute('prometheus_allowlist_url');
  }

  // prometheus_ip_allow_list_cname - computed: true, optional: false, required: false
  public get prometheusIpAllowListCname() {
    return this.getStringAttribute('prometheus_ip_allow_list_cname');
  }

  // prometheus_name - computed: true, optional: false, required: false
  public get prometheusName() {
    return this.getStringAttribute('prometheus_name');
  }

  // prometheus_private_connectivity_info_availability_zone_ids - computed: true, optional: false, required: false
  public get prometheusPrivateConnectivityInfoAvailabilityZoneIds() {
    return this.getListAttribute('prometheus_private_connectivity_info_availability_zone_ids');
  }

  // prometheus_private_connectivity_info_availability_zones - computed: true, optional: false, required: false
  public get prometheusPrivateConnectivityInfoAvailabilityZones() {
    return this.getListAttribute('prometheus_private_connectivity_info_availability_zones');
  }

  // prometheus_private_connectivity_info_private_dns - computed: true, optional: false, required: false
  public get prometheusPrivateConnectivityInfoPrivateDns() {
    return this.getStringAttribute('prometheus_private_connectivity_info_private_dns');
  }

  // prometheus_private_connectivity_info_regions - computed: true, optional: false, required: false
  public get prometheusPrivateConnectivityInfoRegions() {
    return this.getListAttribute('prometheus_private_connectivity_info_regions');
  }

  // prometheus_private_connectivity_info_service_name - computed: true, optional: false, required: false
  public get prometheusPrivateConnectivityInfoServiceName() {
    return this.getStringAttribute('prometheus_private_connectivity_info_service_name');
  }

  // prometheus_remote_endpoint - computed: true, optional: false, required: false
  public get prometheusRemoteEndpoint() {
    return this.getStringAttribute('prometheus_remote_endpoint');
  }

  // prometheus_remote_write_endpoint - computed: true, optional: false, required: false
  public get prometheusRemoteWriteEndpoint() {
    return this.getStringAttribute('prometheus_remote_write_endpoint');
  }

  // prometheus_status - computed: true, optional: false, required: false
  public get prometheusStatus() {
    return this.getStringAttribute('prometheus_status');
  }

  // prometheus_url - computed: true, optional: false, required: false
  public get prometheusUrl() {
    return this.getStringAttribute('prometheus_url');
  }

  // prometheus_user_id - computed: true, optional: false, required: false
  public get prometheusUserId() {
    return this.getNumberAttribute('prometheus_user_id');
  }

  // region_slug - computed: false, optional: true, required: false
  private _regionSlug?: string; 
  public get regionSlug() {
    return this.getStringAttribute('region_slug');
  }
  public set regionSlug(value: string) {
    this._regionSlug = value;
  }
  public resetRegionSlug() {
    this._regionSlug = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get regionSlugInput() {
    return this._regionSlug;
  }

  // slug - computed: false, optional: false, required: true
  private _slug?: string; 
  public get slug() {
    return this.getStringAttribute('slug');
  }
  public set slug(value: string) {
    this._slug = value;
  }
  // Temporarily expose input value. Use with caution.
  public get slugInput() {
    return this._slug;
  }

  // sm_url - computed: true, optional: false, required: false
  public get smUrl() {
    return this.getStringAttribute('sm_url');
  }

  // status - computed: true, optional: false, required: false
  public get status() {
    return this.getStringAttribute('status');
  }

  // traces_allowlist_url - computed: true, optional: false, required: false
  public get tracesAllowlistUrl() {
    return this.getStringAttribute('traces_allowlist_url');
  }

  // traces_ip_allow_list_cname - computed: true, optional: false, required: false
  public get tracesIpAllowListCname() {
    return this.getStringAttribute('traces_ip_allow_list_cname');
  }

  // traces_name - computed: true, optional: false, required: false
  public get tracesName() {
    return this.getStringAttribute('traces_name');
  }

  // traces_private_connectivity_info_availability_zone_ids - computed: true, optional: false, required: false
  public get tracesPrivateConnectivityInfoAvailabilityZoneIds() {
    return this.getListAttribute('traces_private_connectivity_info_availability_zone_ids');
  }

  // traces_private_connectivity_info_availability_zones - computed: true, optional: false, required: false
  public get tracesPrivateConnectivityInfoAvailabilityZones() {
    return this.getListAttribute('traces_private_connectivity_info_availability_zones');
  }

  // traces_private_connectivity_info_private_dns - computed: true, optional: false, required: false
  public get tracesPrivateConnectivityInfoPrivateDns() {
    return this.getStringAttribute('traces_private_connectivity_info_private_dns');
  }

  // traces_private_connectivity_info_regions - computed: true, optional: false, required: false
  public get tracesPrivateConnectivityInfoRegions() {
    return this.getListAttribute('traces_private_connectivity_info_regions');
  }

  // traces_private_connectivity_info_service_name - computed: true, optional: false, required: false
  public get tracesPrivateConnectivityInfoServiceName() {
    return this.getStringAttribute('traces_private_connectivity_info_service_name');
  }

  // traces_status - computed: true, optional: false, required: false
  public get tracesStatus() {
    return this.getStringAttribute('traces_status');
  }

  // traces_url - computed: true, optional: false, required: false
  public get tracesUrl() {
    return this.getStringAttribute('traces_url');
  }

  // traces_user_id - computed: true, optional: false, required: false
  public get tracesUserId() {
    return this.getNumberAttribute('traces_user_id');
  }

  // url - computed: true, optional: true, required: false
  private _url?: string; 
  public get url() {
    return this.getStringAttribute('url');
  }
  public set url(value: string) {
    this._url = value;
  }
  public resetUrl() {
    this._url = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get urlInput() {
    return this._url;
  }

  // wait_for_readiness - computed: false, optional: true, required: false
  private _waitForReadiness?: boolean | cdktf.IResolvable; 
  public get waitForReadiness() {
    return this.getBooleanAttribute('wait_for_readiness');
  }
  public set waitForReadiness(value: boolean | cdktf.IResolvable) {
    this._waitForReadiness = value;
  }
  public resetWaitForReadiness() {
    this._waitForReadiness = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get waitForReadinessInput() {
    return this._waitForReadiness;
  }

  // wait_for_readiness_timeout - computed: false, optional: true, required: false
  private _waitForReadinessTimeout?: string; 
  public get waitForReadinessTimeout() {
    return this.getStringAttribute('wait_for_readiness_timeout');
  }
  public set waitForReadinessTimeout(value: string) {
    this._waitForReadinessTimeout = value;
  }
  public resetWaitForReadinessTimeout() {
    this._waitForReadinessTimeout = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get waitForReadinessTimeoutInput() {
    return this._waitForReadinessTimeout;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      delete_protection: cdktf.booleanToTerraform(this._deleteProtection),
      description: cdktf.stringToTerraform(this._description),
      labels: cdktf.hashMapper(cdktf.stringToTerraform)(this._labels),
      name: cdktf.stringToTerraform(this._name),
      region_slug: cdktf.stringToTerraform(this._regionSlug),
      slug: cdktf.stringToTerraform(this._slug),
      url: cdktf.stringToTerraform(this._url),
      wait_for_readiness: cdktf.booleanToTerraform(this._waitForReadiness),
      wait_for_readiness_timeout: cdktf.stringToTerraform(this._waitForReadinessTimeout),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      delete_protection: {
        value: cdktf.booleanToHclTerraform(this._deleteProtection),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      description: {
        value: cdktf.stringToHclTerraform(this._description),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      labels: {
        value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(this._labels),
        isBlock: false,
        type: "map",
        storageClassType: "stringMap",
      },
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      region_slug: {
        value: cdktf.stringToHclTerraform(this._regionSlug),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      slug: {
        value: cdktf.stringToHclTerraform(this._slug),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      url: {
        value: cdktf.stringToHclTerraform(this._url),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      wait_for_readiness: {
        value: cdktf.booleanToHclTerraform(this._waitForReadiness),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      wait_for_readiness_timeout: {
        value: cdktf.stringToHclTerraform(this._waitForReadinessTimeout),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
