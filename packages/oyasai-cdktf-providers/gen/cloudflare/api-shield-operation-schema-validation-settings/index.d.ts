import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface ApiShieldOperationSchemaValidationSettingsConfig extends cdktf.TerraformMetaArguments {
    /**
    * When set, this applies a mitigation action to this operation
    *
    *   - `log` log request when request does not conform to schema for this operation
    *   - `block` deny access to the site when request does not conform to schema for this operation
    *   - `none` will skip mitigation for this operation
    *   - `null` indicates that no operation level mitigation is in place, see Zone Level Schema Validation Settings for mitigation action that will be applied
    * Available values: "log", "block", "none".
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/api_shield_operation_schema_validation_settings#mitigation_action ApiShieldOperationSchemaValidationSettings#mitigation_action}
    */
    readonly mitigationAction?: string;
    /**
    * UUID.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/api_shield_operation_schema_validation_settings#operation_id ApiShieldOperationSchemaValidationSettings#operation_id}
    */
    readonly operationId: string;
    /**
    * Identifier.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/api_shield_operation_schema_validation_settings#zone_id ApiShieldOperationSchemaValidationSettings#zone_id}
    */
    readonly zoneId?: string;
}
/**
* Represents a {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/api_shield_operation_schema_validation_settings cloudflare_api_shield_operation_schema_validation_settings}
*/
export declare class ApiShieldOperationSchemaValidationSettings extends cdktf.TerraformResource {
    static readonly tfResourceType = "cloudflare_api_shield_operation_schema_validation_settings";
    /**
    * Generates CDKTF code for importing a ApiShieldOperationSchemaValidationSettings resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the ApiShieldOperationSchemaValidationSettings to import
    * @param importFromId The id of the existing ApiShieldOperationSchemaValidationSettings that should be imported. Refer to the {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/api_shield_operation_schema_validation_settings#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the ApiShieldOperationSchemaValidationSettings to import is found
    */
    static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider): any;
    /**
    * Create a new {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/api_shield_operation_schema_validation_settings cloudflare_api_shield_operation_schema_validation_settings} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options ApiShieldOperationSchemaValidationSettingsConfig
    */
    constructor(scope: Construct, id: string, config: ApiShieldOperationSchemaValidationSettingsConfig);
    get id(): any;
    private _mitigationAction?;
    get mitigationAction(): string;
    set mitigationAction(value: string);
    resetMitigationAction(): void;
    get mitigationActionInput(): string;
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
