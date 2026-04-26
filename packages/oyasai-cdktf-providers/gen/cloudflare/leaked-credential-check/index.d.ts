import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface LeakedCredentialCheckConfig extends cdktf.TerraformMetaArguments {
    /**
    * Determines whether or not Leaked Credential Checks are enabled.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/leaked_credential_check#enabled LeakedCredentialCheck#enabled}
    */
    readonly enabled?: boolean | cdktf.IResolvable;
    /**
    * Defines an identifier.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/leaked_credential_check#zone_id LeakedCredentialCheck#zone_id}
    */
    readonly zoneId?: string;
}
/**
* Represents a {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/leaked_credential_check cloudflare_leaked_credential_check}
*/
export declare class LeakedCredentialCheck extends cdktf.TerraformResource {
    static readonly tfResourceType = "cloudflare_leaked_credential_check";
    /**
    * Generates CDKTF code for importing a LeakedCredentialCheck resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the LeakedCredentialCheck to import
    * @param importFromId The id of the existing LeakedCredentialCheck that should be imported. Refer to the {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/leaked_credential_check#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the LeakedCredentialCheck to import is found
    */
    static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider): any;
    /**
    * Create a new {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/leaked_credential_check cloudflare_leaked_credential_check} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options LeakedCredentialCheckConfig = {}
    */
    constructor(scope: Construct, id: string, config?: LeakedCredentialCheckConfig);
    private _enabled?;
    get enabled(): boolean | cdktf.IResolvable;
    set enabled(value: boolean | cdktf.IResolvable);
    resetEnabled(): void;
    get enabledInput(): any;
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
