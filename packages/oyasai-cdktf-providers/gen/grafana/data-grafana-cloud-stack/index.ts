// https://registry.terraform.io/providers/grafana/grafana/4.45.2/docs/data-sources/cloud_stack
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataGrafanaCloudStackConfig extends cdktf.TerraformMetaArguments {
  /**
  * Subdomain that the Grafana instance will be available at (i.e. setting slug to “<stack_slug>” will make the instance
  * available at “https://<stack_slug>.grafana.net".
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana/4.45.2/docs/data-sources/cloud_stack#slug DataGrafanaCloudStack#slug}
  */
  readonly slug: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/grafana/grafana/4.45.2/docs/data-sources/cloud_stack grafana_cloud_stack}
*/
export class DataGrafanaCloudStack extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "grafana_cloud_stack";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataGrafanaCloudStack resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataGrafanaCloudStack to import
  * @param importFromId The id of the existing DataGrafanaCloudStack that should be imported. Refer to the {@link https://registry.terraform.io/providers/grafana/grafana/4.45.2/docs/data-sources/cloud_stack#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataGrafanaCloudStack to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "grafana_cloud_stack", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/grafana/grafana/4.45.2/docs/data-sources/cloud_stack grafana_cloud_stack} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataGrafanaCloudStackConfig
  */
  public constructor(scope: Construct, id: string, config: DataGrafanaCloudStackConfig) {
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
    this._slug = config.slug;
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

  // delete_protection - computed: true, optional: false, required: false
  public get deleteProtection() {
    return this.getBooleanAttribute('delete_protection');
  }

  // description - computed: true, optional: false, required: false
  public get description() {
    return this.getStringAttribute('description');
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

  // labels - computed: true, optional: false, required: false
  private _labels = new cdktf.StringMap(this, "labels");
  public get labels() {
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

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
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

  // region_slug - computed: true, optional: false, required: false
  public get regionSlug() {
    return this.getStringAttribute('region_slug');
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

  // url - computed: true, optional: false, required: false
  public get url() {
    return this.getStringAttribute('url');
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      slug: cdktf.stringToTerraform(this._slug),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      slug: {
        value: cdktf.stringToHclTerraform(this._slug),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
