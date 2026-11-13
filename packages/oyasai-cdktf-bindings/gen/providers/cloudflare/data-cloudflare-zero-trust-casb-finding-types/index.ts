// https://registry.terraform.io/providers/cloudflare/cloudflare/5.29.0/docs/data-sources/zero_trust_casb_finding_types
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataCloudflareZeroTrustCasbFindingTypesConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.29.0/docs/data-sources/zero_trust_casb_finding_types#account_id DataCloudflareZeroTrustCasbFindingTypes#account_id}
  */
  readonly accountId: string;
  /**
  * Sort direction for the primary field. Defaults to 'desc'.
  * Ties are resolved by case-insensitive name, then ID, both ascending regardless of direction.
  * Available values: "asc", "desc".
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.29.0/docs/data-sources/zero_trust_casb_finding_types#direction DataCloudflareZeroTrustCasbFindingTypes#direction}
  */
  readonly direction?: string;
  /**
  * Max items to fetch, default: 1000
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.29.0/docs/data-sources/zero_trust_casb_finding_types#max_items DataCloudflareZeroTrustCasbFindingTypes#max_items}
  */
  readonly maxItems?: number;
  /**
  * Return only finding types updated at or before this RFC 3339 timestamp (inclusive).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.29.0/docs/data-sources/zero_trust_casb_finding_types#max_updated_at DataCloudflareZeroTrustCasbFindingTypes#max_updated_at}
  */
  readonly maxUpdatedAt?: string;
  /**
  * Return only finding types updated at or after this RFC 3339 timestamp (inclusive).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.29.0/docs/data-sources/zero_trust_casb_finding_types#min_updated_at DataCloudflareZeroTrustCasbFindingTypes#min_updated_at}
  */
  readonly minUpdatedAt?: string;
  /**
  * Field to sort by (case-insensitive). Defaults to 'created'.
  * Name and vendor sorting is case-insensitive; vendor uses friendly provider names.
  * Ascending order: type Content then Posture; origin custom then system;
  * severity Low, Medium, High, Critical.
  * Available values: "created", "updated", "match_count", "name", "vendor", "type", "origin", "severity".
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.29.0/docs/data-sources/zero_trust_casb_finding_types#order DataCloudflareZeroTrustCasbFindingTypes#order}
  */
  readonly order?: string;
  /**
  * Filter finding types by origin. Supports multiple comma-separated, case-insensitive values.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.29.0/docs/data-sources/zero_trust_casb_finding_types#origins DataCloudflareZeroTrustCasbFindingTypes#origins}
  */
  readonly origins?: string[];
  /**
  * When true, return only quarantined finding types; when false, return only non-quarantined finding types. Omit to return both.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.29.0/docs/data-sources/zero_trust_casb_finding_types#quarantined DataCloudflareZeroTrustCasbFindingTypes#quarantined}
  */
  readonly quarantined?: boolean | cdktf.IResolvable;
  /**
  * Filter finding types by name or ID (case-insensitive substring match).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.29.0/docs/data-sources/zero_trust_casb_finding_types#search DataCloudflareZeroTrustCasbFindingTypes#search}
  */
  readonly search?: string;
  /**
  * Filter finding types by severity. Supports multiple comma-separated, case-insensitive values.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.29.0/docs/data-sources/zero_trust_casb_finding_types#severities DataCloudflareZeroTrustCasbFindingTypes#severities}
  */
  readonly severities?: string[];
  /**
  * Filter finding types by category type. Supports multiple comma-separated, case-insensitive values.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.29.0/docs/data-sources/zero_trust_casb_finding_types#types DataCloudflareZeroTrustCasbFindingTypes#types}
  */
  readonly types?: string[];
  /**
  * Filter finding types by vendor. Supports multiple comma-separated values. Each value may be either the vendor enum (GOOGLE_WORKSPACE) or the friendly name returned by the read routes (Google Workspace).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.29.0/docs/data-sources/zero_trust_casb_finding_types#vendors DataCloudflareZeroTrustCasbFindingTypes#vendors}
  */
  readonly vendors?: string[];
}
export interface DataCloudflareZeroTrustCasbFindingTypesResultCategory {
}

export function dataCloudflareZeroTrustCasbFindingTypesResultCategoryToTerraform(struct?: DataCloudflareZeroTrustCasbFindingTypesResultCategory): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataCloudflareZeroTrustCasbFindingTypesResultCategoryToHclTerraform(struct?: DataCloudflareZeroTrustCasbFindingTypesResultCategory): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataCloudflareZeroTrustCasbFindingTypesResultCategoryOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataCloudflareZeroTrustCasbFindingTypesResultCategory | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataCloudflareZeroTrustCasbFindingTypesResultCategory | undefined) {
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
export interface DataCloudflareZeroTrustCasbFindingTypesResult {
}

export function dataCloudflareZeroTrustCasbFindingTypesResultToTerraform(struct?: DataCloudflareZeroTrustCasbFindingTypesResult): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataCloudflareZeroTrustCasbFindingTypesResultToHclTerraform(struct?: DataCloudflareZeroTrustCasbFindingTypesResult): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataCloudflareZeroTrustCasbFindingTypesResultOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataCloudflareZeroTrustCasbFindingTypesResult | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataCloudflareZeroTrustCasbFindingTypesResult | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
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
  private _category = new DataCloudflareZeroTrustCasbFindingTypesResultCategoryOutputReference(this, "category");
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
}

export class DataCloudflareZeroTrustCasbFindingTypesResultList extends cdktf.ComplexList {

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
  public get(index: number): DataCloudflareZeroTrustCasbFindingTypesResultOutputReference {
    return new DataCloudflareZeroTrustCasbFindingTypesResultOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.29.0/docs/data-sources/zero_trust_casb_finding_types cloudflare_zero_trust_casb_finding_types}
*/
export class DataCloudflareZeroTrustCasbFindingTypes extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "cloudflare_zero_trust_casb_finding_types";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataCloudflareZeroTrustCasbFindingTypes resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataCloudflareZeroTrustCasbFindingTypes to import
  * @param importFromId The id of the existing DataCloudflareZeroTrustCasbFindingTypes that should be imported. Refer to the {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.29.0/docs/data-sources/zero_trust_casb_finding_types#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataCloudflareZeroTrustCasbFindingTypes to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "cloudflare_zero_trust_casb_finding_types", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.29.0/docs/data-sources/zero_trust_casb_finding_types cloudflare_zero_trust_casb_finding_types} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataCloudflareZeroTrustCasbFindingTypesConfig
  */
  public constructor(scope: Construct, id: string, config: DataCloudflareZeroTrustCasbFindingTypesConfig) {
    super(scope, id, {
      terraformResourceType: 'cloudflare_zero_trust_casb_finding_types',
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
    this._direction = config.direction;
    this._maxItems = config.maxItems;
    this._maxUpdatedAt = config.maxUpdatedAt;
    this._minUpdatedAt = config.minUpdatedAt;
    this._order = config.order;
    this._origins = config.origins;
    this._quarantined = config.quarantined;
    this._search = config.search;
    this._severities = config.severities;
    this._types = config.types;
    this._vendors = config.vendors;
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

  // result - computed: true, optional: false, required: false
  private _result = new DataCloudflareZeroTrustCasbFindingTypesResultList(this, "result", false);
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

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      account_id: cdktf.stringToTerraform(this._accountId),
      direction: cdktf.stringToTerraform(this._direction),
      max_items: cdktf.numberToTerraform(this._maxItems),
      max_updated_at: cdktf.stringToTerraform(this._maxUpdatedAt),
      min_updated_at: cdktf.stringToTerraform(this._minUpdatedAt),
      order: cdktf.stringToTerraform(this._order),
      origins: cdktf.listMapper(cdktf.stringToTerraform, false)(this._origins),
      quarantined: cdktf.booleanToTerraform(this._quarantined),
      search: cdktf.stringToTerraform(this._search),
      severities: cdktf.listMapper(cdktf.stringToTerraform, false)(this._severities),
      types: cdktf.listMapper(cdktf.stringToTerraform, false)(this._types),
      vendors: cdktf.listMapper(cdktf.stringToTerraform, false)(this._vendors),
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
      direction: {
        value: cdktf.stringToHclTerraform(this._direction),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      max_items: {
        value: cdktf.numberToHclTerraform(this._maxItems),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      max_updated_at: {
        value: cdktf.stringToHclTerraform(this._maxUpdatedAt),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      min_updated_at: {
        value: cdktf.stringToHclTerraform(this._minUpdatedAt),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      order: {
        value: cdktf.stringToHclTerraform(this._order),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      origins: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._origins),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      quarantined: {
        value: cdktf.booleanToHclTerraform(this._quarantined),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      search: {
        value: cdktf.stringToHclTerraform(this._search),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      severities: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._severities),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      types: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._types),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      vendors: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._vendors),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
