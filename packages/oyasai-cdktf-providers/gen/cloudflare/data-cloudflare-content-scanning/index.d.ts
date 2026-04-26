import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface DataCloudflareContentScanningConfig extends cdktf.TerraformMetaArguments {
    /**
    * Defines an identifier.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/content_scanning#zone_id DataCloudflareContentScanning#zone_id}
    */
    readonly zoneId?: string;
}
/**
* Represents a {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/content_scanning cloudflare_content_scanning}
*/
export declare class DataCloudflareContentScanning extends cdktf.TerraformDataSource {
    static readonly tfResourceType = "cloudflare_content_scanning";
    /**
    * Generates CDKTF code for importing a DataCloudflareContentScanning resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the DataCloudflareContentScanning to import
    * @param importFromId The id of the existing DataCloudflareContentScanning that should be imported. Refer to the {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/content_scanning#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the DataCloudflareContentScanning to import is found
    */
    static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider): any;
    /**
    * Create a new {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/content_scanning cloudflare_content_scanning} Data Source
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options DataCloudflareContentScanningConfig = {}
    */
    constructor(scope: Construct, id: string, config?: DataCloudflareContentScanningConfig);
    get modified(): any;
    get value(): any;
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
