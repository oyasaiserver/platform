import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface TotalTlsConfig extends cdktf.TerraformMetaArguments {
    /**
    * The Certificate Authority that Total TLS certificates will be issued through.
    * Available values: "google", "lets_encrypt", "ssl_com".
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/total_tls#certificate_authority TotalTls#certificate_authority}
    */
    readonly certificateAuthority?: string;
    /**
    * If enabled, Total TLS will order a hostname specific TLS certificate for any proxied A, AAAA, or CNAME record in your zone.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/total_tls#enabled TotalTls#enabled}
    */
    readonly enabled: boolean | cdktf.IResolvable;
    /**
    * Identifier.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/total_tls#zone_id TotalTls#zone_id}
    */
    readonly zoneId: string;
}
/**
* Represents a {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/total_tls cloudflare_total_tls}
*/
export declare class TotalTls extends cdktf.TerraformResource {
    static readonly tfResourceType = "cloudflare_total_tls";
    /**
    * Generates CDKTF code for importing a TotalTls resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the TotalTls to import
    * @param importFromId The id of the existing TotalTls that should be imported. Refer to the {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/total_tls#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the TotalTls to import is found
    */
    static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider): any;
    /**
    * Create a new {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/total_tls cloudflare_total_tls} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options TotalTlsConfig
    */
    constructor(scope: Construct, id: string, config: TotalTlsConfig);
    private _certificateAuthority?;
    get certificateAuthority(): string;
    set certificateAuthority(value: string);
    resetCertificateAuthority(): void;
    get certificateAuthorityInput(): string;
    private _enabled?;
    get enabled(): boolean | cdktf.IResolvable;
    set enabled(value: boolean | cdktf.IResolvable);
    get enabledInput(): any;
    get id(): any;
    get validityPeriod(): any;
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
