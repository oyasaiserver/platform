// https://registry.terraform.io/providers/cloudflare/cloudflare/5.22.0/docs/data-sources/zero_trust_resource_library_applications
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataCloudflareZeroTrustResourceLibraryApplicationsConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.22.0/docs/data-sources/zero_trust_resource_library_applications#account_id DataCloudflareZeroTrustResourceLibraryApplications#account_id}
  */
  readonly accountId: string;
  /**
  * Filter applications using key:value format. Supported filter keys:
  * - name: Filter by application name (e.g., name:HR)
  * - id: Filter by application ID (e.g., id:0b63249c-95bf-4cc0-a7cc-d7faaaf1dac0)
  * - human_id: Filter by human-readable ID (e.g., human_id:HR)
  * - hostname: Filter by hostname or support domain (e.g., hostname:portal.example.com)
  * - source: Filter by application source name (e.g., source:cloudflare)
  * - ip_subnet: Filter by IP subnet using CIDR containment — returns applications where any stored subnet contains the search value (e.g., ip_subnet:10.0.1.5/32 matches apps with 10.0.0.0/16)
  * - intel_id: Filter by Intel API ID (e.g., intel_id:498). also supports multiple values (e.g., intel_id:498,1001)
  * - category_id: Filter by category ID (e.g., category_id:37f8ec03-8766-49d4-9a15-369b044c842c).
  * - category_name: Filter by category name (e.g., category_name:HR).
  * - supported: Filter by supported Cloudflare product (e.g., supported:ACCESS). Values: GATEWAY, ACCESS, CASB.
  * .
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.22.0/docs/data-sources/zero_trust_resource_library_applications#filter DataCloudflareZeroTrustResourceLibraryApplications#filter}
  */
  readonly filter?: string;
  /**
  * Limit of number of results to return (max 250).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.22.0/docs/data-sources/zero_trust_resource_library_applications#limit DataCloudflareZeroTrustResourceLibraryApplications#limit}
  */
  readonly limit?: number;
  /**
  * Max items to fetch, default: 1000
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.22.0/docs/data-sources/zero_trust_resource_library_applications#max_items DataCloudflareZeroTrustResourceLibraryApplications#max_items}
  */
  readonly maxItems?: number;
  /**
  * Offset of results to return.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.22.0/docs/data-sources/zero_trust_resource_library_applications#offset DataCloudflareZeroTrustResourceLibraryApplications#offset}
  */
  readonly offset?: number;
  /**
  * Order results by field name and direction (e.g., name:asc). Ignored when search is provided; results are ranked by relevance instead.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.22.0/docs/data-sources/zero_trust_resource_library_applications#order_by DataCloudflareZeroTrustResourceLibraryApplications#order_by}
  */
  readonly orderBy?: string;
  /**
  * Fuzzy search across application name and hostnames. Results are ranked by relevance. Must be between 2 and 200 characters. Can be combined with filter parameters.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.22.0/docs/data-sources/zero_trust_resource_library_applications#search DataCloudflareZeroTrustResourceLibraryApplications#search}
  */
  readonly search?: string;
}
export interface DataCloudflareZeroTrustResourceLibraryApplicationsResult {
}

export function dataCloudflareZeroTrustResourceLibraryApplicationsResultToTerraform(struct?: DataCloudflareZeroTrustResourceLibraryApplicationsResult): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataCloudflareZeroTrustResourceLibraryApplicationsResultToHclTerraform(struct?: DataCloudflareZeroTrustResourceLibraryApplicationsResult): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataCloudflareZeroTrustResourceLibraryApplicationsResultOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataCloudflareZeroTrustResourceLibraryApplicationsResult | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataCloudflareZeroTrustResourceLibraryApplicationsResult | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // application_confidence_score - computed: true, optional: false, required: false
  public get applicationConfidenceScore() {
    return this.getNumberAttribute('application_confidence_score');
  }

  // application_score_composition - computed: true, optional: false, required: false
  public get applicationScoreComposition() {
    return this.getStringAttribute('application_score_composition');
  }

  // application_source - computed: true, optional: false, required: false
  public get applicationSource() {
    return this.getStringAttribute('application_source');
  }

  // application_type - computed: true, optional: false, required: false
  public get applicationType() {
    return this.getStringAttribute('application_type');
  }

  // application_type_description - computed: true, optional: false, required: false
  public get applicationTypeDescription() {
    return this.getStringAttribute('application_type_description');
  }

  // created_at - computed: true, optional: false, required: false
  public get createdAt() {
    return this.getStringAttribute('created_at');
  }

  // gen_ai_score - computed: true, optional: false, required: false
  public get genAiScore() {
    return this.getNumberAttribute('gen_ai_score');
  }

  // hostnames - computed: true, optional: false, required: false
  public get hostnames() {
    return this.getListAttribute('hostnames');
  }

  // human_id - computed: true, optional: false, required: false
  public get humanId() {
    return this.getStringAttribute('human_id');
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // intel_id - computed: true, optional: false, required: false
  public get intelId() {
    return this.getNumberAttribute('intel_id');
  }

  // ip_subnets - computed: true, optional: false, required: false
  public get ipSubnets() {
    return this.getListAttribute('ip_subnets');
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // port_protocols - computed: true, optional: false, required: false
  public get portProtocols() {
    return this.getListAttribute('port_protocols');
  }

  // support_domains - computed: true, optional: false, required: false
  public get supportDomains() {
    return this.getListAttribute('support_domains');
  }

  // supported - computed: true, optional: false, required: false
  public get supported() {
    return this.getListAttribute('supported');
  }

  // updated_at - computed: true, optional: false, required: false
  public get updatedAt() {
    return this.getStringAttribute('updated_at');
  }

  // version - computed: true, optional: false, required: false
  public get version() {
    return this.getStringAttribute('version');
  }
}

export class DataCloudflareZeroTrustResourceLibraryApplicationsResultList extends cdktf.ComplexList {

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
  public get(index: number): DataCloudflareZeroTrustResourceLibraryApplicationsResultOutputReference {
    return new DataCloudflareZeroTrustResourceLibraryApplicationsResultOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.22.0/docs/data-sources/zero_trust_resource_library_applications cloudflare_zero_trust_resource_library_applications}
*/
export class DataCloudflareZeroTrustResourceLibraryApplications extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "cloudflare_zero_trust_resource_library_applications";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataCloudflareZeroTrustResourceLibraryApplications resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataCloudflareZeroTrustResourceLibraryApplications to import
  * @param importFromId The id of the existing DataCloudflareZeroTrustResourceLibraryApplications that should be imported. Refer to the {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.22.0/docs/data-sources/zero_trust_resource_library_applications#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataCloudflareZeroTrustResourceLibraryApplications to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "cloudflare_zero_trust_resource_library_applications", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.22.0/docs/data-sources/zero_trust_resource_library_applications cloudflare_zero_trust_resource_library_applications} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataCloudflareZeroTrustResourceLibraryApplicationsConfig
  */
  public constructor(scope: Construct, id: string, config: DataCloudflareZeroTrustResourceLibraryApplicationsConfig) {
    super(scope, id, {
      terraformResourceType: 'cloudflare_zero_trust_resource_library_applications',
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
    this._filter = config.filter;
    this._limit = config.limit;
    this._maxItems = config.maxItems;
    this._offset = config.offset;
    this._orderBy = config.orderBy;
    this._search = config.search;
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

  // filter - computed: false, optional: true, required: false
  private _filter?: string; 
  public get filter() {
    return this.getStringAttribute('filter');
  }
  public set filter(value: string) {
    this._filter = value;
  }
  public resetFilter() {
    this._filter = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get filterInput() {
    return this._filter;
  }

  // limit - computed: true, optional: true, required: false
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

  // max_items - computed: false, optional: true, required: false
  private _maxItems?: number; 
  public get maxItems() {
    return this.getNumberAttribute('max_items');
  }
  public set maxItems(value: number) {
    this._maxItems = value;
  }
  public resetMaxItems() {
    this._maxItems = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxItemsInput() {
    return this._maxItems;
  }

  // offset - computed: true, optional: true, required: false
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

  // result - computed: true, optional: false, required: false
  private _result = new DataCloudflareZeroTrustResourceLibraryApplicationsResultList(this, "result", false);
  public get result() {
    return this._result;
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

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      account_id: cdktf.stringToTerraform(this._accountId),
      filter: cdktf.stringToTerraform(this._filter),
      limit: cdktf.numberToTerraform(this._limit),
      max_items: cdktf.numberToTerraform(this._maxItems),
      offset: cdktf.numberToTerraform(this._offset),
      order_by: cdktf.stringToTerraform(this._orderBy),
      search: cdktf.stringToTerraform(this._search),
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
        value: cdktf.stringToHclTerraform(this._filter),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      limit: {
        value: cdktf.numberToHclTerraform(this._limit),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      max_items: {
        value: cdktf.numberToHclTerraform(this._maxItems),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      offset: {
        value: cdktf.numberToHclTerraform(this._offset),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      order_by: {
        value: cdktf.stringToHclTerraform(this._orderBy),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      search: {
        value: cdktf.stringToHclTerraform(this._search),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
