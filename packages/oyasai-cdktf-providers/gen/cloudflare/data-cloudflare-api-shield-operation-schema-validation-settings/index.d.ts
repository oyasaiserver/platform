import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface DataCloudflareApiShieldOperationSchemaValidationSettingsConfig extends cdktf.TerraformMetaArguments {
    /**
    * UUID.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/api_shield_operation_schema_validation_settings#operation_id DataCloudflareApiShieldOperationSchemaValidationSettings#operation_id}
    */
    readonly operationId: string;
    /**
    * Identifier.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/api_shield_operation_schema_validation_settings#zone_id DataCloudflareApiShieldOperationSchemaValidationSettings#zone_id}
    */
    readonly zoneId?: string;
}
/**
* Represents a {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/api_shield_operation_schema_validation_settings cloudflare_api_shield_operation_schema_validation_settings}
*/
export declare class DataCloudflareApiShieldOperationSchemaValidationSettings extends cdktf.TerraformDataSource {
    static readonly tfResourceType = "cloudflare_api_shield_operation_schema_validation_settings";
    /**
    * Generates CDKTF code for importing a DataCloudflareApiShieldOperationSchemaValidationSettings resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the DataCloudflareApiShieldOperationSchemaValidationSettings to import
    * @param importFromId The id of the existing DataCloudflareApiShieldOperationSchemaValidationSettings that should be imported. Refer to the {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/api_shield_operation_schema_validation_settings#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the DataCloudflareApiShieldOperationSchemaValidationSettings to import is found
    */
    static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider): any;
    /**
    * Create a new {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/api_shield_operation_schema_validation_settings cloudflare_api_shield_operation_schema_validation_settings} Data Source
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options DataCloudflareApiShieldOperationSchemaValidationSettingsConfig
    */
    constructor(scope: Construct, id: string, config: DataCloudflareApiShieldOperationSchemaValidationSettingsConfig);
    get mitigationAction(): any;
    private _operationId?;
    get operationId(): string;
    set operationId(value: string);
    get operationIdInput(): string;
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
