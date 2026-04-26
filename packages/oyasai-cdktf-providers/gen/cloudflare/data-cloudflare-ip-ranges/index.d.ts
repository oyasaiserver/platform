import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface DataCloudflareIpRangesConfig extends cdktf.TerraformMetaArguments {
    /**
    * Specified as `jdcloud` to list IPs used by JD Cloud data centers.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/ip_ranges#networks DataCloudflareIpRanges#networks}
    */
    readonly networks?: string;
}
/**
* Represents a {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/ip_ranges cloudflare_ip_ranges}
*/
export declare class DataCloudflareIpRanges extends cdktf.TerraformDataSource {
    static readonly tfResourceType = "cloudflare_ip_ranges";
    /**
    * Generates CDKTF code for importing a DataCloudflareIpRanges resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the DataCloudflareIpRanges to import
    * @param importFromId The id of the existing DataCloudflareIpRanges that should be imported. Refer to the {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/ip_ranges#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the DataCloudflareIpRanges to import is found
    */
    static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider): any;
    /**
    * Create a new {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/ip_ranges cloudflare_ip_ranges} Data Source
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options DataCloudflareIpRangesConfig = {}
    */
    constructor(scope: Construct, id: string, config?: DataCloudflareIpRangesConfig);
    get etag(): any;
    get ipv4Cidrs(): any;
    get ipv6Cidrs(): any;
    get jdcloudCidrs(): any;
    private _networks?;
    get networks(): string;
    set networks(value: string);
    resetNetworks(): void;
    get networksInput(): string;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
    protected synthesizeHclAttributes(): {
        [name: string]: any;
    };
}
