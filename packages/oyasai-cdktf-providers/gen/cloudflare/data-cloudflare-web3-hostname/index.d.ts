import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface DataCloudflareWeb3HostnameConfig extends cdktf.TerraformMetaArguments {
    /**
    * Specify the identifier of the hostname.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/web3_hostname#identifier DataCloudflareWeb3Hostname#identifier}
    */
    readonly identifier: string;
    /**
    * Specify the identifier of the hostname.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/web3_hostname#zone_id DataCloudflareWeb3Hostname#zone_id}
    */
    readonly zoneId?: string;
}
/**
* Represents a {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/web3_hostname cloudflare_web3_hostname}
*/
export declare class DataCloudflareWeb3Hostname extends cdktf.TerraformDataSource {
    static readonly tfResourceType = "cloudflare_web3_hostname";
    /**
    * Generates CDKTF code for importing a DataCloudflareWeb3Hostname resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the DataCloudflareWeb3Hostname to import
    * @param importFromId The id of the existing DataCloudflareWeb3Hostname that should be imported. Refer to the {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/web3_hostname#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the DataCloudflareWeb3Hostname to import is found
    */
    static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider): any;
    /**
    * Create a new {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/web3_hostname cloudflare_web3_hostname} Data Source
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options DataCloudflareWeb3HostnameConfig
    */
    constructor(scope: Construct, id: string, config: DataCloudflareWeb3HostnameConfig);
    get createdOn(): any;
    get description(): any;
    get dnslink(): any;
    get id(): any;
    private _identifier?;
    get identifier(): string;
    set identifier(value: string);
    get identifierInput(): string;
    get modifiedOn(): any;
    get name(): any;
    get status(): any;
    get target(): any;
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
