// https://registry.terraform.io/providers/infisical/infisical/0.20.14/docs/data-sources/identity_kubernetes_auth_template
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataInfisicalIdentityKubernetesAuthTemplateConfig extends cdktf.TerraformMetaArguments {
  /**
  * The ID of the auth template.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infisical/infisical/0.20.14/docs/data-sources/identity_kubernetes_auth_template#id DataInfisicalIdentityKubernetesAuthTemplate#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * The name of the auth template. Names are not unique, so a lookup by a name that several Kubernetes templates share fails and must use `id` instead.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infisical/infisical/0.20.14/docs/data-sources/identity_kubernetes_auth_template#name DataInfisicalIdentityKubernetesAuthTemplate#name}
  */
  readonly name?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/infisical/infisical/0.20.14/docs/data-sources/identity_kubernetes_auth_template infisical_identity_kubernetes_auth_template}
*/
export class DataInfisicalIdentityKubernetesAuthTemplate extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "infisical_identity_kubernetes_auth_template";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataInfisicalIdentityKubernetesAuthTemplate resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataInfisicalIdentityKubernetesAuthTemplate to import
  * @param importFromId The id of the existing DataInfisicalIdentityKubernetesAuthTemplate that should be imported. Refer to the {@link https://registry.terraform.io/providers/infisical/infisical/0.20.14/docs/data-sources/identity_kubernetes_auth_template#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataInfisicalIdentityKubernetesAuthTemplate to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "infisical_identity_kubernetes_auth_template", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/infisical/infisical/0.20.14/docs/data-sources/identity_kubernetes_auth_template infisical_identity_kubernetes_auth_template} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataInfisicalIdentityKubernetesAuthTemplateConfig = {}
  */
  public constructor(scope: Construct, id: string, config: DataInfisicalIdentityKubernetesAuthTemplateConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'infisical_identity_kubernetes_auth_template',
      terraformGeneratorMetadata: {
        providerName: 'infisical',
        providerVersion: '0.20.14'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._id = config.id;
    this._name = config.name;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // allowed_audience - computed: true, optional: false, required: false
  public get allowedAudience() {
    return this.getStringAttribute('allowed_audience');
  }

  // gateway_id - computed: true, optional: false, required: false
  public get gatewayId() {
    return this.getStringAttribute('gateway_id');
  }

  // gateway_pool_id - computed: true, optional: false, required: false
  public get gatewayPoolId() {
    return this.getStringAttribute('gateway_pool_id');
  }

  // has_token_reviewer_jwt - computed: true, optional: false, required: false
  public get hasTokenReviewerJwt() {
    return this.getBooleanAttribute('has_token_reviewer_jwt');
  }

  // id - computed: true, optional: true, required: false
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

  // kubernetes_ca_certificate - computed: true, optional: false, required: false
  public get kubernetesCaCertificate() {
    return this.getStringAttribute('kubernetes_ca_certificate');
  }

  // kubernetes_host - computed: true, optional: false, required: false
  public get kubernetesHost() {
    return this.getStringAttribute('kubernetes_host');
  }

  // name - computed: true, optional: true, required: false
  private _name?: string; 
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string) {
    this._name = value;
  }
  public resetName() {
    this._name = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name;
  }

  // token_reviewer_mode - computed: true, optional: false, required: false
  public get tokenReviewerMode() {
    return this.getStringAttribute('token_reviewer_mode');
  }

  // verify_tls_certificate - computed: true, optional: false, required: false
  public get verifyTlsCertificate() {
    return this.getBooleanAttribute('verify_tls_certificate');
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      id: cdktf.stringToTerraform(this._id),
      name: cdktf.stringToTerraform(this._name),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
