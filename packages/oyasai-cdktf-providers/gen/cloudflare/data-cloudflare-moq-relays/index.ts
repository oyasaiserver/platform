// https://registry.terraform.io/providers/cloudflare/cloudflare/5.22.0/docs/data-sources/moq_relays
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataCloudflareMoqRelaysConfig extends cdktf.TerraformMetaArguments {
  /**
  * Cloudflare account identifier.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.22.0/docs/data-sources/moq_relays#account_id DataCloudflareMoqRelays#account_id}
  */
  readonly accountId: string;
  /**
  * Sort order by `created`. When true, results are returned oldest-first
  * (ascending); otherwise newest-first (descending, the default).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.22.0/docs/data-sources/moq_relays#asc DataCloudflareMoqRelays#asc}
  */
  readonly asc?: boolean | cdktf.IResolvable;
  /**
  * Cursor for pagination. Returns relays created strictly after this
  * RFC 3339 timestamp (typically the `created` value of the last item
  * on the current page, to fetch the next page).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.22.0/docs/data-sources/moq_relays#created_after DataCloudflareMoqRelays#created_after}
  */
  readonly createdAfter?: string;
  /**
  * Cursor for pagination. Returns relays created strictly before this
  * RFC 3339 timestamp (typically the `created` value of the first item
  * on the current page, to fetch the previous page).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.22.0/docs/data-sources/moq_relays#created_before DataCloudflareMoqRelays#created_before}
  */
  readonly createdBefore?: string;
  /**
  * Max items to fetch, default: 1000
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.22.0/docs/data-sources/moq_relays#max_items DataCloudflareMoqRelays#max_items}
  */
  readonly maxItems?: number;
  /**
  * Maximum number of relays to return per page.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.22.0/docs/data-sources/moq_relays#per_page DataCloudflareMoqRelays#per_page}
  */
  readonly perPage?: number;
}
export interface DataCloudflareMoqRelaysResult {
}

export function dataCloudflareMoqRelaysResultToTerraform(struct?: DataCloudflareMoqRelaysResult): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataCloudflareMoqRelaysResultToHclTerraform(struct?: DataCloudflareMoqRelaysResult): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataCloudflareMoqRelaysResultOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataCloudflareMoqRelaysResult | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataCloudflareMoqRelaysResult | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // created - computed: true, optional: false, required: false
  public get created() {
    return this.getStringAttribute('created');
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

  // uid - computed: true, optional: false, required: false
  public get uid() {
    return this.getStringAttribute('uid');
  }
}

export class DataCloudflareMoqRelaysResultList extends cdktf.ComplexList {

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
  public get(index: number): DataCloudflareMoqRelaysResultOutputReference {
    return new DataCloudflareMoqRelaysResultOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.22.0/docs/data-sources/moq_relays cloudflare_moq_relays}
*/
export class DataCloudflareMoqRelays extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "cloudflare_moq_relays";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataCloudflareMoqRelays resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataCloudflareMoqRelays to import
  * @param importFromId The id of the existing DataCloudflareMoqRelays that should be imported. Refer to the {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.22.0/docs/data-sources/moq_relays#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataCloudflareMoqRelays to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "cloudflare_moq_relays", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.22.0/docs/data-sources/moq_relays cloudflare_moq_relays} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataCloudflareMoqRelaysConfig
  */
  public constructor(scope: Construct, id: string, config: DataCloudflareMoqRelaysConfig) {
    super(scope, id, {
      terraformResourceType: 'cloudflare_moq_relays',
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
    this._asc = config.asc;
    this._createdAfter = config.createdAfter;
    this._createdBefore = config.createdBefore;
    this._maxItems = config.maxItems;
    this._perPage = config.perPage;
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

  // result - computed: true, optional: false, required: false
  private _result = new DataCloudflareMoqRelaysResultList(this, "result", false);
  public get result() {
    return this._result;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      account_id: cdktf.stringToTerraform(this._accountId),
      asc: cdktf.booleanToTerraform(this._asc),
      created_after: cdktf.stringToTerraform(this._createdAfter),
      created_before: cdktf.stringToTerraform(this._createdBefore),
      max_items: cdktf.numberToTerraform(this._maxItems),
      per_page: cdktf.numberToTerraform(this._perPage),
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
      asc: {
        value: cdktf.booleanToHclTerraform(this._asc),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      created_after: {
        value: cdktf.stringToHclTerraform(this._createdAfter),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      created_before: {
        value: cdktf.stringToHclTerraform(this._createdBefore),
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
      per_page: {
        value: cdktf.numberToHclTerraform(this._perPage),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
