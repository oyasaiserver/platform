import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface DataCloudflareSchemaValidationSchemasListConfig extends cdktf.TerraformMetaArguments {
    /**
    * Max items to fetch, default: 1000
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/schema_validation_schemas_list#max_items DataCloudflareSchemaValidationSchemasList#max_items}
    */
    readonly maxItems?: number;
    /**
    * Omit the source-files of schemas and only retrieve their meta-data.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/schema_validation_schemas_list#omit_source DataCloudflareSchemaValidationSchemasList#omit_source}
    */
    readonly omitSource?: boolean | cdktf.IResolvable;
    /**
    * Filter for enabled schemas
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/schema_validation_schemas_list#validation_enabled DataCloudflareSchemaValidationSchemasList#validation_enabled}
    */
    readonly validationEnabled?: boolean | cdktf.IResolvable;
    /**
    * Identifier.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/schema_validation_schemas_list#zone_id DataCloudflareSchemaValidationSchemasList#zone_id}
    */
    readonly zoneId?: string;
}
export interface DataCloudflareSchemaValidationSchemasListResult {
}
export declare function dataCloudflareSchemaValidationSchemasListResultToTerraform(struct?: DataCloudflareSchemaValidationSchemasListResult): any;
export declare function dataCloudflareSchemaValidationSchemasListResultToHclTerraform(struct?: DataCloudflareSchemaValidationSchemasListResult): any;
export declare class DataCloudflareSchemaValidationSchemasListResultOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): DataCloudflareSchemaValidationSchemasListResult | undefined;
    set internalValue(value: DataCloudflareSchemaValidationSchemasListResult | undefined);
    get createdAt(): any;
    get id(): any;
    get kind(): any;
    get name(): any;
    get schemaId(): any;
    get source(): any;
    get validationEnabled(): any;
}
export declare class DataCloudflareSchemaValidationSchemasListResultList extends cdktf.ComplexList {
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
    get(index: number): DataCloudflareSchemaValidationSchemasListResultOutputReference;
}
/**
* Represents a {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/schema_validation_schemas_list cloudflare_schema_validation_schemas_list}
*/
export declare class DataCloudflareSchemaValidationSchemasList extends cdktf.TerraformDataSource {
    static readonly tfResourceType = "cloudflare_schema_validation_schemas_list";
    /**
    * Generates CDKTF code for importing a DataCloudflareSchemaValidationSchemasList resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the DataCloudflareSchemaValidationSchemasList to import
    * @param importFromId The id of the existing DataCloudflareSchemaValidationSchemasList that should be imported. Refer to the {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/schema_validation_schemas_list#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the DataCloudflareSchemaValidationSchemasList to import is found
    */
    static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider): any;
    /**
    * Create a new {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/schema_validation_schemas_list cloudflare_schema_validation_schemas_list} Data Source
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options DataCloudflareSchemaValidationSchemasListConfig = {}
    */
    constructor(scope: Construct, id: string, config?: DataCloudflareSchemaValidationSchemasListConfig);
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
    get result(): DataCloudflareSchemaValidationSchemasListResultList;
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
