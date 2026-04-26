import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface AuthenticatedOriginPullsCertificateConfig extends cdktf.TerraformMetaArguments {
    /**
    * The zone's leaf certificate.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/authenticated_origin_pulls_certificate#certificate AuthenticatedOriginPullsCertificate#certificate}
    */
    readonly certificate: string;
    /**
    * The zone's private key.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/authenticated_origin_pulls_certificate#private_key AuthenticatedOriginPullsCertificate#private_key}
    */
    readonly privateKey: string;
    /**
    * Identifier.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/authenticated_origin_pulls_certificate#zone_id AuthenticatedOriginPullsCertificate#zone_id}
    */
    readonly zoneId: string;
}
/**
* Represents a {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/authenticated_origin_pulls_certificate cloudflare_authenticated_origin_pulls_certificate}
*/
export declare class AuthenticatedOriginPullsCertificate extends cdktf.TerraformResource {
    static readonly tfResourceType = "cloudflare_authenticated_origin_pulls_certificate";
    /**
    * Generates CDKTF code for importing a AuthenticatedOriginPullsCertificate resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the AuthenticatedOriginPullsCertificate to import
    * @param importFromId The id of the existing AuthenticatedOriginPullsCertificate that should be imported. Refer to the {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/authenticated_origin_pulls_certificate#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the AuthenticatedOriginPullsCertificate to import is found
    */
    static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider): any;
    /**
    * Create a new {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/authenticated_origin_pulls_certificate cloudflare_authenticated_origin_pulls_certificate} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options AuthenticatedOriginPullsCertificateConfig
    */
    constructor(scope: Construct, id: string, config: AuthenticatedOriginPullsCertificateConfig);
    private _certificate?;
    get certificate(): string;
    set certificate(value: string);
    get certificateInput(): string;
    get certificateId(): any;
    get enabled(): any;
    get expiresOn(): any;
    get id(): any;
    get issuer(): any;
    private _privateKey?;
    get privateKey(): string;
    set privateKey(value: string);
    get privateKeyInput(): string;
    get serialNumber(): any;
    get signature(): any;
    get status(): any;
    get uploadedOn(): any;
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
