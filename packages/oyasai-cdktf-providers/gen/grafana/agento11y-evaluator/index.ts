// https://registry.terraform.io/providers/grafana/grafana/4.46.0/docs/resources/agento11y_evaluator
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface Agento11YEvaluatorConfig extends cdktf.TerraformMetaArguments {
  /**
  * Kind-specific evaluator configuration, encoded as a JSON object string. The server normalizes this payload, so it is managed from configuration and not refreshed from the API.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana/4.46.0/docs/resources/agento11y_evaluator#config Agento11YEvaluator#config}
  */
  readonly config: string;
  /**
  * Optional human-readable description of the evaluator.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana/4.46.0/docs/resources/agento11y_evaluator#description Agento11YEvaluator#description}
  */
  readonly description?: string;
  /**
  * Tenant-unique identifier of the evaluator. Changing this forces a new resource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana/4.46.0/docs/resources/agento11y_evaluator#evaluator_id Agento11YEvaluator#evaluator_id}
  */
  readonly evaluatorId: string;
  /**
  * The evaluator kind. One of `llm_judge`, `json_schema`, `regex`, `heuristic`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana/4.46.0/docs/resources/agento11y_evaluator#kind Agento11YEvaluator#kind}
  */
  readonly kind: string;
  /**
  * JSON array of output key definitions produced by the evaluator (for example `[{"key":"score","type":"number","pass_threshold":0.5}]`). Managed from configuration and not refreshed from the API.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana/4.46.0/docs/resources/agento11y_evaluator#output_keys Agento11YEvaluator#output_keys}
  */
  readonly outputKeys: string;
  /**
  * Version label of the evaluator definition.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana/4.46.0/docs/resources/agento11y_evaluator#version Agento11YEvaluator#version}
  */
  readonly version: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/grafana/grafana/4.46.0/docs/resources/agento11y_evaluator grafana_agento11y_evaluator}
*/
export class Agento11YEvaluator extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "grafana_agento11y_evaluator";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a Agento11YEvaluator resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the Agento11YEvaluator to import
  * @param importFromId The id of the existing Agento11YEvaluator that should be imported. Refer to the {@link https://registry.terraform.io/providers/grafana/grafana/4.46.0/docs/resources/agento11y_evaluator#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the Agento11YEvaluator to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "grafana_agento11y_evaluator", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/grafana/grafana/4.46.0/docs/resources/agento11y_evaluator grafana_agento11y_evaluator} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options Agento11YEvaluatorConfig
  */
  public constructor(scope: Construct, id: string, config: Agento11YEvaluatorConfig) {
    super(scope, id, {
      terraformResourceType: 'grafana_agento11y_evaluator',
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
    this._config = config.config;
    this._description = config.description;
    this._evaluatorId = config.evaluatorId;
    this._kind = config.kind;
    this._outputKeys = config.outputKeys;
    this._version = config.version;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // config - computed: false, optional: false, required: true
  private _config?: string; 
  public get config() {
    return this.getStringAttribute('config');
  }
  public set config(value: string) {
    this._config = value;
  }
  // Temporarily expose input value. Use with caution.
  public get configInput() {
    return this._config;
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

  // evaluator_id - computed: false, optional: false, required: true
  private _evaluatorId?: string; 
  public get evaluatorId() {
    return this.getStringAttribute('evaluator_id');
  }
  public set evaluatorId(value: string) {
    this._evaluatorId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get evaluatorIdInput() {
    return this._evaluatorId;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // kind - computed: false, optional: false, required: true
  private _kind?: string; 
  public get kind() {
    return this.getStringAttribute('kind');
  }
  public set kind(value: string) {
    this._kind = value;
  }
  // Temporarily expose input value. Use with caution.
  public get kindInput() {
    return this._kind;
  }

  // output_keys - computed: false, optional: false, required: true
  private _outputKeys?: string; 
  public get outputKeys() {
    return this.getStringAttribute('output_keys');
  }
  public set outputKeys(value: string) {
    this._outputKeys = value;
  }
  // Temporarily expose input value. Use with caution.
  public get outputKeysInput() {
    return this._outputKeys;
  }

  // version - computed: false, optional: false, required: true
  private _version?: string; 
  public get version() {
    return this.getStringAttribute('version');
  }
  public set version(value: string) {
    this._version = value;
  }
  // Temporarily expose input value. Use with caution.
  public get versionInput() {
    return this._version;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      config: cdktf.stringToTerraform(this._config),
      description: cdktf.stringToTerraform(this._description),
      evaluator_id: cdktf.stringToTerraform(this._evaluatorId),
      kind: cdktf.stringToTerraform(this._kind),
      output_keys: cdktf.stringToTerraform(this._outputKeys),
      version: cdktf.stringToTerraform(this._version),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      config: {
        value: cdktf.stringToHclTerraform(this._config),
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
      evaluator_id: {
        value: cdktf.stringToHclTerraform(this._evaluatorId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      kind: {
        value: cdktf.stringToHclTerraform(this._kind),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      output_keys: {
        value: cdktf.stringToHclTerraform(this._outputKeys),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      version: {
        value: cdktf.stringToHclTerraform(this._version),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
