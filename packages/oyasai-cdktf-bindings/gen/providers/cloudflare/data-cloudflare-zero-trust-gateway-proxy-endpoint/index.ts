// https://registry.terraform.io/providers/cloudflare/cloudflare/5.29.0/docs/data-sources/zero_trust_gateway_proxy_endpoint
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataCloudflareZeroTrustGatewayProxyEndpointConfig extends cdktf.TerraformMetaArguments {
  /**
  * Specify the Cloudflare account identifier.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.29.0/docs/data-sources/zero_trust_gateway_proxy_endpoint#account_id DataCloudflareZeroTrustGatewayProxyEndpoint#account_id}
  */
  readonly accountId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.29.0/docs/data-sources/zero_trust_gateway_proxy_endpoint#filter DataCloudflareZeroTrustGatewayProxyEndpoint#filter}
  */
  readonly filter?: DataCloudflareZeroTrustGatewayProxyEndpointFilter;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.29.0/docs/data-sources/zero_trust_gateway_proxy_endpoint#proxy_endpoint_id DataCloudflareZeroTrustGatewayProxyEndpoint#proxy_endpoint_id}
  */
  readonly proxyEndpointId?: string;
}
export interface DataCloudflareZeroTrustGatewayProxyEndpointFilter {
  /**
  * Sort direction. Only takes effect when `order_by` is also provided; it
  * is ignored otherwise. When `direction` is omitted the effective
  * direction is field-specific: `created_at` and `updated_at` default to
  * descending (newest first); `name` defaults to ascending.
  *   * `asc` — ascending.
  *   * `desc` — descending.
  * Available values: "asc", "desc".
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.29.0/docs/data-sources/zero_trust_gateway_proxy_endpoint#direction DataCloudflareZeroTrustGatewayProxyEndpoint#direction}
  */
  readonly direction?: string;
  /**
  * Filter the returned proxy endpoints by one or more `field:value` pairs.
  * Repeat the parameter to apply multiple filters; they are combined with
  * logical AND (an endpoint must satisfy every filter to be returned).
  * 
  * Supported fields and their matching behaviour:
  *   * `name` — case-insensitive substring match on the endpoint name.
  *   * `id` — substring match on the endpoint ID (UUID), with or without dashes.
  *   * `kind` — exact match on the endpoint kind. The value must be `ip` or `identity`; any other value returns `400`.
  * 
  * Each entry must match one of the per-field patterns below: the field
  * must be one of `name`, `id`, or `kind`; `name`/`id` accept any value,
  * while `kind` only accepts `ip` or `identity`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.29.0/docs/data-sources/zero_trust_gateway_proxy_endpoint#filter DataCloudflareZeroTrustGatewayProxyEndpoint#filter}
  */
  readonly filter?: string[];
  /**
  * Field to sort the returned endpoints by. When omitted, the order of
  * results is unspecified. Supported values:
  *   * `name` — sort alphabetically by endpoint name.
  *   * `created_at` — sort by creation time; defaults to descending unless `direction` is set.
  *   * `updated_at` — sort by last-modified time; defaults to descending unless `direction` is set.
  * Available values: "name", "created_at", "updated_at".
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.29.0/docs/data-sources/zero_trust_gateway_proxy_endpoint#order_by DataCloudflareZeroTrustGatewayProxyEndpoint#order_by}
  */
  readonly orderBy?: string;
  /**
  * Case-insensitive substring match on the endpoint name. When combined
  * with `filter`, both must match (logical AND).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.29.0/docs/data-sources/zero_trust_gateway_proxy_endpoint#search DataCloudflareZeroTrustGatewayProxyEndpoint#search}
  */
  readonly search?: string;
}

export function dataCloudflareZeroTrustGatewayProxyEndpointFilterToTerraform(struct?: DataCloudflareZeroTrustGatewayProxyEndpointFilter | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    direction: cdktf.stringToTerraform(struct!.direction),
    filter: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.filter),
    order_by: cdktf.stringToTerraform(struct!.orderBy),
    search: cdktf.stringToTerraform(struct!.search),
  }
}


export function dataCloudflareZeroTrustGatewayProxyEndpointFilterToHclTerraform(struct?: DataCloudflareZeroTrustGatewayProxyEndpointFilter | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    direction: {
      value: cdktf.stringToHclTerraform(struct!.direction),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    filter: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.filter),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    order_by: {
      value: cdktf.stringToHclTerraform(struct!.orderBy),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    search: {
      value: cdktf.stringToHclTerraform(struct!.search),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataCloudflareZeroTrustGatewayProxyEndpointFilterOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataCloudflareZeroTrustGatewayProxyEndpointFilter | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._direction !== undefined) {
      hasAnyValues = true;
      internalValueResult.direction = this._direction;
    }
    if (this._filter !== undefined) {
      hasAnyValues = true;
      internalValueResult.filter = this._filter;
    }
    if (this._orderBy !== undefined) {
      hasAnyValues = true;
      internalValueResult.orderBy = this._orderBy;
    }
    if (this._search !== undefined) {
      hasAnyValues = true;
      internalValueResult.search = this._search;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataCloudflareZeroTrustGatewayProxyEndpointFilter | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._direction = undefined;
      this._filter = undefined;
      this._orderBy = undefined;
      this._search = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._direction = value.direction;
      this._filter = value.filter;
      this._orderBy = value.orderBy;
      this._search = value.search;
    }
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

  // filter - computed: false, optional: true, required: false
  private _filter?: string[]; 
  public get filter() {
    return this.getListAttribute('filter');
  }
  public set filter(value: string[]) {
    this._filter = value;
  }
  public resetFilter() {
    this._filter = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get filterInput() {
    return this._filter;
  }

  // order_by - computed: false, optional: true, required: false
  private _orderBy?: string; 
  public get orderBy() {
    return this.getStringAttribute('order_by');
  }
  public set orderBy(value: string) {
    this._orderBy = value;
  }
  public resetOrderBy() {
    this._orderBy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get orderByInput() {
    return this._orderBy;
  }

  // search - computed: false, optional: true, required: false
  private _search?: string; 
  public get search() {
    return this.getStringAttribute('search');
  }
  public set search(value: string) {
    this._search = value;
  }
  public resetSearch() {
    this._search = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get searchInput() {
    return this._search;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.29.0/docs/data-sources/zero_trust_gateway_proxy_endpoint cloudflare_zero_trust_gateway_proxy_endpoint}
*/
export class DataCloudflareZeroTrustGatewayProxyEndpoint extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "cloudflare_zero_trust_gateway_proxy_endpoint";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataCloudflareZeroTrustGatewayProxyEndpoint resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataCloudflareZeroTrustGatewayProxyEndpoint to import
  * @param importFromId The id of the existing DataCloudflareZeroTrustGatewayProxyEndpoint that should be imported. Refer to the {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.29.0/docs/data-sources/zero_trust_gateway_proxy_endpoint#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataCloudflareZeroTrustGatewayProxyEndpoint to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "cloudflare_zero_trust_gateway_proxy_endpoint", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.29.0/docs/data-sources/zero_trust_gateway_proxy_endpoint cloudflare_zero_trust_gateway_proxy_endpoint} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataCloudflareZeroTrustGatewayProxyEndpointConfig = {}
  */
  public constructor(scope: Construct, id: string, config: DataCloudflareZeroTrustGatewayProxyEndpointConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'cloudflare_zero_trust_gateway_proxy_endpoint',
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
    this._filter.internalValue = config.filter;
    this._proxyEndpointId = config.proxyEndpointId;
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

  // created_at - computed: true, optional: false, required: false
  public get createdAt() {
    return this.getStringAttribute('created_at');
  }

  // filter - computed: false, optional: true, required: false
  private _filter = new DataCloudflareZeroTrustGatewayProxyEndpointFilterOutputReference(this, "filter");
  public get filter() {
    return this._filter;
  }
  public putFilter(value: DataCloudflareZeroTrustGatewayProxyEndpointFilter) {
    this._filter.internalValue = value;
  }
  public resetFilter() {
    this._filter.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get filterInput() {
    return this._filter.internalValue;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // ips - computed: true, optional: false, required: false
  public get ips() {
    return this.getListAttribute('ips');
  }

  // kind - computed: true, optional: false, required: false
  public get kind() {
    return this.getStringAttribute('kind');
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // proxy_endpoint_id - computed: false, optional: true, required: false
  private _proxyEndpointId?: string; 
  public get proxyEndpointId() {
    return this.getStringAttribute('proxy_endpoint_id');
  }
  public set proxyEndpointId(value: string) {
    this._proxyEndpointId = value;
  }
  public resetProxyEndpointId() {
    this._proxyEndpointId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get proxyEndpointIdInput() {
    return this._proxyEndpointId;
  }

  // subdomain - computed: true, optional: false, required: false
  public get subdomain() {
    return this.getStringAttribute('subdomain');
  }

  // updated_at - computed: true, optional: false, required: false
  public get updatedAt() {
    return this.getStringAttribute('updated_at');
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      account_id: cdktf.stringToTerraform(this._accountId),
      filter: dataCloudflareZeroTrustGatewayProxyEndpointFilterToTerraform(this._filter.internalValue),
      proxy_endpoint_id: cdktf.stringToTerraform(this._proxyEndpointId),
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
      filter: {
        value: dataCloudflareZeroTrustGatewayProxyEndpointFilterToHclTerraform(this._filter.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "DataCloudflareZeroTrustGatewayProxyEndpointFilter",
      },
      proxy_endpoint_id: {
        value: cdktf.stringToHclTerraform(this._proxyEndpointId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
