// https://registry.terraform.io/providers/grafana/grafana/4.45.2/docs/resources/assistant_terms_acceptance
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface AssistantTermsAcceptanceConfig extends cdktf.TerraformMetaArguments {
  /**
  * Whether the current Grafana Assistant terms are accepted for the stack. Setting this to `false` withdraws acceptance.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana/4.45.2/docs/resources/assistant_terms_acceptance#accepted AssistantTermsAcceptance#accepted}
  */
  readonly accepted: boolean | cdktf.IResolvable;
}

/**
* Represents a {@link https://registry.terraform.io/providers/grafana/grafana/4.45.2/docs/resources/assistant_terms_acceptance grafana_assistant_terms_acceptance}
*/
export class AssistantTermsAcceptance extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "grafana_assistant_terms_acceptance";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a AssistantTermsAcceptance resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the AssistantTermsAcceptance to import
  * @param importFromId The id of the existing AssistantTermsAcceptance that should be imported. Refer to the {@link https://registry.terraform.io/providers/grafana/grafana/4.45.2/docs/resources/assistant_terms_acceptance#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the AssistantTermsAcceptance to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "grafana_assistant_terms_acceptance", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/grafana/grafana/4.45.2/docs/resources/assistant_terms_acceptance grafana_assistant_terms_acceptance} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options AssistantTermsAcceptanceConfig
  */
  public constructor(scope: Construct, id: string, config: AssistantTermsAcceptanceConfig) {
    super(scope, id, {
      terraformResourceType: 'grafana_assistant_terms_acceptance',
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
    this._accepted = config.accepted;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // accepted - computed: false, optional: false, required: true
  private _accepted?: boolean | cdktf.IResolvable; 
  public get accepted() {
    return this.getBooleanAttribute('accepted');
  }
  public set accepted(value: boolean | cdktf.IResolvable) {
    this._accepted = value;
  }
  // Temporarily expose input value. Use with caution.
  public get acceptedInput() {
    return this._accepted;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      accepted: cdktf.booleanToTerraform(this._accepted),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      accepted: {
        value: cdktf.booleanToHclTerraform(this._accepted),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
