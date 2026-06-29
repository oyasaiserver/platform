// https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.1/docs/data-sources/custom_hostname
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataCloudflareCustomHostnameConfig extends cdktf.TerraformMetaArguments {
  /**
  * Identifier.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.1/docs/data-sources/custom_hostname#custom_hostname_id DataCloudflareCustomHostname#custom_hostname_id}
  */
  readonly customHostnameId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.1/docs/data-sources/custom_hostname#filter DataCloudflareCustomHostname#filter}
  */
  readonly filter?: DataCloudflareCustomHostnameFilter;
  /**
  * Identifier.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.1/docs/data-sources/custom_hostname#zone_id DataCloudflareCustomHostname#zone_id}
  */
  readonly zoneId?: string;
}
export interface DataCloudflareCustomHostnameFilterHostname {
  /**
  * Filters hostnames by a substring match on the hostname value. This parameter cannot be used with the 'id' parameter.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.1/docs/data-sources/custom_hostname#contain DataCloudflareCustomHostname#contain}
  */
  readonly contain?: string;
}

export function dataCloudflareCustomHostnameFilterHostnameToTerraform(struct?: DataCloudflareCustomHostnameFilterHostname | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    contain: cdktf.stringToTerraform(struct!.contain),
  }
}


export function dataCloudflareCustomHostnameFilterHostnameToHclTerraform(struct?: DataCloudflareCustomHostnameFilterHostname | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    contain: {
      value: cdktf.stringToHclTerraform(struct!.contain),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataCloudflareCustomHostnameFilterHostnameOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataCloudflareCustomHostnameFilterHostname | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._contain !== undefined) {
      hasAnyValues = true;
      internalValueResult.contain = this._contain;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataCloudflareCustomHostnameFilterHostname | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._contain = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._contain = value.contain;
    }
  }

  // contain - computed: false, optional: true, required: false
  private _contain?: string; 
  public get contain() {
    return this.getStringAttribute('contain');
  }
  public set contain(value: string) {
    this._contain = value;
  }
  public resetContain() {
    this._contain = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get containInput() {
    return this._contain;
  }
}
export interface DataCloudflareCustomHostnameFilter {
  /**
  * Filter by the certificate authority that issued the SSL certificate.
  * Available values: "google", "lets_encrypt", "ssl_com".
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.1/docs/data-sources/custom_hostname#certificate_authority DataCloudflareCustomHostname#certificate_authority}
  */
  readonly certificateAuthority?: string;
  /**
  * Filter by custom origin server name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.1/docs/data-sources/custom_hostname#custom_origin_server DataCloudflareCustomHostname#custom_origin_server}
  */
  readonly customOriginServer?: string;
  /**
  * Direction to order hostnames.
  * Available values: "asc", "desc".
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.1/docs/data-sources/custom_hostname#direction DataCloudflareCustomHostname#direction}
  */
  readonly direction?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.1/docs/data-sources/custom_hostname#hostname DataCloudflareCustomHostname#hostname}
  */
  readonly hostname?: DataCloudflareCustomHostnameFilterHostname;
  /**
  * Filter by the hostname's activation status.
  * Available values: "active", "pending", "active_redeploying", "moved", "pending_deletion", "deleted", "pending_blocked", "pending_migration", "pending_provisioned", "test_pending", "test_active", "test_active_apex", "test_blocked", "test_failed", "provisioned", "blocked".
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.1/docs/data-sources/custom_hostname#hostname_status DataCloudflareCustomHostname#hostname_status}
  */
  readonly hostnameStatus?: string;
  /**
  * Hostname ID to match against. This ID was generated and returned during the initial custom_hostname creation. This parameter cannot be used with the 'hostname' parameter.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.1/docs/data-sources/custom_hostname#id DataCloudflareCustomHostname#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Field to order hostnames by.
  * Available values: "ssl", "ssl_status".
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.1/docs/data-sources/custom_hostname#order DataCloudflareCustomHostname#order}
  */
  readonly order?: string;
  /**
  * Whether to filter hostnames based on if they have SSL enabled.
  * Available values: 0, 1.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.1/docs/data-sources/custom_hostname#ssl DataCloudflareCustomHostname#ssl}
  */
  readonly ssl?: number;
  /**
  * Filter by SSL certificate status.
  * Available values: "initializing", "pending_validation", "deleted", "pending_issuance", "pending_deployment", "pending_deletion", "pending_expiration", "expired", "active", "initializing_timed_out", "validation_timed_out", "issuance_timed_out", "deployment_timed_out", "deletion_timed_out", "pending_cleanup", "staging_deployment", "staging_active", "deactivating", "inactive", "backup_issued", "holding_deployment".
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.1/docs/data-sources/custom_hostname#ssl_status DataCloudflareCustomHostname#ssl_status}
  */
  readonly sslStatus?: string;
  /**
  * Filter by whether the custom hostname is a wildcard hostname.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.1/docs/data-sources/custom_hostname#wildcard DataCloudflareCustomHostname#wildcard}
  */
  readonly wildcard?: boolean | cdktf.IResolvable;
}

export function dataCloudflareCustomHostnameFilterToTerraform(struct?: DataCloudflareCustomHostnameFilter | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    certificate_authority: cdktf.stringToTerraform(struct!.certificateAuthority),
    custom_origin_server: cdktf.stringToTerraform(struct!.customOriginServer),
    direction: cdktf.stringToTerraform(struct!.direction),
    hostname: dataCloudflareCustomHostnameFilterHostnameToTerraform(struct!.hostname),
    hostname_status: cdktf.stringToTerraform(struct!.hostnameStatus),
    id: cdktf.stringToTerraform(struct!.id),
    order: cdktf.stringToTerraform(struct!.order),
    ssl: cdktf.numberToTerraform(struct!.ssl),
    ssl_status: cdktf.stringToTerraform(struct!.sslStatus),
    wildcard: cdktf.booleanToTerraform(struct!.wildcard),
  }
}


export function dataCloudflareCustomHostnameFilterToHclTerraform(struct?: DataCloudflareCustomHostnameFilter | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    certificate_authority: {
      value: cdktf.stringToHclTerraform(struct!.certificateAuthority),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    custom_origin_server: {
      value: cdktf.stringToHclTerraform(struct!.customOriginServer),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    direction: {
      value: cdktf.stringToHclTerraform(struct!.direction),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    hostname: {
      value: dataCloudflareCustomHostnameFilterHostnameToHclTerraform(struct!.hostname),
      isBlock: true,
      type: "struct",
      storageClassType: "DataCloudflareCustomHostnameFilterHostname",
    },
    hostname_status: {
      value: cdktf.stringToHclTerraform(struct!.hostnameStatus),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    id: {
      value: cdktf.stringToHclTerraform(struct!.id),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    order: {
      value: cdktf.stringToHclTerraform(struct!.order),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ssl: {
      value: cdktf.numberToHclTerraform(struct!.ssl),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    ssl_status: {
      value: cdktf.stringToHclTerraform(struct!.sslStatus),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    wildcard: {
      value: cdktf.booleanToHclTerraform(struct!.wildcard),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataCloudflareCustomHostnameFilterOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataCloudflareCustomHostnameFilter | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._certificateAuthority !== undefined) {
      hasAnyValues = true;
      internalValueResult.certificateAuthority = this._certificateAuthority;
    }
    if (this._customOriginServer !== undefined) {
      hasAnyValues = true;
      internalValueResult.customOriginServer = this._customOriginServer;
    }
    if (this._direction !== undefined) {
      hasAnyValues = true;
      internalValueResult.direction = this._direction;
    }
    if (this._hostname?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.hostname = this._hostname?.internalValue;
    }
    if (this._hostnameStatus !== undefined) {
      hasAnyValues = true;
      internalValueResult.hostnameStatus = this._hostnameStatus;
    }
    if (this._id !== undefined) {
      hasAnyValues = true;
      internalValueResult.id = this._id;
    }
    if (this._order !== undefined) {
      hasAnyValues = true;
      internalValueResult.order = this._order;
    }
    if (this._ssl !== undefined) {
      hasAnyValues = true;
      internalValueResult.ssl = this._ssl;
    }
    if (this._sslStatus !== undefined) {
      hasAnyValues = true;
      internalValueResult.sslStatus = this._sslStatus;
    }
    if (this._wildcard !== undefined) {
      hasAnyValues = true;
      internalValueResult.wildcard = this._wildcard;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataCloudflareCustomHostnameFilter | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._certificateAuthority = undefined;
      this._customOriginServer = undefined;
      this._direction = undefined;
      this._hostname.internalValue = undefined;
      this._hostnameStatus = undefined;
      this._id = undefined;
      this._order = undefined;
      this._ssl = undefined;
      this._sslStatus = undefined;
      this._wildcard = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._certificateAuthority = value.certificateAuthority;
      this._customOriginServer = value.customOriginServer;
      this._direction = value.direction;
      this._hostname.internalValue = value.hostname;
      this._hostnameStatus = value.hostnameStatus;
      this._id = value.id;
      this._order = value.order;
      this._ssl = value.ssl;
      this._sslStatus = value.sslStatus;
      this._wildcard = value.wildcard;
    }
  }

  // certificate_authority - computed: false, optional: true, required: false
  private _certificateAuthority?: string; 
  public get certificateAuthority() {
    return this.getStringAttribute('certificate_authority');
  }
  public set certificateAuthority(value: string) {
    this._certificateAuthority = value;
  }
  public resetCertificateAuthority() {
    this._certificateAuthority = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get certificateAuthorityInput() {
    return this._certificateAuthority;
  }

  // custom_origin_server - computed: false, optional: true, required: false
  private _customOriginServer?: string; 
  public get customOriginServer() {
    return this.getStringAttribute('custom_origin_server');
  }
  public set customOriginServer(value: string) {
    this._customOriginServer = value;
  }
  public resetCustomOriginServer() {
    this._customOriginServer = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get customOriginServerInput() {
    return this._customOriginServer;
  }

  // direction - computed: false, optional: true, required: false
  private _direction?: string; 
  public get direction() {
    return this.getStringAttribute('direction');
  }
  public set direction(value: string) {
    this._direction = value;
  }
  public resetDirection() {
    this._direction = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get directionInput() {
    return this._direction;
  }

  // hostname - computed: false, optional: true, required: false
  private _hostname = new DataCloudflareCustomHostnameFilterHostnameOutputReference(this, "hostname");
  public get hostname() {
    return this._hostname;
  }
  public putHostname(value: DataCloudflareCustomHostnameFilterHostname) {
    this._hostname.internalValue = value;
  }
  public resetHostname() {
    this._hostname.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hostnameInput() {
    return this._hostname.internalValue;
  }

  // hostname_status - computed: false, optional: true, required: false
  private _hostnameStatus?: string; 
  public get hostnameStatus() {
    return this.getStringAttribute('hostname_status');
  }
  public set hostnameStatus(value: string) {
    this._hostnameStatus = value;
  }
  public resetHostnameStatus() {
    this._hostnameStatus = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hostnameStatusInput() {
    return this._hostnameStatus;
  }

  // id - computed: false, optional: true, required: false
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

  // order - computed: true, optional: true, required: false
  private _order?: string; 
  public get order() {
    return this.getStringAttribute('order');
  }
  public set order(value: string) {
    this._order = value;
  }
  public resetOrder() {
    this._order = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get orderInput() {
    return this._order;
  }

  // ssl - computed: true, optional: true, required: false
  private _ssl?: number; 
  public get ssl() {
    return this.getNumberAttribute('ssl');
  }
  public set ssl(value: number) {
    this._ssl = value;
  }
  public resetSsl() {
    this._ssl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sslInput() {
    return this._ssl;
  }

  // ssl_status - computed: false, optional: true, required: false
  private _sslStatus?: string; 
  public get sslStatus() {
    return this.getStringAttribute('ssl_status');
  }
  public set sslStatus(value: string) {
    this._sslStatus = value;
  }
  public resetSslStatus() {
    this._sslStatus = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sslStatusInput() {
    return this._sslStatus;
  }

  // wildcard - computed: false, optional: true, required: false
  private _wildcard?: boolean | cdktf.IResolvable; 
  public get wildcard() {
    return this.getBooleanAttribute('wildcard');
  }
  public set wildcard(value: boolean | cdktf.IResolvable) {
    this._wildcard = value;
  }
  public resetWildcard() {
    this._wildcard = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get wildcardInput() {
    return this._wildcard;
  }
}
export interface DataCloudflareCustomHostnameOwnershipVerification {
}

export function dataCloudflareCustomHostnameOwnershipVerificationToTerraform(struct?: DataCloudflareCustomHostnameOwnershipVerification): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataCloudflareCustomHostnameOwnershipVerificationToHclTerraform(struct?: DataCloudflareCustomHostnameOwnershipVerification): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataCloudflareCustomHostnameOwnershipVerificationOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataCloudflareCustomHostnameOwnershipVerification | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataCloudflareCustomHostnameOwnershipVerification | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // type - computed: true, optional: false, required: false
  public get type() {
    return this.getStringAttribute('type');
  }

  // value - computed: true, optional: false, required: false
  public get value() {
    return this.getStringAttribute('value');
  }
}
export interface DataCloudflareCustomHostnameOwnershipVerificationHttp {
}

export function dataCloudflareCustomHostnameOwnershipVerificationHttpToTerraform(struct?: DataCloudflareCustomHostnameOwnershipVerificationHttp): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataCloudflareCustomHostnameOwnershipVerificationHttpToHclTerraform(struct?: DataCloudflareCustomHostnameOwnershipVerificationHttp): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataCloudflareCustomHostnameOwnershipVerificationHttpOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataCloudflareCustomHostnameOwnershipVerificationHttp | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataCloudflareCustomHostnameOwnershipVerificationHttp | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // http_body - computed: true, optional: false, required: false
  public get httpBody() {
    return this.getStringAttribute('http_body');
  }

  // http_url - computed: true, optional: false, required: false
  public get httpUrl() {
    return this.getStringAttribute('http_url');
  }
}
export interface DataCloudflareCustomHostnameSslDcvDelegationRecords {
}

export function dataCloudflareCustomHostnameSslDcvDelegationRecordsToTerraform(struct?: DataCloudflareCustomHostnameSslDcvDelegationRecords): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataCloudflareCustomHostnameSslDcvDelegationRecordsToHclTerraform(struct?: DataCloudflareCustomHostnameSslDcvDelegationRecords): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataCloudflareCustomHostnameSslDcvDelegationRecordsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DataCloudflareCustomHostnameSslDcvDelegationRecords | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataCloudflareCustomHostnameSslDcvDelegationRecords | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // cname - computed: true, optional: false, required: false
  public get cname() {
    return this.getStringAttribute('cname');
  }

  // cname_target - computed: true, optional: false, required: false
  public get cnameTarget() {
    return this.getStringAttribute('cname_target');
  }

  // emails - computed: true, optional: false, required: false
  public get emails() {
    return this.getListAttribute('emails');
  }

  // http_body - computed: true, optional: false, required: false
  public get httpBody() {
    return this.getStringAttribute('http_body');
  }

  // http_url - computed: true, optional: false, required: false
  public get httpUrl() {
    return this.getStringAttribute('http_url');
  }

  // status - computed: true, optional: false, required: false
  public get status() {
    return this.getStringAttribute('status');
  }

  // txt_name - computed: true, optional: false, required: false
  public get txtName() {
    return this.getStringAttribute('txt_name');
  }

  // txt_value - computed: true, optional: false, required: false
  public get txtValue() {
    return this.getStringAttribute('txt_value');
  }
}

export class DataCloudflareCustomHostnameSslDcvDelegationRecordsList extends cdktf.ComplexList {

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
  public get(index: number): DataCloudflareCustomHostnameSslDcvDelegationRecordsOutputReference {
    return new DataCloudflareCustomHostnameSslDcvDelegationRecordsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataCloudflareCustomHostnameSslSettings {
}

export function dataCloudflareCustomHostnameSslSettingsToTerraform(struct?: DataCloudflareCustomHostnameSslSettings): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataCloudflareCustomHostnameSslSettingsToHclTerraform(struct?: DataCloudflareCustomHostnameSslSettings): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataCloudflareCustomHostnameSslSettingsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataCloudflareCustomHostnameSslSettings | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataCloudflareCustomHostnameSslSettings | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // ciphers - computed: true, optional: false, required: false
  public get ciphers() {
    return this.getListAttribute('ciphers');
  }

  // early_hints - computed: true, optional: false, required: false
  public get earlyHints() {
    return this.getStringAttribute('early_hints');
  }

  // http2 - computed: true, optional: false, required: false
  public get http2() {
    return this.getStringAttribute('http2');
  }

  // min_tls_version - computed: true, optional: false, required: false
  public get minTlsVersion() {
    return this.getStringAttribute('min_tls_version');
  }

  // tls_1_3 - computed: true, optional: false, required: false
  public get tls13() {
    return this.getStringAttribute('tls_1_3');
  }
}
export interface DataCloudflareCustomHostnameSslValidationErrors {
}

export function dataCloudflareCustomHostnameSslValidationErrorsToTerraform(struct?: DataCloudflareCustomHostnameSslValidationErrors): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataCloudflareCustomHostnameSslValidationErrorsToHclTerraform(struct?: DataCloudflareCustomHostnameSslValidationErrors): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataCloudflareCustomHostnameSslValidationErrorsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DataCloudflareCustomHostnameSslValidationErrors | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataCloudflareCustomHostnameSslValidationErrors | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // message - computed: true, optional: false, required: false
  public get message() {
    return this.getStringAttribute('message');
  }
}

export class DataCloudflareCustomHostnameSslValidationErrorsList extends cdktf.ComplexList {

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
  public get(index: number): DataCloudflareCustomHostnameSslValidationErrorsOutputReference {
    return new DataCloudflareCustomHostnameSslValidationErrorsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataCloudflareCustomHostnameSslValidationRecords {
}

export function dataCloudflareCustomHostnameSslValidationRecordsToTerraform(struct?: DataCloudflareCustomHostnameSslValidationRecords): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataCloudflareCustomHostnameSslValidationRecordsToHclTerraform(struct?: DataCloudflareCustomHostnameSslValidationRecords): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataCloudflareCustomHostnameSslValidationRecordsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DataCloudflareCustomHostnameSslValidationRecords | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataCloudflareCustomHostnameSslValidationRecords | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // cname - computed: true, optional: false, required: false
  public get cname() {
    return this.getStringAttribute('cname');
  }

  // cname_target - computed: true, optional: false, required: false
  public get cnameTarget() {
    return this.getStringAttribute('cname_target');
  }

  // emails - computed: true, optional: false, required: false
  public get emails() {
    return this.getListAttribute('emails');
  }

  // http_body - computed: true, optional: false, required: false
  public get httpBody() {
    return this.getStringAttribute('http_body');
  }

  // http_url - computed: true, optional: false, required: false
  public get httpUrl() {
    return this.getStringAttribute('http_url');
  }

  // status - computed: true, optional: false, required: false
  public get status() {
    return this.getStringAttribute('status');
  }

  // txt_name - computed: true, optional: false, required: false
  public get txtName() {
    return this.getStringAttribute('txt_name');
  }

  // txt_value - computed: true, optional: false, required: false
  public get txtValue() {
    return this.getStringAttribute('txt_value');
  }
}

export class DataCloudflareCustomHostnameSslValidationRecordsList extends cdktf.ComplexList {

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
  public get(index: number): DataCloudflareCustomHostnameSslValidationRecordsOutputReference {
    return new DataCloudflareCustomHostnameSslValidationRecordsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataCloudflareCustomHostnameSsl {
}

export function dataCloudflareCustomHostnameSslToTerraform(struct?: DataCloudflareCustomHostnameSsl): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataCloudflareCustomHostnameSslToHclTerraform(struct?: DataCloudflareCustomHostnameSsl): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataCloudflareCustomHostnameSslOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataCloudflareCustomHostnameSsl | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataCloudflareCustomHostnameSsl | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // bundle_method - computed: true, optional: false, required: false
  public get bundleMethod() {
    return this.getStringAttribute('bundle_method');
  }

  // certificate_authority - computed: true, optional: false, required: false
  public get certificateAuthority() {
    return this.getStringAttribute('certificate_authority');
  }

  // custom_certificate - computed: true, optional: false, required: false
  public get customCertificate() {
    return this.getStringAttribute('custom_certificate');
  }

  // custom_csr_id - computed: true, optional: false, required: false
  public get customCsrId() {
    return this.getStringAttribute('custom_csr_id');
  }

  // custom_key - computed: true, optional: false, required: false
  public get customKey() {
    return this.getStringAttribute('custom_key');
  }

  // dcv_delegation_records - computed: true, optional: false, required: false
  private _dcvDelegationRecords = new DataCloudflareCustomHostnameSslDcvDelegationRecordsList(this, "dcv_delegation_records", false);
  public get dcvDelegationRecords() {
    return this._dcvDelegationRecords;
  }

  // expires_on - computed: true, optional: false, required: false
  public get expiresOn() {
    return this.getStringAttribute('expires_on');
  }

  // hosts - computed: true, optional: false, required: false
  public get hosts() {
    return this.getListAttribute('hosts');
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // issuer - computed: true, optional: false, required: false
  public get issuer() {
    return this.getStringAttribute('issuer');
  }

  // method - computed: true, optional: false, required: false
  public get method() {
    return this.getStringAttribute('method');
  }

  // serial_number - computed: true, optional: false, required: false
  public get serialNumber() {
    return this.getStringAttribute('serial_number');
  }

  // settings - computed: true, optional: false, required: false
  private _settings = new DataCloudflareCustomHostnameSslSettingsOutputReference(this, "settings");
  public get settings() {
    return this._settings;
  }

  // signature - computed: true, optional: false, required: false
  public get signature() {
    return this.getStringAttribute('signature');
  }

  // status - computed: true, optional: false, required: false
  public get status() {
    return this.getStringAttribute('status');
  }

  // type - computed: true, optional: false, required: false
  public get type() {
    return this.getStringAttribute('type');
  }

  // uploaded_on - computed: true, optional: false, required: false
  public get uploadedOn() {
    return this.getStringAttribute('uploaded_on');
  }

  // validation_errors - computed: true, optional: false, required: false
  private _validationErrors = new DataCloudflareCustomHostnameSslValidationErrorsList(this, "validation_errors", false);
  public get validationErrors() {
    return this._validationErrors;
  }

  // validation_records - computed: true, optional: false, required: false
  private _validationRecords = new DataCloudflareCustomHostnameSslValidationRecordsList(this, "validation_records", false);
  public get validationRecords() {
    return this._validationRecords;
  }

  // wildcard - computed: true, optional: false, required: false
  public get wildcard() {
    return this.getBooleanAttribute('wildcard');
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.1/docs/data-sources/custom_hostname cloudflare_custom_hostname}
*/
export class DataCloudflareCustomHostname extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "cloudflare_custom_hostname";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataCloudflareCustomHostname resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataCloudflareCustomHostname to import
  * @param importFromId The id of the existing DataCloudflareCustomHostname that should be imported. Refer to the {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.1/docs/data-sources/custom_hostname#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataCloudflareCustomHostname to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "cloudflare_custom_hostname", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.1/docs/data-sources/custom_hostname cloudflare_custom_hostname} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataCloudflareCustomHostnameConfig = {}
  */
  public constructor(scope: Construct, id: string, config: DataCloudflareCustomHostnameConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'cloudflare_custom_hostname',
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
    this._customHostnameId = config.customHostnameId;
    this._filter.internalValue = config.filter;
    this._zoneId = config.zoneId;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // created_at - computed: true, optional: false, required: false
  public get createdAt() {
    return this.getStringAttribute('created_at');
  }

  // custom_hostname_id - computed: false, optional: true, required: false
  private _customHostnameId?: string; 
  public get customHostnameId() {
    return this.getStringAttribute('custom_hostname_id');
  }
  public set customHostnameId(value: string) {
    this._customHostnameId = value;
  }
  public resetCustomHostnameId() {
    this._customHostnameId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get customHostnameIdInput() {
    return this._customHostnameId;
  }

  // custom_metadata - computed: true, optional: false, required: false
  private _customMetadata = new cdktf.StringMap(this, "custom_metadata");
  public get customMetadata() {
    return this._customMetadata;
  }

  // custom_origin_server - computed: true, optional: false, required: false
  public get customOriginServer() {
    return this.getStringAttribute('custom_origin_server');
  }

  // custom_origin_sni - computed: true, optional: false, required: false
  public get customOriginSni() {
    return this.getStringAttribute('custom_origin_sni');
  }

  // filter - computed: false, optional: true, required: false
  private _filter = new DataCloudflareCustomHostnameFilterOutputReference(this, "filter");
  public get filter() {
    return this._filter;
  }
  public putFilter(value: DataCloudflareCustomHostnameFilter) {
    this._filter.internalValue = value;
  }
  public resetFilter() {
    this._filter.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get filterInput() {
    return this._filter.internalValue;
  }

  // hostname - computed: true, optional: false, required: false
  public get hostname() {
    return this.getStringAttribute('hostname');
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // ownership_verification - computed: true, optional: false, required: false
  private _ownershipVerification = new DataCloudflareCustomHostnameOwnershipVerificationOutputReference(this, "ownership_verification");
  public get ownershipVerification() {
    return this._ownershipVerification;
  }

  // ownership_verification_http - computed: true, optional: false, required: false
  private _ownershipVerificationHttp = new DataCloudflareCustomHostnameOwnershipVerificationHttpOutputReference(this, "ownership_verification_http");
  public get ownershipVerificationHttp() {
    return this._ownershipVerificationHttp;
  }

  // ssl - computed: true, optional: false, required: false
  private _ssl = new DataCloudflareCustomHostnameSslOutputReference(this, "ssl");
  public get ssl() {
    return this._ssl;
  }

  // status - computed: true, optional: false, required: false
  public get status() {
    return this.getStringAttribute('status');
  }

  // verification_errors - computed: true, optional: false, required: false
  public get verificationErrors() {
    return this.getListAttribute('verification_errors');
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
      custom_hostname_id: cdktf.stringToTerraform(this._customHostnameId),
      filter: dataCloudflareCustomHostnameFilterToTerraform(this._filter.internalValue),
      zone_id: cdktf.stringToTerraform(this._zoneId),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      custom_hostname_id: {
        value: cdktf.stringToHclTerraform(this._customHostnameId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      filter: {
        value: dataCloudflareCustomHostnameFilterToHclTerraform(this._filter.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "DataCloudflareCustomHostnameFilter",
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
