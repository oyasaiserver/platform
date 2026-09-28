// https://registry.terraform.io/providers/grafana/grafana/4.46.0/docs/data-sources/cloud_ips
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataGrafanaCloudIpsConfig extends cdktf.TerraformMetaArguments {
}

/**
* Represents a {@link https://registry.terraform.io/providers/grafana/grafana/4.46.0/docs/data-sources/cloud_ips grafana_cloud_ips}
*/
export class DataGrafanaCloudIps extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "grafana_cloud_ips";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataGrafanaCloudIps resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataGrafanaCloudIps to import
  * @param importFromId The id of the existing DataGrafanaCloudIps that should be imported. Refer to the {@link https://registry.terraform.io/providers/grafana/grafana/4.46.0/docs/data-sources/cloud_ips#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataGrafanaCloudIps to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "grafana_cloud_ips", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/grafana/grafana/4.46.0/docs/data-sources/cloud_ips grafana_cloud_ips} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataGrafanaCloudIpsConfig = {}
  */
  public constructor(scope: Construct, id: string, config: DataGrafanaCloudIpsConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'grafana_cloud_ips',
      terraformGeneratorMetadata: {
        providerName: 'grafana',
        providerVersion: '4.46.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // hosted_alerts - computed: true, optional: false, required: false
  public get hostedAlerts() {
    return cdktf.Fn.tolist(this.getListAttribute('hosted_alerts'));
  }

  // hosted_grafana - computed: true, optional: false, required: false
  public get hostedGrafana() {
    return cdktf.Fn.tolist(this.getListAttribute('hosted_grafana'));
  }

  // hosted_logs - computed: true, optional: false, required: false
  public get hostedLogs() {
    return cdktf.Fn.tolist(this.getListAttribute('hosted_logs'));
  }

  // hosted_metrics - computed: true, optional: false, required: false
  public get hostedMetrics() {
    return cdktf.Fn.tolist(this.getListAttribute('hosted_metrics'));
  }

  // hosted_otlp - computed: true, optional: false, required: false
  public get hostedOtlp() {
    return cdktf.Fn.tolist(this.getListAttribute('hosted_otlp'));
  }

  // hosted_profiles - computed: true, optional: false, required: false
  public get hostedProfiles() {
    return cdktf.Fn.tolist(this.getListAttribute('hosted_profiles'));
  }

  // hosted_traces - computed: true, optional: false, required: false
  public get hostedTraces() {
    return cdktf.Fn.tolist(this.getListAttribute('hosted_traces'));
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
    };
    return attrs;
  }
}
