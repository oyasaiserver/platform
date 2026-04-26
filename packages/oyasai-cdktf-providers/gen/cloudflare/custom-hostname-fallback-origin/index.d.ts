import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface CustomHostnameFallbackOriginConfig extends cdktf.TerraformMetaArguments {
    /**
    * Your origin hostname that requests to your custom hostnames will be sent to.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/custom_hostname_fallback_origin#origin CustomHostnameFallbackOrigin#origin}
    */
    readonly origin: string;
    /**
    * Identifier.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/custom_hostname_fallback_origin#zone_id CustomHostnameFallbackOrigin#zone_id}
    */
    readonly zoneId: string;
}
/**
* Represents a {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/custom_hostname_fallback_origin cloudflare_custom_hostname_fallback_origin}
*/
export declare class CustomHostnameFallbackOrigin extends cdktf.TerraformResource {
    static readonly tfResourceType = "cloudflare_custom_hostname_fallback_origin";
    /**
    * Generates CDKTF code for importing a CustomHostnameFallbackOrigin resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the CustomHostnameFallbackOrigin to import
    * @param importFromId The id of the existing CustomHostnameFallbackOrigin that should be imported. Refer to the {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/custom_hostname_fallback_origin#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the CustomHostnameFallbackOrigin to import is found
    */
    static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider): any;
    /**
    * Create a new {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/custom_hostname_fallback_origin cloudflare_custom_hostname_fallback_origin} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options CustomHostnameFallbackOriginConfig
    */
    constructor(scope: Construct, id: string, config: CustomHostnameFallbackOriginConfig);
    get createdAt(): any;
    get errors(): any;
    get id(): any;
    private _origin?;
    get origin(): string;
    set origin(value: string);
    get originInput(): string;
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
