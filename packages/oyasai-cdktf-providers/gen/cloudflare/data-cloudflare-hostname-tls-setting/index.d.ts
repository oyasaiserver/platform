import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface DataCloudflareHostnameTlsSettingConfig extends cdktf.TerraformMetaArguments {
    /**
    * The TLS Setting name. The value type depends on the setting:
    * - `ciphers`: value is an array of cipher suite strings (e.g., `["ECDHE-RSA-AES128-GCM-SHA256", "AES128-GCM-SHA256"]`)
    * - `min_tls_version`: value is a TLS version string (`"1.0"`, `"1.1"`, `"1.2"`, or `"1.3"`)
    * - `http2`: value is `"on"` or `"off"`
    * Available values: "ciphers", "min_tls_version", "http2".
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/hostname_tls_setting#setting_id DataCloudflareHostnameTlsSetting#setting_id}
    */
    readonly settingId: string;
    /**
    * Identifier.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/hostname_tls_setting#zone_id DataCloudflareHostnameTlsSetting#zone_id}
    */
    readonly zoneId?: string;
}
/**
* Represents a {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/hostname_tls_setting cloudflare_hostname_tls_setting}
*/
export declare class DataCloudflareHostnameTlsSetting extends cdktf.TerraformDataSource {
    static readonly tfResourceType = "cloudflare_hostname_tls_setting";
    /**
    * Generates CDKTF code for importing a DataCloudflareHostnameTlsSetting resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the DataCloudflareHostnameTlsSetting to import
    * @param importFromId The id of the existing DataCloudflareHostnameTlsSetting that should be imported. Refer to the {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/hostname_tls_setting#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the DataCloudflareHostnameTlsSetting to import is found
    */
    static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider): any;
    /**
    * Create a new {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/hostname_tls_setting cloudflare_hostname_tls_setting} Data Source
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options DataCloudflareHostnameTlsSettingConfig
    */
    constructor(scope: Construct, id: string, config: DataCloudflareHostnameTlsSettingConfig);
    get createdAt(): any;
    get hostname(): any;
    get id(): any;
    private _settingId?;
    get settingId(): string;
    set settingId(value: string);
    get settingIdInput(): string;
    get status(): any;
    get updatedAt(): any;
    get value(): any;
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
