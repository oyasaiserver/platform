import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface DataCloudflareBotnetFeedConfigAsnConfig extends cdktf.TerraformMetaArguments {
    /**
    * Identifier.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/botnet_feed_config_asn#account_id DataCloudflareBotnetFeedConfigAsn#account_id}
    */
    readonly accountId?: string;
}
/**
* Represents a {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/botnet_feed_config_asn cloudflare_botnet_feed_config_asn}
*/
export declare class DataCloudflareBotnetFeedConfigAsn extends cdktf.TerraformDataSource {
    static readonly tfResourceType = "cloudflare_botnet_feed_config_asn";
    /**
    * Generates CDKTF code for importing a DataCloudflareBotnetFeedConfigAsn resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the DataCloudflareBotnetFeedConfigAsn to import
    * @param importFromId The id of the existing DataCloudflareBotnetFeedConfigAsn that should be imported. Refer to the {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/botnet_feed_config_asn#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the DataCloudflareBotnetFeedConfigAsn to import is found
    */
    static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider): any;
    /**
    * Create a new {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/botnet_feed_config_asn cloudflare_botnet_feed_config_asn} Data Source
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options DataCloudflareBotnetFeedConfigAsnConfig = {}
    */
    constructor(scope: Construct, id: string, config?: DataCloudflareBotnetFeedConfigAsnConfig);
    private _accountId?;
    get accountId(): string;
    set accountId(value: string);
    resetAccountId(): void;
    get accountIdInput(): string;
    get asn(): any;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
    protected synthesizeHclAttributes(): {
        [name: string]: any;
    };
}
