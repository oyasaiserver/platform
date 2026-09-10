// https://registry.terraform.io/providers/grafana/grafana/4.45.2/docs/resources/synthetic_monitoring_installation
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface SyntheticMonitoringInstallationConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana/4.45.2/docs/resources/synthetic_monitoring_installation#id SyntheticMonitoringInstallation#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * The [Grafana Cloud access policy](https://grafana.com/docs/grafana-cloud/security-and-account-management/authentication-and-permissions/access-policies/) with the following scopes: `stacks:read`, `metrics:write`, `logs:write`, `traces:write`. This is used to publish metrics and logs to Grafana Cloud stack.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana/4.45.2/docs/resources/synthetic_monitoring_installation#metrics_publisher_key SyntheticMonitoringInstallation#metrics_publisher_key}
  */
  readonly metricsPublisherKey: string;
  /**
  * The ID or slug of the stack to install SM on.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana/4.45.2/docs/resources/synthetic_monitoring_installation#stack_id SyntheticMonitoringInstallation#stack_id}
  */
  readonly stackId: string;
  /**
  * The URL of the SM API to install SM on. This depends on the stack region, find the list of API URLs here: https://grafana.com/docs/grafana-cloud/testing/synthetic-monitoring/set-up/set-up-private-probes/#probe-api-server-url. A static mapping exists in the provider but it may not contain all the regions. If it does contain the stack's region, this field is computed automatically and readable.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana/4.45.2/docs/resources/synthetic_monitoring_installation#stack_sm_api_url SyntheticMonitoringInstallation#stack_sm_api_url}
  */
  readonly stackSmApiUrl?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/grafana/grafana/4.45.2/docs/resources/synthetic_monitoring_installation grafana_synthetic_monitoring_installation}
*/
export class SyntheticMonitoringInstallation extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "grafana_synthetic_monitoring_installation";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a SyntheticMonitoringInstallation resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the SyntheticMonitoringInstallation to import
  * @param importFromId The id of the existing SyntheticMonitoringInstallation that should be imported. Refer to the {@link https://registry.terraform.io/providers/grafana/grafana/4.45.2/docs/resources/synthetic_monitoring_installation#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the SyntheticMonitoringInstallation to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "grafana_synthetic_monitoring_installation", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/grafana/grafana/4.45.2/docs/resources/synthetic_monitoring_installation grafana_synthetic_monitoring_installation} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options SyntheticMonitoringInstallationConfig
  */
  public constructor(scope: Construct, id: string, config: SyntheticMonitoringInstallationConfig) {
    super(scope, id, {
      terraformResourceType: 'grafana_synthetic_monitoring_installation',
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
    this._id = config.id;
    this._metricsPublisherKey = config.metricsPublisherKey;
    this._stackId = config.stackId;
    this._stackSmApiUrl = config.stackSmApiUrl;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // id - computed: true, optional: true, required: false
  private _id?: string; 
  public get id() {
    return this.getStringAttribute('id');
  }
  public set id(value: string) {
    this._id = value;
  }
  public resetId() {
    this._id = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get idInput() {
    return this._id;
  }

  // metrics_publisher_key - computed: false, optional: false, required: true
  private _metricsPublisherKey?: string; 
  public get metricsPublisherKey() {
    return this.getStringAttribute('metrics_publisher_key');
  }
  public set metricsPublisherKey(value: string) {
    this._metricsPublisherKey = value;
  }
  // Temporarily expose input value. Use with caution.
  public get metricsPublisherKeyInput() {
    return this._metricsPublisherKey;
  }

  // sm_access_token - computed: true, optional: false, required: false
  public get smAccessToken() {
    return this.getStringAttribute('sm_access_token');
  }

  // stack_id - computed: false, optional: false, required: true
  private _stackId?: string; 
  public get stackId() {
    return this.getStringAttribute('stack_id');
  }
  public set stackId(value: string) {
    this._stackId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get stackIdInput() {
    return this._stackId;
  }

  // stack_sm_api_url - computed: true, optional: true, required: false
  private _stackSmApiUrl?: string; 
  public get stackSmApiUrl() {
    return this.getStringAttribute('stack_sm_api_url');
  }
  public set stackSmApiUrl(value: string) {
    this._stackSmApiUrl = value;
  }
  public resetStackSmApiUrl() {
    this._stackSmApiUrl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get stackSmApiUrlInput() {
    return this._stackSmApiUrl;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      id: cdktf.stringToTerraform(this._id),
      metrics_publisher_key: cdktf.stringToTerraform(this._metricsPublisherKey),
      stack_id: cdktf.stringToTerraform(this._stackId),
      stack_sm_api_url: cdktf.stringToTerraform(this._stackSmApiUrl),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      metrics_publisher_key: {
        value: cdktf.stringToHclTerraform(this._metricsPublisherKey),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      stack_id: {
        value: cdktf.stringToHclTerraform(this._stackId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      stack_sm_api_url: {
        value: cdktf.stringToHclTerraform(this._stackSmApiUrl),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
