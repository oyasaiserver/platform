import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface DataCloudflareTotalTlsConfig extends cdktf.TerraformMetaArguments {
    /**
    * Identifier.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/total_tls#zone_id DataCloudflareTotalTls#zone_id}
    */
    readonly zoneId?: string;
}
/**
* Represents a {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/total_tls cloudflare_total_tls}
*/
export declare class DataCloudflareTotalTls extends cdktf.TerraformDataSource {
    static readonly tfResourceType = "cloudflare_total_tls";
    /**
    * Generates CDKTF code for importing a DataCloudflareTotalTls resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the DataCloudflareTotalTls to import
    * @param importFromId The id of the existing DataCloudflareTotalTls that should be imported. Refer to the {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/total_tls#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the DataCloudflareTotalTls to import is found
    */
    static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider): any;
    /**
    * Create a new {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/total_tls cloudflare_total_tls} Data Source
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options DataCloudflareTotalTlsConfig = {}
    */
    constructor(scope: Construct, id: string, config?: DataCloudflareTotalTlsConfig);
    get certificateAuthority(): any;
    get enabled(): any;
    get id(): any;
    get validityPeriod(): any;
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
