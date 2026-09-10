// https://registry.terraform.io/providers/grafana/grafana/4.46.0/docs/resources/agento11y_hook_rule
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface Agento11YHookRuleConfig extends cdktf.TerraformMetaArguments {
  /**
  * Action taken when the hook fails. One of `deny`, `warn`. Defaults to `deny`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana/4.46.0/docs/resources/agento11y_hook_rule#action_on_fail Agento11YHookRule#action_on_fail}
  */
  readonly actionOnFail?: string;
  /**
  * Glob patterns of tool call names to block (for example `["delete_*"]`).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana/4.46.0/docs/resources/agento11y_hook_rule#blocked_tools Agento11YHookRule#blocked_tools}
  */
  readonly blockedTools?: string[];
  /**
  * Whether the hook rule is enabled. Defaults to `true`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana/4.46.0/docs/resources/agento11y_hook_rule#enabled Agento11YHookRule#enabled}
  */
  readonly enabled?: boolean | cdktf.IResolvable;
  /**
  * IDs of the evaluators to run synchronously. Optional when `blocked_tools` or `redact` is set.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana/4.46.0/docs/resources/agento11y_hook_rule#evaluator_ids Agento11YHookRule#evaluator_ids}
  */
  readonly evaluatorIds?: string[];
  /**
  * Optional JSON object of match filters (for example `{"agent_name":"checkout-*"}`). Omit to match everything.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana/4.46.0/docs/resources/agento11y_hook_rule#match Agento11YHookRule#match}
  */
  readonly match?: string;
  /**
  * When the hook runs. One of `preflight`, `postflight`. Defaults to `preflight`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana/4.46.0/docs/resources/agento11y_hook_rule#phase Agento11YHookRule#phase}
  */
  readonly phase?: string;
  /**
  * Evaluation priority; lower priority rules run first. Defaults to `0`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana/4.46.0/docs/resources/agento11y_hook_rule#priority Agento11YHookRule#priority}
  */
  readonly priority?: number;
  /**
  * Tenant-unique identifier of the hook rule. Changing this forces a new resource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana/4.46.0/docs/resources/agento11y_hook_rule#rule_id Agento11YHookRule#rule_id}
  */
  readonly ruleId: string;
  /**
  * Which generations the hook applies to. One of `all`, `user_visible_turn`, `all_assistant_generations`, `tool_call_steps`, `errored_generations`. Defaults to `all`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana/4.46.0/docs/resources/agento11y_hook_rule#selector Agento11YHookRule#selector}
  */
  readonly selector?: string;
  /**
  * When `true` (default), stop at the first failed rule. When `false`, run all evaluators and deny if any failed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana/4.46.0/docs/resources/agento11y_hook_rule#short_circuit Agento11YHookRule#short_circuit}
  */
  readonly shortCircuit?: boolean | cdktf.IResolvable;
  /**
  * redact block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana/4.46.0/docs/resources/agento11y_hook_rule#redact Agento11YHookRule#redact}
  */
  readonly redact?: Agento11YHookRuleRedact[] | cdktf.IResolvable;
}
export interface Agento11YHookRuleRedact {
  /**
  * Optional stable identifier for the pattern.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana/4.46.0/docs/resources/agento11y_hook_rule#id Agento11YHookRule#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Regular expression to redact.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana/4.46.0/docs/resources/agento11y_hook_rule#regex Agento11YHookRule#regex}
  */
  readonly regex: string;
}

export function agento11YHookRuleRedactToTerraform(struct?: Agento11YHookRuleRedact | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    id: cdktf.stringToTerraform(struct!.id),
    regex: cdktf.stringToTerraform(struct!.regex),
  }
}


export function agento11YHookRuleRedactToHclTerraform(struct?: Agento11YHookRuleRedact | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    id: {
      value: cdktf.stringToHclTerraform(struct!.id),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    regex: {
      value: cdktf.stringToHclTerraform(struct!.regex),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class Agento11YHookRuleRedactOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): Agento11YHookRuleRedact | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._id !== undefined) {
      hasAnyValues = true;
      internalValueResult.id = this._id;
    }
    if (this._regex !== undefined) {
      hasAnyValues = true;
      internalValueResult.regex = this._regex;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: Agento11YHookRuleRedact | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._id = undefined;
      this._regex = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._id = value.id;
      this._regex = value.regex;
    }
  }

  // id - computed: false, optional: true, required: false
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

  // regex - computed: false, optional: false, required: true
  private _regex?: string; 
  public get regex() {
    return this.getStringAttribute('regex');
  }
  public set regex(value: string) {
    this._regex = value;
  }
  // Temporarily expose input value. Use with caution.
  public get regexInput() {
    return this._regex;
  }
}

export class Agento11YHookRuleRedactList extends cdktf.ComplexList {
  public internalValue? : Agento11YHookRuleRedact[] | cdktf.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): Agento11YHookRuleRedactOutputReference {
    return new Agento11YHookRuleRedactOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/grafana/grafana/4.46.0/docs/resources/agento11y_hook_rule grafana_agento11y_hook_rule}
*/
export class Agento11YHookRule extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "grafana_agento11y_hook_rule";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a Agento11YHookRule resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the Agento11YHookRule to import
  * @param importFromId The id of the existing Agento11YHookRule that should be imported. Refer to the {@link https://registry.terraform.io/providers/grafana/grafana/4.46.0/docs/resources/agento11y_hook_rule#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the Agento11YHookRule to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "grafana_agento11y_hook_rule", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/grafana/grafana/4.46.0/docs/resources/agento11y_hook_rule grafana_agento11y_hook_rule} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options Agento11YHookRuleConfig
  */
  public constructor(scope: Construct, id: string, config: Agento11YHookRuleConfig) {
    super(scope, id, {
      terraformResourceType: 'grafana_agento11y_hook_rule',
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
    this._actionOnFail = config.actionOnFail;
    this._blockedTools = config.blockedTools;
    this._enabled = config.enabled;
    this._evaluatorIds = config.evaluatorIds;
    this._match = config.match;
    this._phase = config.phase;
    this._priority = config.priority;
    this._ruleId = config.ruleId;
    this._selector = config.selector;
    this._shortCircuit = config.shortCircuit;
    this._redact.internalValue = config.redact;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // action_on_fail - computed: true, optional: true, required: false
  private _actionOnFail?: string; 
  public get actionOnFail() {
    return this.getStringAttribute('action_on_fail');
  }
  public set actionOnFail(value: string) {
    this._actionOnFail = value;
  }
  public resetActionOnFail() {
    this._actionOnFail = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get actionOnFailInput() {
    return this._actionOnFail;
  }

  // blocked_tools - computed: false, optional: true, required: false
  private _blockedTools?: string[]; 
  public get blockedTools() {
    return this.getListAttribute('blocked_tools');
  }
  public set blockedTools(value: string[]) {
    this._blockedTools = value;
  }
  public resetBlockedTools() {
    this._blockedTools = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get blockedToolsInput() {
    return this._blockedTools;
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

  // evaluator_ids - computed: false, optional: true, required: false
  private _evaluatorIds?: string[]; 
  public get evaluatorIds() {
    return this.getListAttribute('evaluator_ids');
  }
  public set evaluatorIds(value: string[]) {
    this._evaluatorIds = value;
  }
  public resetEvaluatorIds() {
    this._evaluatorIds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get evaluatorIdsInput() {
    return this._evaluatorIds;
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

  // phase - computed: true, optional: true, required: false
  private _phase?: string; 
  public get phase() {
    return this.getStringAttribute('phase');
  }
  public set phase(value: string) {
    this._phase = value;
  }
  public resetPhase() {
    this._phase = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get phaseInput() {
    return this._phase;
  }

  // priority - computed: true, optional: true, required: false
  private _priority?: number; 
  public get priority() {
    return this.getNumberAttribute('priority');
  }
  public set priority(value: number) {
    this._priority = value;
  }
  public resetPriority() {
    this._priority = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get priorityInput() {
    return this._priority;
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

  // short_circuit - computed: true, optional: true, required: false
  private _shortCircuit?: boolean | cdktf.IResolvable; 
  public get shortCircuit() {
    return this.getBooleanAttribute('short_circuit');
  }
  public set shortCircuit(value: boolean | cdktf.IResolvable) {
    this._shortCircuit = value;
  }
  public resetShortCircuit() {
    this._shortCircuit = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get shortCircuitInput() {
    return this._shortCircuit;
  }

  // redact - computed: false, optional: true, required: false
  private _redact = new Agento11YHookRuleRedactList(this, "redact", false);
  public get redact() {
    return this._redact;
  }
  public putRedact(value: Agento11YHookRuleRedact[] | cdktf.IResolvable) {
    this._redact.internalValue = value;
  }
  public resetRedact() {
    this._redact.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get redactInput() {
    return this._redact.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      action_on_fail: cdktf.stringToTerraform(this._actionOnFail),
      blocked_tools: cdktf.listMapper(cdktf.stringToTerraform, false)(this._blockedTools),
      enabled: cdktf.booleanToTerraform(this._enabled),
      evaluator_ids: cdktf.listMapper(cdktf.stringToTerraform, false)(this._evaluatorIds),
      match: cdktf.stringToTerraform(this._match),
      phase: cdktf.stringToTerraform(this._phase),
      priority: cdktf.numberToTerraform(this._priority),
      rule_id: cdktf.stringToTerraform(this._ruleId),
      selector: cdktf.stringToTerraform(this._selector),
      short_circuit: cdktf.booleanToTerraform(this._shortCircuit),
      redact: cdktf.listMapper(agento11YHookRuleRedactToTerraform, true)(this._redact.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      action_on_fail: {
        value: cdktf.stringToHclTerraform(this._actionOnFail),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      blocked_tools: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._blockedTools),
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
      match: {
        value: cdktf.stringToHclTerraform(this._match),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      phase: {
        value: cdktf.stringToHclTerraform(this._phase),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      priority: {
        value: cdktf.numberToHclTerraform(this._priority),
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
      selector: {
        value: cdktf.stringToHclTerraform(this._selector),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      short_circuit: {
        value: cdktf.booleanToHclTerraform(this._shortCircuit),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      redact: {
        value: cdktf.listMapperHcl(agento11YHookRuleRedactToHclTerraform, true)(this._redact.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "Agento11YHookRuleRedactList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
