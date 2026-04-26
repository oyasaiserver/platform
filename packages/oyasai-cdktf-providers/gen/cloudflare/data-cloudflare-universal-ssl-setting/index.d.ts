import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface DataCloudflareUniversalSslSettingConfig extends cdktf.TerraformMetaArguments {
    /**
    * Identifier.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/universal_ssl_setting#zone_id DataCloudflareUniversalSslSetting#zone_id}
    */
    readonly zoneId?: string;
}
/**
* Represents a {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/universal_ssl_setting cloudflare_universal_ssl_setting}
*/
export declare class DataCloudflareUniversalSslSetting extends cdktf.TerraformDataSource {
    static readonly tfResourceType = "cloudflare_universal_ssl_setting";
    /**
    * Generates CDKTF code for importing a DataCloudflareUniversalSslSetting resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the DataCloudflareUniversalSslSetting to import
    * @param importFromId The id of the existing DataCloudflareUniversalSslSetting that should be imported. Refer to the {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/universal_ssl_setting#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the DataCloudflareUniversalSslSetting to import is found
    */
    static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider): any;
    /**
    * Create a new {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/universal_ssl_setting cloudflare_universal_ssl_setting} Data Source
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options DataCloudflareUniversalSslSettingConfig = {}
    */
    constructor(scope: Construct, id: string, config?: DataCloudflareUniversalSslSettingConfig);
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
