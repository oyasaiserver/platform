import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface SchemaValidationSchemasConfig extends cdktf.TerraformMetaArguments {
    /**
    * The kind of the schema
    * Available values: "openapi_v3".
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/schema_validation_schemas#kind SchemaValidationSchemas#kind}
    */
    readonly kind: string;
    /**
    * A human-readable name for the schema
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/schema_validation_schemas#name SchemaValidationSchemas#name}
    */
    readonly name: string;
    /**
    * The raw schema, e.g., the OpenAPI schema, either as JSON or YAML
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/schema_validation_schemas#source SchemaValidationSchemas#source}
    */
    readonly source: string;
    /**
    * An indicator if this schema is enabled
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/schema_validation_schemas#validation_enabled SchemaValidationSchemas#validation_enabled}
    */
    readonly validationEnabled: boolean | cdktf.IResolvable;
    /**
    * Identifier.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/schema_validation_schemas#zone_id SchemaValidationSchemas#zone_id}
    */
    readonly zoneId?: string;
}
/**
* Represents a {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/schema_validation_schemas cloudflare_schema_validation_schemas}
*/
export declare class SchemaValidationSchemas extends cdktf.TerraformResource {
    static readonly tfResourceType = "cloudflare_schema_validation_schemas";
    /**
    * Generates CDKTF code for importing a SchemaValidationSchemas resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the SchemaValidationSchemas to import
    * @param importFromId The id of the existing SchemaValidationSchemas that should be imported. Refer to the {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/schema_validation_schemas#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the SchemaValidationSchemas to import is found
    */
    static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider): any;
    /**
    * Create a new {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/schema_validation_schemas cloudflare_schema_validation_schemas} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options SchemaValidationSchemasConfig
    */
    constructor(scope: Construct, id: string, config: SchemaValidationSchemasConfig);
    get createdAt(): any;
    get id(): any;
    private _kind?;
    get kind(): string;
    set kind(value: string);
    get kindInput(): string;
    private _name?;
    get name(): string;
    set name(value: string);
    get nameInput(): string;
    get schemaId(): any;
    private _source?;
    get source(): string;
    set source(value: string);
    get sourceInput(): string;
    private _validationEnabled?;
    get validationEnabled(): boolean | cdktf.IResolvable;
    set validationEnabled(value: boolean | cdktf.IResolvable);
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
