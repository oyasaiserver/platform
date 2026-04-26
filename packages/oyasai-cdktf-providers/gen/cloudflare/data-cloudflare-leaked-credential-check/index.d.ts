import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface DataCloudflareLeakedCredentialCheckConfig extends cdktf.TerraformMetaArguments {
    /**
    * Defines an identifier.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/leaked_credential_check#zone_id DataCloudflareLeakedCredentialCheck#zone_id}
    */
    readonly zoneId?: string;
}
/**
* Represents a {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/leaked_credential_check cloudflare_leaked_credential_check}
*/
export declare class DataCloudflareLeakedCredentialCheck extends cdktf.TerraformDataSource {
    static readonly tfResourceType = "cloudflare_leaked_credential_check";
    /**
    * Generates CDKTF code for importing a DataCloudflareLeakedCredentialCheck resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the DataCloudflareLeakedCredentialCheck to import
    * @param importFromId The id of the existing DataCloudflareLeakedCredentialCheck that should be imported. Refer to the {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/leaked_credential_check#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the DataCloudflareLeakedCredentialCheck to import is found
    */
    static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider): any;
    /**
    * Create a new {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/leaked_credential_check cloudflare_leaked_credential_check} Data Source
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options DataCloudflareLeakedCredentialCheckConfig = {}
    */
    constructor(scope: Construct, id: string, config?: DataCloudflareLeakedCredentialCheckConfig);
    get enabled(): any;
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
