import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface DataCloudflareZoneDnssecConfig extends cdktf.TerraformMetaArguments {
    /**
    * Identifier.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/zone_dnssec#zone_id DataCloudflareZoneDnssec#zone_id}
    */
    readonly zoneId?: string;
}
/**
* Represents a {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/zone_dnssec cloudflare_zone_dnssec}
*/
export declare class DataCloudflareZoneDnssec extends cdktf.TerraformDataSource {
    static readonly tfResourceType = "cloudflare_zone_dnssec";
    /**
    * Generates CDKTF code for importing a DataCloudflareZoneDnssec resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the DataCloudflareZoneDnssec to import
    * @param importFromId The id of the existing DataCloudflareZoneDnssec that should be imported. Refer to the {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/zone_dnssec#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the DataCloudflareZoneDnssec to import is found
    */
    static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider): any;
    /**
    * Create a new {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/zone_dnssec cloudflare_zone_dnssec} Data Source
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options DataCloudflareZoneDnssecConfig = {}
    */
    constructor(scope: Construct, id: string, config?: DataCloudflareZoneDnssecConfig);
    get algorithm(): any;
    get digest(): any;
    get digestAlgorithm(): any;
    get digestType(): any;
    get dnssecMultiSigner(): any;
    get dnssecPresigned(): any;
    get dnssecUseNsec3(): any;
    get ds(): any;
    get flags(): any;
    get id(): any;
    get keyTag(): any;
    get keyType(): any;
    get modifiedOn(): any;
    get publicKey(): any;
    get status(): any;
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
