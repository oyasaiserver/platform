import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface HostnameTlsSettingConfig extends cdktf.TerraformMetaArguments {
    /**
    * The hostname for which the tls settings are set.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/hostname_tls_setting#hostname HostnameTlsSetting#hostname}
    */
    readonly hostname: string;
    /**
    * The TLS Setting name. The value type depends on the setting:
    * - `ciphers`: value is an array of cipher suite strings (e.g., `["ECDHE-RSA-AES128-GCM-SHA256", "AES128-GCM-SHA256"]`)
    * - `min_tls_version`: value is a TLS version string (`"1.0"`, `"1.1"`, `"1.2"`, or `"1.3"`)
    * - `http2`: value is `"on"` or `"off"`
    * Available values: "ciphers", "min_tls_version", "http2".
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/hostname_tls_setting#setting_id HostnameTlsSetting#setting_id}
    */
    readonly settingId: string;
    /**
    * The TLS setting value. The type depends on the `setting_id` used in the request path:
    * - `ciphers`: an array of allowed cipher suite strings in BoringSSL format (e.g., `["ECDHE-RSA-AES128-GCM-SHA256", "AES128-GCM-SHA256"]`)
    * - `min_tls_version`: a string indicating the minimum TLS version — one of `"1.0"`, `"1.1"`, `"1.2"`, or `"1.3"` (e.g., `"1.2"`)
    * - `http2`: a string indicating whether HTTP/2 is enabled — `"on"` or `"off"` (e.g., `"on"`)
    * Available values: "1.0", "1.1", "1.2", "1.3", "on", "off".
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/hostname_tls_setting#value HostnameTlsSetting#value}
    */
    readonly value: {
        [key: string]: any;
    };
    /**
    * Identifier.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/hostname_tls_setting#zone_id HostnameTlsSetting#zone_id}
    */
    readonly zoneId?: string;
}
/**
* Represents a {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/hostname_tls_setting cloudflare_hostname_tls_setting}
*/
export declare class HostnameTlsSetting extends cdktf.TerraformResource {
    static readonly tfResourceType = "cloudflare_hostname_tls_setting";
    /**
    * Generates CDKTF code for importing a HostnameTlsSetting resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the HostnameTlsSetting to import
    * @param importFromId The id of the existing HostnameTlsSetting that should be imported. Refer to the {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/hostname_tls_setting#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the HostnameTlsSetting to import is found
    */
    static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider): any;
    /**
    * Create a new {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/hostname_tls_setting cloudflare_hostname_tls_setting} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options HostnameTlsSettingConfig
    */
    constructor(scope: Construct, id: string, config: HostnameTlsSettingConfig);
    get createdAt(): any;
    private _hostname?;
    get hostname(): string;
    set hostname(value: string);
    get hostnameInput(): string;
    get id(): any;
    private _settingId?;
    get settingId(): string;
    set settingId(value: string);
    get settingIdInput(): string;
    get status(): any;
    get updatedAt(): any;
    private _value?;
    get value(): {
        [key: string]: any;
    };
    set value(value: {
        [key: string]: any;
    });
    get valueInput(): {
        [key: string]: any;
    };
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
