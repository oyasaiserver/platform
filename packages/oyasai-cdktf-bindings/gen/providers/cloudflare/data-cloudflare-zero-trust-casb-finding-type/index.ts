// https://registry.terraform.io/providers/cloudflare/cloudflare/5.29.0/docs/data-sources/zero_trust_casb_finding_type
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataCloudflareZeroTrustCasbFindingTypeConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.29.0/docs/data-sources/zero_trust_casb_finding_type#account_id DataCloudflareZeroTrustCasbFindingType#account_id}
  */
  readonly accountId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.29.0/docs/data-sources/zero_trust_casb_finding_type#filter DataCloudflareZeroTrustCasbFindingType#filter}
  */
  readonly filter?: DataCloudflareZeroTrustCasbFindingTypeFilter;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.29.0/docs/data-sources/zero_trust_casb_finding_type#finding_type_id DataCloudflareZeroTrustCasbFindingType#finding_type_id}
  */
  readonly findingTypeId?: string;
}
export interface DataCloudflareZeroTrustCasbFindingTypeCategory {
}

export function dataCloudflareZeroTrustCasbFindingTypeCategoryToTerraform(struct?: DataCloudflareZeroTrustCasbFindingTypeCategory): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataCloudflareZeroTrustCasbFindingTypeCategoryToHclTerraform(struct?: DataCloudflareZeroTrustCasbFindingTypeCategory): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataCloudflareZeroTrustCasbFindingTypeCategoryOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataCloudflareZeroTrustCasbFindingTypeCategory | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataCloudflareZeroTrustCasbFindingTypeCategory | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // observation - computed: true, optional: false, required: false
  public get observation() {
    return this.getStringAttribute('observation');
  }

  // product - computed: true, optional: false, required: false
  public get product() {
    return this.getStringAttribute('product');
  }

  // type - computed: true, optional: false, required: false
  public get type() {
    return this.getStringAttribute('type');
  }
}
export interface DataCloudflareZeroTrustCasbFindingTypeFilter {
  /**
  * Sort direction for the primary field. Defaults to 'desc'.
  * Ties are resolved by case-insensitive name, then ID, both ascending regardless of direction.
  * Available values: "asc", "desc".
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.29.0/docs/data-sources/zero_trust_casb_finding_type#direction DataCloudflareZeroTrustCasbFindingType#direction}
  */
  readonly direction?: string;
  /**
  * Return only finding types updated at or before this RFC 3339 timestamp (inclusive).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.29.0/docs/data-sources/zero_trust_casb_finding_type#max_updated_at DataCloudflareZeroTrustCasbFindingType#max_updated_at}
  */
  readonly maxUpdatedAt?: string;
  /**
  * Return only finding types updated at or after this RFC 3339 timestamp (inclusive).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.29.0/docs/data-sources/zero_trust_casb_finding_type#min_updated_at DataCloudflareZeroTrustCasbFindingType#min_updated_at}
  */
  readonly minUpdatedAt?: string;
  /**
  * Field to sort by (case-insensitive). Defaults to 'created'.
  * Name and vendor sorting is case-insensitive; vendor uses friendly provider names.
  * Ascending order: type Content then Posture; origin custom then system;
  * severity Low, Medium, High, Critical.
  * Available values: "created", "updated", "match_count", "name", "vendor", "type", "origin", "severity".
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.29.0/docs/data-sources/zero_trust_casb_finding_type#order DataCloudflareZeroTrustCasbFindingType#order}
  */
  readonly order?: string;
  /**
  * Filter finding types by origin. Supports multiple comma-separated, case-insensitive values.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.29.0/docs/data-sources/zero_trust_casb_finding_type#origins DataCloudflareZeroTrustCasbFindingType#origins}
  */
  readonly origins?: string[];
  /**
  * When true, return only quarantined finding types; when false, return only non-quarantined finding types. Omit to return both.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.29.0/docs/data-sources/zero_trust_casb_finding_type#quarantined DataCloudflareZeroTrustCasbFindingType#quarantined}
  */
  readonly quarantined?: boolean | cdktf.IResolvable;
  /**
  * Filter finding types by name or ID (case-insensitive substring match).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.29.0/docs/data-sources/zero_trust_casb_finding_type#search DataCloudflareZeroTrustCasbFindingType#search}
  */
  readonly search?: string;
  /**
  * Filter finding types by severity. Supports multiple comma-separated, case-insensitive values.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.29.0/docs/data-sources/zero_trust_casb_finding_type#severities DataCloudflareZeroTrustCasbFindingType#severities}
  */
  readonly severities?: string[];
  /**
  * Filter finding types by category type. Supports multiple comma-separated, case-insensitive values.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.29.0/docs/data-sources/zero_trust_casb_finding_type#types DataCloudflareZeroTrustCasbFindingType#types}
  */
  readonly types?: string[];
  /**
  * Filter finding types by vendor. Supports multiple comma-separated values. Each value may be either the vendor enum (GOOGLE_WORKSPACE) or the friendly name returned by the read routes (Google Workspace).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.29.0/docs/data-sources/zero_trust_casb_finding_type#vendors DataCloudflareZeroTrustCasbFindingType#vendors}
  */
  readonly vendors?: string[];
}

export function dataCloudflareZeroTrustCasbFindingTypeFilterToTerraform(struct?: DataCloudflareZeroTrustCasbFindingTypeFilter | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    direction: cdktf.stringToTerraform(struct!.direction),
    max_updated_at: cdktf.stringToTerraform(struct!.maxUpdatedAt),
    min_updated_at: cdktf.stringToTerraform(struct!.minUpdatedAt),
    order: cdktf.stringToTerraform(struct!.order),
    origins: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.origins),
    quarantined: cdktf.booleanToTerraform(struct!.quarantined),
    search: cdktf.stringToTerraform(struct!.search),
    severities: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.severities),
    types: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.types),
    vendors: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.vendors),
  }
}


export function dataCloudflareZeroTrustCasbFindingTypeFilterToHclTerraform(struct?: DataCloudflareZeroTrustCasbFindingTypeFilter | cdktf.IResolvable): any {
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
    max_updated_at: {
      value: cdktf.stringToHclTerraform(struct!.maxUpdatedAt),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    min_updated_at: {
      value: cdktf.stringToHclTerraform(struct!.minUpdatedAt),
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
    origins: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.origins),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    quarantined: {
      value: cdktf.booleanToHclTerraform(struct!.quarantined),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    search: {
      value: cdktf.stringToHclTerraform(struct!.search),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    severities: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.severities),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    types: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.types),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    vendors: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.vendors),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataCloudflareZeroTrustCasbFindingTypeFilterOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataCloudflareZeroTrustCasbFindingTypeFilter | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._direction !== undefined) {
      hasAnyValues = true;
      internalValueResult.direction = this._direction;
    }
    if (this._maxUpdatedAt !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxUpdatedAt = this._maxUpdatedAt;
    }
    if (this._minUpdatedAt !== undefined) {
      hasAnyValues = true;
      internalValueResult.minUpdatedAt = this._minUpdatedAt;
    }
    if (this._order !== undefined) {
      hasAnyValues = true;
      internalValueResult.order = this._order;
    }
    if (this._origins !== undefined) {
      hasAnyValues = true;
      internalValueResult.origins = this._origins;
    }
    if (this._quarantined !== undefined) {
      hasAnyValues = true;
      internalValueResult.quarantined = this._quarantined;
    }
    if (this._search !== undefined) {
      hasAnyValues = true;
      internalValueResult.search = this._search;
    }
    if (this._severities !== undefined) {
      hasAnyValues = true;
      internalValueResult.severities = this._severities;
    }
    if (this._types !== undefined) {
      hasAnyValues = true;
      internalValueResult.types = this._types;
    }
    if (this._vendors !== undefined) {
      hasAnyValues = true;
      internalValueResult.vendors = this._vendors;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataCloudflareZeroTrustCasbFindingTypeFilter | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._direction = undefined;
      this._maxUpdatedAt = undefined;
      this._minUpdatedAt = undefined;
      this._order = undefined;
      this._origins = undefined;
      this._quarantined = undefined;
      this._search = undefined;
      this._severities = undefined;
      this._types = undefined;
      this._vendors = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._direction = value.direction;
      this._maxUpdatedAt = value.maxUpdatedAt;
      this._minUpdatedAt = value.minUpdatedAt;
      this._order = value.order;
      this._origins = value.origins;
      this._quarantined = value.quarantined;
      this._search = value.search;
      this._severities = value.severities;
      this._types = value.types;
      this._vendors = value.vendors;
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

  // max_updated_at - computed: false, optional: true, required: false
  private _maxUpdatedAt?: string; 
  public get maxUpdatedAt() {
    return this.getStringAttribute('max_updated_at');
  }
  public set maxUpdatedAt(value: string) {
    this._maxUpdatedAt = value;
  }
  public resetMaxUpdatedAt() {
    this._maxUpdatedAt = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxUpdatedAtInput() {
    return this._maxUpdatedAt;
  }

  // min_updated_at - computed: false, optional: true, required: false
  private _minUpdatedAt?: string; 
  public get minUpdatedAt() {
    return this.getStringAttribute('min_updated_at');
  }
  public set minUpdatedAt(value: string) {
    this._minUpdatedAt = value;
  }
  public resetMinUpdatedAt() {
    this._minUpdatedAt = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get minUpdatedAtInput() {
    return this._minUpdatedAt;
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

  // origins - computed: false, optional: true, required: false
  private _origins?: string[]; 
  public get origins() {
    return this.getListAttribute('origins');
  }
  public set origins(value: string[]) {
    this._origins = value;
  }
  public resetOrigins() {
    this._origins = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get originsInput() {
    return this._origins;
  }

  // quarantined - computed: false, optional: true, required: false
  private _quarantined?: boolean | cdktf.IResolvable; 
  public get quarantined() {
    return this.getBooleanAttribute('quarantined');
  }
  public set quarantined(value: boolean | cdktf.IResolvable) {
    this._quarantined = value;
  }
  public resetQuarantined() {
    this._quarantined = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get quarantinedInput() {
    return this._quarantined;
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

  // severities - computed: false, optional: true, required: false
  private _severities?: string[]; 
  public get severities() {
    return this.getListAttribute('severities');
  }
  public set severities(value: string[]) {
    this._severities = value;
  }
  public resetSeverities() {
    this._severities = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get severitiesInput() {
    return this._severities;
  }

  // types - computed: false, optional: true, required: false
  private _types?: string[]; 
  public get types() {
    return this.getListAttribute('types');
  }
  public set types(value: string[]) {
    this._types = value;
  }
  public resetTypes() {
    this._types = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get typesInput() {
    return this._types;
  }

  // vendors - computed: false, optional: true, required: false
  private _vendors?: string[]; 
  public get vendors() {
    return this.getListAttribute('vendors');
  }
  public set vendors(value: string[]) {
    this._vendors = value;
  }
  public resetVendors() {
    this._vendors = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vendorsInput() {
    return this._vendors;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.29.0/docs/data-sources/zero_trust_casb_finding_type cloudflare_zero_trust_casb_finding_type}
*/
export class DataCloudflareZeroTrustCasbFindingType extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "cloudflare_zero_trust_casb_finding_type";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataCloudflareZeroTrustCasbFindingType resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataCloudflareZeroTrustCasbFindingType to import
  * @param importFromId The id of the existing DataCloudflareZeroTrustCasbFindingType that should be imported. Refer to the {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.29.0/docs/data-sources/zero_trust_casb_finding_type#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataCloudflareZeroTrustCasbFindingType to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "cloudflare_zero_trust_casb_finding_type", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.29.0/docs/data-sources/zero_trust_casb_finding_type cloudflare_zero_trust_casb_finding_type} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataCloudflareZeroTrustCasbFindingTypeConfig
  */
  public constructor(scope: Construct, id: string, config: DataCloudflareZeroTrustCasbFindingTypeConfig) {
    super(scope, id, {
      terraformResourceType: 'cloudflare_zero_trust_casb_finding_type',
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
    this._findingTypeId = config.findingTypeId;
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

  // applies_to_all_integrations - computed: true, optional: false, required: false
  public get appliesToAllIntegrations() {
    return this.getBooleanAttribute('applies_to_all_integrations');
  }

  // asset_class - computed: true, optional: false, required: false
  public get assetClass() {
    return this.getStringAttribute('asset_class');
  }

  // asset_vendor - computed: true, optional: false, required: false
  public get assetVendor() {
    return this.getStringAttribute('asset_vendor');
  }

  // category - computed: true, optional: false, required: false
  private _category = new DataCloudflareZeroTrustCasbFindingTypeCategoryOutputReference(this, "category");
  public get category() {
    return this._category;
  }

  // created_at - computed: true, optional: false, required: false
  public get createdAt() {
    return this.getStringAttribute('created_at');
  }

  // description - computed: true, optional: false, required: false
  public get description() {
    return this.getStringAttribute('description');
  }

  // expression - computed: true, optional: false, required: false
  public get expression() {
    return this.getStringAttribute('expression');
  }

  // filter - computed: false, optional: true, required: false
  private _filter = new DataCloudflareZeroTrustCasbFindingTypeFilterOutputReference(this, "filter");
  public get filter() {
    return this._filter;
  }
  public putFilter(value: DataCloudflareZeroTrustCasbFindingTypeFilter) {
    this._filter.internalValue = value;
  }
  public resetFilter() {
    this._filter.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get filterInput() {
    return this._filter.internalValue;
  }

  // finding_type_id - computed: false, optional: true, required: false
  private _findingTypeId?: string; 
  public get findingTypeId() {
    return this.getStringAttribute('finding_type_id');
  }
  public set findingTypeId(value: string) {
    this._findingTypeId = value;
  }
  public resetFindingTypeId() {
    this._findingTypeId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get findingTypeIdInput() {
    return this._findingTypeId;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // integration_ids - computed: true, optional: false, required: false
  public get integrationIds() {
    return this.getListAttribute('integration_ids');
  }

  // match_count - computed: true, optional: false, required: false
  public get matchCount() {
    return this.getNumberAttribute('match_count');
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // origin - computed: true, optional: false, required: false
  public get origin() {
    return this.getStringAttribute('origin');
  }

  // quarantined - computed: true, optional: false, required: false
  public get quarantined() {
    return this.getBooleanAttribute('quarantined');
  }

  // severity - computed: true, optional: false, required: false
  public get severity() {
    return this.getStringAttribute('severity');
  }

  // updated_at - computed: true, optional: false, required: false
  public get updatedAt() {
    return this.getStringAttribute('updated_at');
  }

  // vendor - computed: true, optional: false, required: false
  public get vendor() {
    return this.getStringAttribute('vendor');
  }

  // version - computed: true, optional: false, required: false
  public get version() {
    return this.getNumberAttribute('version');
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      account_id: cdktf.stringToTerraform(this._accountId),
      filter: dataCloudflareZeroTrustCasbFindingTypeFilterToTerraform(this._filter.internalValue),
      finding_type_id: cdktf.stringToTerraform(this._findingTypeId),
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
        value: dataCloudflareZeroTrustCasbFindingTypeFilterToHclTerraform(this._filter.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "DataCloudflareZeroTrustCasbFindingTypeFilter",
      },
      finding_type_id: {
        value: cdktf.stringToHclTerraform(this._findingTypeId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
