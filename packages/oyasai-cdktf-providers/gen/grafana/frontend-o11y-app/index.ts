// https://registry.terraform.io/providers/grafana/grafana/4.45.2/docs/resources/frontend_o11y_app
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface FrontendO11YAppConfig extends cdktf.TerraformMetaArguments {
  /**
  * A list of allowed origins for CORS.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana/4.45.2/docs/resources/frontend_o11y_app#allowed_origins FrontendO11YApp#allowed_origins}
  */
  readonly allowedOrigins: string[];
  /**
  * The extra attributes to append in each signal.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana/4.45.2/docs/resources/frontend_o11y_app#extra_log_attributes FrontendO11YApp#extra_log_attributes}
  */
  readonly extraLogAttributes: { [key: string]: string };
  /**
  * The name of Frontend Observability App. Part of the Terraform Resource ID.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana/4.45.2/docs/resources/frontend_o11y_app#name FrontendO11YApp#name}
  */
  readonly name: string;
  /**
  * The key-value settings of the Frontend Observability app. Available Settings: `{combineLabData=(0|1),geolocation.level=(0|1),geolocation.level=0-4,geolocation.country_denylist=<comma-separated-list-of-country-codes>}`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana/4.45.2/docs/resources/frontend_o11y_app#settings FrontendO11YApp#settings}
  */
  readonly settings: { [key: string]: string };
  /**
  * The Stack ID of the Grafana Cloud instance. Part of the Terraform Resource ID.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana/4.45.2/docs/resources/frontend_o11y_app#stack_id FrontendO11YApp#stack_id}
  */
  readonly stackId: number;
}

/**
* Represents a {@link https://registry.terraform.io/providers/grafana/grafana/4.45.2/docs/resources/frontend_o11y_app grafana_frontend_o11y_app}
*/
export class FrontendO11YApp extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "grafana_frontend_o11y_app";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a FrontendO11YApp resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the FrontendO11YApp to import
  * @param importFromId The id of the existing FrontendO11YApp that should be imported. Refer to the {@link https://registry.terraform.io/providers/grafana/grafana/4.45.2/docs/resources/frontend_o11y_app#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the FrontendO11YApp to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "grafana_frontend_o11y_app", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/grafana/grafana/4.45.2/docs/resources/frontend_o11y_app grafana_frontend_o11y_app} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options FrontendO11YAppConfig
  */
  public constructor(scope: Construct, id: string, config: FrontendO11YAppConfig) {
    super(scope, id, {
      terraformResourceType: 'grafana_frontend_o11y_app',
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
    this._allowedOrigins = config.allowedOrigins;
    this._extraLogAttributes = config.extraLogAttributes;
    this._name = config.name;
    this._settings = config.settings;
    this._stackId = config.stackId;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // allowed_origins - computed: false, optional: false, required: true
  private _allowedOrigins?: string[]; 
  public get allowedOrigins() {
    return this.getListAttribute('allowed_origins');
  }
  public set allowedOrigins(value: string[]) {
    this._allowedOrigins = value;
  }
  // Temporarily expose input value. Use with caution.
  public get allowedOriginsInput() {
    return this._allowedOrigins;
  }

  // collector_endpoint - computed: true, optional: false, required: false
  public get collectorEndpoint() {
    return this.getStringAttribute('collector_endpoint');
  }

  // extra_log_attributes - computed: false, optional: false, required: true
  private _extraLogAttributes?: { [key: string]: string }; 
  public get extraLogAttributes() {
    return this.getStringMapAttribute('extra_log_attributes');
  }
  public set extraLogAttributes(value: { [key: string]: string }) {
    this._extraLogAttributes = value;
  }
  // Temporarily expose input value. Use with caution.
  public get extraLogAttributesInput() {
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

  // settings - computed: false, optional: false, required: true
  private _settings?: { [key: string]: string }; 
  public get settings() {
    return this.getStringMapAttribute('settings');
  }
  public set settings(value: { [key: string]: string }) {
    this._settings = value;
  }
  // Temporarily expose input value. Use with caution.
  public get settingsInput() {
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
      allowed_origins: cdktf.listMapper(cdktf.stringToTerraform, false)(this._allowedOrigins),
      extra_log_attributes: cdktf.hashMapper(cdktf.stringToTerraform)(this._extraLogAttributes),
      name: cdktf.stringToTerraform(this._name),
      settings: cdktf.hashMapper(cdktf.stringToTerraform)(this._settings),
      stack_id: cdktf.numberToTerraform(this._stackId),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      allowed_origins: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._allowedOrigins),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      extra_log_attributes: {
        value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(this._extraLogAttributes),
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
      settings: {
        value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(this._settings),
        isBlock: false,
        type: "map",
        storageClassType: "stringMap",
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
