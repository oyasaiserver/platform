// https://registry.terraform.io/providers/cloudflare/cloudflare/5.25.0/docs/data-sources/zero_trust_resource_library_application
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataCloudflareZeroTrustResourceLibraryApplicationConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.25.0/docs/data-sources/zero_trust_resource_library_application#account_id DataCloudflareZeroTrustResourceLibraryApplication#account_id}
  */
  readonly accountId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.25.0/docs/data-sources/zero_trust_resource_library_application#filter DataCloudflareZeroTrustResourceLibraryApplication#filter}
  */
  readonly filter?: DataCloudflareZeroTrustResourceLibraryApplicationFilter;
  /**
  * Returns the application ID.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.25.0/docs/data-sources/zero_trust_resource_library_application#id DataCloudflareZeroTrustResourceLibraryApplication#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: number;
}
export interface DataCloudflareZeroTrustResourceLibraryApplicationFilter {
  /**
  * Return only the listed properties on each application, as a comma-separated list.
  * Use this to keep responses small when you only need part of each application — for
  * example populating a picker with `fields=id,name` instead of downloading every
  * hostname and IP subnet.
  * 
  * Omit this parameter to receive the full application object.
  * 
  * `id` is always returned.
  * 
  * Selectable properties: `id`, `name`, `human_id`, `version`, `hostnames`,
  * `support_domains`, `ip_subnets`, `port_protocols`, `supported`, `gen_ai_score`,
  * `application_confidence_score`, `created_at`, `updated_at`, `review_status`.
  * 
  * Unknown or empty property names return `400`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.25.0/docs/data-sources/zero_trust_resource_library_application#fields DataCloudflareZeroTrustResourceLibraryApplication#fields}
  */
  readonly fields?: string;
  /**
  * Filter applications using key:value format. Supported filter keys:
  * - name: Filter by application name (e.g., name:HR)
  * - id: Filter by application ID (e.g., id:498)
  * - human_id: Filter by human-readable ID (e.g., human_id:HR)
  * - hostname: Filter by hostname or support domain (e.g., hostname:portal.example.com)
  * - source: Filter by application source name (e.g., source:cloudflare)
  * - ip_subnet: Filter by IP subnet using CIDR containment — returns applications where any stored subnet contains the search value (e.g., ip_subnet:10.0.1.5/32 matches apps with 10.0.0.0/16)
  * - category_id: Filter by category ID (e.g., category_id:12).
  * - category_name: Filter by category name (e.g., category_name:HR).
  * - supported: Filter by supported Cloudflare product (e.g., supported:ACCESS). Values: GATEWAY, ACCESS, CASB.
  * - review_status: Filter by the account's Gateway review status. Values: approved, unapproved, in_review, unreviewed.
  * .
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.25.0/docs/data-sources/zero_trust_resource_library_application#filter DataCloudflareZeroTrustResourceLibraryApplication#filter}
  */
  readonly filter?: string;
  /**
  * Limit of number of results to return (max 250).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.25.0/docs/data-sources/zero_trust_resource_library_application#limit DataCloudflareZeroTrustResourceLibraryApplication#limit}
  */
  readonly limit?: number;
  /**
  * Offset of results to return.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.25.0/docs/data-sources/zero_trust_resource_library_application#offset DataCloudflareZeroTrustResourceLibraryApplication#offset}
  */
  readonly offset?: number;
  /**
  * Order results using field:direction format. Supported fields are name, id, human_id,
  * category_id, application_type, application_confidence_score, and gen_ai_score.
  * Supported directions are asc and desc. Ignored when search is provided; results are
  * ranked by relevance instead.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.25.0/docs/data-sources/zero_trust_resource_library_application#order_by DataCloudflareZeroTrustResourceLibraryApplication#order_by}
  */
  readonly orderBy?: string;
  /**
  * Fuzzy search across application name and hostnames. Results are ranked by relevance. Must be between 2 and 200 characters. Can be combined with filter parameters.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.25.0/docs/data-sources/zero_trust_resource_library_application#search DataCloudflareZeroTrustResourceLibraryApplication#search}
  */
  readonly search?: string;
}

export function dataCloudflareZeroTrustResourceLibraryApplicationFilterToTerraform(struct?: DataCloudflareZeroTrustResourceLibraryApplicationFilter | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    fields: cdktf.stringToTerraform(struct!.fields),
    filter: cdktf.stringToTerraform(struct!.filter),
    limit: cdktf.numberToTerraform(struct!.limit),
    offset: cdktf.numberToTerraform(struct!.offset),
    order_by: cdktf.stringToTerraform(struct!.orderBy),
    search: cdktf.stringToTerraform(struct!.search),
  }
}


export function dataCloudflareZeroTrustResourceLibraryApplicationFilterToHclTerraform(struct?: DataCloudflareZeroTrustResourceLibraryApplicationFilter | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    fields: {
      value: cdktf.stringToHclTerraform(struct!.fields),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    filter: {
      value: cdktf.stringToHclTerraform(struct!.filter),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
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

export class DataCloudflareZeroTrustResourceLibraryApplicationFilterOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataCloudflareZeroTrustResourceLibraryApplicationFilter | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._fields !== undefined) {
      hasAnyValues = true;
      internalValueResult.fields = this._fields;
    }
    if (this._filter !== undefined) {
      hasAnyValues = true;
      internalValueResult.filter = this._filter;
    }
    if (this._limit !== undefined) {
      hasAnyValues = true;
      internalValueResult.limit = this._limit;
    }
    if (this._offset !== undefined) {
      hasAnyValues = true;
      internalValueResult.offset = this._offset;
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

  public set internalValue(value: DataCloudflareZeroTrustResourceLibraryApplicationFilter | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._fields = undefined;
      this._filter = undefined;
      this._limit = undefined;
      this._offset = undefined;
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
      this._fields = value.fields;
      this._filter = value.filter;
      this._limit = value.limit;
      this._offset = value.offset;
      this._orderBy = value.orderBy;
      this._search = value.search;
    }
  }

  // fields - computed: false, optional: true, required: false
  private _fields?: string; 
  public get fields() {
    return this.getStringAttribute('fields');
  }
  public set fields(value: string) {
    this._fields = value;
  }
  public resetFields() {
    this._fields = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fieldsInput() {
    return this._fields;
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
* Represents a {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.25.0/docs/data-sources/zero_trust_resource_library_application cloudflare_zero_trust_resource_library_application}
*/
export class DataCloudflareZeroTrustResourceLibraryApplication extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "cloudflare_zero_trust_resource_library_application";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataCloudflareZeroTrustResourceLibraryApplication resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataCloudflareZeroTrustResourceLibraryApplication to import
  * @param importFromId The id of the existing DataCloudflareZeroTrustResourceLibraryApplication that should be imported. Refer to the {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.25.0/docs/data-sources/zero_trust_resource_library_application#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataCloudflareZeroTrustResourceLibraryApplication to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "cloudflare_zero_trust_resource_library_application", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.25.0/docs/data-sources/zero_trust_resource_library_application cloudflare_zero_trust_resource_library_application} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataCloudflareZeroTrustResourceLibraryApplicationConfig
  */
  public constructor(scope: Construct, id: string, config: DataCloudflareZeroTrustResourceLibraryApplicationConfig) {
    super(scope, id, {
      terraformResourceType: 'cloudflare_zero_trust_resource_library_application',
      terraformGeneratorMetadata: {
        providerName: 'cloudflare',
        providerVersion: '5.25.0'
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
    this._id = config.id;
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

  // category_id - computed: true, optional: false, required: false
  public get categoryId() {
    return this.getNumberAttribute('category_id');
  }

  // created_at - computed: true, optional: false, required: false
  public get createdAt() {
    return this.getStringAttribute('created_at');
  }

  // filter - computed: false, optional: true, required: false
  private _filter = new DataCloudflareZeroTrustResourceLibraryApplicationFilterOutputReference(this, "filter");
  public get filter() {
    return this._filter;
  }
  public putFilter(value: DataCloudflareZeroTrustResourceLibraryApplicationFilter) {
    this._filter.internalValue = value;
  }
  public resetFilter() {
    this._filter.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get filterInput() {
    return this._filter.internalValue;
  }

  // gen_ai_score - computed: true, optional: false, required: false
  public get genAiScore() {
    return this.getNumberAttribute('gen_ai_score');
  }

  // hostnames - computed: true, optional: false, required: false
  public get hostnames() {
    return cdktf.Fn.tolist(this.getListAttribute('hostnames'));
  }

  // human_id - computed: true, optional: false, required: false
  public get humanId() {
    return this.getStringAttribute('human_id');
  }

  // id - computed: true, optional: true, required: false
  private _id?: number; 
  public get id() {
    return this.getNumberAttribute('id');
  }
  public set id(value: number) {
    this._id = value;
  }
  public resetId() {
    this._id = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get idInput() {
    return this._id;
  }

  // ip_subnets - computed: true, optional: false, required: false
  public get ipSubnets() {
    return cdktf.Fn.tolist(this.getListAttribute('ip_subnets'));
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // port_protocols - computed: true, optional: false, required: false
  public get portProtocols() {
    return cdktf.Fn.tolist(this.getListAttribute('port_protocols'));
  }

  // support_domains - computed: true, optional: false, required: false
  public get supportDomains() {
    return cdktf.Fn.tolist(this.getListAttribute('support_domains'));
  }

  // supported - computed: true, optional: false, required: false
  public get supported() {
    return cdktf.Fn.tolist(this.getListAttribute('supported'));
  }

  // updated_at - computed: true, optional: false, required: false
  public get updatedAt() {
    return this.getStringAttribute('updated_at');
  }

  // version - computed: true, optional: false, required: false
  public get version() {
    return this.getStringAttribute('version');
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      account_id: cdktf.stringToTerraform(this._accountId),
      filter: dataCloudflareZeroTrustResourceLibraryApplicationFilterToTerraform(this._filter.internalValue),
      id: cdktf.numberToTerraform(this._id),
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
        value: dataCloudflareZeroTrustResourceLibraryApplicationFilterToHclTerraform(this._filter.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "DataCloudflareZeroTrustResourceLibraryApplicationFilter",
      },
      id: {
        value: cdktf.numberToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
