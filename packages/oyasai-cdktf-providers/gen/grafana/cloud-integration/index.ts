// https://registry.terraform.io/providers/grafana/grafana/4.45.2/docs/resources/cloud_integration
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface CloudIntegrationConfig extends cdktf.TerraformMetaArguments {
  /**
  * Whether alerts are enabled for this integration.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana/4.45.2/docs/resources/cloud_integration#alerts_enabled CloudIntegration#alerts_enabled}
  */
  readonly alertsEnabled?: boolean | cdktf.IResolvable;
  /**
  * The slug of the integration to install (e.g., 'docker', 'linux-node').
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana/4.45.2/docs/resources/cloud_integration#slug CloudIntegration#slug}
  */
  readonly slug: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/grafana/grafana/4.45.2/docs/resources/cloud_integration grafana_cloud_integration}
*/
export class CloudIntegration extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "grafana_cloud_integration";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a CloudIntegration resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the CloudIntegration to import
  * @param importFromId The id of the existing CloudIntegration that should be imported. Refer to the {@link https://registry.terraform.io/providers/grafana/grafana/4.45.2/docs/resources/cloud_integration#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the CloudIntegration to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "grafana_cloud_integration", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/grafana/grafana/4.45.2/docs/resources/cloud_integration grafana_cloud_integration} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options CloudIntegrationConfig
  */
  public constructor(scope: Construct, id: string, config: CloudIntegrationConfig) {
    super(scope, id, {
      terraformResourceType: 'grafana_cloud_integration',
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
    this._alertsEnabled = config.alertsEnabled;
    this._slug = config.slug;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // alerts_enabled - computed: true, optional: true, required: false
  private _alertsEnabled?: boolean | cdktf.IResolvable; 
  public get alertsEnabled() {
    return this.getBooleanAttribute('alerts_enabled');
  }
  public set alertsEnabled(value: boolean | cdktf.IResolvable) {
    this._alertsEnabled = value;
  }
  public resetAlertsEnabled() {
    this._alertsEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get alertsEnabledInput() {
    return this._alertsEnabled;
  }

  // dashboard_folder - computed: true, optional: false, required: false
  public get dashboardFolder() {
    return this.getStringAttribute('dashboard_folder');
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // installed_version - computed: true, optional: false, required: false
  public get installedVersion() {
    return this.getStringAttribute('installed_version');
  }

  // latest_version - computed: true, optional: false, required: false
  public get latestVersion() {
    return this.getStringAttribute('latest_version');
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
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

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      alerts_enabled: cdktf.booleanToTerraform(this._alertsEnabled),
      slug: cdktf.stringToTerraform(this._slug),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      alerts_enabled: {
        value: cdktf.booleanToHclTerraform(this._alertsEnabled),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
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
