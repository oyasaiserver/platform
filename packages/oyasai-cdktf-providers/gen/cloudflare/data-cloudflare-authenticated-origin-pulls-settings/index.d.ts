import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface DataCloudflareAuthenticatedOriginPullsSettingsConfig extends cdktf.TerraformMetaArguments {
    /**
    * Identifier.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/authenticated_origin_pulls_settings#zone_id DataCloudflareAuthenticatedOriginPullsSettings#zone_id}
    */
    readonly zoneId?: string;
}
/**
* Represents a {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/authenticated_origin_pulls_settings cloudflare_authenticated_origin_pulls_settings}
*/
export declare class DataCloudflareAuthenticatedOriginPullsSettings extends cdktf.TerraformDataSource {
    static readonly tfResourceType = "cloudflare_authenticated_origin_pulls_settings";
    /**
    * Generates CDKTF code for importing a DataCloudflareAuthenticatedOriginPullsSettings resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the DataCloudflareAuthenticatedOriginPullsSettings to import
    * @param importFromId The id of the existing DataCloudflareAuthenticatedOriginPullsSettings that should be imported. Refer to the {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/authenticated_origin_pulls_settings#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the DataCloudflareAuthenticatedOriginPullsSettings to import is found
    */
    static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider): any;
    /**
    * Create a new {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/authenticated_origin_pulls_settings cloudflare_authenticated_origin_pulls_settings} Data Source
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options DataCloudflareAuthenticatedOriginPullsSettingsConfig = {}
    */
    constructor(scope: Construct, id: string, config?: DataCloudflareAuthenticatedOriginPullsSettingsConfig);
    get enabled(): any;
    get id(): any;
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
