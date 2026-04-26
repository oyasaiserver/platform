import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface DataCloudflareAuthenticatedOriginPullsConfig extends cdktf.TerraformMetaArguments {
    /**
    * The hostname on the origin for which the client certificate uploaded will be used.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/authenticated_origin_pulls#hostname DataCloudflareAuthenticatedOriginPulls#hostname}
    */
    readonly hostname: string;
    /**
    * Identifier.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/authenticated_origin_pulls#zone_id DataCloudflareAuthenticatedOriginPulls#zone_id}
    */
    readonly zoneId: string;
}
/**
* Represents a {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/authenticated_origin_pulls cloudflare_authenticated_origin_pulls}
*/
export declare class DataCloudflareAuthenticatedOriginPulls extends cdktf.TerraformDataSource {
    static readonly tfResourceType = "cloudflare_authenticated_origin_pulls";
    /**
    * Generates CDKTF code for importing a DataCloudflareAuthenticatedOriginPulls resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the DataCloudflareAuthenticatedOriginPulls to import
    * @param importFromId The id of the existing DataCloudflareAuthenticatedOriginPulls that should be imported. Refer to the {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/authenticated_origin_pulls#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the DataCloudflareAuthenticatedOriginPulls to import is found
    */
    static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider): any;
    /**
    * Create a new {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/authenticated_origin_pulls cloudflare_authenticated_origin_pulls} Data Source
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options DataCloudflareAuthenticatedOriginPullsConfig
    */
    constructor(scope: Construct, id: string, config: DataCloudflareAuthenticatedOriginPullsConfig);
    get certId(): any;
    get certStatus(): any;
    get certUpdatedAt(): any;
    get certUploadedOn(): any;
    get certificate(): any;
    get createdAt(): any;
    get enabled(): any;
    get expiresOn(): any;
    private _hostname?;
    get hostname(): string;
    set hostname(value: string);
    get hostnameInput(): string;
    get issuer(): any;
    get serialNumber(): any;
    get signature(): any;
    get status(): any;
    get updatedAt(): any;
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
