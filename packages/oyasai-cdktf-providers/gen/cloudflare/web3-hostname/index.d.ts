import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface Web3HostnameConfig extends cdktf.TerraformMetaArguments {
    /**
    * Specify an optional description of the hostname.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/web3_hostname#description Web3Hostname#description}
    */
    readonly description?: string;
    /**
    * Specify the DNSLink value used if the target is ipfs.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/web3_hostname#dnslink Web3Hostname#dnslink}
    */
    readonly dnslink?: string;
    /**
    * Specify the hostname that points to the target gateway via CNAME.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/web3_hostname#name Web3Hostname#name}
    */
    readonly name: string;
    /**
    * Specify the target gateway of the hostname.
    * Available values: "ethereum", "ipfs", "ipfs_universal_path".
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/web3_hostname#target Web3Hostname#target}
    */
    readonly target: string;
    /**
    * Specify the identifier of the hostname.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/web3_hostname#zone_id Web3Hostname#zone_id}
    */
    readonly zoneId?: string;
}
/**
* Represents a {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/web3_hostname cloudflare_web3_hostname}
*/
export declare class Web3Hostname extends cdktf.TerraformResource {
    static readonly tfResourceType = "cloudflare_web3_hostname";
    /**
    * Generates CDKTF code for importing a Web3Hostname resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the Web3Hostname to import
    * @param importFromId The id of the existing Web3Hostname that should be imported. Refer to the {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/web3_hostname#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the Web3Hostname to import is found
    */
    static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider): any;
    /**
    * Create a new {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/web3_hostname cloudflare_web3_hostname} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options Web3HostnameConfig
    */
    constructor(scope: Construct, id: string, config: Web3HostnameConfig);
    get createdOn(): any;
    private _description?;
    get description(): string;
    set description(value: string);
    resetDescription(): void;
    get descriptionInput(): string;
    private _dnslink?;
    get dnslink(): string;
    set dnslink(value: string);
    resetDnslink(): void;
    get dnslinkInput(): string;
    get id(): any;
    get modifiedOn(): any;
    private _name?;
    get name(): string;
    set name(value: string);
    get nameInput(): string;
    get status(): any;
    private _target?;
    get target(): string;
    set target(value: string);
    get targetInput(): string;
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
