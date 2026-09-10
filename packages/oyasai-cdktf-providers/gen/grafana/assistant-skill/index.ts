// https://registry.terraform.io/providers/grafana/grafana/4.46.0/docs/resources/assistant_skill
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface AssistantSkillConfig extends cdktf.TerraformMetaArguments {
  /**
  * The skill content.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana/4.46.0/docs/resources/assistant_skill#body AssistantSkill#body}
  */
  readonly body: string;
  /**
  * The slash command name that invokes the skill. Setting this enables the skill as a command.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana/4.46.0/docs/resources/assistant_skill#command_name AssistantSkill#command_name}
  */
  readonly commandName?: string;
  /**
  * Optional JSON array of context items referenced by the skill.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana/4.46.0/docs/resources/assistant_skill#context_items AssistantSkill#context_items}
  */
  readonly contextItems?: string;
  /**
  * Whether the skill is included in the knowledgebase.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana/4.46.0/docs/resources/assistant_skill#include_in_knowledgebase AssistantSkill#include_in_knowledgebase}
  */
  readonly includeInKnowledgebase?: boolean | cdktf.IResolvable;
  /**
  * The skill name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana/4.46.0/docs/resources/assistant_skill#name AssistantSkill#name}
  */
  readonly name: string;
  /**
  * Whether the resource is visible to the whole tenant (`tenant`) or only the creating user (`user`).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana/4.46.0/docs/resources/assistant_skill#scope AssistantSkill#scope}
  */
  readonly scope: string;
  /**
  * allowed_tools block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana/4.46.0/docs/resources/assistant_skill#allowed_tools AssistantSkill#allowed_tools}
  */
  readonly allowedTools?: AssistantSkillAllowedTools[] | cdktf.IResolvable;
}
export interface AssistantSkillAllowedTools {
  /**
  * Integration UUID.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana/4.46.0/docs/resources/assistant_skill#integration_id AssistantSkill#integration_id}
  */
  readonly integrationId: string;
  /**
  * MCP tool name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana/4.46.0/docs/resources/assistant_skill#tool_name AssistantSkill#tool_name}
  */
  readonly toolName: string;
}

export function assistantSkillAllowedToolsToTerraform(struct?: AssistantSkillAllowedTools | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    integration_id: cdktf.stringToTerraform(struct!.integrationId),
    tool_name: cdktf.stringToTerraform(struct!.toolName),
  }
}


export function assistantSkillAllowedToolsToHclTerraform(struct?: AssistantSkillAllowedTools | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    integration_id: {
      value: cdktf.stringToHclTerraform(struct!.integrationId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    tool_name: {
      value: cdktf.stringToHclTerraform(struct!.toolName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AssistantSkillAllowedToolsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): AssistantSkillAllowedTools | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._integrationId !== undefined) {
      hasAnyValues = true;
      internalValueResult.integrationId = this._integrationId;
    }
    if (this._toolName !== undefined) {
      hasAnyValues = true;
      internalValueResult.toolName = this._toolName;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AssistantSkillAllowedTools | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._integrationId = undefined;
      this._toolName = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._integrationId = value.integrationId;
      this._toolName = value.toolName;
    }
  }

  // integration_id - computed: false, optional: false, required: true
  private _integrationId?: string; 
  public get integrationId() {
    return this.getStringAttribute('integration_id');
  }
  public set integrationId(value: string) {
    this._integrationId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get integrationIdInput() {
    return this._integrationId;
  }

  // tool_name - computed: false, optional: false, required: true
  private _toolName?: string; 
  public get toolName() {
    return this.getStringAttribute('tool_name');
  }
  public set toolName(value: string) {
    this._toolName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get toolNameInput() {
    return this._toolName;
  }
}

export class AssistantSkillAllowedToolsList extends cdktf.ComplexList {
  public internalValue? : AssistantSkillAllowedTools[] | cdktf.IResolvable

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
  public get(index: number): AssistantSkillAllowedToolsOutputReference {
    return new AssistantSkillAllowedToolsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/grafana/grafana/4.46.0/docs/resources/assistant_skill grafana_assistant_skill}
*/
export class AssistantSkill extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "grafana_assistant_skill";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a AssistantSkill resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the AssistantSkill to import
  * @param importFromId The id of the existing AssistantSkill that should be imported. Refer to the {@link https://registry.terraform.io/providers/grafana/grafana/4.46.0/docs/resources/assistant_skill#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the AssistantSkill to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "grafana_assistant_skill", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/grafana/grafana/4.46.0/docs/resources/assistant_skill grafana_assistant_skill} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options AssistantSkillConfig
  */
  public constructor(scope: Construct, id: string, config: AssistantSkillConfig) {
    super(scope, id, {
      terraformResourceType: 'grafana_assistant_skill',
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
    this._body = config.body;
    this._commandName = config.commandName;
    this._contextItems = config.contextItems;
    this._includeInKnowledgebase = config.includeInKnowledgebase;
    this._name = config.name;
    this._scope = config.scope;
    this._allowedTools.internalValue = config.allowedTools;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // body - computed: false, optional: false, required: true
  private _body?: string; 
  public get body() {
    return this.getStringAttribute('body');
  }
  public set body(value: string) {
    this._body = value;
  }
  // Temporarily expose input value. Use with caution.
  public get bodyInput() {
    return this._body;
  }

  // command_name - computed: false, optional: true, required: false
  private _commandName?: string; 
  public get commandName() {
    return this.getStringAttribute('command_name');
  }
  public set commandName(value: string) {
    this._commandName = value;
  }
  public resetCommandName() {
    this._commandName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get commandNameInput() {
    return this._commandName;
  }

  // context_items - computed: false, optional: true, required: false
  private _contextItems?: string; 
  public get contextItems() {
    return this.getStringAttribute('context_items');
  }
  public set contextItems(value: string) {
    this._contextItems = value;
  }
  public resetContextItems() {
    this._contextItems = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get contextItemsInput() {
    return this._contextItems;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // include_in_knowledgebase - computed: true, optional: true, required: false
  private _includeInKnowledgebase?: boolean | cdktf.IResolvable; 
  public get includeInKnowledgebase() {
    return this.getBooleanAttribute('include_in_knowledgebase');
  }
  public set includeInKnowledgebase(value: boolean | cdktf.IResolvable) {
    this._includeInKnowledgebase = value;
  }
  public resetIncludeInKnowledgebase() {
    this._includeInKnowledgebase = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get includeInKnowledgebaseInput() {
    return this._includeInKnowledgebase;
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

  // scope - computed: false, optional: false, required: true
  private _scope?: string; 
  public get scope() {
    return this.getStringAttribute('scope');
  }
  public set scope(value: string) {
    this._scope = value;
  }
  // Temporarily expose input value. Use with caution.
  public get scopeInput() {
    return this._scope;
  }

  // allowed_tools - computed: false, optional: true, required: false
  private _allowedTools = new AssistantSkillAllowedToolsList(this, "allowed_tools", false);
  public get allowedTools() {
    return this._allowedTools;
  }
  public putAllowedTools(value: AssistantSkillAllowedTools[] | cdktf.IResolvable) {
    this._allowedTools.internalValue = value;
  }
  public resetAllowedTools() {
    this._allowedTools.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allowedToolsInput() {
    return this._allowedTools.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      body: cdktf.stringToTerraform(this._body),
      command_name: cdktf.stringToTerraform(this._commandName),
      context_items: cdktf.stringToTerraform(this._contextItems),
      include_in_knowledgebase: cdktf.booleanToTerraform(this._includeInKnowledgebase),
      name: cdktf.stringToTerraform(this._name),
      scope: cdktf.stringToTerraform(this._scope),
      allowed_tools: cdktf.listMapper(assistantSkillAllowedToolsToTerraform, true)(this._allowedTools.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      body: {
        value: cdktf.stringToHclTerraform(this._body),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      command_name: {
        value: cdktf.stringToHclTerraform(this._commandName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      context_items: {
        value: cdktf.stringToHclTerraform(this._contextItems),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      include_in_knowledgebase: {
        value: cdktf.booleanToHclTerraform(this._includeInKnowledgebase),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      scope: {
        value: cdktf.stringToHclTerraform(this._scope),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      allowed_tools: {
        value: cdktf.listMapperHcl(assistantSkillAllowedToolsToHclTerraform, true)(this._allowedTools.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "AssistantSkillAllowedToolsList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
