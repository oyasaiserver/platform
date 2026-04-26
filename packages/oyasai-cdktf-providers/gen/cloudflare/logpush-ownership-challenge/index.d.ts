import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface LogpushOwnershipChallengeConfig extends cdktf.TerraformMetaArguments {
    /**
    * The Account ID to use for this endpoint. Mutually exclusive with the Zone ID.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/logpush_ownership_challenge#account_id LogpushOwnershipChallenge#account_id}
    */
    readonly accountId?: string;
    /**
    * Uniquely identifies a resource (such as an s3 bucket) where data. will be pushed. Additional configuration parameters supported by the destination may be included.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/logpush_ownership_challenge#destination_conf LogpushOwnershipChallenge#destination_conf}
    */
    readonly destinationConf: string;
    /**
    * The Zone ID to use for this endpoint. Mutually exclusive with the Account ID.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/logpush_ownership_challenge#zone_id LogpushOwnershipChallenge#zone_id}
    */
    readonly zoneId?: string;
}
/**
* Represents a {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/logpush_ownership_challenge cloudflare_logpush_ownership_challenge}
*/
export declare class LogpushOwnershipChallenge extends cdktf.TerraformResource {
    static readonly tfResourceType = "cloudflare_logpush_ownership_challenge";
    /**
    * Generates CDKTF code for importing a LogpushOwnershipChallenge resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the LogpushOwnershipChallenge to import
    * @param importFromId The id of the existing LogpushOwnershipChallenge that should be imported. Refer to the {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/logpush_ownership_challenge#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the LogpushOwnershipChallenge to import is found
    */
    static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider): any;
    /**
    * Create a new {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/logpush_ownership_challenge cloudflare_logpush_ownership_challenge} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options LogpushOwnershipChallengeConfig
    */
    constructor(scope: Construct, id: string, config: LogpushOwnershipChallengeConfig);
    private _accountId?;
    get accountId(): string;
    set accountId(value: string);
    resetAccountId(): void;
    get accountIdInput(): string;
    private _destinationConf?;
    get destinationConf(): string;
    set destinationConf(value: string);
    get destinationConfInput(): string;
    get filename(): any;
    get message(): any;
    get valid(): any;
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
