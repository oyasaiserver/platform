import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface UniversalSslSettingConfig extends cdktf.TerraformMetaArguments {
    /**
    * Disabling Universal SSL removes any currently active Universal SSL certificates for your zone from the edge and prevents any future Universal SSL certificates from being ordered. If there are no advanced certificates or custom certificates uploaded for the domain, visitors will be unable to access the domain over HTTPS.
    *
    * By disabling Universal SSL, you understand that the following Cloudflare settings and preferences will result in visitors being unable to visit your domain unless you have uploaded a custom certificate or purchased an advanced certificate.
    *
    * * HSTS
    * * Always Use HTTPS
    * * Opportunistic Encryption
    * * Onion Routing
    * * Any Page Rules redirecting traffic to HTTPS
    *
    * Similarly, any HTTP redirect to HTTPS at the origin while the Cloudflare proxy is enabled will result in users being unable to visit your site without a valid certificate at Cloudflare's edge.
    *
    * If you do not have a valid custom or advanced certificate at Cloudflare's edge and are unsure if any of the above Cloudflare settings are enabled, or if any HTTP redirects exist at your origin, we advise leaving Universal SSL enabled for your domain.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/universal_ssl_setting#enabled UniversalSslSetting#enabled}
    */
    readonly enabled?: boolean | cdktf.IResolvable;
    /**
    * Identifier.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/universal_ssl_setting#zone_id UniversalSslSetting#zone_id}
    */
    readonly zoneId: string;
}
/**
* Represents a {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/universal_ssl_setting cloudflare_universal_ssl_setting}
*/
export declare class UniversalSslSetting extends cdktf.TerraformResource {
    static readonly tfResourceType = "cloudflare_universal_ssl_setting";
    /**
    * Generates CDKTF code for importing a UniversalSslSetting resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the UniversalSslSetting to import
    * @param importFromId The id of the existing UniversalSslSetting that should be imported. Refer to the {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/universal_ssl_setting#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the UniversalSslSetting to import is found
    */
    static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider): any;
    /**
    * Create a new {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/universal_ssl_setting cloudflare_universal_ssl_setting} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options UniversalSslSettingConfig
    */
    constructor(scope: Construct, id: string, config: UniversalSslSettingConfig);
    private _enabled?;
    get enabled(): boolean | cdktf.IResolvable;
    set enabled(value: boolean | cdktf.IResolvable);
    resetEnabled(): void;
    get enabledInput(): any;
    get id(): any;
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
