import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface SchemaValidationOperationSettingsConfig extends cdktf.TerraformMetaArguments {
    /**
    * When set, this applies a mitigation action to this operation
    *
    *   - `"log"` - log request when request does not conform to schema for this operation
    *   - `"block"` - deny access to the site when request does not conform to schema for this operation
    *   - `"none"` - will skip mitigation for this operation
    *   - `null` - clears any mitigation action
    * Available values: "log", "block", "none".
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/schema_validation_operation_settings#mitigation_action SchemaValidationOperationSettings#mitigation_action}
    */
    readonly mitigationAction: string;
    /**
    * UUID.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/schema_validation_operation_settings#operation_id SchemaValidationOperationSettings#operation_id}
    */
    readonly operationId: string;
    /**
    * Identifier.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/schema_validation_operation_settings#zone_id SchemaValidationOperationSettings#zone_id}
    */
    readonly zoneId?: string;
}
/**
* Represents a {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/schema_validation_operation_settings cloudflare_schema_validation_operation_settings}
*/
export declare class SchemaValidationOperationSettings extends cdktf.TerraformResource {
    static readonly tfResourceType = "cloudflare_schema_validation_operation_settings";
    /**
    * Generates CDKTF code for importing a SchemaValidationOperationSettings resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the SchemaValidationOperationSettings to import
    * @param importFromId The id of the existing SchemaValidationOperationSettings that should be imported. Refer to the {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/schema_validation_operation_settings#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the SchemaValidationOperationSettings to import is found
    */
    static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider): any;
    /**
    * Create a new {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/schema_validation_operation_settings cloudflare_schema_validation_operation_settings} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options SchemaValidationOperationSettingsConfig
    */
    constructor(scope: Construct, id: string, config: SchemaValidationOperationSettingsConfig);
    private _mitigationAction?;
    get mitigationAction(): string;
    set mitigationAction(value: string);
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
