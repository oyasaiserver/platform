import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface RegistrarDomainConfig extends cdktf.TerraformMetaArguments {
    /**
    * Identifier
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/registrar_domain#account_id RegistrarDomain#account_id}
    */
    readonly accountId?: string;
    /**
    * Auto-renew controls whether subscription is automatically renewed upon domain expiration.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/registrar_domain#auto_renew RegistrarDomain#auto_renew}
    */
    readonly autoRenew?: boolean | cdktf.IResolvable;
    /**
    * Fully qualified domain name (FQDN) including the extension
    * (e.g., `example.com`, `mybrand.app`). The domain name uniquely
    * identifies a registration — the same domain cannot be registered
    * twice, making it a natural idempotency key for registration requests.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/registrar_domain#domain_name RegistrarDomain#domain_name}
    */
    readonly domainName: string;
    /**
    * Shows whether a registrar lock is in place for a domain.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/registrar_domain#locked RegistrarDomain#locked}
    */
    readonly locked?: boolean | cdktf.IResolvable;
    /**
    * Privacy option controls redacting WHOIS information.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/registrar_domain#privacy RegistrarDomain#privacy}
    */
    readonly privacy?: boolean | cdktf.IResolvable;
}
/**
* Represents a {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/registrar_domain cloudflare_registrar_domain}
*/
export declare class RegistrarDomain extends cdktf.TerraformResource {
    static readonly tfResourceType = "cloudflare_registrar_domain";
    /**
    * Generates CDKTF code for importing a RegistrarDomain resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the RegistrarDomain to import
    * @param importFromId The id of the existing RegistrarDomain that should be imported. Refer to the {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/registrar_domain#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the RegistrarDomain to import is found
    */
    static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider): any;
    /**
    * Create a new {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/registrar_domain cloudflare_registrar_domain} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options RegistrarDomainConfig
    */
    constructor(scope: Construct, id: string, config: RegistrarDomainConfig);
    private _accountId?;
    get accountId(): string;
    set accountId(value: string);
    resetAccountId(): void;
    get accountIdInput(): string;
    private _autoRenew?;
    get autoRenew(): boolean | cdktf.IResolvable;
    set autoRenew(value: boolean | cdktf.IResolvable);
    resetAutoRenew(): void;
    get autoRenewInput(): any;
    private _domainName?;
    get domainName(): string;
    set domainName(value: string);
    get domainNameInput(): string;
    private _locked?;
    get locked(): boolean | cdktf.IResolvable;
    set locked(value: boolean | cdktf.IResolvable);
    resetLocked(): void;
    get lockedInput(): any;
    private _privacy?;
    get privacy(): boolean | cdktf.IResolvable;
    set privacy(value: boolean | cdktf.IResolvable);
    resetPrivacy(): void;
    get privacyInput(): any;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
    protected synthesizeHclAttributes(): {
        [name: string]: any;
    };
}
