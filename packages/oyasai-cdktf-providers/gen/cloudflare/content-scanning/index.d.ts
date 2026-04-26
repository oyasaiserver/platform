import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface ContentScanningConfig extends cdktf.TerraformMetaArguments {
    /**
    * The status value for Content Scanning.
    * Available values: "enabled", "disabled".
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/content_scanning#value ContentScanning#value}
    */
    readonly value: string;
    /**
    * Defines an identifier.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/content_scanning#zone_id ContentScanning#zone_id}
    */
    readonly zoneId?: string;
}
/**
* Represents a {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/content_scanning cloudflare_content_scanning}
*/
export declare class ContentScanning extends cdktf.TerraformResource {
    static readonly tfResourceType = "cloudflare_content_scanning";
    /**
    * Generates CDKTF code for importing a ContentScanning resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the ContentScanning to import
    * @param importFromId The id of the existing ContentScanning that should be imported. Refer to the {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/content_scanning#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the ContentScanning to import is found
    */
    static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider): any;
    /**
    * Create a new {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/content_scanning cloudflare_content_scanning} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options ContentScanningConfig
    */
    constructor(scope: Construct, id: string, config: ContentScanningConfig);
    get modified(): any;
    private _value?;
    get value(): string;
    set value(value: string);
    get valueInput(): string;
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
