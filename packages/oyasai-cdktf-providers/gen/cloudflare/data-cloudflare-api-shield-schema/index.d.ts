import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface DataCloudflareApiShieldSchemaConfig extends cdktf.TerraformMetaArguments {
    /**
    * Omit the source-files of schemas and only retrieve their meta-data.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/api_shield_schema#omit_source DataCloudflareApiShieldSchema#omit_source}
    */
    readonly omitSource?: boolean | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/api_shield_schema#schema_id DataCloudflareApiShieldSchema#schema_id}
    */
    readonly schemaId: string;
    /**
    * Identifier.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/api_shield_schema#zone_id DataCloudflareApiShieldSchema#zone_id}
    */
    readonly zoneId?: string;
}
/**
* Represents a {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/api_shield_schema cloudflare_api_shield_schema}
*/
export declare class DataCloudflareApiShieldSchema extends cdktf.TerraformDataSource {
    static readonly tfResourceType = "cloudflare_api_shield_schema";
    /**
    * Generates CDKTF code for importing a DataCloudflareApiShieldSchema resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the DataCloudflareApiShieldSchema to import
    * @param importFromId The id of the existing DataCloudflareApiShieldSchema that should be imported. Refer to the {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/api_shield_schema#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the DataCloudflareApiShieldSchema to import is found
    */
    static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider): any;
    /**
    * Create a new {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/api_shield_schema cloudflare_api_shield_schema} Data Source
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options DataCloudflareApiShieldSchemaConfig
    */
    constructor(scope: Construct, id: string, config: DataCloudflareApiShieldSchemaConfig);
    get createdAt(): any;
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
