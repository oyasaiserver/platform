// https://registry.terraform.io/providers/infisical/infisical/0.19.6/docs/resources/identity_aws_auth
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface IdentityAwsAuthConfig extends cdktf.TerraformMetaArguments {
  /**
  * The maximum lifetime for an access token in seconds. This value will be referenced at renewal time. Default: 2592000
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infisical/infisical/0.19.6/docs/resources/identity_aws_auth#access_token_max_ttl IdentityAwsAuth#access_token_max_ttl}
  */
  readonly accessTokenMaxTtl?: number;
  /**
  * The maximum number of times that an access token can be used; a value of 0 implies infinite number of uses. Default:0
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infisical/infisical/0.19.6/docs/resources/identity_aws_auth#access_token_num_uses_limit IdentityAwsAuth#access_token_num_uses_limit}
  */
  readonly accessTokenNumUsesLimit?: number;
  /**
  * A list of IPs or CIDR ranges that access tokens can be used from. You can use 0.0.0.0/0, to allow usage from any network address..
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infisical/infisical/0.19.6/docs/resources/identity_aws_auth#access_token_trusted_ips IdentityAwsAuth#access_token_trusted_ips}
  */
  readonly accessTokenTrustedIps?: IdentityAwsAuthAccessTokenTrustedIps[] | cdktf.IResolvable;
  /**
  * The lifetime for an access token in seconds. This value will be referenced at renewal time. Default: 2592000
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infisical/infisical/0.19.6/docs/resources/identity_aws_auth#access_token_ttl IdentityAwsAuth#access_token_ttl}
  */
  readonly accessTokenTtl?: number;
  /**
  * List of trusted AWS account IDs that are allowed to authenticate with Infisical.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infisical/infisical/0.19.6/docs/resources/identity_aws_auth#allowed_account_ids IdentityAwsAuth#allowed_account_ids}
  */
  readonly allowedAccountIds?: string[];
  /**
  * List of trusted IAM principal ARNs that are allowed to authenticate with Infisical. The values should take one of three forms: `arn:aws:iam::123456789012:user/MyUserName`, `arn:aws:iam::123456789012:role/MyRoleName`, or `arn:aws:iam::123456789012:*`. Using a wildcard in this case allows any IAM principal in the account `123456789012` to authenticate with Infisical under the identity
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infisical/infisical/0.19.6/docs/resources/identity_aws_auth#allowed_principal_arns IdentityAwsAuth#allowed_principal_arns}
  */
  readonly allowedPrincipalArns?: string[];
  /**
  * The ID of the identity to attach the configuration onto.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infisical/infisical/0.19.6/docs/resources/identity_aws_auth#identity_id IdentityAwsAuth#identity_id}
  */
  readonly identityId: string;
  /**
  *  The endpoint URL for the AWS STS API. This value should be adjusted based on the AWS region you are operating in (e.g. `https://sts.us-east-1.amazonaws.com/`); refer to the list of regional STS endpoints [here](https://docs.aws.amazon.com/general/latest/gr/sts.html).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infisical/infisical/0.19.6/docs/resources/identity_aws_auth#sts_endpoint IdentityAwsAuth#sts_endpoint}
  */
  readonly stsEndpoint?: string;
}
export interface IdentityAwsAuthAccessTokenTrustedIps {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infisical/infisical/0.19.6/docs/resources/identity_aws_auth#ip_address IdentityAwsAuth#ip_address}
  */
  readonly ipAddress?: string;
}

export function identityAwsAuthAccessTokenTrustedIpsToTerraform(struct?: IdentityAwsAuthAccessTokenTrustedIps | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    ip_address: cdktf.stringToTerraform(struct!.ipAddress),
  }
}


export function identityAwsAuthAccessTokenTrustedIpsToHclTerraform(struct?: IdentityAwsAuthAccessTokenTrustedIps | cdktf.IResolvable): any {
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

export class IdentityAwsAuthAccessTokenTrustedIpsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): IdentityAwsAuthAccessTokenTrustedIps | cdktf.IResolvable | undefined {
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

  public set internalValue(value: IdentityAwsAuthAccessTokenTrustedIps | cdktf.IResolvable | undefined) {
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

export class IdentityAwsAuthAccessTokenTrustedIpsList extends cdktf.ComplexList {
  public internalValue? : IdentityAwsAuthAccessTokenTrustedIps[] | cdktf.IResolvable

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
  public get(index: number): IdentityAwsAuthAccessTokenTrustedIpsOutputReference {
    return new IdentityAwsAuthAccessTokenTrustedIpsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/infisical/infisical/0.19.6/docs/resources/identity_aws_auth infisical_identity_aws_auth}
*/
export class IdentityAwsAuth extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "infisical_identity_aws_auth";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a IdentityAwsAuth resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the IdentityAwsAuth to import
  * @param importFromId The id of the existing IdentityAwsAuth that should be imported. Refer to the {@link https://registry.terraform.io/providers/infisical/infisical/0.19.6/docs/resources/identity_aws_auth#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the IdentityAwsAuth to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "infisical_identity_aws_auth", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/infisical/infisical/0.19.6/docs/resources/identity_aws_auth infisical_identity_aws_auth} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options IdentityAwsAuthConfig
  */
  public constructor(scope: Construct, id: string, config: IdentityAwsAuthConfig) {
    super(scope, id, {
      terraformResourceType: 'infisical_identity_aws_auth',
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
    this._accessTokenMaxTtl = config.accessTokenMaxTtl;
    this._accessTokenNumUsesLimit = config.accessTokenNumUsesLimit;
    this._accessTokenTrustedIps.internalValue = config.accessTokenTrustedIps;
    this._accessTokenTtl = config.accessTokenTtl;
    this._allowedAccountIds = config.allowedAccountIds;
    this._allowedPrincipalArns = config.allowedPrincipalArns;
    this._identityId = config.identityId;
    this._stsEndpoint = config.stsEndpoint;
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
  private _accessTokenTrustedIps = new IdentityAwsAuthAccessTokenTrustedIpsList(this, "access_token_trusted_ips", false);
  public get accessTokenTrustedIps() {
    return this._accessTokenTrustedIps;
  }
  public putAccessTokenTrustedIps(value: IdentityAwsAuthAccessTokenTrustedIps[] | cdktf.IResolvable) {
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

  // allowed_account_ids - computed: true, optional: true, required: false
  private _allowedAccountIds?: string[]; 
  public get allowedAccountIds() {
    return this.getListAttribute('allowed_account_ids');
  }
  public set allowedAccountIds(value: string[]) {
    this._allowedAccountIds = value;
  }
  public resetAllowedAccountIds() {
    this._allowedAccountIds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allowedAccountIdsInput() {
    return this._allowedAccountIds;
  }

  // allowed_principal_arns - computed: true, optional: true, required: false
  private _allowedPrincipalArns?: string[]; 
  public get allowedPrincipalArns() {
    return this.getListAttribute('allowed_principal_arns');
  }
  public set allowedPrincipalArns(value: string[]) {
    this._allowedPrincipalArns = value;
  }
  public resetAllowedPrincipalArns() {
    this._allowedPrincipalArns = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allowedPrincipalArnsInput() {
    return this._allowedPrincipalArns;
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

  // sts_endpoint - computed: true, optional: true, required: false
  private _stsEndpoint?: string; 
  public get stsEndpoint() {
    return this.getStringAttribute('sts_endpoint');
  }
  public set stsEndpoint(value: string) {
    this._stsEndpoint = value;
  }
  public resetStsEndpoint() {
    this._stsEndpoint = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get stsEndpointInput() {
    return this._stsEndpoint;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      access_token_max_ttl: cdktf.numberToTerraform(this._accessTokenMaxTtl),
      access_token_num_uses_limit: cdktf.numberToTerraform(this._accessTokenNumUsesLimit),
      access_token_trusted_ips: cdktf.listMapper(identityAwsAuthAccessTokenTrustedIpsToTerraform, false)(this._accessTokenTrustedIps.internalValue),
      access_token_ttl: cdktf.numberToTerraform(this._accessTokenTtl),
      allowed_account_ids: cdktf.listMapper(cdktf.stringToTerraform, false)(this._allowedAccountIds),
      allowed_principal_arns: cdktf.listMapper(cdktf.stringToTerraform, false)(this._allowedPrincipalArns),
      identity_id: cdktf.stringToTerraform(this._identityId),
      sts_endpoint: cdktf.stringToTerraform(this._stsEndpoint),
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
        value: cdktf.listMapperHcl(identityAwsAuthAccessTokenTrustedIpsToHclTerraform, false)(this._accessTokenTrustedIps.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "IdentityAwsAuthAccessTokenTrustedIpsList",
      },
      access_token_ttl: {
        value: cdktf.numberToHclTerraform(this._accessTokenTtl),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      allowed_account_ids: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._allowedAccountIds),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      allowed_principal_arns: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._allowedPrincipalArns),
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
      sts_endpoint: {
        value: cdktf.stringToHclTerraform(this._stsEndpoint),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
