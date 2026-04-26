import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface ApiShieldSchemaConfig extends cdktf.TerraformMetaArguments {
    /**
    * Schema file bytes
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/api_shield_schema#file ApiShieldSchema#file}
    */
    readonly file: string;
    /**
    * Kind of schema
    * Available values: "openapi_v3".
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/api_shield_schema#kind ApiShieldSchema#kind}
    */
    readonly kind: string;
    /**
    * Name of the schema
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/api_shield_schema#name ApiShieldSchema#name}
    */
    readonly name?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/api_shield_schema#schema_id ApiShieldSchema#schema_id}
    */
    readonly schemaId?: string;
    /**
    * Flag whether schema is enabled for validation.
    * Available values: "true", "false".
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/api_shield_schema#validation_enabled ApiShieldSchema#validation_enabled}
    */
    readonly validationEnabled?: string;
    /**
    * Identifier.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/api_shield_schema#zone_id ApiShieldSchema#zone_id}
    */
    readonly zoneId?: string;
}
export interface ApiShieldSchemaSchema {
}
export declare function apiShieldSchemaSchemaToTerraform(struct?: ApiShieldSchemaSchema): any;
export declare function apiShieldSchemaSchemaToHclTerraform(struct?: ApiShieldSchemaSchema): any;
export declare class ApiShieldSchemaSchemaOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): ApiShieldSchemaSchema | undefined;
    set internalValue(value: ApiShieldSchemaSchema | undefined);
    get createdAt(): any;
    get kind(): any;
    get name(): any;
    get schemaId(): any;
    get source(): any;
    get validationEnabled(): any;
}
export interface ApiShieldSchemaUploadDetailsWarnings {
}
export declare function apiShieldSchemaUploadDetailsWarningsToTerraform(struct?: ApiShieldSchemaUploadDetailsWarnings): any;
export declare function apiShieldSchemaUploadDetailsWarningsToHclTerraform(struct?: ApiShieldSchemaUploadDetailsWarnings): any;
export declare class ApiShieldSchemaUploadDetailsWarningsOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): ApiShieldSchemaUploadDetailsWarnings | undefined;
    set internalValue(value: ApiShieldSchemaUploadDetailsWarnings | undefined);
    get code(): any;
    get locations(): any;
    get message(): any;
}
export declare class ApiShieldSchemaUploadDetailsWarningsList extends cdktf.ComplexList {
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
    get(index: number): ApiShieldSchemaUploadDetailsWarningsOutputReference;
}
export interface ApiShieldSchemaUploadDetails {
}
export declare function apiShieldSchemaUploadDetailsToTerraform(struct?: ApiShieldSchemaUploadDetails): any;
export declare function apiShieldSchemaUploadDetailsToHclTerraform(struct?: ApiShieldSchemaUploadDetails): any;
export declare class ApiShieldSchemaUploadDetailsOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): ApiShieldSchemaUploadDetails | undefined;
    set internalValue(value: ApiShieldSchemaUploadDetails | undefined);
    private _warnings;
    get warnings(): ApiShieldSchemaUploadDetailsWarningsList;
}
/**
* Represents a {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/api_shield_schema cloudflare_api_shield_schema}
*/
export declare class ApiShieldSchema extends cdktf.TerraformResource {
    static readonly tfResourceType = "cloudflare_api_shield_schema";
    /**
    * Generates CDKTF code for importing a ApiShieldSchema resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the ApiShieldSchema to import
    * @param importFromId The id of the existing ApiShieldSchema that should be imported. Refer to the {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/api_shield_schema#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the ApiShieldSchema to import is found
    */
    static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider): any;
    /**
    * Create a new {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/api_shield_schema cloudflare_api_shield_schema} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options ApiShieldSchemaConfig
    */
    constructor(scope: Construct, id: string, config: ApiShieldSchemaConfig);
    get createdAt(): any;
    private _file?;
    get file(): string;
    set file(value: string);
    get fileInput(): string;
    private _kind?;
    get kind(): string;
    set kind(value: string);
    get kindInput(): string;
    private _name?;
    get name(): string;
    set name(value: string);
    resetName(): void;
    get nameInput(): string;
    private _schema;
    get schema(): ApiShieldSchemaSchemaOutputReference;
    private _schemaId?;
    get schemaId(): string;
    set schemaId(value: string);
    resetSchemaId(): void;
    get schemaIdInput(): string;
    get source(): any;
    private _uploadDetails;
    get uploadDetails(): ApiShieldSchemaUploadDetailsOutputReference;
    private _validationEnabled?;
    get validationEnabled(): string;
    set validationEnabled(value: string);
    resetValidationEnabled(): void;
    get validationEnabledInput(): string;
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
