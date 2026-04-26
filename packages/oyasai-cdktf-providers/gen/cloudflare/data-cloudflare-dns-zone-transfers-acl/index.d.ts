import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface DataCloudflareDnsZoneTransfersAclConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/dns_zone_transfers_acl#account_id DataCloudflareDnsZoneTransfersAcl#account_id}
    */
    readonly accountId?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/dns_zone_transfers_acl#acl_id DataCloudflareDnsZoneTransfersAcl#acl_id}
    */
    readonly aclId: string;
}
/**
* Represents a {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/dns_zone_transfers_acl cloudflare_dns_zone_transfers_acl}
*/
export declare class DataCloudflareDnsZoneTransfersAcl extends cdktf.TerraformDataSource {
    static readonly tfResourceType = "cloudflare_dns_zone_transfers_acl";
    /**
    * Generates CDKTF code for importing a DataCloudflareDnsZoneTransfersAcl resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the DataCloudflareDnsZoneTransfersAcl to import
    * @param importFromId The id of the existing DataCloudflareDnsZoneTransfersAcl that should be imported. Refer to the {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/dns_zone_transfers_acl#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the DataCloudflareDnsZoneTransfersAcl to import is found
    */
    static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider): any;
    /**
    * Create a new {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/dns_zone_transfers_acl cloudflare_dns_zone_transfers_acl} Data Source
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options DataCloudflareDnsZoneTransfersAclConfig
    */
    constructor(scope: Construct, id: string, config: DataCloudflareDnsZoneTransfersAclConfig);
    private _accountId?;
    get accountId(): string;
    set accountId(value: string);
    resetAccountId(): void;
    get accountIdInput(): string;
    private _aclId?;
    get aclId(): string;
    set aclId(value: string);
    get aclIdInput(): string;
    get id(): any;
    get ipRange(): any;
    get name(): any;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
    protected synthesizeHclAttributes(): {
        [name: string]: any;
    };
}
