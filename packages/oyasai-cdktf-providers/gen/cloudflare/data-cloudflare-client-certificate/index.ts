// https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.1/docs/data-sources/client_certificate
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataCloudflareClientCertificateConfig extends cdktf.TerraformMetaArguments {
  /**
  * Identifier.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.1/docs/data-sources/client_certificate#client_certificate_id DataCloudflareClientCertificate#client_certificate_id}
  */
  readonly clientCertificateId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.1/docs/data-sources/client_certificate#filter DataCloudflareClientCertificate#filter}
  */
  readonly filter?: DataCloudflareClientCertificateFilter;
  /**
  * Identifier.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.1/docs/data-sources/client_certificate#zone_id DataCloudflareClientCertificate#zone_id}
  */
  readonly zoneId?: string;
}
export interface DataCloudflareClientCertificateCertificateAuthority {
}

export function dataCloudflareClientCertificateCertificateAuthorityToTerraform(struct?: DataCloudflareClientCertificateCertificateAuthority): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataCloudflareClientCertificateCertificateAuthorityToHclTerraform(struct?: DataCloudflareClientCertificateCertificateAuthority): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataCloudflareClientCertificateCertificateAuthorityOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataCloudflareClientCertificateCertificateAuthority | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataCloudflareClientCertificateCertificateAuthority | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }
}
export interface DataCloudflareClientCertificateFilter {
  /**
  * Limit to the number of records returned.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.1/docs/data-sources/client_certificate#limit DataCloudflareClientCertificate#limit}
  */
  readonly limit?: number;
  /**
  * Offset the results.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.1/docs/data-sources/client_certificate#offset DataCloudflareClientCertificate#offset}
  */
  readonly offset?: number;
  /**
  * Client Certitifcate Status to filter results by.
  * Available values: "all", "active", "pending_reactivation", "pending_revocation", "revoked".
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.1/docs/data-sources/client_certificate#status DataCloudflareClientCertificate#status}
  */
  readonly status?: string;
}

export function dataCloudflareClientCertificateFilterToTerraform(struct?: DataCloudflareClientCertificateFilter | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    limit: cdktf.numberToTerraform(struct!.limit),
    offset: cdktf.numberToTerraform(struct!.offset),
    status: cdktf.stringToTerraform(struct!.status),
  }
}


export function dataCloudflareClientCertificateFilterToHclTerraform(struct?: DataCloudflareClientCertificateFilter | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    limit: {
      value: cdktf.numberToHclTerraform(struct!.limit),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    offset: {
      value: cdktf.numberToHclTerraform(struct!.offset),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    status: {
      value: cdktf.stringToHclTerraform(struct!.status),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataCloudflareClientCertificateFilterOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataCloudflareClientCertificateFilter | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._limit !== undefined) {
      hasAnyValues = true;
      internalValueResult.limit = this._limit;
    }
    if (this._offset !== undefined) {
      hasAnyValues = true;
      internalValueResult.offset = this._offset;
    }
    if (this._status !== undefined) {
      hasAnyValues = true;
      internalValueResult.status = this._status;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataCloudflareClientCertificateFilter | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._limit = undefined;
      this._offset = undefined;
      this._status = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._limit = value.limit;
      this._offset = value.offset;
      this._status = value.status;
    }
  }

  // limit - computed: false, optional: true, required: false
  private _limit?: number; 
  public get limit() {
    return this.getNumberAttribute('limit');
  }
  public set limit(value: number) {
    this._limit = value;
  }
  public resetLimit() {
    this._limit = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get limitInput() {
    return this._limit;
  }

  // offset - computed: false, optional: true, required: false
  private _offset?: number; 
  public get offset() {
    return this.getNumberAttribute('offset');
  }
  public set offset(value: number) {
    this._offset = value;
  }
  public resetOffset() {
    this._offset = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get offsetInput() {
    return this._offset;
  }

  // status - computed: false, optional: true, required: false
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
}

/**
* Represents a {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.1/docs/data-sources/client_certificate cloudflare_client_certificate}
*/
export class DataCloudflareClientCertificate extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "cloudflare_client_certificate";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataCloudflareClientCertificate resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataCloudflareClientCertificate to import
  * @param importFromId The id of the existing DataCloudflareClientCertificate that should be imported. Refer to the {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.1/docs/data-sources/client_certificate#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataCloudflareClientCertificate to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "cloudflare_client_certificate", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.1/docs/data-sources/client_certificate cloudflare_client_certificate} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataCloudflareClientCertificateConfig = {}
  */
  public constructor(scope: Construct, id: string, config: DataCloudflareClientCertificateConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'cloudflare_client_certificate',
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
    this._clientCertificateId = config.clientCertificateId;
    this._filter.internalValue = config.filter;
    this._zoneId = config.zoneId;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // certificate - computed: true, optional: false, required: false
  public get certificate() {
    return this.getStringAttribute('certificate');
  }

  // certificate_authority - computed: true, optional: false, required: false
  private _certificateAuthority = new DataCloudflareClientCertificateCertificateAuthorityOutputReference(this, "certificate_authority");
  public get certificateAuthority() {
    return this._certificateAuthority;
  }

  // client_certificate_id - computed: false, optional: true, required: false
  private _clientCertificateId?: string; 
  public get clientCertificateId() {
    return this.getStringAttribute('client_certificate_id');
  }
  public set clientCertificateId(value: string) {
    this._clientCertificateId = value;
  }
  public resetClientCertificateId() {
    this._clientCertificateId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clientCertificateIdInput() {
    return this._clientCertificateId;
  }

  // common_name - computed: true, optional: false, required: false
  public get commonName() {
    return this.getStringAttribute('common_name');
  }

  // country - computed: true, optional: false, required: false
  public get country() {
    return this.getStringAttribute('country');
  }

  // csr - computed: true, optional: false, required: false
  public get csr() {
    return this.getStringAttribute('csr');
  }

  // expires_on - computed: true, optional: false, required: false
  public get expiresOn() {
    return this.getStringAttribute('expires_on');
  }

  // filter - computed: false, optional: true, required: false
  private _filter = new DataCloudflareClientCertificateFilterOutputReference(this, "filter");
  public get filter() {
    return this._filter;
  }
  public putFilter(value: DataCloudflareClientCertificateFilter) {
    this._filter.internalValue = value;
  }
  public resetFilter() {
    this._filter.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get filterInput() {
    return this._filter.internalValue;
  }

  // fingerprint_sha256 - computed: true, optional: false, required: false
  public get fingerprintSha256() {
    return this.getStringAttribute('fingerprint_sha256');
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // issued_on - computed: true, optional: false, required: false
  public get issuedOn() {
    return this.getStringAttribute('issued_on');
  }

  // location - computed: true, optional: false, required: false
  public get location() {
    return this.getStringAttribute('location');
  }

  // organization - computed: true, optional: false, required: false
  public get organization() {
    return this.getStringAttribute('organization');
  }

  // organizational_unit - computed: true, optional: false, required: false
  public get organizationalUnit() {
    return this.getStringAttribute('organizational_unit');
  }

  // serial_number - computed: true, optional: false, required: false
  public get serialNumber() {
    return this.getStringAttribute('serial_number');
  }

  // signature - computed: true, optional: false, required: false
  public get signature() {
    return this.getStringAttribute('signature');
  }

  // ski - computed: true, optional: false, required: false
  public get ski() {
    return this.getStringAttribute('ski');
  }

  // state - computed: true, optional: false, required: false
  public get state() {
    return this.getStringAttribute('state');
  }

  // status - computed: true, optional: false, required: false
  public get status() {
    return this.getStringAttribute('status');
  }

  // validity_days - computed: true, optional: false, required: false
  public get validityDays() {
    return this.getNumberAttribute('validity_days');
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
      client_certificate_id: cdktf.stringToTerraform(this._clientCertificateId),
      filter: dataCloudflareClientCertificateFilterToTerraform(this._filter.internalValue),
      zone_id: cdktf.stringToTerraform(this._zoneId),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      client_certificate_id: {
        value: cdktf.stringToHclTerraform(this._clientCertificateId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      filter: {
        value: dataCloudflareClientCertificateFilterToHclTerraform(this._filter.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "DataCloudflareClientCertificateFilter",
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
