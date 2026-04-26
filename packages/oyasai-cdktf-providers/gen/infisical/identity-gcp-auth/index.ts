// https://registry.terraform.io/providers/infisical/infisical/0.16.18/docs/resources/identity_gcp_auth
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface IdentityGcpAuthConfig extends cdktf.TerraformMetaArguments {
  /**
  * The maximum lifetime for an access token in seconds. This value will be referenced at renewal time. Default: 2592000
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infisical/infisical/0.16.18/docs/resources/identity_gcp_auth#access_token_max_ttl IdentityGcpAuth#access_token_max_ttl}
  */
  readonly accessTokenMaxTtl?: number;
  /**
  * The maximum number of times that an access token can be used; a value of 0 implies infinite number of uses. Default:0
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infisical/infisical/0.16.18/docs/resources/identity_gcp_auth#access_token_num_uses_limit IdentityGcpAuth#access_token_num_uses_limit}
  */
  readonly accessTokenNumUsesLimit?: number;
  /**
  * A list of IPs or CIDR ranges that access tokens can be used from. You can use 0.0.0.0/0, to allow usage from any network address..
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infisical/infisical/0.16.18/docs/resources/identity_gcp_auth#access_token_trusted_ips IdentityGcpAuth#access_token_trusted_ips}
  */
  readonly accessTokenTrustedIps?: IdentityGcpAuthAccessTokenTrustedIps[] | cdktf.IResolvable;
  /**
  * The lifetime for an access token in seconds. This value will be referenced at renewal time. Default: 2592000
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infisical/infisical/0.16.18/docs/resources/identity_gcp_auth#access_token_ttl IdentityGcpAuth#access_token_ttl}
  */
  readonly accessTokenTtl?: number;
  /**
  * List of trusted GCP projects that the GCE instance must belong to authenticate with Infisical. Note that this validation property will only work for GCE instances
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infisical/infisical/0.16.18/docs/resources/identity_gcp_auth#allowed_projects IdentityGcpAuth#allowed_projects}
  */
  readonly allowedProjects?: string[];
  /**
  * List of trusted service account emails corresponding to the GCE resource(s) allowed to authenticate with Infisical; this could be something like `test@project.iam.gserviceaccount.com`, `12345-compute@developer.gserviceaccount.com`, etc.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infisical/infisical/0.16.18/docs/resources/identity_gcp_auth#allowed_service_account_emails IdentityGcpAuth#allowed_service_account_emails}
  */
  readonly allowedServiceAccountEmails?: string[];
  /**
  * List of trusted zones that the GCE instances must belong to authenticate with Infisical; this should be the fully-qualified zone name in the format `<region>-<zone>`like `us-central1-a`, `us-west1-b`, etc. Note that this validation property will only work for GCE instances.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infisical/infisical/0.16.18/docs/resources/identity_gcp_auth#allowed_zones IdentityGcpAuth#allowed_zones}
  */
  readonly allowedZones?: string[];
  /**
  * The ID of the identity to attach the configuration onto.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infisical/infisical/0.16.18/docs/resources/identity_gcp_auth#identity_id IdentityGcpAuth#identity_id}
  */
  readonly identityId: string;
  /**
  * The Type of GCP Auth Method to use: Options are gce, iam. Default:gce
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infisical/infisical/0.16.18/docs/resources/identity_gcp_auth#type IdentityGcpAuth#type}
  */
  readonly type?: string;
}
export interface IdentityGcpAuthAccessTokenTrustedIps {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infisical/infisical/0.16.18/docs/resources/identity_gcp_auth#ip_address IdentityGcpAuth#ip_address}
  */
  readonly ipAddress?: string;
}

export function identityGcpAuthAccessTokenTrustedIpsToTerraform(struct?: IdentityGcpAuthAccessTokenTrustedIps | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    ip_address: cdktf.stringToTerraform(struct!.ipAddress),
  }
}


export function identityGcpAuthAccessTokenTrustedIpsToHclTerraform(struct?: IdentityGcpAuthAccessTokenTrustedIps | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    ip_address: {
      value: cdktf.stringToHclTerraform(struct!.ipAddress),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class IdentityGcpAuthAccessTokenTrustedIpsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): IdentityGcpAuthAccessTokenTrustedIps | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._ipAddress !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipAddress = this._ipAddress;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: IdentityGcpAuthAccessTokenTrustedIps | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._ipAddress = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._ipAddress = value.ipAddress;
    }
  }

  // ip_address - computed: true, optional: true, required: false
  private _ipAddress?: string; 
  public get ipAddress() {
    return this.getStringAttribute('ip_address');
  }
  public set ipAddress(value: string) {
    this._ipAddress = value;
  }
  public resetIpAddress() {
    this._ipAddress = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipAddressInput() {
    return this._ipAddress;
  }
}

export class IdentityGcpAuthAccessTokenTrustedIpsList extends cdktf.ComplexList {
  public internalValue? : IdentityGcpAuthAccessTokenTrustedIps[] | cdktf.IResolvable

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
  public get(index: number): IdentityGcpAuthAccessTokenTrustedIpsOutputReference {
    return new IdentityGcpAuthAccessTokenTrustedIpsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/infisical/infisical/0.16.18/docs/resources/identity_gcp_auth infisical_identity_gcp_auth}
*/
export class IdentityGcpAuth extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "infisical_identity_gcp_auth";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a IdentityGcpAuth resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the IdentityGcpAuth to import
  * @param importFromId The id of the existing IdentityGcpAuth that should be imported. Refer to the {@link https://registry.terraform.io/providers/infisical/infisical/0.16.18/docs/resources/identity_gcp_auth#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the IdentityGcpAuth to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "infisical_identity_gcp_auth", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/infisical/infisical/0.16.18/docs/resources/identity_gcp_auth infisical_identity_gcp_auth} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options IdentityGcpAuthConfig
  */
  public constructor(scope: Construct, id: string, config: IdentityGcpAuthConfig) {
    super(scope, id, {
      terraformResourceType: 'infisical_identity_gcp_auth',
      terraformGeneratorMetadata: {
        providerName: 'infisical',
        providerVersion: '0.16.18'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._accessTokenMaxTtl = config.accessTokenMaxTtl;
    this._accessTokenNumUsesLimit = config.accessTokenNumUsesLimit;
    this._accessTokenTrustedIps.internalValue = config.accessTokenTrustedIps;
    this._accessTokenTtl = config.accessTokenTtl;
    this._allowedProjects = config.allowedProjects;
    this._allowedServiceAccountEmails = config.allowedServiceAccountEmails;
    this._allowedZones = config.allowedZones;
    this._identityId = config.identityId;
    this._type = config.type;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // access_token_max_ttl - computed: true, optional: true, required: false
  private _accessTokenMaxTtl?: number; 
  public get accessTokenMaxTtl() {
    return this.getNumberAttribute('access_token_max_ttl');
  }
  public set accessTokenMaxTtl(value: number) {
    this._accessTokenMaxTtl = value;
  }
  public resetAccessTokenMaxTtl() {
    this._accessTokenMaxTtl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get accessTokenMaxTtlInput() {
    return this._accessTokenMaxTtl;
  }

  // access_token_num_uses_limit - computed: true, optional: true, required: false
  private _accessTokenNumUsesLimit?: number; 
  public get accessTokenNumUsesLimit() {
    return this.getNumberAttribute('access_token_num_uses_limit');
  }
  public set accessTokenNumUsesLimit(value: number) {
    this._accessTokenNumUsesLimit = value;
  }
  public resetAccessTokenNumUsesLimit() {
    this._accessTokenNumUsesLimit = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get accessTokenNumUsesLimitInput() {
    return this._accessTokenNumUsesLimit;
  }

  // access_token_trusted_ips - computed: true, optional: true, required: false
  private _accessTokenTrustedIps = new IdentityGcpAuthAccessTokenTrustedIpsList(this, "access_token_trusted_ips", false);
  public get accessTokenTrustedIps() {
    return this._accessTokenTrustedIps;
  }
  public putAccessTokenTrustedIps(value: IdentityGcpAuthAccessTokenTrustedIps[] | cdktf.IResolvable) {
    this._accessTokenTrustedIps.internalValue = value;
  }
  public resetAccessTokenTrustedIps() {
    this._accessTokenTrustedIps.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get accessTokenTrustedIpsInput() {
    return this._accessTokenTrustedIps.internalValue;
  }

  // access_token_ttl - computed: true, optional: true, required: false
  private _accessTokenTtl?: number; 
  public get accessTokenTtl() {
    return this.getNumberAttribute('access_token_ttl');
  }
  public set accessTokenTtl(value: number) {
    this._accessTokenTtl = value;
  }
  public resetAccessTokenTtl() {
    this._accessTokenTtl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get accessTokenTtlInput() {
    return this._accessTokenTtl;
  }

  // allowed_projects - computed: true, optional: true, required: false
  private _allowedProjects?: string[]; 
  public get allowedProjects() {
    return this.getListAttribute('allowed_projects');
  }
  public set allowedProjects(value: string[]) {
    this._allowedProjects = value;
  }
  public resetAllowedProjects() {
    this._allowedProjects = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allowedProjectsInput() {
    return this._allowedProjects;
  }

  // allowed_service_account_emails - computed: true, optional: true, required: false
  private _allowedServiceAccountEmails?: string[]; 
  public get allowedServiceAccountEmails() {
    return this.getListAttribute('allowed_service_account_emails');
  }
  public set allowedServiceAccountEmails(value: string[]) {
    this._allowedServiceAccountEmails = value;
  }
  public resetAllowedServiceAccountEmails() {
    this._allowedServiceAccountEmails = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allowedServiceAccountEmailsInput() {
    return this._allowedServiceAccountEmails;
  }

  // allowed_zones - computed: true, optional: true, required: false
  private _allowedZones?: string[]; 
  public get allowedZones() {
    return this.getListAttribute('allowed_zones');
  }
  public set allowedZones(value: string[]) {
    this._allowedZones = value;
  }
  public resetAllowedZones() {
    this._allowedZones = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allowedZonesInput() {
    return this._allowedZones;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // identity_id - computed: false, optional: false, required: true
  private _identityId?: string; 
  public get identityId() {
    return this.getStringAttribute('identity_id');
  }
  public set identityId(value: string) {
    this._identityId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get identityIdInput() {
    return this._identityId;
  }

  // type - computed: true, optional: true, required: false
  private _type?: string; 
  public get type() {
    return this.getStringAttribute('type');
  }
  public set type(value: string) {
    this._type = value;
  }
  public resetType() {
    this._type = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get typeInput() {
    return this._type;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      access_token_max_ttl: cdktf.numberToTerraform(this._accessTokenMaxTtl),
      access_token_num_uses_limit: cdktf.numberToTerraform(this._accessTokenNumUsesLimit),
      access_token_trusted_ips: cdktf.listMapper(identityGcpAuthAccessTokenTrustedIpsToTerraform, false)(this._accessTokenTrustedIps.internalValue),
      access_token_ttl: cdktf.numberToTerraform(this._accessTokenTtl),
      allowed_projects: cdktf.listMapper(cdktf.stringToTerraform, false)(this._allowedProjects),
      allowed_service_account_emails: cdktf.listMapper(cdktf.stringToTerraform, false)(this._allowedServiceAccountEmails),
      allowed_zones: cdktf.listMapper(cdktf.stringToTerraform, false)(this._allowedZones),
      identity_id: cdktf.stringToTerraform(this._identityId),
      type: cdktf.stringToTerraform(this._type),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      access_token_max_ttl: {
        value: cdktf.numberToHclTerraform(this._accessTokenMaxTtl),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      access_token_num_uses_limit: {
        value: cdktf.numberToHclTerraform(this._accessTokenNumUsesLimit),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      access_token_trusted_ips: {
        value: cdktf.listMapperHcl(identityGcpAuthAccessTokenTrustedIpsToHclTerraform, false)(this._accessTokenTrustedIps.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "IdentityGcpAuthAccessTokenTrustedIpsList",
      },
      access_token_ttl: {
        value: cdktf.numberToHclTerraform(this._accessTokenTtl),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      allowed_projects: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._allowedProjects),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      allowed_service_account_emails: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._allowedServiceAccountEmails),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      allowed_zones: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._allowedZones),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      identity_id: {
        value: cdktf.stringToHclTerraform(this._identityId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      type: {
        value: cdktf.stringToHclTerraform(this._type),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
