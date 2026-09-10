// https://registry.terraform.io/providers/grafana/grafana/4.46.0/docs/data-sources/frontend_o11y_app
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataGrafanaFrontendO11YAppConfig extends cdktf.TerraformMetaArguments {
  /**
  * The name of the Frontend Observability App. Part of the Terraform Resource ID.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana/4.46.0/docs/data-sources/frontend_o11y_app#name DataGrafanaFrontendO11YApp#name}
  */
  readonly name: string;
  /**
  * The Stack ID of the Grafana Cloud instance. Part of the Terraform Resource ID.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana/4.46.0/docs/data-sources/frontend_o11y_app#stack_id DataGrafanaFrontendO11YApp#stack_id}
  */
  readonly stackId: number;
}

/**
* Represents a {@link https://registry.terraform.io/providers/grafana/grafana/4.46.0/docs/data-sources/frontend_o11y_app grafana_frontend_o11y_app}
*/
export class DataGrafanaFrontendO11YApp extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "grafana_frontend_o11y_app";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataGrafanaFrontendO11YApp resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataGrafanaFrontendO11YApp to import
  * @param importFromId The id of the existing DataGrafanaFrontendO11YApp that should be imported. Refer to the {@link https://registry.terraform.io/providers/grafana/grafana/4.46.0/docs/data-sources/frontend_o11y_app#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataGrafanaFrontendO11YApp to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "grafana_frontend_o11y_app", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/grafana/grafana/4.46.0/docs/data-sources/frontend_o11y_app grafana_frontend_o11y_app} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataGrafanaFrontendO11YAppConfig
  */
  public constructor(scope: Construct, id: string, config: DataGrafanaFrontendO11YAppConfig) {
    super(scope, id, {
      terraformResourceType: 'grafana_frontend_o11y_app',
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
    this._name = config.name;
    this._stackId = config.stackId;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // allowed_origins - computed: true, optional: false, required: false
  public get allowedOrigins() {
    return this.getListAttribute('allowed_origins');
  }

  // collector_endpoint - computed: true, optional: false, required: false
  public get collectorEndpoint() {
    return this.getStringAttribute('collector_endpoint');
  }

  // extra_log_attributes - computed: true, optional: false, required: false
  private _extraLogAttributes = new cdktf.StringMap(this, "extra_log_attributes");
  public get extraLogAttributes() {
    return this._extraLogAttributes;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getNumberAttribute('id');
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

  // settings - computed: true, optional: false, required: false
  private _settings = new cdktf.StringMap(this, "settings");
  public get settings() {
    return this._settings;
  }

  // stack_id - computed: false, optional: false, required: true
  private _stackId?: number; 
  public get stackId() {
    return this.getNumberAttribute('stack_id');
  }
  public set stackId(value: number) {
    this._stackId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get stackIdInput() {
    return this._stackId;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      name: cdktf.stringToTerraform(this._name),
      stack_id: cdktf.numberToTerraform(this._stackId),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      stack_id: {
        value: cdktf.numberToHclTerraform(this._stackId),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
