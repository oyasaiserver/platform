// https://registry.terraform.io/providers/infisical/infisical/0.20.14/docs/resources/identity_oidc_auth_template
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface IdentityOidcAuthTemplateConfig extends cdktf.TerraformMetaArguments {
  /**
  * The intended recipients that OIDC tokens must carry in their aud claim. Leave empty to accept any audience.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infisical/infisical/0.20.14/docs/resources/identity_oidc_auth_template#bound_audiences IdentityOidcAuthTemplate#bound_audiences}
  */
  readonly boundAudiences?: string[];
  /**
  * The unique identifier of the identity provider issuing the OIDC tokens.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infisical/infisical/0.20.14/docs/resources/identity_oidc_auth_template#bound_issuer IdentityOidcAuthTemplate#bound_issuer}
  */
  readonly boundIssuer: string;
  /**
  * The name of the auth template, at most 64 characters.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infisical/infisical/0.20.14/docs/resources/identity_oidc_auth_template#name IdentityOidcAuthTemplate#name}
  */
  readonly name: string;
  /**
  * The PEM-encoded CA certificate for establishing secure communication with the identity provider endpoints.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infisical/infisical/0.20.14/docs/resources/identity_oidc_auth_template#oidc_ca_certificate IdentityOidcAuthTemplate#oidc_ca_certificate}
  */
  readonly oidcCaCertificate?: string;
  /**
  * The URL used to retrieve the OpenID Connect configuration from the identity provider, without the `/.well-known/openid-configuration` suffix, which Infisical appends itself.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infisical/infisical/0.20.14/docs/resources/identity_oidc_auth_template#oidc_discovery_url IdentityOidcAuthTemplate#oidc_discovery_url}
  */
  readonly oidcDiscoveryUrl: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/infisical/infisical/0.20.14/docs/resources/identity_oidc_auth_template infisical_identity_oidc_auth_template}
*/
export class IdentityOidcAuthTemplate extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "infisical_identity_oidc_auth_template";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a IdentityOidcAuthTemplate resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the IdentityOidcAuthTemplate to import
  * @param importFromId The id of the existing IdentityOidcAuthTemplate that should be imported. Refer to the {@link https://registry.terraform.io/providers/infisical/infisical/0.20.14/docs/resources/identity_oidc_auth_template#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the IdentityOidcAuthTemplate to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "infisical_identity_oidc_auth_template", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/infisical/infisical/0.20.14/docs/resources/identity_oidc_auth_template infisical_identity_oidc_auth_template} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options IdentityOidcAuthTemplateConfig
  */
  public constructor(scope: Construct, id: string, config: IdentityOidcAuthTemplateConfig) {
    super(scope, id, {
      terraformResourceType: 'infisical_identity_oidc_auth_template',
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
    this._boundAudiences = config.boundAudiences;
    this._boundIssuer = config.boundIssuer;
    this._name = config.name;
    this._oidcCaCertificate = config.oidcCaCertificate;
    this._oidcDiscoveryUrl = config.oidcDiscoveryUrl;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // bound_audiences - computed: true, optional: true, required: false
  private _boundAudiences?: string[]; 
  public get boundAudiences() {
    return this.getListAttribute('bound_audiences');
  }
  public set boundAudiences(value: string[]) {
    this._boundAudiences = value;
  }
  public resetBoundAudiences() {
    this._boundAudiences = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get boundAudiencesInput() {
    return this._boundAudiences;
  }

  // bound_issuer - computed: false, optional: false, required: true
  private _boundIssuer?: string; 
  public get boundIssuer() {
    return this.getStringAttribute('bound_issuer');
  }
  public set boundIssuer(value: string) {
    this._boundIssuer = value;
  }
  // Temporarily expose input value. Use with caution.
  public get boundIssuerInput() {
    return this._boundIssuer;
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

  // oidc_ca_certificate - computed: false, optional: true, required: false
  private _oidcCaCertificate?: string; 
  public get oidcCaCertificate() {
    return this.getStringAttribute('oidc_ca_certificate');
  }
  public set oidcCaCertificate(value: string) {
    this._oidcCaCertificate = value;
  }
  public resetOidcCaCertificate() {
    this._oidcCaCertificate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get oidcCaCertificateInput() {
    return this._oidcCaCertificate;
  }

  // oidc_discovery_url - computed: false, optional: false, required: true
  private _oidcDiscoveryUrl?: string; 
  public get oidcDiscoveryUrl() {
    return this.getStringAttribute('oidc_discovery_url');
  }
  public set oidcDiscoveryUrl(value: string) {
    this._oidcDiscoveryUrl = value;
  }
  // Temporarily expose input value. Use with caution.
  public get oidcDiscoveryUrlInput() {
    return this._oidcDiscoveryUrl;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      bound_audiences: cdktf.listMapper(cdktf.stringToTerraform, false)(this._boundAudiences),
      bound_issuer: cdktf.stringToTerraform(this._boundIssuer),
      name: cdktf.stringToTerraform(this._name),
      oidc_ca_certificate: cdktf.stringToTerraform(this._oidcCaCertificate),
      oidc_discovery_url: cdktf.stringToTerraform(this._oidcDiscoveryUrl),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      bound_audiences: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._boundAudiences),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      bound_issuer: {
        value: cdktf.stringToHclTerraform(this._boundIssuer),
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
      oidc_ca_certificate: {
        value: cdktf.stringToHclTerraform(this._oidcCaCertificate),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      oidc_discovery_url: {
        value: cdktf.stringToHclTerraform(this._oidcDiscoveryUrl),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
