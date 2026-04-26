import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface DataCloudflareApiShieldSchemaValidationSettingsConfig extends cdktf.TerraformMetaArguments {
    /**
    * Identifier.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/api_shield_schema_validation_settings#zone_id DataCloudflareApiShieldSchemaValidationSettings#zone_id}
    */
    readonly zoneId?: string;
}
/**
* Represents a {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/api_shield_schema_validation_settings cloudflare_api_shield_schema_validation_settings}
*/
export declare class DataCloudflareApiShieldSchemaValidationSettings extends cdktf.TerraformDataSource {
    static readonly tfResourceType = "cloudflare_api_shield_schema_validation_settings";
    /**
    * Generates CDKTF code for importing a DataCloudflareApiShieldSchemaValidationSettings resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the DataCloudflareApiShieldSchemaValidationSettings to import
    * @param importFromId The id of the existing DataCloudflareApiShieldSchemaValidationSettings that should be imported. Refer to the {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/api_shield_schema_validation_settings#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the DataCloudflareApiShieldSchemaValidationSettings to import is found
    */
    static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider): any;
    /**
    * Create a new {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/api_shield_schema_validation_settings cloudflare_api_shield_schema_validation_settings} Data Source
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options DataCloudflareApiShieldSchemaValidationSettingsConfig = {}
    */
    constructor(scope: Construct, id: string, config?: DataCloudflareApiShieldSchemaValidationSettingsConfig);
    get id(): any;
    get validationDefaultMitigationAction(): any;
    get validationOverrideMitigationAction(): any;
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
