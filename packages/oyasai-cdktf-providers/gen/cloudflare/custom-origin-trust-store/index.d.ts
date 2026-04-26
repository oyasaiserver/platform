import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface CustomOriginTrustStoreConfig extends cdktf.TerraformMetaArguments {
    /**
    * The zone's SSL certificate or certificate and the intermediate(s).
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/custom_origin_trust_store#certificate CustomOriginTrustStore#certificate}
    */
    readonly certificate: string;
    /**
    * Identifier.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/custom_origin_trust_store#zone_id CustomOriginTrustStore#zone_id}
    */
    readonly zoneId?: string;
}
/**
* Represents a {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/custom_origin_trust_store cloudflare_custom_origin_trust_store}
*/
export declare class CustomOriginTrustStore extends cdktf.TerraformResource {
    static readonly tfResourceType = "cloudflare_custom_origin_trust_store";
    /**
    * Generates CDKTF code for importing a CustomOriginTrustStore resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the CustomOriginTrustStore to import
    * @param importFromId The id of the existing CustomOriginTrustStore that should be imported. Refer to the {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/custom_origin_trust_store#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the CustomOriginTrustStore to import is found
    */
    static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider): any;
    /**
    * Create a new {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/custom_origin_trust_store cloudflare_custom_origin_trust_store} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options CustomOriginTrustStoreConfig
    */
    constructor(scope: Construct, id: string, config: CustomOriginTrustStoreConfig);
    private _certificate?;
    get certificate(): string;
    set certificate(value: string);
    get certificateInput(): string;
    get expiresOn(): any;
    get id(): any;
    get issuer(): any;
    get signature(): any;
    get status(): any;
    get updatedAt(): any;
    get uploadedOn(): any;
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
