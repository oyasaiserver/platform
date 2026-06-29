// https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.1/docs/resources/custom_csr
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface CustomCsrConfig extends cdktf.TerraformMetaArguments {
  /**
  * The Account ID to use for this endpoint. Mutually exclusive with the Zone ID.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.1/docs/resources/custom_csr#account_id CustomCsr#account_id}
  */
  readonly accountId?: string;
  /**
  * The common name (domain) for the CSR. Must be at most 64 characters.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.1/docs/resources/custom_csr#common_name CustomCsr#common_name}
  */
  readonly commonName: string;
  /**
  * Two-letter ISO 3166-1 alpha-2 country code.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.1/docs/resources/custom_csr#country CustomCsr#country}
  */
  readonly country: string;
  /**
  * Optional description for the CSR.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.1/docs/resources/custom_csr#description CustomCsr#description}
  */
  readonly description?: string;
  /**
  * Key algorithm to use for the CSR. Defaults to rsa2048 if not specified.
  * Available values: "rsa2048", "p256v1".
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.1/docs/resources/custom_csr#key_type CustomCsr#key_type}
  */
  readonly keyType?: string;
  /**
  * City or locality name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.1/docs/resources/custom_csr#locality CustomCsr#locality}
  */
  readonly locality: string;
  /**
  * Human-readable name for the CSR.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.1/docs/resources/custom_csr#name CustomCsr#name}
  */
  readonly name?: string;
  /**
  * Organization name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.1/docs/resources/custom_csr#organization CustomCsr#organization}
  */
  readonly organization: string;
  /**
  * Organizational unit name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.1/docs/resources/custom_csr#organizational_unit CustomCsr#organizational_unit}
  */
  readonly organizationalUnit?: string;
  /**
  * Subject Alternative Names for the CSR. At least one SAN is required.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.1/docs/resources/custom_csr#sans CustomCsr#sans}
  */
  readonly sans: string[];
  /**
  * State or province name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.1/docs/resources/custom_csr#state CustomCsr#state}
  */
  readonly state: string;
  /**
  * The Zone ID to use for this endpoint. Mutually exclusive with the Account ID.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.1/docs/resources/custom_csr#zone_id CustomCsr#zone_id}
  */
  readonly zoneId?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.1/docs/resources/custom_csr cloudflare_custom_csr}
*/
export class CustomCsr extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "cloudflare_custom_csr";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a CustomCsr resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the CustomCsr to import
  * @param importFromId The id of the existing CustomCsr that should be imported. Refer to the {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.1/docs/resources/custom_csr#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the CustomCsr to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "cloudflare_custom_csr", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.1/docs/resources/custom_csr cloudflare_custom_csr} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options CustomCsrConfig
  */
  public constructor(scope: Construct, id: string, config: CustomCsrConfig) {
    super(scope, id, {
      terraformResourceType: 'cloudflare_custom_csr',
      terraformGeneratorMetadata: {
        providerName: 'cloudflare',
        providerVersion: '5.21.1'
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
    this._commonName = config.commonName;
    this._country = config.country;
    this._description = config.description;
    this._keyType = config.keyType;
    this._locality = config.locality;
    this._name = config.name;
    this._organization = config.organization;
    this._organizationalUnit = config.organizationalUnit;
    this._sans = config.sans;
    this._state = config.state;
    this._zoneId = config.zoneId;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // account_id - computed: false, optional: true, required: false
  private _accountId?: string; 
  public get accountId() {
    return this.getStringAttribute('account_id');
  }
  public set accountId(value: string) {
    this._accountId = value;
  }
  public resetAccountId() {
    this._accountId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get accountIdInput() {
    return this._accountId;
  }

  // account_tag - computed: true, optional: false, required: false
  public get accountTag() {
    return this.getStringAttribute('account_tag');
  }

  // common_name - computed: false, optional: false, required: true
  private _commonName?: string; 
  public get commonName() {
    return this.getStringAttribute('common_name');
  }
  public set commonName(value: string) {
    this._commonName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get commonNameInput() {
    return this._commonName;
  }

  // country - computed: false, optional: false, required: true
  private _country?: string; 
  public get country() {
    return this.getStringAttribute('country');
  }
  public set country(value: string) {
    this._country = value;
  }
  // Temporarily expose input value. Use with caution.
  public get countryInput() {
    return this._country;
  }

  // created_at - computed: true, optional: false, required: false
  public get createdAt() {
    return this.getStringAttribute('created_at');
  }

  // csr - computed: true, optional: false, required: false
  public get csr() {
    return this.getStringAttribute('csr');
  }

  // description - computed: false, optional: true, required: false
  private _description?: string; 
  public get description() {
    return this.getStringAttribute('description');
  }
  public set description(value: string) {
    this._description = value;
  }
  public resetDescription() {
    this._description = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get descriptionInput() {
    return this._description;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // key_type - computed: true, optional: true, required: false
  private _keyType?: string; 
  public get keyType() {
    return this.getStringAttribute('key_type');
  }
  public set keyType(value: string) {
    this._keyType = value;
  }
  public resetKeyType() {
    this._keyType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get keyTypeInput() {
    return this._keyType;
  }

  // locality - computed: false, optional: false, required: true
  private _locality?: string; 
  public get locality() {
    return this.getStringAttribute('locality');
  }
  public set locality(value: string) {
    this._locality = value;
  }
  // Temporarily expose input value. Use with caution.
  public get localityInput() {
    return this._locality;
  }

  // name - computed: false, optional: true, required: false
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

  // organization - computed: false, optional: false, required: true
  private _organization?: string; 
  public get organization() {
    return this.getStringAttribute('organization');
  }
  public set organization(value: string) {
    this._organization = value;
  }
  // Temporarily expose input value. Use with caution.
  public get organizationInput() {
    return this._organization;
  }

  // organizational_unit - computed: false, optional: true, required: false
  private _organizationalUnit?: string; 
  public get organizationalUnit() {
    return this.getStringAttribute('organizational_unit');
  }
  public set organizationalUnit(value: string) {
    this._organizationalUnit = value;
  }
  public resetOrganizationalUnit() {
    this._organizationalUnit = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get organizationalUnitInput() {
    return this._organizationalUnit;
  }

  // sans - computed: false, optional: false, required: true
  private _sans?: string[]; 
  public get sans() {
    return this.getListAttribute('sans');
  }
  public set sans(value: string[]) {
    this._sans = value;
  }
  // Temporarily expose input value. Use with caution.
  public get sansInput() {
    return this._sans;
  }

  // state - computed: false, optional: false, required: true
  private _state?: string; 
  public get state() {
    return this.getStringAttribute('state');
  }
  public set state(value: string) {
    this._state = value;
  }
  // Temporarily expose input value. Use with caution.
  public get stateInput() {
    return this._state;
  }

  // zone_id - computed: false, optional: true, required: false
  private _zoneId?: string; 
  public get zoneId() {
    return this.getStringAttribute('zone_id');
  }
  public set zoneId(value: string) {
    this._zoneId = value;
  }
  public resetZoneId() {
    this._zoneId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get zoneIdInput() {
    return this._zoneId;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      account_id: cdktf.stringToTerraform(this._accountId),
      common_name: cdktf.stringToTerraform(this._commonName),
      country: cdktf.stringToTerraform(this._country),
      description: cdktf.stringToTerraform(this._description),
      key_type: cdktf.stringToTerraform(this._keyType),
      locality: cdktf.stringToTerraform(this._locality),
      name: cdktf.stringToTerraform(this._name),
      organization: cdktf.stringToTerraform(this._organization),
      organizational_unit: cdktf.stringToTerraform(this._organizationalUnit),
      sans: cdktf.listMapper(cdktf.stringToTerraform, false)(this._sans),
      state: cdktf.stringToTerraform(this._state),
      zone_id: cdktf.stringToTerraform(this._zoneId),
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
      common_name: {
        value: cdktf.stringToHclTerraform(this._commonName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      country: {
        value: cdktf.stringToHclTerraform(this._country),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      description: {
        value: cdktf.stringToHclTerraform(this._description),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      key_type: {
        value: cdktf.stringToHclTerraform(this._keyType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      locality: {
        value: cdktf.stringToHclTerraform(this._locality),
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
      organization: {
        value: cdktf.stringToHclTerraform(this._organization),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      organizational_unit: {
        value: cdktf.stringToHclTerraform(this._organizationalUnit),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      sans: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._sans),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      state: {
        value: cdktf.stringToHclTerraform(this._state),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      zone_id: {
        value: cdktf.stringToHclTerraform(this._zoneId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
