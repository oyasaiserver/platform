// https://registry.terraform.io/providers/grafana/grafana/4.46.0/docs/resources/asserts_suppressed_assertions_config
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface AssertsSuppressedAssertionsConfigConfig extends cdktf.TerraformMetaArguments {
  /**
  * Labels to match for this disabled alert configuration.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana/4.46.0/docs/resources/asserts_suppressed_assertions_config#match_labels AssertsSuppressedAssertionsConfig#match_labels}
  */
  readonly matchLabels?: { [key: string]: string };
  /**
  * The name of the disabled alert configuration.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana/4.46.0/docs/resources/asserts_suppressed_assertions_config#name AssertsSuppressedAssertionsConfig#name}
  */
  readonly name: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/grafana/grafana/4.46.0/docs/resources/asserts_suppressed_assertions_config grafana_asserts_suppressed_assertions_config}
*/
export class AssertsSuppressedAssertionsConfig extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "grafana_asserts_suppressed_assertions_config";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a AssertsSuppressedAssertionsConfig resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the AssertsSuppressedAssertionsConfig to import
  * @param importFromId The id of the existing AssertsSuppressedAssertionsConfig that should be imported. Refer to the {@link https://registry.terraform.io/providers/grafana/grafana/4.46.0/docs/resources/asserts_suppressed_assertions_config#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the AssertsSuppressedAssertionsConfig to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "grafana_asserts_suppressed_assertions_config", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/grafana/grafana/4.46.0/docs/resources/asserts_suppressed_assertions_config grafana_asserts_suppressed_assertions_config} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options AssertsSuppressedAssertionsConfigConfig
  */
  public constructor(scope: Construct, id: string, config: AssertsSuppressedAssertionsConfigConfig) {
    super(scope, id, {
      terraformResourceType: 'grafana_asserts_suppressed_assertions_config',
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
    this._matchLabels = config.matchLabels;
    this._name = config.name;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // match_labels - computed: false, optional: true, required: false
  private _matchLabels?: { [key: string]: string }; 
  public get matchLabels() {
    return this.getStringMapAttribute('match_labels');
  }
  public set matchLabels(value: { [key: string]: string }) {
    this._matchLabels = value;
  }
  public resetMatchLabels() {
    this._matchLabels = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get matchLabelsInput() {
    return this._matchLabels;
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

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      match_labels: cdktf.hashMapper(cdktf.stringToTerraform)(this._matchLabels),
      name: cdktf.stringToTerraform(this._name),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      match_labels: {
        value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(this._matchLabels),
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
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
