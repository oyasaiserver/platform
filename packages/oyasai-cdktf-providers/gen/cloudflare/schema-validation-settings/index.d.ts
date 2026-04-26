import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface SchemaValidationSettingsConfig extends cdktf.TerraformMetaArguments {
    /**
    * The default mitigation action used
    * Mitigation actions are as follows:
    *
    *   - `"log"` - log request when request does not conform to schema
    *   - `"block"` - deny access to the site when request does not conform to schema
    *   - `"none"` - skip running schema validation
    * Available values: "none", "log", "block".
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/schema_validation_settings#validation_default_mitigation_action SchemaValidationSettings#validation_default_mitigation_action}
    */
    readonly validationDefaultMitigationAction: string;
    /**
    * When set, this overrides both zone level and operation level mitigation actions.
    *
    *   - `"none"` - skip running schema validation entirely for the request
    *   - `null` - clears any existing override
    * Available values: "none".
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/schema_validation_settings#validation_override_mitigation_action SchemaValidationSettings#validation_override_mitigation_action}
    */
    readonly validationOverrideMitigationAction?: string;
    /**
    * Identifier.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/schema_validation_settings#zone_id SchemaValidationSettings#zone_id}
    */
    readonly zoneId?: string;
}
/**
* Represents a {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/schema_validation_settings cloudflare_schema_validation_settings}
*/
export declare class SchemaValidationSettings extends cdktf.TerraformResource {
    static readonly tfResourceType = "cloudflare_schema_validation_settings";
    /**
    * Generates CDKTF code for importing a SchemaValidationSettings resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the SchemaValidationSettings to import
    * @param importFromId The id of the existing SchemaValidationSettings that should be imported. Refer to the {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/schema_validation_settings#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the SchemaValidationSettings to import is found
    */
    static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider): any;
    /**
    * Create a new {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/schema_validation_settings cloudflare_schema_validation_settings} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options SchemaValidationSettingsConfig
    */
    constructor(scope: Construct, id: string, config: SchemaValidationSettingsConfig);
    private _validationDefaultMitigationAction?;
    get validationDefaultMitigationAction(): string;
    set validationDefaultMitigationAction(value: string);
    get validationDefaultMitigationActionInput(): string;
    private _validationOverrideMitigationAction?;
    get validationOverrideMitigationAction(): string;
    set validationOverrideMitigationAction(value: string);
    resetValidationOverrideMitigationAction(): void;
    get validationOverrideMitigationActionInput(): string;
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
