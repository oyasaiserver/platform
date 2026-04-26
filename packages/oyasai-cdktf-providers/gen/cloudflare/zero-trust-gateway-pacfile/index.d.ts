import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface ZeroTrustGatewayPacfileConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/zero_trust_gateway_pacfile#account_id ZeroTrustGatewayPacfile#account_id}
    */
    readonly accountId?: string;
    /**
    * Actual contents of the PAC file
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/zero_trust_gateway_pacfile#contents ZeroTrustGatewayPacfile#contents}
    */
    readonly contents: string;
    /**
    * Detailed description of the PAC file.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/zero_trust_gateway_pacfile#description ZeroTrustGatewayPacfile#description}
    */
    readonly description?: string;
    /**
    * Name of the PAC file.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/zero_trust_gateway_pacfile#name ZeroTrustGatewayPacfile#name}
    */
    readonly name: string;
    /**
    * URL-friendly version of the PAC file name. If not provided, it will be auto-generated
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/zero_trust_gateway_pacfile#slug ZeroTrustGatewayPacfile#slug}
    */
    readonly slug?: string;
}
/**
* Represents a {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/zero_trust_gateway_pacfile cloudflare_zero_trust_gateway_pacfile}
*/
export declare class ZeroTrustGatewayPacfile extends cdktf.TerraformResource {
    static readonly tfResourceType = "cloudflare_zero_trust_gateway_pacfile";
    /**
    * Generates CDKTF code for importing a ZeroTrustGatewayPacfile resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the ZeroTrustGatewayPacfile to import
    * @param importFromId The id of the existing ZeroTrustGatewayPacfile that should be imported. Refer to the {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/zero_trust_gateway_pacfile#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the ZeroTrustGatewayPacfile to import is found
    */
    static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider): any;
    /**
    * Create a new {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/zero_trust_gateway_pacfile cloudflare_zero_trust_gateway_pacfile} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options ZeroTrustGatewayPacfileConfig
    */
    constructor(scope: Construct, id: string, config: ZeroTrustGatewayPacfileConfig);
    private _accountId?;
    get accountId(): string;
    set accountId(value: string);
    resetAccountId(): void;
    get accountIdInput(): string;
    private _contents?;
    get contents(): string;
    set contents(value: string);
    get contentsInput(): string;
    get createdAt(): any;
    private _description?;
    get description(): string;
    set description(value: string);
    resetDescription(): void;
    get descriptionInput(): string;
    get id(): any;
    private _name?;
    get name(): string;
    set name(value: string);
    get nameInput(): string;
    private _slug?;
    get slug(): string;
    set slug(value: string);
    resetSlug(): void;
    get slugInput(): string;
    get updatedAt(): any;
    get url(): any;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
    protected synthesizeHclAttributes(): {
        [name: string]: any;
    };
}
