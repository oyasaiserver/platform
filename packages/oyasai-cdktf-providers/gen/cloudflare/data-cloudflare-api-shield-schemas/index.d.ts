import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface DataCloudflareApiShieldSchemasConfig extends cdktf.TerraformMetaArguments {
    /**
    * Max items to fetch, default: 1000
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/api_shield_schemas#max_items DataCloudflareApiShieldSchemas#max_items}
    */
    readonly maxItems?: number;
    /**
    * Omit the source-files of schemas and only retrieve their meta-data.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/api_shield_schemas#omit_source DataCloudflareApiShieldSchemas#omit_source}
    */
    readonly omitSource?: boolean | cdktf.IResolvable;
    /**
    * Flag whether schema is enabled for validation.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/api_shield_schemas#validation_enabled DataCloudflareApiShieldSchemas#validation_enabled}
    */
    readonly validationEnabled?: boolean | cdktf.IResolvable;
    /**
    * Identifier.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/api_shield_schemas#zone_id DataCloudflareApiShieldSchemas#zone_id}
    */
    readonly zoneId?: string;
}
export interface DataCloudflareApiShieldSchemasResult {
}
export declare function dataCloudflareApiShieldSchemasResultToTerraform(struct?: DataCloudflareApiShieldSchemasResult): any;
export declare function dataCloudflareApiShieldSchemasResultToHclTerraform(struct?: DataCloudflareApiShieldSchemasResult): any;
export declare class DataCloudflareApiShieldSchemasResultOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): DataCloudflareApiShieldSchemasResult | undefined;
    set internalValue(value: DataCloudflareApiShieldSchemasResult | undefined);
    get createdAt(): any;
    get kind(): any;
    get name(): any;
    get schemaId(): any;
    get source(): any;
    get validationEnabled(): any;
}
export declare class DataCloudflareApiShieldSchemasResultList extends cdktf.ComplexList {
    protected terraformResource: cdktf.IInterpolatingParent;
    protected terraformAttribute: string;
    protected wrapsSet: boolean;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean);
    /**
    * @param index the index of the item to return
    */
    get(index: number): DataCloudflareApiShieldSchemasResultOutputReference;
}
/**
* Represents a {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/api_shield_schemas cloudflare_api_shield_schemas}
*/
export declare class DataCloudflareApiShieldSchemas extends cdktf.TerraformDataSource {
    static readonly tfResourceType = "cloudflare_api_shield_schemas";
    /**
    * Generates CDKTF code for importing a DataCloudflareApiShieldSchemas resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the DataCloudflareApiShieldSchemas to import
    * @param importFromId The id of the existing DataCloudflareApiShieldSchemas that should be imported. Refer to the {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/api_shield_schemas#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the DataCloudflareApiShieldSchemas to import is found
    */
    static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider): any;
    /**
    * Create a new {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/api_shield_schemas cloudflare_api_shield_schemas} Data Source
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options DataCloudflareApiShieldSchemasConfig = {}
    */
    constructor(scope: Construct, id: string, config?: DataCloudflareApiShieldSchemasConfig);
    private _maxItems?;
    get maxItems(): number;
    set maxItems(value: number);
    resetMaxItems(): void;
    get maxItemsInput(): number;
    private _omitSource?;
    get omitSource(): boolean | cdktf.IResolvable;
    set omitSource(value: boolean | cdktf.IResolvable);
    resetOmitSource(): void;
    get omitSourceInput(): any;
    private _result;
    get result(): DataCloudflareApiShieldSchemasResultList;
    private _validationEnabled?;
    get validationEnabled(): boolean | cdktf.IResolvable;
    set validationEnabled(value: boolean | cdktf.IResolvable);
    resetValidationEnabled(): void;
    get validationEnabledInput(): any;
    private _zoneId?;
    get zoneId(): string;
    set zoneId(value: string);
    resetZoneId(): void;
    get zoneIdInput(): string;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
    protected synthesizeHclAttributes(): {
        [name: string]: any;
    };
}
