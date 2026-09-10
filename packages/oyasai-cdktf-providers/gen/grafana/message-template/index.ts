// https://registry.terraform.io/providers/grafana/grafana/4.46.0/docs/resources/message_template
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface MessageTemplateConfig extends cdktf.TerraformMetaArguments {
  /**
  * Allow modifying the message template from other sources than Terraform or the Grafana API. Defaults to `false`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana/4.46.0/docs/resources/message_template#disable_provenance MessageTemplate#disable_provenance}
  */
  readonly disableProvenance?: boolean | cdktf.IResolvable;
  /**
  * The name of the notification template group.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana/4.46.0/docs/resources/message_template#name MessageTemplate#name}
  */
  readonly name: string;
  /**
  * The Organization ID. If not set, the Org ID defined in the provider block will be used.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana/4.46.0/docs/resources/message_template#org_id MessageTemplate#org_id}
  */
  readonly orgId?: string;
  /**
  * The content of the notification template group.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana/4.46.0/docs/resources/message_template#template MessageTemplate#template}
  */
  readonly template: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/grafana/grafana/4.46.0/docs/resources/message_template grafana_message_template}
*/
export class MessageTemplate extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "grafana_message_template";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a MessageTemplate resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the MessageTemplate to import
  * @param importFromId The id of the existing MessageTemplate that should be imported. Refer to the {@link https://registry.terraform.io/providers/grafana/grafana/4.46.0/docs/resources/message_template#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the MessageTemplate to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "grafana_message_template", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/grafana/grafana/4.46.0/docs/resources/message_template grafana_message_template} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options MessageTemplateConfig
  */
  public constructor(scope: Construct, id: string, config: MessageTemplateConfig) {
    super(scope, id, {
      terraformResourceType: 'grafana_message_template',
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
    this._disableProvenance = config.disableProvenance;
    this._name = config.name;
    this._orgId = config.orgId;
    this._template = config.template;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // disable_provenance - computed: true, optional: true, required: false
  private _disableProvenance?: boolean | cdktf.IResolvable; 
  public get disableProvenance() {
    return this.getBooleanAttribute('disable_provenance');
  }
  public set disableProvenance(value: boolean | cdktf.IResolvable) {
    this._disableProvenance = value;
  }
  public resetDisableProvenance() {
    this._disableProvenance = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get disableProvenanceInput() {
    return this._disableProvenance;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
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

  // org_id - computed: true, optional: true, required: false
  private _orgId?: string; 
  public get orgId() {
    return this.getStringAttribute('org_id');
  }
  public set orgId(value: string) {
    this._orgId = value;
  }
  public resetOrgId() {
    this._orgId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get orgIdInput() {
    return this._orgId;
  }

  // template - computed: false, optional: false, required: true
  private _template?: string; 
  public get template() {
    return this.getStringAttribute('template');
  }
  public set template(value: string) {
    this._template = value;
  }
  // Temporarily expose input value. Use with caution.
  public get templateInput() {
    return this._template;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      disable_provenance: cdktf.booleanToTerraform(this._disableProvenance),
      name: cdktf.stringToTerraform(this._name),
      org_id: cdktf.stringToTerraform(this._orgId),
      template: cdktf.stringToTerraform(this._template),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      disable_provenance: {
        value: cdktf.booleanToHclTerraform(this._disableProvenance),
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
      org_id: {
        value: cdktf.stringToHclTerraform(this._orgId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      template: {
        value: cdktf.stringToHclTerraform(this._template),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
