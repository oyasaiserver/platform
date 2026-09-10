// https://registry.terraform.io/providers/grafana/grafana/4.45.2/docs/resources/data_source_config_lbac_rules
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataSourceConfigLbacRulesConfig extends cdktf.TerraformMetaArguments {
  /**
  * The UID of the datasource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana/4.45.2/docs/resources/data_source_config_lbac_rules#datasource_uid DataSourceConfigLbacRules#datasource_uid}
  */
  readonly datasourceUid: string;
  /**
  * JSON-encoded LBAC rules for the data source. Map of team UIDs to lists of rule strings.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana/4.45.2/docs/resources/data_source_config_lbac_rules#rules DataSourceConfigLbacRules#rules}
  */
  readonly rules: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/grafana/grafana/4.45.2/docs/resources/data_source_config_lbac_rules grafana_data_source_config_lbac_rules}
*/
export class DataSourceConfigLbacRules extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "grafana_data_source_config_lbac_rules";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataSourceConfigLbacRules resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataSourceConfigLbacRules to import
  * @param importFromId The id of the existing DataSourceConfigLbacRules that should be imported. Refer to the {@link https://registry.terraform.io/providers/grafana/grafana/4.45.2/docs/resources/data_source_config_lbac_rules#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataSourceConfigLbacRules to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "grafana_data_source_config_lbac_rules", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/grafana/grafana/4.45.2/docs/resources/data_source_config_lbac_rules grafana_data_source_config_lbac_rules} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataSourceConfigLbacRulesConfig
  */
  public constructor(scope: Construct, id: string, config: DataSourceConfigLbacRulesConfig) {
    super(scope, id, {
      terraformResourceType: 'grafana_data_source_config_lbac_rules',
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
    this._datasourceUid = config.datasourceUid;
    this._rules = config.rules;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // datasource_uid - computed: false, optional: false, required: true
  private _datasourceUid?: string; 
  public get datasourceUid() {
    return this.getStringAttribute('datasource_uid');
  }
  public set datasourceUid(value: string) {
    this._datasourceUid = value;
  }
  // Temporarily expose input value. Use with caution.
  public get datasourceUidInput() {
    return this._datasourceUid;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // rules - computed: false, optional: false, required: true
  private _rules?: string; 
  public get rules() {
    return this.getStringAttribute('rules');
  }
  public set rules(value: string) {
    this._rules = value;
  }
  // Temporarily expose input value. Use with caution.
  public get rulesInput() {
    return this._rules;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      datasource_uid: cdktf.stringToTerraform(this._datasourceUid),
      rules: cdktf.stringToTerraform(this._rules),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      datasource_uid: {
        value: cdktf.stringToHclTerraform(this._datasourceUid),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      rules: {
        value: cdktf.stringToHclTerraform(this._rules),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
