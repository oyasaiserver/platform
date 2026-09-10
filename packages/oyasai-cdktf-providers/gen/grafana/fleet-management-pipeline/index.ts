// https://registry.terraform.io/providers/grafana/grafana/4.46.0/docs/resources/fleet_management_pipeline
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface FleetManagementPipelineConfig extends cdktf.TerraformMetaArguments {
  /**
  * Type of the config. Must be one of: ALLOY, OTEL. Defaults to ALLOY if not specified.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana/4.46.0/docs/resources/fleet_management_pipeline#config_type FleetManagementPipeline#config_type}
  */
  readonly configType?: string;
  /**
  * Configuration contents of the pipeline to be used by collectors (can be Alloy config syntax or OTel YAML)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana/4.46.0/docs/resources/fleet_management_pipeline#contents FleetManagementPipeline#contents}
  */
  readonly contents: string;
  /**
  * Whether the pipeline is enabled for collectors
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana/4.46.0/docs/resources/fleet_management_pipeline#enabled FleetManagementPipeline#enabled}
  */
  readonly enabled?: boolean | cdktf.IResolvable;
  /**
  * Used to match against collectors and assign pipelines to them; follows the syntax of Prometheus Alertmanager matchers
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana/4.46.0/docs/resources/fleet_management_pipeline#matchers FleetManagementPipeline#matchers}
  */
  readonly matchers?: string[];
  /**
  * Name of the pipeline which is the unique identifier for the pipeline
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana/4.46.0/docs/resources/fleet_management_pipeline#name FleetManagementPipeline#name}
  */
  readonly name: string;
  /**
  * Namespace sent with the pipeline source (always `SOURCE_TYPE_TERRAFORM` in the Fleet Management API). Use a stable value per Terraform root or workspace so the UI shows Terraform as the source and API sync semantics stay consistent. If omitted, the namespace `default` is used.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana/4.46.0/docs/resources/fleet_management_pipeline#terraform_source_namespace FleetManagementPipeline#terraform_source_namespace}
  */
  readonly terraformSourceNamespace?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/grafana/grafana/4.46.0/docs/resources/fleet_management_pipeline grafana_fleet_management_pipeline}
*/
export class FleetManagementPipeline extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "grafana_fleet_management_pipeline";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a FleetManagementPipeline resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the FleetManagementPipeline to import
  * @param importFromId The id of the existing FleetManagementPipeline that should be imported. Refer to the {@link https://registry.terraform.io/providers/grafana/grafana/4.46.0/docs/resources/fleet_management_pipeline#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the FleetManagementPipeline to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "grafana_fleet_management_pipeline", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/grafana/grafana/4.46.0/docs/resources/fleet_management_pipeline grafana_fleet_management_pipeline} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options FleetManagementPipelineConfig
  */
  public constructor(scope: Construct, id: string, config: FleetManagementPipelineConfig) {
    super(scope, id, {
      terraformResourceType: 'grafana_fleet_management_pipeline',
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
    this._configType = config.configType;
    this._contents = config.contents;
    this._enabled = config.enabled;
    this._matchers = config.matchers;
    this._name = config.name;
    this._terraformSourceNamespace = config.terraformSourceNamespace;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // config_type - computed: true, optional: true, required: false
  private _configType?: string; 
  public get configType() {
    return this.getStringAttribute('config_type');
  }
  public set configType(value: string) {
    this._configType = value;
  }
  public resetConfigType() {
    this._configType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get configTypeInput() {
    return this._configType;
  }

  // contents - computed: false, optional: false, required: true
  private _contents?: string; 
  public get contents() {
    return this.getStringAttribute('contents');
  }
  public set contents(value: string) {
    this._contents = value;
  }
  // Temporarily expose input value. Use with caution.
  public get contentsInput() {
    return this._contents;
  }

  // enabled - computed: true, optional: true, required: false
  private _enabled?: boolean | cdktf.IResolvable; 
  public get enabled() {
    return this.getBooleanAttribute('enabled');
  }
  public set enabled(value: boolean | cdktf.IResolvable) {
    this._enabled = value;
  }
  public resetEnabled() {
    this._enabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enabledInput() {
    return this._enabled;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // matchers - computed: true, optional: true, required: false
  private _matchers?: string[]; 
  public get matchers() {
    return this.getListAttribute('matchers');
  }
  public set matchers(value: string[]) {
    this._matchers = value;
  }
  public resetMatchers() {
    this._matchers = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get matchersInput() {
    return this._matchers;
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

  // terraform_source_namespace - computed: true, optional: true, required: false
  private _terraformSourceNamespace?: string; 
  public get terraformSourceNamespace() {
    return this.getStringAttribute('terraform_source_namespace');
  }
  public set terraformSourceNamespace(value: string) {
    this._terraformSourceNamespace = value;
  }
  public resetTerraformSourceNamespace() {
    this._terraformSourceNamespace = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get terraformSourceNamespaceInput() {
    return this._terraformSourceNamespace;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      config_type: cdktf.stringToTerraform(this._configType),
      contents: cdktf.stringToTerraform(this._contents),
      enabled: cdktf.booleanToTerraform(this._enabled),
      matchers: cdktf.listMapper(cdktf.stringToTerraform, false)(this._matchers),
      name: cdktf.stringToTerraform(this._name),
      terraform_source_namespace: cdktf.stringToTerraform(this._terraformSourceNamespace),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      config_type: {
        value: cdktf.stringToHclTerraform(this._configType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      contents: {
        value: cdktf.stringToHclTerraform(this._contents),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      enabled: {
        value: cdktf.booleanToHclTerraform(this._enabled),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      matchers: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._matchers),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      terraform_source_namespace: {
        value: cdktf.stringToHclTerraform(this._terraformSourceNamespace),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
