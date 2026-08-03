// https://registry.terraform.io/providers/infisical/infisical/0.19.6/docs/resources/cert_manager_external_ca_acme
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface CertManagerExternalCaAcmeConfig extends cdktf.TerraformMetaArguments {
  /**
  * The email address for ACME account registration
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infisical/infisical/0.19.6/docs/resources/cert_manager_external_ca_acme#account_email CertManagerExternalCaAcme#account_email}
  */
  readonly accountEmail: string;
  /**
  * The ACME directory URL
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infisical/infisical/0.19.6/docs/resources/cert_manager_external_ca_acme#directory_url CertManagerExternalCaAcme#directory_url}
  */
  readonly directoryUrl: string;
  /**
  * The ID of the DNS app connection for ACME challenge validation
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infisical/infisical/0.19.6/docs/resources/cert_manager_external_ca_acme#dns_app_connection_id CertManagerExternalCaAcme#dns_app_connection_id}
  */
  readonly dnsAppConnectionId: string;
  /**
  * The hosted zone ID for DNS-01 challenge validation
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infisical/infisical/0.19.6/docs/resources/cert_manager_external_ca_acme#dns_hosted_zone_id CertManagerExternalCaAcme#dns_hosted_zone_id}
  */
  readonly dnsHostedZoneId?: string;
  /**
  * The DNS provider for ACME challenge validation. Supported values: route53, cloudflare, dns-made-easy
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infisical/infisical/0.19.6/docs/resources/cert_manager_external_ca_acme#dns_provider CertManagerExternalCaAcme#dns_provider}
  */
  readonly dnsProvider: string;
  /**
  * External Account Binding (EAB) HMAC key (optional)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infisical/infisical/0.19.6/docs/resources/cert_manager_external_ca_acme#eab_hmac_key CertManagerExternalCaAcme#eab_hmac_key}
  */
  readonly eabHmacKey?: string;
  /**
  * External Account Binding (EAB) Key ID (optional)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infisical/infisical/0.19.6/docs/resources/cert_manager_external_ca_acme#eab_kid CertManagerExternalCaAcme#eab_kid}
  */
  readonly eabKid?: string;
  /**
  * The name of the ACME CA
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infisical/infisical/0.19.6/docs/resources/cert_manager_external_ca_acme#name CertManagerExternalCaAcme#name}
  */
  readonly name: string;
  /**
  * The status of the CA. Supported values: active, disabled. Defaults to 'active'.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infisical/infisical/0.19.6/docs/resources/cert_manager_external_ca_acme#status CertManagerExternalCaAcme#status}
  */
  readonly status?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/infisical/infisical/0.19.6/docs/resources/cert_manager_external_ca_acme infisical_cert_manager_external_ca_acme}
*/
export class CertManagerExternalCaAcme extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "infisical_cert_manager_external_ca_acme";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a CertManagerExternalCaAcme resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the CertManagerExternalCaAcme to import
  * @param importFromId The id of the existing CertManagerExternalCaAcme that should be imported. Refer to the {@link https://registry.terraform.io/providers/infisical/infisical/0.19.6/docs/resources/cert_manager_external_ca_acme#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the CertManagerExternalCaAcme to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "infisical_cert_manager_external_ca_acme", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/infisical/infisical/0.19.6/docs/resources/cert_manager_external_ca_acme infisical_cert_manager_external_ca_acme} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options CertManagerExternalCaAcmeConfig
  */
  public constructor(scope: Construct, id: string, config: CertManagerExternalCaAcmeConfig) {
    super(scope, id, {
      terraformResourceType: 'infisical_cert_manager_external_ca_acme',
      terraformGeneratorMetadata: {
        providerName: 'infisical',
        providerVersion: '0.19.6'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._accountEmail = config.accountEmail;
    this._directoryUrl = config.directoryUrl;
    this._dnsAppConnectionId = config.dnsAppConnectionId;
    this._dnsHostedZoneId = config.dnsHostedZoneId;
    this._dnsProvider = config.dnsProvider;
    this._eabHmacKey = config.eabHmacKey;
    this._eabKid = config.eabKid;
    this._name = config.name;
    this._status = config.status;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // account_email - computed: false, optional: false, required: true
  private _accountEmail?: string; 
  public get accountEmail() {
    return this.getStringAttribute('account_email');
  }
  public set accountEmail(value: string) {
    this._accountEmail = value;
  }
  // Temporarily expose input value. Use with caution.
  public get accountEmailInput() {
    return this._accountEmail;
  }

  // directory_url - computed: false, optional: false, required: true
  private _directoryUrl?: string; 
  public get directoryUrl() {
    return this.getStringAttribute('directory_url');
  }
  public set directoryUrl(value: string) {
    this._directoryUrl = value;
  }
  // Temporarily expose input value. Use with caution.
  public get directoryUrlInput() {
    return this._directoryUrl;
  }

  // dns_app_connection_id - computed: false, optional: false, required: true
  private _dnsAppConnectionId?: string; 
  public get dnsAppConnectionId() {
    return this.getStringAttribute('dns_app_connection_id');
  }
  public set dnsAppConnectionId(value: string) {
    this._dnsAppConnectionId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get dnsAppConnectionIdInput() {
    return this._dnsAppConnectionId;
  }

  // dns_hosted_zone_id - computed: false, optional: true, required: false
  private _dnsHostedZoneId?: string; 
  public get dnsHostedZoneId() {
    return this.getStringAttribute('dns_hosted_zone_id');
  }
  public set dnsHostedZoneId(value: string) {
    this._dnsHostedZoneId = value;
  }
  public resetDnsHostedZoneId() {
    this._dnsHostedZoneId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dnsHostedZoneIdInput() {
    return this._dnsHostedZoneId;
  }

  // dns_provider - computed: false, optional: false, required: true
  private _dnsProvider?: string; 
  public get dnsProvider() {
    return this.getStringAttribute('dns_provider');
  }
  public set dnsProvider(value: string) {
    this._dnsProvider = value;
  }
  // Temporarily expose input value. Use with caution.
  public get dnsProviderInput() {
    return this._dnsProvider;
  }

  // eab_hmac_key - computed: false, optional: true, required: false
  private _eabHmacKey?: string; 
  public get eabHmacKey() {
    return this.getStringAttribute('eab_hmac_key');
  }
  public set eabHmacKey(value: string) {
    this._eabHmacKey = value;
  }
  public resetEabHmacKey() {
    this._eabHmacKey = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get eabHmacKeyInput() {
    return this._eabHmacKey;
  }

  // eab_kid - computed: false, optional: true, required: false
  private _eabKid?: string; 
  public get eabKid() {
    return this.getStringAttribute('eab_kid');
  }
  public set eabKid(value: string) {
    this._eabKid = value;
  }
  public resetEabKid() {
    this._eabKid = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get eabKidInput() {
    return this._eabKid;
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

  // status - computed: true, optional: true, required: false
  private _status?: string; 
  public get status() {
    return this.getStringAttribute('status');
  }
  public set status(value: string) {
    this._status = value;
  }
  public resetStatus() {
    this._status = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get statusInput() {
    return this._status;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      account_email: cdktf.stringToTerraform(this._accountEmail),
      directory_url: cdktf.stringToTerraform(this._directoryUrl),
      dns_app_connection_id: cdktf.stringToTerraform(this._dnsAppConnectionId),
      dns_hosted_zone_id: cdktf.stringToTerraform(this._dnsHostedZoneId),
      dns_provider: cdktf.stringToTerraform(this._dnsProvider),
      eab_hmac_key: cdktf.stringToTerraform(this._eabHmacKey),
      eab_kid: cdktf.stringToTerraform(this._eabKid),
      name: cdktf.stringToTerraform(this._name),
      status: cdktf.stringToTerraform(this._status),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      account_email: {
        value: cdktf.stringToHclTerraform(this._accountEmail),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      directory_url: {
        value: cdktf.stringToHclTerraform(this._directoryUrl),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      dns_app_connection_id: {
        value: cdktf.stringToHclTerraform(this._dnsAppConnectionId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      dns_hosted_zone_id: {
        value: cdktf.stringToHclTerraform(this._dnsHostedZoneId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      dns_provider: {
        value: cdktf.stringToHclTerraform(this._dnsProvider),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      eab_hmac_key: {
        value: cdktf.stringToHclTerraform(this._eabHmacKey),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      eab_kid: {
        value: cdktf.stringToHclTerraform(this._eabKid),
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
      status: {
        value: cdktf.stringToHclTerraform(this._status),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
