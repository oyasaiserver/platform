// https://registry.terraform.io/providers/cloudflare/cloudflare/5.22.0/docs/data-sources/moq_relay
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataCloudflareMoqRelayConfig extends cdktf.TerraformMetaArguments {
  /**
  * Cloudflare account identifier.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.22.0/docs/data-sources/moq_relay#account_id DataCloudflareMoqRelay#account_id}
  */
  readonly accountId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.22.0/docs/data-sources/moq_relay#filter DataCloudflareMoqRelay#filter}
  */
  readonly filter?: DataCloudflareMoqRelayFilter;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.22.0/docs/data-sources/moq_relay#relay_id DataCloudflareMoqRelay#relay_id}
  */
  readonly relayId?: string;
}
export interface DataCloudflareMoqRelayConfigLingeringSubscribe {
}

export function dataCloudflareMoqRelayConfigLingeringSubscribeToTerraform(struct?: DataCloudflareMoqRelayConfigLingeringSubscribe): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataCloudflareMoqRelayConfigLingeringSubscribeToHclTerraform(struct?: DataCloudflareMoqRelayConfigLingeringSubscribe): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataCloudflareMoqRelayConfigLingeringSubscribeOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataCloudflareMoqRelayConfigLingeringSubscribe | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataCloudflareMoqRelayConfigLingeringSubscribe | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // enabled - computed: true, optional: false, required: false
  public get enabled() {
    return this.getBooleanAttribute('enabled');
  }

  // max_timeout_ms - computed: true, optional: false, required: false
  public get maxTimeoutMs() {
    return this.getNumberAttribute('max_timeout_ms');
  }
}
export interface DataCloudflareMoqRelayConfigUpstreamsUpstreams {
}

export function dataCloudflareMoqRelayConfigUpstreamsUpstreamsToTerraform(struct?: DataCloudflareMoqRelayConfigUpstreamsUpstreams): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataCloudflareMoqRelayConfigUpstreamsUpstreamsToHclTerraform(struct?: DataCloudflareMoqRelayConfigUpstreamsUpstreams): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataCloudflareMoqRelayConfigUpstreamsUpstreamsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataCloudflareMoqRelayConfigUpstreamsUpstreams | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataCloudflareMoqRelayConfigUpstreamsUpstreams | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // url - computed: true, optional: false, required: false
  public get url() {
    return this.getStringAttribute('url');
  }
}

export class DataCloudflareMoqRelayConfigUpstreamsUpstreamsList extends cdktf.ComplexList {

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
  public get(index: number): DataCloudflareMoqRelayConfigUpstreamsUpstreamsOutputReference {
    return new DataCloudflareMoqRelayConfigUpstreamsUpstreamsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataCloudflareMoqRelayConfigUpstreams {
}

export function dataCloudflareMoqRelayConfigUpstreamsToTerraform(struct?: DataCloudflareMoqRelayConfigUpstreams): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataCloudflareMoqRelayConfigUpstreamsToHclTerraform(struct?: DataCloudflareMoqRelayConfigUpstreams): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataCloudflareMoqRelayConfigUpstreamsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataCloudflareMoqRelayConfigUpstreams | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataCloudflareMoqRelayConfigUpstreams | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // enabled - computed: true, optional: false, required: false
  public get enabled() {
    return this.getBooleanAttribute('enabled');
  }

  // upstreams - computed: true, optional: false, required: false
  private _upstreams = new DataCloudflareMoqRelayConfigUpstreamsUpstreamsList(this, "upstreams", false);
  public get upstreams() {
    return this._upstreams;
  }
}
export interface DataCloudflareMoqRelayConfigA {
}

export function dataCloudflareMoqRelayConfigAToTerraform(struct?: DataCloudflareMoqRelayConfigA): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataCloudflareMoqRelayConfigAToHclTerraform(struct?: DataCloudflareMoqRelayConfigA): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataCloudflareMoqRelayConfigAOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataCloudflareMoqRelayConfigA | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataCloudflareMoqRelayConfigA | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // lingering_subscribe - computed: true, optional: false, required: false
  private _lingeringSubscribe = new DataCloudflareMoqRelayConfigLingeringSubscribeOutputReference(this, "lingering_subscribe");
  public get lingeringSubscribe() {
    return this._lingeringSubscribe;
  }

  // upstreams - computed: true, optional: false, required: false
  private _upstreams = new DataCloudflareMoqRelayConfigUpstreamsOutputReference(this, "upstreams");
  public get upstreams() {
    return this._upstreams;
  }
}
export interface DataCloudflareMoqRelayFilter {
  /**
  * Sort order by `created`. When true, results are returned oldest-first
  * (ascending); otherwise newest-first (descending, the default).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.22.0/docs/data-sources/moq_relay#asc DataCloudflareMoqRelay#asc}
  */
  readonly asc?: boolean | cdktf.IResolvable;
  /**
  * Cursor for pagination. Returns relays created strictly after this
  * RFC 3339 timestamp (typically the `created` value of the last item
  * on the current page, to fetch the next page).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.22.0/docs/data-sources/moq_relay#created_after DataCloudflareMoqRelay#created_after}
  */
  readonly createdAfter?: string;
  /**
  * Cursor for pagination. Returns relays created strictly before this
  * RFC 3339 timestamp (typically the `created` value of the first item
  * on the current page, to fetch the previous page).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.22.0/docs/data-sources/moq_relay#created_before DataCloudflareMoqRelay#created_before}
  */
  readonly createdBefore?: string;
  /**
  * Maximum number of relays to return per page.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.22.0/docs/data-sources/moq_relay#per_page DataCloudflareMoqRelay#per_page}
  */
  readonly perPage?: number;
}

export function dataCloudflareMoqRelayFilterToTerraform(struct?: DataCloudflareMoqRelayFilter | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    asc: cdktf.booleanToTerraform(struct!.asc),
    created_after: cdktf.stringToTerraform(struct!.createdAfter),
    created_before: cdktf.stringToTerraform(struct!.createdBefore),
    per_page: cdktf.numberToTerraform(struct!.perPage),
  }
}


export function dataCloudflareMoqRelayFilterToHclTerraform(struct?: DataCloudflareMoqRelayFilter | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    asc: {
      value: cdktf.booleanToHclTerraform(struct!.asc),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    created_after: {
      value: cdktf.stringToHclTerraform(struct!.createdAfter),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    created_before: {
      value: cdktf.stringToHclTerraform(struct!.createdBefore),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    per_page: {
      value: cdktf.numberToHclTerraform(struct!.perPage),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataCloudflareMoqRelayFilterOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataCloudflareMoqRelayFilter | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._asc !== undefined) {
      hasAnyValues = true;
      internalValueResult.asc = this._asc;
    }
    if (this._createdAfter !== undefined) {
      hasAnyValues = true;
      internalValueResult.createdAfter = this._createdAfter;
    }
    if (this._createdBefore !== undefined) {
      hasAnyValues = true;
      internalValueResult.createdBefore = this._createdBefore;
    }
    if (this._perPage !== undefined) {
      hasAnyValues = true;
      internalValueResult.perPage = this._perPage;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataCloudflareMoqRelayFilter | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._asc = undefined;
      this._createdAfter = undefined;
      this._createdBefore = undefined;
      this._perPage = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._asc = value.asc;
      this._createdAfter = value.createdAfter;
      this._createdBefore = value.createdBefore;
      this._perPage = value.perPage;
    }
  }

  // asc - computed: true, optional: true, required: false
  private _asc?: boolean | cdktf.IResolvable; 
  public get asc() {
    return this.getBooleanAttribute('asc');
  }
  public set asc(value: boolean | cdktf.IResolvable) {
    this._asc = value;
  }
  public resetAsc() {
    this._asc = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ascInput() {
    return this._asc;
  }

  // created_after - computed: false, optional: true, required: false
  private _createdAfter?: string; 
  public get createdAfter() {
    return this.getStringAttribute('created_after');
  }
  public set createdAfter(value: string) {
    this._createdAfter = value;
  }
  public resetCreatedAfter() {
    this._createdAfter = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get createdAfterInput() {
    return this._createdAfter;
  }

  // created_before - computed: false, optional: true, required: false
  private _createdBefore?: string; 
  public get createdBefore() {
    return this.getStringAttribute('created_before');
  }
  public set createdBefore(value: string) {
    this._createdBefore = value;
  }
  public resetCreatedBefore() {
    this._createdBefore = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get createdBeforeInput() {
    return this._createdBefore;
  }

  // per_page - computed: false, optional: true, required: false
  private _perPage?: number; 
  public get perPage() {
    return this.getNumberAttribute('per_page');
  }
  public set perPage(value: number) {
    this._perPage = value;
  }
  public resetPerPage() {
    this._perPage = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get perPageInput() {
    return this._perPage;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.22.0/docs/data-sources/moq_relay cloudflare_moq_relay}
*/
export class DataCloudflareMoqRelay extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "cloudflare_moq_relay";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataCloudflareMoqRelay resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataCloudflareMoqRelay to import
  * @param importFromId The id of the existing DataCloudflareMoqRelay that should be imported. Refer to the {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.22.0/docs/data-sources/moq_relay#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataCloudflareMoqRelay to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "cloudflare_moq_relay", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.22.0/docs/data-sources/moq_relay cloudflare_moq_relay} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataCloudflareMoqRelayConfig
  */
  public constructor(scope: Construct, id: string, config: DataCloudflareMoqRelayConfig) {
    super(scope, id, {
      terraformResourceType: 'cloudflare_moq_relay',
      terraformGeneratorMetadata: {
        providerName: 'cloudflare',
        providerVersion: '5.22.0'
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
    this._relayId = config.relayId;
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

  // config - computed: true, optional: false, required: false
  private _config = new DataCloudflareMoqRelayConfigAOutputReference(this, "config");
  public get config() {
    return this._config;
  }

  // created - computed: true, optional: false, required: false
  public get created() {
    return this.getStringAttribute('created');
  }

  // filter - computed: false, optional: true, required: false
  private _filter = new DataCloudflareMoqRelayFilterOutputReference(this, "filter");
  public get filter() {
    return this._filter;
  }
  public putFilter(value: DataCloudflareMoqRelayFilter) {
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

  // modified - computed: true, optional: false, required: false
  public get modified() {
    return this.getStringAttribute('modified');
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // relay_id - computed: false, optional: true, required: false
  private _relayId?: string; 
  public get relayId() {
    return this.getStringAttribute('relay_id');
  }
  public set relayId(value: string) {
    this._relayId = value;
  }
  public resetRelayId() {
    this._relayId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get relayIdInput() {
    return this._relayId;
  }

  // status - computed: true, optional: false, required: false
  public get status() {
    return this.getStringAttribute('status');
  }

  // uid - computed: true, optional: false, required: false
  public get uid() {
    return this.getStringAttribute('uid');
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      account_id: cdktf.stringToTerraform(this._accountId),
      filter: dataCloudflareMoqRelayFilterToTerraform(this._filter.internalValue),
      relay_id: cdktf.stringToTerraform(this._relayId),
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
        value: dataCloudflareMoqRelayFilterToHclTerraform(this._filter.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "DataCloudflareMoqRelayFilter",
      },
      relay_id: {
        value: cdktf.stringToHclTerraform(this._relayId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
