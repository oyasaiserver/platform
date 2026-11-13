// https://registry.terraform.io/providers/cloudflare/cloudflare/5.29.0/docs/data-sources/zero_trust_casb_integration
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataCloudflareZeroTrustCasbIntegrationConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.29.0/docs/data-sources/zero_trust_casb_integration#account_id DataCloudflareZeroTrustCasbIntegration#account_id}
  */
  readonly accountId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.29.0/docs/data-sources/zero_trust_casb_integration#filter DataCloudflareZeroTrustCasbIntegration#filter}
  */
  readonly filter?: DataCloudflareZeroTrustCasbIntegrationFilter;
  /**
  * Integration ID to look up. Exactly one of `id` or `filter` must be configured.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.29.0/docs/data-sources/zero_trust_casb_integration#id DataCloudflareZeroTrustCasbIntegration#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
}
export interface DataCloudflareZeroTrustCasbIntegrationAuthorizationLink {
}

export function dataCloudflareZeroTrustCasbIntegrationAuthorizationLinkToTerraform(struct?: DataCloudflareZeroTrustCasbIntegrationAuthorizationLink): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataCloudflareZeroTrustCasbIntegrationAuthorizationLinkToHclTerraform(struct?: DataCloudflareZeroTrustCasbIntegrationAuthorizationLink): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataCloudflareZeroTrustCasbIntegrationAuthorizationLinkOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataCloudflareZeroTrustCasbIntegrationAuthorizationLink | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataCloudflareZeroTrustCasbIntegrationAuthorizationLink | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // components - computed: true, optional: false, required: false
  private _components = new cdktf.StringMap(this, "components");
  public get components() {
    return this._components;
  }

  // link - computed: true, optional: false, required: false
  public get link() {
    return this.getStringAttribute('link');
  }
}
export interface DataCloudflareZeroTrustCasbIntegrationFilter {
  /**
  * Filter by application/vendor (e.g., GOOGLE_WORKSPACE, MICROSOFT_INTERNAL).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.29.0/docs/data-sources/zero_trust_casb_integration#application DataCloudflareZeroTrustCasbIntegration#application}
  */
  readonly application?: string;
  /**
  * Direction to order results.
  * Available values: "asc", "desc".
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.29.0/docs/data-sources/zero_trust_casb_integration#direction DataCloudflareZeroTrustCasbIntegration#direction}
  */
  readonly direction?: string;
  /**
  * Filter by DLP enabled status (true/false).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.29.0/docs/data-sources/zero_trust_casb_integration#dlp_enabled DataCloudflareZeroTrustCasbIntegration#dlp_enabled}
  */
  readonly dlpEnabled?: boolean | cdktf.IResolvable;
  /**
  * Field to order results by.
  * Available values: "application", "created", "name", "status".
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.29.0/docs/data-sources/zero_trust_casb_integration#order DataCloudflareZeroTrustCasbIntegration#order}
  */
  readonly order?: string;
  /**
  * Page number within the paginated result set.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.29.0/docs/data-sources/zero_trust_casb_integration#page DataCloudflareZeroTrustCasbIntegration#page}
  */
  readonly page?: number;
  /**
  * Number of results per page.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.29.0/docs/data-sources/zero_trust_casb_integration#page_size DataCloudflareZeroTrustCasbIntegration#page_size}
  */
  readonly pageSize?: number;
  /**
  * Search integrations by name or application.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.29.0/docs/data-sources/zero_trust_casb_integration#search DataCloudflareZeroTrustCasbIntegration#search}
  */
  readonly search?: string;
  /**
  * Filter by integration status.
  * Available values: "Healthy", "Initializing", "Offline", "Unhealthy".
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.29.0/docs/data-sources/zero_trust_casb_integration#status DataCloudflareZeroTrustCasbIntegration#status}
  */
  readonly status?: string;
  /**
  * Filter by one enabled use case (for example, casb or ces).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.29.0/docs/data-sources/zero_trust_casb_integration#use_cases DataCloudflareZeroTrustCasbIntegration#use_cases}
  */
  readonly useCases?: string;
}

export function dataCloudflareZeroTrustCasbIntegrationFilterToTerraform(struct?: DataCloudflareZeroTrustCasbIntegrationFilter | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    application: cdktf.stringToTerraform(struct!.application),
    direction: cdktf.stringToTerraform(struct!.direction),
    dlp_enabled: cdktf.booleanToTerraform(struct!.dlpEnabled),
    order: cdktf.stringToTerraform(struct!.order),
    page: cdktf.numberToTerraform(struct!.page),
    page_size: cdktf.numberToTerraform(struct!.pageSize),
    search: cdktf.stringToTerraform(struct!.search),
    status: cdktf.stringToTerraform(struct!.status),
    use_cases: cdktf.stringToTerraform(struct!.useCases),
  }
}


export function dataCloudflareZeroTrustCasbIntegrationFilterToHclTerraform(struct?: DataCloudflareZeroTrustCasbIntegrationFilter | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    application: {
      value: cdktf.stringToHclTerraform(struct!.application),
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
    dlp_enabled: {
      value: cdktf.booleanToHclTerraform(struct!.dlpEnabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    order: {
      value: cdktf.stringToHclTerraform(struct!.order),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    page: {
      value: cdktf.numberToHclTerraform(struct!.page),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    page_size: {
      value: cdktf.numberToHclTerraform(struct!.pageSize),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    search: {
      value: cdktf.stringToHclTerraform(struct!.search),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    status: {
      value: cdktf.stringToHclTerraform(struct!.status),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    use_cases: {
      value: cdktf.stringToHclTerraform(struct!.useCases),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataCloudflareZeroTrustCasbIntegrationFilterOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataCloudflareZeroTrustCasbIntegrationFilter | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._application !== undefined) {
      hasAnyValues = true;
      internalValueResult.application = this._application;
    }
    if (this._direction !== undefined) {
      hasAnyValues = true;
      internalValueResult.direction = this._direction;
    }
    if (this._dlpEnabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.dlpEnabled = this._dlpEnabled;
    }
    if (this._order !== undefined) {
      hasAnyValues = true;
      internalValueResult.order = this._order;
    }
    if (this._page !== undefined) {
      hasAnyValues = true;
      internalValueResult.page = this._page;
    }
    if (this._pageSize !== undefined) {
      hasAnyValues = true;
      internalValueResult.pageSize = this._pageSize;
    }
    if (this._search !== undefined) {
      hasAnyValues = true;
      internalValueResult.search = this._search;
    }
    if (this._status !== undefined) {
      hasAnyValues = true;
      internalValueResult.status = this._status;
    }
    if (this._useCases !== undefined) {
      hasAnyValues = true;
      internalValueResult.useCases = this._useCases;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataCloudflareZeroTrustCasbIntegrationFilter | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._application = undefined;
      this._direction = undefined;
      this._dlpEnabled = undefined;
      this._order = undefined;
      this._page = undefined;
      this._pageSize = undefined;
      this._search = undefined;
      this._status = undefined;
      this._useCases = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._application = value.application;
      this._direction = value.direction;
      this._dlpEnabled = value.dlpEnabled;
      this._order = value.order;
      this._page = value.page;
      this._pageSize = value.pageSize;
      this._search = value.search;
      this._status = value.status;
      this._useCases = value.useCases;
    }
  }

  // application - computed: false, optional: true, required: false
  private _application?: string; 
  public get application() {
    return this.getStringAttribute('application');
  }
  public set application(value: string) {
    this._application = value;
  }
  public resetApplication() {
    this._application = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get applicationInput() {
    return this._application;
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

  // dlp_enabled - computed: false, optional: true, required: false
  private _dlpEnabled?: boolean | cdktf.IResolvable; 
  public get dlpEnabled() {
    return this.getBooleanAttribute('dlp_enabled');
  }
  public set dlpEnabled(value: boolean | cdktf.IResolvable) {
    this._dlpEnabled = value;
  }
  public resetDlpEnabled() {
    this._dlpEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dlpEnabledInput() {
    return this._dlpEnabled;
  }

  // order - computed: false, optional: true, required: false
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

  // page - computed: false, optional: true, required: false
  private _page?: number; 
  public get page() {
    return this.getNumberAttribute('page');
  }
  public set page(value: number) {
    this._page = value;
  }
  public resetPage() {
    this._page = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pageInput() {
    return this._page;
  }

  // page_size - computed: false, optional: true, required: false
  private _pageSize?: number; 
  public get pageSize() {
    return this.getNumberAttribute('page_size');
  }
  public set pageSize(value: number) {
    this._pageSize = value;
  }
  public resetPageSize() {
    this._pageSize = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pageSizeInput() {
    return this._pageSize;
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

  // use_cases - computed: false, optional: true, required: false
  private _useCases?: string; 
  public get useCases() {
    return this.getStringAttribute('use_cases');
  }
  public set useCases(value: string) {
    this._useCases = value;
  }
  public resetUseCases() {
    this._useCases = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get useCasesInput() {
    return this._useCases;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.29.0/docs/data-sources/zero_trust_casb_integration cloudflare_zero_trust_casb_integration}
*/
export class DataCloudflareZeroTrustCasbIntegration extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "cloudflare_zero_trust_casb_integration";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataCloudflareZeroTrustCasbIntegration resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataCloudflareZeroTrustCasbIntegration to import
  * @param importFromId The id of the existing DataCloudflareZeroTrustCasbIntegration that should be imported. Refer to the {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.29.0/docs/data-sources/zero_trust_casb_integration#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataCloudflareZeroTrustCasbIntegration to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "cloudflare_zero_trust_casb_integration", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.29.0/docs/data-sources/zero_trust_casb_integration cloudflare_zero_trust_casb_integration} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataCloudflareZeroTrustCasbIntegrationConfig
  */
  public constructor(scope: Construct, id: string, config: DataCloudflareZeroTrustCasbIntegrationConfig) {
    super(scope, id, {
      terraformResourceType: 'cloudflare_zero_trust_casb_integration',
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

  // application - computed: true, optional: false, required: false
  private _application = new cdktf.StringMap(this, "application");
  public get application() {
    return this._application;
  }

  // auth_method - computed: true, optional: false, required: false
  private _authMethod = new cdktf.StringMap(this, "auth_method");
  public get authMethod() {
    return this._authMethod;
  }

  // authorization_link - computed: true, optional: false, required: false
  private _authorizationLink = new DataCloudflareZeroTrustCasbIntegrationAuthorizationLinkOutputReference(this, "authorization_link");
  public get authorizationLink() {
    return this._authorizationLink;
  }

  // created - computed: true, optional: false, required: false
  public get created() {
    return this.getStringAttribute('created');
  }

  // credentials_expiry - computed: true, optional: false, required: false
  public get credentialsExpiry() {
    return this.getStringAttribute('credentials_expiry');
  }

  // dlp_profiles - computed: true, optional: false, required: false
  public get dlpProfiles() {
    return this.getListAttribute('dlp_profiles');
  }

  // filter - computed: false, optional: true, required: false
  private _filter = new DataCloudflareZeroTrustCasbIntegrationFilterOutputReference(this, "filter");
  public get filter() {
    return this._filter;
  }
  public putFilter(value: DataCloudflareZeroTrustCasbIntegrationFilter) {
    this._filter.internalValue = value;
  }
  public resetFilter() {
    this._filter.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get filterInput() {
    return this._filter.internalValue;
  }

  // health_details - computed: true, optional: false, required: false
  private _healthDetails = new cdktf.StringMapList(this, "health_details", false);
  public get healthDetails() {
    return this._healthDetails;
  }

  // id - computed: true, optional: true, required: false
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

  // is_paused - computed: true, optional: false, required: false
  public get isPaused() {
    return this.getBooleanAttribute('is_paused');
  }

  // last_hydrated - computed: true, optional: false, required: false
  public get lastHydrated() {
    return this.getStringAttribute('last_hydrated');
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // status - computed: true, optional: false, required: false
  public get status() {
    return this.getStringAttribute('status');
  }

  // updated - computed: true, optional: false, required: false
  public get updated() {
    return this.getStringAttribute('updated');
  }

  // use_cases - computed: true, optional: false, required: false
  private _useCases = new cdktf.StringMapList(this, "use_cases", false);
  public get useCases() {
    return this._useCases;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      account_id: cdktf.stringToTerraform(this._accountId),
      filter: dataCloudflareZeroTrustCasbIntegrationFilterToTerraform(this._filter.internalValue),
      id: cdktf.stringToTerraform(this._id),
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
        value: dataCloudflareZeroTrustCasbIntegrationFilterToHclTerraform(this._filter.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "DataCloudflareZeroTrustCasbIntegrationFilter",
      },
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
