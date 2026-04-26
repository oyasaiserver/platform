import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface ApiShieldSchemaValidationSettingsConfig extends cdktf.TerraformMetaArguments {
    /**
    * The default mitigation action used when there is no mitigation action defined on the operation
    *
    * Mitigation actions are as follows:
    *
    *   * `log` - log request when request does not conform to schema
    *   * `block` - deny access to the site when request does not conform to schema
    *
    * A special value of of `none` will skip running schema validation entirely for the request when there is no mitigation action defined on the operation
    * Available values: "none", "log", "block".
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/api_shield_schema_validation_settings#validation_default_mitigation_action ApiShieldSchemaValidationSettings#validation_default_mitigation_action}
    */
    readonly validationDefaultMitigationAction: string;
    /**
    * When set, this overrides both zone level and operation level mitigation actions.
    *
    *   - `none` will skip running schema validation entirely for the request
    *   - `null` indicates that no override is in place
    *
    * To clear any override, use the special value `disable_override` or `null`
    * Available values: "none", "disable_override".
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/api_shield_schema_validation_settings#validation_override_mitigation_action ApiShieldSchemaValidationSettings#validation_override_mitigation_action}
    */
    readonly validationOverrideMitigationAction?: string;
    /**
    * Identifier.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/api_shield_schema_validation_settings#zone_id ApiShieldSchemaValidationSettings#zone_id}
    */
    readonly zoneId: string;
}
/**
* Represents a {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/api_shield_schema_validation_settings cloudflare_api_shield_schema_validation_settings}
*/
export declare class ApiShieldSchemaValidationSettings extends cdktf.TerraformResource {
    static readonly tfResourceType = "cloudflare_api_shield_schema_validation_settings";
    /**
    * Generates CDKTF code for importing a ApiShieldSchemaValidationSettings resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the ApiShieldSchemaValidationSettings to import
    * @param importFromId The id of the existing ApiShieldSchemaValidationSettings that should be imported. Refer to the {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/api_shield_schema_validation_settings#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the ApiShieldSchemaValidationSettings to import is found
    */
    static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider): any;
    /**
    * Create a new {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/api_shield_schema_validation_settings cloudflare_api_shield_schema_validation_settings} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options ApiShieldSchemaValidationSettingsConfig
    */
    constructor(scope: Construct, id: string, config: ApiShieldSchemaValidationSettingsConfig);
    get id(): any;
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
    get zoneIdInput(): string;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
    protected synthesizeHclAttributes(): {
        [name: string]: any;
    };
}
