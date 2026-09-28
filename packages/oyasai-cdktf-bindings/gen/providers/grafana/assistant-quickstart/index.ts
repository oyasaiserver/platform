// https://registry.terraform.io/providers/grafana/grafana/4.46.0/docs/resources/assistant_quickstart
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface AssistantQuickstartConfig extends cdktf.TerraformMetaArguments {
  /**
  * Optional JSON-encoded array of context items pre-attached to the quickstart. Each element is an Assistant `ChatContextItem`; only `node.id`, `node.name`, and `node.data` (`{"type": ..., "data": {...}}`) are required, e.g. `{"node": {"id": ..., "name": ..., "data": {"type": ..., "data": {...}}}}`. This is an advanced, internal-format field. The most reliable way to produce a valid value is to create a quickstart with the desired context through the Assistant UI, then copy the resulting `contextItems` JSON. Omit this field if no pre-attached context is needed. See the example for a typical datasource context item.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana/4.46.0/docs/resources/assistant_quickstart#context_items AssistantQuickstart#context_items}
  */
  readonly contextItems?: string;
  /**
  * Whether the resource is enabled.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana/4.46.0/docs/resources/assistant_quickstart#enabled AssistantQuickstart#enabled}
  */
  readonly enabled?: boolean | cdktf.IResolvable;
  /**
  * The quickstart question text.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana/4.46.0/docs/resources/assistant_quickstart#prompt AssistantQuickstart#prompt}
  */
  readonly prompt: string;
  /**
  * Whether the resource is visible to the whole tenant (`tenant`) or only the creating user (`user`).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana/4.46.0/docs/resources/assistant_quickstart#scope AssistantQuickstart#scope}
  */
  readonly scope: string;
  /**
  * Optional title for the quickstart.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana/4.46.0/docs/resources/assistant_quickstart#title AssistantQuickstart#title}
  */
  readonly title?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/grafana/grafana/4.46.0/docs/resources/assistant_quickstart grafana_assistant_quickstart}
*/
export class AssistantQuickstart extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "grafana_assistant_quickstart";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a AssistantQuickstart resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the AssistantQuickstart to import
  * @param importFromId The id of the existing AssistantQuickstart that should be imported. Refer to the {@link https://registry.terraform.io/providers/grafana/grafana/4.46.0/docs/resources/assistant_quickstart#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the AssistantQuickstart to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "grafana_assistant_quickstart", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/grafana/grafana/4.46.0/docs/resources/assistant_quickstart grafana_assistant_quickstart} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options AssistantQuickstartConfig
  */
  public constructor(scope: Construct, id: string, config: AssistantQuickstartConfig) {
    super(scope, id, {
      terraformResourceType: 'grafana_assistant_quickstart',
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
    this._contextItems = config.contextItems;
    this._enabled = config.enabled;
    this._prompt = config.prompt;
    this._scope = config.scope;
    this._title = config.title;
  }

  // ==========
  // ATTRIBUTES
  // ==========

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

  // prompt - computed: false, optional: false, required: true
  private _prompt?: string; 
  public get prompt() {
    return this.getStringAttribute('prompt');
  }
  public set prompt(value: string) {
    this._prompt = value;
  }
  // Temporarily expose input value. Use with caution.
  public get promptInput() {
    return this._prompt;
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

  // title - computed: false, optional: true, required: false
  private _title?: string; 
  public get title() {
    return this.getStringAttribute('title');
  }
  public set title(value: string) {
    this._title = value;
  }
  public resetTitle() {
    this._title = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get titleInput() {
    return this._title;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      context_items: cdktf.stringToTerraform(this._contextItems),
      enabled: cdktf.booleanToTerraform(this._enabled),
      prompt: cdktf.stringToTerraform(this._prompt),
      scope: cdktf.stringToTerraform(this._scope),
      title: cdktf.stringToTerraform(this._title),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      context_items: {
        value: cdktf.stringToHclTerraform(this._contextItems),
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
      prompt: {
        value: cdktf.stringToHclTerraform(this._prompt),
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
      title: {
        value: cdktf.stringToHclTerraform(this._title),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
