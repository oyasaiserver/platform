// https://registry.terraform.io/providers/cloudflare/cloudflare/5.29.0/docs/resources/zero_trust_organization_trust_settings
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface ZeroTrustOrganizationTrustSettingsConfig extends cdktf.TerraformMetaArguments {
  /**
  * Identifier.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.29.0/docs/resources/zero_trust_organization_trust_settings#account_id ZeroTrustOrganizationTrustSettings#account_id}
  */
  readonly accountId: string;
  /**
  * Whether all accounts in the organization are trusted to use this account's cross-account Access resources.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.29.0/docs/resources/zero_trust_organization_trust_settings#grant_trust_to_all_accounts_in_org ZeroTrustOrganizationTrustSettings#grant_trust_to_all_accounts_in_org}
  */
  readonly grantTrustToAllAccountsInOrg: boolean | cdktf.IResolvable;
  /**
  * Explicit account IDs trusted to use this account's cross-account Access resources. At most 100 unique valid account IDs are accepted. Omitted from responses when empty.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.29.0/docs/resources/zero_trust_organization_trust_settings#trusting_accounts ZeroTrustOrganizationTrustSettings#trusting_accounts}
  */
  readonly trustingAccounts?: string[];
}

/**
* Represents a {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.29.0/docs/resources/zero_trust_organization_trust_settings cloudflare_zero_trust_organization_trust_settings}
*/
export class ZeroTrustOrganizationTrustSettings extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "cloudflare_zero_trust_organization_trust_settings";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a ZeroTrustOrganizationTrustSettings resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the ZeroTrustOrganizationTrustSettings to import
  * @param importFromId The id of the existing ZeroTrustOrganizationTrustSettings that should be imported. Refer to the {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.29.0/docs/resources/zero_trust_organization_trust_settings#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the ZeroTrustOrganizationTrustSettings to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "cloudflare_zero_trust_organization_trust_settings", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.29.0/docs/resources/zero_trust_organization_trust_settings cloudflare_zero_trust_organization_trust_settings} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options ZeroTrustOrganizationTrustSettingsConfig
  */
  public constructor(scope: Construct, id: string, config: ZeroTrustOrganizationTrustSettingsConfig) {
    super(scope, id, {
      terraformResourceType: 'cloudflare_zero_trust_organization_trust_settings',
      terraformGeneratorMetadata: {
        providerName: 'cloudflare',
        providerVersion: '5.29.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._accountId = config.accountId;
    this._grantTrustToAllAccountsInOrg = config.grantTrustToAllAccountsInOrg;
    this._trustingAccounts = config.trustingAccounts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // account_id - computed: false, optional: false, required: true
  private _accountId?: string; 
  public get accountId() {
    return this.getStringAttribute('account_id');
  }
  public set accountId(value: string) {
    this._accountId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get accountIdInput() {
    return this._accountId;
  }

  // grant_trust_to_all_accounts_in_org - computed: false, optional: false, required: true
  private _grantTrustToAllAccountsInOrg?: boolean | cdktf.IResolvable; 
  public get grantTrustToAllAccountsInOrg() {
    return this.getBooleanAttribute('grant_trust_to_all_accounts_in_org');
  }
  public set grantTrustToAllAccountsInOrg(value: boolean | cdktf.IResolvable) {
    this._grantTrustToAllAccountsInOrg = value;
  }
  // Temporarily expose input value. Use with caution.
  public get grantTrustToAllAccountsInOrgInput() {
    return this._grantTrustToAllAccountsInOrg;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // trusting_accounts - computed: false, optional: true, required: false
  private _trustingAccounts?: string[]; 
  public get trustingAccounts() {
    return this.getListAttribute('trusting_accounts');
  }
  public set trustingAccounts(value: string[]) {
    this._trustingAccounts = value;
  }
  public resetTrustingAccounts() {
    this._trustingAccounts = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get trustingAccountsInput() {
    return this._trustingAccounts;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      account_id: cdktf.stringToTerraform(this._accountId),
      grant_trust_to_all_accounts_in_org: cdktf.booleanToTerraform(this._grantTrustToAllAccountsInOrg),
      trusting_accounts: cdktf.listMapper(cdktf.stringToTerraform, false)(this._trustingAccounts),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      account_id: {
        value: cdktf.stringToHclTerraform(this._accountId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      grant_trust_to_all_accounts_in_org: {
        value: cdktf.booleanToHclTerraform(this._grantTrustToAllAccountsInOrg),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      trusting_accounts: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._trustingAccounts),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
