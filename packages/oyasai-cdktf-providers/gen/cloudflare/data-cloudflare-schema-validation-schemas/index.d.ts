import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface DataCloudflareSchemaValidationSchemasConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/schema_validation_schemas#filter DataCloudflareSchemaValidationSchemas#filter}
    */
    readonly filter?: DataCloudflareSchemaValidationSchemasFilter;
    /**
    * Omit the source-files of schemas and only retrieve their meta-data.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/schema_validation_schemas#omit_source DataCloudflareSchemaValidationSchemas#omit_source}
    */
    readonly omitSource?: boolean | cdktf.IResolvable;
    /**
    * UUID.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/schema_validation_schemas#schema_id DataCloudflareSchemaValidationSchemas#schema_id}
    */
    readonly schemaId?: string;
    /**
    * Identifier.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/schema_validation_schemas#zone_id DataCloudflareSchemaValidationSchemas#zone_id}
    */
    readonly zoneId?: string;
}
export interface DataCloudflareSchemaValidationSchemasFilter {
    /**
    * Filter for enabled schemas
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/schema_validation_schemas#validation_enabled DataCloudflareSchemaValidationSchemas#validation_enabled}
    */
    readonly validationEnabled?: boolean | cdktf.IResolvable;
}
export declare function dataCloudflareSchemaValidationSchemasFilterToTerraform(struct?: DataCloudflareSchemaValidationSchemasFilter | cdktf.IResolvable): any;
export declare function dataCloudflareSchemaValidationSchemasFilterToHclTerraform(struct?: DataCloudflareSchemaValidationSchemasFilter | cdktf.IResolvable): any;
export declare class DataCloudflareSchemaValidationSchemasFilterOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): DataCloudflareSchemaValidationSchemasFilter | cdktf.IResolvable | undefined;
    set internalValue(value: DataCloudflareSchemaValidationSchemasFilter | cdktf.IResolvable | undefined);
    private _validationEnabled?;
    get validationEnabled(): boolean | cdktf.IResolvable;
    set validationEnabled(value: boolean | cdktf.IResolvable);
    resetValidationEnabled(): void;
    get validationEnabledInput(): any;
}
/**
* Represents a {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/schema_validation_schemas cloudflare_schema_validation_schemas}
*/
export declare class DataCloudflareSchemaValidationSchemas extends cdktf.TerraformDataSource {
    static readonly tfResourceType = "cloudflare_schema_validation_schemas";
    /**
    * Generates CDKTF code for importing a DataCloudflareSchemaValidationSchemas resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the DataCloudflareSchemaValidationSchemas to import
    * @param importFromId The id of the existing DataCloudflareSchemaValidationSchemas that should be imported. Refer to the {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/schema_validation_schemas#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the DataCloudflareSchemaValidationSchemas to import is found
    */
    static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider): any;
    /**
    * Create a new {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/schema_validation_schemas cloudflare_schema_validation_schemas} Data Source
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options DataCloudflareSchemaValidationSchemasConfig = {}
    */
    constructor(scope: Construct, id: string, config?: DataCloudflareSchemaValidationSchemasConfig);
    get createdAt(): any;
    private _filter;
    get filter(): DataCloudflareSchemaValidationSchemasFilterOutputReference;
    putFilter(value: DataCloudflareSchemaValidationSchemasFilter): void;
    resetFilter(): void;
    get filterInput(): any;
    get id(): any;
    get kind(): any;
    get name(): any;
    private _omitSource?;
    get omitSource(): boolean | cdktf.IResolvable;
    set omitSource(value: boolean | cdktf.IResolvable);
    resetOmitSource(): void;
    get omitSourceInput(): any;
    private _schemaId?;
    get schemaId(): string;
    set schemaId(value: string);
    resetSchemaId(): void;
    get schemaIdInput(): string;
    get source(): any;
    get validationEnabled(): any;
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
