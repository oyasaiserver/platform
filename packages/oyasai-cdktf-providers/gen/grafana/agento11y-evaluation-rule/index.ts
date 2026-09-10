// https://registry.terraform.io/providers/grafana/grafana/4.45.2/docs/resources/agento11y_evaluation_rule
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface Agento11YEvaluationRuleConfig extends cdktf.TerraformMetaArguments {
  /**
  * Optional Grafana alert rule UIDs associated with this evaluation rule.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana/4.45.2/docs/resources/agento11y_evaluation_rule#alert_rule_uids Agento11YEvaluationRule#alert_rule_uids}
  */
  readonly alertRuleUids?: string[];
  /**
  * Whether the rule is enabled. Defaults to `true`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana/4.45.2/docs/resources/agento11y_evaluation_rule#enabled Agento11YEvaluationRule#enabled}
  */
  readonly enabled?: boolean | cdktf.IResolvable;
  /**
  * IDs of the evaluators to run against matching generations. Must be non-empty.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana/4.45.2/docs/resources/agento11y_evaluation_rule#evaluator_ids Agento11YEvaluationRule#evaluator_ids}
  */
  readonly evaluatorIds: string[];
  /**
  * How evaluators execute. `parallel` runs all evaluators independently; `sequential` treats `evaluator_ids` as an ordered gate chain. Defaults to `parallel`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana/4.45.2/docs/resources/agento11y_evaluation_rule#execution_mode Agento11YEvaluationRule#execution_mode}
  */
  readonly executionMode?: string;
  /**
  * Generation tag keys to promote to Prometheus labels on evaluation metrics. Supports at most 10 unique, non-empty keys and cannot be set when `selector` is `conversation`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana/4.45.2/docs/resources/agento11y_evaluation_rule#filterable_tag_keys Agento11YEvaluationRule#filterable_tag_keys}
  */
  readonly filterableTagKeys?: string[];
  /**
  * Optional JSON object of match filters (for example `{"agent_name":"checkout-*"}`). Omit to match everything.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana/4.45.2/docs/resources/agento11y_evaluation_rule#match Agento11YEvaluationRule#match}
  */
  readonly match?: string;
  /**
  * Idle window, in seconds, before a conversation-scope rule runs. Required when `selector` is `conversation`; must be unset otherwise.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana/4.45.2/docs/resources/agento11y_evaluation_rule#min_idle_seconds Agento11YEvaluationRule#min_idle_seconds}
  */
  readonly minIdleSeconds?: number;
  /**
  * Tenant-unique identifier of the rule. Changing this forces a new resource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana/4.45.2/docs/resources/agento11y_evaluation_rule#rule_id Agento11YEvaluationRule#rule_id}
  */
  readonly ruleId: string;
  /**
  * Fraction of matching generations to evaluate, in `[0,1]`. Defaults to `0.01`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana/4.45.2/docs/resources/agento11y_evaluation_rule#sample_rate Agento11YEvaluationRule#sample_rate}
  */
  readonly sampleRate?: number;
  /**
  * Which generations the rule applies to. One of `user_visible_turn`, `all_assistant_generations`, `tool_call_steps`, `errored_generations`, `conversation`. Defaults to `user_visible_turn`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana/4.45.2/docs/resources/agento11y_evaluation_rule#selector Agento11YEvaluationRule#selector}
  */
  readonly selector?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/grafana/grafana/4.45.2/docs/resources/agento11y_evaluation_rule grafana_agento11y_evaluation_rule}
*/
export class Agento11YEvaluationRule extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "grafana_agento11y_evaluation_rule";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a Agento11YEvaluationRule resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the Agento11YEvaluationRule to import
  * @param importFromId The id of the existing Agento11YEvaluationRule that should be imported. Refer to the {@link https://registry.terraform.io/providers/grafana/grafana/4.45.2/docs/resources/agento11y_evaluation_rule#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the Agento11YEvaluationRule to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "grafana_agento11y_evaluation_rule", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/grafana/grafana/4.45.2/docs/resources/agento11y_evaluation_rule grafana_agento11y_evaluation_rule} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options Agento11YEvaluationRuleConfig
  */
  public constructor(scope: Construct, id: string, config: Agento11YEvaluationRuleConfig) {
    super(scope, id, {
      terraformResourceType: 'grafana_agento11y_evaluation_rule',
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
    this._alertRuleUids = config.alertRuleUids;
    this._enabled = config.enabled;
    this._evaluatorIds = config.evaluatorIds;
    this._executionMode = config.executionMode;
    this._filterableTagKeys = config.filterableTagKeys;
    this._match = config.match;
    this._minIdleSeconds = config.minIdleSeconds;
    this._ruleId = config.ruleId;
    this._sampleRate = config.sampleRate;
    this._selector = config.selector;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // alert_rule_uids - computed: false, optional: true, required: false
  private _alertRuleUids?: string[]; 
  public get alertRuleUids() {
    return this.getListAttribute('alert_rule_uids');
  }
  public set alertRuleUids(value: string[]) {
    this._alertRuleUids = value;
  }
  public resetAlertRuleUids() {
    this._alertRuleUids = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get alertRuleUidsInput() {
    return this._alertRuleUids;
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

  // evaluator_ids - computed: false, optional: false, required: true
  private _evaluatorIds?: string[]; 
  public get evaluatorIds() {
    return this.getListAttribute('evaluator_ids');
  }
  public set evaluatorIds(value: string[]) {
    this._evaluatorIds = value;
  }
  // Temporarily expose input value. Use with caution.
  public get evaluatorIdsInput() {
    return this._evaluatorIds;
  }

  // execution_mode - computed: true, optional: true, required: false
  private _executionMode?: string; 
  public get executionMode() {
    return this.getStringAttribute('execution_mode');
  }
  public set executionMode(value: string) {
    this._executionMode = value;
  }
  public resetExecutionMode() {
    this._executionMode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get executionModeInput() {
    return this._executionMode;
  }

  // filterable_tag_keys - computed: false, optional: true, required: false
  private _filterableTagKeys?: string[]; 
  public get filterableTagKeys() {
    return this.getListAttribute('filterable_tag_keys');
  }
  public set filterableTagKeys(value: string[]) {
    this._filterableTagKeys = value;
  }
  public resetFilterableTagKeys() {
    this._filterableTagKeys = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get filterableTagKeysInput() {
    return this._filterableTagKeys;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // match - computed: false, optional: true, required: false
  private _match?: string; 
  public get match() {
    return this.getStringAttribute('match');
  }
  public set match(value: string) {
    this._match = value;
  }
  public resetMatch() {
    this._match = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get matchInput() {
    return this._match;
  }

  // min_idle_seconds - computed: false, optional: true, required: false
  private _minIdleSeconds?: number; 
  public get minIdleSeconds() {
    return this.getNumberAttribute('min_idle_seconds');
  }
  public set minIdleSeconds(value: number) {
    this._minIdleSeconds = value;
  }
  public resetMinIdleSeconds() {
    this._minIdleSeconds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get minIdleSecondsInput() {
    return this._minIdleSeconds;
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

  // sample_rate - computed: true, optional: true, required: false
  private _sampleRate?: number; 
  public get sampleRate() {
    return this.getNumberAttribute('sample_rate');
  }
  public set sampleRate(value: number) {
    this._sampleRate = value;
  }
  public resetSampleRate() {
    this._sampleRate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sampleRateInput() {
    return this._sampleRate;
  }

  // selector - computed: true, optional: true, required: false
  private _selector?: string; 
  public get selector() {
    return this.getStringAttribute('selector');
  }
  public set selector(value: string) {
    this._selector = value;
  }
  public resetSelector() {
    this._selector = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get selectorInput() {
    return this._selector;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      alert_rule_uids: cdktf.listMapper(cdktf.stringToTerraform, false)(this._alertRuleUids),
      enabled: cdktf.booleanToTerraform(this._enabled),
      evaluator_ids: cdktf.listMapper(cdktf.stringToTerraform, false)(this._evaluatorIds),
      execution_mode: cdktf.stringToTerraform(this._executionMode),
      filterable_tag_keys: cdktf.listMapper(cdktf.stringToTerraform, false)(this._filterableTagKeys),
      match: cdktf.stringToTerraform(this._match),
      min_idle_seconds: cdktf.numberToTerraform(this._minIdleSeconds),
      rule_id: cdktf.stringToTerraform(this._ruleId),
      sample_rate: cdktf.numberToTerraform(this._sampleRate),
      selector: cdktf.stringToTerraform(this._selector),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      alert_rule_uids: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._alertRuleUids),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      enabled: {
        value: cdktf.booleanToHclTerraform(this._enabled),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      evaluator_ids: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._evaluatorIds),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      execution_mode: {
        value: cdktf.stringToHclTerraform(this._executionMode),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      filterable_tag_keys: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._filterableTagKeys),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      match: {
        value: cdktf.stringToHclTerraform(this._match),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      min_idle_seconds: {
        value: cdktf.numberToHclTerraform(this._minIdleSeconds),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      rule_id: {
        value: cdktf.stringToHclTerraform(this._ruleId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      sample_rate: {
        value: cdktf.numberToHclTerraform(this._sampleRate),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      selector: {
        value: cdktf.stringToHclTerraform(this._selector),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
