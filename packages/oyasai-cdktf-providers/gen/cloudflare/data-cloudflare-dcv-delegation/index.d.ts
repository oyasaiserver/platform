import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface DataCloudflareDcvDelegationConfig extends cdktf.TerraformMetaArguments {
    /**
    * Identifier.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/dcv_delegation#zone_id DataCloudflareDcvDelegation#zone_id}
    */
    readonly zoneId?: string;
}
/**
* Represents a {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/dcv_delegation cloudflare_dcv_delegation}
*/
export declare class DataCloudflareDcvDelegation extends cdktf.TerraformDataSource {
    static readonly tfResourceType = "cloudflare_dcv_delegation";
    /**
    * Generates CDKTF code for importing a DataCloudflareDcvDelegation resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the DataCloudflareDcvDelegation to import
    * @param importFromId The id of the existing DataCloudflareDcvDelegation that should be imported. Refer to the {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/dcv_delegation#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the DataCloudflareDcvDelegation to import is found
    */
    static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider): any;
    /**
    * Create a new {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/dcv_delegation cloudflare_dcv_delegation} Data Source
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options DataCloudflareDcvDelegationConfig = {}
    */
    constructor(scope: Construct, id: string, config?: DataCloudflareDcvDelegationConfig);
    get uuid(): any;
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
