// https://registry.terraform.io/providers/infisical/infisical/0.19.6/docs/resources/identity_universal_auth
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface IdentityUniversalAuthConfig extends cdktf.TerraformMetaArguments {
  /**
  * The maximum lifetime for an access token in seconds. This value will be referenced at renewal time. Default: 2592000
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infisical/infisical/0.19.6/docs/resources/identity_universal_auth#access_token_max_ttl IdentityUniversalAuth#access_token_max_ttl}
  */
  readonly accessTokenMaxTtl?: number;
  /**
  * The maximum number of times that an access token can be used; a value of 0 implies infinite number of uses. Default:0
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infisical/infisical/0.19.6/docs/resources/identity_universal_auth#access_token_num_uses_limit IdentityUniversalAuth#access_token_num_uses_limit}
  */
  readonly accessTokenNumUsesLimit?: number;
  /**
  * A list of IPs or CIDR ranges that access tokens can be used from. You can use 0.0.0.0/0, to allow usage from any network address..
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infisical/infisical/0.19.6/docs/resources/identity_universal_auth#access_token_trusted_ips IdentityUniversalAuth#access_token_trusted_ips}
  */
  readonly accessTokenTrustedIps?: IdentityUniversalAuthAccessTokenTrustedIps[] | cdktf.IResolvable;
  /**
  * The lifetime for an access token in seconds. This value will be referenced at renewal time. Default: 2592000
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infisical/infisical/0.19.6/docs/resources/identity_universal_auth#access_token_ttl IdentityUniversalAuth#access_token_ttl}
  */
  readonly accessTokenTtl?: number;
  /**
  * A list of IPs or CIDR ranges that the Client Secret can be used from together with the Client ID to get back an access token. You can use 0.0.0.0/0, to allow usage from any network address.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infisical/infisical/0.19.6/docs/resources/identity_universal_auth#client_secret_trusted_ips IdentityUniversalAuth#client_secret_trusted_ips}
  */
  readonly clientSecretTrustedIps?: IdentityUniversalAuthClientSecretTrustedIps[] | cdktf.IResolvable;
  /**
  * The ID of the identity to attach the configuration onto.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infisical/infisical/0.19.6/docs/resources/identity_universal_auth#identity_id IdentityUniversalAuth#identity_id}
  */
  readonly identityId: string;
}
export interface IdentityUniversalAuthAccessTokenTrustedIps {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infisical/infisical/0.19.6/docs/resources/identity_universal_auth#ip_address IdentityUniversalAuth#ip_address}
  */
  readonly ipAddress?: string;
}

export function identityUniversalAuthAccessTokenTrustedIpsToTerraform(struct?: IdentityUniversalAuthAccessTokenTrustedIps | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    ip_address: cdktf.stringToTerraform(struct!.ipAddress),
  }
}


export function identityUniversalAuthAccessTokenTrustedIpsToHclTerraform(struct?: IdentityUniversalAuthAccessTokenTrustedIps | cdktf.IResolvable): any {
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

export class IdentityUniversalAuthAccessTokenTrustedIpsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): IdentityUniversalAuthAccessTokenTrustedIps | cdktf.IResolvable | undefined {
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

  public set internalValue(value: IdentityUniversalAuthAccessTokenTrustedIps | cdktf.IResolvable | undefined) {
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

export class IdentityUniversalAuthAccessTokenTrustedIpsList extends cdktf.ComplexList {
  public internalValue? : IdentityUniversalAuthAccessTokenTrustedIps[] | cdktf.IResolvable

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
  public get(index: number): IdentityUniversalAuthAccessTokenTrustedIpsOutputReference {
    return new IdentityUniversalAuthAccessTokenTrustedIpsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface IdentityUniversalAuthClientSecretTrustedIps {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infisical/infisical/0.19.6/docs/resources/identity_universal_auth#ip_address IdentityUniversalAuth#ip_address}
  */
  readonly ipAddress?: string;
}

export function identityUniversalAuthClientSecretTrustedIpsToTerraform(struct?: IdentityUniversalAuthClientSecretTrustedIps | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    ip_address: cdktf.stringToTerraform(struct!.ipAddress),
  }
}


export function identityUniversalAuthClientSecretTrustedIpsToHclTerraform(struct?: IdentityUniversalAuthClientSecretTrustedIps | cdktf.IResolvable): any {
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

export class IdentityUniversalAuthClientSecretTrustedIpsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): IdentityUniversalAuthClientSecretTrustedIps | cdktf.IResolvable | undefined {
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

  public set internalValue(value: IdentityUniversalAuthClientSecretTrustedIps | cdktf.IResolvable | undefined) {
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

export class IdentityUniversalAuthClientSecretTrustedIpsList extends cdktf.ComplexList {
  public internalValue? : IdentityUniversalAuthClientSecretTrustedIps[] | cdktf.IResolvable

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
  public get(index: number): IdentityUniversalAuthClientSecretTrustedIpsOutputReference {
    return new IdentityUniversalAuthClientSecretTrustedIpsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/infisical/infisical/0.19.6/docs/resources/identity_universal_auth infisical_identity_universal_auth}
*/
export class IdentityUniversalAuth extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "infisical_identity_universal_auth";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a IdentityUniversalAuth resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the IdentityUniversalAuth to import
  * @param importFromId The id of the existing IdentityUniversalAuth that should be imported. Refer to the {@link https://registry.terraform.io/providers/infisical/infisical/0.19.6/docs/resources/identity_universal_auth#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the IdentityUniversalAuth to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "infisical_identity_universal_auth", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/infisical/infisical/0.19.6/docs/resources/identity_universal_auth infisical_identity_universal_auth} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options IdentityUniversalAuthConfig
  */
  public constructor(scope: Construct, id: string, config: IdentityUniversalAuthConfig) {
    super(scope, id, {
      terraformResourceType: 'infisical_identity_universal_auth',
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
    this._clientSecretTrustedIps.internalValue = config.clientSecretTrustedIps;
    this._identityId = config.identityId;
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
  private _accessTokenTrustedIps = new IdentityUniversalAuthAccessTokenTrustedIpsList(this, "access_token_trusted_ips", false);
  public get accessTokenTrustedIps() {
    return this._accessTokenTrustedIps;
  }
  public putAccessTokenTrustedIps(value: IdentityUniversalAuthAccessTokenTrustedIps[] | cdktf.IResolvable) {
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

  // client_secret_trusted_ips - computed: true, optional: true, required: false
  private _clientSecretTrustedIps = new IdentityUniversalAuthClientSecretTrustedIpsList(this, "client_secret_trusted_ips", false);
  public get clientSecretTrustedIps() {
    return this._clientSecretTrustedIps;
  }
  public putClientSecretTrustedIps(value: IdentityUniversalAuthClientSecretTrustedIps[] | cdktf.IResolvable) {
    this._clientSecretTrustedIps.internalValue = value;
  }
  public resetClientSecretTrustedIps() {
    this._clientSecretTrustedIps.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clientSecretTrustedIpsInput() {
    return this._clientSecretTrustedIps.internalValue;
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

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      access_token_max_ttl: cdktf.numberToTerraform(this._accessTokenMaxTtl),
      access_token_num_uses_limit: cdktf.numberToTerraform(this._accessTokenNumUsesLimit),
      access_token_trusted_ips: cdktf.listMapper(identityUniversalAuthAccessTokenTrustedIpsToTerraform, false)(this._accessTokenTrustedIps.internalValue),
      access_token_ttl: cdktf.numberToTerraform(this._accessTokenTtl),
      client_secret_trusted_ips: cdktf.listMapper(identityUniversalAuthClientSecretTrustedIpsToTerraform, false)(this._clientSecretTrustedIps.internalValue),
      identity_id: cdktf.stringToTerraform(this._identityId),
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
        value: cdktf.listMapperHcl(identityUniversalAuthAccessTokenTrustedIpsToHclTerraform, false)(this._accessTokenTrustedIps.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "IdentityUniversalAuthAccessTokenTrustedIpsList",
      },
      access_token_ttl: {
        value: cdktf.numberToHclTerraform(this._accessTokenTtl),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      client_secret_trusted_ips: {
        value: cdktf.listMapperHcl(identityUniversalAuthClientSecretTrustedIpsToHclTerraform, false)(this._clientSecretTrustedIps.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "IdentityUniversalAuthClientSecretTrustedIpsList",
      },
      identity_id: {
        value: cdktf.stringToHclTerraform(this._identityId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
