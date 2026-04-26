import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface DataCloudflareCustomHostnameFallbackOriginConfig extends cdktf.TerraformMetaArguments {
    /**
    * Identifier.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/custom_hostname_fallback_origin#zone_id DataCloudflareCustomHostnameFallbackOrigin#zone_id}
    */
    readonly zoneId?: string;
}
/**
* Represents a {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/custom_hostname_fallback_origin cloudflare_custom_hostname_fallback_origin}
*/
export declare class DataCloudflareCustomHostnameFallbackOrigin extends cdktf.TerraformDataSource {
    static readonly tfResourceType = "cloudflare_custom_hostname_fallback_origin";
    /**
    * Generates CDKTF code for importing a DataCloudflareCustomHostnameFallbackOrigin resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the DataCloudflareCustomHostnameFallbackOrigin to import
    * @param importFromId The id of the existing DataCloudflareCustomHostnameFallbackOrigin that should be imported. Refer to the {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/custom_hostname_fallback_origin#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the DataCloudflareCustomHostnameFallbackOrigin to import is found
    */
    static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider): any;
    /**
    * Create a new {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/custom_hostname_fallback_origin cloudflare_custom_hostname_fallback_origin} Data Source
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options DataCloudflareCustomHostnameFallbackOriginConfig = {}
    */
    constructor(scope: Construct, id: string, config?: DataCloudflareCustomHostnameFallbackOriginConfig);
    get createdAt(): any;
    get errors(): any;
    get id(): any;
    get origin(): any;
    get status(): any;
    get updatedAt(): any;
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
