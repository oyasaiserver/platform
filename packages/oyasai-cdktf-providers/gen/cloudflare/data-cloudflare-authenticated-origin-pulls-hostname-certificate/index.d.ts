import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface DataCloudflareAuthenticatedOriginPullsHostnameCertificateConfig extends cdktf.TerraformMetaArguments {
    /**
    * Identifier.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/authenticated_origin_pulls_hostname_certificate#certificate_id DataCloudflareAuthenticatedOriginPullsHostnameCertificate#certificate_id}
    */
    readonly certificateId: string;
    /**
    * Identifier.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/authenticated_origin_pulls_hostname_certificate#zone_id DataCloudflareAuthenticatedOriginPullsHostnameCertificate#zone_id}
    */
    readonly zoneId: string;
}
/**
* Represents a {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/authenticated_origin_pulls_hostname_certificate cloudflare_authenticated_origin_pulls_hostname_certificate}
*/
export declare class DataCloudflareAuthenticatedOriginPullsHostnameCertificate extends cdktf.TerraformDataSource {
    static readonly tfResourceType = "cloudflare_authenticated_origin_pulls_hostname_certificate";
    /**
    * Generates CDKTF code for importing a DataCloudflareAuthenticatedOriginPullsHostnameCertificate resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the DataCloudflareAuthenticatedOriginPullsHostnameCertificate to import
    * @param importFromId The id of the existing DataCloudflareAuthenticatedOriginPullsHostnameCertificate that should be imported. Refer to the {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/authenticated_origin_pulls_hostname_certificate#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the DataCloudflareAuthenticatedOriginPullsHostnameCertificate to import is found
    */
    static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider): any;
    /**
    * Create a new {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/authenticated_origin_pulls_hostname_certificate cloudflare_authenticated_origin_pulls_hostname_certificate} Data Source
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options DataCloudflareAuthenticatedOriginPullsHostnameCertificateConfig
    */
    constructor(scope: Construct, id: string, config: DataCloudflareAuthenticatedOriginPullsHostnameCertificateConfig);
    get certificate(): any;
    private _certificateId?;
    get certificateId(): string;
    set certificateId(value: string);
    get certificateIdInput(): string;
    get expiresOn(): any;
    get id(): any;
    get issuer(): any;
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
