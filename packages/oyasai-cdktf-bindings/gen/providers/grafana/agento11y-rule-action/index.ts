// https://registry.terraform.io/providers/grafana/grafana/4.46.0/docs/resources/agento11y_rule_action
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface Agento11YRuleActionConfig extends cdktf.TerraformMetaArguments {
  /**
  * IDs of the collections that matching conversations are added to. Must be non-empty.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana/4.46.0/docs/resources/agento11y_rule_action#collection_ids Agento11YRuleAction#collection_ids}
  */
  readonly collectionIds: string[];
  /**
  * Aggregate verdict that triggers the action. One of `all_evaluators_pass`, `all_evaluators_fail`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana/4.46.0/docs/resources/agento11y_rule_action#condition Agento11YRuleAction#condition}
  */
  readonly condition: string;
  /**
  * Whether the action is enabled. Defaults to `true`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana/4.46.0/docs/resources/agento11y_rule_action#enabled Agento11YRuleAction#enabled}
  */
  readonly enabled?: boolean | cdktf.IResolvable;
  /**
  * ID of the evaluation rule this action is attached to. Changing this forces a new resource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana/4.46.0/docs/resources/agento11y_rule_action#rule_id Agento11YRuleAction#rule_id}
  */
  readonly ruleId: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/grafana/grafana/4.46.0/docs/resources/agento11y_rule_action grafana_agento11y_rule_action}
*/
export class Agento11YRuleAction extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "grafana_agento11y_rule_action";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a Agento11YRuleAction resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the Agento11YRuleAction to import
  * @param importFromId The id of the existing Agento11YRuleAction that should be imported. Refer to the {@link https://registry.terraform.io/providers/grafana/grafana/4.46.0/docs/resources/agento11y_rule_action#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the Agento11YRuleAction to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "grafana_agento11y_rule_action", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/grafana/grafana/4.46.0/docs/resources/agento11y_rule_action grafana_agento11y_rule_action} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options Agento11YRuleActionConfig
  */
  public constructor(scope: Construct, id: string, config: Agento11YRuleActionConfig) {
    super(scope, id, {
      terraformResourceType: 'grafana_agento11y_rule_action',
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
    this._collectionIds = config.collectionIds;
    this._condition = config.condition;
    this._enabled = config.enabled;
    this._ruleId = config.ruleId;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // collection_ids - computed: false, optional: false, required: true
  private _collectionIds?: string[]; 
  public get collectionIds() {
    return this.getListAttribute('collection_ids');
  }
  public set collectionIds(value: string[]) {
    this._collectionIds = value;
  }
  // Temporarily expose input value. Use with caution.
  public get collectionIdsInput() {
    return this._collectionIds;
  }

  // condition - computed: false, optional: false, required: true
  private _condition?: string; 
  public get condition() {
    return this.getStringAttribute('condition');
  }
  public set condition(value: string) {
    this._condition = value;
  }
  // Temporarily expose input value. Use with caution.
  public get conditionInput() {
    return this._condition;
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

  // rule_id - computed: false, optional: false, required: true
  private _ruleId?: string; 
  public get ruleId() {
    return this.getStringAttribute('rule_id');
  }
  public set ruleId(value: string) {
    this._ruleId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get ruleIdInput() {
    return this._ruleId;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      collection_ids: cdktf.listMapper(cdktf.stringToTerraform, false)(this._collectionIds),
      condition: cdktf.stringToTerraform(this._condition),
      enabled: cdktf.booleanToTerraform(this._enabled),
      rule_id: cdktf.stringToTerraform(this._ruleId),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      collection_ids: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._collectionIds),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      condition: {
        value: cdktf.stringToHclTerraform(this._condition),
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
      rule_id: {
        value: cdktf.stringToHclTerraform(this._ruleId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
