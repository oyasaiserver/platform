// https://registry.terraform.io/providers/infisical/infisical/0.20.14/docs/resources/identity_kubernetes_auth_template
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface IdentityKubernetesAuthTemplateConfig extends cdktf.TerraformMetaArguments {
  /**
  * The audience claim that service account JWTs must carry to authenticate. Leave empty to skip the audience check.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infisical/infisical/0.20.14/docs/resources/identity_kubernetes_auth_template#allowed_audience IdentityKubernetesAuthTemplate#allowed_audience}
  */
  readonly allowedAudience?: string;
  /**
  * The ID of the gateway to route Kubernetes API requests through. Mutually exclusive with `gateway_pool_id`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infisical/infisical/0.20.14/docs/resources/identity_kubernetes_auth_template#gateway_id IdentityKubernetesAuthTemplate#gateway_id}
  */
  readonly gatewayId?: string;
  /**
  * The ID of the gateway pool to route Kubernetes API requests through. Mutually exclusive with `gateway_id`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infisical/infisical/0.20.14/docs/resources/identity_kubernetes_auth_template#gateway_pool_id IdentityKubernetesAuthTemplate#gateway_pool_id}
  */
  readonly gatewayPoolId?: string;
  /**
  * The PEM-encoded CA certificate used to validate the Kubernetes API server's TLS certificate. Must be omitted when `token_reviewer_mode` is `gateway`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infisical/infisical/0.20.14/docs/resources/identity_kubernetes_auth_template#kubernetes_ca_certificate IdentityKubernetesAuthTemplate#kubernetes_ca_certificate}
  */
  readonly kubernetesCaCertificate?: string;
  /**
  * The host string, host:port pair, or URL to the base of the Kubernetes API server. Required when `token_reviewer_mode` is `api`, and must be omitted when it is `gateway`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infisical/infisical/0.20.14/docs/resources/identity_kubernetes_auth_template#kubernetes_host IdentityKubernetesAuthTemplate#kubernetes_host}
  */
  readonly kubernetesHost?: string;
  /**
  * The name of the auth template, at most 64 characters.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infisical/infisical/0.20.14/docs/resources/identity_kubernetes_auth_template#name IdentityKubernetesAuthTemplate#name}
  */
  readonly name: string;
  /**
  * A long-lived service account JWT that Infisical uses to call the TokenReview API. If omitted, each identity's own service account token reviews itself. Must be omitted when `token_reviewer_mode` is `gateway`. Write-only: Infisical never returns it, so Terraform cannot detect a change made outside this configuration, and an imported template leaves it empty.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infisical/infisical/0.20.14/docs/resources/identity_kubernetes_auth_template#token_reviewer_jwt IdentityKubernetesAuthTemplate#token_reviewer_jwt}
  */
  readonly tokenReviewerJwt?: string;
  /**
  * Who performs the TokenReview. `api` means Infisical calls `kubernetes_host` directly. `gateway` means the TokenReview runs through `gateway_id` or `gateway_pool_id`. Defaults to `api`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infisical/infisical/0.20.14/docs/resources/identity_kubernetes_auth_template#token_reviewer_mode IdentityKubernetesAuthTemplate#token_reviewer_mode}
  */
  readonly tokenReviewerMode?: string;
  /**
  * Whether to verify the Kubernetes API server's TLS certificate against `kubernetes_ca_certificate`. Defaults to true when a CA certificate is set, and false otherwise. In `api` mode, true requires a CA certificate and false forbids one. In `gateway` mode it cannot be true.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infisical/infisical/0.20.14/docs/resources/identity_kubernetes_auth_template#verify_tls_certificate IdentityKubernetesAuthTemplate#verify_tls_certificate}
  */
  readonly verifyTlsCertificate?: boolean | cdktf.IResolvable;
}

/**
* Represents a {@link https://registry.terraform.io/providers/infisical/infisical/0.20.14/docs/resources/identity_kubernetes_auth_template infisical_identity_kubernetes_auth_template}
*/
export class IdentityKubernetesAuthTemplate extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "infisical_identity_kubernetes_auth_template";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a IdentityKubernetesAuthTemplate resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the IdentityKubernetesAuthTemplate to import
  * @param importFromId The id of the existing IdentityKubernetesAuthTemplate that should be imported. Refer to the {@link https://registry.terraform.io/providers/infisical/infisical/0.20.14/docs/resources/identity_kubernetes_auth_template#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the IdentityKubernetesAuthTemplate to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "infisical_identity_kubernetes_auth_template", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/infisical/infisical/0.20.14/docs/resources/identity_kubernetes_auth_template infisical_identity_kubernetes_auth_template} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options IdentityKubernetesAuthTemplateConfig
  */
  public constructor(scope: Construct, id: string, config: IdentityKubernetesAuthTemplateConfig) {
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
    this._allowedAudience = config.allowedAudience;
    this._gatewayId = config.gatewayId;
    this._gatewayPoolId = config.gatewayPoolId;
    this._kubernetesCaCertificate = config.kubernetesCaCertificate;
    this._kubernetesHost = config.kubernetesHost;
    this._name = config.name;
    this._tokenReviewerJwt = config.tokenReviewerJwt;
    this._tokenReviewerMode = config.tokenReviewerMode;
    this._verifyTlsCertificate = config.verifyTlsCertificate;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // allowed_audience - computed: true, optional: true, required: false
  private _allowedAudience?: string; 
  public get allowedAudience() {
    return this.getStringAttribute('allowed_audience');
  }
  public set allowedAudience(value: string) {
    this._allowedAudience = value;
  }
  public resetAllowedAudience() {
    this._allowedAudience = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allowedAudienceInput() {
    return this._allowedAudience;
  }

  // gateway_id - computed: false, optional: true, required: false
  private _gatewayId?: string; 
  public get gatewayId() {
    return this.getStringAttribute('gateway_id');
  }
  public set gatewayId(value: string) {
    this._gatewayId = value;
  }
  public resetGatewayId() {
    this._gatewayId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get gatewayIdInput() {
    return this._gatewayId;
  }

  // gateway_pool_id - computed: false, optional: true, required: false
  private _gatewayPoolId?: string; 
  public get gatewayPoolId() {
    return this.getStringAttribute('gateway_pool_id');
  }
  public set gatewayPoolId(value: string) {
    this._gatewayPoolId = value;
  }
  public resetGatewayPoolId() {
    this._gatewayPoolId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get gatewayPoolIdInput() {
    return this._gatewayPoolId;
  }

  // has_token_reviewer_jwt - computed: true, optional: false, required: false
  public get hasTokenReviewerJwt() {
    return this.getBooleanAttribute('has_token_reviewer_jwt');
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // kubernetes_ca_certificate - computed: false, optional: true, required: false
  private _kubernetesCaCertificate?: string; 
  public get kubernetesCaCertificate() {
    return this.getStringAttribute('kubernetes_ca_certificate');
  }
  public set kubernetesCaCertificate(value: string) {
    this._kubernetesCaCertificate = value;
  }
  public resetKubernetesCaCertificate() {
    this._kubernetesCaCertificate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get kubernetesCaCertificateInput() {
    return this._kubernetesCaCertificate;
  }

  // kubernetes_host - computed: false, optional: true, required: false
  private _kubernetesHost?: string; 
  public get kubernetesHost() {
    return this.getStringAttribute('kubernetes_host');
  }
  public set kubernetesHost(value: string) {
    this._kubernetesHost = value;
  }
  public resetKubernetesHost() {
    this._kubernetesHost = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get kubernetesHostInput() {
    return this._kubernetesHost;
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

  // token_reviewer_jwt - computed: false, optional: true, required: false
  private _tokenReviewerJwt?: string; 
  public get tokenReviewerJwt() {
    return this.getStringAttribute('token_reviewer_jwt');
  }
  public set tokenReviewerJwt(value: string) {
    this._tokenReviewerJwt = value;
  }
  public resetTokenReviewerJwt() {
    this._tokenReviewerJwt = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tokenReviewerJwtInput() {
    return this._tokenReviewerJwt;
  }

  // token_reviewer_mode - computed: true, optional: true, required: false
  private _tokenReviewerMode?: string; 
  public get tokenReviewerMode() {
    return this.getStringAttribute('token_reviewer_mode');
  }
  public set tokenReviewerMode(value: string) {
    this._tokenReviewerMode = value;
  }
  public resetTokenReviewerMode() {
    this._tokenReviewerMode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tokenReviewerModeInput() {
    return this._tokenReviewerMode;
  }

  // verify_tls_certificate - computed: true, optional: true, required: false
  private _verifyTlsCertificate?: boolean | cdktf.IResolvable; 
  public get verifyTlsCertificate() {
    return this.getBooleanAttribute('verify_tls_certificate');
  }
  public set verifyTlsCertificate(value: boolean | cdktf.IResolvable) {
    this._verifyTlsCertificate = value;
  }
  public resetVerifyTlsCertificate() {
    this._verifyTlsCertificate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get verifyTlsCertificateInput() {
    return this._verifyTlsCertificate;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      allowed_audience: cdktf.stringToTerraform(this._allowedAudience),
      gateway_id: cdktf.stringToTerraform(this._gatewayId),
      gateway_pool_id: cdktf.stringToTerraform(this._gatewayPoolId),
      kubernetes_ca_certificate: cdktf.stringToTerraform(this._kubernetesCaCertificate),
      kubernetes_host: cdktf.stringToTerraform(this._kubernetesHost),
      name: cdktf.stringToTerraform(this._name),
      token_reviewer_jwt: cdktf.stringToTerraform(this._tokenReviewerJwt),
      token_reviewer_mode: cdktf.stringToTerraform(this._tokenReviewerMode),
      verify_tls_certificate: cdktf.booleanToTerraform(this._verifyTlsCertificate),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      allowed_audience: {
        value: cdktf.stringToHclTerraform(this._allowedAudience),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      gateway_id: {
        value: cdktf.stringToHclTerraform(this._gatewayId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      gateway_pool_id: {
        value: cdktf.stringToHclTerraform(this._gatewayPoolId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      kubernetes_ca_certificate: {
        value: cdktf.stringToHclTerraform(this._kubernetesCaCertificate),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      kubernetes_host: {
        value: cdktf.stringToHclTerraform(this._kubernetesHost),
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
      token_reviewer_jwt: {
        value: cdktf.stringToHclTerraform(this._tokenReviewerJwt),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      token_reviewer_mode: {
        value: cdktf.stringToHclTerraform(this._tokenReviewerMode),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      verify_tls_certificate: {
        value: cdktf.booleanToHclTerraform(this._verifyTlsCertificate),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
